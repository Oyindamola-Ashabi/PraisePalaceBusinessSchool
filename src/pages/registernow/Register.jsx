import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaArrowLeft } from 'react-icons/fa';
import registerImg from '../../assets/boss.jpeg'; 
import './Register.css';

const Register = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleBack = () => {
        navigate(-1); 
    };

    return (
        <div className="register-page">
            {/* Back button moved here to stay visible on all screen sizes */}
            <button className="back-circle-btn" onClick={handleBack} aria-label="Go Back">
                <FaArrowLeft />
            </button>

            {/* Left Side: Image Section */}
            <div className="register-left">
                <div className="image-wrapper">
                    <img src={registerImg} alt="Classroom" />
                </div>
            </div>

            {/* Right Side: Form Section */}
            <div className="register-right">
                <div className="register-form-container">
                    <h2>Register with <br /> PraisePalace Business <br /> School website</h2>
                    
                    <form className="register-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="input-group">
                            <FaUser className="input-icon" />
                            <input type="text" placeholder="Full Name" required />
                        </div>

                        <div className="input-group">
                            <FaEnvelope className="input-icon" />
                            <input type="email" placeholder="Email Address" required />
                        </div>

                        <div className="input-group">
                            <span className="country-flag">🇳🇬</span>
                            <input type="tel" placeholder="+234 0000 000" required />
                        </div>

                        <div className="input-group">
                            <FaLock className="input-icon" />
                            <input 
                                type={showPassword ? "text" : "password"} 
                                placeholder="Password" 
                                required
                            />
                            <div 
                                className="eye-icon" 
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </div>

                        <div className="terms-container">
                            <input type="checkbox" id="terms" required />
                            <label htmlFor="terms">
                                I agree to the <span className="p-link">Terms and Condition</span> and acknowledged the <span className="p-link">Data Privacy Notice</span>
                            </label>
                        </div>

                        <button type="submit" className="register-submit-btn">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;