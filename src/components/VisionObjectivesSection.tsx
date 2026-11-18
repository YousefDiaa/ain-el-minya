import {
  AlertCircle,
  Building2,
  Camera,
  CheckCircle2,
  GraduationCap,
  HeartHandshake,
  MapPin,
  ScanEye,
  Target,
  TrendingUp,
  Users,
  type LucideIcon,
} from 'lucide-react';
import {
  GENERAL_OBJECTIVE,
  PROBLEM_STATEMENT,
  PROPOSED_SOLUTION,
  SUB_OBJECTIVES,
  TARGET_AUDIENCE,
} from '../data/initiativeData';

const SUB_OBJECTIVE_ICONS: Record<string, LucideIcon> = {
  '01': Camera,
  '02': ScanEye,
  '03': MapPin,
  '04': HeartHandshake,
  '05': TrendingUp,
};

const AUDIENCE_ICONS: Record<string, LucideIcon> = {
  '01': Users,
  '02': Building2,
  '03': GraduationCap,
};

export default function VisionObjectivesSection() {
  return (
    <section id="vision" className="border-b border-[#5CE1E6]/15 bg-[#04172C] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-wider text-[#5CE1E6]">
            الرؤية والأهداف الاستراتيجية · Vision &amp; Objectives
          </p>
          <h2
            className="mt-2 font-display font-bold text-white"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
          >
            المشكلة، الحل المقترح، وأهداف المبادرة
          </h2>
        </div>

        {/* Problem vs Solution Editorial Comparison */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* Problem Statement */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#5CE1E6]/15 bg-[#061D36] p-7 lg:col-span-5">
            <div>
              <p className="text-xs font-medium text-[#94D8E2]">
                {PROBLEM_STATEMENT.englishTitle}
              </p>
              <div className="mt-2 flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-amber-400/30 bg-amber-500/10 text-amber-300">
                  <AlertCircle className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-2xl font-bold text-white">
                  {PROBLEM_STATEMENT.title}
                </h3>
              </div>

              <div className="mt-6 space-y-4 text-[15px] leading-[1.85] text-slate-300">
                {PROBLEM_STATEMENT.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-[#5CE1E6]/15 pt-5 text-xs text-[#94D8E2]">
              <span>الفجوة الأساسية: غياب منصة رقمية موحدة للتصنيف والتوجيه والمتابعة</span>
            </div>
          </div>

          {/* Proposed Solution */}
          <div className="rounded-2xl border border-[#5CE1E6]/25 bg-[#07223F] p-7 lg:col-span-7">
            <p className="text-xs font-medium text-[#5CE1E6]">
              {PROPOSED_SOLUTION.englishTitle}
            </p>
            <div className="mt-2 flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#5CE1E6]/35 bg-[#5CE1E6]/10 text-[#5CE1E6]">
                <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="font-display text-2xl font-bold text-white">
                {PROPOSED_SOLUTION.title}
              </h3>
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-200">
              {PROPOSED_SOLUTION.intro}
            </p>

            <ul className="mt-6 divide-y divide-[#5CE1E6]/12 border-t border-[#5CE1E6]/12">
              {PROPOSED_SOLUTION.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 py-3.5 text-[14.5px] leading-[1.8] text-slate-200"
                >
                  <span className="font-mono-num mt-0.5 text-xs font-semibold text-[#5CE1E6]">
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Objectives Block */}
        <div className="mt-16 border-t border-[#5CE1E6]/15 pt-14">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* General Objective */}
            <div className="lg:col-span-4">
              <p className="text-xs font-medium text-[#5CE1E6]">
                الأهداف · Objectives
              </p>
              <div className="mt-2 flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#5CE1E6]/35 bg-[#061D36] text-[#5CE1E6]">
                  <Target className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-2xl font-bold text-white">
                  الهدف العام للمبادرة
                </h3>
              </div>
              <p className="mt-4 text-[15.5px] leading-[1.85] text-slate-200">
                {GENERAL_OBJECTIVE}
              </p>
            </div>

            {/* 5 Sub-Objectives */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8">
              {SUB_OBJECTIVES.map((obj, idx) => {
                const Icon = SUB_OBJECTIVE_ICONS[obj.number] ?? Target;
                return (
                  <div
                    key={obj.number}
                    className={`rounded-xl border border-[#5CE1E6]/15 bg-[#061D36] p-6 ${
                      idx === 4 ? 'sm:col-span-2' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#5CE1E6]/25 bg-[#041426] text-[#5CE1E6]">
                        <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="font-mono-num text-xs font-semibold text-[#5CE1E6]">
                          {obj.number}.
                        </span>
                        <h4 className="font-display text-lg font-bold text-white">
                          {obj.title}
                        </h4>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-[1.8] text-slate-300">
                      {obj.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Target Audience */}
        <div className="mt-16 border-t border-[#5CE1E6]/15 pt-14">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-medium text-[#5CE1E6]">
                المستفيدون · Target Audience
              </p>
              <div className="mt-2 flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#5CE1E6]/30 bg-[#061D36] text-[#5CE1E6]">
                  <Users className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-2xl font-bold text-white">
                  الفئات المستهدفة
                </h3>
              </div>
            </div>
            <p className="text-sm text-slate-300">
              منظومة تشاركية تربط المواطن بالجهات التنفيذية والكوادر الشابة
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {TARGET_AUDIENCE.map((group) => {
              const Icon = AUDIENCE_ICONS[group.number] ?? Users;
              return (
                <div
                  key={group.number}
                  className="rounded-xl border border-[#5CE1E6]/15 bg-[#061D36] p-6"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#5CE1E6]/25 bg-[#041426] text-[#5CE1E6]">
                      <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                    <span className="font-mono-num text-xs font-semibold text-[#5CE1E6]">
                      {group.number}
                    </span>
                  </div>
                  <h4 className="mt-3.5 font-display text-xl font-bold text-white">
                    {group.title}
                  </h4>
                  <p className="mt-2.5 text-sm leading-[1.8] text-slate-300">
                    {group.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
