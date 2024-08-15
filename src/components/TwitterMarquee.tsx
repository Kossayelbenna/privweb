"use client";

import React, { useRef, useEffect } from 'react';
import { MagicTweet } from "./MagicTweet";

const TwitterMarquee: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      const animateMarquee = () => {
        if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
          marquee.scrollLeft = 0;
        } else {
          marquee.scrollLeft += 1;
        }
        requestAnimationFrame(animateMarquee);
      };
      requestAnimationFrame(animateMarquee);
    }
  }, []);

  const tweets = [
    {
      id: '1',
      user: {
        name: 'bunnie',
        screen_name: 'bunniefied',
        profile_image_url_https: 'https://pbs.twimg.com/profile_images/1234567890/avatar.jpg',
        verified: true,
      },
      text: '@Harambe_AI OMG! @Harambe_AI is amazing! The team\'s enthusiasm is remarkable, and the product is impressive 🔥📈 The team is aiming to positively impact peoples lives!',
      created_at: 'Jan 17 2024',
      entities: [
        { type: 'mention', text: '@Harambe_AI', href: 'https://twitter.com/Harambe_AI' },
      ],
      public_metrics: { retweet_count: 1, reply_count: 4, like_count: 19, quote_count: 0 },
    },
    // Add more tweet objects here...
  ];

  // Duplicate tweets array to create a seamless loop
  const allTweets = [...tweets, ...tweets, ...tweets, ...tweets, ...tweets];

  return (
    <div className="overflow-hidden bg-[#0f0a19]" style={{ width: '100%' }}>
      <h2 className="text-2xl font-bold mb-4 text-white pl-4">What people are saying</h2>
      <div ref={marqueeRef} className="flex" style={{ width: '500%' }}>
        {allTweets.map((tweet, index) => (
          <div key={index} className="flex-shrink-0 w-[350px] mx-2">
            <MagicTweet tweet={tweet} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TwitterMarquee;