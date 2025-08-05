"use client";

import { cn } from "@/lib/utils";

interface ResourceAvatarProps {
  imageUrl: string;
  name: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const ResourceAvatar = ({ imageUrl, name, className, size = "md" }: ResourceAvatarProps) => {
  const sizeClasses = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-12 w-12 text-base"
  };

  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  // Notion-style color palette for avatars
  const notionColors = [
    "#FF6B6B", // Red
    "#4ECDC4", // Teal
    "#45B7D1", // Blue
    "#96CEB4", // Green
    "#FFEAA7", // Yellow
    "#DDA0DD", // Plum
    "#98D8C8", // Mint
    "#F7DC6F", // Orange
    "#BB8FCE", // Purple
    "#85C1E9", // Sky
    "#F8C471", // Peach
    "#82E0AA", // Lime
  ];

  // Generate consistent color based on name
  const getColorFromName = (name: string) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return notionColors[Math.abs(hash) % notionColors.length];
  };

  const avatarColor = getColorFromName(name);

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className={cn(
        "relative rounded-full overflow-hidden border-0",
        sizeClasses[size]
      )}>
        <img
          src={imageUrl}
          alt={`${name} resource`}
          className="h-full w-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const fallback = target.nextElementSibling as HTMLElement;
            if (fallback) {
              fallback.style.display = 'flex';
            }
          }}
        />
        <div 
          className="h-full w-full flex items-center justify-center text-white font-semibold hidden"
          style={{ 
            display: 'none',
            backgroundColor: avatarColor
          }}
        >
          {initials}
        </div>
      </div>
    </div>
  );
}; 