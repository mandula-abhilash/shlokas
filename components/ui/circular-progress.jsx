import * as React from "react";
import { cn } from "@/lib/utils";

export function CircularProgress({
  value,
  size = "default",
  children,
  className,
  ...props
}) {
  const sizeStyles = {
    xs: "h-6 w-6",
    sm: "h-8 w-8",
    default: "h-12 w-12",
    lg: "h-16 w-16",
  };

  const getRadius = (size) => {
    switch (size) {
      case "xs":
        return 10;
      case "sm":
        return 12;
      case "lg":
        return 28;
      default:
        return 20;
    }
  };

  const radius = getRadius(size);
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center",
        sizeStyles[size],
        className
      )}
      {...props}
    >
      <svg className="absolute h-full w-full -rotate-90">
        {/* Background circle */}
        <circle
          className="text-muted/20"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          r={radius}
          cx="50%"
          cy="50%"
        />
        {/* Progress circle */}
        <circle
          className="text-primary transition-all duration-300 ease-in-out"
          strokeWidth="2"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="none"
          r={radius}
          cx="50%"
          cy="50%"
        />
      </svg>
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        {children}
      </div>
    </div>
  );
}
