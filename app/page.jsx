"use client";

import { useState, useEffect } from "react";
import SlokaCard from "@/components/sloka-card";
import SearchBar from "@/components/search-bar";
import Navigation from "@/components/navigation";
import { useLanguage } from "@/components/language-provider";
import { useSearch } from "@/hooks/use-search";

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

  // Reset selected index when filtered results change
  useEffect(() => {
    setSelectedSlokaIndex(0);
  }, [filteredSlokas]);

  const handlePrevious = () => {
    setSelectedSlokaIndex((prev) =>
      prev > 0 ? prev - 1 : filteredSlokas.length - 1
    );
  };

  const handleNext = () => {
    setSelectedSlokaIndex((prev) =>
      prev < filteredSlokas.length - 1 ? prev + 1 : 0
    );
  };

  const handleSlokaClick = (index) => {
    setSelectedSlokaIndex(index);
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background">
      <Navigation />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* <header className="flex-shrink-0 text-center py-4">
          <div className="inline-flex items-center justify-center gap-3 mt-3 transition duration-300 hover:text-primary/70">
            <h1 className="text-3xl font-bold tracking-tight text-primary">
              Shlokas for Kids
            </h1>
          </div>
        </header> */}

        <div className="flex-1 flex min-h-0 relative">
          {/* Sidebar for desktop */}
          <div
            className={`
              hidden lg:flex
              w-[320px]
              flex-col
              border-r bg-card/50
              h-full
            `}
          >
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
                      onClick={() => handleSlokaClick(index)}
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

          {/* Main content area */}
          <div
            className={`
              flex-1 
              flex flex-col
              overflow-hidden 
              bg-background/50
            `}
          >
            {/* Mobile search */}
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
                <SlokaCard
                  sloka={filteredSlokas[selectedSlokaIndex]}
                  language={language}
                  isPreview={false}
                  variant="full"
                  onPrevious={handlePrevious}
                  onNext={handleNext}
                  total={filteredSlokas.length}
                  current={selectedSlokaIndex + 1}
                />
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
