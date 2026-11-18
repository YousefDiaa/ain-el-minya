import { useState } from 'react';
import { Shield, AlertTriangle, Lock } from 'lucide-react';
import {
  CONCLUSION_CONTENT,
  INITIATIVE_ASSETS,
  RISKS,
  SECURITY_PILLARS,
} from '../data/initiativeData';

export default function RiskSecurityFooterSection() {
  const [selectedRiskId, setSelectedRiskId] = useState<string>(RISKS[0].id);
  const activeRisk = RISKS.find((r) => r.id === selectedRiskId) ?? RISKS[0];

  return (
    <>
      {/* Risk Management & Security Plan */}
      <section
        id="risk-security"
        className="border-b border-[#5CE1E6]/15 bg-[#031224] py-16 lg:py-24 cover-grid-bg"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-wider text-[#5CE1E6]">
              إدارة المخاطر والأمان · Risk Management &amp; Security Plan
            </p>
            <h2
              className="mt-2 font-display font-bold text-white"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              خطة إدارة المخاطر وحماية البيانات
            </h2>
            <p className="mt-3 text-[15.5px] leading-relaxed text-slate-300">
              إجراءات وقائية وتقنية وتنظيمية لضمان موثوقية البلاغات، واستمرارية التشغيل،
              وصون خصوصية المواطنين.
            </p>
          </div>

          {/* Interactive Risk Management Matrix */}
          <div className="mt-10 rounded-2xl border border-[#5CE1E6]/22 bg-[#05182E] p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#5CE1E6]/15 pb-5">
              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  أولًا: تحديد المخاطر وآليات التعامل معها (6 مخاطر رئيسية)
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  اختر أي خطر محتمل لاستعراض تأثيره وآليات الوقاية والتعامل المعتمدة.
                </p>
              </div>
              <span className="font-mono-num text-xs text-[#94D8E2]">
                {activeRisk.number} / 06
              </span>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
              {/* Risk List Buttons */}
              <div className="space-y-2 lg:col-span-5">
                {RISKS.map((risk) => {
                  const selected = risk.id === selectedRiskId;
                  return (
                    <button
                      key={risk.id}
                      type="button"
                      onClick={() => setSelectedRiskId(risk.id)}
                      className={`flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3.5 text-right transition-colors focus-visible:outline-2 focus-visible:outline-[#5CE1E6] ${
                        selected
                          ? 'border-[#5CE1E6] bg-[#082542] text-white'
                          : 'border-[#5CE1E6]/12 bg-[#031224] text-slate-300 hover:border-[#5CE1E6]/35 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono-num text-xs font-bold text-[#5CE1E6]">
                          {risk.number}.
                        </span>
                        <span className="text-sm font-semibold">{risk.title}</span>
                      </div>
                      <span dir="ltr" className="hidden text-[11px] text-slate-400 sm:inline">
                        {risk.englishTitle}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Risk Detail */}
              <div className="rounded-xl border border-[#5CE1E6]/20 bg-[#031224] p-6 lg:col-span-7">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#5CE1E6]/15 pb-4">
                  <h4 className="font-display text-xl font-bold text-white">
                    {activeRisk.title}
                  </h4>
                  <span dir="ltr" className="text-xs text-[#94D8E2]">
                    {activeRisk.englishTitle}
                  </span>
                </div>

                <div className="mt-5 rounded-xl border border-amber-400/25 bg-amber-950/20 p-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                    <AlertTriangle className="h-4 w-4 shrink-0" />
                    <span>التأثير المحتمل</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200">
                    {activeRisk.impact}
                  </p>
                </div>

                <div className="mt-5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#5CE1E6]">
                    <Shield className="h-4 w-4 shrink-0" />
                    <span>آلية الوقاية والتعامل</span>
                  </div>
                  <ul className="mt-3 space-y-2.5">
                    {activeRisk.mitigations.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm leading-[1.8] text-slate-300"
                      >
                        <span className="font-mono-num mt-0.5 text-xs font-semibold text-[#5CE1E6]">
                          {String(idx + 1).padStart(2, '0')}.
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Security Plan Pillars */}
          <div className="mt-16">
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
              <div>
                <h3 className="font-display text-2xl font-bold text-white">
                  ثانيًا: خطة الأمان وحماية البيانات (Security Plan)
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-300">
                  تلتزم المبادرة بتطبيق مجموعة من الإجراءات التقنية والتنظيمية لحماية بيانات
                  المستخدمين، وتأمين المنصة من محاولات الاختراق أو إساءة الاستخدام.
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {SECURITY_PILLARS.map((pillar) => (
                <div
                  key={pillar.number}
                  className="rounded-xl border border-[#5CE1E6]/18 bg-[#061A30] p-6"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono-num text-xs font-bold text-[#5CE1E6]">
                      {pillar.number}.
                    </span>
                    <Lock className="h-4 w-4 text-[#5CE1E6]/70" />
                  </div>
                  <h4 className="mt-2 font-display text-lg font-bold text-white">
                    {pillar.title}
                  </h4>
                  <ul className="mt-3.5 space-y-2">
                    {pillar.points.map((pt, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-300"
                      >
                        <span className="font-mono-num text-xs text-[#5CE1E6]">·</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Third: Continuous Monitoring & Final Goal */}
              <div className="flex flex-col justify-between rounded-xl border border-[#5CE1E6]/30 bg-[#07223F] p-6">
                <div>
                  <span className="font-mono-num text-xs font-bold text-[#5CE1E6]">06.</span>
                  <h4 className="mt-2 font-display text-lg font-bold text-white">
                    ثالثًا: المتابعة والتقييم المستمر
                  </h4>
                  <p className="mt-3 text-sm leading-[1.85] text-slate-200">
                    سيتم مراجعة المخاطر بصورة دورية خلال مراحل تطوير وتشغيل المنصة، وتحديث
                    إجراءات الحماية وفقًا للمشكلات التي تظهر ونتائج الاختبارات وملاحظات
                    المستخدمين؛ لضمان تحسين مستوى الأمان والموثوقية بشكل مستمر.
                  </p>
                </div>
                <p className="mt-5 border-t border-[#5CE1E6]/20 pt-4 text-xs font-semibold leading-relaxed text-[#5CE1E6]">
                  الهدف النهائي: بناء منصة رقمية موثوقة تحافظ على خصوصية المواطنين، وتحد من
                  إساءة الاستخدام، وتضمن التعامل المنظم مع البلاغات وطلبات الخدمات.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion & Institutional Footer */}
      <footer className="bg-[#020D1A] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Conclusion Editorial Card */}
          <div className="rounded-2xl border border-[#5CE1E6]/25 bg-[#05182E] p-8 sm:p-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <p className="text-xs font-medium text-[#5CE1E6]">
                  {CONCLUSION_CONTENT.title} · {CONCLUSION_CONTENT.englishTitle}
                </p>
                <div className="mt-4 space-y-3 text-[15.5px] leading-[1.85] text-slate-200">
                  {CONCLUSION_CONTENT.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
                <p className="mt-6 font-display text-xl font-bold text-[#5CE1E6] sm:text-2xl">
                  «{CONCLUSION_CONTENT.tagline}»
                </p>
              </div>

              <div className="flex flex-col items-start gap-5 border-t border-[#5CE1E6]/15 pt-6 lg:col-span-4 lg:border-t-0 lg:border-r lg:pr-8 lg:pt-0">
                <div className="flex items-center gap-3.5">
                  <img
                    src={INITIATIVE_ASSETS.universityLogo}
                    alt="شعار جامعة المنيا"
                    referrerPolicy="no-referrer"
                    className="h-12 w-12 rounded-full border border-[#D4AF37]/50 bg-white object-contain p-0.5"
                  />
                  <div>
                    <p className="font-display text-sm font-bold text-white">جامعة المنيا</p>
                    <p className="text-xs text-slate-400">Minia University</p>
                  </div>
                </div>
                <div className="flex items-center gap-3.5">
                  <img
                    src={INITIATIVE_ASSETS.facultyLogo}
                    alt="شعار كلية الحاسبات والمعلومات"
                    referrerPolicy="no-referrer"
                    className="h-12 w-12 rounded-full border border-[#D4AF37]/50 bg-white object-contain p-0.5"
                  />
                  <div>
                    <p className="font-display text-sm font-bold text-white">
                      كلية الحاسبات والمعلومات
                    </p>
                    <p className="text-xs text-slate-400">
                      Faculty of Computers and Information
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quiet Copyright & Anchor Bar */}
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[#5CE1E6]/15 pt-8 text-xs text-slate-400 sm:flex-row">
            <p>
              مبادرة عين المنيا (Ain El Minya) · كلية الحاسبات والمعلومات — جامعة المنيا
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a href="#top" className="hover:text-[#5CE1E6] transition-colors">
                العودة للأعلى
              </a>
              <a href="#vision" className="hover:text-[#5CE1E6] transition-colors">
                الأهداف
              </a>
              <a href="#ai-pipeline" className="hover:text-[#5CE1E6] transition-colors">
                الذكاء الاصطناعي
              </a>
              <a href="#roadmap" className="hover:text-[#5CE1E6] transition-colors">
                الجدول الزمني والميزانية
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
