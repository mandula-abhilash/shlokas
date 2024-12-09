"use client";

import { useState, useEffect } from "react";
import SlokaCard from "@/components/sloka-card";
import SearchBar from "@/components/search-bar";
import Navigation from "@/components/navigation";
import { useLanguage } from "@/components/language-provider";
import { useSearch } from "@/hooks/use-search";
import { SlideshowControls } from "@/components/slideshow-controls";
import { useSlideshow } from "@/hooks/use-slideshow";

export default function Home() {
  const [selectedSlokaIndex, setSelectedSlokaIndex] = useState(0);
  const { language } = useLanguage();
  const {
    searchQuery,
    setSearchQuery,
    filteredSlokas,
    isSearching,
    error,
    clearSearch,
  } = useSearch();
  const {
    isPlaying,
    timeLeft,
    interval,
    startSlideshow,
    stopSlideshow,
    updateInterval,
    getIsPlaying,
    startTimer,
  } = useSlideshow();

  const handleNext = () => {
    setSelectedSlokaIndex((prev) => {
      const nextIndex = prev < filteredSlokas.length - 1 ? prev + 1 : 0;
      return nextIndex;
    });
  };

  const handleStartSlideshow = () => {
    startSlideshow(handleNext);
  };

  const handleStopSlideshow = () => {
    stopSlideshow();
  };

  const handleIntervalChange = (newInterval) => {
    updateInterval(newInterval);
  };

  // Reset selected index when filtered results change
  useEffect(() => {
    setSelectedSlokaIndex(0);
  }, [filteredSlokas]);

  // start the timer for the next slide now that state and UI have updated.
  useEffect(() => {
    if (isPlaying && filteredSlokas.length > 0) {
      startTimer();
    }
  }, [isPlaying, selectedSlokaIndex, filteredSlokas.length, startTimer]);

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background">
      <Navigation />

      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 flex min-h-0 relative">
          <div className="hidden lg:flex w-[320px] flex-col border-r bg-card/50 h-full">
            <div className="p-4">
              <SearchBar
                query={searchQuery}
                setQuery={setSearchQuery}
                isSearching={isSearching}
                error={error}
                onClear={clearSearch}
              />
            </div>
            <div className="flex-1 overflow-y-auto px-4 pb-4">
              <div className="space-y-3">
                {filteredSlokas.length > 0 ? (
                  filteredSlokas.map((sloka, index) => (
                    <button
                      key={sloka.id}
                      onClick={() => setSelectedSlokaIndex(index)}
                      className="w-full text-left"
                    >
                      <SlokaCard
                        sloka={sloka}
                        language={language}
                        isPreview={true}
                        variant="compact"
                      />
                    </button>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-sm text-muted-foreground">
                      {error ||
                        "No shlokas found. Try a different search term."}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col overflow-hidden bg-background/50">
            <div className="lg:hidden p-4 border-b bg-card/50 backdrop-blur-sm">
              <SearchBar
                query={searchQuery}
                setQuery={setSearchQuery}
                isSearching={isSearching}
                error={error}
                onClear={clearSearch}
              />
            </div>

            <div className="flex-1 p-4 lg:p-4 overflow-y-auto">
              {filteredSlokas.length > 0 ? (
                <>
                  <div className="mb-4">
                    <SlideshowControls
                      isPlaying={isPlaying}
                      interval={interval}
                      timeLeft={timeLeft}
                      onStart={handleStartSlideshow}
                      onPause={handleStopSlideshow}
                      onStop={handleStopSlideshow}
                      onIntervalChange={handleIntervalChange}
                    />
                  </div>
                  <SlokaCard
                    sloka={filteredSlokas[selectedSlokaIndex]}
                    language={language}
                    isPreview={false}
                    variant="full"
                    total={filteredSlokas.length}
                    current={selectedSlokaIndex + 1}
                  />
                </>
              ) : (
                <div className="h-full flex items-center justify-center text-muted-foreground p-4 text-center">
                  <p>
                    {error || "No shlokas found. Try a different search term."}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
