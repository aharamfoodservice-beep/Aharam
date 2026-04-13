import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, UtensilsCrossed } from 'lucide-react';
import heroImage from '../assets/hero.png';

export default function Home() {
  return (
    <div className="animate-enter">
      {/* Glassmorphic Hero Section */}
      <section className="hero-wrapper" style={{ backgroundColor: '#ffffff' }}>

        <div className="container relative z-10" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '2rem' }}>

          <div className="hero-image" style={{ width: '100%', maxWidth: '900px', marginBottom: '1rem' }}>
            <div className="image-wrapper" style={{ width: '100%' }}>
              <img
                src={heroImage}
                alt="Aharam Food Delivery Showcase"
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain', mixBlendMode: 'darken' }}
              />
            </div>
          </div>

          <div className="hero-text" style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="uppercase text-sm fw-700 mb-2 text-gradient" style={{ letterSpacing: '0.1em' }}>
              The Modern Meal Delivery
            </div>
            <h1 className="playfair mb-3" style={{ fontSize: '4.5rem', lineHeight: '1.25' }}>
              Redefining Daily <span className="text-gradient">Dining.</span>
            </h1>
            <p className="text-secondary mb-4 mx-auto" style={{ fontSize: '1.2rem', maxWidth: '500px' }}>
              Experience the luxury of home-cooked perfection. Hygienic, precise, and effortlessly delivered to your door every weekday.
            </p>
            <div className="d-flex gap-3 justify-center mt-3">
              <Link to="/plans" className="btn btn-primary" style={{ padding: '1.2rem 2.5rem', fontSize: '1.05rem', borderRadius: '8px' }}>Explore Subscriptions</Link>
              <Link to="/faq" className="btn btn-ghost" style={{ padding: '1rem 2rem', color: '#555' }}>Our Standards &rarr;</Link>
            </div>
          </div>

        </div>
      </section>

      {/* Trust / Values Section - Minimalist */}
      <section style={{ padding: '5rem 0', background: 'var(--color-white)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="playfair text-gradient" style={{ fontSize: '3rem' }}>Why Aharam?</h2>
            <p className="text-secondary mt-2" style={{ fontSize: '1.1rem' }}>Engineered for professionals who refuse to compromise on quality.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>

            <div className="glass-card text-center d-flex flex-column align-center" style={{ padding: '3rem' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(15, 157, 219, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <UtensilsCrossed size={28} style={{ color: 'var(--color-brand-blue)' }} />
              </div>
              <h3 className="mb-1" style={{ fontSize: '1.4rem' }}>Culinary Excellence</h3>
              <p className="text-secondary text-sm">Curated menus spanning Pure Veg and Non-Veg, crafted daily by expert chefs using elite ingredients.</p>
            </div>

            <div className="glass-card text-center d-flex flex-column align-center" style={{ padding: '3rem' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(209, 61, 113, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <ShieldCheck size={28} style={{ color: 'var(--color-brand-pink)' }} />
              </div>
              <h3 className="mb-1" style={{ fontSize: '1.4rem' }}>Absolute Hygiene</h3>
              <p className="text-secondary text-sm">Our kitchens operate under strict sanitation protocols, ensuring peerless safety for every dispatched meal.</p>
            </div>

            <div className="glass-card text-center d-flex flex-column align-center" style={{ padding: '3rem' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(15, 23, 42, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Truck size={28} style={{ color: 'var(--color-text)' }} />
              </div>
              <h3 className="mb-1" style={{ fontSize: '1.4rem' }}>Clockwork Delivery</h3>
              <p className="text-secondary text-sm">Precision logistics guarantee your food arrives piping hot, right on schedule, zero friction.</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
