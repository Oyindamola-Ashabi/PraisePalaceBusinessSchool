import myLogo from '../../assets/LOGO 2.png';
import { Link } from 'react-router-dom';
// import Button from '../../components/button-one/Button'; // Assuming this is not needed here
import './Nav.css';
import React from 'react'; // Ensure React is imported if you use useState/other hooks here

/*
  NOTE: This component assumes the parent component (e.g., App.jsx or Layout.jsx) 
  is managing the state for the menu:
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  <Nav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
*/

const Nav = ({ isMenuOpen, toggleMenu }) => {
    return (
        <div className="nav-container">
            <nav>
                {/* Logo - kept within the nav container */}
                <img src={myLogo} alt="logo" width="80px" height="80px" /> 
                
                <div className="links">
                    {/* Desktop Links - Hidden on Mobile via CSS */}
                    <Link to='/' id="home">Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/courses'>Courses</Link>
                    <Link to='/mentorship'>Mentorship</Link>
                    <Link to='/training'>Training</Link>
                    <Link to='/events'>Events</Link>
                    <Link to='/contact'>Contact</Link>
                    
                    {/* Book a Call Button Link - Hidden on Mobile via CSS */}
                    <Link to="/appointment"> <button className="appointment-button">Book a Call</button></Link>
                    
                    {/* Hamburger/Close Button - ALWAYS VISIBLE */}
                    <div className='hamburger-button' onClick={toggleMenu}>
                        <i className={isMenuOpen ? "fa-solid fa-times" : "fa-solid fa-bars"}></i> 
                    </div>
                </div>
            </nav>
            
            {/* Mobile Menu Overlay - Toggles visibility based on isMenuOpen state */}
            <div className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}>
                <div className="hamburger-links">
                    {/* Links inside the mobile menu */}
                    <Link to='/' id="home" onClick={toggleMenu}>Home</Link>
                    <Link to='/about' onClick={toggleMenu}>About</Link>
                    <Link to='/courses' onClick={toggleMenu}>Courses</Link>
                    <Link to='/mentorship' onClick={toggleMenu}>Mentorship</Link>
                    <Link to='/training' onClick={toggleMenu}>Training</Link>
                    <Link to='/events' onClick={toggleMenu}>Events</Link>
                    <Link to='/contact' onClick={toggleMenu}>Contact</Link>
                    <Link to="/appointment" onClick={toggleMenu}>Book a Call</Link>
                </div>
            </div>
        </div>
    );
}

export default Nav;