import React from 'react';

export const HeaderAd = () => {
  return (
    <div className="header-ad-container" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '12px 0',
      backgroundColor: 'var(--nextra-bg)',
      border: '2px dashed #e5e7eb',
      borderRadius: '8px',
      marginBottom: '12px'
    }}>
      <a 
        href="https://votre-partenaire.com" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: 'block',
          maxWidth: '728px',
          width: '100%'
        }}
      >
        <img 
          src="/ads/partner-banner.gif" 
          alt="Partner Advertisement"
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '90px',
            objectFit: 'contain'
          }}
        />
      </a>
    </div>
  );
};