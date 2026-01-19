import React from 'react';
import myLogo from '../../assets/LOGO 2.png';
import { Link, useLocation } from 'react-router-dom'; // Added useLocation
import './Nav.css';
import menuImage from '../../assets/hamimg.png'

const Nav = ({ isMenuOpen, toggleMenu, isTransparent }) => {
    const location = useLocation();
    
    // Check if the current page is the About page
    const isAboutPage = location.pathname === '/about';
    
    // Combine the transparent/solid logic with an 'about-theme' class if on the about page
    const navClass = `${isTransparent ? 'nav-transparent' : 'nav-solid'} ${isAboutPage ? 'about-theme' : ''}`; 
    
    return (
        <div className="nav-container">
            <nav className={navClass}>
                <img 
                    src={myLogo} 
                    alt="logo" 
                    width="80px" 
                    height="80px"
                    style={{ cursor: 'pointer' }} 
                    onClick={isMenuOpen ? toggleMenu : undefined}
                /> 
                
                <div className={`links ${isMenuOpen ? 'desktop-hidden' : ''}`}>
                    <Link to='/' id={location.pathname === '/' ? "home" : ""}>Home</Link>
                    <Link to='/about' id={location.pathname === '/about' ? "home" : ""}>About</Link>
                    <Link to='/courses'>Courses</Link>
                    <Link to='/mentorship'>Mentorship</Link>
                    <Link to='/training'>Training</Link>
                    <Link to='/events'>Events</Link>
                    <Link to='/contact'>Contact</Link>
                    
                    <Link to="/appointment"> 
                        <button className="appointment-button">Book a Call</button>
                    </Link>
                    
                    <div className='hamburger-button' onClick={toggleMenu}>
                        <i className="menu-icon"></i> 
                    </div>
                </div>
            </nav>
            
            {/* ... Hamburger Menu Overlay remains exactly the same as your code ... */}
            <div className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}>
                <div className="menu-content-wrapper">
                    <div className="menu-links-column">
                        <div className="menu-header">
                            <div className="menu-logo">
                                <span className='menu-logo-text'>Logo</span>
                                <div className="menu-business-name">
                                    <p>PraisePalace</p>
                                    <p>Business School</p>
                                </div>
                            </div>
                            <button className="menu-close-button" onClick={toggleMenu}>
                                <i className="close-icon"></i>
                            </button>
                        </div>
                        <div className="hamburger-links">
                            <Link to='/' id="menu-home" onClick={toggleMenu}>Home</Link>
                            <Link to='/about' onClick={toggleMenu}>About Us</Link>
                            <Link to='/courses' onClick={toggleMenu}>Courses</Link>
                            <Link to='/mentorship' onClick={toggleMenu}>Mentorship</Link>
                            <Link to='/training' onClick={toggleMenu}>Training</Link>
                            <Link to='/events' onClick={toggleMenu}>Events</Link>
                            <Link to='/podcast' onClick={toggleMenu}>Podcast</Link>
                            <Link to='/contact' onClick={toggleMenu}>Contact Us</Link>
                            <Link to="/appointment" onClick={toggleMenu} className="mobile-book-call-link">Book a Call</Link>
                        </div>
                    </div>
                    <div className="menu-image-column">
                        <img src={menuImage} alt="Business professionals" className='menu-decorative-image' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;