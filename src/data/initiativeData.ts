export interface SubObjective {
  number: string;
  title: string;
  description: string;
}

export interface TargetGroup {
  number: string;
  title: string;
  description: string;
}

export interface AiRole {
  number: string;
  title: string;
  englishTag: string;
  description: string;
}

export interface WorkMechanismStage {
  id: string;
  order: string;
  title: string;
  points: string[];
}

export interface ReportSequenceStep {
  step: number;
  title: string;
  detail: string;
}

export interface SampleIssueScenario {
  id: string;
  label: string;
  category: string;
  location: string;
  description: string;
  aiVisionResult: string;
  nlpClassification: string;
  priority: string;
  slaDuration: string;
  targetAuthority: string;
  duplicateStatus: string;
  watermarkCode: string;
}

export interface GeoPhase {
  id: string;
  phase: string;
  title: string;
  scope: string;
  description: string;
  activeNodes: number;
}

export interface TimelineStage {
  number: string;
  title: string;
  duration: string;
  summaryActivity: string;
}

export interface BudgetRow {
  id: number;
  item: string;
  rangeText: string;
  isTotal?: boolean;
}

export interface PartnershipCategory {
  number: string;
  title: string;
  points: string[];
}

export interface KpiMetric {
  value: string;
  label: string;
}

export interface RiskItem {
  id: string;
  number: string;
  title: string;
  impact: string;
  mitigations: string[];
}

export interface SecurityPillar {
  number: string;
  title: string;
  summary: string;
}

export const INITIATIVE_ASSETS = {
  coverPoster: '/assets/aistudio/Gemini_Generated_Image_lgcqt5lgcqt5lgcq_f428ef8f.jpg',
  universityLogo: '/assets/aistudio/image_ffad6a17.png',
  facultyLogo: '/assets/aistudio/image_96bdc785.png',
};

export const HERO_COPY = {
  kicker: 'مبادرة ذكية لرصد وتحليل المشكلات المجتمعية',
  titleAr: 'عين المنيا',
  titleEn: 'Ain El Minya',
  pitch:
    'منصة إلكترونية ذكية تعتمد على البرمجة والذكاء الاصطناعي لخدمة مواطني محافظة المنيا، عبر تسهيل الإبلاغ الموثّق بالصور والموقع الجغرافي عن المشكلات العامة ومتابعتها على خريطة تفاعلية حتى حلها.',
};

export const HERO_SUMMARY_STRIP = [
  { label: 'الخدمة الأساسية', value: 'الإبلاغ الذكي عن المشكلات العامة' },
  { label: 'التقنيات المعتمدة', value: 'Computer Vision · NLP · توثيق رقمي' },
  { label: 'البداية التجريبية', value: 'مدينة المنيا (5–6 أشهر)' },
  { label: 'الميزانية التقديرية', value: '10,000 – 17,000 جنيه' },
];

export const PROBLEM_POINTS = [
  'صعوبة الإبلاغ عن مشكلات الطرق والإنارة والنظافة وتراكم المخلفات.',
  'عدم وجود منصة رقمية موحدة تستقبل البلاغات وتصنفها وتتابع حلها.',
  'غياب آلية واضحة لربط المواطن بالجهات المختصة وقياس سرعة الاستجابة.',
];

export const SOLUTION_POINTS = [
  'التصوير المباشر من كاميرا التطبيق فقط (منع الرفع من المعرض) لمنع التلاعب.',
  'إضافة علامة مائية وتوقيع رقمي بالوقت والموقع الجغرافي ورمز فريد للبلاغ.',
  'تحليل الصور والنصوص بالذكاء الاصطناعي لتصنيف المشكلة واكتشاف التكرار.',
  'توجيه البلاغ تلقائيًا للجهة المختصة مع إتاحة متابعة حالته لحظيًا.',
  'مهلة زمنية حسب الخطورة، وتصعيد تلقائي لمسار شكوى رسمي عند التأخر.',
];

