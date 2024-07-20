"use client";

import React, { useMemo } from "react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "usehooks-ts";

function TextImageSection({
  images,
  children,
  invert = false,
  override,
  className,
}: {
  images?: string[];
  children: React.ReactNode;
  invert?: boolean;
  override?: () => React.ReactNode;
  className?: string;
}) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const content = useMemo(() => {
    if (invert && !isMobile) {
      return [true, children];
    }
    return [children, true];
  }, [invert, isMobile, children]);

  return (
    <div
      className={cn(
        "max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-16 sm:mt-20 p-5 overflow-x-clip md:scale-100",
        className
      )}
    >
      {content.map((child, index) => {
        if (child === true) {
          if (override)
            return (
              <div
                className="h-[700px] flex items-center justify-center"
                key={index}
              >
                {override()}
              </div>
            );
          if (!images) return;
          return (
            <div
              className="h-[700px] flex items-center justify-center"
              key={index}
            >
              <div className="w-[350px] h-[500px] relative scale-75 md:scale-100">
                {images[3] && (
                  <img
                    src={images[3]}
                    alt=""
                    className="absolute organic-float-4 rounded-xl top-10 shadow-xl transform -right-24 w-40 h-40 object-cover"
                  />
                )}
                {images[0] && (
                  <img
                    src={images[0]}
                    alt=""
                    className="organic-float-1 absolute inset-0 shadow-xl rounded-xl w-full h-full object-cover"
                  />
                )}
                {images[1] && (
                  <img
                    src={images[1]}
                    alt=""
                    className="absolute organic-float-2 rounded-xl -top-20 shadow-xl -left-20 transform w-40 h-40 object-cover"
                  />
                )}
                {images[2] && (
                  <img
                    src={images[2]}
                    alt=""
                    className="absolute organic-float-3 rounded-xl -bottom-20 shadow-xl -left-20 transform w-52 h-60 object-cover"
                  />
                )}
              </div>
            </div>
          );
        }
        return <div key={index}>{child}</div>;
      })}
    </div>
  );
}

export default TextImageSection;
