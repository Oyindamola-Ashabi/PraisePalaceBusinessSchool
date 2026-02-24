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
// const PrivacyPolicy = () => <div style={{ padding: '100px 10%' }}><h1>Privacy Policy</h1></div>;
// const TermsAndConditions = () => <div style={{ padding: '100px 10%' }}><h1>Terms and Conditions</h1></div>;
const FAQPage = () => <div style={{ padding: '100px 10%' }}><h1>FAQ</h1></div>;
const LearnMorePage = () => <div style={{ padding: '100px 10%' }}><h1>Learn More</h1></div>;
const GetStartedPage = () => <div style={{ padding: '100px 10%' }}><h1>Get Started</h1></div>;
const SubscribePage = () => <div style={{ padding: '100px 10%' }}><h1>Subscribe</h1></div>;

// --- Image Imports ---
import sectionTwoImagegOne from './assets/woman.jpeg.jpg';
import sectionTwoImageThree from './assets/secondwoman.jpeg.jpg';
import sectionTwoImageFour from './assets/man.jpeg.jpg';
import sectionThreeImgOne from './assets//pbe.jpeg';
import sectionThreeImgTwo from './assets//ENTREPRENEURSHIP.jpg';
import sectionThreeImgThree from './assets//Career-Empl.jpg';
import sectionThreeImgFour from './assets//Financial-Literacy-Business-Finance.png';
import sectionThreeImgFive from './assets//Mentorship-Coaching.png';
import sectionThreeImgSix from './assets//Community-Focused-Learning.png';
import sectionThreeImgSeven from './assets//Digital-workplace-skills.png';
import sectionThreeImgEight from './assets//Small-Business-Growth-Sustainability.png';
import sectionThreeImgNine from './assets//Flexible-Learning-Options.png';
import sectionThreeImgTen from './assets//Real-Impact-Real-Results.png';
import TestimonialImgOne from './assets//aisha.jpg';
import TestimonialImgTwo from './assets//daniel.jpg';
import TestimonialImgThree from './assets//jornalist.jpg';
import TestimonialImgFour from './assets//hr.jpg';
import TestimonialImgFive from './assets//small.jpg';

import SectionFourImg from './assets/star.png.png'
import PrivacyPolicy from './pages/privacy/PrivacyPolicy';
import TermsandCondition from './pages/terms-and-condition/TermsandCondition';

// --- Data Arrays ---
const courseList = [
    { id: 1, img: sectionTwoImagegOne, title: 'Investment', description: 'Build financial skills.', link: '/courses' },
    { id: 2, img: sectionTwoImagegOne, title: 'Entrepreneurship', description: 'Turn ideas into ventures.', link: '/courses' },
    { id: 3, img: sectionTwoImageThree, title: 'Leadership', description: 'Inspire people.', link: '/courses' },
    { id: 4, img: sectionTwoImageFour, title: 'Starting a Business', description: 'Grow your business.', link: '/courses' },
];

const highlightss = [
    { id: 1, img: sectionThreeImgOne, title: "Practical Business Education", text: "Hands-on courses designed to teach real-world business, finance, and management skills you can apply immediately." },
    { id: 2, img: sectionThreeImgTwo, title: "Entrepreneurship & Start-Up Support", text: "Guidance for aspiring entrepreneurs to start, structure, and grow sustainable businesses with confidence." },
    { id: 3, img: sectionThreeImgThree, title: "Career & Employability Skills", text: "Training that equips learners with job-ready skills, workplace tools, and professional confidence to improve career opportunities." },
    { id: 4, img: sectionThreeImgFour, title: "Financial Literacy & Business Finance", text: "Simple, practical training in budgeting, accounting basics, and financial decision-making for individuals and small businesses." },
    { id: 5, img: sectionThreeImgFive, title: "Mentorship & Coaching", text: "Access to experienced mentors who provide one-on-one and group support to help learners turn knowledge into action." },
    { id: 6, img: sectionThreeImgSix, title: "Community-Focused Learning", text: "Affordable and accessible training delivered in partnership with churches and community organisations." },
    { id: 7, img: sectionThreeImgSeven, title: "Digital & Workplace Skills", text: "Learn essential digital tools, administration skills, and modern workplace systems needed in today’s economy." },
    { id: 8, img: sectionThreeImgEight, title: "Small Business Growth & Sustainability", text: "Support for business owners to improve operations, manage growth, and build long-term stability." },
    { id: 9, img: sectionThreeImgNine, title: "Flexible Learning Options", text: "Online and in-person training designed to fit around work, family, and personal commitments." },
    { id: 10, img: sectionThreeImgTen, title: "Real Impact, Real Results", text: "Skills that lead to employment, self-employment, stronger businesses, and empowered communities." },


];

