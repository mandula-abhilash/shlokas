import { CircularProgress } from "@/components/ui/circular-progress";

export function TimerDisplay({ timeLeft, interval }) {
  const progress = ((interval - timeLeft) / interval) * 100;

  const getTimeDescription = () => {
    return `Next in ${timeLeft}s`;
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground/80">Next Shloka in</span>
      <CircularProgress value={progress} size="sm">
        <span className="text-[10px] font-medium">{timeLeft}s</span>
      </CircularProgress>
    </div>
  );
}
