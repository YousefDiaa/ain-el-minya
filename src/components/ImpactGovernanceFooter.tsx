import { useState } from 'react';
import {
  CONCLUSION_CONTENT,
  INITIATIVE_ASSETS,
  KPI_METRICS,
  PARTNERSHIPS,
  RESPONSIBILITY_NOTE,
  RISKS,
  SECURITY_PILLARS,
} from '../data/initiativeData';

type GovernanceTab = 'partnerships' | 'risks' | 'security';

export default function ImpactGovernanceFooter() {
  const [activeTab, setActiveTab] = useState<GovernanceTab>('partnerships');
  const [selectedRiskId, setSelectedRiskId] = useState<string>(RISKS[0].id);

  const activeRisk = RISKS.find((r) => r.id === selectedRiskId) ?? RISKS[0];

  return (
    <>
      <section
        id="impact"
        className="border-b border-[#5CE1E6]/15 bg-[#031224] py-14 lg:py-20 cover-grid-bg"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* KPIs Bold Metric Strip */}
          <div className="flex flex-col justify-between gap-3 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-medium text-[#5CE1E6]">
                الأثر والحوكمة · Impact &amp; Governance
              </p>
              <h2
                className="mt-1.5 font-display font-bold text-white"
                style={{ fontSize: 'clamp(1.65rem, 3vw, 2.35rem)' }}
              >
                مؤشرات المرحلة التجريبية، الشراكات، والأمان
              </h2>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-[#94D8E2]">
              {RESPONSIBILITY_NOTE}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {KPI_METRICS.map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-xl border border-[#5CE1E6]/20 bg-[#061A30] p-5"
              >
                <p className="font-mono-num text-2xl font-extrabold text-[#5CE1E6] sm:text-3xl">
                  {kpi.value}
                </p>
                <p className="mt-1.5 text-xs font-medium text-slate-200">{kpi.label}</p>
              </div>
            ))}
          </div>

          {/* Tabbed Partnerships / Risks / Security */}
          <div className="mt-12">
            <div
              role="tablist"
              aria-label="الشراكات والمخاطر والأمان"
              className="inline-flex flex-wrap items-center gap-1.5 rounded-xl border border-[#5CE1E6]/15 bg-[#05182E] p-1.5"
            >
              {[
                { id: 'partnerships', label: 'الشراكات المطلوبة (4)' },
                { id: 'risks', label: 'إدارة المخاطر (6)' },
                { id: 'security', label: 'خطة الأمان (5)' },
              ].map((tab) => {
                const selected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActiveTab(tab.id as GovernanceTab)}
                    className={`min-h-[40px] rounded-lg px-4 py-2 text-xs font-bold transition-colors whitespace-nowrap shrink-0 ${
                      selected
                        ? 'bg-[#5CE1E6] text-[#031224]'
                        : 'text-slate-300 hover:bg-[#08223D] hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {activeTab === 'partnerships' && (
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {PARTNERSHIPS.map((partner) => (
                  <div
                    key={partner.number}
                    className="rounded-xl border border-[#5CE1E6]/18 bg-[#061A30] p-5"
                  >
                    <span className="font-mono-num text-xs font-bold text-[#5CE1E6]">
                      {partner.number}.
                    </span>
                    <h3 className="mt-1.5 font-display text-lg font-bold text-white">
                      {partner.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {partner.points[0]}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'risks' && (
              <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
                  {RISKS.map((risk) => {
                    const selected = risk.id === selectedRiskId;
                    return (
                      <button
                        key={risk.id}
                        type="button"
                        onClick={() => setSelectedRiskId(risk.id)}
                        className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-right transition-colors ${
                          selected
                            ? 'border-[#5CE1E6] bg-[#082542] text-white'
                            : 'border-[#5CE1E6]/12 bg-[#061A30] text-slate-300 hover:border-[#5CE1E6]/35'
                        }`}
                      >
                        <span className="font-mono-num text-xs font-bold text-[#5CE1E6]">
                          {risk.number}.
                        </span>
                        <span className="text-sm font-semibold">{risk.title}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="rounded-xl border border-[#5CE1E6]/20 bg-[#061A30] p-6 lg:col-span-7">
                  <h3 className="font-display text-xl font-bold text-white">
                    {activeRisk.title}
                  </h3>
                  <p className="mt-2 text-sm text-amber-300">
                    <strong>التأثير: </strong>
                    {activeRisk.impact}
                  </p>
                  <ul className="mt-4 space-y-2.5 border-t border-[#5CE1E6]/15 pt-4">
                    {activeRisk.mitigations.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-200">
                        <span className="font-mono-num text-xs font-bold text-[#5CE1E6]">
                          0{idx + 1}.
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {SECURITY_PILLARS.map((pillar) => (
                  <div
                    key={pillar.number}
                    className="rounded-xl border border-[#5CE1E6]/18 bg-[#061A30] p-5"
                  >
                    <span className="font-mono-num text-xs font-bold text-[#5CE1E6]">
                      {pillar.number}.
                    </span>
                    <h3 className="mt-1.5 font-display text-base font-bold text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-300">
                      {pillar.summary}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Concise Closing Banner & Footer */}
      <footer className="bg-[#020D1A] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 rounded-2xl border border-[#5CE1E6]/22 bg-[#05182E] p-7 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="font-display text-xl font-bold text-[#5CE1E6] sm:text-2xl">
                «{CONCLUSION_CONTENT.tagline}»
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                {CONCLUSION_CONTENT.summary}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-5 shrink-0">
              <div className="flex items-center gap-2.5">
                <img
                  src={INITIATIVE_ASSETS.universityLogo}
                  alt="شعار جامعة المنيا"
                  referrerPolicy="no-referrer"
                  className="h-11 w-11 rounded-full border border-[#D4AF37]/50 bg-white object-contain p-0.5"
                />
                <span className="font-display text-xs font-bold text-white">جامعة المنيا</span>
              </div>
              <div className="flex items-center gap-2.5">
                <img
                  src={INITIATIVE_ASSETS.facultyLogo}
                  alt="شعار كلية الحاسبات والمعلومات"
                  referrerPolicy="no-referrer"
                  className="h-11 w-11 rounded-full border border-[#D4AF37]/50 bg-white object-contain p-0.5"
                />
                <span className="font-display text-xs font-bold text-white">
                  كلية الحاسبات والمعلومات
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-[#5CE1E6]/15 pt-6 text-xs text-slate-400 sm:flex-row">
            <p>مبادرة عين المنيا (Ain El Minya) · جامعة المنيا</p>
            <div className="flex items-center gap-6">
              <a href="#top" className="hover:text-[#5CE1E6] transition-colors">
                الأعلى
              </a>
              <a href="#vision" className="hover:text-[#5CE1E6] transition-colors">
                الأهداف
              </a>
              <a href="#ai-pipeline" className="hover:text-[#5CE1E6] transition-colors">
                الذكاء الاصطناعي
              </a>
              <a href="#execution" className="hover:text-[#5CE1E6] transition-colors">
                خطة التنفيذ
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
