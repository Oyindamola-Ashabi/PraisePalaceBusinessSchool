
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Nav from "./layouts/nav/Nav"
import About from "./pages/about-us/About"
import Courses from "./pages/courses/Courses"
import Mentorship from "./pages/mentorship/Mentorship"
import Training from "./pages/training/Training"
import Events from "./pages/events/Events"
import Contact from "./pages/contact/Contact"
import Appointment from "./pages/appointment/Appointment"
import Hamburger from "./pages/hamburger/Hamburger";
import sectionTwoImagegOne from './assets/woman.jpeg.jpg';
import sectionTwoImageThree from './assets/secondwoman.jpeg.jpg';
import sectionTwoImageFour from './assets/man.jpeg.jpg';
import sectionThreeImgOne from './assets/book1.png.png';
// import sectionThreeImgTwo from './assets/iconbootcamp.png.png';
// import sectionThreeImgThree from './assets/icondigitalskilllab.png.png'
import SectionFourImg from './assets/star.png.png'



const sectionTwoImgOne = sectionTwoImagegOne; 
const sectionTwoImgThree = sectionTwoImageThree; 
const sectionTwoImgFour = sectionTwoImageFour; 

const courseList = [
    {id:1, img:sectionTwoImgOne, title:'Investment', description:'Build financial skills to <br />grow your money.', link:'/courses'},
    {id:2, img:sectionTwoImgOne, title:'Entrepreneurship', description:`Turn ideas into <br />successful ventures.`, link:'/courses'},
    {id:3, img:sectionTwoImgThree, title:'Leadership', description:`Gain tools to inspire <br />and manage people..`, link:'/courses'},
    {id:4, img:sectionTwoImgFour, title:'Starting a Business', description:`Learn to start and <br />grow your business.`, link:'/courses'},
    // {id:5, img:sectionTwoImgOne, title:'Investment', description:'Build financial skills to <br />grow your money.', link:'/courses'},
    // {id:6, img:sectionTwoImgOne, title:'Entrepreneurship', description:`Turn ideas into <br />successful ventures.`, link:'/courses'},
    // {id:7, img:sectionTwoImgThree, title:'Leadership', description:`Gain tools to inspire <br />and manage people..`, link:'/courses'},
    // {id:8, img:sectionTwoImgFour, title:'Starting a Business', description:`Learn to start and <br />grow your business.`, link:'/courses'},
    // {id:9, img:sectionTwoImgOne, title:'Investment', description:'Build financial skills to <br />grow your money.', link:'/courses'},
    // {id:10, img:sectionTwoImgOne, title:'Entrepreneurship', description:`Turn ideas into <br />successful ventures.`, link:'/courses'},
    // {id:11, img:sectionTwoImgThree, title:'Leadership', description:`Gain tools to inspire <br />and manage people..`, link:'/courses'},
    // {id:12, img:sectionTwoImgFour, title:'Starting a Business', description:`Learn to start and <br />grow your business.`, link:'/courses'},
];


const highlightss = [
  {
    id: 1,
    img: sectionThreeImgOne,
    title: "Practical Business Courses",
    text: "Gain tools you can apply immediately to grow your business."
  },
  {
    id: 2,
    img: sectionThreeImgOne,
    title: "Global Networking",
    text: "Connect with like-minded professionals and future partners."
  },
  {
    id: 3,
    img: sectionThreeImgOne,
    title: "Faith-Inspired Values",
    text: "Build businesses with integrity, purpose, and long-term impact."
  }
];



// const trainingss = [
//   {
//     id: 1,
//     img: sectionThreeImgTwo,
//     title: "Startup Bootcamp",
//     text: "Build your business from the ground up.",
//     moveId: "move1"
//   },
//   {
//     id: 2,
//     img: sectionThreeImgThree,
//     title: "Finance Clinic",
//     text: "Smart money management for entrepreneurs.",
//     moveId: "move2"
//   },
//   {
//     id: 3,
//     img: sectionThreeImgThree,
//     title: "Digital Skills Lab",
//     text: "Grow your brand with online tools.",
//     moveId: "move4"
//   }
// ];


const testimonialss = [
    {
      id: 1,
      img: SectionFourImg,
      text: '“PraisePalace gave me the confidence to start my business journey.”',
      name: 'David K',
      title: 'Small Business Owner',
    },
    {
      id: 2,
      img: SectionFourImg,
      text: '“The mentorship sessions opened doors I never imagined.”',
      name: 'Chinwe A',
      title: 'Startup Founder',
    },
    {
      id: 3,
      img: SectionFourImg,
      text: '“Practical lessons I applied immediately, results came fast.”',
      name: 'James L',
      title: 'Entrepreneur & Consultant',
    },
  ];



        

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home courses={courseList} highlights={highlightss} testimonials={testimonialss} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/courses" element={<Courses courses={courseList} />} />
                    <Route path="/mentorship" element={<Mentorship />} />
                    <Route path="/training" element={<Training/>}/>
                    <Route path="/events" element={<Events/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/appointment" element={<Appointment/>}/>
                    <Route path="fa-solid fa-bars" element={<Hamburger/>}/>
                </Routes>

            </BrowserRouter>
        </div>
    )
}

export default App