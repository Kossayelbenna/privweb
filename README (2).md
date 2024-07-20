

the global translation is in this file: src/translation.ts
fonts are in src/fonts.ts
the translation of how to buy is in src/components/HowToBuy.tsx
the translation of Questions is in src/components/QnaSection.tsx
the translation of the Roadmap is in src/components/roadmap.tsx
the translation of the marquee games is in src/components/MarqueeGames.tsx

want to add a new language? go to file locale.d.ts and add a new language there, then go to src/translation.ts and add the new language there and go to middleware.ts and add the new language there.

you have to add the new language in the file locale.d.ts, src/translation.ts, middleware.ts and other files that you want to add the new language to.