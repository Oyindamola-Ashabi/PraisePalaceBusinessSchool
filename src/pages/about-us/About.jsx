import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

import heroImage from '../../assets/heroabout.png';
import storyImage from '../../assets/chairmanmain.jpeg';

const About = () => {
  const storyRef = useRef(null);
  const missionRef = useRef(null); // Added for Mission movement
  const offerRef = useRef(null);
  
  const [isStoryVisible, setIsStoryVisible] = useState(false);
  const [isMissionVisible, setIsMissionVisible] = useState(false); // Added for Mission movement
  const [isOfferVisible, setIsOfferVisible] = useState(false);

  useEffect(() => {
    const observerOptions = { threshold: 0.2 };

    const storyObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsStoryVisible(true);
    }, observerOptions);

    const missionObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsMissionVisible(true);
    }, observerOptions);

    const offerObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsOfferVisible(true);
    }, observerOptions);

    if (storyRef.current) storyObserver.observe(storyRef.current);
    if (missionRef.current) missionObserver.observe(missionRef.current);
    if (offerRef.current) offerObserver.observe(offerRef.current);

    return () => {
      storyObserver.disconnect();
      missionObserver.disconnect();
      offerObserver.disconnect();
    };
  }, []);

  return (
    <main className="about-page-content">

      {/* 1. HERO SECTION */}
      <section className="about-hero-section">
        <img src={heroImage} alt="PraisePalace Campus" className="hero-background-image" />
        <div className="hero-content">
          <h1 className="water-text" data-text="Raising Principled Leaders for Tomorrow">
            Raising Principled Leaders <br className="hide-on-mobile" /> for Tomorrow
          </h1>
          <p>
            PraisePalace Business School is dedicated to shaping business <br className="hide-on-mobile" /> 
            leaders who thrive with values and vision.
          </p>
        </div>
      </section>

      {/* 2. OUR STORY SECTION */}
      <section className="academy-story-section" ref={storyRef}>
        <div className="academy-container">
          
          <div className={`academy-text-column ${isStoryVisible ? 'fade-in-left' : 'is-hidden'}`}>
            <h2 className="academy-title">The ‘Why’ Behind PraisePalace Business School</h2>
            
            <div className="academy-paragraphs">
              <p>
                PraisePalace Business School was born out of a profound observation: the world has no shortage 
                of managers, but it faces a desperate famine of **principled leaders**. We watched as the 
                traditional business landscape prioritized short-term gains over long-term legacy, often 
                leaving ethics and character in the rearview mirror.
              </p>
              <p>
                Our founders realized that most academic institutions were teaching the "how" of business—how 
                to balance a sheet, how to market a product, or how to optimize a supply chain—but they 
                were ignoring the "who." They were failing to develop the person behind the desk. 
                PraisePalace was established to change that narrative.
              </p>
              <p>
                We set out to create a sanctuary of learning where faith, ethics, and high-level strategy 
                intersect. We wanted a place where an aspiring CEO could learn to scale a multinational 
                corporation without losing their soul in the process. This mission drove us to recruit 
                a faculty of "Practicing Professionals"—men and women who have built successful empires 
                while maintaining an unshakeable moral compass.
              </p>
              <p>
                From our humble beginnings, we have evolved into a global ecosystem. We’ve faced the challenges 
                of proving that "principled business" isn't just a nice sentiment, but a competitive advantage. 
                Today, our graduates are not just employees; they are industry transformers who lead with 
                competence, compassion, and a commitment to excellence that is second to none.
              </p>
              <p>
                At PraisePalace, we don't just hand you a degree; we invite you into a lifelong quest for 
                greatness. We provide the mentorship, the network, and the spiritual grounding required to 
                navigate the complexities of the 21st-century marketplace.
              </p>
            </div>

            <Link to="/contact" className="academy-cta-button">
              GET IN TOUCH <span className="arrow">›</span>
            </Link>
          </div>

          <div className={`academy-image-column ${isStoryVisible ? 'slide-in-right' : 'is-hidden'}`}>
            <img src={storyImage} alt="Foundational Excellence" className="vertical-story-img" />
          </div>

        </div>
      </section>

      {/* 3. MISSION & VISION SECTION - NOW ANIMATED */}
      <section className="mission-vision-section" ref={missionRef}>
        <div className={`container ${isMissionVisible ? 'fade-up' : 'is-hidden'}`}>
          <div className="mission-vision-grid">
            <div className="info-box">
              <h3 className="pink-label">Our Mission</h3>
              <p>To empower the next generation of business leaders with ethical foundations and practical skills to transform industries and serve humanity with distinction.</p>
            </div>
            <div className="info-box">
              <h3 className="pink-label">Our Vision</h3>
              <p>To be the premier global benchmark for principled business education, fostering a community of integrity-driven innovators who impact the world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OFFERINGS SECTION */}
      <section className="offer-section" ref={offerRef}>
        <div className={`container ${isOfferVisible ? 'fade-up' : 'is-hidden'}`}>
          <h2 className="academy-title">What else does our School offer?</h2>
          <div className="offer-content">
            <p>Training is only the foundation. At PraisePalace, we have developed a 360-degree support system designed to take you from a student to a global stakeholder. We provide the necessities for succeeding in a competitive market while maintaining your values.</p>
            <p>Our students benefit from our Executive Mentorship Program, which pairs you with seasoned leaders for one-on-one sessions. We also offer access to our Innovation Hub, where business ideas are refined and pitched to our network of principled investors.</p>
            <p>Our campus features state-of-the-art collaborative suites, professional networking lounges, and high-tech seminar rooms. We even provide an "Alumni for Life" program, ensuring that you have access to continuous learning and a supportive community long after you leave our halls.</p>
            <p>Beyond the classroom, our social and spiritual events—ranging from Executive Retreats to Community Impact Projects—ensure that you are part of a family of like-minded professionals who share your challenges and your victories.</p>
            
            <Link to="/courses" className="academy-cta-button">
              JOIN THE ACADEMY <span className="arrow">›</span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default About;