"use client";

import { cn } from "@/lib/utils";

interface TagProps {
  name: string;
  color?: string;
  className?: string;
  size?: "sm" | "md";
}

export const Tag = ({ name, color = "#E9F3F7", className, size = "md" }: TagProps) => {
  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-sm"
  };

  // Convert hex to RGB for better text contrast
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  const rgb = hexToRgb(color);
  const brightness = rgb ? (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000 : 128;
  const textColor = brightness > 128 ? '#374151' : '#ffffff';

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md font-medium border-0",
        sizeClasses[size],
        className
      )}
      style={{
        backgroundColor: color,
        color: textColor
      }}
    >
      {name}
    </span>
  );
}; 