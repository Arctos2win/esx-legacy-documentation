import React from 'react';

export const SidebarAd = () => {
  return (
    <div className="sidebar-ad-container" style={{
      marginTop: '24px',
      padding: '16px',
      backgroundColor: 'var(--nextra-bg-2)',
      border: '2px dashed #e5e7eb',
      borderRadius: '8px'
    }}>
      <div style={{
        textAlign: 'center'
      }}>
        <p style={{
          fontSize: '12px',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          marginBottom: '12px',
          color: 'var(--nextra-text-2)'
        }}>
          Advertisement
        </p>
        <div style={{
          backgroundColor: 'var(--nextra-bg)',
          border: '3px dashed #9ca3af',
          padding: '30px 10px',
          borderRadius: '6px',
          minHeight: '250px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <p style={{
            fontSize: '14px',
            fontWeight: '500',
            marginBottom: '8px',
            color: 'var(--nextra-text)'
          }}>
            Your Ad Here
          </p>
          <p style={{
            fontSize: '12px',
            color: 'var(--nextra-text-2)',
            marginBottom: '12px'
          }}>
            Contact the team to purchase this space
          </p>
          <a 
            href="mailto:esxframework@gmail.com?subject=Purchase%20sidebar%20advertising%20space"
            style={{
              fontSize: '12px',
              color: 'var(--nextra-primary-hue)',
              textDecoration: 'underline'
            }}
          >
            Get this space
          </a>
        </div>
      </div>
    </div>
  );
};