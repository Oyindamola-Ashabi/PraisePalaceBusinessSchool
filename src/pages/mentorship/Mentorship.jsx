import React from 'react';
import { useNavigate } from 'react-router-dom'; // Added for navigation
import './Mentorship.css';

// Your original Hero image
import mentorshipHeroImg from '../../assets/mentorship-hero.png';

// Import the icons for the sections
import iconGuidance from '../../assets/Personal_guidance.png';
import iconInsights from '../../assets/Real-World-Insights.png';
import iconNetwork from '../../assets/Network-Access.png';
import iconAccountability from '../../assets/ACCOUNTABILITY.png';

const Mentorship = () => {
    // Logic to handle button click
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate('/appointment');
    };

    return (
        <div className="mentorship-page">
            {/* --- 1. HERO SECTION (Original Unchanged) --- */}
            <section className="mentorship-hero">
                <div className="m-hero-container">
                    <div className="m-hero-content">
                        <h1>Unlock Your Potential with Personal Mentorship</h1>
                        <p>
                            Learn directly from experienced business leaders who 
                            will guide you step-by-step on your journey
                        </p>
                        {/* Linked to Appointment */}
                        <button className="m-apply-btn" onClick={handleNavigation}>Apply for Mentorship</button>
                    </div>
                    
                    <div className="m-hero-image-wrapper">
                        <img 
                            src={mentorshipHeroImg} 
                            alt="Mentorship Session" 
                            className="m-hero-img" 
                        />
                    </div>
                </div>
            </section>

            {/* --- 2. WHY MENTORSHIP MATTERS (CENTERED) --- */}
            <section className="m-matters-section">
                <div className="m-matters-container">
                    <h2 className="m-matters-title">Why Mentorship Matters</h2>
                    <p className="m-matters-intro">
                        At PraisePalace Business School, we believe true learning goes beyond theory. 
                        Our mentorship program connects you with experienced business leaders who 
                        provide real-world insights, proven strategies, and personal guidance. 
                        Through one-on-one sessions and group mentoring, you gain the practical 
                        knowledge, confidence, and network needed to navigate challenges and achieve 
                        lasting success.
                    </p>

                    <div className="m-benefits-grid">
                        <div className="m-benefit-item">
                            <img src={iconGuidance} alt="Guidance" />
                            <h3>Personal Guidance</h3>
                            <p>One-on-one coaching <br/>tailored to your goals.</p>
                        </div>
                        <div className="m-benefit-item">
                            <img src={iconInsights} alt="Insights" />
                            <h3>Real-World Insights</h3>
                            <p>Learn directly from <br/>experienced entrepreneurs.</p>
                        </div>
                        <div className="m-benefit-item">
                            <img src={iconNetwork} alt="Network" />
                            <h3>Networking Access</h3>
                            <p>Join a community of <br/>mentors and mentees.</p>
                        </div>
                        <div className="m-benefit-item">
                            <img src={iconAccountability} alt="Accountability" />
                            <h3>Accountability</h3>
                            <p>Stay focused with mentor <br/>check-ins and feedback.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 3. CATEGORY CARDS (CENTERED & SIZED) --- */}
            <section className="m-categories-section">
                <div className="m-categories-grid">
                    <div className="m-price-card">
                        <h3>Startup Mentorship</h3>
                        <p>For aspiring entrepreneurs looking to launch their first business.</p>
                        <div className="m-card-footer">
                            {/* <span>9 Months</span>
                            <span>#10,000</span> */}
                        </div>
                    </div>
                    <div className="m-price-card">
                        <h3>Lead Mentorship</h3>
                        <p>Grow your leadership and management skills with expert guidance.</p>
                        <div className="m-card-footer">
                            {/* <span>9 Months</span>
                            <span>#10,000</span> */}
                        </div>
                    </div>
                    <div className="m-price-card">
                        <h3>Financial Growth</h3>
                        <p>Learn strategies for smart investing and financial growth.</p>
                        <div className="m-card-footer">
                            {/* <span>9 Months</span>
                            <span>#10,000</span> */}
                        </div>
                    </div>
                    <div className="m-price-card">
                        <h3>Digital Mentorship</h3>
                        <p>Get hands-on support to build and grow your brand online.</p>
                        <div className="m-card-footer">
                            {/* <span>9 Months</span>
                            <span>#10,000</span> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 4. HOW IT WORKS (STEP BY STEP WITH DOTS) --- */}
            <section className="m-how-section">
                <div className="m-how-container">
                    <h4 className="m-how-subtitle">How It Works</h4>
                    <h2 className="m-how-title">STEP BY STEP</h2>
                    
                    <div className="m-steps-grid">
                        <div className="m-step-item">
                            <div className="m-hexagon step-1">1</div>
                            <h3>Apply</h3>
                            <p>Share your goals.</p>
                        </div>
                        <div className="m-dot-line"></div>
                        <div className="m-step-item">
                            <div className="m-hexagon step-2">2</div>
                            <h3>Match</h3>
                            <p>Get paired with the right mentor.</p>
                        </div>
                        <div className="m-dot-line"></div>
                        <div className="m-step-item">
                            <div className="m-hexagon step-3">3</div>
                            <h3>Connect</h3>
                            <p>Join sessions regularly.</p>
                        </div>
                        <div className="m-dot-line"></div>
                        <div className="m-step-item">
                            <div className="m-hexagon step-4">4</div>
                            <h3>Grow</h3>
                            <p>Apply strategies to scale.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 5. TESTIMONIALS SECTION --- */}
            <section className="m-testimonials-section">
                <h2 className="m-testimonials-title">Testimonials</h2>
                
                <div className="m-testimonials-grid">
                    <div className="m-testimonial-card">
                        <div className="m-stars">⭐⭐⭐⭐⭐</div>
                        <div className="m-profile-circle"></div>
                        <p className="m-testimonial-text">
                            "My mentor helped me structure my business plan, 
                            and within 6 months I launched successfully"
                        </p>
                        <h4 className="m-testimonial-name">Chidi A</h4>
                        <p className="m-testimonial-role">Tech Founder</p>
                    </div>

                    <div className="m-testimonial-card">
                        <div className="m-stars">⭐⭐⭐⭐⭐</div>
                        <div className="m-profile-circle"></div>
                        <p className="m-testimonial-text">
                            "The leadership mentorship improved my 
                            confidence in managing my team."
                        </p>
                        <h4 className="m-testimonial-name">Tolu O</h4>
                        <p className="m-testimonial-role">Business Manager</p>
                    </div>
                </div>
            </section>

            {/* --- NEW SECTION: FINAL CTA --- */}
            <section className="m-cta-section">
                <div className="m-cta-container">
                    <h2>Your growth shouldn’t wait.</h2>
                    <p>Take the leap with a mentor who believes in your vision.</p>
                    <div className="m-cta-buttons">
                        <button className="m-cta-btn pink" onClick={handleNavigation}>Apply Now</button>
                        <button className="m-cta-btn outline" onClick={handleNavigation}>Book a Discovery Call</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Mentorship;