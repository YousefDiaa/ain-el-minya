import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import {
  AI_GOVERNANCE_NOTE,
  AI_ROLES,
  REPORT_SEQUENCE_STEPS,
  SAMPLE_SCENARIOS,
} from '../data/initiativeData';

export default function AiPipelineSection() {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(SAMPLE_SCENARIOS[0].id);
  const [activeStep, setActiveStep] = useState<number>(1);

  const scenario =
    SAMPLE_SCENARIOS.find((item) => item.id === selectedScenarioId) ?? SAMPLE_SCENARIOS[0];
  const currentStepInfo =
    REPORT_SEQUENCE_STEPS.find((item) => item.step === activeStep) ?? REPORT_SEQUENCE_STEPS[0];

  const getStepData = () => {
    switch (activeStep) {
      case 1:
        return [
          { label: 'الحساب', value: 'حساب مواطن موثّق برقم الهاتف' },
          { label: 'نوع المشكلة', value: scenario.label },
          { label: 'الوصف', value: scenario.description },
        ];
      case 2:
        return [
          { label: 'مصدر الصورة', value: 'كاميرا التطبيق المباشرة فقط (دون المعرض)' },
          { label: 'الموقع', value: scenario.location },
          { label: 'الإحداثيات', value: '28.1099° N, 30.7503° E' },
        ];
      case 3:
        return [
          { label: 'الرمز الفريد', value: scenario.watermarkCode },
          { label: 'العلامة المائية', value: 'توقيت الالتقاط · الموقع الجغرافي · توقيع رقمي' },
          { label: 'الغرض', value: 'منع الصور المنقولة أو المعدّلة' },
        ];
      case 4:
        return [
          { label: 'نتيجة الفحص', value: 'التوقيع الرقمي سليم ومطابق لإحداثيات البلاغ' },
          { label: 'الإجراء', value: 'اعتماد الصورة وتمريرها لنماذج الذكاء الاصطناعي' },
        ];
      case 5:
        return [
          { label: 'Computer Vision', value: scenario.aiVisionResult },
          { label: 'تصنيف NLP', value: scenario.nlpClassification },
          { label: 'التكرار', value: scenario.duplicateStatus },
        ];
      case 6:
        return [
          { label: 'الأولوية', value: scenario.priority },
          { label: 'المهلة المحددة', value: scenario.slaDuration },
          { label: 'الجهة المختصة', value: scenario.targetAuthority },
        ];
      case 7:
      default:
        return [
          { label: 'الإشعارات', value: 'إشعار للمواطن عند كل تحديث من لوحة التحكم' },
          { label: 'التصعيد التلقائي', value: 'تصعيد للجهة الإشرافية ومسار شكوى عند انتهاء المهلة' },
        ];
    }
  };

  return (
    <section
      id="ai-pipeline"
      className="border-b border-[#5CE1E6]/15 bg-[#031224] py-14 lg:py-20 cover-grid-bg"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-medium text-[#5CE1E6]">
              الذكاء الاصطناعي · AI Integration
            </p>
            <h2
              className="mt-1.5 font-display font-bold text-white"
              style={{ fontSize: 'clamp(1.65rem, 3vw, 2.35rem)' }}
            >
              كيف يوظّف المشروع الذكاء الاصطناعي؟
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-[#94D8E2]">
            {AI_GOVERNANCE_NOTE}
          </p>
        </div>

        {/* 5 Compact AI Role Tiles */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {AI_ROLES.map((role) => (
            <div
              key={role.number}
              className="rounded-xl border border-[#5CE1E6]/18 bg-[#061A30]/95 p-5"
            >
              <div className="flex items-center justify-between gap-2 text-[11px]">
                <span className="font-mono-num font-bold text-[#5CE1E6]">{role.number}.</span>
                <span dir="ltr" className="text-slate-400">
                  {role.englishTag}
                </span>
              </div>
              <h3 className="mt-2 font-display text-base font-bold text-white">
                {role.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                {role.description}
              </p>
            </div>
          ))}
        </div>

        {/* Compact Interactive 7-Step Report Simulator */}
        <div
          id="report-simulator"
          className="mt-12 rounded-2xl border border-[#5CE1E6]/25 bg-[#05182E] p-6 sm:p-8"
        >
          <div className="flex flex-col justify-between gap-4 border-b border-[#5CE1E6]/15 pb-5 lg:flex-row lg:items-center">
            <div>
              <h3 className="font-display text-xl font-bold text-white">
                محاكاة تسلسل معالجة البلاغ (7 خطوات)
              </h3>
              <p className="mt-1 text-xs text-slate-300">
                جرّب اختيار نوع المشكلة واستعرض خطوات التوثيق والتحليل والتوجيه.
              </p>
            </div>

            <div
              role="group"
              aria-label="اختيار نوع المشكلة"
              className="flex flex-wrap items-center gap-1.5 rounded-xl border border-[#5CE1E6]/15 bg-[#031224] p-1"
            >
              {SAMPLE_SCENARIOS.map((item) => {
                const isSelected = item.id === selectedScenarioId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedScenarioId(item.id)}
                    className={`min-h-[38px] rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                      isSelected
                        ? 'bg-[#5CE1E6] text-[#031224]'
                        : 'text-slate-300 hover:bg-[#08223D] hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Horizontal Stepper Pills-Free Number Rail */}
          <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
            {REPORT_SEQUENCE_STEPS.map((item) => {
              const active = item.step === activeStep;
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveStep(item.step)}
                  className={`flex flex-col items-start rounded-xl border p-3 text-right transition-colors ${
                    active
                      ? 'border-[#5CE1E6] bg-[#0B2B4B] text-white'
                      : 'border-[#5CE1E6]/12 bg-[#031224] text-slate-300 hover:border-[#5CE1E6]/35'
                  }`}
                >
                  <span
                    className={`font-mono-num text-xs font-bold ${
                      active ? 'text-[#5CE1E6]' : 'text-slate-400'
                    }`}
                  >
                    0{item.step}
                  </span>
                  <span className="mt-1 text-xs font-semibold leading-snug">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Compact Output Card */}
          <div className="mt-6 rounded-xl border border-[#5CE1E6]/20 bg-[#031224] p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#5CE1E6]/15 pb-3.5">
              <div>
                <h4 className="font-display text-lg font-bold text-white">
                  {currentStepInfo.step}. {currentStepInfo.title}
                </h4>
                <p className="text-xs text-slate-400">{currentStepInfo.detail}</p>
              </div>
              <span className="font-mono-num text-xs text-[#5CE1E6]">
                {scenario.watermarkCode}
              </span>
            </div>

            <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {getStepData().map((row) => (
                <div key={row.label} className="rounded-lg bg-[#061B32] p-3.5">
                  <dt className="text-[11px] font-medium text-[#94D8E2]">{row.label}</dt>
                  <dd className="mt-1 text-sm font-semibold text-white">{row.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-5 flex items-center justify-between border-t border-[#5CE1E6]/15 pt-4">
              <button
                type="button"
                onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                disabled={activeStep === 1}
                className="inline-flex min-h-[38px] items-center gap-1 rounded-lg border border-[#5CE1E6]/25 px-3.5 py-1.5 text-xs font-semibold text-white hover:border-[#5CE1E6] disabled:opacity-40 whitespace-nowrap"
              >
                <ChevronRight className="h-4 w-4" />
                <span>السابق</span>
              </button>

              <span className="font-mono-num text-xs text-slate-400">
                {activeStep} / 7
              </span>

              <button
                type="button"
                onClick={() => setActiveStep((prev) => (prev < 7 ? prev + 1 : 1))}
                className="inline-flex min-h-[38px] items-center gap-1 rounded-lg bg-[#5CE1E6] px-3.5 py-1.5 text-xs font-bold text-[#031224] hover:bg-[#82ECEF] whitespace-nowrap"
              >
                <span>{activeStep === 7 ? 'إعادة' : 'التالي'}</span>
                <ChevronLeft className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
