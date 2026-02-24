// Google Analytics 4 utility functions

// Track page views
export const trackPageView = (pagePath, pageTitle) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-NEM7WR1KEQ', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
};

// Track custom events
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Track button clicks
export const trackButtonClick = (buttonName, buttonLocation) => {
  trackEvent('button_click', {
    button_name: buttonName,
    button_location: buttonLocation,
  });
};

// Track downloads
export const trackDownload = (fileName) => {
  trackEvent('file_download', {
    file_name: fileName,
    file_type: fileName.split('.').pop(),
  });
};

// Track external link clicks
export const trackExternalLink = (url, linkText) => {
  trackEvent('external_link_click', {
    link_url: url,
    link_text: linkText,
  });
};

// Track form submissions
export const trackFormSubmit = (formName, success = true) => {
  trackEvent('form_submission', {
    form_name: formName,
    success: success,
  });
};

// Track certificate views
export const trackCertificateView = (certificateTitle, issuer) => {
  trackEvent('certificate_view', {
    certificate_title: certificateTitle,
    certificate_issuer: issuer,
  });
};

// Track social media clicks
export const trackSocialClick = (platform) => {
  trackEvent('social_media_click', {
    platform: platform,
  });
};

// Track section visibility (scroll tracking)
export const trackSectionView = (sectionName) => {
  trackEvent('section_view', {
    section_name: sectionName,
  });
};

// Track theme toggle
export const trackThemeChange = (theme) => {
  trackEvent('theme_change', {
    theme: theme,
  });
};

// Track time on page (call this on page unload)
export const trackTimeOnPage = (duration) => {
  trackEvent('page_engagement', {
    engagement_time_msec: duration,
  });
};
