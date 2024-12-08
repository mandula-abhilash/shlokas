import ReactGA from "react-ga4";

// Initialize GA4 with your measurement ID
export const initGA = () => {
  if (
    typeof window !== "undefined" &&
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  ) {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);
  }
};

// Track pageviews
export const logPageView = () => {
  if (typeof window !== "undefined") {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
  }
};

// Track search events
export const logSearch = (searchTerm) => {
  ReactGA.event({
    category: "Search",
    action: "Perform Search",
    label: searchTerm,
  });
};

// Track language changes
export const logLanguageChange = (language) => {
  ReactGA.event({
    category: "Language",
    action: "Change Language",
    label: language,
  });
};

// Track shloka views
export const logShlokaView = (shlokaId, shlokaTitle) => {
  ReactGA.event({
    category: "Shloka",
    action: "View Shloka",
    label: `${shlokaId} - ${shlokaTitle}`,
  });
};

// Track theme changes
export const logThemeChange = (theme) => {
  ReactGA.event({
    category: "Theme",
    action: "Change Theme",
    label: theme,
  });
};

// Track errors
export const logError = (error, componentName) => {
  ReactGA.event({
    category: "Error",
    action: "Application Error",
    label: `${componentName}: ${error.message}`,
  });
};

// Track performance metrics
export const logPerformance = (metric) => {
  ReactGA.event({
    category: "Performance",
    action: metric.name,
    value: Math.round(metric.value),
    label: metric.id,
  });
};
