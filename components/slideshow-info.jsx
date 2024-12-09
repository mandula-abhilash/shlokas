"use client";

import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export function SlideshowInfo() {
  return (
    <div className="inline-flex items-center">
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 hover:bg-primary/10"
          >
            <Info className="h-4 w-4 text-muted-foreground" />
            <span className="sr-only">Slideshow Information</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          className="max-w-[300px] bg-background/95 backdrop-blur-sm p-4 text-sm"
        >
          <p className="leading-relaxed">
            The slideshow helps you pray and meditate without interruptions.
            After a set time, it automatically moves to the next shloka, so you
            can stay focused. You can also change how long it stays on each
            shloka to match your own reading speed.
          </p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
