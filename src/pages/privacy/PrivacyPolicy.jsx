import React, { useState } from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    {
      id: 'collection',
      title: '1. Information We Collect',
      content: (
        <div className="info-grid">
          <div className="info-block">
            <h3>Information You Provide</h3>
            <ul>
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Payment and billing details</li>
              <li>Professional background</li>
            </ul>
          </div>
          <div className="info-block">
            <h3>Automatically Collected</h3>
            <ul>
              <li>IP address and device info</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent</li>
              <li>Cookies and analytics data</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'usage',
      title: '2. How We Use Your Information',
      content: (
        <ul className="bullet-list">
          <li>To process registrations and payments</li>
          <li>To deliver certificates and materials</li>
          <li>To communicate about upcoming events</li>
          <li>To improve our website experience</li>
          <li>To comply with legal obligations</li>
        </ul>
      )
    },
    {
      id: 'sharing',
      title: '3. Sharing Your Information',
      content: (
        <>
          <p>We do <strong>not</strong> sell your personal data. We share it only with:</p>
          <ul className="bullet-list">
            <li>Trusted service providers (Payment processors, Zoom)</li>
            <li>Event venues or partners when required</li>
            <li>Legal authorities when required by law</li>
          </ul>
        </>
      )
    },
    {
      id: 'security',
      title: '4. Data Security',
      content: <p>We use industry-standard security measures (encryption, access controls) to protect your data. However, no method of storage is 100% secure.</p>
    },
    {
      id: 'rights',
      title: '5. Your Rights',
      content: (
        <>
          <ul className="bullet-list">
            <li>Access, correct, or delete your data</li>
            <li>Restrict or object to processing</li>
            <li>Request data portability</li>
          </ul>
          <p className="contact-line">To exercise these rights, please contact us at: <br/> <a href="mailto:privacy@praisepalacebusinessschool.com">privacy@praisepalacebusinessschool.com</a></p>
        </>
      )
    },
    {
      id: 'cookies',
      title: '6. Cookies & Tracking',
      content: <p>We use cookies to improve your experience. You can manage preferences through your browser settings.</p>
    },
    {
      id: 'changes',
      title: '7. Changes to This Policy',
      content: <p>We may update this policy periodically. Significant changes will be posted here with an updated date.</p>
    }
  ];

  return (
    <div className="privacy-policy-page">
      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="hero-bg-gradient"></div>
        <div className="hero-content">
          <h1>Privacy Policy</h1>
          <p>Your trust and privacy are our top priority</p>
          <div className="hero-meta"><span>Last updated: Feb 18, 2026</span></div>
        </div>
      </section>

      <div className="privacy-content-wrapper">
        {/* DESKTOP SIDEBAR */}
        <aside className="privacy-sidebar">
          <nav className="sidebar-nav">
             {/* Link for the Intro Card */}
             <button onClick={() => document.getElementById('intro-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                Our Commitment
              </button>
            {sections.map((section) => (
              <button 
                key={section.id} 
                onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="privacy-main">
          
          {/* THE SEPARATE INTRO CARD */}
          <div id="intro-card" className="privacy-intro-section">
             <div className="section-header-static">
                <h2>Our Commitment</h2>
             </div>
             <div className="section-body-static">
                <p className="intro">
                  At <strong>PraisePalace Business School</strong>, we are deeply committed to protecting your personal information. 
                  This Privacy Policy explains how we collect, use, share, and safeguard your data when you visit our website, 
                  register for events, enroll in programs, or interact with our services.
                </p>
             </div>
          </div>

          {/* ACCORDION SECTIONS */}
          {sections.map((section, index) => (
            <div 
              key={section.id} 
              id={section.id} 
              className={`privacy-section ${activeIndex === index ? 'is-active' : ''}`}
            >
              <div className="section-header" onClick={() => toggleAccordion(index)}>
                <h2>{section.title}</h2>
                <span className="accordion-icon">{activeIndex === index ? '−' : '+'}</span>
              </div>
              <div className="section-body">
                {section.content}
              </div>
            </div>
          ))}

          {/* Contact Footer */}
          <div className="contact-footer">
            <h3>Questions or Concerns?</h3>
            <p>We're here to help.<br />
              Email: <a href="mailto:info@praisepalacebusinessschool.com">info@praisepalacebusinessschool.com</a><br />
              Address: 272 Countess Way, Broughton, Milton Keynes, England, MK10 7EW.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PrivacyPolicy;