import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 

// --- Image Imports (Use your actual paths) ---
import FacebookIcon from '../../assets/majesticons_arrow-up-line.png.png'
import XIcon from '../../assets/majesticons_arrow-up-line.png.png'
import InstagramIcon from '../../assets/majesticons_arrow-up-line.png.png'
import LinkedInIcon from '../../assets/majesticons_arrow-up-line.png.png'
import YouTubeIcon from '../../assets/majesticons_arrow-up-line.png.png'
import LocationIcon from '../../assets/majesticons_arrow-up-line.png.png'
import PhoneIcon from '../../assets/majesticons_arrow-up-line.png.png'
import EmailIcon from '../../assets/majesticons_arrow-up-line.png.png'

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-top-section">
                <div className="footer-newsletter">
                    <input type="email" placeholder="Enter email for news letter" />
                    <button className="subscribe-button">
                        <img src={EmailIcon} alt="Subscribe" className="subscribe-icon"/>
                        SUBSCRIBE
                    </button>
                </div>
            </div>

            <div className="footer-content-area">
                
                {/* 1. Logo and Socials Column */}
                <div className="footer-column logo-column">
                    <div className="footer-logo-circle">
                        <h1>LOGO</h1>
                    </div>
                    <p>Shaping future leaders through practical training, events, and mentorship that drive business excellence.</p>
                    <div className="footer-socials">
                        {/* Placeholder links - adjust 'to' as necessary */}
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src={FacebookIcon} alt="Facebook" /></a>
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer"><img src={XIcon} alt="X" /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src={InstagramIcon} alt="Instagram" /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><img src={LinkedInIcon} alt="LinkedIn" /></a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><img src={YouTubeIcon} alt="YouTube" /></a>
                    </div>
                </div>

                {/* 2. Quick Links Column */}
                <div className="footer-column quick-links-column">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/courses">Courses</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/training">Training</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
                
                {/* 3. Resources Column */}
                <div className="footer-column resources-column">
                    <ul>
                        <li><Link to="/podcast">Podcast</Link></li>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/learn-more">Learn More</Link></li>
                        <li><Link to="/get-started">Get Started</Link></li>
                        <li><Link to="/mentorship">Mentorship</Link></li>
                        <li><Link to="/subscribe">Subscribe Now</Link></li>
                    </ul>
                </div>

                {/* 4. Contact Us Info Column */}
                <div className="footer-column contact-info-column">
                    <h2 className="p-color">Contact Us</h2>
                    <p className="contact-description">We empower entrepreneurs and professionals through podcasts, webinars, training, and events, designed to inspire growth and success. Connect with us to learn, grow, and lead.</p>
                    
                    <div className="contact-detail">
                        <img src={LocationIcon} alt="Location" />
                        <span>United Kingdom</span>
                    </div>
                    <div className="contact-detail">
                        <img src={PhoneIcon} alt="Phone" />
                        <span>0789564335</span>
                    </div>
                    <div className="contact-detail">
                        <img src={EmailIcon} alt="Email" />
                        <span>contact@praisebusinessschool.com</span>
                    </div>
                </div>

            </div>

            <div className="footer-bottom-bar">
                <div className="bottom-links">
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    <Link to="/terms-and-condition">Terms and condition</Link>
                </div>
                <p className="copyright">copyright &copy; AbbfemTechnology 2025. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;