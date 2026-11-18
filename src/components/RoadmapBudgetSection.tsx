import { useState } from 'react';
import {
  BUDGET_INTRO,
  BUDGET_ROWS,
  GEO_NOTE,
  GEO_PHASES,
  LEGAL_AND_BUDGET_NOTES,
  TIMELINE_STAGES,
} from '../data/initiativeData';

const MINIA_NODES = [
  { id: 'minya-city', label: 'مدينة المنيا', cx: 180, cy: 145, tier: 1 },
  { id: 'samalut', label: 'سمالوط', cx: 168, cy: 105, tier: 2 },
  { id: 'matai', label: 'مطاي', cx: 162, cy: 76, tier: 2 },
  { id: 'abou-qirqas', label: 'أبو قرقاص', cx: 188, cy: 185, tier: 2 },
  { id: 'mallawi', label: 'ملوي', cx: 192, cy: 222, tier: 2 },
  { id: 'beni-mazar', label: 'بني مزار', cx: 158, cy: 52, tier: 3 },
  { id: 'maghagha', label: 'مغاغة', cx: 152, cy: 28, tier: 3 },
  { id: 'el-idwa', label: 'العدوة', cx: 112, cy: 36, tier: 3 },
  { id: 'deir-mawas', label: 'دير مواس', cx: 198, cy: 256, tier: 3 },
];

