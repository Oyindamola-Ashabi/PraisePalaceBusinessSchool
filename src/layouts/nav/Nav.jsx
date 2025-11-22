import myLogo from '../../assets/LOGO 2.png'
import { Link } from 'react-router-dom'
import Button from '../../components/button-one/Button'
import './Nav.css'


const Nav = () => {
  return (
    <div>
      <div className="nav-container">
        <nav>
          <img src={myLogo} alt="logo" width="100px" height="100px" />
          <div className="links">
            <Link to='/' id="home">Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/courses'>Courses</Link>
            <Link to='/mentorship'>Mentorship</Link>
            <Link to='/training'>T
            raining</Link>
            <Link to='/events'>Events</Link>
            <Link to='/contact'>Contact</Link>
            <Link to="/appointment"> <button className="appointment-button">Book a Call</button></Link>
            {/* <Link to = '/fa-solid fa-bars'> <i class="fa-solid fa-bars"></i> */}
            <Link to='/' className='hamburger-button'><i class="fa-solid fa-bars"></i></Link>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Nav