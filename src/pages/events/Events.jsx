import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Events.css';

const Events = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const allEvents = [
        { id: 1, title: "Business Leadership Summit", date: "September 10, 2025", time: "10:00 AM – 4:00 PM", location: "Eko Hotel & Suites, Lagos Island" },
        { id: 2, title: "Wealth Mastery Workshop", date: "October 3, 2025", time: "1:00 PM – 5:00 PM", location: "Online (Zoom)" },
        { id: 3, title: "Digital Growth Bootcamp", date: "November 15, 2025", time: "9:00 AM – 3:00 PM", location: "PraisePalace Auditorium, Lagos" },
        { id: 4, title: "Entrepreneurship Mixer", date: "December 5, 2025", time: "5:00 PM – 8:00 PM", location: "Radisson Blu, Victoria Island" },
        { id: 5, title: "Financial Intelligence Class", date: "January 12, 2026", time: "11:00 AM – 2:00 PM", location: "Online (Zoom)" },
        { id: 6, title: "Sales Mastery Seminar", date: "February 20, 2026", time: "10:00 AM – 4:00 PM", location: "PraisePalace Main Hall" },
        { id: 7, title: "Marketing Analytics Masterclass", date: "March 15, 2026", time: "10:00 AM – 3:00 PM", location: "Online (Zoom)" },
        { id: 8, title: "HR & Talent Management", date: "April 10, 2026", time: "9:00 AM – 1:00 PM", location: "Lagos Continental Hotel" },
        { id: 9, title: "Startup Funding Pitch Day", date: "May 22, 2026", time: "10:00 AM – 5:00 PM", location: "PraisePalace Hub" },
    ];

    const filteredEvents = allEvents.filter(event =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Function to handle social clicks specifically
    const handleSocialClick = (e, url) => {
        e.stopPropagation(); // This stops the card's navigate() from firing
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <div className="events-page">
            <section className="events-hero">
                <div className="e-hero-content">
                    <h1>Events at PraisePalace <br /> Business School</h1>
                    <p>Learn, Network, and Grow with Our Transformative Business Events</p>
                </div>
            </section>

            <section className="events-list-section">
                <div className="search-container">
                    <input 
                        type="text" 
                        placeholder="Search" 
                        className="event-search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="search-icon-wrapper">
                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e91e63" strokeWidth="3"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </div>
                </div>

                <div className="events-grid">
                    {filteredEvents.map(event => (
                        <div key={event.id} className="event-card" onClick={() => navigate(`/events/${event.id}`)}>
                            <h3 className="event-card-title">{event.title}</h3>
                            <div className="event-details">
                                <div className="detail-item"><span className="icon">📅</span><p>{event.date}</p></div>
                                <div className="detail-item"><span className="icon">🕒</span><p>{event.time}</p></div>
                                <div className="detail-item"><span className="icon">📍</span><p>{event.location}</p></div>
                            </div>
                            <div className="event-card-footer">
                                <div className="share-wrapper" onClick={(e) => e.stopPropagation()}>
                                    <div className="social-share-popup">
                                        <a href="#facebook" onClick={(e) => handleSocialClick(e, "https://facebook.com/praisepalace")}>
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                        <a href="#twitter" onClick={(e) => handleSocialClick(e, "https://twitter.com/praisepalace")}>
                                            <i className="fab fa-x-twitter"></i>
                                        </a>
                                        <a href="#instagram" onClick={(e) => handleSocialClick(e, "https://instagram.com/praisepalace")}>
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                        <a href="#linkedin" onClick={(e) => handleSocialClick(e, "https://linkedin.com/company/praisepalace")}>
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </div>
                                    <div className="share-btn">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e91e63" strokeWidth="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Events;