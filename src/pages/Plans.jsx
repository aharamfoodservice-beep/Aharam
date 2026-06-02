import React from 'react';
import { Check } from 'lucide-react';

export default function Plans() {
  const plans = [
    {
      title: "Daily Trial",
      duration: "1 Weekday",
      desc: "Perfect for a single-day experience.",
      veg: "₹160",
      nonveg: "₹200",
      features: [
        "1 Fresh Meal",
        "Valid Mon-Fri only",
        "5% Platform Fee",
        "₹10 Delivery Fee"
      ],
      highlight: false
    },
    {
      title: "Monthly Elite",
      duration: "24 Weekdays",
      desc: "Maximum value. Zero friction.",
      veg: "₹3,520",
      nonveg: "₹4,400",
      features: [
        "Fresh Meal every Weekday",
        "Zero Delivery Charges! (₹0)",
        "Zero Platform Fees! (0%)",
        "Priority Elite Support"
      ],
      highlight: true
    },
    {
      title: "Weekly Standard",
      duration: "5 Weekdays",
      desc: "The perfect work-week relief.",
      veg: "₹800",
      nonveg: "₹1,000",
      features: [
        "5 Fresh Meals (Mon-Fri)",
        "No Weekend Deliveries",
        "5% Platform Fee",
        "₹50 Total Delivery Fee"
      ],
      highlight: false
    }
  ];

  return (
    <div className="pt-section pb-section container animate-enter d-flex flex-column align-center">
      <div className="text-center mb-5">
        <h1 className="playfair mb-2 page-title">Subscription Tiers</h1>
        <p className="text-secondary mx-auto" style={{ fontSize: '1.2rem', maxWidth: '600px' }}>
          Uncomplicated pricing for exceptional food. Subscriptions are exclusively processed on weekdays.
        </p>
      </div>
      <div className="plans-grid">
        {plans.map((plan, idx) => (
          <div key={idx} className="pro-card" style={{
            padding: plan.highlight ? '4rem 2.5rem' : '3rem 2.5rem',
            border: plan.highlight ? '2px solid var(--color-brand-blue)' : '1px solid var(--color-border)',
            transform: plan.highlight ? 'scale(1.02)' : 'none',
            zIndex: plan.highlight ? 10 : 1
          }}>

            {plan.highlight && (
              <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', background: 'var(--brand-gradient)', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '4px', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Most Popular
              </div>
            )}

            <h3 className="playfair mb-1" style={{ fontSize: '1.8rem' }}>{plan.title}</h3>
            <div className="text-sm fw-600 mb-4" style={{ color: 'var(--color-brand-pink)' }}>{plan.duration}</div>

            <div className="mb-4">
              <div className="d-flex justify-between align-center mb-2">
                <span className="text-sm text-secondary uppercase fw-600">Pure Veg</span>
                <span className="fw-700" style={{ fontSize: '2rem' }}>{plan.veg}</span>
              </div>
              <div className="d-flex justify-between align-center border-bottom pb-4">
                <span className="text-sm text-secondary uppercase fw-600">Non-Veg</span>
                <span className="fw-700" style={{ fontSize: '2rem' }}>{plan.nonveg}</span>
              </div>
            </div>

            <p className="mb-4 text-sm text-secondary italic" style={{ fontStyle: 'italic' }}>"{plan.desc}"</p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem' }}>
              {plan.features.map((f, i) => (
                <li key={i} className="d-flex align-center gap-2 text-sm fw-500">
                  <Check size={18} style={{ color: 'var(--color-brand-blue)', flexShrink: 0 }} />
                  {f}
                </li>
              ))}
            </ul>

            <button className={`btn w-100 ${plan.highlight ? 'btn-brand' : 'btn-secondary'}`}>
              Select {plan.title}
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}
