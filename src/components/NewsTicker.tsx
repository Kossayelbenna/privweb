import React, { useEffect, useRef } from 'react';
import './NewsTicker.css';

const NewsTicker: React.FC = () => {
    const newsItems = [
        'DOGE VISION PRESALE PRICE RISING AGAIN SOON!',
        'EXPERTS SAY DOGE VISION DOUBLE STAKING REWARDS = 100X THE LOLZ',
        'DOGE VISION IS MORE THAN A MEME',
        'NEW PARTNERSHIPS ANNOUNCED: DOGE VISION EXPANDS ECOSYSTEM',
    ];

    const tickerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ticker = tickerRef.current;
        if (ticker) {
            const tickerWidth = ticker.offsetWidth;
            const animationDuration = tickerWidth / 40; // Adjust speed as needed
            ticker.style.animationDuration = `${animationDuration}s`;
        }
    }, []);

    return (
        <div className="news-ticker-container">
            <div className="breaking-news overflow bg-black pr-2">BREAKING:</div>
            <div className="news-ticker-wrapper">
                <div className="news-ticker" ref={tickerRef}>
                    {newsItems.map((item, index) => (
                        <span key={index} className="news-ticker-item">{item}</span>
                    ))}
                    {newsItems.map((item, index) => (
                        <span key={`repeat-${index}`} className="news-ticker-item">{item}</span>
                    ))}
                </div>
            </div>
            <div className="left-filter"></div>
            <div className="right-filter"></div>
        </div>
    );
};

export default NewsTicker;