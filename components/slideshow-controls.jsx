"use client";

import { Play, Pause, StopCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { TimerDisplay } from "@/components/timer-display";
import { SlideshowInfo } from "@/components/slideshow-info";

export function SlideshowControls({
  isPlaying,
  interval,
  timeLeft,
  onStart,
  onPause,
  onStop,
  onIntervalChange,
}) {
  return (
    <Card className="p-4 space-y-4">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2">
          {!isPlaying ? (
            <Button
              variant="outline"
              size="icon"
              onClick={onStart}
              className="h-8 w-8"
              title="Start slideshow"
            >
              <Play className="h-4 w-4" />
              <span className="sr-only">Start slideshow</span>
            </Button>
          ) : (
            <Button
              variant="outline"
              size="icon"
              onClick={onPause}
              className="h-8 w-8"
              title="Pause slideshow"
            >
              <Pause className="h-4 w-4" />
              <span className="sr-only">Pause slideshow</span>
            </Button>
          )}
          <Button
            variant="outline"
            size="icon"
            onClick={onStop}
            className="h-8 w-8"
            title="Stop slideshow"
          >
            <StopCircle className="h-4 w-4" />
            <span className="sr-only">Stop slideshow</span>
          </Button>
          <SlideshowInfo />
        </div>

        {isPlaying && <TimerDisplay timeLeft={timeLeft} interval={interval} />}

        <div className="flex items-center gap-4 min-w-[200px] flex-grow sm:flex-grow-0">
          <span className="text-sm text-muted-foreground whitespace-nowrap">
            Interval: {interval}s
          </span>
          <Slider
            value={[interval]}
            onValueChange={(value) => onIntervalChange(value[0])}
            min={5}
            max={30}
            step={5}
            className="w-32"
            aria-label="Slideshow interval"
          />
        </div>
      </div>
    </Card>
  );
}
