import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Events.css'; // Assuming shared CSS

const Success = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { eventData, userData, method, isFree } = location.state || {};

    if (!eventData || !userData) {
        return <div className="events-page">Invalid data. Please try again.</div>;
    }

    let title = 'Booking Successful!';
    let details = `You have successfully booked ${eventData.title}. We look forward to seeing you!`;

    if (isFree) {
        title = 'Registration Successful!';
        details = `You have successfully registered for the free event ${eventData.title}. We look forward to seeing you!`;
    } else if (method === 'bank') {
        details = `Your booking for ${eventData.title} is pending payment. Please complete the bank transfer using the details provided and send proof to [email].`;
    }

    // Note: For Stripe, configure success_url in your Stripe dashboard to redirect back to /success with query params if needed.

    return (
        <div className="events-page">
            <div className="success-page">
                <h1>{title}</h1>
                <p>{details}</p>
                <div className="user-details">
                    <h3>Your Details</h3>
                    <p>Name: {userData.name}</p>
                    <p>Email: {userData.email}</p>
                    <p>Phone: +44 {userData.phone}</p>
                    <p>Event: {eventData.title}</p>
                    <p>Date: {eventData.date}</p>
                    <p>Time: {eventData.time}</p>
                    <p>Location: {eventData.location}</p>
                </div>
                <button className="book-event-btn" onClick={() => navigate('/events')}>
                    Back to Events
                </button>
            </div>
        </div>
    );
};

export default Success;