export const GENERAL_OBJECTIVE =
  'توظيف التكنولوجيا والذكاء الاصطناعي في خدمة مجتمع المنيا عبر منصة ذكية ترصد المشكلات وتنظم متابعتها لتحسين جودة الحياة.';

export const SUB_OBJECTIVES: SubObjective[] = [
  {
    number: '01',
    title: 'تسهيل الإبلاغ العام',
    description: 'إبلاغ سريع بالصورة والموقع الجغرافي دون تعقيد.',
  },
  {
    number: '02',
    title: 'التصنيف الذكي',
    description: 'فرز البلاغات تلقائيًا وتحديد نوعها بالذكاء الاصطناعي.',
  },
  {
    number: '03',
    title: 'خريطة ولوحة متابعة',
    description: 'رصد البلاغات المتكررة والمناطق الأكثر احتياجًا للتدخل.',
  },
  {
    number: '04',
    title: 'تحسين جودة الحياة',
    description: 'توفير الوقت والجهد في معالجة المشكلات اليومية.',
  },
  {
    number: '05',
    title: 'التوسع والاستدامة',
    description: 'التدرج من مدينة المنيا لتغطية جميع مراكز وقرى المحافظة.',
  },
];

export const TARGET_AUDIENCE: TargetGroup[] = [
  {
    number: '01',
    title: 'المواطنون',
    description: 'تمكينهم من الإبلاغ الموثق عن المشكلات ومتابعة حالة معالجتها.',
  },
  {
    number: '02',
    title: 'الجهات الحكومية والمحلية',
    description: 'تنظيم البلاغات وتحديد الأولويات والمناطق الأكثر احتياجًا.',
  },
  {
    number: '03',
    title: 'الشباب والخريجون الفنيون',
    description: 'إتاحة فرص عمل وإدماجهم في منظومة الخدمات الرقمية.',
  },
];

export const AI_ROLES: AiRole[] = [
  {
    number: '01',
    title: 'التحقق من الموثوقية',
    englishTag: 'Digital Signature',
    description: 'فحص التوقيع الرقمي والعلامة المائية للتأكد من الالتقاط المباشر.',
  },
  {
    number: '02',
    title: 'تحليل الصور',
    englishTag: 'Computer Vision',
    description: 'التعرف البصري على المخلفات، الحفر، أعطال الإنارة، وتسربات المياه.',
  },
  {
    number: '03',
    title: 'التصنيف النصي',
    englishTag: 'NLP',
    description: 'تحليل وصف المواطن وتوجيه البلاغ للقطاع المختص تلقائيًا.',
  },
  {
    number: '04',
    title: 'تحديد الأولويات',
    englishTag: 'Priority Scoring',
    description: 'ترتيب البلاغات حسب درجة الخطورة والموقع الجغرافي.',
  },
  {
    number: '05',
    title: 'تحليل البيانات',
    englishTag: 'Hotspot Analytics',
    description: 'رصد المشكلات الأكثر تكرارًا والمناطق ذات الأولوية.',
  },
];

export const AI_GOVERNANCE_NOTE =
  'القرار النهائي ومراجعة البلاغات الحساسة يظلان للعنصر البشري والجهات المسؤولة؛ والذكاء الاصطناعي أداة مساعدة للدقة والسرعة.';

export const REPORT_SEQUENCE_STEPS: ReportSequenceStep[] = [
  { step: 1, title: 'تسجيل الدخول وفتح البلاغ', detail: 'توثيق حساب المواطن برقم الهاتف.' },
  { step: 2, title: 'التصوير المباشر وتحديد الموقع', detail: 'كاميرا التطبيق فقط + GPS تلقائي.' },
  { step: 3, title: 'العلامة المائية والتوقيع الرقمي', detail: 'ختم الوقت والمكان والرمز الفريد.' },
  { step: 4, title: 'التحقق من موثوقية الصورة', detail: 'فحص التوقيع قبل بدء التحليل.' },
  { step: 5, title: 'التحليل والتصنيف بالذكاء الاصطناعي', detail: 'رؤية حاسوبية + NLP + كشف التكرار.' },
  { step: 6, title: 'تحديد الأولوية والتوجيه', detail: 'تعيين المهلة الزمنية والجهة المختصة.' },
  { step: 7, title: 'المتابعة والإخطار أو التصعيد', detail: 'تحديث المواطن أو التصعيد عند انتهاء المهلة.' },
];

