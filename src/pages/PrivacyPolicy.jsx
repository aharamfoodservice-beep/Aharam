import React, { useState } from 'react';
import { ChevronDown, Shield, Lock, Eye, Users, Cookie, Server, FileText, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const PolicySection = ({ icon: Icon, title, children, isOpen, onToggle }) => (
  <div className="pro-card" style={{ padding: 0, overflow: 'hidden', marginBottom: '1rem' }}>
    <div
      className="d-flex align-center justify-between"
      style={{
        padding: '1.5rem 2rem',
        cursor: 'pointer',
        background: isOpen ? 'rgba(15, 157, 219, 0.03)' : 'transparent',
        transition: 'background 0.3s ease',
      }}
      onClick={onToggle}
    >
      <div className="d-flex align-center gap-2">
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: isOpen
              ? 'linear-gradient(135deg, var(--color-brand-pink), var(--color-brand-blue))'
              : 'rgba(15, 23, 42, 0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            flexShrink: 0,
          }}
        >
          <Icon size={20} style={{ color: isOpen ? '#fff' : 'var(--color-text-light)' }} />
        </div>
        <h3
          className="playfair"
          style={{
            fontSize: '1.25rem',
            color: isOpen ? 'var(--color-text)' : 'var(--color-text)',
            transition: 'color 0.3s',
            margin: 0,
          }}
        >
          {title}
        </h3>
      </div>
      <ChevronDown
        size={22}
        style={{
          color: 'var(--color-text-light)',
          transform: isOpen ? 'rotate(180deg)' : 'none',
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          flexShrink: 0,
        }}
      />
    </div>

    <div
      style={{
        maxHeight: isOpen ? '1000px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease',
        opacity: isOpen ? 1 : 0,
      }}
    >
      <div
        style={{
          padding: '0 2rem 2rem',
          borderTop: '1px solid var(--color-border)',
        }}
      >
        <div
          style={{
            paddingTop: '1.5rem',
            fontSize: '1rem',
            lineHeight: '1.8',
            color: 'var(--color-text-light)',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default function PrivacyPolicy() {
  const [openSections, setOpenSections] = useState([0]);

  const toggleSection = (idx) => {
    setOpenSections((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const sections = [
    {
      icon: Eye,
      title: 'Information We Collect',
      content: (
        <>
          <p style={{ marginBottom: '1rem' }}>
            We collect information that you voluntarily provide when subscribing to our meal plans, creating an account, or contacting us. This includes:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: 'var(--color-text)' }}>Personal Details:</strong> Full name, email address, phone number, and delivery address.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: 'var(--color-text)' }}>Payment Information:</strong> Payment method details processed securely through our third-party payment gateway. We do not store your credit/debit card numbers on our servers.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: 'var(--color-text)' }}>Dietary Preferences:</strong> Meal preferences, allergies, and special dietary requirements you share with us.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: 'var(--color-text)' }}>Usage Data:</strong> Browser type, device information, IP address, pages visited, and interaction patterns on our website.
            </li>
          </ul>
        </>
      ),
    },
    {
      icon: FileText,
      title: 'How We Use Your Information',
      content: (
        <>
          <p style={{ marginBottom: '1rem' }}>We use the collected information for the following purposes:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: 'var(--color-text)' }}>Order Fulfillment:</strong> To process, prepare, and deliver your meal subscriptions accurately and on time.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: 'var(--color-text)' }}>Account Management:</strong> To manage your subscription, wallet credits, and account preferences.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: 'var(--color-text)' }}>Communication:</strong> To send order confirmations, delivery updates, and respond to your inquiries via email, SMS, or WhatsApp.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: 'var(--color-text)' }}>Service Improvement:</strong> To analyze usage patterns and improve our menu offerings, website experience, and delivery operations.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: 'var(--color-text)' }}>Marketing:</strong> To send promotional offers and updates about new plans (only with your consent; you may opt out at any time).
            </li>
          </ul>
        </>
      ),
    },
    {
      icon: Cookie,
      title: 'Cookies & Tracking',
      content: (
        <>
          <p style={{ marginBottom: '1rem' }}>
            Our website uses cookies and similar tracking technologies to enhance your browsing experience. These include:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: 'var(--color-text)' }}>Essential Cookies:</strong> Required for basic website functionality such as navigation, login sessions, and cart management.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: 'var(--color-text)' }}>Analytics Cookies:</strong> Help us understand how visitors interact with our website, enabling us to improve user experience.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: 'var(--color-text)' }}>Preference Cookies:</strong> Remember your settings and preferences for future visits.
            </li>
          </ul>
          <p>
            You can manage cookie preferences through your browser settings. Disabling certain cookies may affect website functionality.
          </p>
        </>
      ),
    },
    {
      icon: Users,
      title: 'Third-Party Sharing',
      content: (
        <>
          <p style={{ marginBottom: '1rem' }}>
            We value your trust and do not sell your personal information. We may share your data only in the following circumstances:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: 'var(--color-text)' }}>Delivery Partners:</strong> Your name, phone number, and delivery address are shared with our delivery personnel to ensure timely delivery of your meals.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: 'var(--color-text)' }}>Payment Processors:</strong> Secure payment gateways process your transactions in compliance with PCI-DSS standards.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: 'var(--color-text)' }}>Legal Requirements:</strong> We may disclose information if required by law, regulation, or court order.
            </li>
          </ul>
        </>
      ),
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: (
        <>
          <p style={{ marginBottom: '1rem' }}>
            We implement industry-standard security measures to protect your personal information:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>SSL/TLS encryption for all data transmitted between your browser and our servers.</li>
            <li style={{ marginBottom: '0.5rem' }}>Secure, access-controlled storage of personal data with regular security audits.</li>
            <li style={{ marginBottom: '0.5rem' }}>Restricted access — only authorized personnel can access customer information, strictly on a need-to-know basis.</li>
            <li style={{ marginBottom: '0.5rem' }}>Regular monitoring for vulnerabilities and unauthorized access attempts.</li>
          </ul>
          <p>
            While we strive to protect your data, no method of transmission over the internet is 100% secure. We encourage you to use strong passwords and keep your account credentials confidential.
          </p>
        </>
      ),
    },
    {
      icon: Server,
      title: 'Data Retention',
      content: (
        <>
          <p style={{ marginBottom: '1rem' }}>
            We retain your personal information only for as long as necessary to fulfil the purposes outlined in this policy:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: 'var(--color-text)' }}>Active Accounts:</strong> Data is retained for the duration of your subscription and account activity.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: 'var(--color-text)' }}>Inactive Accounts:</strong> Account data is retained for up to 12 months after the last activity, after which it is securely deleted.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: 'var(--color-text)' }}>Transaction Records:</strong> Financial records are retained as required by applicable tax and accounting laws.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: 'var(--color-text)' }}>Wallet Credits:</strong> Wallet balance information is retained until expiry (90 days from the date of credit) or usage, whichever is earlier.
            </li>
          </ul>
        </>
      ),
    },
    {
      icon: Shield,
      title: 'Your Rights',
      content: (
        <>
          <p style={{ marginBottom: '1rem' }}>As a valued customer, you have the following rights regarding your personal data:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: 'var(--color-text)' }}>Access:</strong> Request a copy of the personal data we hold about you.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: 'var(--color-text)' }}>Correction:</strong> Request correction of any inaccurate or incomplete information.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: 'var(--color-text)' }}>Deletion:</strong> Request deletion of your account and associated data (subject to legal retention requirements).
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: 'var(--color-text)' }}>Opt-Out:</strong> Unsubscribe from marketing communications at any time via the link in our emails or by contacting us directly.
            </li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{' '}
            <a href="mailto:aharamfood.service@gmail.com" style={{ color: 'var(--color-brand-blue)', textDecoration: 'none', fontWeight: 600 }}>
              aharamfood.service@gmail.com
            </a>.
          </p>
        </>
      ),
    },
    {
      icon: Mail,
      title: 'Contact Us',
      content: (
        <>
          <p style={{ marginBottom: '1rem' }}>
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please reach out to us:
          </p>
          <div
            style={{
              background: 'var(--color-bg)',
              borderRadius: 'var(--radius-md)',
              padding: '1.5rem',
              marginTop: '0.5rem',
            }}
          >
            <p style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: 'var(--color-text)' }}>Aharam Food Service</strong>
            </p>
            <p style={{ marginBottom: '0.5rem' }}>
              📧 Email:{' '}
              <a href="mailto:aharamfood.service@gmail.com" style={{ color: 'var(--color-brand-blue)', textDecoration: 'none' }}>
                aharamfood.service@gmail.com
              </a>
            </p>
            <p style={{ marginBottom: '0.5rem' }}>
              📞 Phone:{' '}
              <a href="tel:+919600103363" style={{ color: 'var(--color-brand-blue)', textDecoration: 'none' }}>
                +91-96001-03363
              </a>
            </p>
            <p>
              💬 WhatsApp:{' '}
              <a
                href="https://wa.me/919600103363"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--color-brand-blue)', textDecoration: 'none' }}
              >
                Chat with us
              </a>
            </p>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="pt-section pb-section container animate-enter d-flex flex-column align-center">
      {/* Header */}
      <div className="text-center mb-5">
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '72px',
            height: '72px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, var(--color-brand-pink), var(--color-brand-blue))',
            marginBottom: '1.5rem',
          }}
        >
          <Shield size={36} style={{ color: '#fff' }} />
        </div>
        <h1 className="playfair mb-2 page-title">Privacy Policy</h1>
        <p className="text-secondary mx-auto" style={{ fontSize: '1.15rem', maxWidth: '600px', lineHeight: '1.7' }}>
          Your trust is paramount. This policy explains how Aharam collects, uses, and safeguards your personal information.
        </p>
        <div
          style={{
            display: 'inline-block',
            marginTop: '1rem',
            padding: '0.5rem 1.25rem',
            background: 'rgba(15, 157, 219, 0.08)',
            borderRadius: '100px',
            fontSize: '0.85rem',
            fontWeight: 600,
            color: 'var(--color-brand-blue)',
            letterSpacing: '0.02em',
          }}
        >
          Last Updated: June 2026
        </div>
      </div>

      {/* Policy Sections */}
      <div style={{ maxWidth: '800px', width: '100%', margin: '0 auto' }}>
        {sections.map((section, idx) => (
          <PolicySection
            key={idx}
            icon={section.icon}
            title={section.title}
            isOpen={openSections.includes(idx)}
            onToggle={() => toggleSection(idx)}
          >
            {section.content}
          </PolicySection>
        ))}

        {/* Bottom CTA Card */}
        <div
          className="pro-card mt-5 d-flex align-center gap-4 text-center flex-column"
          style={{ padding: '3rem', marginBottom: '8rem' }}
        >
          <Lock size={48} style={{ color: 'var(--color-brand-pink)' }} />
          <div>
            <h3 className="playfair mb-2" style={{ fontSize: '2rem' }}>
              Your privacy matters to us
            </h3>
            <p className="text-secondary mb-3">
              We are committed to protecting your data. For any concerns, our team is here to help.
            </p>
            <div className="d-flex gap-2 justify-center" style={{ flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">
                Contact Support
              </Link>
              <Link to="/faq" className="btn btn-secondary">
                View FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
