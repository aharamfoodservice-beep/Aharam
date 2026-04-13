import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { Leaf, Drumstick, ArrowRight } from 'lucide-react';

export default function Dashboard() {
  const { user } = useAuth();
  const { activeSubscriptions } = useCart();
  const navigate = useNavigate();

  return (
    <div className="container pt-section py-4 animate-fade-in-up" style={{ minHeight: '80vh' }}>
      <header className="mb-4">
        <h1 style={{fontSize: '1.8rem'}}>Hello, {user?.name?.split(' ')[0]} 👋</h1>
        <p className="text-secondary">What are you craving today?</p>
      </header>

      {/* Promotional Banner */}
      <div className="promo-banner mb-4">
        <div className="promo-content">
          <h3>🌟 Zero Delivery Fee!</h3>
          <p>Get FREE delivery & no platform fee on Monthly Plans.</p>
        </div>
        <button className="btn btn-secondary promo-btn" onClick={() => navigate('/plans')}>
          Claim Offer
        </button>
      </div>



      {/* Daily Menu Quick Glance */}
      <section>
        <div className="d-flex justify-between align-center mb-3">
          <h2 className="section-title">Explore Plans</h2>
          <span className="link-text" onClick={() => navigate('/plans')}>See All <ArrowRight size={16}/></span>
        </div>
        <div className="menu-grid">
          <div className="menu-card" onClick={() => navigate('/plans')}>
             <div className="menu-icon bg-green-light"><Leaf color="#2E7D32" /></div>
             <h4>Pure Veg Plan</h4>
             <p className="text-secondary">From ₹160/day</p>
          </div>
          <div className="menu-card" onClick={() => navigate('/plans')}>
             <div className="menu-icon bg-red-light"><Drumstick color="#c62828" /></div>
             <h4>Non-Veg Plan</h4>
             <p className="text-secondary">From ₹200/day</p>
          </div>
        </div>
      </section>
    </div>
  );
}
