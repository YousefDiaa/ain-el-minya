import { useState } from 'react';
import { Maximize2, X, ArrowDownLeft } from 'lucide-react';
import {
  HERO_SUMMARY_STRIP,
  INITIATIVE_ASSETS,
  INITIATIVE_IDEA,
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
      {/* Cover-inspired atmospheric lighting & subtle geometric corner radar rings */}
      <div className="pointer-events-none absolute inset-0 cover-radial-glow" aria-hidden="true" />
      <svg
        aria-hidden="true"
        viewBox="0 0 320 320"
        className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 text-[#5CE1E6]/10"
        fill="none"
      >
        <circle cx="160" cy="160" r="145" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
        <circle cx="160" cy="160" r="110" stroke="currentColor" strokeWidth="1" />
        <circle cx="160" cy="160" r="75" stroke="currentColor" strokeWidth="1" strokeDasharray="3 5" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Institutional Header Lockup matching the top of the official cover */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-6 border-b border-[#5CE1E6]/15 pb-6">
          <div className="flex flex-wrap items-center gap-6">
            {/* Minia University Emblem */}
            <div className="flex items-center gap-3.5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#D4AF37]/50 bg-white p-1 shadow-sm">
                {!uniError ? (
                  <img
                    src={INITIATIVE_ASSETS.universityLogo}
                    alt="شعار جامعة المنيا"
                    referrerPolicy="no-referrer"
                    onError={() => setUniError(true)}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <span className="text-xs font-bold text-[#031224]">جامعة المنيا</span>
                )}
              </div>
              <div>
                <p className="font-display text-sm font-bold text-white">جامعة المنيا</p>
                <p className="text-xs text-[#94D8E2]">Minia University</p>
              </div>
            </div>

            <span className="hidden h-8 w-px bg-[#5CE1E6]/20 sm:block" aria-hidden="true" />

            {/* Faculty of Computers and Information Emblem */}
            <div className="flex items-center gap-3.5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#D4AF37]/50 bg-white p-1 shadow-sm">
                {!facError ? (
                  <img
                    src={INITIATIVE_ASSETS.facultyLogo}
                    alt="شعار كلية الحاسبات والمعلومات"
                    referrerPolicy="no-referrer"
                    onError={() => setFacError(true)}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <span className="text-xs font-bold text-[#031224]">حاسبات</span>
                )}
              </div>
              <div>
                <p className="font-display text-sm font-bold text-white">
                  كلية الحاسبات والمعلومات
                </p>
                <p className="text-xs text-[#94D8E2]">
                  Faculty of Computers and Information
                </p>
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-300">
            <span>محافظة المنيا</span>
            <span className="mx-2 text-[#5CE1E6]/60" aria-hidden="true">·</span>
            <span>ملف التعريف الرسمي للمبادرة</span>
          </div>
        </div>

        {/* Main Hero Split: items-stretch for balanced 2-column geometry */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Right Column (RTL Start): Identity & Proposition */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <p className="mb-3 text-sm font-medium tracking-wide text-[#5CE1E6]">
                مبادرة ذكية لرصد وتحليل المشكلات المجتمعية
              </p>

              <h1
                className="font-display font-extrabold text-white tracking-tight"
                style={{ fontSize: 'clamp(2.5rem, 4.8vw, 4.25rem)', lineHeight: 1.15 }}
              >
                عين المنيا
              </h1>

              <p
                className="mt-1 font-display font-bold text-[#5CE1E6] text-glow-cyan"
                dir="ltr"
                style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.75rem)', lineHeight: 1.15, textAlign: 'right' }}
              >
                Ain El Minya
              </p>

              <div className="mt-6 space-y-4 max-w-2xl text-[15.5px] leading-[1.85] text-slate-200">
                <p>{INITIATIVE_IDEA.overview}</p>
                <p className="text-slate-300">{INITIATIVE_IDEA.serviceDescription}</p>
              </div>

              <div className="mt-6 border-t border-[#5CE1E6]/15 pt-5 max-w-2xl">
                <p className="text-sm font-medium text-[#94D8E2]">
                  {INITIATIVE_IDEA.goalNote}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#report-simulator"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#5CE1E6] px-6 py-3 text-sm font-bold text-[#031224] transition-colors duration-150 hover:bg-[#82ECEF] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5CE1E6]"
              >
                <span>استكشف تسلسل معالجة البلاغ</span>
                <ArrowDownLeft className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#5CE1E6]/35 bg-[#071E36]/80 px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:border-[#5CE1E6] hover:bg-[#0B2947] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5CE1E6]"
              >
                <Maximize2 className="h-4 w-4 text-[#5CE1E6]" />
                <span>عرض الغلاف الرسمي للمبادرة</span>
              </button>
            </div>
          </div>

          {/* Left Column (RTL End): Framed Official Initiative Cover Poster */}
          <div className="flex flex-col lg:col-span-5">
            <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#5CE1E6]/30 bg-[#061A30] p-3 shadow-2xl shadow-black/50">
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                aria-label="تكبير الغلاف الرسمي لمبادرة عين المنيا"
                className="relative flex-1 overflow-hidden rounded-xl bg-[#041426] focus-visible:outline-2 focus-visible:outline-[#5CE1E6]"
              >
                {!coverError ? (
                  <img
                    src={INITIATIVE_ASSETS.coverPoster}
                    alt="الغلاف الرسمي لمبادرة عين المنيا — Ain El Minya"
                    referrerPolicy="no-referrer"
                    onError={() => setCoverError(true)}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="flex min-h-[380px] flex-col items-center justify-center p-8 text-center">
                    <p className="font-display text-3xl font-bold text-white">عين المنيا</p>
                    <p className="mt-1 font-display text-xl text-[#5CE1E6]">Ain El Minya</p>
                    <p className="mt-3 text-sm text-slate-300">
                      مبادرة ذكية لرصد وتحليل المشكلات المجتمعية
                    </p>
                  </div>
                )}

                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#031224]/90 via-[#031224]/40 to-transparent p-4 text-right">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#5CE1E6]">
                    <Maximize2 className="h-3.5 w-3.5" />
                    <span>اضغط لعرض الغلاف بالحجم الكامل</span>
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Summary Strip below Hero Split */}
        <div className="mt-12 grid grid-cols-1 divide-y divide-[#5CE1E6]/15 rounded-xl border border-[#5CE1E6]/20 bg-[#061A30]/90 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-x-reverse">
          {HERO_SUMMARY_STRIP.map((item) => (
            <div key={item.label} className="p-5">
              <p className="text-xs font-medium text-[#94D8E2]">{item.label}</p>
              <p className="mt-1.5 font-display text-sm font-bold text-white sm:text-base">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Official Cover */}
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
              className="absolute top-4 left-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#5CE1E6]/40 bg-[#031224]/90 text-white transition-colors hover:bg-[#0B2947] focus-visible:outline-2 focus-visible:outline-[#5CE1E6]"
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
