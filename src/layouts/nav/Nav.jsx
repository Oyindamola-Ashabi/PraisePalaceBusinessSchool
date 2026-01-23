import React from 'react';
import myLogo from '../../assets/LOGO 2.png';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';
import menuImage from '../../assets/hamimg.png'

const Nav = ({ isMenuOpen, toggleMenu, isTransparent }) => {
    const location = useLocation();
    
    // Updated Logic: Only these five pages get the black text theme
    const isDarkPage = location.pathname === '/about' || 
                       location.pathname === '/courses' || 
                       location.pathname === '/events' || 
                       location.pathname === '/mentorship' || 
                       location.pathname === '/training';
    
    const navClass = `${isTransparent ? 'nav-transparent' : 'nav-solid'} ${isDarkPage ? 'about-theme' : ''}`; 
    
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
                    {/* Home and Mentorship use the "home" id when active for the pink-text button style */}
                    <Link to='/' id={location.pathname === '/' ? "home" : ""}>Home</Link>
                    <Link to='/about' id={location.pathname === '/about' ? "home" : ""}>About</Link>
                    <Link to='/courses' id={location.pathname === '/courses' ? "home" : ""}>Courses</Link>
                    <Link to='/mentorship' id={location.pathname === '/mentorship' ? "home" : ""}>Mentorship</Link>
                    <Link to='/training' id={location.pathname === '/training' ? "home" : ""}>Training</Link>
                    <Link to='/events' id={location.pathname === '/events' ? "home" : ""}>Events</Link>
                    <Link to='/contact' id={location.pathname === '/contact' ? "home" : ""}>Contact</Link>
                    
                    <Link to="/appointment"> 
                        <button className="appointment-button">Book a Call</button>
                    </Link>
                    
                    <div className='hamburger-button' onClick={toggleMenu}>
                        <i className="menu-icon"></i> 
                    </div>
                </div>
            </nav>
            
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