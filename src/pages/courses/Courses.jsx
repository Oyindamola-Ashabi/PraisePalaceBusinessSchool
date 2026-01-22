import React from 'react';
import './Courses.css';

// Your actual image imports
import courseImg1 from '../../assets/heroabout.png';
import courseImg2 from '../../assets/our_story_img.png.png';
import courseImg3 from '../../assets/heroabout.png';
import courseImg4 from '../../assets/heroabout.png';
import courseImg5 from '../../assets/heroabout.png';
import courseImg6 from '../../assets/heroabout.png';
import bundleImg1 from '../../assets/heroabout.png';
import bundleImg2 from '../../assets/our_story_img.png.png';

// Icons for Section 4
import icon1 from '../../assets/hamimg.png';
import icon2 from '../../assets/hamimg.png';
import icon3 from '../../assets/heroabout.png';
import icon4 from '../../assets/our_story_img.png.png';

const Courses = () => {
    const courseData = [
        { id: 1, img: courseImg1, title: "Investment & Wealth", desc: "Learn smart strategies to grow and manage money.", price: "₦25,000", oldPrice: "₦45,000", rating: "4.8 – 710 reviews" },
        { id: 2, img: courseImg2, title: "Starting a Business", desc: "Build the foundation to launch and grow your business.", price: "₦25,000", oldPrice: "₦45,000", rating: "4.8 – 510 reviews" },
        { id: 3, img: courseImg3, title: "Leadership", desc: "Develop skills to lead and inspire teams.", price: "₦25,000", oldPrice: "₦45,000", rating: "4.8 – 310 reviews" },
        { id: 4, img: courseImg4, title: "Digital Marketing", desc: "Use online tools to grow your brand.", price: "₦25,000", oldPrice: "₦45,000", rating: "4.8 – 110 reviews" },
        { id: 5, img: courseImg5, title: "Business Communication", desc: "Master professional communication to close deals and build networks.", price: "₦25,000", oldPrice: "₦45,000", rating: "4.8 – 210 reviews" },
        { id: 6, img: courseImg6, title: "Entrepreneurial Finance", desc: "Learn budgeting, accounting & growth planning.", price: "₦25,000", oldPrice: "₦45,000", rating: "4.8 – 210 reviews" },
    ];

    return (
        <div className="courses-page">
            {/* --- SECTION 1: HERO --- */}
            <section className="courses-hero">
                <div className="c-hero-content">
                    <h1>Explore Our Courses</h1>
                    <p>Practical learning designed to prepare you for real-world success in business and leadership.</p>
                </div>
            </section>

            {/* --- SECTION 2: AVAILABLE COURSES --- */}
            <section className="available-section">
                <h2 className="available-title">Available Courses</h2>
                <div className="courses-container">
                    {courseData.map((course) => (
                        <div key={course.id} className="c-card">
                            <div className="c-card-img-wrapper">
                                <img src={course.img} alt={course.title} className="c-card-img" />
                            </div>
                            <div className="c-card-body">
                                <h3>{course.title}</h3>
                                <p>{course.desc}</p>
                                <div className="c-rating">
                                    <span className="c-stars">⭐⭐⭐⭐☆</span>
                                    <span>({course.rating})</span>
                                </div>
                                <div className="c-card-footer">
                                    <div className="c-prices">
                                        <span className="c-old">{course.oldPrice}</span>
                                        <span className="c-new">{course.price}</span>
                                    </div>
                                    <button className="c-enroll-btn">Enroll</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- SECTION 3: BUSINESS GROWTH PACKAGES --- */}
            <section className="packages-section">
                <h2 className="packages-main-title">Business Growth Packages</h2>
                <div className="packages-container">
                    <div className="p-card">
                        <div className="p-img-wrapper">
                            <img src={bundleImg1} alt="Entrepreneur Starter Bundle" />
                        </div>
                        <div className="p-content">
                            <h3>Entrepreneur Starter Bundle</h3>
                            <p>Get access to our top 3 beginner-friendly courses: Starting a Business, Financial Basics, and Digital Marketing Essentials.</p>
                            <ul className="p-features">
                                <li>✓ 35+ hours of video content</li>
                                <li>✓ Downloadable guides & templates</li>
                                <li>✓ 2 live Q&A sessions with mentors</li>
                                <li>✓ Lifetime access</li>
                            </ul>
                            <div className="p-footer">
                                <div className="p-prices">
                                    <span className="p-old">₦250,000</span>
                                    <span className="p-new">₦150,000</span>
                                </div>
                                <button className="p-bundle-btn">Get Bundle</button>
                            </div>
                        </div>
                    </div>

                    <div className="p-card">
                        <div className="p-img-wrapper">
                            <img src={bundleImg2} alt="Executive Leadership Bundle" />
                        </div>
                        <div className="p-content">
                            <h3>Executive Leadership Bundle</h3>
                            <p>Get access to 3 advanced programs: Leadership Mastery, Investment & Wealth, and Strategic Growth Planning.</p>
                            <ul className="p-features">
                                <li>✓ 50+ hours of video content</li>
                                <li>✓ Exclusive case studies & resources</li>
                                <li>✓ 4 one-on-one coaching calls</li>
                                <li>✓ Lifetime access</li>
                            </ul>
                            <div className="p-footer">
                                <div className="p-prices">
                                    <span className="p-old">₦451,000</span>
                                    <span className="p-new">₦205,000</span>
                                </div>
                                <button className="p-bundle-btn">Get Bundle</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SECTION 4: LEARNING EXPERIENCE --- */}
            <section className="learning-experience-section">
                <h2 className="learning-title">Learning Experience</h2>
                <div className="learning-container">
                    <div className="learning-item">
                        <div className="learning-icon">
                            <img src={icon1} alt="Practical learning" />
                        </div>
                        <p>Practical, hands-on learning</p>
                    </div>

                    <div className="learning-item">
                        <div className="learning-icon">
                            <img src={icon2} alt="Real-world case studies" />
                        </div>
                        <p>Real-world case studies</p>
                    </div>

                    <div className="learning-item">
                        <div className="learning-icon">
                            <img src={icon3} alt="Mentorship support" />
                        </div>
                        <p>Mentorship support</p>
                    </div>

                    <div className="learning-item">
                        <div className="learning-icon">
                            <img src={icon4} alt="Flexible options" />
                        </div>
                        <p>Flexible online & in-person options</p>
                    </div>
                </div>
            </section>

            {/* --- SECTION 5: TESTIMONIALS --- */}
            <section className="testimonials-section">
                <h2 className="testimonials-title">
                    What <span>Our Students says</span> About Us
                </h2>
                <div className="testimonials-container">
                    <div className="testimonial-card">
                        <div className="stars">★★★★★</div>
                        <div className="student-image"></div>
                        <p className="testimonial-text">“PraisePalace gave me the confidence to start my business journey.”</p>
                        <h4 className="student-name">David K</h4>
                        <p className="student-role">Small Business Owner</p>
                    </div>
                    <div className="testimonial-card">
                        <div className="stars">★★★★★</div>
                        <div className="student-image"></div>
                        <p className="testimonial-text">“The mentorship sessions opened doors I never imagined.”</p>
                        <h4 className="student-name">Chinwe A</h4>
                        <p className="student-role">Startup Founder</p>
                    </div>
                    <div className="testimonial-card">
                        <div className="stars">★★★★★</div>
                        <div className="student-image"></div>
                        <p className="testimonial-text">“Practical lessons I applied immediately, results came fast.”</p>
                        <h4 className="student-name">James L</h4>
                        <p className="student-role">Entrepreneur</p>
                    </div>
                </div>
            </section>

            {/* --- SECTION 6: CALL TO ACTION --- */}
            <section className="courses-cta-section">
                <div className="cta-content">
                    <h2 className="cta-heading">Ready to take the next step?</h2>
                    <p className="cta-subheading">Start your learning journey today</p>
                </div>
            </section>
        </div>
    );
};

export default Courses;