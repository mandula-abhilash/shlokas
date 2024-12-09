import { useState, useEffect, useRef, useCallback } from "react";

export function useTimer({ initialTime, onComplete }) {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const timerRef = useRef(null);
  const onCompleteRef = useRef(onComplete);
  const isRunningRef = useRef(false);

  // Keep callback reference up to date
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const startTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    setTimeLeft(initialTime);
    isRunningRef.current = true;

    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (!isRunningRef.current) return prevTime;

        const newTime = Math.max(0, prevTime - 1);

        if (newTime === 0 && isRunningRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
          isRunningRef.current = false;
          onCompleteRef.current?.();
        }

        return newTime;
      });
    }, 1000);
  }, [initialTime]);

  const stopTimer = useCallback(() => {
    isRunningRef.current = false;
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    // Reset timeLeft so that next start sets it correctly
    setTimeLeft(initialTime);
  }, [initialTime]);

  const resetTimer = useCallback(() => {
    stopTimer();
    setTimeLeft(initialTime);
  }, [initialTime, stopTimer]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      isRunningRef.current = false;
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  // Update timeLeft when initialTime changes
  useEffect(() => {
    setTimeLeft(initialTime);
  }, [initialTime]);

  return {
    timeLeft,
    startTimer,
    stopTimer,
    resetTimer,
  };
}
