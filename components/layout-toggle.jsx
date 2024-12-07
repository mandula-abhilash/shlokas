'use client';

import { Button } from '@/components/ui/button';
import { LayoutGrid, LayoutList } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function LayoutToggle({ showDetails, onToggle }) {
  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 hover:bg-primary/10"
          onClick={onToggle}
        >
          {showDetails ? (
            <LayoutGrid className="h-4 w-4 text-primary" />
          ) : (
            <LayoutList className="h-4 w-4 text-primary" />
          )}
          <span className="sr-only text-sm">
            {showDetails ? 'Hide details' : 'Show details'}
          </span>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="bottom" className="bg-background/95 backdrop-blur-sm">
        <p>{showDetails ? 'Hide details' : 'Show details'}</p>
      </TooltipContent>
    </Tooltip>
  );
}