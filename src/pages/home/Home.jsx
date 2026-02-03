import React, { useState, useEffect } from 'react'; 
import { useNavigate, Link } from "react-router-dom"; 
import Button from "../../components/button-one/Button"
import headingImage from '../../assets/image01.jpeg'
import heroImg2 from '../../assets/two.png'; 
import heroImg3 from '../../assets/homesecondwomanhero.jpg'
import sectionOneImg from '../../assets/chairmanmain.jpeg'
import sectionThreeImgTwo from '../../assets/iconbootcamp.png.png'
import sectionThreeImgThree from '../../assets/icondigitalskilllab.png.png'
import sectionThreeImgFour from '../../assets/trainingimg.png.png'
import sectionFourImgOne from '../../assets/tablerpoint.png.png'
import sectionFourImgTwo from '../../assets/majesticons_arrow-up-line.png.png'
import sectionFourImgThree from '../../assets/eventimg.png.png'
import podcastMainImage from '../../assets/miclady.png'
import playIcon from '../../assets/play.png'
import arrowRight from '../../assets/sidearrow.png'
import './Home.css'

const Home = ({ courses, highlights, testimonials, FAQ }) => {
  const [openId, setOpenId] = useState(null);
  const [index, setIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false); 
  const navigate = useNavigate();
  
  const dynamicWords = ["Entreprenuer", "Innovation", "Leadership"];
  const dynamicImages = [headingImage, heroImg2, heroImg3]; 

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % dynamicWords.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [dynamicWords.length]);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const handleRegisterNavigation = (e) => {
    if (e) e.preventDefault();
    setIsExiting(true); 
    // Wait for the CSS animation to complete
    setTimeout(() => {
      navigate('/register');
    }, 600);
  };

  return (
    <div className={`homescreen ${isExiting ? 'exit-active' : ''}`}>
      <div 
        className="head" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${dynamicImages[index % dynamicImages.length]})`
        }}
      >
        <div className="hero">
          <h1>
            Empowering <span className={dynamicWords[index].toLowerCase()}>{dynamicWords[index]}</span>
          </h1>
          <p>Join PraisePalace Business School and gain practical business knowledge,<br /> mentorship, and tools to grow your business and career.</p>
          <div className="hero-button">
            {/* Wrapped in a div to catch the click for the animation */}
            <div onClick={handleRegisterNavigation} style={{ display: 'inline-block' }}>
               <Button title="Register Now" link="#" />
            </div>
            <Button title="Join Mentorship" type="secondary" link="/mentorship" />
          </div>
        </div>
      </div>

      <div className="mini-text">
        <h2>We shape forward-thinking leaders by blending <br />knowledge, mentorship, and real-world skills to help
          <br />businesses grow and transform societies.
        </h2>
      </div>

      <div className="section">
        <section>
          <div className="abtus">
            <h1>About <span className="p-color">Our Business School</span></h1>
            <p>At PraisePalace Business School, we are more than a place of <br />learning, we are a hub for shaping
              tomorrow’s leaders. By <br />combining Christian principles with world-class business <br />education,
              we help entrepreneurs and professionals unlock <br />their potential.
            </p>
            <p>Our programs bridge knowledge with practice, equipping you <br />to thrive in today’s market while
                creating lasting impact in your <br />community.</p>
            <div className="Read-more-button"><Button title="Read More" link="/about" /></div>
          </div>
          <div className="abtusimg">
            <img src={sectionOneImg} alt="About Us" />
          </div>
        </section>

        <div className="elipse"></div>

        <div className="course-section">
          <h1>Explore our <span className="p-color">Courses</span></h1>
          <div className="bckworld-img">
            <div className="shortc-group">
              {courses.map((course) => (
                <div className="short-courses" key={course.id}>
                  <img src={course.img} alt={course.title} />
                  <h3>{course.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: course.description }} />
                  <Button title="Enroll" type="primary small-button" link={course.link} />
                </div>
              ))}
            </div>
            <div className="short-menthorship">
              <h2>Get guidance from experienced business leaders.</h2>
              <Button title="Apply for Mentorship" type="primary md-button" link="/mentorship" />
            </div>
          </div>
        </div>

        <div className="higlight-Training-section">
          <div className="hl">
            <h1>Scroll Highlights</h1>
            <div className="box-iems">
              {highlights.map((high) => (
                <div className="box" key={high.id}>
                  <img src={high.img} alt={high.title} />
                  <h3>{high.title}</h3>
                  <p>{high.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="tr">
            <h1>Trainings</h1>
            <div className="training-items">
              <div className="training-box">
                <div className="main-training">
                  <img src={sectionThreeImgTwo} alt="Bootcamp" />
                  <h3>Startup Bootcamp</h3>
                  <p>Build your business from the ground up.</p>
                </div>
                <div className="line-1" id="move1"></div>
                <div className="main-training" id="move2">
                  <img src={sectionThreeImgThree} alt="Finance" />
                  <h3>Finance Clinic</h3>
                  <p>Smart money management for entrepreneurs.</p>
                </div>
                <div className="line-1" id="move3"></div>
                <div className="main-training" id="move4">
                  <img src={sectionThreeImgThree} alt="Digital Skills" />
                  <h3>Digital Skills Lab</h3>
                  <p>Grow your brand with online tools.</p>
                </div>
              </div>
              <div className="training-img-box">
                <img src={sectionThreeImgFour} alt="Training" />
              </div>
            </div>
            <div className="viewall-button"><Button title="View All" link="/courses"/></div>
          </div>
        </div>

        <div className="upcoming-event-section">
          <div className="event-text">
            <h1>Upcoming <span>Events</span></h1>
            <p>Stay updated with our special events, business summits, and networking sessions.</p>
            <div className="dotted-text">
              <div className="dotted-text-content">
                <img src={sectionFourImgOne} alt="Point" />
                <p>Business Leadership Summit - Sept 10, 2025</p>
              </div>
              <div className="dotted-text-content">
                <img src={sectionFourImgOne} alt="Point" />
                <p>Finance & Investment Workshop - Oct 2, 2025</p>
              </div>
              <div className="dotted-text-content" id="down">
                <img src={sectionFourImgTwo} alt="Arrow" />
                <Link to='/events'> <p>Go to the events calendar</p></Link>
              </div>
            </div>
          </div>
          <div className="event-img">
            <img src={sectionFourImgThree} alt="Event" />
          </div>
        </div>

        <div className="home-testimonial-section">
          <h1>What <span>Our Students Say</span> About Us</h1>
          <div className="two-testimonial-boxes">
            {testimonials.slice(0, 2).map((test) => (
              <div className="main-testimonial-content" key={test.id}>
                <img src={test.img} alt={test.name} />
                <div className="testmonial-eclipse"></div>
                <p>{test.text}</p>
                <h3>{test.name}</h3>
                <p>{test.title}</p>
              </div>
            ))}
          </div>
          <div className="main-testimonial-content">
            <img src={testimonials[2]?.img} alt={testimonials[2]?.name} />
            <div className="testmonial-eclipse"></div>
            <p>{testimonials[2]?.text}</p>
            <h3>{testimonials[2]?.name}</h3>
            <p>{testimonials[2]?.title}</p>
          </div>
        </div>

        <div className="podcast-section-replica">
          <h1>Listen & Learn – Our <span className="p-color">Podcast</span></h1>
          <div className="podcast-main-container">
            <div className="featured-episode-box">
              <div className="featured-image-container">
                <img src={podcastMainImage} alt="Podcast" />
              </div>
              <div className="featured-details">
                <h2>Ep 07: Mastering Digital Growth</h2>
                <p>Expert insight to grow your Business in the digital age</p>
                <div className="podcast-duration">
                  <img src={playIcon} alt="Play" className="play-icon-small" />
                  <span>32min</span>
                </div>
              </div>
            </div>
          </div>
          <div className="episode-list-container">
            <div className="episode-list-item"><h3>Ep 06: Mastering Digital Growth</h3><span>28min</span></div>
            <div className="episode-list-item"><h3>Ep 05: Building Sustainable Businesses</h3><span>28min</span></div>
            <div className="episode-list-item"><h3>Ep 04: Investing in your Future</h3><span>28min</span></div>
          </div>
          <div className="explore-all-link">
            <Link to="/podcast">
              <img src={arrowRight} alt="Explore" className="arrow-icon" />
              Explore All Episodes
            </Link>
          </div>
        </div>

        <div className="faq-section">
          <div className="section">
            <h1>Frequently <span className="p-color">Asked</span> Questions</h1>
            <div className="faq-container">
              {FAQ.map(item => (
                <div key={item.id} className="faq-item">
                  <button className="faq-question-button" onClick={() => toggleFAQ(item.id)}>
                    <span className="question-text">{item.question}</span>
                    <span className="arrow-icon">{openId === item.id ? 'V' : '→'}</span>
                  </button>
                  <div className={`faq-answer-panel ${openId === item.id ? 'open' : ''}`}>
                    <p className="faq-answer">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="home-contact-section">
          <div className="contact-content-container">
            <h1>Need help? <span className="p-color">Contact us</span> for support.</h1>
            <p>Got more questions? Contact us below!</p>
            <a href="/contact" className="contact-us-button-outline">Contact Us</a>
            <div className="contact-form-box">
              <p>Send message directly below.</p>
              <div className="message-textarea-container">
                <textarea placeholder="Type your message here..." rows="8"></textarea>
              </div>
              <button className="send-message-button">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;