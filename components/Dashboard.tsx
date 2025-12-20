
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

const Dashboard: React.FC<Props> = ({ state, onStartLesson, onLevelChange, onUnlockAll, onToggleTheme }) => {
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
      unlock: 'UNLOCK ALL LESSONS',
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
      unlock: 'فتح جميع الدروس',
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
      unlock: 'کردنەوەی هەموو وانەکان',
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
    <div className={`min-h-screen ${bgColor} ${textColor} pb-40 transition-colors ${isRTL ? 'rtl-layout' : 'ltr-layout'}`}>
      <header className={`sticky top-0 z-50 ${bgColor}/95 backdrop-blur-md p-6 border-b-2 ${panelBorder} flex flex-col gap-5 max-w-xl mx-auto shadow-md`}>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-3">
            <div className="w-10 h-12 bg-[#A65E44] rounded-t-full border-2 border-[#C2B280] flex items-center justify-end px-1 shadow-lg">
              <div className="w-2 h-2 bg-[#C2B280] rounded-full"></div>
            </div>
            <span className="text-sm font-black tracking-widest uppercase">{t.appTitle}</span>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => onToggleTheme(isDark ? 'light' : 'dark')}
              className={`w-12 h-12 rounded-2xl flex items-center justify-center border-b-4 ${panelColor} ${panelBorder} clay-tablet shadow-sm`}
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            <div className={`flex items-center gap-2 px-4 py-2 ${panelColor} rounded-full border-b-4 ${panelBorder} shadow-sm`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#A65E44">
                <path d="M14,6L10.25,11L13.1,14.8L11.5,16C9.81,13.75 7,10 7,10L1,21H23L14,6Z" />
              </svg>
              <span className="text-base font-black text-[#A65E44]">{state.streak}</span>
            </div>
          </div>
        </div>
        <div className="w-full">
          <button 
            onClick={onUnlockAll}
            className={`clay-tablet w-full py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest bg-[#C2B280] border-[#A99C70] text-black shadow-lg`}
          >
            {t.unlock}
          </button>
        </div>
      </header>

      <main className="max-w-xl mx-auto p-6 space-y-12">
        <div className="bg-[#A65E44] p-8 rounded-[36px] flex justify-between items-center shadow-2xl relative overflow-hidden">
          <div className="space-y-1 relative z-10">
            <h2 className="text-[10px] font-black text-white/60 tracking-widest uppercase">{t.level}</h2>
            <div className="text-3xl font-black text-white uppercase tracking-tight">
              {native === 'english' ? state.currentLevel : translations[native][state.currentLevel.toLowerCase()]}
            </div>
            <p className="text-[10px] text-[#C2B280] font-black uppercase tracking-widest">{t.section}</p>
          </div>
          <div className="bg-black/20 p-5 rounded-[24px] border-b-4 border-black/30 text-center min-w-[85px]">
             <div className="text-2xl font-black text-white leading-none">{progress}%</div>
             <div className="text-[8px] font-bold text-white/50 uppercase tracking-widest mt-1.5">{t.ascended}</div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-24 relative py-10">
          <div className={`absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1.5 ${isDark ? 'bg-white/5' : 'bg-[#A65E44]/5'} -z-10`}></div>
          
          {filteredLessons.map((lesson, idx) => {
            const isDone = state.completedLessons[state.currentLevel].includes(lesson.lesson_id);
            const isCurrent = !isDone && (idx === 0 || state.completedLessons[state.currentLevel].includes(filteredLessons[idx-1].lesson_id));
            const isLocked = !isDone && !isCurrent;

            return (
              <div key={lesson.lesson_id} className="relative flex flex-col items-center">
                <button
                  disabled={isLocked}
                  onClick={() => onStartLesson(curriculum.indexOf(lesson))}
                  className={`clay-tablet w-28 h-28 rounded-t-full rounded-b-xl flex items-center justify-center shadow-xl relative ${
                    isDone ? 'bg-[#A65E44] border-[#8D503A] text-white' : 
                    isCurrent ? 'bg-white border-[#C2B280] shadow-[0_8px_0_#C2B280]' : 
                    `${panelColor} ${panelBorder} text-gray-700 opacity-60`
                  }`}
                >
                  <div className={`absolute inset-2.5 border-t-2 border-x-2 ${isDone ? 'border-white/20' : 'border-[#C2B280]/20'} rounded-t-full`}></div>
                  
                  {isDone ? (
                     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  ) : isCurrent ? (
                     <svg width="28" height="28" viewBox="0 0 24 24" fill="#A65E44" className="animate-pulse">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                     </svg>
                  ) : (
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  )}
                </button>
                
                <div className={`absolute top-32 w-64 text-center transition-opacity duration-300 ${isLocked ? 'opacity-30' : 'opacity-100'}`}>
                   <div className="text-[10px] font-black text-[#A65E44] uppercase tracking-widest mb-1">
                     {t.stage} {lesson.lesson_id}
                   </div>
                   <div className="text-xs font-black uppercase leading-tight line-clamp-2 italic tracking-wide px-2">
                     {native === 'english' ? lesson.title_en : native === 'arabic' ? lesson.title_ar : lesson.title_sorani}
                   </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <nav className={`fixed bottom-0 left-0 right-0 ${panelColor} border-t-2 ${panelBorder} p-6 pb-10 flex justify-around max-w-xl mx-auto z-40 rounded-t-[40px] shadow-[0_-10px_40px_rgba(0,0,0,0.2)]`}>
        {(['Beginner', 'Intermediate', 'Advanced'] as Level[]).map(l => (
          <button 
            key={l}
            onClick={() => onLevelChange(l)}
            className={`clay-tablet px-5 py-4 rounded-t-[28px] rounded-b-xl text-[10px] font-black tracking-widest transition-all flex flex-col items-center gap-1 ${
              state.currentLevel === l 
                ? 'bg-[#A65E44] border-[#8D503A] text-white -translate-y-4 shadow-lg scale-110' 
                : `bg-transparent border-transparent ${isDark ? 'text-gray-600' : 'text-gray-400'}`
            }`}
          >
            <div className={`w-1.5 h-1.5 rounded-full ${state.currentLevel === l ? 'bg-[#C2B280]' : 'bg-transparent'}`}></div>
            {translations[native][l.toLowerCase()]}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Dashboard;
