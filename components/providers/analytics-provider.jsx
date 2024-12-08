"use client";

import { useEffect } from "react";
import { initGA, logPageView } from "@/lib/analytics";

export function AnalyticsProvider({ children }) {
  useEffect(() => {
    // Initialize GA4
    initGA();
    // Log initial pageview
    logPageView();
    // Log subsequent pageviews
    const handleRouteChange = () => logPageView();
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  return (
    <>
      {/* Google Analytics Script */}
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  cookie_domain: '${process.env.NEXT_PUBLIC_COOKIE_DOMAIN}',
                  cookie_flags: 'SameSite=None;Secure'
                });
              `,
            }}
          />
        </>
      )}
      {children}
    </>
  );
}
