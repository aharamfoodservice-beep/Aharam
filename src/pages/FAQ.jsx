import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const policies = [
    {
      title: "Weekday Only Schedule",
      desc: "Our elite meal subscriptions are strictly processed on weekdays (Monday to Friday). Zero service is provided on weekends. This guarantees our kitchen staff rest and our ingredients remain absolutely fresh for your work-week."
    },
    {
      title: "Cancellation & Wallet Refunds",
      desc: "Should you need to cancel an upcoming meal from an active subscription, the precise unused value is instantly credited to your Aharam digital wallet. We mandate wallet processing to ensure immediate availability for your next order."
    },
    {
      title: "Wallet Usage & Expiry",
      desc: "Wallet credits can be seamlessy applied toward any future subscription tier. Please note, strictly enforced, all wallet balances automatically expire 90 days from the moment of credit."
    }
  ];

  return (
    <div className="pt-section pb-section container animate-enter d-flex flex-column align-center">
      <div className="text-center mb-5">
        <h1 className="playfair mb-2" style={{ fontSize: '3.5rem' }}>Policies & FAQ</h1>
        <p className="text-secondary mx-auto" style={{ fontSize: '1.2rem', maxWidth: '600px' }}>
          Transparent, uncompromising standards regarding our scheduling and payment processing.
        </p>
      </div>

      <div style={{ maxWidth: '800px', margin: '1rem auto 0' }}>
        {policies.map((policy, idx) => (
          <div key={idx} style={{ borderBottom: '1px solid var(--color-border)', padding: '2rem 0' }}>
            <div 
              className="d-flex justify-between align-center" 
              style={{ cursor: 'pointer' }}
              onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
            >
              <h3 className="playfair" style={{ fontSize: '1.6rem', color: openIdx === idx ? 'var(--color-brand-blue)' : 'var(--color-text)', transition: '0.3s' }}>
                {policy.title}
              </h3>
              <ChevronDown 
                size={24} 
                style={{ 
                  color: 'var(--color-text-light)', 
                  transform: openIdx === idx ? 'rotate(180deg)' : 'none', 
                  transition: 'transform 0.3s' 
                }} 
              />
            </div>
            
            <div style={{ 
              maxHeight: openIdx === idx ? '200px' : '0', 
              overflow: 'hidden', 
              transition: 'max-height 0.4s ease-in-out',
              opacity: openIdx === idx ? 1 : 0
            }}>
              <p className="text-secondary mt-3" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                {policy.desc}
              </p>
            </div>
          </div>
        ))}

        <div className="pro-card mt-5 d-flex align-center gap-4 text-center flex-column" style={{ padding: '3rem', marginBottom: '8rem' }}>
          <HelpCircle size={48} style={{ color: 'var(--color-brand-pink)' }} />
          <div>
             <h3 className="playfair mb-2" style={{ fontSize: '2rem' }}>Require further clarity?</h3>
             <p className="text-secondary mb-3">Our concierge team is available around the clock to assist you.</p>
             <Link to="/contact" className="btn btn-primary">Contact Support</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
