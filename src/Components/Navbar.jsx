import React from "react";

/** Tailwind + React (JS) navbar matching your screenshot */
export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top info bar */}
      <div className="bg-[#1f1f1f] text-white w-full">
        <div className=" px-4 sm:px-6 lg:px-8 w-full">
          <div className="h-10 flex items-center justify-end text-sm w-full">
            <a href="tel:+124545678" className="inline-flex items-center gap-2 hover:opacity-90">
              <PhoneIcon className="h-4 w-4" />
              <span>(1) 245 - 45678</span>
            </a>
            <a href="mailto:help.info@gmail.com" className="inline-flex items-center gap-2 hover:opacity-90">
              <MailIcon className="h-4 w-4" />
              <span>help.info@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="w-full bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="h-20 grid grid-cols-3 items-center">
            {/* Left: logo */}
            <div className="flex items-center">
              <a href="/" className="inline-flex items-center">
                {/* Replace with your actual logo path */}
                <img
                  src="/logo.svg"
                  alt="PCA"
                  className="h-8 w-auto object-contain"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              </a>
            </div>

            {/* Center: links */}
            <ul className="hidden md:flex items-center justify-center gap-10">
              {["SERVICES", "ABOUT US", "PRICING", "OUR TEAM", "CONTACT"].map((label) => (
                <li key={label}>
                  <a
                    href={"#" + label.toLowerCase().replace(/\s+/g, "-")}
                    className="text-gray-700 hover:text-gray-900 text-[17px] font-semibold tracking-wide"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right: CTA */}
            <div className="flex items-center justify-end">
              <a
                href="#free-consultation"
                className="inline-flex items-center rounded-full bg-fuchsia-600 px-6 py-3 text-white text-sm font-semibold shadow hover:bg-fuchsia-700 transition-colors"
              >
                Free Consultation
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

/* === Minimal inline icons (no extra libs needed) === */
function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 16.92v2a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 5.9 2 2 0 0 1 4.11 4h2a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L7.1 11a16 16 0 0 0 6 6l.56-1.18a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92z"
      />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
      />
      <path
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m22 6-10 7L2 6"
      />
    </svg>
  );
}
