// src/components/nav/Nav.jsx

import myLogo from '../../assets/LOGO 2.png';
import { Link } from 'react-router-dom';
import './Nav.css';

// 💥 IMPORTANT: Ensure this path is correct for the decorative image
import menuImage from '../../assets/miclady.png'

const Nav = ({ isMenuOpen, toggleMenu }) => {
    return (
        <div className="nav-container">
            <nav>
                <img 
                    src={myLogo} 
                    alt="logo" 
                    width="80px" 
                    height="80px"
                    onClick={isMenuOpen ? toggleMenu : undefined}
                /> 
                
                {/* Desktop links container */}
                <div className={`links ${isMenuOpen ? 'desktop-hidden' : ''}`}>
                    {/* Desktop Links */}
                    <Link to='/' id="home">Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/courses'>Courses</Link>
                    <Link to='/mentorship'>Mentorship</Link>
                    <Link to='/training'>Training</Link>
                    <Link to='/events'>Events</Link>
                    <Link to='/contact'>Contact</Link>
                    
                    {/* Desktop Button */}
                    <Link to="/appointment"> 
                        <button className="appointment-button">Book a Call</button>
                    </Link>
                    
                    {/* FIXED HAMBURGER BUTTON (Opens the menu) */}
                    <div className='hamburger-button' onClick={toggleMenu}>
                        <i className="menu-icon"></i> 
                    </div>
                </div>
            </nav>
            
            {/* 💥 FIXED HAMBURGER MENU OVERLAY 💥 */}
            <div className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}>
                <div className="menu-content-wrapper">
                    
                    {/* LEFT COLUMN: Logo, Close Button, and Links */}
                    <div className="menu-links-column">
                        <div className="menu-header">
                            {/* Logo section matching the image design */}
                            <div className="menu-logo">
                                <span className='menu-logo-text'>Logo</span>
                                <div className="menu-business-name">
                                    <p>PraisePalace</p>
                                    <p>Business School</p>
                                </div>
                            </div>
                            
                            {/* Close Button (X) - Clicks toggleMenu to close */}
                            <button className="menu-close-button" onClick={toggleMenu}>
                                <i className="close-icon"></i>
                            </button>
                        </div>
                        
                        {/* Links List (ALL LINKS INCLUDED) */}
                        <div className="hamburger-links">
                            <Link to='/' id="menu-home" onClick={toggleMenu}>Home</Link>
                            <Link to='/about' onClick={toggleMenu}>About Us</Link>
                            <Link to='/courses' onClick={toggleMenu}>Courses</Link>
                            <Link to='/mentorship' onClick={toggleMenu}>Mentorship</Link>
                            <Link to='/training' onClick={toggleMenu}>Training</Link>
                            <Link to='/events' onClick={toggleMenu}>Events</Link>
                            <Link to='/podcast' onClick={toggleMenu}>Podcast</Link>
                            <Link to='/contact' onClick={toggleMenu}>Contact Us</Link>
                            
                            {/* Mobile Book a Call Link/Button */}
                            <Link to="/appointment" onClick={toggleMenu} className="mobile-book-call-link">
                                Book a Call
                            </Link>
                        </div>
                    </div>
                    
                    {/* RIGHT COLUMN: Decorative Image (Laptop/Desktop View) */}
                    <div className="menu-image-column">
                        <img 
                            src={menuImage} 
                            alt="Business professionals"
                            className='menu-decorative-image' 
                        />
                    </div>

                </div>
            </div>
            {/* 💥 END FIXED MENU 💥 */}
        </div>
    );
}

export default Nav;