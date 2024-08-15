import React, { useEffect, useRef } from 'react';
import './NewsTicker.css';

const NewsTicker: React.FC = () => {
    const newsItems = [
        "DOGE VISION L3 LAUNCHES AT THE END OF PRESALE!  ",
        "DOGE VISION INTEGRATES GAMES, NFTs, STREAMING ON POWERFUL BLOCKCHAIN",
        "ULTRA-FAST, LOW FEE TRANSACTIONS - REVOLUTIONIZES THE GAMING INDUSTRY",
        "EXPERTS PREDICT 1000X GROWTH BY 2025",
        "COMPLETE DOGE ECOSYSTEM BUILT FOR THE #1 MEME COMMUNITY",
        "PRESALE PRICE INCREASE AGAIN SOON!",
        "BREAKING: DOGE VISION L3 LAUNCHES AT THE END OF PRESALE!",
        "DOGE VISION INTEGRATES GAMES, NFTs, STREAMING ON POWERFUL BLOCKCHAIN",
        "ULTRA-FAST, LOW FEE TRANSACTIONS - REVOLUTIONIZES THE GAMING INDUSTRY",
        "EXPERTS PREDICT 1000X GROWTH BY 2025",
        "COMPLETE DOGE ECOSYSTEM BUILT FOR THE #1 MEME COMMUNITY",
        "PRESALE PRICE INCREASE AGAIN SOON!"
    ];

    const tickerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ticker = tickerRef.current;
        if (ticker) {
            const tickerWidth = ticker.offsetWidth;
            const animationDuration = tickerWidth / 80; // Adjust speed as needed
            ticker.style.animationDuration = `${animationDuration}s`;
        }
    }, []);

    return (
        <div className="news-ticker-container">
            <div className="breaking-news overflow bg-black pr-2">BREAKING:</div>
            <div className="news-ticker-wrapper">
                <div className="news-ticker" ref={tickerRef}>
                    {newsItems.map((item , index) => (
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