
import { Lesson } from './types';

const generateLessons = (): Lesson[] => {
  const data: Lesson[] = [];

  // BEGINNER LESSONS (1-10)
  const beginnerLessons: Lesson[] = [
    {
      level_id: 'Beginner',
      lesson_id: 1,
      title_en: 'Greetings',
      title_ar: 'التحيات',
      title_sorani: 'سڵاوکردن',
      grammar_tip_en: 'Sorani doesn’t have grammatical gender. Use the same words for everyone.',
      grammar_tip_ar: 'اللغة الكردية لا تميز بين المذكر والمؤنث. استخدم نفس الكلمات للجميع.',
      grammar_tip_sorani: 'زمانی کوردی ڕەگەزی نییە. بۆ هەموو کەسێک هەمان وشە بەکاربهێنە.',
      content: [
        { 
          word_sorani: 'سڵاو', word_english: 'Hello', word_arabic: 'مرحباً',
          example_sentence_sorani: 'سڵاو، چۆنیت؟', example_sentence_translation_en: 'Hello, how are you?', example_sentence_translation_ar: 'مرحباً، كيف حالك؟',
          word_grammar_tip_en: 'Universal greeting.', word_grammar_tip_ar: 'فائدة: تحية عامة وشاملة.', word_grammar_tip_sorani: 'سڵاو وشەیەکی گشتییە.'
        },
        { 
          word_sorani: 'بەیانی باش', word_english: 'Good Morning', word_arabic: 'صباح الخير',
          example_sentence_sorani: 'بەیانی باش هاوڕێ.', example_sentence_translation_en: 'Good morning friend.', example_sentence_translation_ar: 'صباح الخير يا صديقي.',
          word_grammar_tip_en: 'Bayanî (Morning) + Bash (Good).', word_grammar_tip_ar: 'فائدة: تتكون من بياني (صباح) وباش (خير).', word_grammar_tip_sorani: 'لە بەیانی و باش پێکهاتووە.'
        },
        { 
          word_sorani: 'سوپاس', word_english: 'Thank you', word_arabic: 'شكراً',
          example_sentence_sorani: 'زۆر سوپاس بۆ تۆ.', example_sentence_translation_en: 'Thank you very much.', example_sentence_translation_ar: 'شكراً جزيلاً لك.',
          word_grammar_tip_en: 'Standard thanks.', word_grammar_tip_ar: 'فائدة: كلمة الشكر القياسية في الكردية.', word_grammar_tip_sorani: 'بۆ دەربڕینی ڕێزە.'
        }
      ]
    },
    {
      level_id: 'Beginner',
      lesson_id: 2,
      title_en: 'Numbers 1-5',
      title_ar: 'الأرقام ١-٥',
      title_sorani: 'ژمارەکان ١-٥',
      grammar_tip_en: 'Numbers come before nouns.',
      grammar_tip_ar: 'الأرقام تسبق الأسماء دائماً في الكردية.',
      grammar_tip_sorani: 'ژمارە پێش ناو دێت.',
      content: [
        { word_sorani: 'یەک', word_english: 'One', word_arabic: 'واحد', example_sentence_sorani: 'یەک پياو لێرەیە.', example_sentence_translation_ar: 'رجل واحد هنا.', example_sentence_translation_en: 'One man is here.', word_grammar_tip_en: 'Number 1.', word_grammar_tip_ar: 'فائدة: الرقم واحد كأساس للعد.', word_grammar_tip_sorani: 'ژمارە یەکە.' },
        { word_sorani: 'دوو', word_english: 'Two', word_arabic: 'اثنان', example_sentence_sorani: 'دوو منداڵ یاری دەکەن.', example_sentence_translation_ar: 'طفلان يلعبان.', example_sentence_translation_en: 'Two children are playing.', word_grammar_tip_en: 'Number 2.', word_grammar_tip_ar: 'فائدة: الرقم اثنان يشبه اللغات الهندوأوروبية.', word_grammar_tip_sorani: 'ژمارە دووە.' },
        { word_sorani: 'سێ', word_english: 'Three', word_arabic: 'ثلاثة', example_sentence_sorani: 'سێ سێو بخۆ.', example_sentence_translation_ar: 'كل ثلاث تفاحات.', example_sentence_translation_en: 'Eat three apples.', word_grammar_tip_en: 'Number 3.', word_grammar_tip_ar: 'فائدة: يستخدم الرقم قبل المعدود.', word_grammar_tip_sorani: 'ژمارە سێیە.' }
      ]
    },
    {
      level_id: 'Beginner',
      lesson_id: 3,
      title_en: 'Family Roles',
      title_ar: 'أدوار العائلة',
      title_sorani: 'خێزان',
      grammar_tip_en: 'Use "-m" for possession.',
      grammar_tip_ar: 'استخدم اللاحقة "-م" للتعبير عن الملكية (لي).',
      grammar_tip_sorani: 'بۆ خاوەندارێتی جێناو بەکاربێنە.',
      content: [
        { word_sorani: 'دایک', word_english: 'Mother', word_arabic: 'أم', example_sentence_sorani: 'دایکم لە ماڵەوەیە.', example_sentence_translation_ar: 'أمي في المنزل.', example_sentence_translation_en: 'My mother is at home.', word_grammar_tip_en: 'Daik (Mother) + m (My).', word_grammar_tip_ar: 'فائدة: دایک تعني أم، وبإضافة م تصبح ملكية.', word_grammar_tip_sorani: 'دایک بناغەی ماڵە.' },
        { word_sorani: 'باوک', word_english: 'Father', word_arabic: 'أب', example_sentence_sorani: 'باوکم کار دەکات.', example_sentence_translation_ar: 'أبي يعمل.', example_sentence_translation_en: 'My father works.', word_grammar_tip_en: 'Bawk is father.', word_grammar_tip_ar: 'فائدة: باوك هو الأب في السورانية.', word_grammar_tip_sorani: 'باوک کار دەکات.' },
        { word_sorani: 'برا', word_english: 'Brother', word_arabic: 'أخ', example_sentence_sorani: 'برام قوتابییە.', example_sentence_translation_ar: 'أخي طالب.', example_sentence_translation_en: 'My brother is a student.', word_grammar_tip_en: 'Bra means brother.', word_grammar_tip_ar: 'فائدة: برا هي كلمة الأخ.', word_grammar_tip_sorani: 'برا پشتی برایە.' }
      ]
    },
    {
      level_id: 'Beginner',
      lesson_id: 4,
      title_en: 'Color Basics',
      title_ar: 'أساسيات الألوان',
      title_sorani: 'ڕەنگەکان',
      grammar_tip_en: 'Adjectives follow the noun.',
      grammar_tip_ar: 'تتبع الصفات الأسماء في اللغة الكردية.',
      grammar_tip_sorani: 'ڕەنگ دوای ناو دێت.',
      content: [
        { word_sorani: 'سوور', word_english: 'Red', word_arabic: 'أحمر', example_sentence_sorani: 'کراسێکی سوور.', example_sentence_translation_ar: 'قميص أحمر.', example_sentence_translation_en: 'A red shirt.', word_grammar_tip_en: 'Sûr is red.', word_grammar_tip_ar: 'فائدة: سوور تعني أحمر، تتبع الموصوف.', word_grammar_tip_sorani: 'سوور ڕەنگی گەرمە.' },
        { word_sorani: 'شین', word_english: 'Blue', word_arabic: 'أزرق', example_sentence_sorani: 'دەریا شینە.', example_sentence_translation_ar: 'البحر أزرق.', example_sentence_translation_en: 'The sea is blue.', word_grammar_tip_en: 'Shîn is blue.', word_grammar_tip_ar: 'فائدة: شین تصف السماء والبحر.', word_grammar_tip_sorani: 'شین ڕەنگی ئاسمانە.' },
        { word_sorani: 'سەوز', word_english: 'Green', word_arabic: 'أخضر', example_sentence_sorani: 'درەختەکە سەوزە.', example_sentence_translation_ar: 'الشجرة خضراء.', example_sentence_translation_en: 'The tree is green.', word_grammar_tip_en: 'Sewz is green.', word_grammar_tip_ar: 'فائدة: سەوز تعني اللون الأخضر الطبيعي.', word_grammar_tip_sorani: 'سەوز ڕەنگی سروشتە.' }
      ]
    },
    {
      level_id: 'Beginner',
      lesson_id: 5,
      title_en: 'Common Actions',
      title_ar: 'أفعال شائعة',
      title_sorani: 'کردارەکان',
      grammar_tip_en: '"De-" prefix for present continuous.',
      grammar_tip_ar: 'البادئة "دە-" تستخدم للدلالة على الزمن الحاضر المستمر.',
      grammar_tip_sorani: 'نیشانەی کاتی ئێستا "دە-" یە.',
      content: [
        { word_sorani: 'دەخۆم', word_english: 'I eat', word_arabic: 'آكل', example_sentence_sorani: 'من نان دەخۆم.', example_sentence_translation_ar: 'أنا آكل الخبز.', example_sentence_translation_en: 'I am eating bread.', word_grammar_tip_en: 'Root is "Xwarden".', word_grammar_tip_ar: 'فائدة: البادئة دە واللاحقة م تحددان الفاعل.', word_grammar_tip_sorani: 'خواردن کردارە.' },
        { word_sorani: 'دەچم', word_english: 'I go', word_arabic: 'أذهب', example_sentence_sorani: 'دەچم بۆ قوتابخانە.', example_sentence_translation_ar: 'أذهب إلى المدرسة.', example_sentence_translation_en: 'I am going to school.', word_grammar_tip_en: 'Root is "Chûn".', word_grammar_tip_ar: 'فائدة: دەچم فعل مضارع يدل على الحركة.', word_grammar_tip_sorani: 'چوون بۆ ئاراستەیە.' },
        { word_sorani: 'دەخوێنم', word_english: 'I read/study', word_arabic: 'أقرأ/أدرس', example_sentence_sorani: 'من کتێب دەخوێنم.', example_sentence_translation_ar: 'أنا أقرأ كتاباً.', example_sentence_translation_en: 'I am reading a book.', word_grammar_tip_en: 'Root is "Xwêndin".', word_grammar_tip_ar: 'فائدة: تستخدم للقراءة والدراسة معاً.', word_grammar_tip_sorani: 'خوێندن ژیانە.' }
      ]
    },
    {
      level_id: 'Beginner',
      lesson_id: 6,
      title_en: 'Food Essentials',
      title_ar: 'أساسيات الطعام',
      title_sorani: 'خواردن',
      grammar_tip_en: 'Adding "-eke" for "the".',
      grammar_tip_ar: 'إضافة اللاحقة "-ەکە" تجعل الاسم معرفاً (ال التعريف).',
      grammar_tip_sorani: 'بۆ ناساندنی ناو "-ەکە" بەکار بێنە.',
      content: [
        { word_sorani: 'نان', word_english: 'Bread', word_arabic: 'خبز', example_sentence_sorani: 'نانەکە گەرمە.', example_sentence_translation_ar: 'الخبز ساخن.', example_sentence_translation_en: 'The bread is hot.', word_grammar_tip_en: 'Nan is bread.', word_grammar_tip_ar: 'فائدة: نان تعني الخبز، وبإضافة اللاحقة تصبح الخبز.', word_grammar_tip_sorani: 'نان خواردنی سەرەکییە.' },
        { word_sorani: 'ئاو', word_english: 'Water', word_arabic: 'ماء', example_sentence_sorani: 'ئاو دەخۆمەوە.', example_sentence_translation_ar: 'أنا أشرب الماء.', example_sentence_translation_en: 'I am drinking water.', word_grammar_tip_en: 'Aw is water.', word_grammar_tip_ar: 'فائدة: ئاو هي كلمة الماء، تستخدم مع فعل الشرب.', word_grammar_tip_sorani: 'ئاو ژیانە.' },
        { word_sorani: 'ماست', word_english: 'Yogurt', word_arabic: 'لبن', example_sentence_sorani: 'ماستم دەوێت.', example_sentence_translation_ar: 'أريد لبناً.', example_sentence_translation_en: 'I want yogurt.', word_grammar_tip_en: 'Mast is yogurt.', word_grammar_tip_ar: 'فائدة: ماست كلمة كردية أصيلة.', word_grammar_tip_sorani: 'ماست بەسوودە.' }
      ]
    },
    {
      level_id: 'Beginner',
      lesson_id: 7,
      title_en: 'Weekly Cycle',
      title_ar: 'دورة الأسبوع',
      title_sorani: 'ڕۆژەکان',
      grammar_tip_en: 'Week starts on Saturday.',
      grammar_tip_ar: 'يبدأ الأسبوع في التقويم الكردي بيوم السبت.',
      grammar_tip_sorani: 'هەفتە لە شەممەوە دەست پێ دەکات.',
      content: [
        { word_sorani: 'شەممە', word_english: 'Saturday', word_arabic: 'السبت', example_sentence_sorani: 'شەممە پشووە.', example_sentence_translation_ar: 'السبت هو عطلة.', example_sentence_translation_en: 'Saturday is a holiday.', word_grammar_tip_en: 'Shemme is Saturday.', word_grammar_tip_ar: 'فائدة: شەممە هي بداية الأسبوع الرسمي.', word_grammar_tip_sorani: 'شەممە ڕۆژی یەکەمە.' },
        { word_sorani: 'یەکشەممە', word_english: 'Sunday', word_arabic: 'الأحد', example_sentence_sorani: 'یەکشەممە دەچمە کار.', example_sentence_translation_ar: 'أذهب للعمل يوم الأحد.', example_sentence_translation_en: 'I go to work on Sunday.', word_grammar_tip_en: 'Yek (One) + Shemme.', word_grammar_tip_ar: 'فائدة: ييك تعني واحد، مما يعني اليوم الأول بعد السبت.', word_grammar_tip_sorani: 'یەک + شەممە.' },
        { word_sorani: 'هەینی', word_english: 'Friday', word_arabic: 'الجمعة', example_sentence_sorani: 'هەینی ڕۆژێکی پیرۆزە.', example_sentence_translation_ar: 'الجمعة يوم مبارك.', example_sentence_translation_en: 'Friday is a holy day.', word_grammar_tip_en: 'Heînî is Friday.', word_grammar_tip_ar: 'فائدة: هەینی هي نهاية الأسبوع الدينية.', word_grammar_tip_sorani: 'هەینی ڕۆژی نوێژە.' }
      ]
    },
    {
      level_id: 'Beginner',
      lesson_id: 8,
      title_en: 'Human Body',
      title_ar: 'جسم الإنسان',
      title_sorani: 'لەش',
      grammar_tip_en: 'Enclitic pronouns for body parts.',
      grammar_tip_ar: 'نستخدم الضمائر المتصلة للتعبير عن أجزاء الجسم الخاصة بنا.',
      grammar_tip_sorani: 'جێناوی لکاو بەکار بێنە.',
      content: [
        { word_sorani: 'سەر', word_english: 'Head', word_arabic: 'رأس', example_sentence_sorani: 'سەرم دێشێت.', example_sentence_translation_ar: 'رأسي يؤلمني.', example_sentence_translation_en: 'My head hurts.', word_grammar_tip_en: 'Ser is head.', word_grammar_tip_ar: 'فائدة: سەر تعني رأس، وبإضافة م تصبح ملكية.', word_grammar_tip_sorani: 'سەر لە سەرەوەیە.' },
        { word_sorani: 'دەست', word_english: 'Hand', word_arabic: 'يد', example_sentence_sorani: 'دەستت بشۆ.', example_sentence_translation_ar: 'اغسل يدك.', example_sentence_translation_en: 'Wash your hand.', word_grammar_tip_en: 'Dest is hand.', word_grammar_tip_ar: 'فائدة: دەست تستخدم لليد والساعد غالباً.', word_grammar_tip_sorani: 'دەست بۆ کارە.' },
        { word_sorani: 'چاو', word_english: 'Eye', word_arabic: 'عين', example_sentence_sorani: 'چاوی شین.', example_sentence_translation_ar: 'عين زرقاء.', example_sentence_translation_en: 'Blue eye.', word_grammar_tip_en: 'Chaw is eye.', word_grammar_tip_ar: 'فائدة: چاوی تعني "عين الـ" للإضافة.', word_grammar_tip_sorani: 'چاو بۆ بینینە.' }
      ]
    },
    {
      level_id: 'Beginner',
      lesson_id: 9,
      title_en: 'The Sanctuary (Home)',
      title_ar: 'الملاذ (المنزل)',
      title_sorani: 'ماڵ',
      grammar_tip_en: '"Le" (At) preposition.',
      grammar_tip_ar: 'حرف الجر "لە" يستخدم للدلالة على المكان أو المنشأ.',
      grammar_tip_sorani: '"لە" بۆ شوێن بەکار دێت.',
      content: [
        { word_sorani: 'ماڵ', word_english: 'Home', word_arabic: 'منزل', example_sentence_sorani: 'من لە ماڵەوەم.', example_sentence_translation_ar: 'أنا في المنزل.', example_sentence_translation_en: 'I am at home.', word_grammar_tip_en: 'Mal is home.', word_grammar_tip_ar: 'فائدة: ماڵ تعني البيت والوطن أحياناً.', word_grammar_tip_sorani: 'ماڵ جێی ئارامییە.' },
        { word_sorani: 'دەرگا', word_english: 'Door', word_arabic: 'باب', example_sentence_sorani: 'دەرگاکە دابخە.', example_sentence_translation_ar: 'أغلق الباب.', example_sentence_translation_en: 'Close the door.', word_grammar_tip_en: 'Darga is door.', word_grammar_tip_ar: 'فائدة: دەرگا هي كلمة الباب، تذكر إضافة "ەکە" للتعريف.', word_grammar_tip_sorani: 'دەرگا بۆ پاراستنە.' },
        { word_sorani: 'پەنجەرە', word_english: 'Window', word_arabic: 'نافذة', example_sentence_sorani: 'پەنجەرەکە بکەرەوە.', example_sentence_translation_ar: 'افتح النافذة.', example_sentence_translation_en: 'Open the window.', word_grammar_tip_en: 'Penjere is window.', word_grammar_tip_ar: 'فائدة: پەنجەرە كلمة مستعارة شائعة.', word_grammar_tip_sorani: 'پەنجەرە بۆ ڕووناکییە.' }
      ]
    },
    {
      level_id: 'Beginner',
      lesson_id: 10,
      title_en: 'Asking Questions',
      title_ar: 'طرح الأسئلة',
      title_sorani: 'پرسیارکردن',
      grammar_tip_en: 'Interrogative words.',
      grammar_tip_ar: 'أدوات الاستفهام في الكردية سهلة الاستخدام.',
      grammar_tip_sorani: 'بۆ پرسیار جێناوی پرسیاری بەکاربێنە.',
      content: [
        { word_sorani: 'کێ', word_english: 'Who', word_arabic: 'من', example_sentence_sorani: 'تۆ کێیت؟', example_sentence_translation_ar: 'من أنت؟', example_sentence_translation_en: 'Who are you?', word_grammar_tip_en: 'Kê for people.', word_grammar_tip_ar: 'فائدة: کێ تستخدم للسؤال عن العاقل.', word_grammar_tip_sorani: 'بۆ کەسە.' },
        { word_sorani: 'چی', word_english: 'What', word_arabic: 'ماذا', example_sentence_sorani: 'ئەوە چییە؟', example_sentence_translation_ar: 'ماذا يكون ذلك؟', example_sentence_translation_en: 'What is that?', word_grammar_tip_en: 'Chî for things.', word_grammar_tip_ar: 'فائدة: چی تستخدم للسؤال عن غير العاقل.', word_grammar_tip_sorani: 'بۆ شتە.' },
        { word_sorani: 'لەکوێ', word_english: 'Where', word_arabic: 'أين', example_sentence_sorani: 'ماڵت لەکوێیە؟', example_sentence_translation_ar: 'أين منزلك؟', example_sentence_translation_en: 'Where is your home?', word_grammar_tip_en: 'Lekwê for location.', word_grammar_tip_ar: 'فائدة: لەکوێ للسؤال عن المكان.', word_grammar_tip_sorani: 'بۆ شوێنە.' }
      ]
    }
  ];

  // INTERMEDIATE LESSONS (11-20)
  const intermediateLessons: Lesson[] = [
    {
      level_id: 'Intermediate',
      lesson_id: 11,
      title_en: 'School Life',
      title_ar: 'الحياة المدرسية',
      title_sorani: 'قوتابخانە',
      grammar_tip_en: 'Plural suffix "-kan".',
      grammar_tip_ar: 'اللاحقة "-كان" تستخدم للجمع المعرف.',
      grammar_tip_sorani: 'بۆ کۆکردنەوەی ناو "-کان" زیاد دەکرێت.',
      content: [
        { word_sorani: 'قوتابخانە', word_english: 'School', word_arabic: 'مدرسة', example_sentence_sorani: 'قوتابخانە گەورەیە.', example_sentence_translation_ar: 'المدرسة كبيرة.', example_sentence_translation_en: 'The school is big.', word_grammar_tip_en: 'Compound word.', word_grammar_tip_ar: 'فائدة: قوتابخانە تتكون من قوتابی (طالب) و خانە (بيت).', word_grammar_tip_sorani: 'جێی فێربوونە.' },
        { word_sorani: 'مامۆستا', word_english: 'Teacher', word_arabic: 'معلم', example_sentence_sorani: 'مامۆستا وانە دەڵێتەوە.', example_sentence_translation_ar: 'المعلم يلقي الدرس.', example_sentence_translation_en: 'The teacher gives a lesson.', word_grammar_tip_en: 'Gender neutral.', word_grammar_tip_ar: 'فائدة: مامۆستا تطلق على المعلم والمعلمة.', word_grammar_tip_sorani: 'ڕێزی بگرە.' },
        { word_sorani: 'تاقیکردنەوە', word_english: 'Exam', word_arabic: 'امتحان', example_sentence_sorani: 'ئەمڕۆ تاقیکردنەوەم هەیە.', example_sentence_translation_ar: 'عندي امتحان اليوم.', example_sentence_translation_en: 'I have an exam today.', word_grammar_tip_en: 'Common in Sorani.', word_grammar_tip_ar: 'فائدة: تاقیکردنەوە هي المرادف الكردي الأصيل لامتحان.', word_grammar_tip_sorani: 'هەوڵ بدە بۆی.' }
      ]
    },
    {
      level_id: 'Intermediate',
      lesson_id: 12,
      title_en: 'Natural Elements',
      title_ar: 'العناصر الطبيعية',
      title_sorani: 'سروشت',
      grammar_tip_en: 'Weather patterns.',
      grammar_tip_ar: 'وصف أحوال الطقس باستخدام الأسماء البسيطة.',
      grammar_tip_sorani: 'سروشت جوانە.',
      content: [
        { word_sorani: 'باران', word_english: 'Rain', word_arabic: 'مطر', example_sentence_sorani: 'باران دەبارێت.', example_sentence_translation_ar: 'المطر ينزل.', example_sentence_translation_en: 'It is raining.', word_grammar_tip_en: 'Noun to verb.', word_grammar_tip_ar: 'فائدة: باران تعني مطر، ودەبارێت تعني يُمطر.', word_grammar_tip_sorani: 'خێر و بێرە.' },
        { word_sorani: 'بەفر', word_english: 'Snow', word_arabic: 'ثلج', example_sentence_sorani: 'بەفرێکی سپی.', example_sentence_translation_ar: 'ثلج أبيض.', example_sentence_translation_en: 'A white snow.', word_grammar_tip_en: 'Cold weather.', word_grammar_tip_ar: 'فائدة: بەفر تعني الثلج، وهو شائع في جبال كردستان.', word_grammar_tip_sorani: 'سپێتییە.' },
        { word_sorani: 'هەور', word_english: 'Cloud', word_arabic: 'سحاب', example_sentence_sorani: 'ئاسمان هەورە.', example_sentence_translation_ar: 'السماء غائمة.', example_sentence_translation_en: 'The sky is cloudy.', word_grammar_tip_en: 'Hewr is cloud.', word_grammar_tip_ar: 'فائدة: هەور تعني سحاب أو غيم.', word_grammar_tip_sorani: 'بۆ بارانە.' }
      ]
    },
    {
      level_id: 'Intermediate',
      lesson_id: 13,
      title_en: 'Emotions',
      title_ar: 'العواطف',
      title_sorani: 'هەستەکان',
      grammar_tip_en: 'Using "Dil" (Heart) for feelings.',
      grammar_tip_ar: 'استخدام كلمة "دڵ" (قلب) لتكوين صفات المشاعر.',
      grammar_tip_sorani: 'دڵ بناغەی هەستە.',
      content: [
        { word_sorani: 'دڵخۆش', word_english: 'Happy', word_arabic: 'سعيد', example_sentence_sorani: 'من زۆر دڵخۆشم.', example_sentence_translation_ar: 'أنا سعيد جداً.', example_sentence_translation_en: 'I am very happy.', word_grammar_tip_en: 'Dil (Heart) + Xosh (Good).', word_grammar_tip_ar: 'فائدة: دڵخۆش تعني حرفياً "طيب القلب" أو سعيد.', word_grammar_tip_sorani: 'هەستێکی باشە.' },
        { word_sorani: 'خەمبار', word_english: 'Sad', word_arabic: 'حزين', example_sentence_sorani: 'بۆچی خەمباریت؟', example_sentence_translation_ar: 'لماذا أنت حزين؟', example_sentence_translation_en: 'Why are you sad?', word_grammar_tip_en: 'Xem (Grief) + Bar (Loaded).', word_grammar_tip_ar: 'فائدة: خەمبار تعني حزين أو محملاً بالهموم.', word_grammar_tip_sorani: 'هەستی ناخۆشە.' },
        { word_sorani: 'توڕە', word_english: 'Angry', word_arabic: 'غاضب', example_sentence_sorani: 'ئەو توڕەیە.', example_sentence_translation_ar: 'هو غاضب.', example_sentence_translation_en: 'He is angry.', word_grammar_tip_en: 'Turre is angry.', word_grammar_tip_ar: 'فائدة: توڕە تعني الغضب أو الانفعال.', word_grammar_tip_sorani: 'کاتی هەڵچوونە.' }
      ]
    },
    {
      level_id: 'Intermediate',
      lesson_id: 14,
      title_en: 'Navigating the City',
      title_ar: 'التنقل في المدينة',
      title_sorani: 'شار',
      grammar_tip_en: 'Directional prepositions.',
      grammar_tip_ar: 'حروف الجر المكانية تساعد في وصف الوجهات.',
      grammar_tip_sorani: 'بۆ ئاراستە بەکار دێت.',
      content: [
        { word_sorani: 'بازاڕ', word_english: 'Market', word_arabic: 'سوق', example_sentence_sorani: 'دەچم بۆ بازاڕ.', example_sentence_translation_ar: 'أذهب إلى السوق.', example_sentence_translation_en: 'I am going to the market.', word_grammar_tip_en: 'Public market.', word_grammar_tip_ar: 'فائدة: بازاڕ هي الكلمة الشرقية للسوق، شائعة جداً.', word_grammar_tip_sorani: 'جێی کڕینە.' },
        { word_sorani: 'ڕێگا', word_english: 'Road/Path', word_arabic: 'طريق', example_sentence_sorani: 'ڕێگاکە دوورە.', example_sentence_translation_ar: 'الطريق بعيد.', example_sentence_translation_en: 'The road is long.', word_grammar_tip_en: 'Rêga is road.', word_grammar_tip_ar: 'فائدة: ڕێگا تعني الطريق أو السبيل.', word_grammar_tip_sorani: 'بۆ گەییشتنە.' },
        { word_sorani: 'نەخۆشخانە', word_english: 'Hospital', word_arabic: 'مستشفى', example_sentence_sorani: 'نەخۆشخانەی شار.', example_sentence_translation_ar: 'مستشفى المدينة.', example_sentence_translation_en: 'The city hospital.', word_grammar_tip_en: 'Compound for health.', word_grammar_tip_ar: 'فائدة: تتكون من نەخۆش (مريض) و خانە (بيت).', word_grammar_tip_sorani: 'جێی چارەسەرە.' }
      ]
    },
    {
      level_id: 'Intermediate',
      lesson_id: 15,
      title_en: 'Fashion & Clothes',
      title_ar: 'الأزياء والملابس',
      title_sorani: 'جل و بەرگ',
      grammar_tip_en: 'Possessive adjectives with clothing.',
      grammar_tip_ar: 'إضافة الضمائر المتصلة بالملابس لوصف الملكية.',
      grammar_tip_sorani: 'بۆ پۆشینە.',
      content: [
        { word_sorani: 'کراس', word_english: 'Shirt/Dress', word_arabic: 'قميص/ثوب', example_sentence_sorani: 'کراسێکی سپی.', example_sentence_translation_ar: 'قميص أبيض.', example_sentence_translation_en: 'A white shirt.', word_grammar_tip_en: 'Kras is shirt.', word_grammar_tip_ar: 'فائدة: کراس تعني القميص للرجال أو الثوب للنساء.', word_grammar_tip_sorani: 'بۆ لەبەرکردنە.' },
        { word_sorani: 'پێڵاو', word_english: 'Shoes', word_arabic: 'حذاء', example_sentence_sorani: 'پێڵاوەکەم نوێیە.', example_sentence_translation_ar: 'حذائي جديد.', example_sentence_translation_en: 'My shoe is new.', word_grammar_tip_en: 'Pêlaw for shoes.', word_grammar_tip_ar: 'فائدة: پێڵاو تعني الحذاء، وبإضافة م تصبح حذائي.', word_grammar_tip_sorani: 'بۆ قاچە.' },
        { word_sorani: 'کڵاو', word_english: 'Hat', word_arabic: 'قبعة', example_sentence_sorani: 'کڵاوێکی جوان.', example_sentence_translation_ar: 'قبعة جميلة.', example_sentence_translation_en: 'A beautiful hat.', word_grammar_tip_en: 'Klaw is hat.', word_grammar_tip_ar: 'فائدة: کڵاو تستخدم لوصف غطاء الرأس التقليدي أو الحديث.', word_grammar_tip_sorani: 'بۆ سەرە.' }
      ]
    },
    {
      level_id: 'Intermediate',
      lesson_id: 16,
      title_en: 'Culinary Tools',
      title_ar: 'أدوات الطهي',
      title_sorani: 'چێشتخانە',
      grammar_tip_en: 'Noun-noun compounds.',
      grammar_tip_ar: 'تكوين الأسماء المركبة في المطبخ.',
      grammar_tip_sorani: 'بۆ خواردن دروستکردنە.',
      content: [
        { word_sorani: 'کەوچک', word_english: 'Spoon', word_arabic: 'ملعقة', example_sentence_sorani: 'کەوچکێکی بچووک.', example_sentence_translation_ar: 'ملعقة صغيرة.', example_sentence_translation_en: 'A small spoon.', word_grammar_tip_en: 'Kitchen tool.', word_grammar_tip_ar: 'فائدة: کەوچک تعني الملعقة، وهي ضرورية للأكل.', word_grammar_tip_sorani: 'بۆ خواردنە.' },
        { word_sorani: 'پەرداخ', word_english: 'Glass/Cup', word_arabic: 'كوب/قدح', example_sentence_sorani: 'پەرداخێک ئاو.', example_sentence_translation_ar: 'كوب من الماء.', example_sentence_translation_en: 'A glass of water.', word_grammar_tip_en: 'For drinking.', word_grammar_tip_ar: 'فائدة: پەرداخ تستخدم للأواني الزجاجية للشرب.', word_grammar_tip_sorani: 'بۆ ئاوە.' },
        { word_sorani: 'قاپ', word_english: 'Plate', word_arabic: 'صحن', example_sentence_sorani: 'قاپەکە بشۆ.', example_sentence_translation_ar: 'اغسل الصحن.', example_sentence_translation_en: 'Wash the plate.', word_grammar_tip_en: 'Dish item.', word_grammar_tip_ar: 'فائدة: قاپ تعني الصحن أو الطبق.', word_grammar_tip_sorani: 'بۆ تێکردنی خواردنە.' }
      ]
    },
    {
      level_id: 'Intermediate',
      lesson_id: 17,
      title_en: 'Leisure Activities',
      title_ar: 'الأنشطة الترفيهية',
      title_sorani: 'خولیایەکان',
      grammar_tip_en: 'Infinitive markers.',
      grammar_tip_ar: 'استخدام المصادر لوصف الهوايات.',
      grammar_tip_sorani: 'بۆ کاتی پشووە.',
      content: [
        { word_sorani: 'مەلە', word_english: 'Swimming', word_arabic: 'سباحة', example_sentence_sorani: 'من حەزم لە مەلەیە.', example_sentence_translation_ar: 'أنا أحب السباحة.', example_sentence_translation_en: 'I like swimming.', word_grammar_tip_en: 'Mele is swimming.', word_grammar_tip_ar: 'فائدة: مەلە تعني السباحة كنشاط بدني.', word_grammar_tip_sorani: 'لە ئاودایە.' },
        { word_sorani: 'گۆرانی', word_english: 'Singing', word_arabic: 'غناء', example_sentence_sorani: 'گۆرانییەکی خۆش.', example_sentence_translation_ar: 'أغنية جميلة.', example_sentence_translation_en: 'A nice song.', word_grammar_tip_en: 'Goranî is song.', word_grammar_tip_ar: 'فائدة: گۆرانی تعني الأغنية أو فعل الغناء.', word_grammar_tip_sorani: 'ئاوازە.' },
        { word_sorani: 'وەرزش', word_english: 'Exercise/Sports', word_arabic: 'رياضة', example_sentence_sorani: 'وەرزش بکە.', example_sentence_translation_ar: 'مارس الرياضة.', example_sentence_translation_en: 'Do some exercise.', word_grammar_tip_en: 'Werzish for sports.', word_grammar_tip_ar: 'فائدة: وەرزش هي الكلمة العامة للنشاط الرياضي.', word_grammar_tip_sorani: 'بۆ تەندروستییە.' }
      ]
    },
    {
      level_id: 'Intermediate',
      lesson_id: 18,
      title_en: 'Life Flow (Routine)',
      title_ar: 'تدفق الحياة (الروتين)',
      title_sorani: 'کاروبار',
      grammar_tip_en: 'Reflexive and compound verbs.',
      grammar_tip_ar: 'الأفعال المركبة تصف النشاطات اليومية بدقة.',
      grammar_tip_sorani: 'بۆ ژیانە.',
      content: [
        { word_sorani: 'هەستان', word_english: 'Waking up/Rising', word_arabic: 'استيقاظ', example_sentence_sorani: 'زوو هەستان.', example_sentence_translation_ar: 'الاستيقاظ مبكراً.', example_sentence_translation_en: 'Waking up early.', word_grammar_tip_en: 'Hestan is rising.', word_grammar_tip_ar: 'فائدة: هەستان تستخدم للنهوض من النوم أو الوقوف.', word_grammar_tip_sorani: 'سەرەتای ڕۆژە.' },
        { word_sorani: 'خەوتن', word_english: 'Sleeping', word_arabic: 'نوم', example_sentence_sorani: 'درەنگ خەوتن.', example_sentence_translation_ar: 'النوم متأخراً.', example_sentence_translation_en: 'Sleeping late.', word_grammar_tip_en: 'Xewtin is sleep.', word_grammar_tip_ar: 'فائدة: خەوتن هي المصدر لفعل النوم.', word_grammar_tip_sorani: 'کۆتایی ڕۆژە.' },
        { word_sorani: 'پشوو', word_english: 'Rest/Break', word_arabic: 'استراحة', example_sentence_sorani: 'پشوویەک بدە.', example_sentence_translation_ar: 'خذ استراحة.', example_sentence_translation_en: 'Take a break.', word_grammar_tip_en: 'Pshû is rest.', word_grammar_tip_ar: 'فائدة: پشوو تعني الراحة أو العطلة القصيرة.', word_grammar_tip_sorani: 'بۆ پشووە.' }
      ]
    },
    {
      level_id: 'Intermediate',
      lesson_id: 19,
      title_en: 'The Animal Kingdom',
      title_ar: 'مملكة الحيوان',
      title_sorani: 'ئاژەڵ',
      grammar_tip_en: 'Plural markers for life.',
      grammar_tip_ar: 'الأسماء الجمع للحيوانات تتبع القاعدة العامة "-كان".',
      grammar_tip_sorani: 'ئاژەڵ دۆستە.',
      content: [
        { word_sorani: 'پشیلە', word_english: 'Cat', word_arabic: 'قطة', example_sentence_sorani: 'پشیلەیەکی نەرم.', example_sentence_translation_ar: 'قطة ناعمة.', example_sentence_translation_en: 'A soft cat.', word_grammar_tip_en: 'Pshîle is cat.', word_grammar_tip_ar: 'فائدة: پشیلە هي القطة، حيوان أليف شائع.', word_grammar_tip_sorani: 'ماڵییە.' },
        { word_sorani: 'سەگ', word_english: 'Dog', word_arabic: 'كلب', example_sentence_sorani: 'سەگی پاسەوان.', example_sentence_translation_ar: 'كلب حراسة.', example_sentence_translation_en: 'Guardian dog.', word_grammar_tip_en: 'Seg is dog.', word_grammar_tip_ar: 'فائدة: سەگ تعني الكلب، تضاف إليها الصفات بعدها.', word_grammar_tip_sorani: 'وەفادارە.' },
        { word_sorani: 'ئەسپ', word_english: 'Horse', word_arabic: 'حصان', example_sentence_sorani: 'ئەسپێکی بەهێز.', example_sentence_translation_ar: 'حصان قوي.', example_sentence_translation_en: 'A strong horse.', word_grammar_tip_en: 'Esp is horse.', word_grammar_tip_ar: 'فائدة: ئەسپ تعني الحصان، رمز القوة.', word_grammar_tip_sorani: 'بۆ سواربوونە.' }
      ]
    },
    {
      level_id: 'Intermediate',
      lesson_id: 20,
      title_en: 'Wayfarer (Travel)',
      title_ar: 'المسافر (السفر)',
      title_sorani: 'سەفەر',
      grammar_tip_en: 'Directional verbs.',
      grammar_tip_ar: 'أفعال السفر والرحلات تتطلب معرفة حروف الجر بدقة.',
      grammar_tip_sorani: 'بۆ گەڕانە.',
      content: [
        { word_sorani: 'فرۆکە', word_english: 'Airplane', word_arabic: 'طائرة', example_sentence_sorani: 'فرۆکەکە فڕی.', example_sentence_translation_ar: 'الطائرة طارت.', example_sentence_translation_en: 'The plane flew.', word_grammar_tip_en: 'Frôke is plane.', word_grammar_tip_ar: 'فائدة: فرۆکە تعني الطائرة، وسيلة سفر سريعة.', word_grammar_tip_sorani: 'بۆ ئاسمانە.' },
        { word_sorani: 'پاسپۆرت', word_english: 'Passport', word_arabic: 'جواز سفر', example_sentence_sorani: 'پاسپۆرتەکەم ونبوو.', example_sentence_translation_ar: 'فقدت جواز سفري.', example_sentence_translation_en: 'I lost my passport.', word_grammar_tip_en: 'Travel ID.', word_grammar_tip_ar: 'فائدة: باسبۆرت كلمة عالمية مستخدمة في الكردية.', word_grammar_tip_sorani: 'بۆ ناسنامەیە.' },
        { word_sorani: 'گەشت', word_english: 'Trip/Journey', word_arabic: 'رحلة', example_sentence_sorani: 'گەشتێکی دوور.', example_sentence_translation_ar: 'رحلة بعيدة.', example_sentence_translation_en: 'A long trip.', word_grammar_tip_en: 'Gesht for travel.', word_grammar_tip_ar: 'فائدة: گەشت تعني الرحلة أو النزهة الطويلة.', word_grammar_tip_sorani: 'بۆ خۆشییە.' }
      ]
    }
  ];

  // ADVANCED LESSONS (21-30)
  const advancedLessons: Lesson[] = [
    {
      level_id: 'Advanced',
      lesson_id: 21,
      title_en: 'Wellness & Medicine',
      title_ar: 'العافية والطب',
      title_sorani: 'تەندروستی',
      grammar_tip_en: 'Conditionals in health.',
      grammar_tip_ar: 'استخدام أفعال الشعور لوصف الحالات الصحية المعقدة.',
      grammar_tip_sorani: 'بۆ جەستەیە.',
      content: [
        { word_sorani: 'نەخۆش', word_english: 'Sick', word_arabic: 'مريض', example_sentence_sorani: 'من نەخۆشم.', example_sentence_translation_ar: 'أنا مريض.', example_sentence_translation_en: 'I am sick.', word_grammar_tip_en: 'State of being.', word_grammar_tip_ar: 'فائدة: نەخۆش تعني المريض، وتستخدم مع فعل الكينونة.', word_grammar_tip_sorani: 'بارودۆخی جەستەیە.' },
        { word_sorani: 'دەرمان', word_english: 'Medicine', word_arabic: 'دواء', example_sentence_sorani: 'دەرمانەکە بخۆ.', example_sentence_translation_ar: 'تناول الدواء.', example_sentence_translation_en: 'Take the medicine.', word_grammar_tip_en: 'Derman is medicine.', word_grammar_tip_ar: 'فائدة: دەرمان تعني العلاج أو الدواء الطبي.', word_grammar_tip_sorani: 'بۆ چارەسەرە.' },
        { word_sorani: 'پزیشک', word_english: 'Doctor', word_arabic: 'طبيب', example_sentence_sorani: 'پزیشکێکی پسپۆڕ.', example_sentence_translation_ar: 'طبيب متخصص.', example_sentence_translation_en: 'A specialist doctor.', word_grammar_tip_en: 'Formal title.', word_grammar_tip_ar: 'فائدة: بزیشك هي الكلمة الكردية الأصيلة للطبيب.', word_grammar_tip_sorani: 'زانا و شارەزایە.' }
      ]
    },
    {
      level_id: 'Advanced',
      lesson_id: 22,
      title_en: 'Professional Realm',
      title_ar: 'المجال المهني',
      title_sorani: 'کار',
      grammar_tip_en: 'Job suffixes.',
      grammar_tip_ar: 'تكوين مسميات الوظائف باستخدام لواحق المهن.',
      grammar_tip_sorani: 'بۆ داهاتووە.',
      content: [
        { word_sorani: 'ئیش', word_english: 'Job', word_arabic: 'شغل', example_sentence_sorani: 'ئیشی زۆر.', example_sentence_translation_ar: 'شغل كثير.', example_sentence_translation_en: 'A lot of work.', word_grammar_tip_en: 'Ish is work.', word_grammar_tip_ar: 'فائدة: ئیش تستخدم لوصف العمل اليومي.', word_grammar_tip_sorani: 'بۆ بژێوییە.' },
        { word_sorani: 'مووچە', word_english: 'Salary', word_arabic: 'راتب', example_sentence_sorani: 'مووچەی مانگانە.', example_sentence_translation_ar: 'راتب شهري.', example_sentence_translation_en: 'Monthly salary.', word_grammar_tip_en: 'Salary gains.', word_grammar_tip_ar: 'فائدة: مووچە تعني المستحقات المالية.', word_grammar_tip_sorani: 'مافی کارمەندە.' },
        { word_sorani: 'کۆبوونەوە', word_english: 'Meeting', word_arabic: 'اجتماع', example_sentence_sorani: 'کۆبوونەوەمان هەیە.', example_sentence_translation_ar: 'عندنا اجتماع.', example_sentence_translation_en: 'We have a meeting.', word_grammar_tip_en: 'Professional gathering.', word_grammar_tip_ar: 'فائدة: کۆبوونەوە هي الكلمة الرسمية للاجتماع.', word_grammar_tip_sorani: 'دانیشتنی فەرمییە.' }
      ]
    },
    {
      level_id: 'Advanced',
      lesson_id: 23,
      title_en: 'Digital Age',
      title_ar: 'العصر الرقمي',
      title_sorani: 'تەکنەلۆژیا',
      grammar_tip_en: 'Tech adaptations.',
      grammar_tip_ar: 'استخدام المصطلحات التقنية الحديثة داخل الجمل.',
      grammar_tip_sorani: 'بۆ سەردەمی نوێیە.',
      content: [
        { word_sorani: 'مۆبایل', word_english: 'Mobile', word_arabic: 'جوال', example_sentence_sorani: 'مۆبایلەکە بشارەوە.', example_sentence_translation_ar: 'خبئ الجوال.', example_sentence_translation_en: 'Hide the mobile.', word_grammar_tip_en: 'Standard term.', word_grammar_tip_ar: 'فائدة: مۆبایل هي الأكثر شيوعاً.', word_grammar_tip_sorani: 'بۆ پەیوەندییە.' },
        { word_sorani: 'ئینتەرنێت', word_english: 'Internet', word_arabic: 'إنترنت', example_sentence_sorani: 'ئینتەرنێت خاوە.', example_sentence_translation_ar: 'الإنترنت بطيء.', example_sentence_translation_en: 'The internet is slow.', word_grammar_tip_en: 'Connectivity.', word_grammar_tip_ar: 'فائدة: ئینتەرنێت تستخدم كاسم معرف.', word_grammar_tip_sorani: 'تۆڕی جیهانییە.' },
        { word_sorani: 'ئەپڵیکەیشن', word_english: 'Application', word_arabic: 'تطبيق', example_sentence_sorani: 'ئەپڵیکەیشنێکی نوێ.', example_sentence_translation_ar: 'تطبيق جديد.', example_sentence_translation_en: 'A new application.', word_grammar_tip_en: 'Digital tool.', word_grammar_tip_ar: 'فائدة: ئەپڵیکەیشن تستخدم للتطبيقات الذكية.', word_grammar_tip_sorani: 'بۆ مۆبایلە.' }
      ]
    },
    {
      level_id: 'Advanced',
      lesson_id: 24,
      title_en: 'Environment',
      title_ar: 'البيئة',
      title_sorani: 'ژینگە',
      grammar_tip_en: 'Ecological terms.',
      grammar_tip_ar: 'وصف الطبيعة والبيئة باستخدام مفردات متقدمة.',
      grammar_tip_sorani: 'بۆ زەوییە.',
      content: [
        { word_sorani: 'ژینگە', word_english: 'Environment', word_arabic: 'بيئة', example_sentence_sorani: 'ژینگە بپارێزە.', example_sentence_translation_ar: 'احمِ البيئة.', example_sentence_translation_en: 'Protect the environment.', word_grammar_tip_en: 'Ecology.', word_grammar_tip_ar: 'فائدة: ژینگە تعني الوسط المحيط.', word_grammar_tip_sorani: 'دەوروبەری ئێمەیە.' },
        { word_sorani: 'پیسبوون', word_english: 'Pollution', word_arabic: 'تلوث', example_sentence_sorani: 'پیسبوونی هەوا.', example_sentence_translation_ar: 'تلوث الهواء.', example_sentence_translation_en: 'Air pollution.', word_grammar_tip_en: 'Environment threat.', word_grammar_tip_ar: 'فائدة: پیسبوون تدل على عدم النظافة البيئية.', word_grammar_tip_sorani: 'خراپە بۆ تەندروستی.' },
        { word_sorani: 'پاراستن', word_english: 'Protection', word_arabic: 'حماية', example_sentence_sorani: 'پاراستنی سروشت.', example_sentence_translation_ar: 'حماية الطبيعة.', example_sentence_translation_en: 'Protecting nature.', word_grammar_tip_en: 'Preservation.', word_grammar_tip_ar: 'فائدة: پاراستن تعني الحفاظ والوقاية.', word_grammar_tip_sorani: 'ئەرکی ئێمەیە.' }
      ]
    },
    {
      level_id: 'Advanced',
      lesson_id: 25,
      title_en: 'Traditions',
      title_ar: 'التقاليد',
      title_sorani: 'کولتوور',
      grammar_tip_en: 'Culture points.',
      grammar_tip_ar: 'المفاهيم الثقافية تتجلى في الأعياد والضيافة.',
      grammar_tip_sorani: 'ناسنامەیە.',
      content: [
        { word_sorani: 'نەورۆز', word_english: 'Newroz', word_arabic: 'نوروز', example_sentence_sorani: 'جەژنی نەورۆز.', example_sentence_translation_ar: 'عيد نوروز.', example_sentence_translation_en: 'Newroz festival.', word_grammar_tip_en: 'Kurdish New Year.', word_grammar_tip_ar: 'فائدة: نەورۆز هو العيد القومي الأهم.', word_grammar_tip_sorani: 'سەری ساڵە.' },
        { word_sorani: 'میوان', word_english: 'Guest', word_arabic: 'ضيف', example_sentence_sorani: 'میوانمان هەیە.', example_sentence_translation_ar: 'عندنا ضيف.', example_sentence_translation_en: 'We have a guest.', word_grammar_tip_en: 'Hospitality.', word_grammar_tip_ar: 'فائدة: میوان تعني الضيف، والكرم واجب.', word_grammar_tip_sorani: 'ڕێزی بگرە.' },
        { word_sorani: 'جلوبەرگ', word_english: 'Clothes', word_arabic: 'زي/ثياب', example_sentence_sorani: 'جلوبەرگی کوردی.', example_sentence_translation_ar: 'الزي الكردي.', example_sentence_translation_en: 'Kurdish clothing.', word_grammar_tip_en: 'Clothing noun.', word_grammar_tip_ar: 'فائدة: جلوبەرگ هي الكلمة الشاملة للثياب.', word_grammar_tip_sorani: 'بۆ خۆداپۆشینە.' }
      ]
    },
    {
      level_id: 'Advanced',
      lesson_id: 26,
      title_en: 'History',
      title_ar: 'التاريخ',
      title_sorani: 'مێژوو',
      grammar_tip_en: 'Time markers.',
      grammar_tip_ar: 'وصف الماضي والقدم باستخدام لواحق الصفات.',
      grammar_tip_sorani: 'ڕابردووە.',
      content: [
        { word_sorani: 'مێژوو', word_english: 'History', word_arabic: 'تاريخ', example_sentence_sorani: 'مێژووی دوور.', example_sentence_translation_ar: 'تاريخ بعيد.', example_sentence_translation_en: 'Ancient history.', word_grammar_tip_en: 'Chronology.', word_grammar_tip_ar: 'فائدة: مێژوو تعني التاريخ الموثق.', word_grammar_tip_sorani: 'زانیارییە.' },
        { word_sorani: 'قەڵا', word_english: 'Citadel', word_arabic: 'قلعة', example_sentence_sorani: 'قەڵای هەولێر.', example_sentence_translation_ar: 'قلعة أربيل.', example_sentence_translation_en: 'Erbil Citadel.', word_grammar_tip_en: 'Fortress.', word_grammar_tip_ar: 'فائدة: قەڵا هي القلعة الحصينة.', word_grammar_tip_sorani: 'بۆ پاراستنە.' },
        { word_sorani: 'کۆن', word_english: 'Ancient', word_arabic: 'قديم', example_sentence_sorani: 'کتێبێکی کۆن.', example_sentence_translation_ar: 'كتاب قديم.', example_sentence_translation_en: 'An old book.', word_grammar_tip_en: 'Old state.', word_grammar_tip_ar: 'فائدة: کۆن صفة للأشياء القديمة.', word_grammar_tip_sorani: 'تازە نییە.' }
      ]
    },
    {
      level_id: 'Advanced',
      lesson_id: 27,
      title_en: 'Arts',
      title_ar: 'الفنون',
      title_sorani: 'هونەر',
      grammar_tip_en: 'Abstract art words.',
      grammar_tip_ar: 'وصف الفنون والجماليات باستخدام مفردات متخصصة.',
      grammar_tip_sorani: 'بۆ جوانییە.',
      content: [
        { word_sorani: 'هونەر', word_english: 'Art', word_arabic: 'فن', example_sentence_sorani: 'هونەری کوردی.', example_sentence_translation_ar: 'الفن الكردي.', example_sentence_translation_en: 'Kurdish art.', word_grammar_tip_en: 'Artistic expression.', word_grammar_tip_ar: 'فائدة: هونەر تعني الفن والإبداع.', word_grammar_tip_sorani: 'ناوازەیە.' },
        { word_sorani: 'تابلۆ', word_english: 'Painting', word_arabic: 'لوحة', example_sentence_sorani: 'تابلۆیەکی جوان.', example_sentence_translation_ar: 'لوحة جميلة.', example_sentence_translation_en: 'A beautiful painting.', word_grammar_tip_en: 'Visual art.', word_grammar_tip_ar: 'فائدة: تابلۆ تعني اللوحة المرسومة.', word_grammar_tip_sorani: 'بۆ سەیرکردنە.' },
        { word_sorani: 'وێنە', word_english: 'Picture', word_arabic: 'صورة', example_sentence_sorani: 'وێنەی مێژوویی.', example_sentence_translation_ar: 'صورة تاريخية.', example_sentence_translation_en: 'Historical picture.', word_grammar_tip_en: 'Visual record.', word_grammar_tip_ar: 'فائدة: وێنە تعني الصورة الفوتوغرافية.', word_grammar_tip_sorani: 'بۆ یادگارییە.' }
      ]
    },
    {
      level_id: 'Advanced',
      lesson_id: 28,
      title_en: 'Law',
      title_ar: 'القانون',
      title_sorani: 'یاسا',
      grammar_tip_en: 'Legal discourse.',
      grammar_tip_ar: 'المصطلحات القانونية الرسمية تستخدم في المؤسسات.',
      grammar_tip_sorani: 'بۆ مافە.',
      content: [
        { word_sorani: 'یاسا', word_english: 'Law', word_arabic: 'قانون', example_sentence_sorani: 'یاسای نێودەوڵەتی.', example_sentence_translation_ar: 'القانون الدولي.', example_sentence_translation_en: 'International law.', word_grammar_tip_en: 'Legal rule.', word_grammar_tip_ar: 'فائدة: یاسا تعني التشريع المنظم.', word_grammar_tip_sorani: 'ڕێسایە.' },
        { word_sorani: 'دادگا', word_english: 'Court', word_arabic: 'محكمة', example_sentence_sorani: 'چوون بۆ دادگا.', example_sentence_translation_ar: 'الذهاب للمحكمة.', example_sentence_translation_en: 'Going to court.', word_grammar_tip_en: 'House of justice.', word_grammar_tip_ar: 'فائدة: دادگا هي مكان تطبيق العدالة.', word_grammar_tip_sorani: 'بۆ دادپەروەرییە.' },
        { word_sorani: 'ماف', word_english: 'Right', word_arabic: 'حق', example_sentence_sorani: 'مافی مرۆڤ.', example_sentence_translation_ar: 'حقوق الإنسان.', example_sentence_translation_en: 'Human rights.', word_grammar_tip_en: 'Entitlement.', word_grammar_tip_ar: 'فائدة: ماف تعني الحق المستحق.', word_grammar_tip_sorani: 'بۆ هەمووانە.' }
      ]
    },
    {
      level_id: 'Advanced',
      lesson_id: 29,
      title_en: 'Literature',
      title_ar: 'الأدب',
      title_sorani: 'ئەدەب',
      grammar_tip_en: 'Literary genres.',
      grammar_tip_ar: 'الأدب الكردي غني بالشعر والقصص الوجدانية.',
      grammar_tip_sorani: 'بۆ خوێندنەوەیە.',
      content: [
        { word_sorani: 'شیعر', word_english: 'Poem', word_arabic: 'شعر', example_sentence_sorani: 'شیعرێکی بەرز.', example_sentence_translation_ar: 'قصيدة راقية.', example_sentence_translation_en: 'A high-level poem.', word_grammar_tip_en: 'Verse literature.', word_grammar_tip_ar: 'فائدة: شیعر هو أساس الأدب الكردي.', word_grammar_tip_sorani: 'هەستە.' },
        { word_sorani: 'چیرۆک', word_english: 'Story', word_arabic: 'قصة', example_sentence_sorani: 'چیرۆکێکی درێژ.', example_sentence_translation_ar: 'قصة طويلة.', example_sentence_translation_en: 'A long story.', word_grammar_tip_en: 'Narrative prose.', word_grammar_tip_ar: 'فائدة: چیرۆك تعني الحكاية.', word_grammar_tip_sorani: 'گێڕانەوەیە.' },
        { word_sorani: 'کتێب', word_english: 'Book', word_arabic: 'كتاب', example_sentence_sorani: 'کتێبێکی بەسوود.', example_sentence_translation_ar: 'كتاب مفيد.', example_sentence_translation_en: 'A useful book.', word_grammar_tip_en: 'Literature.', word_grammar_tip_ar: 'فائدة: کتێب تعني الكتاب المطبوع.', word_grammar_tip_sorani: 'بۆ فێربوونە.' }
      ]
    },
    {
      level_id: 'Advanced',
      lesson_id: 30,
      title_en: 'Reasoning',
      title_ar: 'المنطق والسببية',
      title_sorani: 'لۆژیک',
      grammar_tip_en: 'Logical links.',
      grammar_tip_ar: 'أدوات الربط المنطقية تساعد في بناء جمل مقنعة.',
      grammar_tip_sorani: 'بۆ تێگەیشتنە.',
      content: [
        { word_sorani: 'هۆکار', word_english: 'Reason', word_arabic: 'سبب', example_sentence_sorani: 'هۆکاری کێشەکە.', example_sentence_translation_ar: 'سبب المشكلة.', example_sentence_translation_en: 'The reason of the problem.', word_grammar_tip_en: 'Cause.', word_grammar_tip_ar: 'فائدة: هۆکار تعني العلة وراء الشيء.', word_grammar_tip_sorani: 'بۆ ڕوونکردنەوەیە.' },
        { word_sorani: 'ئەنجام', word_english: 'Result', word_arabic: 'نتيجة', example_sentence_sorani: 'ئەنجامێکی باش.', example_sentence_translation_ar: 'نتيجة جيدة.', example_sentence_translation_en: 'A good result.', word_grammar_tip_en: 'Outcome.', word_grammar_tip_ar: 'فائدة: ئەنجام تعني المخرجات النهائية.', word_grammar_tip_sorani: 'کۆتایی کارە.' },
        { word_sorani: 'چونکە', word_english: 'Because', word_arabic: 'لأن', example_sentence_sorani: 'نەهاتم چونکە ماندووم.', example_sentence_translation_ar: 'لم آتِ لأنني متعب.', example_sentence_translation_en: 'I did not come because I am tired.', word_grammar_tip_en: 'Causality link.', word_grammar_tip_ar: 'فائدة: چونکە أداة ربط للسبب.', word_grammar_tip_sorani: 'بۆ هۆکارە.' }
      ]
    }
  ];

  data.push(...beginnerLessons, ...intermediateLessons, ...advancedLessons);

  return data;
};

export const curriculum = generateLessons();
