import { cn } from "@/lib/utils";
import dynamic from 'next/dynamic';


interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}

export default function Marquee({
  
  className,
  reverse ,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
      style={
        {
          "--duration": "40s",
          "--gap": "1rem",
        } as React.CSSProperties
      }
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 justify-around",
            {
              "flex-row animate-marquee": !vertical,
              "flex-col animate-marquee-vertical": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            },
            "gap-[var(--gap)]"
          )}
        >
            {children}
          </div>
        ))}
      </div>
    );
}
