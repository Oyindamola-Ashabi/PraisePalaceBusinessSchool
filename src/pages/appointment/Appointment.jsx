import React, { useEffect, useState } from 'react';
import './Appointment.css';
import appointmentHero from '../../assets/appointment.hero.png'; 

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date().getDate()); 
    const [selectedTime, setSelectedTime] = useState("12:00PM");
    const [showModal, setShowModal] = useState(false);
    const [viewDate, setViewDate] = useState(new Date()); 

    const [formData, setFormData] = useState({
        fullName: '', email: '', phone: '', purpose: ''
    });

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const years = Array.from({ length: 50 }, (_, i) => 2010 + i);

    const daysInMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1).getDay();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleBooking = (e) => {
        const form = document.getElementById('appt-form');
        if (form.checkValidity()) {
            e.preventDefault();
            setShowModal(true);
        } else {
            form.reportValidity();
        }
    };

    // Clears all inputs and resets view
    const closeAndClear = () => {
        setShowModal(false);
        setFormData({ fullName: '', email: '', phone: '', purpose: '' });
        setSelectedDate(new Date().getDate());
        setViewDate(new Date());
    };

    return (
        <div className="appointment-page">
            {showModal && (
                <div className="appt-modal-overlay">
                    <div className="appt-modal-card">
                        <div className="appt-modal-icon">✓</div>
                        <h2>Booking Requested!</h2>
                        <p>We will confirm your call via email shortly.</p>
                        <button className="appt-modal-close" onClick={closeAndClear}>Got it</button>
                    </div>
                </div>
            )}

            <div className="appt-hero-container">
                <img src={appointmentHero} alt="Hero" className="appt-hero-img" />
            </div>

            <div className="appt-intro-text">
                <h1>Book a Call with Us</h1>
                <p>Schedule a one-on-one consultation with our admissions team</p>
            </div>

            <section className="appt-center-section">
                <div className="appt-dual-cards">
                    {/* CALENDAR CARD */}
                    <div className="appt-card-fixed">
                        <div className="cal-selectors-header">
                            <select value={viewDate.getMonth()} onChange={(e) => setViewDate(new Date(viewDate.getFullYear(), parseInt(e.target.value), 1))} className="cal-select-box">
                                {months.map((m, i) => <option key={m} value={i}>{m}</option>)}
                            </select>
                            <select value={viewDate.getFullYear()} onChange={(e) => setViewDate(new Date(parseInt(e.target.value), viewDate.getMonth(), 1))} className="cal-select-box">
                                {years.map(y => <option key={y} value={y}>{y}</option>)}
                            </select>
                        </div>

                        <div className="cal-grid-main">
                            {["Su","Mo","Tu","We","Th","Fr","Sa"].map(d => <span key={d} className="d-head">{d}</span>)}
                            {[...Array(firstDayOfMonth)].map((_, i) => <div key={`e-${i}`} />)}
                            {[...Array(daysInMonth)].map((_, i) => (
                                <button 
                                    key={i+1} 
                                    className={`d-btn ${selectedDate === i + 1 ? 'active' : ''}`} 
                                    onClick={() => setSelectedDate(i + 1)}
                                >{i + 1}</button>
                            ))}
                        </div>
                    </div>

                    {/* FORM CARD */}
                    <div className="appt-card-fixed">
                        <p className="feat-label">Featured Time</p>
                        <div className="time-row">
                            {["10:00AM", "12:00PM", "02:30PM"].map(t => (
                                <button 
                                    key={t} 
                                    className={`t-btn ${selectedTime === t ? 'active' : ''}`} 
                                    onClick={() => setSelectedTime(t)}
                                >{t}</button>
                            ))}
                        </div>
                        <form id="appt-form" className="form-stack">
                            <div className="form-box">
                                <i className="far fa-user"></i>
                                <input type="text" name="fullName" placeholder="full name" value={formData.fullName} onChange={handleInputChange} required />
                            </div>
                            <div className="form-box">
                                <i className="far fa-envelope"></i>
                                <input type="email" name="email" placeholder="email address" value={formData.email} onChange={handleInputChange} required />
                            </div>
                            <div className="form-box">
                                <span>🇳🇬</span>
                                <input type="tel" name="phone" placeholder="+234 0000 000" value={formData.phone} onChange={handleInputChange} required />
                            </div>
                            <div className="form-box">
                                <i className="far fa-comment"></i>
                                <input type="text" name="purpose" placeholder="Purpose of call" value={formData.purpose} onChange={handleInputChange} required />
                            </div>
                        </form>
                    </div>
                </div>

                <div className="appt-btn-bottom">
                    <button type="button" onClick={handleBooking} className="final-book-btn">Book My Call</button>
                </div>
            </section>
        </div>
    );
};

export default Appointment;