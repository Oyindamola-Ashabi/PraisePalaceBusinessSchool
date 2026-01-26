import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Events.css';

const EventDetail = () => {
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const eventContentMap = {
        "1": {
            title: "Business Leadership Summit",
            date: "September 10, 2025",
            time: "10:00 AM – 4:00 PM",
            location: "Eko Hotel & Suites, Lagos Island",
            overview: "A gathering for visionary leaders to explore key trends in organizational growth and innovation.",
            highlights: ["Executive Networking", "Strategy Sessions", "Global Leadership Frameworks"],
            who: ["Business Owners", "Managers", "Corporate Leaders"]
        },
        "2": {
            title: "Wealth Mastery Workshop",
            date: "October 3, 2025",
            time: "1:00 PM – 5:00 PM",
            location: "Online (Zoom)",
            overview: "Focus on financial intelligence, investment strategies, and long-term wealth creation.",
            highlights: ["Stock Market Insights", "Real Estate Basics", "Personal Finance Planning"],
            who: ["Investors", "Professionals", "Entrepreneurs"]
        },
        "3": {
            title: "Digital Growth Bootcamp",
            date: "November 15, 2025",
            time: "9:00 AM – 3:00 PM",
            location: "PraisePalace Auditorium, Lagos",
            overview: "Learn to scale your brand using digital marketing, AI tools, and social media advertising.",
            highlights: ["AI for Productivity", "Content Strategy", "Paid Ads Masterclass"],
            who: ["Marketers", "SME Owners", "Creatives"]
        },
        "4": {
            title: "Entrepreneurship Mixer",
            date: "December 5, 2025",
            time: "5:00 PM – 8:00 PM",
            location: "Radisson Blu, VI",
            overview: "A networking-heavy event designed to connect founders with potential investors.",
            highlights: ["Pitch Sessions", "Investor Matchmaking"],
            who: ["Founders", "Angel Investors"]
        },
        "5": {
            title: "Financial Intelligence Class",
            date: "January 12, 2026",
            time: "11:00 AM – 2:00 PM",
            location: "Online (Zoom)",
            overview: "Master the numbers behind your business success.",
            highlights: ["Profit & Loss Analysis", "Budgeting for Growth"],
            who: ["Startup Owners", "Finance Managers"]
        },
        "6": {
            title: "Sales Mastery Seminar",
            date: "February 20, 2026",
            time: "10:00 AM – 4:00 PM",
            location: "PraisePalace Main Hall",
            overview: "Advanced closing techniques and sales psychology.",
            highlights: ["Objection Handling", "Lead Conversion"],
            who: ["Sales Teams", "Direct Sellers"]
        },
        "7": {
            title: "Marketing Analytics Masterclass",
            date: "March 15, 2026",
            time: "10:00 AM – 3:00 PM",
            location: "Online (Zoom)",
            overview: "Turn your data into actionable marketing plans.",
            highlights: ["Data Tracking", "Conversion Optimization"],
            who: ["Analytic Managers", "Digital Marketers"]
        },
        "8": {
            title: "HR & Talent Management",
            date: "April 10, 2026",
            time: "9:00 AM – 1:00 PM",
            location: "Lagos Continental Hotel",
            overview: "How to hire, train, and keep the best employees.",
            highlights: ["Performance Management", "Company Culture"],
            who: ["HR Professionals", "Business Managers"]
        },
        "9": {
            title: "Startup Funding Pitch Day",
            date: "May 22, 2026",
            time: "10:00 AM – 5:00 PM",
            location: "PraisePalace Hub",
            overview: "Present your business to active venture capitalists.",
            highlights: ["Investment Deck Review", "Live Q&A with VCs"],
            who: ["Tech Founders", "Innovators"]
        }
    };

    const data = eventContentMap[id] || eventContentMap["1"];

    return (
        <div className="events-page">
            <section className="events-hero">
                <div className="e-hero-content">
                    <h1>Events at PraisePalace <br /> Business School</h1>
                    <p>Learn, Network, and Grow with Our Transformative Business Events</p>
                </div>
            </section>

            <div className="event-detail-view">
                <h2 className="detail-title">{data.title}</h2>
                <div className="detail-split-container">
                    <div className="detail-info-pane">
                        <div className="icon-info-row">
                            <span className="pink-square-icon">📅</span>
                            <div><small>Date</small><h4>{data.date}</h4></div>
                        </div>
                        <div className="icon-info-row">
                            <span className="pink-square-icon">🕒</span>
                            <div><small>Time</small><h4>{data.time}</h4></div>
                        </div>
                        <div className="detail-text-body">
                            <h5 className="pink-heading">OVERVIEW</h5>
                            <p>{data.overview}</p>
                            <h5 className="pink-heading">Highlights:</h5>
                            <ul>{data.highlights.map((h, i) => <li key={i}>{h}</li>)}</ul>
                            <h5 className="pink-heading">Who Should Attend:</h5>
                            <ul>{data.who.map((w, i) => <li key={i}>{w}</li>)}</ul>
                            <div className="address-footer">
                                <div><h5 className="pink-heading">Address:</h5><p>{data.location}</p></div>
                                <span className="pink-square-icon">📍</span>
                            </div>
                        </div>
                    </div>

                    <div className="detail-form-pane">
                        <h3>Event Registration</h3>
                        <p><strong>Register to attend Event</strong></p>
                        <form className="reg-form">
                            <div className="form-input-wrap"><i className="far fa-user"></i><input type="text" placeholder="full name" required /></div>
                            <div className="form-input-wrap"><i className="far fa-envelope"></i><input type="email" placeholder="email address" required /></div>
                            <div className="form-input-wrap"><span>🇳🇬 +234</span><input type="tel" placeholder="000 000 0000" required /></div>
                            <button type="button" className="book-event-btn">Book Event</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetail;