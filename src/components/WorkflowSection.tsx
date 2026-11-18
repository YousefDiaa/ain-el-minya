import { useState } from 'react';
import {
  BrainCircuit,
  FilePlus2,
  LineChart,
  Route,
  ShieldCheck,
  UserCheck,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import { WORK_MECHANISM_STAGES } from '../data/initiativeData';

const STAGE_ICONS: Record<string, LucideIcon> = {
  registration: UserCheck,
  intake: FilePlus2,
  analysis: BrainCircuit,
  routing: Route,
  qa: ShieldCheck,
  evaluation: LineChart,
};

export default function WorkflowSection() {
  const [activeStageId, setActiveStageId] = useState<string>(WORK_MECHANISM_STAGES[0].id);
  const [showAll, setShowAll] = useState<boolean>(false);

  const activeStage =
    WORK_MECHANISM_STAGES.find((s) => s.id === activeStageId) ?? WORK_MECHANISM_STAGES[0];
  const ActiveStageIcon = STAGE_ICONS[activeStage.id] ?? Workflow;

  return (
    <section id="workflow" className="border-b border-[#5CE1E6]/15 bg-[#04172C] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-wider text-[#5CE1E6]">
              آليات وإجراءات العمل · Work Mechanisms &amp; Procedures
            </p>
            <div className="mt-2 flex items-center gap-3.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#5CE1E6]/35 bg-[#061D36] text-[#5CE1E6]">
                <Workflow className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2
                className="font-display font-bold text-white"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
              >
                الإطار التشغيلي لإدارة البلاغات
              </h2>
            </div>
            <p className="mt-3 text-[15.5px] leading-relaxed text-slate-300">
              تعتمد مبادرة «عين المنيا» على ست آليات منظمة لضمان سهولة استخدام المنصة،
              وسرعة التعامل مع البلاغات، وتحقيق الاستفادة القصوى من الخدمات المقدمة.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex min-h-[40px] items-center justify-center rounded-lg border border-[#5CE1E6]/35 bg-[#061D36] px-4 py-2 text-xs font-semibold text-[#5CE1E6] transition-colors hover:border-[#5CE1E6] hover:bg-[#0B2947] whitespace-nowrap shrink-0 self-start lg:self-auto"
          >
            {showAll ? 'العودة للعرض المرحلي' : 'عرض جميع الآليات الست معًا'}
          </button>
        </div>

        {!showAll ? (
          <div className="mt-10">
            {/* Segmented Stage Selector */}
            <div
              role="tablist"
              aria-label="آليات العمل الست"
              className="grid grid-cols-2 gap-2 rounded-xl border border-[#5CE1E6]/15 bg-[#031224] p-2 sm:grid-cols-3 lg:grid-cols-6"
            >
              {WORK_MECHANISM_STAGES.map((stage) => {
                const selected = stage.id === activeStageId;
                const Icon = STAGE_ICONS[stage.id] ?? Workflow;
                return (
                  <button
                    key={stage.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActiveStageId(stage.id)}
                    className={`flex min-h-[52px] flex-col items-center justify-center gap-1 rounded-lg px-3 py-2.5 text-center transition-colors focus-visible:outline-2 focus-visible:outline-[#5CE1E6] ${
                      selected
                        ? 'bg-[#5CE1E6] text-[#031224] font-bold'
                        : 'text-slate-300 hover:bg-[#07213B] hover:text-white font-medium'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span className="text-[11px] opacity-85">{stage.order}</span>
                    </div>
                    <span className="block max-w-full text-xs whitespace-nowrap truncate">
                      {stage.shortTitle}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Panel */}
            <div
              role="tabpanel"
              className="mt-6 rounded-2xl border border-[#5CE1E6]/20 bg-[#061D36] p-7 sm:p-9"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#5CE1E6]/15 pb-5">
                <div className="flex items-center gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#5CE1E6]/35 bg-[#041426] text-[#5CE1E6]">
                    <ActiveStageIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white">
                    {activeStage.title}
                  </h3>
                </div>
                <span className="font-mono-num text-xs text-[#94D8E2]">
                  {activeStage.points.length} إجراءات تشغيلية معتمدة
                </span>
              </div>

              <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                {activeStage.points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3.5 rounded-xl border border-[#5CE1E6]/12 bg-[#041426] p-5 text-[14.5px] leading-[1.85] text-slate-200"
                  >
                    <span className="font-mono-num mt-0.5 text-xs font-semibold text-[#5CE1E6]">
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          /* All 6 Stages Expanded View */
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {WORK_MECHANISM_STAGES.map((stage) => {
              const Icon = STAGE_ICONS[stage.id] ?? Workflow;
              return (
                <div
                  key={stage.id}
                  className="rounded-2xl border border-[#5CE1E6]/18 bg-[#061D36] p-7"
                >
                  <div className="flex items-center gap-3 border-b border-[#5CE1E6]/15 pb-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#5CE1E6]/30 bg-[#041426] text-[#5CE1E6]">
                      <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-xl font-bold text-white">
                      {stage.title}
                    </h3>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {stage.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm leading-[1.8] text-slate-300"
                      >
                        <span className="font-mono-num mt-0.5 text-xs font-semibold text-[#5CE1E6]">
                          {String(idx + 1).padStart(2, '0')}.
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
