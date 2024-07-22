import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { BorderBeam } from "./magicui/border-beam";
import { ChevronDown, ChevronUp } from "lucide-react";
import dynamic from 'next/dynamic';


function Qna({
 
  q,
  a,
  className,
  delay,
}: {
  q: string;
  a: string;
  className: string;
  delay: number;
}) {
  const [open, setOpen] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "relative bg-white/10 p-4 rounded-lg shadow-md backdrop-blur-md ease-in-out",
        inView ? "fade-in" : "opacity-0",
        "transition-opacity duration-500"
      )}
      style={{ transitionDelay: `${delay}ms` }}
      onClick={() => setOpen(!open)}
    >
      <BorderBeam delay={delay} />
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h3 className="text-lg font-bold text-white">{q}</h3>
        {open ? (
          <ChevronUp className="w-6 h-6 text-white" />
        ) : (
          <ChevronDown className="w-6 h-6 text-white" />
        )}
      </div>
      <div
        className={cn(
          "transition-max-height duration-500 ease-in-out overflow-hidden",
          open ? "max-h-[1000px] mt-2" : "max-h-0"
        )}
      >
        <p className={cn("text-sm text-white bg-transparent", className)}>
          {a}
        </p>
      </div>
    </div>
    
  );

}

export default Qna;