"use client";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "circular" | "rectangular" | "rounded";
  width?: string | number;
  height?: string | number;
  animation?: "pulse" | "wave" | false;
}

export default function Skeleton({
  className = "",
  variant = "text",
  width,
  height,
  animation = "pulse",
}: SkeletonProps) {
  const baseClasses = "bg-[hsl(var(--muted))] overflow-hidden";

  const variantClasses = {
    text: "rounded",
    circular: "rounded-full",
    rectangular: "rounded-none",
    rounded: "rounded-lg",
  };

  const animationClasses = animation === "pulse"
    ? "animate-pulse"
    : animation === "wave"
    ? "animate-shimmer"
    : "";

  const style: React.CSSProperties = {
    width: width ? (typeof width === "number" ? `${width}px` : width) : "100%",
    height: height ? (typeof height === "number" ? `${height}px` : height) : "1em",
  };

  return (
    <span
      className={`${baseClasses} ${variantClasses[variant]} ${animationClasses} ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
}
