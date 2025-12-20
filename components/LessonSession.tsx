
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
      tabletUsage: 'EXAMPLE',
      wisdom: 'TIP',
      alignMeaning: 'CHOOSE THE CORRECT MEANING',
      misaligned: 'INCORRECT',
      correctPath: 'Correct:',
      solidInsight: 'EXCELLENT',
      continueAscent: 'Keep going!',
      ascend: 'CONTINUE',
      verify: 'CHECK',
      nextStep: 'NEXT'
    },
    arabic: {
      newInscription: 'مفردة جديدة',
      tabletUsage: 'مثال',
      wisdom: 'فائدة',
      alignMeaning: 'اختر المعنى الصحيح',
      misaligned: 'إجابة خاطئة',
      correctPath: 'الصحيح هو:',
      solidInsight: 'أحسنت',
      continueAscent: 'استمر في التعلم!',
      ascend: 'متابعة',
      verify: 'تحقق',
      nextStep: 'التالي'
    },
    sorani: {
      newInscription: 'وشەی نوێ',
      tabletUsage: 'نموونە',
      wisdom: 'فایدە',
      alignMeaning: 'ماناکە بدۆزەرەوە',
      misaligned: 'هەڵەیە',
      correctPath: 'ڕاستەکەی:',
      solidInsight: 'بژی',
      continueAscent: 'بەردەوام بە!',
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
    <div className={`fixed inset-0 ${bgColor} ${textColor} z-50 flex flex-col transition-colors ${isRTL ? 'rtl-layout' : 'ltr-layout'}`} style={{ height: '100dvh' }}>
      <div className="p-3 max-w-xl mx-auto w-full flex items-center gap-3">
        <button onClick={onExit} className="text-gray-500 hover:text-[#A65E44] transition-colors p-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <div className={`flex-1 h-2 ${isDark ? 'bg-black/30' : 'bg-gray-200'} rounded-full overflow-hidden border ${panelBorder} relative`}>
          <div 
            className="h-full bg-[#A65E44] transition-all duration-700 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center p-4 max-w-xl mx-auto w-full relative overflow-y-auto">
        {phase === 'teaching' ? (
          <div className="w-full space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 z-10">
            <div className="space-y-2 text-center">
              <div className="text-[9px] font-black text-[#A65E44] tracking-widest uppercase">
                {t.newInscription}
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <div className="text-5xl md:text-6xl font-black text-[#F5F5F5] leading-none mb-2">{getTarget()}</div>
              </div>

              <div className="text-base md:text-lg text-[#C2B280] font-bold uppercase italic opacity-60">
                {getSource()}
              </div>
            </div>
            
            <div className="space-y-3">
              <div className={`${panelColor} p-5 md:p-6 rounded-[24px] border-b-2 border-black/20 relative shadow-xl overflow-hidden group`}>
                <div className="absolute top-0 left-0 w-1 h-full bg-[#A65E44]"></div>
                <div className="text-[8px] font-black text-[#C2B280] tracking-widest uppercase mb-1">{t.tabletUsage}</div>
                <div className="text-lg font-bold leading-tight mb-1 text-white">{currentItem.example_sentence_sorani}</div>
                <div className="text-[10px] text-gray-400 font-bold italic opacity-70">{getExampleTranslation()}</div>
              </div>

              <div className={`p-4 md:p-5 bg-[#A65E44]/5 border-2 border-[#A65E44]/30 rounded-[24px] relative flex flex-col items-center justify-center text-center`}>
                <div className="text-[9px] font-black text-[#C2B280] uppercase tracking-widest mb-2 opacity-60">
                  {t.wisdom}
                </div>
                <p className="text-sm leading-relaxed font-bold text-[#F5F5F5]">
                  {index === 0 ? getLessonTip() : getWordTip()}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full space-y-8 animate-in fade-in zoom-in-95 duration-500 z-10">
            <div className="text-center space-y-3">
              <h2 className="text-[9px] font-black text-gray-500 tracking-widest uppercase">{t.alignMeaning}</h2>
              <div className={`text-2xl md:text-3xl font-black py-4 md:py-6 px-6 md:px-8 ${panelColor} border-b-2 border-black/30 rounded-[24px] inline-block text-[#A65E44] shadow-xl relative`}>
                {getSource()}
              </div>
            </div>

            <div className="grid gap-2 md:gap-3">
              {options.map((opt, i) => (
                <button
                  key={opt}
                  disabled={result !== null}
                  onClick={() => setSelected(opt)}
                  className={`clay-tablet p-4 md:p-5 text-left rounded-[20px] text-sm md:text-base font-black transition-all ${
                    selected === opt 
                      ? (result === 'correct' ? 'bg-[#A65E44] border-[#8D503A] text-white shadow-xl' : 
                         result === 'wrong' ? 'bg-[#5A3127] border-red-900 text-white' : 
                         `${panelColor} border-[#C2B280] ${textColor}`)
                      : `${panelColor} ${panelBorder} text-gray-500`
                  }`}
                  style={{ borderBottomWidth: result !== null && selected === opt ? '0px' : '3px' }}
                >
                  <span className="inline-block w-6 h-6 rounded-lg bg-black/10 text-center leading-6 mr-2 text-[9px] font-black text-[#C2B280]">{i + 1}</span>
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className={`p-4 pb-10 md:pb-6 border-t ${panelBorder} transition-all duration-300 ${result === 'correct' ? 'bg-[#A65E44]/15' : result === 'wrong' ? 'bg-[#5A3127]/20' : bgColor} z-50`}>
        <div className="max-w-xl mx-auto flex flex-col items-center gap-3 md:gap-5">
          <div className="w-full text-center h-10 flex items-center justify-center">
             {result === 'wrong' && (
               <div className="animate-in slide-in-from-bottom-2">
                 <div className="text-[8px] font-black text-red-500 tracking-widest uppercase mb-0.5">{t.misaligned}</div>
                 <div className="text-base text-white font-black">
                    {t.correctPath} {getTarget()}
                 </div>
               </div>
             )}
             {result === 'correct' && (
               <div className="animate-in slide-in-from-bottom-2 flex items-center gap-2 justify-center">
                 <div className="w-6 h-6 border-2 border-[#C2B280] rounded-t-full flex items-center justify-center animate-bounce">
                   <svg width="12" height="12" viewBox="0 0 24 24" fill="#C2B280"><path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" /></svg>
                 </div>
                 <div className="text-left">
                    <div className="text-[8px] font-black text-[#C2B280] tracking-widest uppercase">{t.solidInsight}</div>
                    <div className="text-base text-white font-black">{t.continueAscent}</div>
                 </div>
               </div>
             )}
          </div>
          <button
            onClick={result !== null || phase === 'teaching' ? handleNext : handleCheck}
            disabled={phase === 'quiz' && !selected}
            className={`clay-tablet w-full py-4 md:py-5 rounded-xl text-[10px] md:text-xs font-black tracking-widest uppercase shadow-xl ${
              result === 'correct' ? 'bg-[#C2B280] border-[#A99C70] text-black' :
              result === 'wrong' ? 'bg-red-700 border-red-900 text-white' :
              (phase === 'teaching' || selected) ? 'bg-[#A65E44] border-[#8D503A] text-white' : `${panelColor} ${panelBorder} text-gray-600 grayscale opacity-40`
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
