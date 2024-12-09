import { useState, useCallback, useRef, useEffect } from "react";
import { useTimer } from "./use-timer";

export function useSlideshow() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [interval, setInterval] = useState(10);
  const onSlideChangeRef = useRef(null);
  const isPlayingRef = useRef(false);

  const getIsPlaying = useCallback(() => isPlayingRef.current, []);

  const { timeLeft, startTimer, stopTimer } = useTimer({
    initialTime: interval,
    onComplete: () => {
      if (onSlideChangeRef.current && isPlayingRef.current) {
        // Just change the slide here. Do not start the timer again here.
        onSlideChangeRef.current();
      }
    },
  });

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  const startSlideshow = useCallback(
    (callback) => {
      onSlideChangeRef.current = callback;
      setIsPlaying(true);
      // Start timer once when the slideshow begins
      startTimer();
    },
    [startTimer]
  );

  const stopSlideshow = useCallback(() => {
    setIsPlaying(false);
    stopTimer();
    onSlideChangeRef.current = null;
  }, [stopTimer]);

  const updateInterval = useCallback((newInterval) => {
    setInterval(newInterval);
  }, []);

  return {
    isPlaying,
    timeLeft,
    interval,
    startSlideshow,
    stopSlideshow,
    updateInterval,
    getIsPlaying,
    startTimer, // We'll need this in page.jsx
  };
}
