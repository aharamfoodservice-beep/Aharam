import React, { useState } from 'react';
import { Send, User, Phone, Mail, MapPin, MessageSquare, CheckCircle } from 'lucide-react';

export default function Request() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    remarks: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[+]?[\d\s\-()]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Enter a valid phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Simulate submission
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      address: '',
      remarks: '',
    });
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="pt-section pb-section container animate-enter mt-4">
        <div className="request-success-wrapper">
          <div className="pro-card request-success-card">
            <div className="request-success-icon-ring">
              <CheckCircle size={48} strokeWidth={1.5} />
            </div>
            <h2 className="playfair" style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>
              Request Submitted
            </h2>
            <p className="text-secondary" style={{ fontSize: '1.1rem', maxWidth: '440px', margin: '0 auto 2.5rem' }}>
              Thank you, <strong>{formData.firstName}</strong>! Our team will review your request and get back to you within 24 hours.
            </p>
            <button className="btn btn-primary btn-lg" onClick={handleReset} id="submit-another-request">
              Submit Another Request
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-section pb-section container animate-enter mt-4">
      {/* Page Header */}
      <div className="text-center mb-5">
        <div className="request-badge">Request a Callback</div>
        <h1 className="playfair mb-2 page-title">Submit Your Request</h1>
        <p className="text-secondary" style={{ fontSize: '1.15rem', maxWidth: '560px', margin: '0 auto' }}>
          Fill in your details below and our culinary advisors will connect with you to craft a personalized meal plan.
        </p>
      </div>

      {/* Form Card */}
      <div className="request-form-wrapper">
        <div className="request-form-card">
          {/* Ambient glow accent */}
          <div className="request-form-glow request-form-glow--blue" />
          <div className="request-form-glow request-form-glow--pink" />

          <form onSubmit={handleSubmit} className="request-form" id="request-form" noValidate>
            {/* Name Row */}
            <div className="request-form-row">
              <div className="request-form-group">
                <label className="input-label" htmlFor="firstName">
                  <User size={14} style={{ marginRight: '6px', verticalAlign: '-2px' }} />
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className={`input-field ${errors.firstName ? 'input-field--error' : ''}`}
                  placeholder="e.g. Ravi"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <span className="request-field-error">{errors.firstName}</span>}
              </div>

              <div className="request-form-group">
                <label className="input-label" htmlFor="lastName">
                  <User size={14} style={{ marginRight: '6px', verticalAlign: '-2px' }} />
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className={`input-field ${errors.lastName ? 'input-field--error' : ''}`}
                  placeholder="e.g. Kumar"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <span className="request-field-error">{errors.lastName}</span>}
              </div>
            </div>

            {/* Phone & Email Row */}
            <div className="request-form-row">
              <div className="request-form-group">
                <label className="input-label" htmlFor="phone">
                  <Phone size={14} style={{ marginRight: '6px', verticalAlign: '-2px' }} />
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={`input-field ${errors.phone ? 'input-field--error' : ''}`}
                  placeholder="+91 96001 03363"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <span className="request-field-error">{errors.phone}</span>}
              </div>

              <div className="request-form-group">
                <label className="input-label" htmlFor="email">
                  <Mail size={14} style={{ marginRight: '6px', verticalAlign: '-2px' }} />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`input-field ${errors.email ? 'input-field--error' : ''}`}
                  placeholder="ravi@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="request-field-error">{errors.email}</span>}
              </div>
            </div>

            {/* Address */}
            <div className="request-form-group">
              <label className="input-label" htmlFor="address">
                <MapPin size={14} style={{ marginRight: '6px', verticalAlign: '-2px' }} />
                Delivery Address
              </label>
              <textarea
                id="address"
                name="address"
                className={`input-field ${errors.address ? 'input-field--error' : ''}`}
                rows="3"
                placeholder="Enter your full delivery address including area, city, and pin code"
                value={formData.address}
                onChange={handleChange}
                style={{ resize: 'vertical' }}
              />
              {errors.address && <span className="request-field-error">{errors.address}</span>}
            </div>

            {/* Remarks */}
            <div className="request-form-group">
              <label className="input-label" htmlFor="remarks">
                <MessageSquare size={14} style={{ marginRight: '6px', verticalAlign: '-2px' }} />
                Remarks <span className="text-secondary" style={{ fontWeight: 400 }}>(Optional)</span>
              </label>
              <textarea
                id="remarks"
                name="remarks"
                className="input-field"
                rows="4"
                placeholder="Any dietary preferences, allergies, preferred meal timings, or special instructions..."
                value={formData.remarks}
                onChange={handleChange}
                style={{ resize: 'vertical' }}
              />
            </div>

            {/* Submit */}
            <button type="submit" className="btn btn-primary btn-lg request-submit-btn" id="submit-request">
              <Send size={18} style={{ marginRight: '10px' }} />
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