export const SAMPLE_SCENARIOS: SampleIssueScenario[] = [
  {
    id: 'waste',
    label: 'تراكم القمامة',
    category: 'النظافة العامة',
    location: 'مدينة المنيا · شارع عدنان المالكي',
    description: 'تراكم مخلفات صلبة بجوار الرصيف يعيق حركة المشاة.',
    aiVisionResult: 'رصد تجمع مخلفات صلبة متطابق مع فئة النظافة.',
    nlpClassification: 'تصنيف تلقائي: قطاع النظافة ورفع المخلفات.',
    priority: 'متوسطة إلى مرتفعة',
    slaDuration: '48 ساعة',
    targetAuthority: 'الوحدة المحلية لمدينة المنيا — إدارة النظافة',
    duplicateStatus: 'بلاغ فريد ضمن نطاق 100 متر',
    watermarkCode: 'AEM-MN-2026-0418',
  },
  {
    id: 'road',
    label: 'حفر في الطرق',
    category: 'الطرق والرصف',
    location: 'مدينة المنيا · تقاطع شارع طه حسين',
    description: 'هبوط أرضي وحفرة عميقة في الحارة المرورية.',
    aiVisionResult: 'تلف أسفلت وهبوط سطحي مؤكد بالرؤية الحاسوبية.',
    nlpClassification: 'تصنيف تلقائي: صيانة الطرق والسلامة المرورية.',
    priority: 'عاجلة (سلامة مرورية)',
    slaDuration: '24 ساعة',
    targetAuthority: 'مديرية الطرق والنقل بالمنيا',
    duplicateStatus: 'مرتبط ببلاغ مشابه في نفس التقاطع',
    watermarkCode: 'AEM-MN-2026-0429',
  },
  {
    id: 'lighting',
    label: 'أعطال الإنارة',
    category: 'الإنارة العامة',
    location: 'مدينة المنيا · امتداد كورنيش النيل',
    description: 'انقطاع الإضاءة عن ثلاثة أعمدة إنارة متتالية مساءً.',
    aiVisionResult: 'انخفاض الإضاءة الليلية وتعطل وحدات الإنارة.',
    nlpClassification: 'تصنيف تلقائي: شبكة الإنارة العامة.',
    priority: 'متوسطة',
    slaDuration: '72 ساعة',
    targetAuthority: 'إدارة الكهرباء والإنارة — مدينة المنيا',
    duplicateStatus: 'بلاغ فريد مسجل على الخريطة',
    watermarkCode: 'AEM-MN-2026-0435',
  },
  {
    id: 'water',
    label: 'تسربات المياه',
    category: 'المياه والصرف',
    location: 'مدينة المنيا · حي شلبي',
    description: 'كسر في خط مياه فرعي وتجمع مياه مستمر.',
    aiVisionResult: 'تدفق وتجمع مائي سطحي غير اعتيادي.',
    nlpClassification: 'تصنيف تلقائي: شبكات المياه والطوارئ.',
    priority: 'عالية (طوارئ مياه)',
    slaDuration: '12 – 24 ساعة',
    targetAuthority: 'شركة مياه الشرب والصرف الصحي بالمنيا',
    duplicateStatus: 'قيد المراجعة البشرية الفورية والتوجيه',
    watermarkCode: 'AEM-MN-2026-0441',
  },
];

