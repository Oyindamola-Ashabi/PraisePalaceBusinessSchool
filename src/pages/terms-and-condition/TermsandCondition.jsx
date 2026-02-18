import React, { useState } from 'react';
import './TermsandCondition.css';

const TermsandCondition = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    { 
      id: 'about', 
      title: '1. About PraisePalace Business School', 
      content: (
        <>
          <p>PraisePalace Business School is a premier institution dedicated to empowering entrepreneurs, professionals, 
             and leaders through practical business education, mentorship, and real-world training rooted in Christian 
             values and excellence.</p>
          <div style={{ marginTop: '15px', padding: '15px', background: '#fef2f2', borderRadius: '8px', borderLeft: '4px solid #e91e63' }}>
            <p><strong>Company Registration Details:</strong></p>
            <p>Company Number: 17017376</p>
            <p>Registered in England and Wales</p>
            <p><strong>Registered Office Address:</strong><br/>
            272 Countess Way, Broughton, Milton Keynes, England, MK10 7EW.</p>
          </div>
        </>
      )
    },
    { id: 'purpose', title: '2. Purpose & Scope', content: <p>These Terms and Conditions govern your access to and use of our website, enrollment in programs, 
              participation in events, mentorship services, and any other offerings provided by PraisePalace Business School.</p> },
    { id: 'definitions', title: '3. Key Definitions', content: <ul className="bullet-list">
              <li><strong>“We”, “Us”, “Our”</strong>: PraisePalace Business School and its affiliates.</li>
              <li><strong>“You”, “Participant”, “User”</strong>: Any individual accessing or using our services.</li>
              <li><strong>“Services”</strong>: Includes website, programs, events, mentorship, training materials, and related offerings.</li>
              <li><strong>“Content”</strong>: All text, videos, documents, images, and materials provided by us.</li>
            </ul> },
    { id: 'acceptance', title: '4. Acceptance of Terms', content: <p>By registering, enrolling, attending, or accessing any of our services, you confirm that you have read, 
              understood, and agree to these Terms and Conditions, along with our Privacy Policy.</p> },
    { id: 'services', title: '5. Our Services', content: <p>We provide business education, training programs, mentorship, workshops, summits, and related events. 
              Services are subject to availability, and we reserve the right to modify, suspend, or discontinue any 
              service at any time without prior notice.</p> },
    { id: 'responsibilities', title: '6. Participant Responsibilities', content: <ul className="bullet-list">
              <li>Provide accurate and up-to-date information during registration</li>
              <li>Conduct yourself respectfully toward staff, mentors, and fellow participants</li>
              <li>Comply with all program/event guidelines and schedules</li>
              <li>Respect confidentiality and intellectual property rules</li>
            </ul> },
    { id: 'fees', title: '7. Fees & Billing', content: <p>Fees for programs and events are listed at the time of registration. All payments are processed securely. 
              Fees are non-refundable unless otherwise stated in the specific program/event terms.
            </p> },
    { id: 'data-protection', title: '8. Data Protection & Privacy', content: <p>Your personal data is handled in accordance with our Privacy Policy. We comply with applicable data 
              protection laws to ensure your information is secure and used only for legitimate purposes.</p> },
    { id: 'confidentiality', title: '9. Confidentiality', content: <p>Participants agree to keep confidential any proprietary or sensitive information shared during programs, 
              mentorship sessions, or events, including business ideas, strategies, and personal details of others.</p> },
    { id: 'intellectual-property', title: '10. Intellectual Property', content: <p>All content provided, including curriculum materials and videos, is the intellectual property of PraisePalace Business School. Unauthorized distribution is strictly prohibited.</p> },
    { id: 'acceptable-use', title: '11. Acceptable Use', content: <>
            <p>You agree not to:</p>
            <ul className="bullet-list">
              <li>Harass, abuse, or discriminate against others</li>
              <li>Share unlawful, defamatory, or offensive content</li>
              <li>Interfere with the operation of our website or events</li>
              <li>Use automated tools to scrape or disrupt services</li>
            </ul></> },
    { id: 'program-participation', title: '12. Program Participation', content: <ul className="bullet-list">
              <li>Attendance is subject to confirmation of registration and payment</li>
              <li>We reserve the right to refuse entry or participation for safety or policy reasons</li>
              <li>Participants must follow all instructions from facilitators and staff</li>
              <li>Recording or live-streaming of sessions is prohibited without permission</li>
            </ul> },
    { id: 'certificate', title: '13. Certificate & Accreditation', content: <p>Certificates are issued only upon successful completion of a program. They reflect participation and/or achievement as defined by the program. 
              PraisePalace Business School certificates are not nationally accredited degrees unless explicitly stated.</p> },
    { id: 'mentorship', title: '14. Mentorship Rules', content: <ul className="bullet-list">
              <li>Mentorship sessions are confidential and one-on-one</li>
              <li>Participants must respect mentor time and arrive prepared</li>
              <li>Any advice given is general and not a substitute for professional legal, financial, or medical advice</li>
            </ul> },
    { id: 'warranties', title: '15. Warranties & Disclaimers', content: <p>Our services are provided “as is”. We do not guarantee specific business results, success, or outcomes from participation.</p> },
    { id: 'liability', title: '16. Limitation of Liability', content: <p>To the fullest extent permitted by law, PraisePalace Business School shall not be liable for indirect, incidental, 
              or consequential damages arising from use of our services.</p> },
    { id: 'termination', title: '17. Termination of Access', content: <p>We reserve the right to suspend or terminate your access to any service for violation of these terms, 
              disruptive behavior, or at our sole discretion.</p> },
    { id: 'website-use', title: '18. Website Use', content: <p>You may use our website for lawful purposes only. We are not responsible for third-party links or content.</p> },
    { id: 'governing-law', title: '19. Governing Law', content: <p>These Terms are governed by the laws of England and Wales. Any disputes shall be resolved 
              exclusively in the courts of England.</p> }
  ];

  return (
    <div className="terms-page">
      <section className="terms-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Terms and Conditions</h1>
          <p>Clear guidelines for learning and growth at PraisePalace Business School</p>
        </div>
      </section>

      <div className="terms-content-wrapper">
        <aside className="terms-sidebar">
          <nav className="sidebar-nav">
            {sections.map((section) => (
              <button key={section.id} onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}>
                {section.title}
              </button>
            ))}
          </nav>
        </aside>

        <main className="terms-main">
          {sections.map((section, index) => (
            <div key={section.id} id={section.id} className={`terms-section ${activeIndex === index ? 'is-active' : ''}`}>
              <div className="section-header" onClick={() => toggleAccordion(index)}>
                <h2>{section.title}</h2>
                <span className="accordion-icon">{activeIndex === index ? '−' : '+'}</span>
              </div>
              <div className="section-body">
                {section.content}
              </div>
            </div>
          ))}

          <div className="final-contact">
            <h3>Questions?</h3>
            <p>Email: <a href="mailto:info@praisepalacebusinessschool.com">info@praisepalacebusinessschool.com</a></p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TermsandCondition;