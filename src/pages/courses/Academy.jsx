import React, { useState, useEffect, useRef } from 'react';
import './Academy.css';

// Image imports
import courseImg1 from '../../assets/INVESTMENT-WEALTH.png'
import courseImg2 from '../../assets/starting-a-business.png'
import courseImg3 from '../../assets/LEADERSHIP-MGT.png'
import courseImg4 from '../../assets/DIGITAL-MARKETING.png'
import courseImg5 from '../../assets/Business-Communication.png'
import courseImg6 from '../../assets/ENTREPRENEURIAL-FINANCE.png'
import courseImg7 from '../../assets/project-management.png'
import courseImg8 from '../../assets/SALES-MATERY.png'
import courseImg9 from '../../assets/BRAND-IDENTITY.png'
import heroImage from '../../assets/Academic.png';

// Icons for the Learning Experience section
import icon1 from '../../assets/Practical-hands-learning.png';
import icon2 from '../../assets/Real-world-case-studies.png';
import icon3 from '../../assets/Mentorship.png';
import icon4 from '../../assets/Flexible-online-options.png';

// Host Image
import hostImgAsset from '../../assets/chairmanmain.jpeg'

const Academy = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [cart, setCart] = useState([]);
    const [view, setView] = useState('main');
    const [checkoutStep, setCheckoutStep] = useState('billing');
    const [qty, setQty] = useState(1);
    const [activeFaq, setActiveFaq] = useState(null);
    const [billingData, setBillingData] = useState({
        email: '', firstName: '', lastName: '', country: 'Nigeria',
        address: '', town: '', postcode: '', phone: ''
    });

    // Animation visibility states
    const [isAvailableVisible, setIsAvailableVisible] = useState(false);
    const [isLearningVisible, setIsLearningVisible] = useState(false);
    const [isTestimonialsVisible, setIsTestimonialsVisible] = useState(false);
    const [isCtaVisible, setIsCtaVisible] = useState(false);

    // Refs
    const availableRef = useRef(null);
    const learningRef = useRef(null);
    const testimonialsRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [selectedCourse, view]);

    // Intersection Observer - exactly like your About page
    useEffect(() => {
        const observerOptions = { threshold: 0.2 };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target === availableRef.current) setIsAvailableVisible(true);
                    if (entry.target === learningRef.current) setIsLearningVisible(true);
                    if (entry.target === testimonialsRef.current) setIsTestimonialsVisible(true);
                    if (entry.target === ctaRef.current) setIsCtaVisible(true);
                }
            });
        }, observerOptions);

        if (availableRef.current) observer.observe(availableRef.current);
        if (learningRef.current) observer.observe(learningRef.current);
        if (testimonialsRef.current) observer.observe(testimonialsRef.current);
        if (ctaRef.current) observer.observe(ctaRef.current);

        return () => observer.disconnect();
    }, [view, selectedCourse]);

    const courseData = [
        {
            id: 1, img: courseImg1, title: "Investment & Wealth", price: 2000, subtitle: "Wealth Masterclass",
            discount: 15, videoID: "dQw4w9WgXcQ",
            desc: (
                <>
                    <p>This Investment & Wealth Masterclass is meticulously designed for individuals who are tired of living paycheck to paycheck and are ready to build a sustainable financial legacy. We move beyond basic savings and dive deep into the mechanics of capital growth in the modern economy.</p>
                    <p>Throughout this program, you will explore the 80 critical lessons that define the 1%. From understanding the psychology of money to mastering technical market analysis, we provide you with the tools to evaluate stocks, real estate, and digital assets with surgical precision. You'll learn how to build a "recession-proof" portfolio that generates passive income while you sleep.</p>
                    <p>By the end of this course, you won't just have theoretical knowledge; you will have a personalized 5-year wealth roadmap tailored to your specific income level and risk tolerance. Whether you are starting with ₦50,000 or ₦5,000,000, the principles of compounding and asset allocation remain the same. Join us and take total control of your financial destiny.</p>
                </>
            ),
            curriculum: ["Portfolio Diversification", "Risk Management", "Stock Market Analysis", "Real Estate Foundations"],
            faqs: [
                { q: "Is this for beginners?", a: "Yes, we cover everything from basic budgeting to advanced stocks." },
                { q: "Do I get a certificate?", a: "Yes, a professional certificate in Wealth Management is issued." },
                { q: "Can I start with little capital?", a: "Yes, we show you how to start with as little as ₦10,000." },
                { q: "How long is the course?", a: "It is self-paced but usually takes about 4 weeks." }
            ]
        },
        {
            id: 5, img: courseImg5, title: "Business Communication", price: 20000, subtitle: "Negotiation",
            discount: 25, videoID: "zLeUrWlhloU",
            desc: (
                <>
                    <p>In the world of business, you don't get what you deserve; you get what you negotiate. This course is a deep dive into the art of high-stakes communication and professional storytelling designed for entrepreneurs and corporate leaders alike.</p>
                    <p>We break down the barriers of "stage fright" and "imposter syndrome" by giving you scientifically proven scripts and frameworks used by world-class diplomats and CEOs. You will learn how to read micro-expressions, master the "Mirroring" technique, and handle aggressive negotiators without losing your cool. Communication is more than just talking; it's about influence and impact.</p>
                    <p>Our curriculum covers everything from internal team dynamics to closing million-dollar deals. You will practice the art of the "Pitch," learn how to write emails that actually get replies, and discover how to build a brand voice that commands respect in any industry. Your ability to communicate is the ceiling of your success—let’s raise it together.</p>
                </>
            ),
            curriculum: ["The Art of Persuasion", "Body Language Mastery", "Closing High-Value Contracts", "Conflict Resolution Scripts", "Storytelling for Brands", "Internal Team Communications"],
            faqs: [
                { q: "Will I learn public speaking?", a: "Yes, we have a full module dedicated to speaking confidence." },
                { q: "Is it for corporate employees?", a: "Absolutely, it's designed to help you climb the corporate ladder." },
                { q: "What materials do I get?", a: "You get negotiation templates and email scripts." },
                { q: "Are there live sessions?", a: "Yes, we host monthly Q&A sessions for all students." }
            ]
        },
        {
            id: 7, img: courseImg7, title: "Project Management", price: 32000, subtitle: "Agile Systems",
            discount: 12, videoID: "9A_fp-tH7P4",
            desc: (
                <>
                    <p>Chaos is the enemy of profit. This Project Management course is built for those who want to transition from "busy" to "productive." We teach you the Agile and Scrum methodologies that power the world’s most successful tech giants and creative agencies.</p>
                    <p>You will learn how to break down massive, overwhelming projects into manageable "Sprints." We provide hands-on training for essential industry tools like Jira, Trello, and Asana, ensuring you can lead remote or in-person teams with total transparency and accountability. No more missed deadlines or budget overruns—just streamlined execution.</p>
                    <p>This program also focuses on the "Human" side of project management: stakeholder communication and conflict resolution. You will learn how to manage expectations, mitigate risks before they happen, and lead with a precision that makes you an indispensable asset to any organization. Master the system, and the results will follow.</p>
                </>
            ),
            curriculum: ["Agile and Scrum Frameworks", "Risk Assessment & Mitigation", "Using Trello & Jira Effectively", "Resource Allocation Mastery", "Managing Remote Teams", "Stakeholder Communication", "Budget Tracking & ROI"],
            faqs: [
                { q: "Is this PMP certified?", a: "This follows PMI standards but focuses on practical software tools." },
                { q: "Do I need technical skills?", a: "No, project management is about systems and people, not coding." },
                { q: "Will I learn specific tools?", a: "Yes, we cover Jira, Trello, and Asana workflows." },
                { q: "Can I manage creative teams?", a: "Yes, the Agile modules are perfect for creative and marketing workflows." }
            ]
        },
        {
            id: 2, img: courseImg2, title: "Starting a Business", price: 25000, subtitle: "Entrepreneur",
            discount: 10, videoID: "7mP3-Jm5K4o",
            desc: (
                <>
                    <p>Turning a great idea into a profitable business is a journey filled with traps for the unprepared. This course serves as your tactical manual for building a legal, scalable, and sustainable business from scratch in today's competitive landscape.</p>
                    <p>We move past the "inspiration" and get into the "execution." You will learn how to perform rigorous market gap analysis, build a lean business model canvas, and navigate the legal requirements of registration and compliance. We teach you the metrics that actually matter—like Customer Acquisition Cost (CAC) and Lifetime Value (LTV)—so you can make decisions based on data, not feelings.</p>
                    <p>Whether you are looking to launch a side hustle or build the next big African unicorn, this training provides the blueprint. You'll gain access to our network of alumni and mentors who have been where you are and succeeded. Don't just start a business; build a brand that lasts for generations.</p>
                </>
            ),
            curriculum: ["Market Gap Analysis", "Business Model Canvas", "CAC & LTV Metrics", "Growth Hacking Basics"],
            faqs: [
                { q: "Must I have a business idea already?", a: "No, we have a module on idea generation and validation." },
                { q: "Is registration covered?", a: "We guide you through the legal requirements for CAC registration." },
                { q: "How long is access?", a: "You have lifetime access to the recorded modules." },
                { q: "Is there a community?", a: "Yes, you join our Alumni network of over 500 entrepreneurs." }
            ]
        },
        {
            id: 3, img: courseImg3, title: "Leadership & Management", price: 30000, subtitle: "Executive Leadership",
            discount: 5, videoID: "lAtX4V4XpM8",
            desc: (
                <>
                    <p>Being a boss is easy; being a leader is an art form. This Executive Leadership program is designed for mid-level managers and aspiring executives who want to master the complexities of human behavior and organizational strategy.</p>
                    <p>We focus heavily on Emotional Intelligence (EQ) as the foundation of modern leadership. You will learn how to delegate effectively without micromanaging, how to build a high-performance culture, and how to navigate the psychological shifts required for Change Management. This isn't just about giving orders; it's about inspiring a vision that others want to follow.</p>
                    <p>Through real-world case studies from successful African corporations, we analyze what makes teams fail and what makes them thrive. You will participate in leadership simulations that test your decision-making under pressure. Step into your power and become the leader your industry needs.</p>
                </>
            ),
            curriculum: ["Emotional Intelligence", "Delegation Frameworks", "Organizational Psychology", "Change Management"],
            faqs: [
                { q: "Who is this for?", a: "Mid-level managers and aspiring executives." },
                { q: "Are there group projects?", a: "Yes, we have 2 peer-reviewed leadership simulations." },
                { q: "Do we cover firing?", a: "Yes, we cover the legal and ethical ways to manage exits." },
                { q: "Is it theory-based?", a: "No, it's 80% case studies from real African corporations." }
            ]
        },
        {
            id: 4, img: courseImg4, title: "Digital Marketing", price: 25000, subtitle: "Performance Ads",
            discount: 20, videoID: "u6T9eM9BvV8",
            desc: (
                <>
                    <p>Marketing has shifted from "shouting" to "targeting." This Digital Marketing course is a technical deep dive into performance advertising, ensuring you never waste a single Naira on ads that don't convert.</p>
                    <p>We take you behind the scenes of Meta Ads Manager, Google Ads, and LinkedIn Marketing. You will learn how to set up tracking pixels, build high-converting landing pages, and master the art of SEO keyword strategy. We don't just teach you where to click; we teach you the "why" behind consumer behavior in the digital space.</p>
                    <p>By the end of this training, you will be able to build full marketing funnels that take a total stranger and turn them into a loyal customer. From email automation to technical SEO audits, you will possess a skillset that is in high demand globally. Stop guessing and start growing your business with digital precision.</p>
                </>
            ),
            curriculum: ["SEO Keyword Strategy", "Meta Ads Manager Mastery", "Email Marketing Funnels", "Pixel Tracking & Analytics"],
            faqs: [
                { q: "Do I need a large ad budget?", a: "No, we show you how to test with as little as $2/day." },
                { q: "Is SEO included?", a: "Yes, we cover both On-page and Technical SEO." },
                { q: "Will I learn copywriting?", a: "Yes, one full module is dedicated to high-converting sales copy." },
                { q: "Do I get ad credit?", a: "Sometimes we provide Google Ad coupons to new students." }
            ]
        },
        {
            id: 6, img: courseImg6, title: "Entrepreneurial Finance", price: 25000, subtitle: "Cashflow Mastery",
            discount: 18, videoID: "K0z6_rT4V4E",
            desc: (
                <>
                    <p>Most businesses don't fail because of a lack of customers—they fail because of a lack of cash. This course is "Finance for Non-Finance Owners," designed to give you total visibility over your business's financial health.</p>
                    <p>We teach you how to read your balance sheets and P&L statements without needing an accounting degree. You will learn how to calculate your "Runway," manage your working capital, and understand the unit economics of your products. Knowing your numbers is the difference between a business and a hobby.</p>
                    <p>We also cover the essentials of tax planning and compliance, ensuring you stay on the right side of the law while maximizing your profits. You'll learn the pros and cons of Debt vs. Equity funding and how to prepare your business to be "Bank Ready" for future loans or investments. Secure your foundation and scale with confidence.</p>
                </>
            ),
            curriculum: ["Cashflow Projections", "Tax Planning for SMEs", "Unit Economics", "Debt vs Equity Funding"],
            faqs: [
                { q: "Is this accounting?", a: "It's finance for non-finance owners. Very easy to follow." },
                { q: "Will it help me get loans?", a: "Yes, we show you how to prepare a 'Bank Ready' financial statement." },
                { q: "Is Excel required?", a: "Basic Excel is helpful, but we provide all the templates." },
                { q: "Do we cover VAT?", a: "Yes, we cover local tax compliance in detail." }
            ]
        },
        {
            id: 8, img: courseImg8, title: "Sales Mastery", price: 22000, subtitle: "The Closer's Script",
            discount: 30, videoID: "7-8_BwB-4x0",
            desc: (
                <>
                    <p>Sales is the heartbeat of every company. This course is designed to turn you into a "Master Closer" by teaching you the psychology of human desire and the mechanics of professional persuasion.</p>
                    <p>We provide you with battle-tested scripts for cold calling, social selling, and in-person presentations. You will learn how to handle objections like "it's too expensive" or "I need to think about it" with ease and professionalism. We break sales down into a repeatable process that removes the fear and replaces it with results.</p>
                    <p>From CRM management to high-ticket B2B sales strategies, this program covers the entire sales lifecycle. Whether you are an introvert who is afraid of "selling" or a seasoned pro looking to sharpen your edge, these techniques will significantly increase your conversion rates and your income. Let's start closing deals.</p>
                </>
            ),
            curriculum: ["Cold Calling Frameworks", "CRM Management", "Psychological Triggers", "B2B vs B2C Sales"],
            faqs: [
                { q: "I'm shy, can I do this?", a: "Yes! Sales is a process, not a personality trait. We give you scripts." },
                { q: "Is this about network marketing?", a: "No. This is professional high-ticket sales training." },
                { q: "Do we learn CRM?", a: "Yes, we use HubSpot and Salesforce as examples." },
                { q: "How do I practice?", a: "We have live role-play sessions every Friday." }
            ]
        },
        {
            id: 9, img: courseImg9, title: "Brand Identity", price: 28000, subtitle: "Visual Strategy",
            discount: 10, videoID: "h7M-lVqXvS0",
            desc: (
                <>
                    <p>A brand is more than a logo; it's a promise kept. This Brand Identity course is a strategic masterclass on how to build a business that people love, trust, and choose over the competition every single time.</p>
                    <p>We dive deep into Brand Archetypes and Visual Identity Systems. You will learn how to craft a brand story that resonates emotionally with your target audience and how to maintain consistency across every customer touchpoint. We show you how to move from being a "commodity" to being a "destination brand."</p>
                    <p>The course covers both business branding and personal branding, giving you the tools to position yourself as an authority in your niche. Through visual strategy and storytelling, you will learn how to command higher prices and build a community of loyal advocates. Your brand is your reputation—let's make it legendary.</p>
                </>
            ),
            curriculum: ["Brand Archetypes", "Visual Identity Systems", "Brand Storytelling", "Customer Touchpoints"],
            faqs: [
                { q: "Is this a design course?", a: "It's a strategy course. You'll learn the 'Why' before the 'How'." },
                { q: "Do I need Photoshop?", a: "No, we focus on strategy and use tools like Canva for implementation." },
                { q: "Will this help my personal brand?", a: "Yes, the principles apply to both business and individuals." },
                { q: "Do I get a brand audit?", a: "The final project is a full audit of your current brand." }
            ]
        }
    ];

    const handleAddToCart = (item, quantity) => {
        setCart([...cart, { ...item, quantity }]);
        setView('cart');
        setSelectedCourse(null);
    };

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    if (view === 'checkout') {
        const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        const vat = subtotal * 0.075;
        const total = subtotal + vat;

        const handleContinue = () => {
            const { email, firstName, lastName, address, town, postcode, phone } = billingData;

            if (!email || !firstName || !lastName || !address || !town || !postcode || !phone) {
                alert("Please fill in all required fields marked with *");
                return;
            }
            setCheckoutStep('payment');
        };

        return (
            <div className="courses-page checkout-view-bg">
                <div className="checkout-main-container">
                    <div className="checkout-top-info">
                        <p className="login-prompt">ℹ Returning customer? <span className="red-link">Click here to login</span></p>
                        <div className="promo-banner">
                            <h2>Have A Promotional Code?</h2>
                            <div className="promo-input-group">
                                <input type="text" placeholder="Coupon code" />
                                <button className="apply-coupon-btn">Apply coupon</button>
                            </div>
                        </div>
                    </div>

                    <div className="checkout-grid-layout">
                        <div className="checkout-sidebar">
                            <div className={`side-link ${checkoutStep === 'billing' ? 'active' : ''}`} onClick={() => setCheckoutStep('billing')}>
                                Billing Address {checkoutStep === 'billing' && '>'}
                            </div>
                            <div className={`side-link ${checkoutStep === 'payment' ? 'active' : ''}`}>
                                Review & Payment {checkoutStep === 'payment' && '>'}
                            </div>
                        </div>

                        <div className="checkout-form-container">
                            {checkoutStep === 'billing' ? (
                                <div className="billing-form">
                                    <h2 className="section-title">Billing details</h2>
                                    <div className="form-group">
                                        <label>Email address *</label>
                                        <input type="email" value={billingData.email} onChange={(e) => setBillingData({ ...billingData, email: e.target.value })} required />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>First name *</label>
                                            <input type="text" value={billingData.firstName} onChange={(e) => setBillingData({ ...billingData, firstName: e.target.value })} required />
                                        </div>
                                        <div className="form-group">
                                            <label>Last name *</label>
                                            <input type="text" value={billingData.lastName} onChange={(e) => setBillingData({ ...billingData, lastName: e.target.value })} required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Country / Region *</label>
                                        <select value={billingData.country} onChange={(e) => setBillingData({ ...billingData, country: e.target.value })} required>
                                            <option>United Kingdom</option>
                                            <option>United State</option>
                                            <option>Nigeria</option>
                                            
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Street address *</label>
                                        <input type="text" placeholder="House number and street name" value={billingData.address} onChange={(e) => setBillingData({ ...billingData, address: e.target.value })} required />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Town / City *</label>
                                            <input type="text" value={billingData.town} onChange={(e) => setBillingData({ ...billingData, town: e.target.value })} required />
                                        </div>
                                        <div className="form-group">
                                            <label>Postcode / ZIP *</label>
                                            <input type="text" value={billingData.postcode} onChange={(e) => setBillingData({ ...billingData, postcode: e.target.value })} required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Phone *</label>
                                        <input type="tel" value={billingData.phone} onChange={(e) => setBillingData({ ...billingData, phone: e.target.value })} required />
                                    </div>
                                    <div className="form-footer">
                                        <button className="checkout-continue-btn" onClick={handleContinue}>Continue</button>
                                    </div>
                                </div>
                            ) : (
                                <div className="payment-review-panel">
                                    <h2 className="section-title">Review & Payment</h2>
                                    <table className="review-table">
                                        <thead><tr><th>Product</th><th className="text-right">Subtotal</th></tr></thead>
                                        <tbody>
                                            {cart.map((item, idx) => (
                                                <tr key={idx}>
                                                    <td className="review-product-cell">
                                                        <img src={item.img} alt="" />
                                                        <span>{item.title} <strong>× {item.quantity}</strong></span>
                                                    </td>
                                                    <td className="text-right">£{(item.price * item.quantity).toLocaleString()}.00 (ex. VAT)</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div className="review-summary-box">
                                        <div className="summary-line"><span>Subtotal</span><span>£{subtotal.toLocaleString()}.00 (ex. VAT)</span></div>
                                        <div className="summary-line"><span>VAT</span><span>£{vat.toLocaleString()}.00</span></div>
                                        <div className="summary-line total-line"><span>Total</span><span>₦{total.toLocaleString()}.00</span></div>
                                    </div>
                                    <div className="payment-card-box">
                                        <div className="card-header-flex">
                                            <h3>Credit / Debit Card</h3>
                                            <span>💳</span>
                                        </div>
                                        <div className="card-fields">
                                            <div className="card-input-group">
                                                <label>Card number</label>
                                                <input type="text" placeholder="1234 1234 1234 1234" className="full-input" />
                                            </div>
                                            <div className="card-row">
                                                <div className="card-input-group"><label>Expiration date</label><input type="text" placeholder="MM / YY" /></div>
                                                <div className="card-input-group"><label>Security code</label><input type="text" placeholder="CVC" /></div>
                                            </div>
                                            <div className="save-card-check">
                                                <input type="checkbox" id="save-info" />
                                                <label htmlFor="save-info">Save payment information to my account for future purchases.</label>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="checkout-privacy-note">
                                        Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <span className="red-link">privacy policy</span>.
                                    </p>
                                    <div className="place-order-flex-end">
                                        <button className="place-order-btn">Place order</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (view === 'cart') {
        const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        return (
            <div className="courses-page cart-page-bg">
                <div className="cart-container-main">
                    <div className="cart-header-msg">
                        <p>✅ Item added to cart.</p>
                        <button className="continue-shop-btn" onClick={() => setView('main')}>Continue Shopping</button>
                    </div>
                    <h2 className="cart-main-title">You Have {cart.length} Items In Your Cart</h2>
                    <div className="cart-table-container">
                        <table className="cart-table">
                            <thead>
                                <tr><th>Product</th><th>Price</th><th>Quantity</th><th>Subtotal</th></tr>
                            </thead>
                            <tbody>
                                {cart.map((item, index) => (
                                    <tr key={index}>
                                        <td className="p-cell">
                                            <img src={item.img} alt="" />
                                            <div><p className="it-t">{item.title}</p></div>
                                        </td>
                                        <td>£{item.price.toLocaleString()}</td>
                                        <td><div className="qty-box-fixed">{item.quantity}</div></td>
                                        <td>£{(item.price * item.quantity).toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="cart-grid-layout">
                        <div className="promo-section">
                            <h3>Have A Promotional Code?</h3>
                            <div className="promo-input-group">
                                <input type="text" placeholder="Coupon code" />
                                <button className="apply-btn">Apply coupon</button>
                            </div>
                        </div>
                        <div className="totals-card">
                            <h3>Cart totals</h3>
                            <div className="total-row"><span>Subtotal</span><span>£{subtotal.toLocaleString()}</span></div>
                            <div className="total-row grand"><span>Total</span><span>£{(subtotal * 1.075).toLocaleString()}</span></div>
                            <button className="checkout-btn" onClick={() => setView('checkout')}>Proceed to checkout</button>
                            <a href="https://paystack.com" target="_blank" rel="noopener noreferrer" className="paystack-link-cart">Pay with <span>●</span> link</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (selectedCourse) {
        return (
            <div className="courses-page">
                <section className="details-section-view">
                    <div className="details-container-centered">
                        <div className="details-top-nav">
                            <button className="back-to-academy-btn" onClick={() => { setSelectedCourse(null); setQty(1); }}>
                                <span>←</span> Back to Academy
                            </button>
                        </div>
                        <div className="details-grid fade-up">
                            <div className="details-left">
                                <div className="flier-container"><img src={selectedCourse.img} alt={selectedCourse.title} /></div>
                            </div>
                            <div className="details-right">
                                <h1 className="details-title">{selectedCourse.title}</h1>
                                <p className="details-price">£{selectedCourse.price.toLocaleString()}</p>
                                <hr className="details-divider" />
                                <h2 className="details-subtitle">{selectedCourse.subtitle} | Online Training</h2>
                                <div className="details-rich-text">
                                    {selectedCourse.desc}
                                    <p>Gain comprehensive insights and master fundamental principles for excellence in {selectedCourse.title}.</p>
                                </div>
                                <div className="details-cart-row">
                                    <div className="details-qty">
                                        <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
                                        <input type="text" value={qty} readOnly />
                                        <button onClick={() => setQty(qty + 1)}>+</button>
                                    </div>
                                    <button className="details-add-btn" onClick={() => handleAddToCart(selectedCourse, qty)}>Add to cart</button>
                                </div>
                                <a href="https://paystack.com" target="_blank" rel="noopener noreferrer" className="paystack-link-styled">Pay with <span className="ps-icon">●</span> link</a>
                            </div>
                        </div>

                        <div className="details-description-section fade-up">
                            <div className="desc-sidebar-title">Description</div>
                            <div className="desc-main-content">
                                <div className="promo-countdown-banner">
                                    <div className="promo-text">
                                        <p>{selectedCourse.discount}% OFF until 2nd Jan 26</p>
                                        <h3>Code XMAS{selectedCourse.discount}</h3>
                                    </div>
                                    <div className="timer-box-container">
                                        <div className="timer-unit"><span>00</span> Days</div>
                                        <div className="timer-unit"><span>00</span> Hrs</div>
                                    </div>
                                </div>

                                <div className="host-profile-grid">
                                    <div className="host-image"><img src={hostImgAsset} alt="Host Profile" /></div>
                                    <div className="host-info">
                                        <h2>About your Host</h2>
                                        <ul className="check-list">
                                            <li>Multi-Award Winning Entrepreneur</li>
                                            <li>Keynote Speaker at national conferences</li>
                                            <li>Blueprint Certified Professional</li>
                                            <li>No Nonsense, No Fluff and Straight Talking!</li>
                                            <li>Founder of 3 successful 7-figure startups</li>
                                            <li>Dedicated to empowering modern professionals</li>
                                        </ul>
                                    </div>
                                </div>

                                <button className="full-width-red-btn" onClick={() => handleAddToCart(selectedCourse, qty)}>TAKE THIS COURSE WITH EXPERTS</button>

                                <div className="curriculum-content">
                                    <h3>What's inside the {selectedCourse.title} Course?</h3>
                                    <ul className="check-list red-checks">
                                        {selectedCourse.curriculum.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                        <li>Professional Certification Roadmap</li>
                                    </ul>
                                </div>

                                <div className="video-demo-container">
                                    <iframe width="100%" height="450" src={`https://www.youtube.com/embed/${selectedCourse.videoID}`} title="Preview" frameBorder="0" allowFullScreen></iframe>
                                </div>

                                <div className="faq-section">
                                    <h3>Frequently Asked Questions</h3>
                                    {selectedCourse.faqs.map((item, i) => (
                                        <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => toggleFaq(i)}>
                                            <div className="faq-question">
                                                <span className="faq-icon">{activeFaq === i ? '−' : '+'}</span>{item.q}
                                            </div>
                                            {activeFaq === i && <div className="faq-answer">{item.a}</div>}
                                        </div>
                                    ))}
                                </div>

                                <button className="full-width-red-btn" onClick={() => handleAddToCart(selectedCourse, qty)}>TAKE THIS COURSE WITH EXPERTS</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className="courses-page">
            <section className="courses-hero">
                <img src={heroImage} alt="Academy Hero" className="hero-background-image" />
                <div className="c-hero-content">
                    <h1 className="water-text" data-text="Practical Business Trainings">
                        Practical Business Trainings
                    </h1>
                    <p>Hands-on programs designed to give you skills you can apply immediately</p>
                </div>
            </section>

            {/* Available Trainings – fade-in-left like story text */}
            <section className="available-section" ref={availableRef}>
                <h2 className="available-title">Available Trainings</h2>
                <div className={`courses-container ${isAvailableVisible ? 'fade-in-left' : 'is-hidden'}`}>
                    {courseData.map((course) => (
                        <div key={course.id} className="c-card" onClick={() => setSelectedCourse(course)}>
                            <div className="c-card-img-wrapper">
                                <img src={course.img} alt={course.title} className="c-card-img" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Learning Experience – fade-up like mission/vision */}
            <section className="learning-experience-section" ref={learningRef}>
                <h2 className="learning-title">Learning Experience</h2>
                <div className={`learning-container ${isLearningVisible ? 'fade-up' : 'is-hidden'}`}>
                    <div className="learning-item">
                        <div className="learning-icon"><img src={icon1} alt="" /></div>
                        <p>Practical, hands-on learning</p>
                    </div>
                    <div className="learning-item">
                        <div className="learning-icon"><img src={icon2} alt="" /></div>
                        <p>Real-world case studies</p>
                    </div>
                    <div className="learning-item">
                        <div className="learning-icon"><img src={icon3} alt="" /></div>
                        <p>Mentorship support</p>
                    </div>
                    <div className="learning-item">
                        <div className="learning-icon"><img src={icon4} alt="" /></div>
                        <p>Flexible online options</p>
                    </div>
                </div>
            </section>

            {/* Testimonials – slide-in-right like image column */}
            {/* <section className="testimonials-section" ref={testimonialsRef}>
                <h2 className="testimonials-title">What <span>Our Students Say</span></h2>
                <div className={`testimonials-container ${isTestimonialsVisible ? 'slide-in-right' : 'is-hidden'}`}>
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="testimonial-card">
                            <div className="stars">★★★★★</div>
                            <p className="testimonial-text">“This program gave me the confidence to start my journey.”</p>
                            <h4 className="student-name">Student {item}</h4>
                        </div>
                    ))}
                </div>
            </section> */}

            {/* CTA – fade-up like offer section */}
            <section className="courses-cta-section" ref={ctaRef}>
                <h2 className={`cta-heading ${isCtaVisible ? 'fade-up' : 'is-hidden'}`}>
                    Ready to take the next step?
                </h2>
            </section>
        </div>
    );
};

export default Academy;