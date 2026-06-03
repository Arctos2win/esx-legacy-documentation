import React, { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/router';

// Declare global window properties for tracking
declare global {
  interface Window {
    trackAdImpression?: (placement: string, adType: string) => void;
    trackAdClick?: (placement: string, adType: string) => void;
  }
}

export function AdBanner() {
  const router = useRouter();
  
  // Check if we should show ads on current page
  const shouldShowAd = useMemo(() => {
    const path = router.asPath;
    // Show on home pages, esx_core pages, and esx_addons pages
    return path === '/' || 
           path === '/en' || 
           path.startsWith('/esx_core') || 
           path.startsWith('/en/esx_core') ||
           path.startsWith('/esx_addons') || 
           path.startsWith('/en/esx_addons');
  }, [router.asPath]);

  useEffect(() => {
    // Inject ads after page loads
    const injectAds = () => {
      const existingAd = document.getElementById('top-ad-banner');
      
      // If we shouldn't show ads, remove existing ad with animation
      if (!shouldShowAd) {
        if (existingAd) {
          existingAd.classList.add('fade-out');
          setTimeout(() => {
            existingAd.remove();
          }, 300); // Match CSS animation duration
        }
        return;
      }

      // If ad already exists and we should show it, don't recreate
      if (existingAd) {
        return;
      }

      // Top ad banner
      if (!document.getElementById('top-ad-banner')) {
        const topAdDiv = document.createElement('div');
        topAdDiv.id = 'top-ad-banner';
        
        // Check if the image exists first
        const img = new Image();
        img.onload = function() {
          // Image exists, show without border
            topAdDiv.innerHTML = `
            <div style="
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-items: flex-start;
              padding: 12px 0;
              margin-bottom: 16px;
            ">
              <a href="${process.env.NEXT_PUBLIC_PARTNER_URL || 'https://example-partner.com'}" target="_blank" rel="noopener" 
               onclick="if(window.trackAdClick) window.trackAdClick('header', 'partner_banner');" 
               style="
              display: block;
              max-width: 728px;
              width: 100%;
              ">
              <img src="/ads/partner-banner.gif" alt="Partner Advertisement" style="
                width: 100%;
                height: auto;
                max-height: 90px;
                object-fit: contain;
              "/>
              </a>
              <div style="margin-top: 10px; font-size: 15px; color: var(--nextra-text);">
                <p>
                  <strong style="color: #f59e0b; font-weight: 600;">Sponsored by:</strong>
                </p>
                <p>
                  AD DESCRIPTION GOES HERE
                </p>
              </div>
            </div>
            `;
          
          // Track impression
          setTimeout(() => {
            if (window.trackAdImpression) {
              window.trackAdImpression('header', 'partner_banner');
            }
          }, 1000);
        };
        
        img.onerror = function() {
          // Image doesn't exist, show placeholder with border
          topAdDiv.innerHTML = `
            <div style="
              display: flex;
              justify-content: flex-start;
              align-items: center;
              padding: 40px 20px;
              background-color: var(--nextra-bg-2);
              border: 3px dashed #e5e7eb;
              border-radius: 8px;
              margin-bottom: 16px;
              text-align: left;
            ">
              <div>
                <p style="
                  font-size: 18px;
                  font-weight: 600;
                  margin-bottom: 10px;
                  color: var(--nextra-text);
                ">
                  Premium Advertising Space Available
                </p>
                <p style="
                  font-size: 14px;
                  color: var(--nextra-text-2);
                  margin-bottom: 15px;
                ">
                  Contact the team to purchase this prime location
                </p>
                <a href="mailto:esxframework@gmail.com?subject=Purchase%20header%20advertising%20space" 
                   onclick="if(window.trackAdClick) window.trackAdClick('header', 'placeholder_contact');"
                   style="
                  display: inline-block;
                  padding: 8px 20px;
                  background-color: #f59e0b;
                  color: white;
                  border-radius: 6px;
                  text-decoration: none;
                  font-size: 14px;
                  font-weight: 500;
                ">
                  Get this space
                </a>
              </div>
            </div>
          `;
          
          // Track impression for placeholder
          setTimeout(() => {
            if (window.trackAdImpression) {
              window.trackAdImpression('header', 'placeholder');
            }
          }, 1000);
        };
        
        img.src = '/ads/partner-banner.gif';

        const mainContent = document.querySelector('main');
        if (mainContent && mainContent.firstChild) {
          // Utilise une classe pour une insertion plus propre
          topAdDiv.className = 'header-ad-injected';
          topAdDiv.style.cssText = `
            position: relative;
            width: 100%;
            margin: 0 0 16px 0;
            z-index: 1;
            clear: both;
            display: block;
            float: none;
          `;
          
          mainContent.insertBefore(topAdDiv, mainContent.firstChild);
          
          // Trigger animation with more defensive approach
          requestAnimationFrame(() => {
            topAdDiv.style.opacity = '1';
            topAdDiv.style.transform = 'translateY(0)';
          });
        }
      }

      // Bottom ad - COMMENTED OUT FOR NOW
      /*
      if (!document.getElementById('bottom-ad-banner')) {
        setTimeout(() => {
          const bottomAdDiv = document.createElement('div');
          bottomAdDiv.id = 'bottom-ad-banner';
          bottomAdDiv.style.cssText = `
            position: relative;
            width: 100%;
            max-width: 100%;
            text-align: center;
            padding: 20px 0;
            margin: 60px 0 20px 0;
            clear: both;
            z-index: 1;
          `;
          
          bottomAdDiv.innerHTML = `
            <div style="
              background-color: var(--nextra-bg-2);
              border: 3px dashed #e5e7eb;
              padding: 40px 20px;
              border-radius: 8px;
              max-width: 728px;
              margin: 0 auto;
            ">
              <p style="
                font-size: 18px;
                font-weight: 600;
                margin-bottom: 10px;
                color: var(--nextra-text);
              ">
                Advertising Space Available
              </p>
              <p style="
                font-size: 14px;
                color: var(--nextra-text-2);
              ">
                Contact the team to purchase this space
              </p>
              <a href="mailto:esxframework@gmail.com?subject=Purchase%20advertising%20space" style="
                display: inline-block;
                margin-top: 15px;
                padding: 8px 20px;
                background-color: #f59e0b;
                color: white;
                border-radius: 6px;
                text-decoration: none;
                font-size: 14px;
                font-weight: 500;
              ">
                Contact Us
              </a>
            </div>
          `;

          // Find the main container and append at the end
          const body = document.body;
          const footer = document.querySelector('footer');
          
          if (footer) {
            // Insert before footer
            footer.parentNode.insertBefore(bottomAdDiv, footer);
          } else {
            // Append to body if no footer found
            body.appendChild(bottomAdDiv);
          }
        }, 500);
      }
      */
    };

    // Run on mount and on route changes
    injectAds();
    
    // Listen for route changes with debouncing
    let timeout;
    const observer = new MutationObserver(() => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        injectAds();
      }, 100);
    });

    const targetNode = document.querySelector('main');
    if (targetNode) {
      observer.observe(targetNode, { childList: true, subtree: true });
    }

    return () => {
      observer.disconnect();
    };
  }, [shouldShowAd]); // Re-run when shouldShowAd changes

  return null;
}