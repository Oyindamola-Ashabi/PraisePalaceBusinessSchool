

// import React from 'react';

import './About.css';


import heroImage from '../../assets/heroabout.png';
import storyImage from '../../assets/our_story_img.png.png';
import contactImage from '../../assets/hamimg.png';


import integrityIcon from '../../assets/hamimg.png';
import innovationIcon from '../../assets/hamimg.png';
import excellenceIcon from '../../assets/hamimg.png';
import communityIcon from '../../assets/hamimg.png';


const About = ({ isMenuOpen, toggleMenu }) => {

  return (

    <main className="about-page-content">


      <section className="about-hero-section">
        <img src={heroImage} alt="Students collaborating" className="hero-background-image" />
        <div className="hero-content">
          <h1>Raising Principled Leaders <br /> for Tomorrow</h1>
          <p>PraisePalace Business School is dedicated to shaping business <br /> leaders who thrive with values and vision.</p>
        </div>
      </section>


      <section className="our-story-section">
        <div className="story-content-wrapper">

          <div className="story-text">
            <h2 className="section-title">Our Story</h2>
            <p>
              Founded with the vision to merge faith-based values and business education,
              PraisePalace Business School provides training that develops the mind,
              builds integrity, and inspires impact.
            </p>
            <p>
              Through mentorship, practical learning, and a strong community, we prepare
              entrepreneurs and professionals to succeed in business without
              compromising their values.
            </p>
          </div>

          <div className="story-image">
            {/* The gray background in the CSS handles the bottom part of the frame */}
            <img src={storyImage} alt="Instructor presenting to class" />
          </div>

        </div>
      </section>


      <section className="values-section">
        <div className="values-wrapper">

          {/* Top Row: Mission & Vision */}
          <div className="mission-vision-grid">
            <div className="mission-box">
              <h3 className="pink-text">Mission</h3>
              <p>
                is to provide aspiring entrepreneurs and professionals with practical business knowledge
                rooted in strong values. We are committed to equipping our students with the tools,
                skills, and mindset needed to build sustainable enterprises, lead with integrity,
                and create meaningful impact in their communities and beyond.
              </p>
            </div>
            <div className="vision-box">
              <h3 className="pink-text">Vision</h3>
              <p>
                is to become a globally recognized center for business education where character and
                competence go hand in hand. We aim to raise principled leaders who are not only
                successful in their careers but also drive innovation, inspire positive change,
                and leave lasting legacies in business and society.
              </p>
            </div>
          </div>

          {/* Bottom Row: Core Value & Why Choose Us */}
          <div className="core-why-grid">

            <div className="core-value-box">
              <h3 className="pink-text">Core Value</h3>
              <div className="value-icons">
                <div className="value-item">
                  <img src={integrityIcon} alt="Integrity" />
                  <span>Integrity</span>
                </div>
                <div className="value-item">
                  <img src={innovationIcon} alt="Innovation" />
                  <span>Innovation</span>
                </div>
                <div className="value-item">
                  <img src={excellenceIcon} alt="Excellence" />
                  <span>Excellence</span>
                </div>
                <div className="value-item">
                  <img src={communityIcon} alt="Community" />
                  <span>Community</span>
                </div>
              </div>
            </div>

            <div className="why-choose-box">
              <h3 className="pink-text">Why Choose Us?</h3>
              <div className="why-list">
                <p><span className="check-icon">✓</span> Practical, real-world business training</p>
                <p><span className="check-icon">✓</span> Experienced mentors & business leaders</p>
                <p><span className="check-icon">✓</span> Supportive faith-based learning environment</p>
                <p><span className="check-icon">✓</span> Flexible programs tailored for growth</p>
              </div>
            </div>

          </div>

        </div>
      </section>


      <section className="contact-me-section">
        <div className="contact-wrapper">

          {/* Left Side: Arrow Graphic */}
          <div className="contact-image-area">
            <img src={contactImage} alt="Contact me arrow graphic" />
          </div>

          {/* Right Side: Form */}
          <div className="contact-form-area">
            <h2>Contact me</h2>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>

              <div className="form-group-inline">
                <div className="input-field">
                  <label htmlFor="firstName">First name</label>
                  <input type="text" id="firstName" placeholder="Jane" />
                </div>
                <div className="input-field">
                  <label htmlFor="lastName">Last name</label>
                  <input type="text" id="lastName" placeholder="Smitheron" />
                </div>
              </div>

              <div className="input-field">
                <label htmlFor="email">Email address</label>
                <input type="email" id="email" placeholder="email@janesfakedomain.net" />
              </div>

              <div className="input-field">
                <label htmlFor="message">Your message</label>
                <textarea id="message" placeholder="Enter your question or message"></textarea>
              </div>

              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>

        </div>
      </section>

    </main>
  );
};

export default About;

// import React from 'react'

// const About = () => {
//   return (
//     <div>About</div>
//   )
// }

// export default About