import React, { useEffect, useRef, memo } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import { cn } from "@/lib/utils";
import { useLocale } from "@/lib/use-translator";

const data = [
  // Les données restent inchangées
];

const Icon = memo(({ icon }: { icon: React.ReactNode }) => {
  return <>{icon}</>;
});

const SectionWork: React.FC<{ className: string }> = ({ className }) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const locale = useLocale();

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const elements = entry.target.querySelectorAll<HTMLElement>(".fade-up");
        const coins = entry.target.querySelectorAll<HTMLElement>("#coin");

        if (entry.isIntersecting) {
          elements.forEach((element, index) => {
            element.style.transitionDelay = `${index * 100}ms`;
            element.classList.add("is-visible");
          });

          coins.forEach((coin, index) => {
            coin.style.transitionDelay = `${index * 100}ms`;
            coin.classList.add("activate");
          });
        } else {
          elements.forEach((element) => element.classList.remove("is-visible"));
          coins.forEach((coin) => coin.classList.remove("activate"));
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="container mx-auto py-8 flex flex-col items-center justify-center"
    >
      <div className="action-btn w-fit py-2 px-4 border rounded-2xl backdrop-blur-md border-gray-100/20">
        <span
          className="text-lg md:text-xl font-semibold text-balance bg-clip-text text-transparent"
          style={{ backgroundImage: "linear-gradient(264.28deg, #DEC7FF -38.2%, #5C27FE 103.12%)" }}
        >
          Our Speciality
        </span>
      </div>
      <div className="py-20 max-w-lg px-5 text-balance text-center w-full">
        <h3 className="text-3xl md:text-4xl font-bold mt-4 text-center fade-up">
          Complete Solutions for your NFT
        </h3>
        <p className="mt-4 text-gray-1000 fade-up">
          Cyfonii is the premier marketplace for nifties, which are digital items you can truly own for yourself
        </p>
      </div>
      <div className="flex flex-wrap">
        {data.map((item, index) => (
          <div key={index} className="w-full md:w-1/2 xl:w-1/4 p-4 fade-up">
            <div className="relative shadow-lg rounded-lg p-6 pt-14 text-center bg-gradient-to-b from-primary/60 backdrop-blur-xl to-primary/20">
              <div
                id="coin"
                style={{ backgroundImage: "linear-gradient(264.28deg, #DEC7FF -38.2%, #5C27FE 103.12%)" }}
                className="absolute spinning-element -top-12 left-1/2 w-24 h-24 rounded-full bg-white/10 flex items-center justify-center"
              >
                <Icon icon={item.icon} />
              </div>
              <h5 className="text-xl font-bold">{item.title[locale]}</h5>
              <p className={cn("mt-2", className)}>
                {item.description[locale]}
              </p>
              <h3 className="text-6xl font-bold mt-4 bg-gradient-to-b from-white/60 to-white/20 text-transparent bg-clip-text">
                {item.number}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWork;