export const WORK_MECHANISM_STAGES: WorkMechanismStage[] = [
  {
    id: 'registration',
    order: '01',
    title: 'تسجيل المستخدمين',
    points: [
      'حساب للمواطن ببيانات أساسية ورقم هاتف للتحقق.',
      'حسابات إدارية للجهات المسؤولة لمتابعة البلاغات.',
    ],
  },
  {
    id: 'intake',
    order: '02',
    title: 'استقبال البلاغات',
    points: [
      'تحديد نوع المشكلة ووصفها مع التصوير المباشر فقط.',
      'رصد الموقع تلقائيًا وإصدار رقم تعريفي للمتابعة.',
    ],
  },
  {
    id: 'analysis',
    order: '03',
    title: 'التحليل والتصنيف',
    points: [
      'التحقق من موثوقية الصورة ثم التصنيف بالذكاء الاصطناعي.',
      'اكتشاف البلاغات المكررة واقتراح الأولوية مع المراجعة البشرية.',
    ],
  },
  {
    id: 'routing',
    order: '04',
    title: 'التوجيه والتصعيد',
    points: [
      'إحالة البلاغ للجهة المختصة وإرسال تنبيهات عند اقتراب انتهاء المهلة.',
      'تصعيد تلقائي للجهة الإشرافية ومسار شكوى رسمي عند التأخر.',
    ],
  },
  {
    id: 'qa',
    order: '05',
    title: 'الرقابة وضمان الجودة',
    points: [
      'الإبلاغ عن المخالفات ومراجعة البلاغات المشكوك في صحتها.',
      'مراقبة أداء المنصة وتحديث نماذج الذكاء الاصطناعي دوريًا.',
    ],
  },
  {
    id: 'evaluation',
    order: '06',
    title: 'التقييم والتطوير',
    points: [
      'قياس سرعة الاستجابة ودقة التصنيف وتحليل آراء المواطنين.',
      'معالجة نقاط الضعف وإضافة خدمات جديدة بناءً على النتائج.',
    ],
  },
];

export const GEO_PHASES: GeoPhase[] = [
  {
    id: 'pilot',
    phase: 'المرحلة الأولى',
    title: 'المرحلة التجريبية (Pilot)',
    scope: 'مدينة المنيا',
    description: 'إطلاق أولي داخل مدينة المنيا لاختبار الكفاءة وقياس تفاعل المواطنين.',
    activeNodes: 1,
  },
  {
    id: 'expansion',
    phase: 'المرحلة الثانية',
    title: 'التوسع بالمحافظة (Expansion)',
    scope: 'مراكز وقرى مختارة',
    description: 'تعميم تدريجي على عدد من المراكز والقرى بعد تقييم المرحلة التجريبية.',
    activeNodes: 5,
  },
  {
    id: 'full',
    phase: 'المرحلة الثالثة',
    title: 'التغطية الشاملة (Full Coverage)',
    scope: 'كامل محافظة المنيا',
    description: 'تغطية جميع مراكز وقرى محافظة المنيا لضمان وصول الخدمة للجميع.',
    activeNodes: 9,
  },
];

export const TIMELINE_STAGES: TimelineStage[] = [
  { number: '01', title: 'التخطيط والإعداد', duration: 'أسبوعان', summaryActivity: 'دراسة الاحتياجات، المتطلبات التقنية، وتشكيل الفريق' },
  { number: '02', title: 'التصميم والتجهيز', duration: 'أسبوعان', summaryActivity: 'واجهات المستخدم، قاعدة البيانات، ونظام استقبال البلاغات' },
  { number: '03', title: 'التطوير والبرمجة', duration: 'شهر', summaryActivity: 'تطوير المنصة، الحسابات، ودمج أدوات الذكاء الاصطناعي' },
  { number: '04', title: 'الاختبار والتجربة الأولية', duration: 'أسبوعان', summaryActivity: 'اختبار الكفاءة ودقة التصنيف ومراجعة حماية البيانات' },
  { number: '05', title: 'التشغيل التجريبي', duration: 'شهران', summaryActivity: 'إطلاق النسخة التجريبية بمدينة المنيا واستقبال البلاغات' },
  { number: '06', title: 'التقييم والتحسين', duration: 'أسبوعان', summaryActivity: 'تحليل النتائج، قياس المؤشرات، وخطة التوسع بالمحافظة' },
];

