"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
// ------------------------------
// Types
// ------------------------------
export type ConsentCategories = {
  necessary: boolean; // always true / locked
  analytics: boolean;
  marketing: boolean;
};

export type ConsentState = {
  version: string; // bump when categories change
  consentedAt: string; // ISO date
  categories: ConsentCategories;
};

// ------------------------------
// Constants
// ------------------------------
const CONSENT_KEY = "gleen-consent-v1"; // localStorage key
const CONSENT_COOKIE = "gleen_consent"; // cookie name for server access if needed
const CONSENT_VERSION = "1.0.0"; // bump when you add/remove categories
const COOKIE_MAX_AGE_DAYS = 180; // 6 months

// Respect Do Not Track by defaulting to opt-out for non-essential
const DNT = typeof navigator !== "undefined" && (navigator as any).doNotTrack === "1";

// ------------------------------
// Helpers
// ------------------------------
function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; Expires=${expires}; Path=/; SameSite=Lax`;
}

function getStoredConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (!parsed?.version || parsed.version !== CONSENT_VERSION) return null; // invalidate old versions
    return parsed;
  } catch {
    return null;
  }
}

	
function saveConsent(categories: ConsentCategories) {
  const state: ConsentState = {
    version: CONSENT_VERSION,
    consentedAt: new Date().toISOString(),
    categories: { ...categories, necessary: true },
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(state));
  setCookie(CONSENT_COOKIE, JSON.stringify(state), COOKIE_MAX_AGE_DAYS);
}

// ------------------------------
// UI Components
// ------------------------------
function Toggle({
  checked,
  onChange,
  disabled,
  label,
  description,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  disabled?: boolean;
  label: string;
  description?: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4 py-3">
      <div className="flex-1">
        <p className="text-sm font-semibold text-gray-900">{label}</p>
        {description && <p className="text-sm text-gray-600">{description}</p>}
      </div>
      <button
        type="button"
        onClick={() => !disabled && onChange(!checked)}
        className={
          "relative inline-flex h-7 w-12 items-center rounded-full transition shadow-sm " +
          (checked ? "bg-indigo-600" : "bg-gray-300") +
          (disabled ? " opacity-50 cursor-not-allowed" : " hover:opacity-95")
        }
        aria-pressed={checked}
        aria-disabled={disabled}
      >
        <span
          className={
            "inline-block h-5 w-5 transform rounded-full bg-white transition " +
            (checked ? "translate-x-6" : "translate-x-1")
          }
        />
      </button>
    </div>
  );
}

function PreferencesModal({
  open,
  setOpen,
  value,
  onSave,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
  value: ConsentCategories;
  onSave: (v: ConsentCategories) => void;
}) {
  const [draft, setDraft] = useState(value);
  useEffect(() => setDraft(value), [value, open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-preferences-title"
      className="fixed inset-0 z-[60] flex items-end md:items-center md:justify-center"
    >
      <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
      <div className="relative z-[61] w-full md:max-w-xl rounded-2xl bg-white p-6 shadow-2xl mx-auto">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 id="cookie-preferences-title" className="text-lg font-bold text-gray-900">
              Cookie Preferences
            </h3>
            <p className="text-sm text-gray-600">Choose which categories to allow. Necessary cookies are always on.</p>
          </div>
          <button onClick={() => setOpen(false)} className="p-2 rounded-full hover:bg-gray-100" aria-label="Close">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>

        <div className="mt-4 divide-y divide-gray-100">
          <Toggle
            checked={true}
            onChange={() => {}}
            disabled
            label="Strictly necessary"
            description="Required for security, login, and load balancing."
          />
          <Toggle
            checked={draft.analytics}
            onChange={(v) => setDraft((d) => ({ ...d, analytics: v }))}
            label="Analytics"
            description="Helps us understand usage to improve features."
          />
          <Toggle
            checked={draft.marketing}
            onChange={(v) => setDraft((d) => ({ ...d, marketing: v }))}
            label="Marketing & attribution"
            description="Measures campaigns and installs."
          />
        </div>

        <div className="mt-6 flex flex-col-reverse md:flex-row gap-3 md:gap-4 md:justify-end">
          <button
            onClick={() => setOpen(false)}
            className="px-4 py-2 pointer rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onSave(draft);
              setOpen(false);
            }}
            className="px-4 pointer py-2 rounded-xl bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700"
          >
            Save preferences
          </button>
        </div>
      </div>
    </div>
  );
}

// ------------------------------
// Main Banner Component
// ------------------------------
export default function CookieConsentBanner() {
  const stored = useMemo(() => getStoredConsent(), []);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(!stored);
  const [prefOpen, setPrefOpen] = useState(false);
  const [categories, setCategories] = useState<ConsentCategories>({
    necessary: true,
    analytics: !DNT, // default opt-in unless DNT is on
    marketing: false,
  });

useEffect(() => {
// remove localStorage entry
//localStorage.removeItem("gleen-consent-v1");

// remove cookie
//document.cookie = "gleen_consent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}, []);


useEffect(() => {
// Only run after client hydration
const stored = getStoredConsent();
if (!stored) {
setVisible(true); // show only if not consented
} else {
setCategories(stored.categories);
}
setReady(true);
}, []);

useEffect(() => { if (stored) setCategories(stored.categories); }, [stored]);

 // Don’t render anything until client check is done
if (!ready || !visible) return null;
if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-4 z-[50] px-4 md:px-6"  style={{ fontFamily: 'poppins, sans-serif', }}>
      <div className="mx-auto max-w-5xl rounded-2xl bg-white/95 backdrop-blur shadow-2xl ring-1 ring-gray-200">
        <div className="p-4 md:p-5">
          <div className="flex items-start gap-4">
            <div className="hidden md:block">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-600/10 text-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3c-1.657 0-3 1.343-3 3 0 .342.057.67.162.976A4.002 4.002 0 008 14h8a4 4 0 00-1.162-7.024A2.997 2.997 0 0012 3z"/></svg>
              </span>
            </div>
            <div className="flex-1">
              <h2 className="text-base md:text-lg font-semibold text-gray-900">We use cookies</h2>
              <p className="mt-1 text-sm text-gray-700">
                We use necessary cookies to make our site work. We'd also like to use analytics and marketing cookies to improve your experience. You can
                accept all, reject non-essential, or manage your preferences.
              </p><br />

<Link
  href="/cookie-policy"
  className="mt-1 inline-flex gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700"
>
  Read our cookie policy
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className="h-4 w-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 5l7 7-7 7"
    />
  </svg>
</Link><br />

              <button
                onClick={() => setPrefOpen(true)}
                className="mt-1 pointer inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700"
              >
                Manage preferences
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <div className="mt-2 flex flex-col-reverse gap-3 md:flex-row md:items-center md:justify-end">
            <button
              className="px-4 py-2 pointer rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50"
              onClick={() => {
                const next = { necessary: true, analytics: false, marketing: false } as ConsentCategories;
                saveConsent(next);
                setCategories(next);
                setVisible(false);
              }}
            >
              Reject non-essential
            </button>
            <button
              className="px-4 pointer py-2 rounded-xl bg-gray-900 text-white font-medium shadow hover:bg-black"
              onClick={() => setPrefOpen(true)}
            >
              Customize
            </button>
            <button
              className="px-4 py-2 pointer rounded-xl bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700"
              onClick={() => {
                const next = { necessary: true, analytics: true, marketing: true } as ConsentCategories;
                saveConsent(next);
                setCategories(next);
                setVisible(false);
              }}
            >
              Accept all
            </button>
          </div>
        </div>
      </div>

      <PreferencesModal
        open={prefOpen}
        setOpen={setPrefOpen}
        value={categories}
        onSave={(v) => {
          saveConsent(v);
          setCategories(v);
          setVisible(false);
        }}
      />
    </div>
  );
}