// const testimonialss = [
//     { id: 1, img: sectionThreeImgOne, text: '“PraisePalace gave me confidence.”', name: 'David K', title: 'Owner' },
//     { id: 2, img: sectionThreeImgOne, text: '“Mentorship opened doors.”', name: 'Chinwe A', title: 'Founder' },
//     { id: 3, img: sectionThreeImgOne, text: '“Results came fast.”', name: 'James L', title: 'Consultant' },
// ];


// New: Your latest testimonials moved here (from the image you sent)
const testimonialss = [
  {
    id: 1,
    img: TestimonialImgOne, 
    name: 'Aisha Sanni',
    title: 'Social Media Manager of Abbfem Consulting',
    classYear: 'Class of 2026',
    text: '“The programme delivered practical, real-world business and leadership skills I applied immediately. It helped me restructure my operations and grow revenue within months.”'
  },
  {
    id: 2,
    img: TestimonialImgTwo,
    name: 'Daniel Okafor',
    title: 'Operations Manager, Crestline Logistics',
    classYear: 'Class of 2026',
    text: '“The training was practical and industry-focused. It strengthened my management skills and directly contributed to my career progression.”'
  },
  {
    id: 3,
    img: TestimonialImgThree,
    name: 'Caleb Michael',
    title: 'Jornalist',
    classYear: 'Class of 2026',
    text: '“The case studies and practical sessions sharpened my strategic thinking and boosted my confidence at work.”'
  },
  {
    id: 4,
    img: TestimonialImgFour,
    name: 'Grace Nwoye',
    title: 'HR & Talent Manager, Elevate Group',
    classYear: 'Class of 2026',
    text: '“The leadership and people management modules were excellent. I now apply the skills daily to improve team performance.”'
  },
  {
    id: 5,
    img: TestimonialImgFive,
    name: 'Isaiah Tofe',
    title: 'Small Business Owner, F&H Retail Services',
    classYear: 'Class of 2026',
    text: '“I gained clear, practical knowledge in financial management and business growth. The mentorship sessions added real value to my learning experience.”'
  }
];

const faqData = [
    { id: 1, question: "Who can apply to the business school?", answer: "Our online programmes are open to students, professionals, entrepreneurs, and business owners seeking practical business and leadership skills. No prior business background is required for most courses." },
    { id: 2, question: "Are your programmes fully online?", answer: "Yes. All our programmes are delivered 100% online, allowing learners to study from anywhere with flexible access to learning materials and live or recorded sessions." },
    { id: 3, question: "Do participants receive a certificate?", answer: "Yes. Learners who successfully complete their programme receive a digital certificate of completion." },
    { id: 4, question: "What is the learning format?", answer: "Our online learning combines live virtual sessions, recorded lectures, practical assignments, and real-world case studies to ensure a hands-on learning experience." },
    { id: 5, question: "How long are the programmes?", answer: "Programme duration varies by course, ranging from short courses to extended programmes. Full details are available on each programme page." },
    { id: 6, question: "How do I enrol?", answer: "Enrolment is completed online through our website. Once registered, learners receive access details and onboarding information." }


];

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
                    <Route path="/training" element={<Training />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/events/:id" element={<EventDetail />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/appointment" element={<Appointment />} />
                    <Route path="/podcast" element={<Podcast />} />
                    <Route path="/register" element={<Register />} />

                    <Route path="/privacy-policy" element= {<PrivacyPolicy/>}/>
                    <Route path="/terms-and-condition" element= {<TermsandCondition/>}/>
                    <Route path="/faq" element={<FAQPage />} />
                    <Route path="/learn-more" element={<LearnMorePage />} />
                    <Route path="/get-started" element={<GetStartedPage />} />
                    <Route path="/subscribe" element={<SubscribePage />} />
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