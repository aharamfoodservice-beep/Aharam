import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-section pb-section container animate-enter mt-4">
      <div className="text-center mb-5">
        <h1 className="playfair mb-2 page-title">Get in Touch</h1>
        <p className="text-secondary" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Connect with our culinary advisors regarding corporate tier plans, delivery logistics, or ingredient sourcing.
        </p>
      </div>

      <div className="contact-layout mb-5">

        {/* Contact info minimalist cards */}
        <div style={{ flex: '1', minWidth: '300px' }} className="d-flex flex-column gap-3">

          <div className="pro-card d-flex align-center gap-3" style={{ padding: '2rem' }}>
            <div style={{ padding: '1rem', background: 'var(--color-bg)', borderRadius: '50%' }}>
              <Mail size={24} style={{ color: 'var(--color-brand-blue)' }} />
            </div>
            <div>
              <div className="input-label">Corporate Email</div>
              <p className="fw-500 m-0 text-sm">aharamfood.service@gmail.com</p>
            </div>
          </div>

          <div className="pro-card d-flex align-center gap-3" style={{ padding: '2rem' }}>
            <div style={{ padding: '1rem', background: 'var(--color-bg)', borderRadius: '50%' }}>
              <Phone size={24} style={{ color: 'var(--color-brand-pink)' }} />
            </div>
            <div>
              <div className="input-label">Concierge Direct</div>
              <p className="fw-500 m-0 text-sm">+91-96001-03363</p>
            </div>
          </div>

          <div className="pro-card d-flex align-center gap-3" style={{ padding: '2rem' }}>
            <div style={{ padding: '1rem', background: 'var(--color-bg)', borderRadius: '50%' }}>
              <MapPin size={24} style={{ color: 'var(--color-text)' }} />
            </div>
            <div>
              <div className="input-label">Executive Kitchen</div>
              <p className="fw-500 m-0 text-sm">27 RHR Building, State Bank Road, Coimbatore 641018</p>
            </div>
          </div>

        </div>

        {/* Professional Form */}
        <div style={{ flex: '1.5', minWidth: '400px' }}>
          <div className="pro-card" style={{ padding: '3rem' }}>
            <h3 className="playfair mb-4" style={{ fontSize: '2rem' }}>Direct Inquiry</h3>
            <form onSubmit={e => e.preventDefault()}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                  <label className="input-label">First Name</label>
                  <input type="text" className="input-field" placeholder="John" />
                </div>
                <div>
                  <label className="input-label">Last Name</label>
                  <input type="text" className="input-field" placeholder="Doe" />
                </div>
              </div>
              <div className="mb-3">
                <label className="input-label">Business Email</label>
                <input type="email" className="input-field" placeholder="john@company.com" />
              </div>
              <div className="mb-4">
                <label className="input-label">Message Details</label>
                <textarea className="input-field" rows="5" placeholder="Specify your requirements..." style={{ resize: 'vertical' }}></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100" style={{ padding: '1rem' }}>
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
