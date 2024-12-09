"use client";

import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TimerDisplay } from "@/components/timer-display";
import { SlideshowInfo } from "@/components/slideshow-info";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SlideshowControls({
  isPlaying,
  interval,
  timeLeft,
  onStart,
  onPause,
  onStop,
  onIntervalChange,
}) {
  const formatTriggerValue = (value) => `${value}s`;

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={isPlaying ? onPause : onStart}
          className="h-8 w-8"
          title={isPlaying ? "Pause slideshow" : "Start slideshow"}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
          <span className="sr-only">
            {isPlaying ? "Pause slideshow" : "Start slideshow"}
          </span>
        </Button>

        {isPlaying && <TimerDisplay timeLeft={timeLeft} interval={interval} />}

        <div className="flex items-center gap-2">
          <Select
            value={interval.toString()}
            onValueChange={(value) => onIntervalChange(parseInt(value))}
          >
            <SelectTrigger className="w-[70px]">
              <SelectValue placeholder="Interval">
                {formatTriggerValue(interval)}
              </SelectValue>
            </SelectTrigger>
            <SelectContent align="end">
              <SelectItem value="5">5 seconds</SelectItem>
              <SelectItem value="10">10 seconds</SelectItem>
              <SelectItem value="15">15 seconds</SelectItem>
              <SelectItem value="20">20 seconds</SelectItem>
              <SelectItem value="25">25 seconds</SelectItem>
              <SelectItem value="30">30 seconds</SelectItem>
            </SelectContent>
          </Select>

          <SlideshowInfo />
        </div>
      </div>
    </Card>
  );
}