export default function RoadmapBudgetSection() {
  const [selectedGeoId, setSelectedGeoId] = useState<string>('pilot');
  const [selectedTimelineIdx, setSelectedTimelineIdx] = useState<number>(0);

  const selectedGeo = GEO_PHASES.find((g) => g.id === selectedGeoId) ?? GEO_PHASES[0];
  const activeTierLimit = selectedGeo.id === 'pilot' ? 1 : selectedGeo.id === 'expansion' ? 2 : 3;
  const activeStage = TIMELINE_STAGES[selectedTimelineIdx] ?? TIMELINE_STAGES[0];

  return (
    <section
      id="roadmap"
      className="border-b border-[#5CE1E6]/15 bg-[#031224] py-16 lg:py-24 cover-grid-bg"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Part 1: Geographical Scope */}
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-wider text-[#5CE1E6]">
            النطاق الجغرافي لتنفيذ المبادرة · Geographical Scope
          </p>
          <h2
            className="mt-2 font-display font-bold text-white"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
          >
            خطة التغطية الجغرافية التدريجية لمحافظة المنيا
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-300">{GEO_NOTE}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* 3 Geographical Phase Selectors */}
          <div className="flex flex-col justify-between gap-4 lg:col-span-7">
            {GEO_PHASES.map((geo) => {
              const isSelected = geo.id === selectedGeoId;
              return (
                <button
                  key={geo.id}
                  type="button"
                  onClick={() => setSelectedGeoId(geo.id)}
                  className={`w-full rounded-2xl border p-6 text-right transition-colors focus-visible:outline-2 focus-visible:outline-[#5CE1E6] ${
                    isSelected
                      ? 'border-[#5CE1E6] bg-[#082542]'
                      : 'border-[#5CE1E6]/15 bg-[#061A30] hover:border-[#5CE1E6]/40'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="font-semibold text-[#5CE1E6]">
                      {geo.phase} · {geo.scope}
                    </span>
                    <span dir="ltr" className="text-slate-400">
                      {geo.englishTitle}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold text-white">
                    {geo.title}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.85] text-slate-300">
                    {geo.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Cover-inspired Schematic Nile Corridor Coverage Map */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#5CE1E6]/25 bg-[#05182E] p-6 lg:col-span-5">
            <div className="flex items-center justify-between border-b border-[#5CE1E6]/15 pb-4">
              <div>
                <p className="text-xs font-medium text-[#5CE1E6]">خريطة الانتشار التدرجي</p>
                <h3 className="mt-1 font-display text-lg font-bold text-white">
                  {selectedGeo.title} ({selectedGeo.scope})
                </h3>
              </div>
              <span className="font-mono-num text-xs text-[#94D8E2]">
                {selectedGeo.activeNodes} / 9 مراكز
              </span>
            </div>

            <div className="my-4 flex flex-1 items-center justify-center">
              <svg
                viewBox="0 0 320 285"
                className="h-auto w-full max-w-[330px]"
                role="img"
                aria-label={`مخطط الانتشار الجغرافي لمبادرة عين المنيا — ${selectedGeo.title}`}
              >
                {/* Isometric / blueprint grid backdrop */}
                <defs>
                  <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#5CE1E6" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#5CE1E6" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <circle cx="180" cy="145" r="88" fill="url(#eyeGlow)" />
                <circle
                  cx="180"
                  cy="145"
                  r="112"
                  fill="none"
                  stroke="#5CE1E6"
                  strokeOpacity="0.14"
                  strokeDasharray="4 4"
                />
                <circle
                  cx="180"
                  cy="145"
                  r="64"
                  fill="none"
                  stroke="#5CE1E6"
                  strokeOpacity="0.22"
                />

                {/* Schematic Nile Corridor Path across Minia */}
                <path
                  d="M150 16 C158 55, 165 92, 178 145 C188 188, 193 224, 202 270"
                  fill="none"
                  stroke="#38BDF8"
                  strokeOpacity="0.32"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Connection lines from Minia City hub to active districts */}
                {MINIA_NODES.filter((n) => n.tier <= activeTierLimit && n.id !== 'minya-city').map(
                  (node) => (
                    <line
                      key={`line-${node.id}`}
                      x1={180}
                      y1={145}
                      x2={node.cx}
                      y2={node.cy}
                      stroke="#5CE1E6"
                      strokeOpacity="0.5"
                      strokeWidth="1.2"
                      strokeDasharray="3 3"
                    />
                  )
                )}

                {/* District Nodes */}
                {MINIA_NODES.map((node) => {
                  const active = node.tier <= activeTierLimit;
                  const isHub = node.id === 'minya-city';
                  return (
                    <g key={node.id}>
                      <circle
                        cx={node.cx}
                        cy={node.cy}
                        r={isHub ? 8 : active ? 5.5 : 4}
                        fill={active ? '#5CE1E6' : '#0B2947'}
                        stroke={active ? '#F8FAFC' : '#334155'}
                        strokeWidth={isHub ? 2 : 1.2}
                      />
                      <text
                        x={node.cx - 14}
                        y={node.cy + 4}
                        textAnchor="end"
                        fill={active ? '#F1F5F9' : '#64748B'}
                        fontSize={isHub ? '11.5' : '10'}
                        fontWeight={isHub ? '700' : '500'}
                        fontFamily="Cairo, sans-serif"
                      >
                        {node.label}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            <div className="border-t border-[#5CE1E6]/15 pt-4 text-xs text-slate-300">
              <span>التدرج يتيح اختبار المنصة في مدينة المنيا قبل التعميم على باقي المراكز والقرى.</span>
            </div>
          </div>
        </div>

        {/* Part 2: Implementation Timeline (5 Months) */}
        <div className="mt-20 border-t border-[#5CE1E6]/15 pt-16">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-medium text-[#5CE1E6]">
                المدة الزمنية للتنفيذ · Implementation Timeline
              </p>
              <h3
                className="mt-2 font-display font-bold text-white"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.15rem)' }}
              >
                مراحل تنفيذ المرحلة الأولى (5 أشهر)
              </h3>
            </div>
            <p className="text-sm text-[#94D8E2]">
              تشمل التخطيط، التصميم، البرمجة، الاختبار، التشغيل التجريبي، والتقييم
            </p>
          </div>

          {/* Interactive Timeline Stage Selector + Detail */}
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              {TIMELINE_STAGES.map((stage, idx) => {
                const active = idx === selectedTimelineIdx;
                return (
                  <button
                    key={stage.number}
                    type="button"
                    onClick={() => setSelectedTimelineIdx(idx)}
                    className={`flex items-center justify-between gap-4 rounded-xl border px-4 py-3.5 text-right transition-colors focus-visible:outline-2 focus-visible:outline-[#5CE1E6] ${
                      active
                        ? 'border-[#5CE1E6] bg-[#082542] text-white'
                        : 'border-[#5CE1E6]/15 bg-[#061A30] text-slate-300 hover:border-[#5CE1E6]/40 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono-num text-xs font-bold text-[#5CE1E6]">
                        {stage.number}.
                      </span>
                      <span className="font-display text-sm font-bold">{stage.title}</span>
                    </div>
                    <span className="text-xs font-medium text-[#94D8E2] whitespace-nowrap shrink-0">
                      {stage.duration}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="rounded-2xl border border-[#5CE1E6]/20 bg-[#061A30] p-7 lg:col-span-7">
              <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-[#5CE1E6]/15 pb-4">
                <h4 className="font-display text-xl font-bold text-white">
                  المرحلة {activeStage.number}: {activeStage.title}
                </h4>
                <span className="text-sm font-semibold text-[#5CE1E6]">
                  المدة: {activeStage.duration}
                </span>
              </div>

              <ul className="mt-5 space-y-3.5">
                {activeStage.activities.map((act, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[14.5px] leading-[1.85] text-slate-200"
                  >
                    <span className="font-mono-num mt-0.5 text-xs font-semibold text-[#5CE1E6]">
                      {String(i + 1).padStart(2, '0')}.
                    </span>
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Structured Summary Table */}
          <div className="mt-8 overflow-x-auto rounded-xl border border-[#5CE1E6]/20 bg-[#061A30]">
            <table className="w-full min-w-[540px] border-collapse text-right text-sm">
              <thead>
                <tr className="border-b border-[#5CE1E6]/20 bg-[#08233F] text-xs font-semibold text-[#94D8E2]">
                  <th className="px-5 py-3.5">المرحلة</th>
                  <th className="px-5 py-3.5">المدة الزمنية</th>
                  <th className="px-5 py-3.5">أهم الأنشطة</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#5CE1E6]/12">
                {TIMELINE_STAGES.map((stage) => (
                  <tr key={stage.number} className="hover:bg-[#08223D]/60">
                    <td className="px-5 py-3.5 font-semibold text-white">
                      {stage.title}
                    </td>
                    <td className="px-5 py-3.5 text-[#5CE1E6] font-medium">
                      {stage.duration}
                    </td>
                    <td className="px-5 py-3.5 text-slate-300">{stage.summaryActivity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Part 3: Estimated Budget */}
        <div className="mt-20 border-t border-[#5CE1E6]/15 pt-16">
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-[#5CE1E6]">
              الميزانية المقترحة التقديرية · Estimated Budget
            </p>
            <h3
              className="mt-2 font-display font-bold text-white"
              style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.15rem)' }}
            >
              الميزانية التقديرية للمرحلة التجريبية (6 أشهر)
            </h3>
            <p className="mt-3 text-[15px] leading-[1.85] text-slate-300">{BUDGET_INTRO}</p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Budget Table */}
            <div className="overflow-x-auto rounded-xl border border-[#5CE1E6]/20 bg-[#061A30] lg:col-span-7">
              <table className="w-full min-w-[460px] border-collapse text-right text-sm">
                <thead>
                  <tr className="border-b border-[#5CE1E6]/20 bg-[#08233F] text-xs font-semibold text-[#94D8E2]">
                    <th className="px-4 py-3.5">م</th>
                    <th className="px-4 py-3.5">البند</th>
                    <th className="px-4 py-3.5">التكلفة التقديرية</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#5CE1E6]/12">
                  {BUDGET_ROWS.map((row) => (
                    <tr
                      key={row.id}
                      className={
                        row.isTotal
                          ? 'bg-[#0A2C4E] font-bold text-white'
                          : 'text-slate-200 hover:bg-[#08223D]/60'
                      }
                    >
                      <td className="font-mono-num px-4 py-3.5 text-xs text-[#5CE1E6]">
                        {row.id}
                      </td>
                      <td className="px-4 py-3.5">{row.item}</td>
                      <td className="font-mono-num px-4 py-3.5 text-[#5CE1E6] whitespace-nowrap">
                        {row.rangeText}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Legal Costs & Budget Notes */}
            <div className="flex flex-col justify-between rounded-xl border border-[#5CE1E6]/18 bg-[#061A30] p-6 lg:col-span-5">
              <div>
                <h4 className="font-display text-lg font-bold text-white">
                  {LEGAL_AND_BUDGET_NOTES.legalTitle}
                </h4>
                <p className="mt-2.5 text-sm leading-[1.85] text-slate-300">
                  {LEGAL_AND_BUDGET_NOTES.legalText}
                </p>

                <h4 className="mt-6 border-t border-[#5CE1E6]/15 pt-5 font-display text-base font-bold text-white">
                  ملاحظات الميزانية
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {LEGAL_AND_BUDGET_NOTES.notes.map((note, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-300"
                    >
                      <span className="font-mono-num text-xs text-[#5CE1E6]">·</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
