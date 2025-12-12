import { Link } from 'react-router-dom';
import './Hamburger.css'; // Import your hamburger specific CSS

const Hamburger = ({ toggleMenu }) => {
    return (
        // The menu will be hidden by the conditional rendering in App.jsx
        <div className="hamburger-menu">
            <div className="hamburger-links">
                {/* 🆕 Add onClick={toggleMenu} to close the menu when a link is clicked */}
                <Link to='/' onClick={toggleMenu}>Home</Link>
                <Link to='/about' onClick={toggleMenu}>About</Link>
                <Link to='/courses' onClick={toggleMenu}>Courses</Link>
                <Link to='/mentorship' onClick={toggleMenu}>Mentorship</Link>
                <Link to='/training' onClick={toggleMenu}>Training</Link>
                <Link to='/events' onClick={toggleMenu}>Events</Link>
                <Link to='/contact' onClick={toggleMenu}>Contact</Link>
                <Link to='/appointment' onClick={toggleMenu}><button className="appointment-button">Book a Call</button></Link>
            </div>
        </div>
    );
};

export default Hamburger;