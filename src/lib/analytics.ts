type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

const ADS_CONVERSION_SEND_TO = "AW-17836566328/8pSKCJO5q9obELjOkblC";

function getGtag() {
  if (typeof window === "undefined") return undefined;
  return window.gtag;
}

/**
 * Fires a custom event to dataLayer (GTM) and gtag (Google tag destinations).
 * Do not include PII (name, email, phone) in params.
 */
export function trackEvent(eventName: string, params?: AnalyticsParams) {
  if (typeof window === "undefined") return;

  const payload = {
    event: eventName,
    ...params,
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  const gtag = getGtag();
  if (gtag) {
    gtag("event", eventName, params ?? {});
  }
}

export function reportAdsConversion(url?: string) {
  const gtag = getGtag();
  if (!gtag) return false;

  const callback = () => {
    if (url) {
      window.location.href = url;
    }
  };

  gtag("event", "conversion", {
    send_to: ADS_CONVERSION_SEND_TO,
    event_callback: callback,
  });

  return false;
}
