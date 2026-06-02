import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, UtensilsCrossed, Star, Quote } from 'lucide-react';
import heroImage from '../assets/hero.webp';

export default function Home() {
  const testimonials = [
    {
      name: "Priya R.",
      role: "Software Engineer",
      text: "Aharam has completely transformed my weekday lunches. The food is always fresh, hot, and arrives right on time. Worth every rupee!",
      rating: 5
    },
    {
      name: "Karthik M.",
      role: "Startup Founder",
      text: "As someone who works 12-hour days, Aharam is a lifesaver. No more skipping meals or ordering unhealthy fast food.",
      rating: 5
    },
    {
      name: "Deepa S.",
      role: "College Professor",
      text: "The monthly elite plan is incredible value. Zero delivery fee and the food quality is consistently excellent.",
      rating: 5
    }
  ];

  return (
    <div className="animate-enter">
      {/* Hero Section */}
      <section className="hero-wrapper">
        <div className="container hero-content">

          <div className="hero-image">
            <div className="image-wrapper">
              <img
                src={heroImage}
                alt="Aharam Food Delivery — fresh meals including rice, curry, and sides beautifully presented"
                loading="eager"
              />
            </div>
          </div>

          <div className="hero-text">
            <div className="hero-badge">
              The Modern Meal Delivery
            </div>
            <h1 className="playfair hero-heading">
              Redefining Daily <span className="text-gradient">Dining.</span>
            </h1>
            <p className="hero-subtitle">
              Experience the luxury of home-cooked perfection. Hygienic, precise, and effortlessly delivered to your door every weekday.
            </p>
            <div className="hero-actions">
              <Link to="/plans" className="btn btn-primary btn-lg">Explore Subscriptions</Link>
              <Link to="/faq" className="btn btn-ghost">Our Standards &rarr;</Link>
            </div>
          </div>

        </div>
      </section>

      {/* Trust / Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="playfair text-gradient section-heading">Why Aharam?</h2>
            <p className="text-secondary mt-2 section-subtitle">Engineered for professionals who refuse to compromise on quality.</p>
          </div>

          <div className="features-grid">

            <div className="glass-card feature-card text-center d-flex flex-column align-center">
              <div className="feature-icon feature-icon--blue">
                <UtensilsCrossed size={28} />
              </div>
              <h3 className="feature-title">Culinary Excellence</h3>
              <p className="text-secondary text-sm">Curated menus spanning Pure Veg and Non-Veg, crafted daily by expert chefs using elite ingredients.</p>
              <div className="feature-stat">200+ meals crafted daily</div>
            </div>

            <div className="glass-card feature-card text-center d-flex flex-column align-center">
              <div className="feature-icon feature-icon--pink">
                <ShieldCheck size={28} />
              </div>
              <h3 className="feature-title">Absolute Hygiene</h3>
              <p className="text-secondary text-sm">Our kitchens operate under strict sanitation protocols, ensuring peerless safety for every dispatched meal.</p>
              <div className="feature-stat">FSSAI Certified Kitchen</div>
            </div>

            <div className="glass-card feature-card text-center d-flex flex-column align-center">
              <div className="feature-icon feature-icon--dark">
                <Truck size={28} />
              </div>
              <h3 className="feature-title">Clockwork Delivery</h3>
              <p className="text-secondary text-sm">Precision logistics guarantee your food arrives piping hot, right on schedule, zero friction.</p>
              <div className="feature-stat">98.5% on-time delivery</div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="playfair section-heading">What Our Subscribers Say</h2>
            <p className="text-secondary mt-2 section-subtitle">Real stories from real professionals who trust Aharam every day.</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t, idx) => (
              <div key={idx} className="testimonial-card">
                <Quote size={24} className="testimonial-quote-icon" />
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-stars">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.name.charAt(0)}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-section">
        <div className="container text-center">
          <h2 className="playfair cta-heading">Ready to Transform Your Weekday Meals?</h2>
          <p className="cta-subtitle">Join hundreds of professionals who've upgraded their daily dining.</p>
          <Link to="/plans" className="btn btn-primary btn-lg">Get Started Today</Link>
        </div>
      </section>
    </div>
  );
}
