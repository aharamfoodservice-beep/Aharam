import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="pt-section pb-section container animate-enter d-flex flex-column align-center text-center" style={{ minHeight: '60vh', justifyContent: 'center' }}>
      <div className="not-found-code">404</div>
      <h1 className="playfair mb-2" style={{ fontSize: '2.5rem' }}>Page Not Found</h1>
      <p className="text-secondary mb-4" style={{ maxWidth: '400px', fontSize: '1.1rem' }}>
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <div className="d-flex gap-2 justify-center">
        <Link to="/" className="btn btn-primary d-flex align-center gap-1">
          <Home size={18} /> Go Home
        </Link>
        <Link to="/plans" className="btn btn-secondary d-flex align-center gap-1">
          <ArrowLeft size={18} /> View Plans
        </Link>
      </div>
    </div>
  );
}
