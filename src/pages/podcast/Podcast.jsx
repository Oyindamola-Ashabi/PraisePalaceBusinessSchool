import React, { useState } from 'react';
import './Podcast.css';

// Importing unique images
import featuredImg from '../../assets/PODCASTT.png';
import epImg1 from '../../assets/PODCASTT.png';
import epImg2 from '../../assets/miclady.png';
import epImg3 from '../../assets/miclady.png';
import epImg4 from '../../assets/miclady.png';
import epImg5 from '../../assets/miclady.png';
import epImg6 from '../../assets/miclady.png';
import epImg7 from '../../assets/miclady.png';
import epImg8 from '../../assets/miclady.png';
import epImg9 from '../../assets/miclady.png';
import epImg10 from '../../assets/miclady.png';
import sideBanner from '../../assets/PODCASTT.png';

const Podcast = () => {
    const [filter, setFilter] = useState("All");

    // UNIQUE AUDIO LINK JUST FOR THE FEATURED CARD
    const featuredAudioURL = "https://res.cloudinary.com/dvknjyhv2/video/upload/v1769601961/audio.mp3_s1iocf.mp3";

    // DATA ARRAY WITH UNIQUE AUDIO LINKS FOR EVERY EPISODE
    const episodeData = [
        { id: 1, title: "Ep 06: Mastering Digital Growth", time: "28min", img: epImg1, cat: "Digital Growth", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
        { id: 2, title: "Ep 07: Content Strategy 101", time: "35min", img: epImg2, cat: "Digital Growth", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
        { id: 3, title: "Ep 05: Financial Intelligence", time: "32min", img: epImg3, cat: "Finance", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
        { id: 4, title: "Ep 08: Budgeting for Scale", time: "45min", img: epImg4, cat: "Finance", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
        { id: 5, title: "Ep 04: The Art of Leadership", time: "25min", img: epImg5, cat: "Leadership", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
        { id: 6, title: "Ep 09: Conflict Resolution", time: "30min", img: epImg6, cat: "Leadership", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },
        { id: 7, title: "Ep 03: Marketing Strategies", time: "30min", img: epImg7, cat: "Enterprenuership", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
        { id: 8, title: "Ep 10: Pitching to Investors", time: "40min", img: epImg8, cat: "Enterprenuership", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },
        { id: 9, title: "Ep 02: Success Stories", time: "40min", img: epImg9, cat: "Women in Business", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },
        { id: 10, title: "Ep 11: Networking for Women", time: "38min", img: epImg10, cat: "Women in Business", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3" },
    ];

    const categories = ["All", "Leadership", "Finance", "Enterprenuership", "Digital Growth", "Women in Business"];

    const playAudio = (audioUrl) => {
        const audio = new Audio(audioUrl);
        audio.load();
        audio.play()
            .then(() => console.log("Playing:", audioUrl))
            .catch(e => alert("Please click the page first to enable audio playback."));
    };

    const downloadAudio = (audioUrl, title) => {
        const link = document.createElement('a');
        link.href = audioUrl;
        link.setAttribute('download', `${title}.mp3`);
        link.setAttribute('target', '_blank'); 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const filteredEpisodes = filter === "All" 
        ? episodeData 
        : episodeData.filter(ep => ep.cat === filter);

    return (
        <div className="podcast-container">
            <div className="pod-hero">
                <h1>PraisePalace Business School Podcast</h1>
                <p>Conversations that inspire growth in business, leadership, and faith.</p>
            </div>

            {/* FEATURED CARD UPDATED WITH BOTH BUTTONS */}
            <div className="pod-featured-wrapper">
                <div className="pod-featured-card">
                    <div className="pod-feat-img">
                        <img src={featuredImg} alt="Featured Host" />
                    </div>
                    <div className="pod-feat-text">
                        <h2>Building Ethical Leaders in Business</h2>
                        <p className="pod-author">Dr. Tunde Akinwale — CEO, Global Leadership Forum</p>
                        <p className="pod-description">
                            This episode explores how values-driven leadership transforms 
                            organizations and society. Learn strategies for leading with 
                            integrity while driving innovation.
                        </p>
                        <div className="pod-ep-actions">
                            <button 
                                className="pod-pink-btn-hero" 
                                onClick={() => playAudio(featuredAudioURL)}
                            >
                                Listen Now
                            </button>
                            <button 
                                className="pod-outline-btn-hero" 
                                onClick={() => downloadAudio(featuredAudioURL, "Ethical_Leaders")}
                            >
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pod-content-grid-wrapper">
                <div className="pod-white-box">
                    <div className="pod-episodes-left">
                        <h2 className="pod-main-title">All Episodes</h2>
                        <div className="pod-ep-list">
                            {filteredEpisodes.map((ep) => (
                                <div key={ep.id} className="pod-ep-item">
                                    <div className="pod-ep-img-container">
                                        <img src={ep.img} alt={ep.title} />
                                    </div>
                                    <div className="pod-ep-details">
                                        <h3>{ep.title}</h3>
                                        <p className="pod-time">{ep.time}</p>
                                        <div className="pod-ep-actions">
                                            <button className="pod-pink-btn-sm" onClick={() => playAudio(ep.audio)}>Listen Now</button>
                                            <button className="pod-outline-btn-sm" onClick={() => downloadAudio(ep.audio, ep.title)}>Download</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pod-sidebar-right">
                        <h2 className="pod-main-title">Categories</h2>
                        <div className="pod-cat-stack">
                            {categories.map((cat) => (
                                <div 
                                    key={cat} 
                                    className={`pod-cat-item ${filter === cat ? 'active-cat' : ''}`}
                                    onClick={() => setFilter(cat)}
                                >
                                    {cat}
                                </div>
                            ))}
                        </div>
                        <div className="pod-side-banner">
                            <img src={sideBanner} alt="Discussion" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Podcast;