export const BUDGET_ROWS: BudgetRow[] = [
  { id: 1, item: 'الاستضافة (VPS) و Domain', rangeText: '3,000 – 5,000 جنيه' },
  { id: 2, item: 'نظام التوثيق وتسجيل المستخدم OTP', rangeText: '0 – 500 جنيه' },
  { id: 3, item: 'خدمات الخرائط والذكاء الاصطناعي APIs', rangeText: '0 – 500 جنيه' },
  { id: 4, item: 'تدريب الفنيين', rangeText: '2,000 – 3,000 جنيه' },
  { id: 5, item: 'حملات التسويق الرقمي والتوعية', rangeText: '3,000 – 5,000 جنيه' },
  { id: 6, item: 'احتياطي للتشغيل والطوارئ التقنية', rangeText: '2,000 – 3,000 جنيه' },
  { id: 7, item: 'الإجمالي التقديري (6 أشهر)', rangeText: '10,000 – 17,000 جنيه', isTotal: true },
];

export const BUDGET_NOTES = [
  'يتولى فريق المبادرة التصميم والبرمجة بالاعتماد على الأدوات مفتوحة المصدر والخطط المجانية.',
  'الميزانية لا تشمل رواتب فريق العمل أو شراء أجهزة، وتكاليف التأسيس القانوني تُحدد منفصلة عند الحاجة.',
  'التقديرات قابلة للتحديث وفق حجم الاستخدام وعروض الأسعار الفعلية.',
];

export const KPI_METRICS: KpiMetric[] = [
  { value: '100+', label: 'مواطن مسجل بالمنصة' },
  { value: '50+', label: 'بلاغ وطلب خدمة' },
  { value: '90%', label: 'اكتمال بيانات البلاغات' },
  { value: '80%', label: 'توجيه للجهات المختصة' },
  { value: '75%', label: 'مستوى رضا المستخدمين' },
];

export const RESPONSIBILITY_NOTE =
  'تنظيم البلاغات وتوجيهها ومتابعتها هو دور المنصة، بينما تظل مسؤولية الإصلاح والتنفيذ الميداني من اختصاص الجهات المعنية.';

export const PARTNERSHIPS: PartnershipCategory[] = [
  {
    number: '01',
    title: 'الدعم الحكومي',
    points: ['ربط الوحدات المحلية وتوفير نقطة اتصال لتلقي البلاغات وتسريع الاستجابة.'],
  },
  {
    number: '02',
    title: 'القطاع الخاص',
    points: ['دعم مادي أو عيني وتوفير استضافة وأرصدة سحابية ضمن المسؤولية المجتمعية.'],
  },
  {
    number: '03',
    title: 'المجتمع المدني',
    points: ['حملات توعية وتعريف المواطنين بالمبادرة في المراكز والقرى.'],
  },
  {
    number: '04',
    title: 'الدعم الأكاديمي والتقني',
    points: ['إرشاد أعضاء هيئة التدريس بالجامعة في البرمجة والذكاء الاصطناعي والأمان.'],
  },
];

