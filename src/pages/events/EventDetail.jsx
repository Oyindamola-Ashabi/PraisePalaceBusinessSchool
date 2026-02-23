import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Events.css';

// Import unique featured images
import event1Img from '../../assets/business-leadership-submmit.png';
import event2Img from '../../assets/WEALTH-MASTERY-WORKSHOPp.png';
import event3Img from '../../assets/DIGITAL-GROwTHh.png';
import event4Img from '../../assets/podcast.hero.png';
import event5Img from '../../assets/podcast.hero.png';
import event6Img from '../../assets/podcast.hero.png';
// import event7Img from '../../assets/podcast.hero.png';
// import event8Img from '../../assets/podcast.hero.png';
// import event9Img from '../../assets/podcast.hero.png';

const EventDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('stripe');
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showBankModal, setShowBankModal] = useState(false);
    const [bookedUser, setBookedUser] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        // Fly-in animation for the featured image banner (second section)
        setTimeout(() => {
            const banner = document.querySelector('.featured-event-banner');
            if (banner) {
                banner.classList.add('visible');
            }
        }, 300); // slight delay so it feels natural after hero loads

    }, [id]);

    const eventContentMap = {
        "1": {
            title: "Business Leadership Summit",
            date: "September 10, 2025",
            time: "10:00 AM – 4:00 PM",
            location: "Eko Hotel & Suites, Lagos Island",
            overview: "A gathering for visionary leaders to explore key trends in organizational growth and innovation.",
            highlights: ["Executive Networking", "Strategy Sessions", "Global Leadership Frameworks"],
            who: ["Business Owners", "Managers", "Corporate Leaders"],
            featuredImage: event1Img,
            isFree: true
        },
        "2": {
            title: "Wealth Mastery Workshop",
            date: "October 3, 2025",
            time: "1:00 PM – 5:00 PM",
            location: "Online (Zoom)",
            overview: "Focus on financial intelligence, investment strategies, and long-term wealth creation.",
            highlights: ["Stock Market Insights", "Real Estate Basics", "Personal Finance Planning"],
            who: ["Investors", "Professionals", "Entrepreneurs"],
            featuredImage: event2Img,
            isFree: true
        },
        "3": {
            title: "Digital Growth Bootcamp",
            date: "November 15, 2025",
            time: "9:00 AM – 3:00 PM",
            location: "PraisePalace Auditorium, Lagos",
            overview: "Learn to scale your brand using digital marketing, AI tools, and social media advertising.",
            highlights: ["AI for Productivity", "Content Strategy", "Paid Ads Masterclass"],
            who: ["Marketers", "SME Owners", "Creatives"],
            featuredImage: event3Img,
            isFree: true
        },
        "4": {
            title: "Entrepreneurship Mixer",
            date: "December 5, 2025",
            time: "5:00 PM – 8:00 PM",
            location: "Radisson Blu, Victoria Island",
            overview: "A networking-heavy event designed to connect founders with potential investors.",
            highlights: ["Pitch Sessions", "Investor Matchmaking"],
            who: ["Founders", "Angel Investors"],
            featuredImage: event4Img,
            isFree: false
        },
        "5": {
            title: "Financial Intelligence Class",
            date: "January 12, 2026",
            time: "11:00 AM – 2:00 PM",
            location: "Online (Zoom)",
            overview: "Master the numbers behind your business success.",
            highlights: ["Profit & Loss Analysis", "Budgeting for Growth"],
            who: ["Startup Owners", "Finance Managers"],
            featuredImage: event5Img,
            isFree: false
        },
        "6": {
            title: "Sales Mastery Seminar",
            date: "February 20, 2026",
            time: "10:00 AM – 4:00 PM",
            location: "PraisePalace Main Hall",
            overview: "Advanced closing techniques and sales psychology.",
            highlights: ["Objection Handling", "Lead Conversion"],
            who: ["Sales Teams", "Direct Sellers"],
            featuredImage: event6Img,
            isFree: false
        },
        "7": {
            title: "Marketing Analytics Masterclass",
            date: "March 15, 2026",
            time: "10:00 AM – 3:00 PM",
            location: "Online (Zoom)",
            overview: "Turn your data into actionable marketing plans.",
            highlights: ["Data Tracking", "Conversion Optimization"],
            who: ["Analytic Managers", "Digital Marketers"],
            featuredImage: event7Img,
            isFree: false
        },
        "8": {
            title: "HR & Talent Management",
            date: "April 10, 2026",
            time: "9:00 AM – 1:00 PM",
            location: "Lagos Continental Hotel",
            overview: "How to hire, train, and keep the best employees.",
            highlights: ["Performance Management", "Company Culture"],
            who: ["HR Professionals", "Business Managers"],
            featuredImage: event8Img,
            isFree: false
        },
        "9": {
            title: "Startup Funding Pitch Day",
            date: "May 22, 2026",
            time: "10:00 AM – 5:00 PM",
            location: "PraisePalace Hub",
            overview: "Present your business to active venture capitalists.",
            highlights: ["Investment Deck Review", "Live Q&A with VCs"],
            who: ["Tech Founders", "Innovators"],
            featuredImage: event9Img,
            isFree: true
        }
    };

    const data = eventContentMap[id] || eventContentMap["1"];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !phone) {
            alert('Please fill in all fields.');
            return;
        }
        const userData = { name, email, phone };
        setBookedUser(userData);
        if (data.isFree) {
            setShowSuccessModal(true);
        } else {
            if (paymentMethod === 'stripe') {
                window.location.href = 'https://buy.stripe.com/test_00g8xQeVY4QYa24000';
            } else {
                setShowBankModal(true);
            }
        }
    };

    return (
        <div className="events-page">
            <section className="events-hero detail-hero-reduced">
                <div className="e-hero-content">
                    <h1>{data.title}</h1>
                    <p>Learn, Network, and Grow with Our Transformative Business Events</p>
                </div>
            </section>

            <div className="featured-event-banner">
                <img
                    src={data.featuredImage}
                    alt={`${data.title} Featured`}
                    className="featured-image"
                />
            </div>

            <div className="event-detail-view">
                <div className="details-top-nav">
                    <button
                        className="back-to-events-btn"
                        onClick={() => navigate('/events')}
                    >
                        ← Back to Events
                    </button>
                </div>

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
                        <form className="reg-form" onSubmit={handleSubmit}>
                            <div className="form-input-wrap">
                                <i className="far fa-user"></i>
                                <input 
                                    type="text" 
                                    placeholder="full name" 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className="form-input-wrap">
                                <i className="far fa-envelope"></i>
                                <input 
                                    type="email" 
                                    placeholder="email address" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className="form-input-wrap">
                                <span>+44</span>
                                <input 
                                    type="tel" 
                                    placeholder="000 000 0000" 
                                    value={phone} 
                                    onChange={(e) => setPhone(e.target.value)} 
                                    required 
                                />
                            </div>
                            {!data.isFree && (
                                <div className="payment-options">
                                    <h3>Select Payment Method</h3>
                                    <label className="payment-label">
                                        <input
                                            type="radio"
                                            value="stripe"
                                            checked={paymentMethod === 'stripe'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                        />
                                        Pay with Card (Stripe)
                                    </label>
                                    <label className="payment-label">
                                        <input
                                            type="radio"
                                            value="bank"
                                            checked={paymentMethod === 'bank'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                        />
                                        Pay via Bank Transfer
                                    </label>
                                </div>
                            )}
                            <button type="submit" className="book-event-btn">Book Event</button>
                        </form>
                    </div>
                </div>
            </div>

            {showBankModal && (
                <div className="modal-overlay" onClick={() => setShowBankModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3>Bank Transfer Details</h3>
                        <p>Account Name: PraisePalace Business School</p>
                        <p>Account Number: 0123456789</p>
                        <p>Bank: Zenith Bank</p>
                        <p>Amount: £5,000 (or event-specific amount)</p>
                        <p>Please use your name as reference and email proof to support@praispalacebusinessschool.com.</p>
                        <button className="book-event-btn" onClick={() => { setShowBankModal(false); setShowSuccessModal(true); }}>
                            Confirm
                        </button>
                        <button className="back-to-events-btn" onClick={() => setShowBankModal(false)}>
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            {showSuccessModal && bookedUser && (
                <div className="modal-overlay" onClick={() => setShowSuccessModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3>{data.isFree ? 'Registration Successful!' : 'Booking Successful!'}</h3>
                        <p>{data.isFree ? `You have successfully registered for the free event ${data.title}. We look forward to seeing you!` : `Your booking for ${data.title} is pending payment. Please complete the bank transfer using the details provided and send proof to support@praispalacebusinessschool.com.`}</p>
                        <div className="user-details">
                            <h3>Your Details</h3>
                            <p>Name: {bookedUser.name}</p>
                            <p>Email: {bookedUser.email}</p>
                            <p>Phone: +44 {bookedUser.phone}</p>
                            <p>Event: {data.title}</p>
                            <p>Date: {data.date}</p>
                            <p>Time: {data.time}</p>
                            <p>Location: {data.location}</p>
                        </div>
                        <button className="book-event-btn" onClick={() => { setShowSuccessModal(false); navigate('/events'); }}>
                            Back to Events
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EventDetail;