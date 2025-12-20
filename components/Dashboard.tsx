
import React from 'react';
import { AppState, Level, Theme, Language } from '../types';
import { curriculum } from '../curriculumData';

interface Props {
  state: AppState;
  onStartLesson: (index: number) => void;
  onLevelChange: (level: Level) => void;
  onReset: () => void;
  onUnlockAll: () => void;
  onToggleTheme: (theme: Theme) => void;
}

const Dashboard: React.FC<Props> = ({ state, onStartLesson, onLevelChange, onReset, onUnlockAll, onToggleTheme }) => {
  const native = state.nativeLanguage;
  const isRTL = native === 'arabic' || native === 'sorani';
  const isDark = state.theme === 'dark';

  const translations: Record<Language, any> = {
    english: {
      beginner: 'BEGINNER',
      intermediate: 'INTERMEDIATE',
      advanced: 'ADVANCED',
      level: 'LEVEL',
      section: 'THE QELAT: ORIGINS',
      unlock: 'UNLOCK GATE',
      reset: 'NEW JOURNEY',
      appTitle: 'DARGA',
      stage: 'STAGE',
      ascended: 'Entered'
    },
    arabic: {
      beginner: 'مبتدئ',
      intermediate: 'متوسط',
      advanced: 'متقدم',
      level: 'المستوى',
      section: 'القلعة: البداية',
      unlock: 'فتح البوابة',
      reset: 'البدء من جديد',
      appTitle: 'دەرگا',
      stage: 'المرحلة',
      ascended: 'تم الدخول'
    },
    sorani: {
      beginner: 'سەرەتایی',
      intermediate: 'ناوەند',
      advanced: 'پێشکەوتوو',
      level: 'ئاست',
      section: 'قەڵا: سەرەتا',
      unlock: 'کردنەوەی دەرگا',
      reset: 'گەشتێکی نوێ',
      appTitle: 'دەرگا',
      stage: 'قۆناغ',
      ascended: 'چووە ژوورەوە'
    }
  };

  const t = translations[native];

  const filteredLessons = curriculum.filter(l => l.level_id === state.currentLevel);
  const totalCompleted = state.completedLessons[state.currentLevel].length;
  const progress = Math.round((totalCompleted / Math.max(1, filteredLessons.length)) * 100);

  const bgColor = isDark ? 'bg-[#121212]' : 'bg-[#F5F5F5]';
  const textColor = isDark ? 'text-[#F5F5F5]' : 'text-[#121212]';
  const panelColor = isDark ? 'bg-[#1E1E1E]' : 'bg-white';
  const panelBorder = isDark ? 'border-white/5' : 'border-[#C2B280]/30';

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} pb-32 transition-colors ${isRTL ? 'rtl-layout' : 'ltr-layout'}`}>
      <header className={`sticky top-0 z-50 ${bgColor}/95 backdrop-blur-md p-5 border-b-2 ${panelBorder} flex flex-col gap-4 max-w-xl mx-auto shadow-md`}>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-3">
            <div className="w-9 h-11 bg-[#A65E44] rounded-t-full border-2 border-[#C2B280] flex items-center justify-end px-1 shadow-lg">
              <div className="w-1.5 h-1.5 bg-[#C2B280] rounded-full"></div>
            </div>
            <span className="text-xs font-black tracking-widest uppercase">{t.appTitle}</span>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => onToggleTheme(isDark ? 'light' : 'dark')}
              className={`w-10 h-10 rounded-xl flex items-center justify-center border-b-4 ${panelColor} ${panelBorder} active:translate-y-0.5 active:border-b-0`}
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            <div className={`flex items-center gap-2 px-3 py-1.5 ${panelColor} rounded-full border-b-4 ${panelBorder}`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#A65E44">
                <path d="M14,6L10.25,11L13.1,14.8L11.5,16C9.81,13.75 7,10 7,10L1,21H23L14,6Z" />
              </svg>
              <span className="text-sm font-black text-[#A65E44]">{state.streak}</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2 w-full">
          <button 
            onClick={onUnlockAll}
            className={`flex-1 py-2 rounded-xl text-[8px] font-black uppercase tracking-widest border-b-4 bg-[#C2B280] border-[#A99C70] text-black active:translate-y-0.5 active:border-b-0`}
          >
            {t.unlock}
          </button>
          <button 
            onClick={onReset}
            className={`flex-1 py-2 rounded-xl text-[8px] font-black uppercase tracking-widest border-b-4 ${panelColor} ${panelBorder} text-gray-500 active:translate-y-0.5 active:border-b-0`}
          >
            {t.reset}
          </button>
        </div>
      </header>

      <main className="max-w-xl mx-auto p-6 space-y-10">
        <div className="bg-[#A65E44] p-7 rounded-[32px] flex justify-between items-center shadow-xl relative overflow-hidden">
          <div className="space-y-0.5 relative z-10">
            <h2 className="text-[9px] font-black text-white/50 tracking-widest uppercase">{t.level}</h2>
            <div className="text-2xl font-black text-white uppercase tracking-tight">
              {native === 'english' ? state.currentLevel : translations[native][state.currentLevel.toLowerCase()]}
            </div>
            <p className="text-[9px] text-[#C2B280] font-black uppercase tracking-widest">{t.section}</p>
          </div>
          <div className="bg-black/20 p-4 rounded-[20px] border-b-4 border-black/30 text-center min-w-[70px]">
             <div className="text-xl font-black text-white leading-none">{progress}%</div>
             <div className="text-[7px] font-bold text-white/40 uppercase tracking-widest mt-1">{t.ascended}</div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-16 relative py-8">
          <div className={`absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 ${isDark ? 'bg-white/10' : 'bg-[#A65E44]/10'} -z-10`}></div>
          
          {filteredLessons.map((lesson, idx) => {
            const isDone = state.completedLessons[state.currentLevel].includes(lesson.lesson_id);
            const isCurrent = !isDone && (idx === 0 || state.completedLessons[state.currentLevel].includes(filteredLessons[idx-1].lesson_id));
            const isLocked = !isDone && !isCurrent;

            return (
              <div key={lesson.lesson_id} className="relative flex flex-col items-center">
                <button
                  disabled={isLocked}
                  onClick={() => onStartLesson(curriculum.indexOf(lesson))}
                  className={`clay-tablet w-24 h-24 rounded-t-full rounded-b-lg flex items-center justify-center shadow-lg relative ${
                    isDone ? 'bg-[#A65E44] border-[#8D503A] text-white' : 
                    isCurrent ? 'bg-white border-[#C2B280] shadow-[0_6px_0_#C2B280]' : 
                    `${panelColor} ${panelBorder} text-gray-700 opacity-60`
                  }`}
                >
                  <div className={`absolute inset-2 border-t-2 border-x-2 ${isDone ? 'border-white/20' : 'border-[#C2B280]/20'} rounded-t-full`}></div>
                  
                  {isDone ? (
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  ) : isCurrent ? (
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="#A65E44" className="animate-pulse">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                     </svg>
                  ) : (
                     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  )}
                </button>
                
                <div className={`absolute top-28 w-48 text-center transition-opacity duration-300 ${isLocked ? 'opacity-30' : 'opacity-100'}`}>
                   <div className="text-[9px] font-black text-[#A65E44] uppercase tracking-widest mb-0.5">
                     {t.stage} {lesson.lesson_id}
                   </div>
                   <div className="text-[11px] font-black uppercase leading-tight line-clamp-2 italic">
                     {native === 'english' ? lesson.title_en : native === 'arabic' ? lesson.title_ar : lesson.title_sorani}
                   </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <nav className={`fixed bottom-0 left-0 right-0 ${panelColor} border-t-2 ${panelBorder} p-6 flex justify-around max-w-xl mx-auto z-40 rounded-t-[32px] shadow-[0_-8px_30px_rgba(0,0,0,0.15)]`}>
        {(['Beginner', 'Intermediate', 'Advanced'] as Level[]).map(l => (
          <button 
            key={l}
            onClick={() => onLevelChange(l)}
            className={`clay-tablet px-5 py-3 rounded-t-[24px] rounded-b-lg text-[9px] font-black tracking-widest transition-all flex flex-col items-center gap-0.5 ${
              state.currentLevel === l 
                ? 'bg-[#A65E44] border-[#8D503A] text-white -translate-y-2' 
                : `bg-transparent border-transparent ${isDark ? 'text-gray-600' : 'text-gray-400'}`
            }`}
          >
            <div className={`w-1 h-1 rounded-full ${state.currentLevel === l ? 'bg-[#C2B280]' : 'bg-transparent'}`}></div>
            {translations[native][l.toLowerCase()]}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Dashboard;
