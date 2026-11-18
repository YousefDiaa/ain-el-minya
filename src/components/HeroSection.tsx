import { useState } from 'react';
import { Maximize2, X, ArrowDownLeft } from 'lucide-react';
import {
  HERO_COPY,
  HERO_SUMMARY_STRIP,
  INITIATIVE_ASSETS,
} from '../data/initiativeData';

export default function HeroSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [coverError, setCoverError] = useState(false);
  const [uniError, setUniError] = useState(false);
  const [facError, setFacError] = useState(false);

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[#5CE1E6]/15 bg-[#031224] cover-grid-bg"
    >
      <div className="pointer-events-none absolute inset-0 cover-radial-glow" aria-hidden="true" />
      <svg
        aria-hidden="true"
        viewBox="0 0 320 320"
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 text-[#5CE1E6]/10"
        fill="none"
      >
        <circle cx="160" cy="160" r="145" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
        <circle cx="160" cy="160" r="105" stroke="currentColor" strokeWidth="1" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* Institutional Header Lockup */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[#5CE1E6]/15 pb-5">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#D4AF37]/50 bg-white p-1">
                {!uniError ? (
                  <img
                    src={INITIATIVE_ASSETS.universityLogo}
                    alt="شعار جامعة المنيا"
                    referrerPolicy="no-referrer"
                    onError={() => setUniError(true)}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <span className="text-[10px] font-bold text-[#031224]">جامعة المنيا</span>
                )}
              </div>
              <div>
                <p className="font-display text-sm font-bold text-white">جامعة المنيا</p>
                <p className="text-[11px] text-[#94D8E2]">Minia University</p>
              </div>
            </div>

            <span className="hidden h-7 w-px bg-[#5CE1E6]/20 sm:block" aria-hidden="true" />

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#D4AF37]/50 bg-white p-1">
                {!facError ? (
                  <img
                    src={INITIATIVE_ASSETS.facultyLogo}
                    alt="شعار كلية الحاسبات والمعلومات"
                    referrerPolicy="no-referrer"
                    onError={() => setFacError(true)}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <span className="text-[10px] font-bold text-[#031224]">حاسبات</span>
                )}
              </div>
              <div>
                <p className="font-display text-sm font-bold text-white">
                  كلية الحاسبات والمعلومات
                </p>
                <p className="text-[11px] text-[#94D8E2]">
                  Faculty of Computers and Information
                </p>
              </div>
            </div>
          </div>

          <span className="text-xs text-slate-400">محافظة المنيا · الملف التعريفي</span>
        </div>

        {/* Hero 2-Column Split */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="mb-2 text-sm font-medium text-[#5CE1E6]">
              {HERO_COPY.kicker}
            </p>

            <h1
              className="font-display font-extrabold text-white tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.25rem)', lineHeight: 1.15 }}
            >
              {HERO_COPY.titleAr}
            </h1>

            <p
              className="mt-1 font-display font-bold text-[#5CE1E6] text-glow-cyan"
              dir="ltr"
              style={{ fontSize: 'clamp(1.65rem, 3vw, 2.5rem)', lineHeight: 1.15, textAlign: 'right' }}
            >
              {HERO_COPY.titleEn}
            </p>

            <p className="mt-6 max-w-xl text-base leading-[1.85] text-slate-200">
              {HERO_COPY.pitch}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#report-simulator"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#5CE1E6] px-6 py-3 text-sm font-bold text-[#031224] transition-colors duration-150 hover:bg-[#82ECEF] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5CE1E6]"
              >
                <span>تجربة مسار البلاغ</span>
                <ArrowDownLeft className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#5CE1E6]/35 bg-[#071E36]/80 px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:border-[#5CE1E6] hover:bg-[#0B2947] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5CE1E6]"
              >
                <Maximize2 className="h-4 w-4 text-[#5CE1E6]" />
                <span>عرض الغلاف الرسمي</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="group overflow-hidden rounded-2xl border border-[#5CE1E6]/30 bg-[#061A30] p-2.5 shadow-2xl shadow-black/50">
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                aria-label="تكبير الغلاف الرسمي لمبادرة عين المنيا"
                className="relative block w-full overflow-hidden rounded-xl bg-[#041426] focus-visible:outline-2 focus-visible:outline-[#5CE1E6]"
              >
                {!coverError ? (
                  <img
                    src={INITIATIVE_ASSETS.coverPoster}
                    alt="الغلاف الرسمي لمبادرة عين المنيا — Ain El Minya"
                    referrerPolicy="no-referrer"
                    onError={() => setCoverError(true)}
                    className="max-h-[440px] w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="flex min-h-[340px] flex-col items-center justify-center p-8 text-center">
                    <p className="font-display text-3xl font-bold text-white">عين المنيا</p>
                    <p className="mt-1 font-display text-xl text-[#5CE1E6]">Ain El Minya</p>
                  </div>
                )}

                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#031224]/90 via-[#031224]/35 to-transparent p-3.5 text-right">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#5CE1E6]">
                    <Maximize2 className="h-3.5 w-3.5" />
                    <span>عرض بالحجم الكامل</span>
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* 4-Column Quick Facts Strip */}
        <div className="mt-10 grid grid-cols-1 divide-y divide-[#5CE1E6]/15 rounded-xl border border-[#5CE1E6]/20 bg-[#061A30]/90 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-x-reverse">
          {HERO_SUMMARY_STRIP.map((item) => (
            <div key={item.label} className="p-4 sm:p-5">
              <p className="text-xs font-medium text-[#94D8E2]">{item.label}</p>
              <p className="mt-1 font-display text-sm font-bold text-white">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="الغلاف الرسمي لمبادرة عين المنيا"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#020B17]/92 p-4 backdrop-blur-sm"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-h-[92vh] max-w-3xl overflow-hidden rounded-2xl border border-[#5CE1E6]/35 bg-[#041426] p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              aria-label="إغلاق عرض الغلاف"
              className="absolute top-4 left-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#5CE1E6]/40 bg-[#031224]/90 text-white transition-colors hover:bg-[#0B2947]"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={INITIATIVE_ASSETS.coverPoster}
              alt="الغلاف الرسمي الكامل لمبادرة عين المنيا"
              referrerPolicy="no-referrer"
              className="max-h-[86vh] w-auto rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
