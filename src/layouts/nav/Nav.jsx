// src/components/nav/Nav.jsx

import myLogo from '../../assets/LOGO 2.png';
import { Link } from 'react-router-dom';
import './Nav.css';
import React from 'react';

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
                
                {/* Desktop links container (Podcast link is NOT here) */}
                <div className={`links ${isMenuOpen ? 'desktop-hidden' : ''}`}>
                    {/* Desktop Links */}
                    <Link to='/' id="home">Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/courses'>Courses</Link>
                    <Link to='/mentorship'>Mentorship</Link>
                    <Link to='/training'>Training</Link>
                    <Link to='/events'>Events</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to="/appointment"> <button className="appointment-button">Book a Call</button></Link>
                    
                    {/* FIXED HAMBURGER BUTTON (Opens the menu) */}
                    <div className='hamburger-button' onClick={toggleMenu}>
                        <i className="menu-icon"></i> 
                    </div>
                </div>
            </nav>
            
            {/* Mobile Menu Overlay - This slides in */}
            <div className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}>
                
                <div className="hamburger-links">
                    {/* Links inside the mobile menu (Clicking closes the menu) */}
                    <Link to='/' id="home" onClick={toggleMenu}>Home</Link>
                    <Link to='/about' onClick={toggleMenu}>About</Link>
                    <Link to='/courses' onClick={toggleMenu}>Courses</Link>
                    <Link to='/mentorship' onClick={toggleMenu}>Mentorship</Link>
                    <Link to='/training' onClick={toggleMenu}>Training</Link>
                    <Link to='/events' onClick={toggleMenu}>Events</Link>
                    
                    {/* 👇 ADDED: The Podcast Link, visible only in the mobile menu */}
                    <Link to='/podcast' onClick={toggleMenu}>Podcast</Link>
                    
                    <Link to='/contact' onClick={toggleMenu}>Contact</Link>
                    <Link to="/appointment" onClick={toggleMenu}>Book a Call</Link>
                </div>
            </div>
        </div>
    );
}

export default Nav;