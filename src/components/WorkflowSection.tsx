import { useState } from 'react';
import { WORK_MECHANISM_STAGES } from '../data/initiativeData';

export default function WorkflowSection() {
  const [activeStageId, setActiveStageId] = useState<string>(WORK_MECHANISM_STAGES[0].id);
  const [showAll, setShowAll] = useState<boolean>(false);

  const activeStage =
    WORK_MECHANISM_STAGES.find((s) => s.id === activeStageId) ?? WORK_MECHANISM_STAGES[0];

  return (
    <section id="workflow" className="border-b border-[#5CE1E6]/15 bg-[#04172C] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-wider text-[#5CE1E6]">
              آليات وإجراءات العمل · Work Mechanisms &amp; Procedures
            </p>
            <h2
              className="mt-2 font-display font-bold text-white"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              الإطار التشغيلي لإدارة البلاغات
            </h2>
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
                return (
                  <button
                    key={stage.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActiveStageId(stage.id)}
                    className={`min-h-[44px] rounded-lg px-3 py-2.5 text-center transition-colors focus-visible:outline-2 focus-visible:outline-[#5CE1E6] ${
                      selected
                        ? 'bg-[#5CE1E6] text-[#031224] font-bold'
                        : 'text-slate-300 hover:bg-[#07213B] hover:text-white font-medium'
                    }`}
                  >
                    <span className="block text-[11px] opacity-80">{stage.order}</span>
                    <span className="mt-0.5 block text-xs whitespace-nowrap truncate">
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
              <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#5CE1E6]/15 pb-5">
                <h3 className="font-display text-2xl font-bold text-white">
                  {activeStage.title}
                </h3>
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
            {WORK_MECHANISM_STAGES.map((stage) => (
              <div
                key={stage.id}
                className="rounded-2xl border border-[#5CE1E6]/18 bg-[#061D36] p-7"
              >
                <h3 className="font-display text-xl font-bold text-white border-b border-[#5CE1E6]/15 pb-4">
                  {stage.title}
                </h3>
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
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
