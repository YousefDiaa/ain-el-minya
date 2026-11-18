import { useState } from 'react';
import {
  Camera,
  ShieldCheck,
  ScanEye,
  FileSearch,
  MapPin,
  BellRing,
  Send,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import {
  AI_GOVERNANCE_NOTE,
  AI_ROLES,
  REPORT_SEQUENCE_STEPS,
  SAMPLE_SCENARIOS,
} from '../data/initiativeData';

const STEP_ICONS = [
  Send,
  Camera,
  ShieldCheck,
  FileSearch,
  ScanEye,
  MapPin,
  BellRing,
];

export default function AiPipelineSection() {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(SAMPLE_SCENARIOS[0].id);
  const [activeStep, setActiveStep] = useState<number>(1);

  const scenario =
    SAMPLE_SCENARIOS.find((item) => item.id === selectedScenarioId) ?? SAMPLE_SCENARIOS[0];
  const currentStepInfo =
    REPORT_SEQUENCE_STEPS.find((item) => item.step === activeStep) ?? REPORT_SEQUENCE_STEPS[0];

  const renderStepOutput = () => {
    switch (activeStep) {
      case 1:
        return {
          heading: 'توثيق حساب المواطن وفتح البلاغ',
          rows: [
            { label: 'حالة التحقق من الحساب', value: 'حساب مواطن موثّق برقم الهاتف' },
            { label: 'نوع المشكلة المختار', value: scenario.label },
            { label: 'وصف المواطن', value: scenario.description },
          ],
        };
      case 2:
        return {
          heading: 'التصوير المباشر ورصد الموقع الجغرافي',
          rows: [
            { label: 'مصدر الصورة', value: 'كاميرا التطبيق المباشرة فقط (ممنوع الرفع من المعرض)' },
            { label: 'النطاق الجغرافي', value: scenario.location },
            { label: 'الإحداثيات الملتقطة', value: '28.1099° N, 30.7503° E (محافظة المنيا)' },
          ],
        };
      case 3:
        return {
          heading: 'تضمين العلامة المائية والتوقيع الرقمي',
          rows: [
            { label: 'الرمز الفريد للبلاغ', value: scenario.watermarkCode },
            { label: 'بيانات العلامة المائية', value: 'توقيت الالتقاط · الموقع الجغرافي · التوقيع الرقمي' },
            { label: 'آلية الحماية', value: 'توقيع رقمي موثّق صادر من التطبيق لمنع التلاعب' },
          ],
        };
      case 4:
        return {
          heading: 'التحقق الآلي من موثوقية الصورة',
          rows: [
            { label: 'فحص التوقيع الرقمي', value: 'توقيع سليم — الصورة التُقطت مباشرة داخل المنصة' },
            { label: 'تطابق الوقت والمكان', value: 'بيانات العلامة المائية متطابقة مع إحداثيات البلاغ' },
            { label: 'قرار القبول الأولي', value: 'مؤهل للتحليل بالذكاء الاصطناعي' },
          ],
        };
      case 5:
        return {
          heading: 'التحليل بالرؤية الحاسوبية ومعالجة اللغة الطبيعية',
          rows: [
            { label: 'تحليل الصور (Computer Vision)', value: scenario.aiVisionResult },
            { label: 'التصنيف النصي (NLP)', value: scenario.nlpClassification },
            { label: 'فحص البلاغات المكررة', value: scenario.duplicateStatus },
          ],
        };
      case 6:
        return {
          heading: 'تحديد الأولوية والتوجيه للجهة المختصة',
          rows: [
            { label: 'درجة الأولوية المقترحة', value: scenario.priority },
            { label: 'المدة الزمنية المحددة للمعالجة', value: scenario.slaDuration },
            { label: 'الجهة المختصة المحال إليها', value: scenario.targetAuthority },
          ],
        };
      case 7:
      default:
        return {
          heading: 'متابعة التنفيذ، التنبيه، ومسار التصعيد',
          rows: [
            { label: 'تحديث الحالة للمواطن', value: 'إشعار فوري عبر المنصة عند كل إجراء تتخذه الجهة' },
            { label: 'تنبيه المهلة الزمنية', value: 'إرسال تنبيه للجهة المختصة عند اقتراب انتهاء المهلة' },
            {
              label: 'التصعيد التلقائي عند التأخر',
              value: 'تصعيد للجهة الإشرافية وتحويل لمسار شكوى رسمي مع إخطار المواطن',
            },
          ],
        };
    }
  };

  const stepOutput = renderStepOutput();

  return (
    <section
      id="ai-pipeline"
      className="border-b border-[#5CE1E6]/15 bg-[#031224] py-16 lg:py-24 cover-grid-bg"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* AI Integration Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-wider text-[#5CE1E6]">
            دور الذكاء الاصطناعي · AI Integration
          </p>
          <h2
            className="mt-2 font-display font-bold text-white"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
          >
            دور الذكاء الاصطناعي في مبادرة عين المنيا
          </h2>
          <p className="mt-3 text-[15.5px] leading-relaxed text-slate-300">
            يمثل الذكاء الاصطناعي عنصرًا أساسيًا في تحسين كفاءة المنصة ودقة تصنيف البلاغات، مع
            الحفاظ على المراجعة البشرية للقرارات النهائية.
          </p>
        </div>

        {/* 5 AI Pillars */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {AI_ROLES.map((role) => (
            <div
              key={role.number}
              className="flex flex-col justify-between rounded-xl border border-[#5CE1E6]/18 bg-[#061A30]/95 p-6"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-[#94D8E2]">
                  <span className="font-mono-num font-semibold text-[#5CE1E6]">{role.number}.</span>
                  <span dir="ltr" className="text-slate-400">
                    {role.englishTag}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-xl font-bold text-white">
                  {role.title}
                </h3>
                <p className="mt-2.5 text-sm leading-[1.85] text-slate-300">
                  {role.description}
                </p>
              </div>
            </div>
          ))}

          {/* Human Governance Card */}
          <div className="flex flex-col justify-between rounded-xl border border-[#D4AF37]/35 bg-[#07213B] p-6">
            <div>
              <p className="text-xs font-medium text-[#E9C86B]">
                الحوكمة والإشراف البشري · Human-in-the-Loop
              </p>
              <h3 className="mt-3 font-display text-xl font-bold text-white">
                القرار النهائي للعنصر البشري
              </h3>
              <p className="mt-2.5 text-sm leading-[1.85] text-slate-200">
                {AI_GOVERNANCE_NOTE}
              </p>
            </div>
          </div>
        </div>

        {/* Interactive 7-Step Report Lifecycle Simulator */}
        <div
          id="report-simulator"
          className="mt-16 rounded-2xl border border-[#5CE1E6]/25 bg-[#05182E] p-6 sm:p-8 lg:p-10"
        >
          <div className="flex flex-col justify-between gap-6 border-b border-[#5CE1E6]/15 pb-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-medium text-[#5CE1E6]">
                محاكاة توضيحية تفاعلية · Report Processing Sequence
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold text-white">
                تسلسل معالجة البلاغ خطوة بخطوة
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-slate-300">
                اختر نوع المشكلة ثم تنقّل عبر المراحل السبع للاطلاع على آلية التوثيق الرقمي
                والتحليل بالذكاء الاصطناعي والتوجيه والتصعيد.
              </p>
            </div>

            {/* Sample Issue Filter Tabs */}
            <div
              role="group"
              aria-label="اختيار مثال نوع المشكلة"
              className="flex flex-wrap items-center gap-1.5 rounded-xl border border-[#5CE1E6]/15 bg-[#031224] p-1.5"
            >
              {SAMPLE_SCENARIOS.map((item) => {
                const isSelected = item.id === selectedScenarioId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedScenarioId(item.id)}
                    className={`min-h-[40px] rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#5CE1E6] ${
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

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Step List (7 Steps) */}
            <div className="space-y-2 lg:col-span-5">
              {REPORT_SEQUENCE_STEPS.map((item) => {
                const Icon = STEP_ICONS[item.step - 1] ?? ScanEye;
                const active = item.step === activeStep;
                return (
                  <button
                    key={item.step}
                    type="button"
                    onClick={() => setActiveStep(item.step)}
                    className={`flex w-full items-center gap-3.5 rounded-xl border px-4 py-3.5 text-right transition-colors focus-visible:outline-2 focus-visible:outline-[#5CE1E6] ${
                      active
                        ? 'border-[#5CE1E6] bg-[#0B2B4B] text-white'
                        : 'border-[#5CE1E6]/12 bg-[#041426] text-slate-300 hover:border-[#5CE1E6]/35 hover:text-white'
                    }`}
                  >
                    <span
                      className={`font-mono-num flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                        active
                          ? 'bg-[#5CE1E6] text-[#031224]'
                          : 'bg-[#07213B] text-[#5CE1E6]'
                      }`}
                    >
                      {item.step}
                    </span>
                    <span className="flex-1 text-sm font-semibold">{item.title}</span>
                    <Icon
                      className={`h-4 w-4 shrink-0 ${
                        active ? 'text-[#5CE1E6]' : 'text-slate-500'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Active Step Detail & Simulated Output */}
            <div className="flex flex-col justify-between rounded-xl border border-[#5CE1E6]/20 bg-[#031224] p-6 lg:col-span-7">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#5CE1E6]/15 pb-4">
                  <div className="text-xs text-[#94D8E2]">
                    <span className="font-mono-num">الخطوة {activeStep} من 7</span>
                    <span className="mx-2" aria-hidden="true">·</span>
                    <span>{scenario.category}</span>
                  </div>
                  <span className="font-mono-num text-xs text-[#5CE1E6]">
                    {scenario.watermarkCode}
                  </span>
                </div>

                <h4 className="mt-5 font-display text-xl font-bold text-white">
                  {currentStepInfo.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {currentStepInfo.detail}
                </p>

                <div className="mt-6 rounded-xl border border-[#5CE1E6]/15 bg-[#061B32] p-5">
                  <p className="text-xs font-semibold text-[#5CE1E6]">
                    {stepOutput.heading}
                  </p>
                  <dl className="mt-4 divide-y divide-[#5CE1E6]/12">
                    {stepOutput.rows.map((row) => (
                      <div
                        key={row.label}
                        className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                      >
                        <dt className="text-xs font-medium text-slate-400 shrink-0">
                          {row.label}
                        </dt>
                        <dd className="text-sm font-medium text-white sm:text-left">
                          {row.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              {/* Prev / Next Navigation Controls */}
              <div className="mt-6 flex items-center justify-between border-t border-[#5CE1E6]/15 pt-5">
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                  disabled={activeStep === 1}
                  className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-[#5CE1E6]/25 px-4 py-2 text-xs font-semibold text-white transition-colors hover:border-[#5CE1E6] disabled:cursor-not-allowed disabled:opacity-40 whitespace-nowrap shrink-0"
                >
                  <ChevronRight className="h-4 w-4" />
                  <span>الخطوة السابقة</span>
                </button>

                <span className="font-mono-num text-xs text-slate-400">
                  {activeStep} / {REPORT_SEQUENCE_STEPS.length}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setActiveStep((prev) =>
                      prev < REPORT_SEQUENCE_STEPS.length ? prev + 1 : 1
                    )
                  }
                  className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg bg-[#5CE1E6] px-4 py-2 text-xs font-bold text-[#031224] transition-colors hover:bg-[#82ECEF] whitespace-nowrap shrink-0"
                >
                  <span>
                    {activeStep === REPORT_SEQUENCE_STEPS.length
                      ? 'إعادة من البداية'
                      : 'الخطوة التالية'}
                  </span>
                  <ChevronLeft className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
