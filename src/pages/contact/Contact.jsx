import React, { useEffect, useState } from 'react';
import './Contact.css';
import contactHeroImg from '../../assets/contact.hero.png'; 

const Contact = () => {
    // State for Modal visibility
    const [showModal, setShowModal] = useState(false);
    
    // State for Form fields to allow clearing
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle Form Submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    // Close Modal and Clear Information
    const handleCloseModal = () => {
        setShowModal(false);
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="contact-page">
            {/* SUCCESS MODAL */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="success-icon-wrap">
                            <i className="fas fa-check"></i>
                        </div>
                        <h2>Message Sent!</h2>
                        <p>Thank you for reaching out. One of our team members will reach out to you soon.</p>
                        <button className="modal-close-btn" onClick={handleCloseModal}>Great!</button>
                    </div>
                </div>
            )}

            {/* HERO SECTION */}
            <section 
                className="contact-hero" 
                style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${contactHeroImg})` }}
            >
                <div className="c-hero-content">
                    <h1>Contact Us</h1>
                </div>
            </section>

            {/* BODY SECTION */}
            <section className="contact-main-content">
                <div className="contact-wrapper">
                    
                    {/* LEFT COLUMN: FORM */}
                    <div className="contact-form-container">
                        <h2>Contact me</h2>
                        <form className="contact-ui-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>First name</label>
                                    <input 
                                        type="text" 
                                        name="firstName"
                                        placeholder="Jane" 
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Last name</label>
                                    <input 
                                        type="text" 
                                        name="lastName"
                                        placeholder="Smitherton" 
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Email address</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    placeholder="email@janesfakedomain.net" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>

                            <div className="form-group">
                                <label>Your message</label>
                                <textarea 
                                    rows="6" 
                                    name="message"
                                    placeholder="Enter your question or message" 
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="form-submit-btn">Submit</button>
                        </form>
                    </div>

                    {/* RIGHT COLUMN: INFO CARDS */}
                    <div className="contact-info-cards">
                        <div className="info-card">
                            <div className="info-icon pink-text"><i className="fas fa-map-marker-alt"></i></div>
                            <h3>Find Us</h3>
                            <div className="card-line"></div>
                            <p>United Kingdom</p>
                        </div>

                        <div className="info-card">
                            <div className="info-icon pink-text"><i className="fas fa-phone-alt"></i></div>
                            <h3>Make a Call</h3>
                            <div className="card-line"></div>
                            <p>07895643335</p>
                        </div>

                        <div className="info-card">
                            <div className="info-icon pink-text"><i className="far fa-envelope"></i></div>
                            <h3>Send a Mail</h3>
                            <div className="card-line"></div>
                            <p>contact@praisepalacebusinessschool.com</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Contact;