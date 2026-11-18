import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#vision', label: 'الفكرة والأهداف' },
  { href: '#ai-pipeline', label: 'الذكاء الاصطناعي' },
  { href: '#workflow', label: 'آليات العمل' },
  { href: '#roadmap', label: 'خطة التنفيذ' },
  { href: '#risk-security', label: 'المخاطر والأمان' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#5CE1E6]/15 bg-[#031224]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#top"
          className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5CE1E6]"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 36 36"
            fill="none"
            aria-hidden="true"
            className="shrink-0"
          >
            <rect
              x="2"
              y="2"
              width="32"
              height="32"
              rx="8"
              fill="#07223B"
              stroke="#5CE1E6"
              strokeOpacity="0.45"
              strokeWidth="1.5"
            />
            <path
              d="M7.5 18C10.2 13.4 13.8 11.2 18 11.2C22.2 11.2 25.8 13.4 28.5 18C25.8 22.6 22.2 24.8 18 24.8C13.8 24.8 10.2 22.6 7.5 18Z"
              stroke="#5CE1E6"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <circle cx="18" cy="18" r="3.4" stroke="#F8FAFC" strokeWidth="1.6" />
            <circle cx="18" cy="18" r="1.3" fill="#5CE1E6" />
          </svg>
          <span className="font-display">عين المنيا</span>
        </a>

        {/* Zone 2: 5 Single-Line Nav Links */}
        <nav
          aria-label="التنقل الرئيسي"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#5CE1E6] after:absolute after:inset-x-0 after:bottom-0 after:h-[1.5px] after:origin-center after:scale-x-0 after:bg-[#5CE1E6] after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5CE1E6]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action + Mobile Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#report-simulator"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#report-simulator');
            }}
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#5CE1E6] px-4 py-2 text-xs font-bold text-[#031224] transition-colors duration-150 hover:bg-[#82ECEF] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5CE1E6]"
          >
            محاكاة مسار البلاغ
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#5CE1E6]/25 bg-[#071E36] text-slate-100 transition-colors hover:border-[#5CE1E6]/60 lg:hidden focus-visible:outline-2 focus-visible:outline-[#5CE1E6]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="border-t border-[#5CE1E6]/15 bg-[#04172C] px-4 py-4 lg:hidden">
          <nav aria-label="قائمة الجوال" className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:bg-[#0B2947] hover:text-[#5CE1E6]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#report-simulator"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#report-simulator');
              }}
              className="mt-2 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#5CE1E6] px-4 py-2.5 text-sm font-bold text-[#031224] transition-colors hover:bg-[#82ECEF]"
            >
              محاكاة مسار البلاغ
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
