import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Plans from './pages/Plans';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Request from './pages/Request';
import PrivacyPolicy from './pages/PrivacyPolicy';
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

const WhatsAppIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <Logo scale={0.45} />
        </Link>

        {/* Hamburger button — visible only on mobile via CSS */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>

        {/* Overlay */}
        {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)} />}

        {/* Desktop: always visible / Mobile: toggled */}
        <ul className={`nav-links ${menuOpen ? 'nav-open' : ''}`} style={{ gap: '2rem' }}>
          <li><Link to="/" className={`nav-item ${isActive('/')}`}>Home</Link></li>
          <li><Link to="/plans" className={`nav-item ${isActive('/plans')}`}>Plans & Pricing</Link></li>
          <li><Link to="/faq" className={`nav-item ${isActive('/faq')}`}>Policies & FAQ</Link></li>
          <li><Link to="/dashboard" className={`nav-item ${isActive('/dashboard')}`}>My Account</Link></li>
          <li><Link to="/contact" className={`nav-item ${isActive('/contact')}`}>Contact Us</Link></li>
          <li><Link to="/request" className={`nav-item ${isActive('/request')}`}>Reach Us</Link></li>
          <li className="mobile-cta"><Link to="/plans" className="btn btn-outline" style={{ padding: '0.6rem 1.5rem', width: '100%', textAlign: 'center' }}>Subscribe Now</Link></li>
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

          <div className="social-icons" style={{ display: 'flex', gap: '15px', marginTop: '25px' }}>
            <a href="https://instagram.com/aharamfoods" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Follow us on Instagram">
              <InstagramIcon size={24} />
            </a>
            <a href="https://twitter.com/aharamfoods" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Follow us on Twitter">
              <TwitterIcon size={24} />
            </a>
            <a href="https://facebook.com/aharamfoods" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Follow us on Facebook">
              <FacebookIcon size={24} />
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <div className="footer-title">Quick Links</div>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/plans">Plans & Pricing</Link>
            <Link to="/faq">Policies & FAQs</Link>
            <Link to="/privacy">Privacy Policy</Link>
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
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/faq">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

// Floating WhatsApp Button
const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919600103363?text=Hi%20Aharam!%20I'm%20interested%20in%20your%20meal%20plans."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsAppIcon size={28} />
    </a>
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
                <Route path="/request" element={<Request />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <WhatsAppButton />
          </div>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}
