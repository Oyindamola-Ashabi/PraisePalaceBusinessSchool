import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Events.css'; // Assuming shared CSS

const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { eventData, userData } = location.state || {};

    if (!eventData || !userData) {
        return <div className="events-page">Invalid booking data. Please try again.</div>;
    }

    const [paymentMethod, setPaymentMethod] = useState('stripe');

    const handleComplete = () => {
        if (paymentMethod === 'stripe') {
            // Testing link - replace with your actual Stripe test checkout link from dashboard
            // Example from Stripe test mode: https://buy.stripe.com/test_00g8xQeVY4QYa24000
            // Generate one in your Stripe dashboard for a product/price and use it here.
            // For production, use backend to create dynamic sessions.
            window.location.href = 'https://buy.stripe.com/test_00g8xQeVY4QYa24000';
        } else {
            navigate('/success', { state: { eventData, userData, method: 'bank' } });
        }
    };

    return (
        <div className="events-page">
            <div className="payment-page">
                <h1>Payment for {eventData.title}</h1>
                <div className="user-details">
                    <h3>Your Details</h3>
                    <p>Name: {userData.name}</p>
                    <p>Email: {userData.email}</p>
                    <p>Phone: +234 {userData.phone}</p>
                </div>
                <div className="payment-options">
                    <h3>Select Payment Method</h3>
                    <label className="payment-label">
                        <input
                            type="radio"
                            value="stripe"
                            checked={paymentMethod === 'stripe'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        Pay with Card (Stripe)
                    </label>
                    <label className="payment-label">
                        <input
                            type="radio"
                            value="bank"
                            checked={paymentMethod === 'bank'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        Pay via Bank Transfer
                    </label>
                </div>
                {paymentMethod === 'bank' && (
                    <div className="bank-details">
                        <h4>Bank Transfer Details</h4>
                        <p>Account Name: PraisePalace Business School</p>
                        <p>Account Number: 0123456789</p> {/* Replace with real details */}
                        <p>Bank: Zenith Bank</p> {/* Replace with real details */}
                        <p>Amount: NGN 5,000 (or event-specific amount)</p> {/* Assume price; add price to event data if needed */}
                        <p>Please use your name as reference and email proof to [email].</p>
                    </div>
                )}
                <button className="book-event-btn" onClick={handleComplete}>
                    {paymentMethod === 'stripe' ? 'Proceed to Stripe' : 'Confirm Bank Transfer'}
                </button>
                <button className="back-to-events-btn" onClick={() => navigate(-1)}>
                    ← Back
                </button>
            </div>
        </div>
    );
};

export default Payment;