import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Plans from './pages/Plans';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Logo from './components/Logo';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

import './index.css';

const InstagramIcon = ({ size, style, onClick }) => (
  <svg onClick={onClick} style={style} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const TwitterIcon = ({ size, style, onClick }) => (
  <svg onClick={onClick} style={style} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);
const FacebookIcon = ({ size, style, onClick }) => (
  <svg onClick={onClick} style={style} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <Logo scale={0.45} />
        </Link>
        <ul className="nav-links" style={{ gap: '2rem' }}>
          <li><Link to="/" className={`nav-item ${isActive('/')}`}>Home</Link></li>
          <li><Link to="/plans" className={`nav-item ${isActive('/plans')}`}>Plans & Pricing</Link></li>
          <li><Link to="/faq" className={`nav-item ${isActive('/faq')}`}>Policies & FAQ</Link></li>
          <li><Link to="/dashboard" className={`nav-item ${isActive('/dashboard')}`}>My Account</Link></li>
          <li><Link to="/contact" className={`nav-item ${isActive('/contact')}`}>Contact Us</Link></li>
          <li style={{ marginLeft: '1rem' }}><Link to="/plans" className="btn btn-outline" style={{ padding: '0.6rem 1.5rem' }}>Subscribe Now</Link></li>
        </ul>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 */}
        <div>
          <div style={{ marginBottom: '1rem', marginLeft: '-15px' }}>
            <Logo scale={0.5} />
          </div>
          <div className="footer-text" style={{ marginTop: 0 }}>
            Bringing joy to your doorstep, one meal at a time. Fresh ingredients, lightning-fast delivery.
          </div>
          <div style={{ marginTop: '15px' }}>
             <Link to="/plans" className="cta-button" style={{ display: 'inline-block', textDecoration: 'none' }}>Explore Plans</Link>
          </div>

          <div className="social-icons" style={{ display: 'flex', gap: '15px', marginTop: '25px', color: '#555' }}>
            <InstagramIcon size={24} style={{ cursor: 'pointer' }} onClick={() => console.log('Instagram')} />
            <TwitterIcon size={24} style={{ cursor: 'pointer' }} onClick={() => console.log('X/Twitter')} />
            <FacebookIcon size={24} style={{ cursor: 'pointer' }} onClick={() => console.log('Facebook')} />
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <div className="footer-title">Quick Links</div>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/plans">Plans & Pricing</Link>
            <Link to="/faq">Policies & FAQs</Link>
          </div>
        </div>

        {/* Column 3 */}
        <div>
          <div className="footer-title">Contact</div>
          <div className="contact-item">aharamfood.service@gmail.com</div>
          <div className="contact-item">+91-96001-03363</div>
        </div>

      </div>

      <div className="footer-bottom">
        <div>© {new Date().getFullYear()} Aharam. All rights reserved.</div>
        <div>
          <Link to="/faq">Privacy Policy</Link>
          <Link to="/faq">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

// ScrollToTop on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="app-layout">
            <Navigation />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/plans" element={<Plans />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}
