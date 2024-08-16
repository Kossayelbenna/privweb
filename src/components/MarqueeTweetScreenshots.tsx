"use client";

import React, { useMemo } from "react";
import dynamic from 'next/dynamic';
import { useLocale, useTranslator } from "@/lib/use-translator";
import Link from 'next/link';

const Marquee = dynamic(() => import('./magicui/marquee'), {
  ssr: false,
});

const tweetScreenshots = [
  {
    id: '1234567890',
    imageUrl: '/images/one.png',
    link: 'https://twitter.com/dogevision',
  },
  {
    id: '1234567890',
    imageUrl: '/images/2.png',
    link: 'https://twitter.com/dogevision',
  },
  {
    id: '1234567890',
    imageUrl: '/images/3.png',
    link: 'https://twitter.com/dogevision',
  },
  {
    id: '1234567890',
    imageUrl: '/images/4.png',
    link: 'https://twitter.com/dogevision',
  },
  {
    id: '1234567890',
    imageUrl: '/images/5.png',
    link: 'https://twitter.com/dogevision',
  },
  {
    id: '1234567890',
    imageUrl: '/images/6.png',
    link: 'https://twitter.com/dogevision',
  },
  {
    id: '1234567890',
    imageUrl: '/images/7.png',
    link: 'https://twitter.com/dogevision',
  },

  // Add more tweet screenshots here...
];

const MarqueeTweetScreenshots: React.FC = () => {
  const locale = useLocale();
  const tr = useTranslator();

  const memoizedTweetScreenshots = useMemo(() => tweetScreenshots, []);

  const memoizedTitle = useMemo(() => tr("marqueeTweetsTitle"), [tr]);
  const memoizedDescription = useMemo(() => tr("tweetDescription"), [tr]);

  return (
    <div className="py-10 pt-0 ">
      <div className="flex flex-col items-center justify-center gap-4 p-5">
        <h1
          className="text-5xl font-bold text-white text-center"
          style={{ textShadow: "0 0 10px rgba(0,0,0,0.5)" }}
        >
        What influencers said about us !
          {memoizedTitle}
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center max-w-2xl mx-auto px-4 mt-0 ">
        <h5 className="text-center text-lg md:text-xl font-bold leading-relaxed text-white"> 
          {memoizedDescription} 
        </h5>
      </div>
      <Marquee
        
        className="[--duration:10s] "
      >
        {memoizedTweetScreenshots.map((tweet) => (
          <Link href={tweet.link} key={tweet.id} target="_blank" rel="noopener noreferrer">
            <div className="p-2  transition-transform duration-100">
              <img 
                src={tweet.imageUrl} 
                alt="Tweet screenshot" 
                className="rounded-xl "
                style={{ maxWidth: '350px', height: 'auto' }}
              />
            </div>
          </Link>
        ))}
      </Marquee>
    </div>
  );
}

export default React.memo(MarqueeTweetScreenshots);