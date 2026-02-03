import React from 'react';
import myLogo from '../../assets/LOGO 2.png';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';
import menuImage from '../../assets/hamimg.png';

const Nav = ({ isMenuOpen, toggleMenu, isTransparent }) => {
    const location = useLocation();
    
    const isDarkPage = location.pathname === '/about' || 
                       location.pathname === '/courses' || 
                       location.pathname.startsWith('/events') || 
                       location.pathname === '/mentorship' || 
                       location.pathname === '/training' ||
                       location.pathname === '/podcast' || 
                       location.pathname === '/appointment';
    
    const navClass = `${isTransparent ? 'nav-transparent' : 'nav-solid'} ${isDarkPage ? 'about-theme' : ''}`; 
    
    return (
        <div className="nav-container">
            {/* MAIN NAVIGATION */}
            <nav className={navClass}>
                <img 
                    src={myLogo} 
                    alt="logo" 
                    width="80px" 
                    height="80px"
                    style={{ cursor: 'pointer' }} 
                    onClick={() => { if (isMenuOpen) toggleMenu(); }}
                /> 
                
                <div className="links">
                    <Link to='/' id={location.pathname === '/' ? "home" : ""}>Home</Link>
                    <Link to='/about' id={location.pathname === '/about' ? "home" : ""}>About</Link>
                    <Link to='/courses' id={location.pathname === '/courses' ? "home" : ""}>Academy</Link>
                    <Link to='/mentorship' id={location.pathname === '/mentorship' ? "home" : ""}>Mentorship</Link>
                    <Link to='/podcast' id={location.pathname === '/podcast' ? "home" : ""}>Podcast</Link>
                    <Link to='/events' id={location.pathname.startsWith('/events') ? "home" : ""}>Events</Link>
                    <Link to='/contact' id={location.pathname === '/contact' ? "home" : ""}>Contact</Link>
                    
                    <Link to="/appointment"> 
                        <button className="appointment-button">Book a Call</button>
                    </Link>
                    
                    {/* HAMBURGER ICON */}
                    <div className='hamburger-button' onClick={toggleMenu}>
                        <i className="menu-icon"></i> 
                    </div>
                </div>
            </nav>
            
            {/* HAMBURGER MENU DETAIL PAGE */}
            <div className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}>
                 <div className="menu-content-wrapper">
                    <div className="menu-header">
                        <div className="menu-logo">
                            <span className="menu-logo-text">PPBS</span>
                            <div className="menu-business-name">
                                <p>PraisePalace</p>
                                <p>Business School</p>
                            </div>
                        </div>
                        <button className="menu-close-button" onClick={toggleMenu}>
                            <span className="close-icon-x"></span>
                        </button>
                    </div>

                    <div className="hamburger-main-layout">
                        <div className="hamburger-links">
                            <Link to="/" onClick={toggleMenu}>Home</Link>
                            <Link to="/about" onClick={toggleMenu}>About</Link>
                            <Link to="/courses" onClick={toggleMenu}>Academy</Link>
                            <Link to="/mentorship" onClick={toggleMenu}>Mentorship</Link>
                            <Link to="/podcast" onClick={toggleMenu}>Podcast</Link>
                            <Link to="/events" onClick={toggleMenu}>Events</Link>
                            <Link to="/contact" onClick={toggleMenu}>Contact</Link>
                            
                            {/* BOOK A CALL RESTORED HERE */}
                            <Link to="/appointment" className="menu-book-call-highlight" onClick={toggleMenu}>
                                Book a Call
                            </Link>
                        </div>
                        
                        <div className="menu-dynamic-divider"></div>
                        
                        <div className="menu-image-container">
                            <img src={menuImage} alt="Menu" className="menu-pill-image" />
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default Nav;