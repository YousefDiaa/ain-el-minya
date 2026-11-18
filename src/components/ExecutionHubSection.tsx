import { useState } from 'react';
import {
  BUDGET_NOTES,
  BUDGET_ROWS,
  GEO_PHASES,
  TIMELINE_STAGES,
  WORK_MECHANISM_STAGES,
} from '../data/initiativeData';

type ExecutionTab = 'mechanisms' | 'geography' | 'timeline' | 'budget';

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

export default function ExecutionHubSection() {
  const [activeTab, setActiveTab] = useState<ExecutionTab>('mechanisms');
  const [selectedGeoId, setSelectedGeoId] = useState<string>('pilot');

  const selectedGeo = GEO_PHASES.find((g) => g.id === selectedGeoId) ?? GEO_PHASES[0];
  const activeTierLimit = selectedGeo.id === 'pilot' ? 1 : selectedGeo.id === 'expansion' ? 2 : 3;

  return (
    <section id="execution" className="border-b border-[#5CE1E6]/15 bg-[#04172C] py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-medium text-[#5CE1E6]">
              خطة التنفيذ · Execution Plan
            </p>
            <h2
              className="mt-1.5 font-display font-bold text-white"
              style={{ fontSize: 'clamp(1.65rem, 3vw, 2.35rem)' }}
            >
              آليات التشغيل، التغطية، والميزانية
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="أقسام خطة التنفيذ"
            className="flex flex-wrap items-center gap-1.5 rounded-xl border border-[#5CE1E6]/15 bg-[#031224] p-1.5 self-start lg:self-auto"
          >
            {[
              { id: 'mechanisms', label: 'آليات العمل (6)' },
              { id: 'geography', label: 'النطاق الجغرافي' },
              { id: 'timeline', label: 'الجدول الزمني (5 أشهر)' },
              { id: 'budget', label: 'الميزانية التقديرية' },
            ].map((tab) => {
              const selected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveTab(tab.id as ExecutionTab)}
                  className={`min-h-[40px] rounded-lg px-3.5 py-2 text-xs font-bold transition-colors whitespace-nowrap shrink-0 ${
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
        </div>

        {/* Tab 1: Work Mechanisms (6 Compact Cards) */}
        {activeTab === 'mechanisms' && (
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {WORK_MECHANISM_STAGES.map((stage) => (
              <div
                key={stage.id}
                className="rounded-xl border border-[#5CE1E6]/18 bg-[#061D36] p-6"
              >
                <div className="flex items-baseline gap-2.5 border-b border-[#5CE1E6]/15 pb-3">
                  <span className="font-mono-num text-xs font-bold text-[#5CE1E6]">
                    {stage.order}.
                  </span>
                  <h3 className="font-display text-lg font-bold text-white">
                    {stage.title}
                  </h3>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {stage.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-300">
                      <span className="font-mono-num text-xs text-[#5CE1E6]">·</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Geographical Scope + Nile Schematic */}
        {activeTab === 'geography' && (
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
            <div className="flex flex-col justify-between gap-4 lg:col-span-7">
              {GEO_PHASES.map((geo) => {
                const isSelected = geo.id === selectedGeoId;
                return (
                  <button
                    key={geo.id}
                    type="button"
                    onClick={() => setSelectedGeoId(geo.id)}
                    className={`w-full rounded-xl border p-5 text-right transition-colors ${
                      isSelected
                        ? 'border-[#5CE1E6] bg-[#082542]'
                        : 'border-[#5CE1E6]/15 bg-[#061D36] hover:border-[#5CE1E6]/40'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 text-xs text-[#5CE1E6]">
                      <span className="font-semibold">{geo.phase}</span>
                      <span>{geo.scope}</span>
                    </div>
                    <h3 className="mt-1.5 font-display text-lg font-bold text-white">
                      {geo.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
                      {geo.description}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col justify-between rounded-xl border border-[#5CE1E6]/22 bg-[#05182E] p-6 lg:col-span-5">
              <div className="flex items-center justify-between border-b border-[#5CE1E6]/15 pb-3">
                <h3 className="font-display text-base font-bold text-white">
                  {selectedGeo.title}
                </h3>
                <span className="font-mono-num text-xs text-[#5CE1E6]">
                  {selectedGeo.activeNodes} / 9 مراكز
                </span>
              </div>

              <div className="my-3 flex flex-1 items-center justify-center">
                <svg
                  viewBox="0 0 320 285"
                  className="h-auto w-full max-w-[300px]"
                  role="img"
                  aria-label={`خريطة الانتشار الجغرافي — ${selectedGeo.title}`}
                >
                  <circle cx="180" cy="145" r="95" fill="none" stroke="#5CE1E6" strokeOpacity="0.14" strokeDasharray="4 4" />
                  <path
                    d="M150 16 C158 55, 165 92, 178 145 C188 188, 193 224, 202 270"
                    fill="none"
                    stroke="#38BDF8"
                    strokeOpacity="0.32"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  {MINIA_NODES.filter((n) => n.tier <= activeTierLimit && n.id !== 'minya-city').map((node) => (
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
                  ))}
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
            </div>
          </div>
        )}

        {/* Tab 3: Implementation Timeline (5 Months) */}
        {activeTab === 'timeline' && (
          <div className="mt-8 overflow-x-auto rounded-xl border border-[#5CE1E6]/20 bg-[#061D36]">
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
                    <td className="px-5 py-4 font-semibold text-white">
                      <span className="font-mono-num ml-2 text-xs text-[#5CE1E6]">{stage.number}.</span>
                      {stage.title}
                    </td>
                    <td className="px-5 py-4 font-medium text-[#5CE1E6] whitespace-nowrap">
                      {stage.duration}
                    </td>
                    <td className="px-5 py-4 text-slate-300">{stage.summaryActivity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 4: Estimated Budget (6 Months Pilot) */}
        {activeTab === 'budget' && (
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="overflow-x-auto rounded-xl border border-[#5CE1E6]/20 bg-[#061D36] lg:col-span-7">
              <table className="w-full min-w-[440px] border-collapse text-right text-sm">
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
                      className={row.isTotal ? 'bg-[#0A2C4E] font-bold text-white' : 'text-slate-200'}
                    >
                      <td className="font-mono-num px-4 py-3.5 text-xs text-[#5CE1E6]">{row.id}</td>
                      <td className="px-4 py-3.5">{row.item}</td>
                      <td className="font-mono-num px-4 py-3.5 text-[#5CE1E6] whitespace-nowrap">
                        {row.rangeText}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-xl border border-[#5CE1E6]/18 bg-[#061D36] p-6 lg:col-span-5">
              <h3 className="font-display text-lg font-bold text-white">ملاحظات الميزانية والتأسيس</h3>
              <ul className="mt-4 space-y-3">
                {BUDGET_NOTES.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-300">
                    <span className="font-mono-num text-xs text-[#5CE1E6]">·</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
