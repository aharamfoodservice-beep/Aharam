import React from 'react';

const Logo = ({ scale = 1 }) => {
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', position: 'relative', userSelect: 'none', transform: `scale(${scale})`, transformOrigin: 'left center' }}>
      
      {/* Subtle Background Watermark */}
      <span style={{ 
        position: 'absolute', 
        top: '-15%', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        fontSize: '4.5rem', 
        fontFamily: "'Playfair Display', serif", 
        color: 'rgba(0,0,0,0.03)', 
        zIndex: 0 
      }}>A</span>

      {/* Main Logo Text with Leaves */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'flex-start' }}>
        <h1 style={{ 
          fontSize: '3.2rem', 
          fontFamily: "'Playfair Display', serif", 
          margin: 0, 
          letterSpacing: '1px',
          background: 'linear-gradient(90deg, #ff4068 0%, #b258c4 40%, #1da1f2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Aharam
        </h1>
        
        {/* Simple Leaf SVG Decorations matching the image */}
        <div style={{ marginLeft: '-8px', marginTop: '10px', display: 'flex' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ transform: 'rotate(-15deg)', marginRight: '-8px', zIndex: 2 }}>
            <path d="M12 2C12 2 4 6 4 14C4 18 8 22 12 22C16 22 20 18 20 14C20 6 12 2 12 2Z" fill="#ff4068"/>
          </svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ transform: 'rotate(60deg) scale(0.8)', zIndex: 1 }}>
            <path d="M12 2C12 2 4 6 4 14C4 18 8 22 12 22C16 22 20 18 20 14C20 6 12 2 12 2Z" fill="#8c7aeb"/>
          </svg>
        </div>
      </div>

      {/* Decorative Line and Butterfly */}
      <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: '4px', gap: '8px' }}>
        <div style={{ height: '2px', flex: 1, background: 'linear-gradient(90deg, transparent, #ff4068)', borderRadius: '2px' }}></div>
        <svg width="20" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M12 12C6 4 2 8 8 16C9 18 11.5 20 12 22C12.5 20 15 18 16 16C22 8 18 4 12 12Z" fill="url(#paint0_linear)"/>
          <defs>
            <linearGradient id="paint0_linear" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ff4068" />
              <stop offset="1" stopColor="#1da1f2" />
            </linearGradient>
          </defs>
        </svg>
        <div style={{ height: '2px', flex: 1, background: 'linear-gradient(270deg, transparent, #1da1f2)', borderRadius: '2px' }}></div>
      </div>

      {/* Tagline */}
      <div style={{ 
        marginTop: '6px', 
        fontSize: '0.85rem', 
        fontWeight: '600', 
        color: '#495b6c', 
        letterSpacing: '0.5px' 
      }}>
        Effortless meals, at your door
      </div>
    </div>
  );
};

export default Logo;
