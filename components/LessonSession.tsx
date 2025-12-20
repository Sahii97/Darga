
import React from 'react';
import { AppState, Lesson, Language } from '../types';

interface Props {
  state: AppState;
  lesson: Lesson;
  onComplete: () => void;
  onExit: () => void;
}

const LessonSession: React.FC<Props> = ({ state, lesson, onComplete, onExit }) => {
  const [phase, setPhase] = React.useState<'teaching' | 'quiz'>('teaching');
  const [index, setIndex] = React.useState(0);
  const [selected, setSelected] = React.useState<string | null>(null);
  const [result, setResult] = React.useState<'correct' | 'wrong' | null>(null);

  const native = state.nativeLanguage;
  const isRTL = native === 'arabic' || native === 'sorani';
  const isDark = state.theme === 'dark';
  
  const currentItem = lesson.content[index];

  const translations: Record<Language, any> = {
    english: {
      newInscription: 'NEW INSCRIPTION',
      tabletUsage: 'TABLET USAGE',
      wisdom: 'WISDOM',
      ascentRule: 'ASCENT RULE',
      guidance: 'GUIDANCE',
      alignMeaning: 'ALIGN THE MEANING',
      misaligned: 'MISALIGNED',
      correctPath: 'Correct Path:',
      solidInsight: 'SOLID INSIGHT',
      continueAscent: 'Continue the Ascent',
      ascend: 'ASCEND',
      verify: 'VERIFY',
      nextStep: 'NEXT STEP'
    },
    arabic: {
      newInscription: 'نقش جديد',
      tabletUsage: 'استخدام الجهاز',
      wisdom: 'فائدة',
      ascentRule: 'دستور المسار',
      guidance: 'إرشاد',
      alignMeaning: 'اختبار المعرفة',
      misaligned: 'تعديل المسار',
      correctPath: 'النقش الصحيح:',
      solidInsight: 'رائع',
      continueAscent: 'استمر في الصعود',
      ascend: 'استمرار',
      verify: 'تحقق',
      nextStep: 'التالي'
    },
    sorani: {
      newInscription: 'نەخشی نوێ',
      tabletUsage: 'بەکارهێنانی تەختە',
      wisdom: 'فایدە',
      ascentRule: 'ڕێسای سەرکەوتن',
      guidance: 'ڕێنمایی',
      alignMeaning: 'ماناکە بدۆزەرەوە',
      misaligned: 'هەڵەیە',
      correctPath: 'ڕێگای ڕاست:',
      solidInsight: 'ناوازەیە',
      continueAscent: 'بەردەوام بە لە سەرکەوتن',
      ascend: 'بەردەوام بە',
      verify: 'پشکنین',
      nextStep: 'دواتر'
    }
  };

  const t = translations[native];

  const getTarget = () => {
    if (state.targetLanguage === 'sorani') return currentItem.word_sorani;
    if (state.targetLanguage === 'arabic') return currentItem.word_arabic;
    return currentItem.word_english;
  };

  const getSource = () => {
    if (state.nativeLanguage === 'sorani') return currentItem.word_sorani;
    if (state.nativeLanguage === 'arabic') return currentItem.word_arabic;
    return currentItem.word_english;
  };

  const getExampleTranslation = () => {
    if (native === 'arabic') return currentItem.example_sentence_translation_ar;
    return currentItem.example_sentence_translation_en;
  }

  const options = React.useMemo(() => {
    const correct = getTarget();
    const distractors = lesson.content
      .map(c => state.targetLanguage === 'sorani' ? c.word_sorani : state.targetLanguage === 'arabic' ? c.word_arabic : c.word_english)
      .filter(w => w !== correct);
    return [correct, ...distractors].sort(() => Math.random() - 0.5);
  }, [index, phase, state.targetLanguage]);

  const handleNext = () => {
    if (phase === 'teaching') {
      if (index < lesson.content.length - 1) {
        setIndex(index + 1);
      } else {
        setPhase('quiz');
        setIndex(0);
      }
    } else {
      if (result === 'correct') {
        if (index < lesson.content.length - 1) {
          setIndex(index + 1);
          setResult(null);
          setSelected(null);
        } else {
          onComplete();
        }
      } else {
        setResult(null);
        setSelected(null);
      }
    }
  };

  const handleCheck = () => {
    if (selected === getTarget()) setResult('correct');
    else setResult('wrong');
  };

  const getWordTip = () => {
    if (native === 'sorani') return currentItem.word_grammar_tip_sorani;
    if (native === 'arabic') return currentItem.word_grammar_tip_ar;
    return currentItem.word_grammar_tip_en;
  };

  const getLessonTip = () => {
    if (native === 'sorani') return lesson.grammar_tip_sorani;
    if (native === 'arabic') return lesson.grammar_tip_ar;
    return lesson.grammar_tip_en;
  };

  const totalSteps = lesson.content.length * 2;
  const currentStepProgress = phase === 'teaching' ? index : lesson.content.length + index;
  const progressPercent = (currentStepProgress / totalSteps) * 100;

  const bgColor = isDark ? 'bg-[#121212]' : 'bg-[#F5F5F5]';
  const textColor = isDark ? 'text-[#F5F5F5]' : 'text-[#121212]';
  const panelColor = isDark ? 'bg-[#1E1E1E]' : 'bg-white';
  const panelBorder = isDark ? 'border-[#2A2A2A]' : 'border-[#C2B280]/30';

  return (
    <div className={`fixed inset-0 ${bgColor} ${textColor} z-50 flex flex-col transition-colors ${isRTL ? 'rtl-layout' : 'ltr-layout'} cobblestone-bg`}>
      <div className="p-6 max-w-xl mx-auto w-full flex items-center gap-6">
        <button onClick={onExit} className="text-gray-500 hover:text-[#A65E44] transition-colors p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <div className={`flex-1 h-4 ${isDark ? 'bg-black/30' : 'bg-gray-200'} rounded-full overflow-visible border-2 ${panelBorder} relative shadow-inner`}>
          <div 
            className="h-full bg-[#A65E44] transition-all duration-700 rounded-full relative"
            style={{ width: `${progressPercent}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-8 h-8 bg-[#C2B280] rounded-full border-2 border-[#A65E44] flex items-center justify-center shadow-lg transition-transform hover:scale-110">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="#A65E44">
                 <path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" transform={isRTL ? "rotate(-90 12 12)" : "rotate(90 12 12)"} />
               </svg>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center p-6 max-w-xl mx-auto w-full relative">
        {phase === 'teaching' ? (
          <div className="w-full space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-500 z-10">
            <div className="space-y-4 text-center">
              <div className="text-[10px] font-black text-[#A65E44] tracking-[0.5em] uppercase">
                {t.newInscription}
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-7xl font-black tracking-tighter text-[#F5F5F5]">{getTarget()}</div>
              </div>
              <div className="text-2xl text-[#C2B280] font-bold tracking-widest uppercase italic opacity-60">
                {getSource()}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className={`${panelColor} p-10 rounded-[40px] border-b-8 border-black/20 relative shadow-2xl overflow-hidden`}>
                <div className="absolute top-0 left-0 w-2 h-full bg-[#A65E44]"></div>
                <div className="text-[9px] font-black text-[#C2B280] tracking-[0.3em] uppercase mb-4">{t.tabletUsage}</div>
                <div className="text-2xl font-bold leading-tight mb-3 text-white">{currentItem.example_sentence_sorani}</div>
                <div className="text-sm text-gray-400 font-bold italic opacity-70">{getExampleTranslation()}</div>
              </div>

              <div className={`p-8 bg-[#A65E44]/5 border-2 border-[#A65E44]/30 rounded-[40px] border-dashed relative`}>
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#A65E44] rounded-full text-[9px] font-black text-white tracking-widest">{t.wisdom}</div>
                <h4 className="text-[10px] font-black text-[#C2B280] uppercase tracking-widest mb-3 text-center">
                  {index === 0 ? t.ascentRule : t.guidance}
                </h4>
                <p className="text-md leading-relaxed font-bold text-center">
                  {index === 0 ? getLessonTip() : getWordTip()}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full space-y-12 animate-in fade-in zoom-in-95 duration-500 z-10">
            <div className="text-center space-y-6">
              <h2 className="text-[10px] font-black text-gray-500 tracking-[0.4em] uppercase">{t.alignMeaning}</h2>
              <div className={`text-5xl font-black py-12 px-14 ${panelColor} border-b-8 border-black/30 rounded-[48px] inline-block text-[#A65E44] shadow-2xl`}>
                {getSource()}
              </div>
            </div>

            <div className="grid gap-4">
              {options.map((opt, i) => (
                <button
                  key={opt}
                  disabled={result !== null}
                  onClick={() => setSelected(opt)}
                  className={`clay-tablet p-7 text-left rounded-[32px] text-xl font-black transition-all ${
                    selected === opt 
                      ? (result === 'correct' ? 'bg-[#A65E44] border-[#8D503A] text-white shadow-xl' : 
                         result === 'wrong' ? 'bg-[#5A3127] border-red-900 text-white' : 
                         `${panelColor} border-[#C2B280] ${textColor} scale-[1.02]`)
                      : `${panelColor} ${panelBorder} text-gray-500 hover:border-[#A65E44]/50`
                  }`}
                  style={{ borderBottomWidth: result !== null && selected === opt ? '0px' : '6px' }}
                >
                  <span className="inline-block w-10 h-10 rounded-xl bg-black/10 text-center leading-10 mr-4 text-xs font-black text-[#C2B280]">{i + 1}</span>
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className={`p-10 border-t-4 ${panelBorder} transition-all duration-500 ${result === 'correct' ? 'bg-[#A65E44]/20' : result === 'wrong' ? 'bg-[#5A3127]/30' : bgColor}`}>
        <div className="max-w-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left rtl:md:text-right">
             {result === 'wrong' && (
               <div className="animate-in slide-in-from-bottom-4">
                 <div className="text-xs font-black text-red-500 tracking-[0.3em] uppercase mb-1">{t.misaligned}</div>
                 <div className="text-xl text-white font-black">{t.correctPath} {getTarget()}</div>
               </div>
             )}
             {result === 'correct' && (
               <div className="animate-in slide-in-from-bottom-4 flex items-center gap-3 justify-center md:justify-start">
                 <div className="w-10 h-10 border-2 border-[#C2B280] rounded-t-full flex items-center justify-center animate-bounce">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="#C2B280"><path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" /></svg>
                 </div>
                 <div>
                    <div className="text-xs font-black text-[#C2B280] tracking-[0.3em] uppercase mb-1">{t.solidInsight}</div>
                    <div className="text-xl text-white font-black">{t.continueAscent}</div>
                 </div>
               </div>
             )}
          </div>
          <button
            onClick={result !== null || phase === 'teaching' ? handleNext : handleCheck}
            disabled={phase === 'quiz' && !selected}
            className={`clay-tablet px-16 py-5 rounded-2xl text-sm font-black tracking-[0.3em] uppercase transition-all w-full md:w-auto shadow-2xl ${
              result === 'correct' ? 'bg-[#C2B280] border-[#A99C70] text-black' :
              result === 'wrong' ? 'bg-red-700 border-red-900 text-white' :
              (phase === 'teaching' || selected) ? 'bg-[#A65E44] border-[#8D503A] text-white' : `${panelColor} ${panelBorder} text-gray-600 grayscale`
            }`}
          >
            {phase === 'teaching' ? t.ascend : (result === null ? t.verify : t.nextStep)}
          </button>
        </div>
      </footer>
    </div>
  );
};

export default LessonSession;
