
import React from 'react';
import { AppState, Lesson, Language } from '../types';
import { GoogleGenAI, Modality } from "@google/genai";
import { playRawAudio } from '../utils/audioUtils';

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
  const [isAudioLoading, setIsAudioLoading] = React.useState(false);

  const native = state.nativeLanguage;
  const isRTL = native === 'arabic' || native === 'sorani';
  const isDark = state.theme === 'dark';
  
  const currentItem = lesson.content[index];

  const translations: Record<Language, any> = {
    english: {
      newInscription: 'NEW INSCRIPTION',
      tabletUsage: 'EXAMPLE',
      wisdom: 'TIP',
      ascentRule: 'RULE',
      guidance: 'GUIDANCE',
      alignMeaning: 'ALIGN THE MEANING',
      misaligned: 'MISALIGNED',
      correctPath: 'Correct Path:',
      solidInsight: 'SOLID INSIGHT',
      continueAscent: 'Continue the Ascent',
      ascend: 'ASCEND',
      verify: 'VERIFY',
      nextStep: 'NEXT STEP',
      listen: 'Listen'
    },
    arabic: {
      newInscription: 'نقش جديد',
      tabletUsage: 'مثال',
      wisdom: 'فائدة',
      ascentRule: 'قاعدة',
      guidance: 'إرشاد',
      alignMeaning: 'اختبار المعرفة',
      misaligned: 'تعديل المسار',
      correctPath: 'النقش الصحيح:',
      solidInsight: 'رائع',
      continueAscent: 'استمر في الصعود',
      ascend: 'استمرار',
      verify: 'تحقق',
      nextStep: 'التالي',
      listen: 'استمع'
    },
    sorani: {
      newInscription: 'نەخشی نوێ',
      tabletUsage: 'نموونە',
      wisdom: 'فایدە',
      ascentRule: 'ڕێسا',
      guidance: 'ڕێنمایی',
      alignMeaning: 'ماناکە بدۆزەرەوە',
      misaligned: 'هەڵەیە',
      correctPath: 'ڕێگای ڕاست:',
      solidInsight: 'ناوازەیە',
      continueAscent: 'بەردەوام بە لە سەرکەوتن',
      ascend: 'بەردەوام بە',
      verify: 'پشکنین',
      nextStep: 'دواتر',
      listen: 'گوێ بگرە'
    }
  };

  const t = translations[native];

  const handleSpeak = async (textToSpeak: string) => {
    if (isAudioLoading) return;
    setIsAudioLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Say clearly and slowly in Kurdish Sorani: ${textToSpeak}`;
      
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: prompt }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Puck' }, // Puck has a clear, friendly voice for teaching
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        await playRawAudio(base64Audio);
      }
    } catch (error) {
      console.error("TTS failed:", error);
    } finally {
      setIsAudioLoading(false);
    }
  };

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
    <div className={`fixed inset-0 ${bgColor} ${textColor} z-50 flex flex-col transition-colors ${isRTL ? 'rtl-layout' : 'ltr-layout'}`}>
      <div className="p-4 max-w-xl mx-auto w-full flex items-center gap-4">
        <button onClick={onExit} className="text-gray-500 hover:text-[#A65E44] transition-colors p-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <div className={`flex-1 h-3 ${isDark ? 'bg-black/30' : 'bg-gray-200'} rounded-full overflow-hidden border ${panelBorder} relative`}>
          <div 
            className="h-full bg-[#A65E44] transition-all duration-700 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center p-6 max-w-xl mx-auto w-full relative">
        {phase === 'teaching' ? (
          <div className="w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 z-10">
            <div className="space-y-4 text-center">
              <div className="text-[10px] font-black text-[#A65E44] tracking-widest uppercase">
                {t.newInscription}
              </div>
              
              <div className="flex flex-col items-center gap-3">
                <div className="text-7xl font-black text-[#F5F5F5] leading-none mb-2">{getTarget()}</div>
                <button 
                  onClick={() => handleSpeak(getTarget())}
                  disabled={isAudioLoading}
                  className={`w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-lg ${isAudioLoading ? 'bg-gray-700 animate-pulse' : 'bg-[#A65E44] hover:bg-[#8D503A] clay-tablet'}`}
                >
                  {isAudioLoading ? (
                    <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.85 14,18.71V20.77C18.01,19.86 21,16.28 21,12C21,7.72 18.01,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16.02C15.5,15.29 16.5,13.77 16.5,12M3,9V15H7L12,20V4L7,9H3Z" /></svg>
                  )}
                </button>
              </div>

              <div className="text-xl text-[#C2B280] font-bold uppercase italic opacity-60">
                {getSource()}
              </div>
            </div>
            
            <div className="space-y-4">
              <div className={`${panelColor} p-8 rounded-[32px] border-b-4 border-black/20 relative shadow-xl overflow-hidden group`}>
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#A65E44]"></div>
                <div className="flex justify-between items-start mb-3">
                   <div className="text-[9px] font-black text-[#C2B280] tracking-widest uppercase">{t.tabletUsage}</div>
                   <button 
                    onClick={() => handleSpeak(currentItem.example_sentence_sorani)}
                    className="text-gray-500 hover:text-[#A65E44] transition-colors"
                   >
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.85 14,18.71V20.77C18.01,19.86 21,16.28 21,12C21,7.72 18.01,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16.02C15.5,15.29 16.5,13.77 16.5,12M3,9V15H7L12,20V4L7,9H3Z" /></svg>
                   </button>
                </div>
                <div className="text-xl font-bold leading-tight mb-2 text-white">{currentItem.example_sentence_sorani}</div>
                <div className="text-xs text-gray-400 font-bold italic opacity-70">{getExampleTranslation()}</div>
              </div>

              {/* Directly showing the Tip without redundant labels */}
              <div className={`p-6 bg-[#A65E44]/5 border-2 border-[#A65E44]/30 rounded-[32px] relative flex flex-col items-center justify-center text-center`}>
                <div className="text-[10px] font-black text-[#C2B280] uppercase tracking-widest mb-3 opacity-60">
                  {t.wisdom}
                </div>
                <p className="text-base leading-relaxed font-bold text-[#F5F5F5]">
                  {index === 0 ? getLessonTip() : getWordTip()}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full space-y-10 animate-in fade-in zoom-in-95 duration-500 z-10">
            <div className="text-center space-y-4">
              <h2 className="text-[10px] font-black text-gray-500 tracking-widest uppercase">{t.alignMeaning}</h2>
              <div className={`text-4xl font-black py-8 px-10 ${panelColor} border-b-4 border-black/30 rounded-[32px] inline-block text-[#A65E44] shadow-xl relative`}>
                {getSource()}
                <button 
                  onClick={() => handleSpeak(getSource())}
                  className="absolute -top-3 -right-3 w-8 h-8 bg-[#C2B280] rounded-full flex items-center justify-center text-black shadow-md clay-tablet"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.85 14,18.71V20.77C18.01,19.86 21,16.28 21,12C21,7.72 18.01,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16.02C15.5,15.29 16.5,13.77 16.5,12M3,9V15H7L12,20V4L7,9H3Z" /></svg>
                </button>
              </div>
            </div>

            <div className="grid gap-3">
              {options.map((opt, i) => (
                <button
                  key={opt}
                  disabled={result !== null}
                  onClick={() => setSelected(opt)}
                  className={`clay-tablet p-6 text-left rounded-[24px] text-lg font-black transition-all ${
                    selected === opt 
                      ? (result === 'correct' ? 'bg-[#A65E44] border-[#8D503A] text-white shadow-xl' : 
                         result === 'wrong' ? 'bg-[#5A3127] border-red-900 text-white' : 
                         `${panelColor} border-[#C2B280] ${textColor}`)
                      : `${panelColor} ${panelBorder} text-gray-500`
                  }`}
                  style={{ borderBottomWidth: result !== null && selected === opt ? '0px' : '4px' }}
                >
                  <span className="inline-block w-8 h-8 rounded-lg bg-black/10 text-center leading-8 mr-3 text-[10px] font-black text-[#C2B280]">{i + 1}</span>
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className={`p-8 border-t-2 ${panelBorder} transition-all duration-300 ${result === 'correct' ? 'bg-[#A65E44]/15' : result === 'wrong' ? 'bg-[#5A3127]/20' : bgColor}`}>
        <div className="max-w-xl mx-auto flex flex-col items-center gap-6">
          <div className="w-full text-center">
             {result === 'wrong' && (
               <div className="animate-in slide-in-from-bottom-2">
                 <div className="text-[10px] font-black text-red-500 tracking-widest uppercase mb-0.5">{t.misaligned}</div>
                 <div className="text-lg text-white font-black flex items-center justify-center gap-2">
                    {t.correctPath} {getTarget()}
                    <button onClick={() => handleSpeak(getTarget())} className="text-[#C2B280]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.85 14,18.71V20.77C18.01,19.86 21,16.28 21,12C21,7.72 18.01,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16.02C15.5,15.29 16.5,13.77 16.5,12M3,9V15H7L12,20V4L7,9H3Z" /></svg>
                    </button>
                 </div>
               </div>
             )}
             {result === 'correct' && (
               <div className="animate-in slide-in-from-bottom-2 flex items-center gap-2 justify-center">
                 <div className="w-8 h-8 border-2 border-[#C2B280] rounded-t-full flex items-center justify-center animate-bounce">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="#C2B280"><path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" /></svg>
                 </div>
                 <div className="text-left">
                    <div className="text-[10px] font-black text-[#C2B280] tracking-widest uppercase">{t.solidInsight}</div>
                    <div className="text-lg text-white font-black">{t.continueAscent}</div>
                 </div>
               </div>
             )}
          </div>
          <button
            onClick={result !== null || phase === 'teaching' ? handleNext : handleCheck}
            disabled={phase === 'quiz' && !selected}
            className={`clay-tablet w-full py-5 rounded-2xl text-xs font-black tracking-widest uppercase shadow-xl ${
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
