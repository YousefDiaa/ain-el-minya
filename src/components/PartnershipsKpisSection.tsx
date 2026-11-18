import {
  EVALUATION_MECHANISMS,
  EXPECTED_OUTCOMES,
  KPIS,
  PARTNERSHIPS,
  RESPONSIBILITY_BOUNDARY_NOTE,
  SUCCESS_FACTORS,
} from '../data/initiativeData';

export default function PartnershipsKpisSection() {
  return (
    <section id="partnerships" className="border-b border-[#5CE1E6]/15 bg-[#04172C] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Part 1: Partnerships & Support */}
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-wider text-[#5CE1E6]">
            الشراكات وعوامل النجاح · Partnerships &amp; Key Success Factors
          </p>
          <h2
            className="mt-2 font-display font-bold text-white"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
          >
            أوجه الدعم والشراكات المطلوبة
          </h2>
          <p className="mt-3 text-[15.5px] leading-relaxed text-slate-300">
            تحتاج مبادرة «عين المنيا» إلى بيئة داعمة تتكامل فيها الجهود الحكومية والأكاديمية
            والمجتمعية والخاصة، مع إمكانية البدء بالإمكانات المتاحة لدى فريق العمل ثم التوسع
            تدريجيًا.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PARTNERSHIPS.map((partner) => (
            <div
              key={partner.number}
              className="rounded-2xl border border-[#5CE1E6]/18 bg-[#061D36] p-7"
            >
              <div className="flex items-baseline gap-3 border-b border-[#5CE1E6]/15 pb-4">
                <span className="font-mono-num text-xs font-bold text-[#5CE1E6]">
                  {partner.number}.
                </span>
                <h3 className="font-display text-xl font-bold text-white">
                  {partner.title}
                </h3>
              </div>
              <ul className="mt-5 space-y-3">
                {partner.points.map((pt, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm leading-[1.8] text-slate-300"
                  >
                    <span className="font-mono-num mt-0.5 text-xs text-[#5CE1E6]">·</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Part 2: Key Success Factors */}
        <div className="mt-16 border-t border-[#5CE1E6]/15 pt-16">
          <div className="max-w-3xl">
            <h3
              className="font-display font-bold text-white"
              style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.15rem)' }}
            >
              عوامل النجاح الرئيسية
            </h3>
            <p className="mt-2 text-[15px] text-slate-300">
              ست ركائز أساسية تتكامل لضمان تقديم خدمة موثوقة وسهلة الاستخدام وتحقيق أثر مجتمعي
              قابل للقياس.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SUCCESS_FACTORS.map((factor) => (
              <div
                key={factor.number}
                className="rounded-xl border border-[#5CE1E6]/15 bg-[#061D36] p-6"
              >
                <span className="font-mono-num text-xs font-bold text-[#5CE1E6]">
                  {factor.number}.
                </span>
                <h4 className="mt-2 font-display text-lg font-bold text-white">
                  {factor.title}
                </h4>
                <p className="mt-2 text-sm leading-[1.8] text-slate-300">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Part 3: Expected Outcomes & KPIs */}
        <div className="mt-16 border-t border-[#5CE1E6]/15 pt-16">
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-[#5CE1E6]">
              النتائج ومؤشرات الأداء · Expected Outcomes &amp; KPIs
            </p>
            <h3
              className="mt-2 font-display font-bold text-white"
              style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.15rem)' }}
            >
              النتائج المتوقعة ومؤشرات قياس الأداء
            </h3>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Expected Outcomes */}
            <div className="rounded-2xl border border-[#5CE1E6]/18 bg-[#061D36] p-7 lg:col-span-5">
              <h4 className="font-display text-xl font-bold text-white">
                أولًا: النتائج المتوقعة
              </h4>
              <ul className="mt-5 space-y-3.5">
                {EXPECTED_OUTCOMES.map((outcome, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm leading-[1.8] text-slate-200"
                  >
                    <span className="font-mono-num mt-0.5 text-xs font-semibold text-[#5CE1E6]">
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* KPIs Table + Evaluation */}
            <div className="flex flex-col gap-6 lg:col-span-7">
              <div className="overflow-x-auto rounded-2xl border border-[#5CE1E6]/22 bg-[#061D36]">
                <div className="border-b border-[#5CE1E6]/15 px-6 py-4">
                  <h4 className="font-display text-lg font-bold text-white">
                    ثانيًا: مؤشرات قياس الأداء خلال المرحلة التجريبية (KPIs)
                  </h4>
                </div>
                <table className="w-full min-w-[420px] border-collapse text-right text-sm">
                  <thead>
                    <tr className="border-b border-[#5CE1E6]/15 bg-[#08233F] text-xs font-semibold text-[#94D8E2]">
                      <th className="px-6 py-3.5">المؤشر</th>
                      <th className="px-6 py-3.5">المستهدف خلال المرحلة التجريبية</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#5CE1E6]/12">
                    {KPIS.map((kpi) => (
                      <tr key={kpi.indicator} className="hover:bg-[#08223D]/60">
                        <td className="px-6 py-3.5 text-slate-200">{kpi.indicator}</td>
                        <td className="font-mono-num px-6 py-3.5 font-semibold text-[#5CE1E6] whitespace-nowrap">
                          {kpi.target}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="rounded-2xl border border-[#5CE1E6]/18 bg-[#061D36] p-6">
                <h4 className="font-display text-lg font-bold text-white">
                  ثالثًا: آلية التقييم والمتابعة
                </h4>
                <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {EVALUATION_MECHANISMS.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-300"
                    >
                      <span className="font-mono-num text-xs text-[#5CE1E6]">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-[#5CE1E6]/15 pt-4 text-xs leading-[1.85] text-slate-300">
                  {RESPONSIBILITY_BOUNDARY_NOTE}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
