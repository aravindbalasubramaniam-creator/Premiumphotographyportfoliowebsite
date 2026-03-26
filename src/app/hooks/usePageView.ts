import { useEffect } from 'react';
import { useLocation } from 'react-router';

/**
 * Hook for tracking page views with analytics
 * Replace with your analytics provider (Google Analytics, Plausible, etc.)
 */
export function usePageView() {
  const location = useLocation();

  useEffect(() => {
    // Example: Google Analytics 4
    // if (typeof window.gtag !== 'undefined') {
    //   window.gtag('event', 'page_view', {
    //     page_path: location.pathname + location.search,
    //   });
    // }

    // Example: Plausible Analytics
    // if (typeof window.plausible !== 'undefined') {
    //   window.plausible('pageview');
    // }

    // For now, just log to console
    console.log('Page view:', location.pathname + location.search);
  }, [location]);
}
