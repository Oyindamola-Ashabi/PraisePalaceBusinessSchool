import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"

// Layout Imports
import Nav from "./layouts/nav/Nav"
import Footer from "./layouts/footer/Footer"; 
import About from "./pages/about-us/About"

import Mentorship from "./pages/mentorship/Mentorship"
import Training from "./pages/training/Training"
import Events from "./pages/events/Events"
import EventDetail from "./pages/events/EventDetail"; 
import Contact from "./pages/contact/Contact"
import Appointment from "./pages/appointment/Appointment"
import Podcast from './pages/podcast/Podcast';
import Home from "./pages/home/Home"
import Register from './pages/registernow/Register';
import Academy from './pages/courses/Academy';

// --- Placeholder Components ---
const PrivacyPolicy = () => <div style={{padding: '100px 10%'}}><h1>Privacy Policy</h1></div>;
const TermsAndConditions = () => <div style={{padding: '100px 10%'}}><h1>Terms and Conditions</h1></div>;
const FAQPage = () => <div style={{padding: '100px 10%'}}><h1>FAQ</h1></div>;
const LearnMorePage = () => <div style={{padding: '100px 10%'}}><h1>Learn More</h1></div>;
const GetStartedPage = () => <div style={{padding: '100px 10%'}}><h1>Get Started</h1></div>;
const SubscribePage = () => <div style={{padding: '100px 10%'}}><h1>Subscribe</h1></div>;

// --- Image Imports ---
import sectionTwoImagegOne from './assets/woman.jpeg.jpg';
import sectionTwoImageThree from './assets/secondwoman.jpeg.jpg';
import sectionTwoImageFour from './assets/man.jpeg.jpg';
import sectionThreeImgOne from './assets/book1.png.png';
import SectionFourImg from './assets/star.png.png'

// --- Data Arrays ---
const courseList = [
    {id:1, img:sectionTwoImagegOne, title:'Investment', description:'Build financial skills.', link:'/courses'},
    {id:2, img:sectionTwoImagegOne, title:'Entrepreneurship', description:'Turn ideas into ventures.', link:'/courses'},
    {id:3, img:sectionTwoImageThree, title:'Leadership', description:'Inspire people.', link:'/courses'},
    {id:4, img:sectionTwoImageFour, title:'Starting a Business', description:'Grow your business.', link:'/courses'},
];

const highlightss = [
    {id: 1, img: sectionThreeImgOne, title: "Practical Courses", text: "Apply tools immediately."},
    {id: 2, img: sectionThreeImgOne, title: "Global Networking", text: "Connect with professionals."},
    {id: 3, img: sectionThreeImgOne, title: "Faith Values", text: "Build with purpose."}
];

const testimonialss = [
    {id: 1, img: SectionFourImg, text: '“PraisePalace gave me confidence.”', name: 'David K', title: 'Owner'},
    {id: 2, img: SectionFourImg, text: '“Mentorship opened doors.”', name: 'Chinwe A', title: 'Founder'},
    {id: 3, img: SectionFourImg, text: '“Results came fast.”', name: 'James L', title: 'Consultant'},
];

const faqData = [{ id: 1, question: "Experience?", answer: "None needed." }];

// --- Scroll Restoration ---
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [pathname]);
    return null;
};

// --- Main Content Manager ---
const MainContent = ({ isMenuOpen, toggleMenu }) => {
    const location = useLocation();
    const isRegisterPage = location.pathname === '/register';

    return (
        <>
            {/* Show Nav only if NOT on register page */}
            {!isRegisterPage && <Nav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />}
            
            <div className="main-content-wrapper"> 
                <Routes>
                    <Route path="/" element={<Home courses={courseList} highlights={highlightss} testimonials={testimonialss} FAQ={faqData} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/courses" element={<Academy courses={courseList} />} />
                    <Route path="/mentorship" element={<Mentorship />} />
                    <Route path="/training" element={<Training/>}/>
                    <Route path="/events" element={<Events/>}/>
                    <Route path="/events/:id" element={<EventDetail />} /> 
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/appointment" element={<Appointment/>}/>
                    <Route path="/podcast" element={<Podcast/>}/>
                    <Route path="/register" element={<Register/>}/>

                    <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
                    <Route path="/terms-and-condition" element={<TermsAndConditions/>}/>
                    <Route path="/faq" element={<FAQPage/>}/>
                    <Route path="/learn-more" element={<LearnMorePage/>}/>
                    <Route path="/get-started" element={<GetStartedPage/>}/>
                    <Route path="/subscribe" element={<SubscribePage/>}/>
                </Routes>
            </div> 

            {/* Show Footer only if NOT on register page */}
            {!isRegisterPage && <Footer />}
        </>
    );
};

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    const toggleMenu = () => setIsMenuOpen(prevState => !prevState); 

    return (
        <div className="app-container"> 
            <BrowserRouter>
                <ScrollToTop /> 
                <MainContent isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            </BrowserRouter>
        </div>
    )
}

export default App;