export const RISKS: RiskItem[] = [
  {
    id: 'fake-reports',
    number: '01',
    title: 'البلاغات الوهمية أو الكيدية',
    impact: 'إهدار الوقت وتوجيه الجهات لمعلومات مضللة.',
    mitigations: [
      'التصوير المباشر بالكاميرا فقط ومنع اختيار صور من المعرض.',
      'فحص التوقيع الرقمي والموقع الجغرافي والذكاء الاصطناعي لكشف الصور غير المرتبطة.',
      'مراجعة الحالات المشكوك فيها واتخاذ إجراءات ضد الحسابات المسيئة.',
    ],
  },
  {
    id: 'duplicate-reports',
    number: '02',
    title: 'تكرار البلاغات عن نفس المشكلة',
    impact: 'تضخم عدد البلاغات لنفس الواقعة وصعوبة فرزها.',
    mitigations: [
      'تنبيه المواطن عند وجود بلاغ مشابه في نفس النطاق الجغرافي.',
      'ربط البلاغات المكررة ببلاغ رئيسي مع حفظ عدد المُبلّغين كمؤشر للأهمية.',
    ],
  },
  {
    id: 'ai-errors',
    number: '03',
    title: 'أخطاء الذكاء الاصطناعي',
    impact: 'تصنيف خاطئ أو أولوية غير مناسبة للمشكلة.',
    mitigations: [
      'الاعتماد على المراجعة البشرية للحالات غير الواضحة وعالية الأولوية.',
      'تعديل التصنيف يدويًا بواسطة المسؤول وتحسين النموذج دوريًا.',
    ],
  },
  {
    id: 'delayed-response',
    number: '04',
    title: 'تأخر الجهات المختصة',
    impact: 'استمرار المشكلة وانخفاض ثقة المواطنين.',
    mitigations: [
      'تذكيرات تلقائية قبل انتهاء المهلة وتصعيد للجهة الإشرافية.',
      'شفافية الحالة للمواطن وتوضيح أن التنفيذ الميداني مسؤولية الجهة المختصة.',
    ],
  },
  {
    id: 'technical-failures',
    number: '05',
    title: 'الأعطال التقنية وتوقف الخدمة',
    impact: 'تعذر تقديم البلاغات مؤقتًا.',
    mitigations: [
      'مراقبة دورية للخادم ونسخ احتياطية منتظمة مع اختبار الاستعادة.',
      'خطة طوارئ لاستعادة التشغيل والتحقق من سلامة البيانات.',
    ],
  },
  {
    id: 'data-breach',
    number: '06',
    title: 'تسريب البيانات أو الوصول غير المصرح',
    impact: 'انتهاك خصوصية المواطنين وبياناتهم.',
    mitigations: [
      'تشفير الاتصال (HTTPS)، تجزئة كلمات المرور، وتحديد الصلاحيات حسب الدور.',
      'مراجعة سجلات الدخول وخطة استجابة سريعة للحوادث الأمنية.',
    ],
  },
];

export const SECURITY_PILLARS: SecurityPillar[] = [
  {
    number: '01',
    title: 'حماية الحسابات',
    summary: 'تحقق آمن عند التسجيل، تشفير كلمات المرور، وصلاحيات منفصلة للمواطن والفني والإدارة.',
  },
  {
    number: '02',
    title: 'الخصوصية والبيانات',
    summary: 'جمع البيانات الضرورية فقط وعدم نشر معلومات الاتصال أو مشاركتها دون ضوابط.',
  },
  {
    number: '03',
    title: 'تأمين المنصة',
    summary: 'بروتوكول HTTPS، تحديثات مستمرة، نسخ احتياطي دوري، ومراقبة الأنشطة المشبوهة.',
  },
  {
    number: '04',
    title: 'حماية الصور والمواقع',
    summary: 'قصر استخدام الصور والإحداثيات على غرض البلاغ وتقييد الوصول للبيانات الحساسة.',
  },
  {
    number: '05',
    title: 'الاستجابة للحوادث',
    summary: 'آلية واضحة للإبلاغ عن أي اشتباه أمني واحتوائه واستعادة الخدمة وإخطار المتأثرين.',
  },
];

export const CONCLUSION_CONTENT = {
  summary:
    'نطمح إلى البدء بمرحلة تجريبية داخل مدينة المنيا، ثم التطوير والتوسع تدريجيًا لتشمل باقي مراكز وقرى المحافظة بما يحقق أثرًا مجتمعيًا مستدامًا.',
  tagline: 'عين المنيا... تكنولوجيا أقرب للمواطن، ومجتمع أكثر مشاركة.',
};
