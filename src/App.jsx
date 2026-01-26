import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Layout Imports
import Nav from "./layouts/nav/Nav"
import Footer from "./layouts/footer/Footer"; 
import About from "./pages/about-us/About"
import Courses from "./pages/courses/Courses"
import Mentorship from "./pages/mentorship/Mentorship"
import Training from "./pages/training/Training"
import Events from "./pages/events/Events"
import EventDetail from "./pages/events/EventDetail"; // Import the detail page
import Contact from "./pages/contact/Contact"
import Appointment from "./pages/appointment/Appointment"
import Podcast from './pages/podcast/Podcast';
import Home from "./pages/home/Home"

// --- Placeholder Components for Footer Links ---
const PrivacyPolicy = () => <div><h1>Privacy Policy</h1><p>Content goes here.</p></div>;
const TermsAndConditions = () => <div><h1>Terms and Conditions</h1><p>Content goes here.</p></div>;
const FAQPage = () => <div><h1>Frequently Asked Questions</h1><p>Content goes here.</p></div>;
const LearnMorePage = () => <div><h1>Learn More</h1><p>Content goes here.</p></div>;
const GetStartedPage = () => <div><h1>Get Started</h1><p>Content goes here.</p></div>;
const SubscribePage = () => <div><h1>Subscribe Now</h1><p>Content goes here.</p></div>;

// --- Image Imports ---
import sectionTwoImagegOne from './assets/woman.jpeg.jpg';
import sectionTwoImageThree from './assets/secondwoman.jpeg.jpg';
import sectionTwoImageFour from './assets/man.jpeg.jpg';
import sectionThreeImgOne from './assets/book1.png.png';
import SectionFourImg from './assets/star.png.png'

const sectionTwoImgOne = sectionTwoImagegOne; 
const sectionTwoImgThree = sectionTwoImageThree; 
const sectionTwoImgFour = sectionTwoImageFour; 

const courseList = [
    {id:1, img:sectionTwoImgOne, title:'Investment', description:'Build financial skills to grow your money.', link:'/courses'},
    {id:2, img:sectionTwoImgOne, title:'Entrepreneurship', description:`Turn ideas into successful ventures.`, link:'/courses'},
    {id:3, img:sectionTwoImgThree, title:'Leadership', description:`Gain tools to inspire and manage people.`, link:'/courses'},
    {id:4, img:sectionTwoImgFour, title:'Starting a Business', description:`Learn to start and grow your business.`, link:'/courses'},
];

const highlightss = [
    {id: 1, img: sectionThreeImgOne, title: "Practical Business Courses", text: "Gain tools you can apply immediately to grow your business."},
    {id: 2, img: sectionThreeImgOne, title: "Global Networking", text: "Connect with like-minded professionals and future partners."},
    {id: 3, img: sectionThreeImgOne, title: "Faith-Inspired Values", text: "Build businesses with integrity, purpose, and long-term impact."}
];

const testimonialss = [
    {id: 1, img: SectionFourImg, text: '“PraisePalace gave me the confidence to start my business journey.”', name: 'David K', title: 'Small Business Owner'},
    {id: 2, img: SectionFourImg, text: '“The mentorship sessions opened doors I never imagined.”', name: 'Chinwe A', title: 'Startup Founder'},
    {id: 3, img: SectionFourImg, text: '“Practical lessons I applied immediately, results came fast.”', name: 'James L', title: 'Entrepreneur & Consultant'},
];

const faqData = [
    { id: 1, question: "Do I need experience to join your classes?", answer: "No, our programs are designed to accommodate students at various skill levels, from beginners to experienced professionals." },
    { id: 2, question: "How do I join the free classes?", answer: "Free classes are usually announced on our website and social media. You can register via the dedicated link provided in the announcement." },
    { id: 3, question: "What's included in the premium plan?", answer: "The premium plan includes access to all courses, one-on-one mentorship sessions, exclusive workshops, and premium support." },
    { id: 4, question: "Can I cancel my subscription anytime?", answer: "Yes, you can cancel your subscription at any time directly through your user dashboard with no cancellation fees." },
    { id: 5, question: "Are the classes live or recorded?", answer: "We offer a mix of live virtual classes for real-time interaction and recorded sessions that you can access on demand at your convenience." },
];

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState); 
    };

    return (
        <div className="app-container"> 
            <BrowserRouter>
                <div className="main-content-wrapper"> 
                    <Nav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
                    <Routes>
                        <Route path="/" element={<Home courses={courseList} highlights={highlightss} testimonials={testimonialss} FAQ={faqData} />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/courses" element={<Courses courses={courseList} />} />
                        <Route path="/mentorship" element={<Mentorship />} />
                        <Route path="/training" element={<Training/>}/>
                        <Route path="/events" element={<Events/>}/>
                        <Route path="/events/:id" element={<EventDetail />} /> {/* Dynamic Detail Route */}
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/appointment" element={<Appointment/>}/>
                        <Route path="/podcast" element={<Podcast/>}/>
                        
                        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
                        <Route path="/terms-and-condition" element={<TermsAndConditions/>}/>
                        <Route path="/faq" element={<FAQPage/>}/>
                        <Route path="/learn-more" element={<LearnMorePage/>}/>
                        <Route path="/get-started" element={<GetStartedPage/>}/>
                        <Route path="/subscribe" element={<SubscribePage/>}/>
                    </Routes>
                </div> 
                <Footer /> 
            </BrowserRouter>
        </div>
    )
}

export default App