import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Training.css';

// --- 11 DISTINCT IMAGE IMPORTS ---
import trainingHeroImg from '../../assets/Training.img.png';
import startupImg from '../../assets/startup.png';
import financeImg from '../../assets/finance.clinic.png';
import leadershipImg from '../../assets/leadership.png';
import marketingImg from '../../assets/digital.png';
import centralIllustration from '../../assets/teacher.png'; // Central Hub
import whyIcon1 from '../../assets/customise.png';
import whyIcon2 from '../../assets/realworld.png';
import whyIcon3 from '../../assets/ledby.png';
import whyIcon4 from '../../assets/resources.png';
import testimonialMain from '../../assets/smile.lady.png'; // Main testimonial image

const Training = () => {
    const navigate = useNavigate();

    const handleEnroll = (course) => {
        navigate('/enroll', { state: { courseName: course } });
    };

    return (
        <div className="training-page">
            {/* 1. HERO SECTION */}
            <section 
                className="training-hero" 
                style={{ '--hero-bg': `url(${trainingHeroImg})` }}
            >
                <div className="t-hero-overlay">
                    <div className="t-hero-content">
                        <h1>Practical Business Trainings</h1>
                        <p>Hands-on programs designed to give you skills you can apply immediately</p>
                    </div>
                </div>
            </section>

            {/* 2. TRAINING CATEGORIES */}
            <section className="training-categories-section">
                <h2 className="section-title">Training Categories</h2>
                
                <div className="categories-grid-container">
                    <div className="course-card card-startup">
                        <div className="course-img-wrapper">
                            <img src={startupImg} alt="Startup Bootcamp" />
                        </div>
                        <div className="course-info">
                            <h3>Startup Bootcamp</h3>
                            <p>Learn the fundamentals to launch and grow your business.</p>
                            <div className="course-meta">
                                <div className="meta-text">
                                    <span>3 Day</span>
                                    <strong>#50,000</strong>
                                </div>
                                <button onClick={() => handleEnroll('Startup Bootcamp')} className="enroll-btn">Enroll</button>
                            </div>
                        </div>
                    </div>

                    <div className="course-card card-finance">
                        <div className="course-img-wrapper">
                            <img src={financeImg} alt="Finance Clinic" />
                        </div>
                        <div className="course-info">
                            <h3>Finance Clinic</h3>
                            <p>Master budgeting, accounting, and business money management.</p>
                            <div className="course-meta">
                                <div className="meta-text">
                                    <span>2 Day</span>
                                    <strong>#50,000</strong>
                                </div>
                                <button onClick={() => handleEnroll('Finance Clinic')} className="enroll-btn">Enroll</button>
                            </div>
                        </div>
                    </div>

                    <div className="categories-center-col">
                        <img src={centralIllustration} alt="Training Hub" className="center-icon" />
                    </div>

                    <div className="course-card card-leadership">
                        <div className="course-img-wrapper">
                            <img src={leadershipImg} alt="Leadership Training" />
                        </div>
                        <div className="course-info">
                            <h3>Leadership Training</h3>
                            <p>Build influence and lead teams effectively.</p>
                            <div className="course-meta">
                                <div className="meta-text">
                                    <span>1 week</span>
                                    <strong>#50,000</strong>
                                </div>
                                <button onClick={() => handleEnroll('Leadership Training')} className="enroll-btn">Enroll</button>
                            </div>
                        </div>
                    </div>

                    <div className="course-card card-marketing">
                        <div className="course-img-wrapper">
                            <img src={marketingImg} alt="Digital Marketing" />
                        </div>
                        <div className="course-info">
                            <h3>Digital Marketing Intensive</h3>
                            <p>Grow your brand with modern digital tools.</p>
                            <div className="course-meta">
                                <div className="meta-text">
                                    <span>Weekends</span>
                                    <strong>#50,000</strong>
                                </div>
                                <button onClick={() => handleEnroll('Digital Marketing')} className="enroll-btn">Enroll</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. WHY CHOOSE SECTION (Using 4 different Icons) */}
            <section className="why-choose-section">
                <h2 className="why-title">Why Choose Our Trainings?</h2>
                <div className="diamond-grid-container">
                    <div className="diamond-item d-top">
                        <img src={whyIcon1} alt="Customized" className="feat-icon" />
                        <h4>Customized for Entrepreneurs & Professionals</h4>
                    </div>
                    <div className="diamond-item d-left">
                        <img src={whyIcon2} alt="Insights" className="feat-icon" />
                        <h4>Real-World Insights</h4>
                    </div>
                    <div className="diamond-item d-right">
                        <img src={whyIcon3} alt="Experts" className="feat-icon" />
                        <h4>Led by Industry Experts</h4>
                    </div>
                    <div className="diamond-item d-bottom">
                        <img src={whyIcon4} alt="Resources" className="feat-icon" />
                        <h4>Resources & Templates Included</h4>
                    </div>
                </div>
            </section>

            {/* 4. TESTIMONIAL SECTION */}
            <section className="testimonial-section">
                <h2 className="testimonial-title">Testimonial</h2>
                <div className="testimonial-content-row">
                    <div className="testimonial-card">
                        <div className="testimonial-stars">★★★★★</div>
                        <div className="testimonial-avatar"></div>
                        <p className="testimonial-quote">
                            “The Startup Bootcamp gave me the confidence and skills to finally launch my business. Highly recommended!”
                        </p>
                        <h4 className="testimonial-name">Sarah A</h4>
                    </div>
                    <div className="testimonial-image-box">
                        <img src={testimonialMain} alt="Success Story" className="testimonial-main-img" />
                    </div>
                </div>
            </section>

            {/* 5. CTA BANNER */}
            <section className="cta-banner-section">
                <div className="cta-banner-content">
                    <h2 className="cta-banner-text">Ready to take the next step</h2>
                    <button className="cta-banner-btn" onClick={() => navigate('/enroll')}>
                        Enroll Now
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Training;