
import React from 'react';
import { Language } from '../types';

interface Props {
  onSelect: (native: Language, target: Language) => void;
}

const LanguageSelector: React.FC<Props> = ({ onSelect }) => {
  const [native, setNative] = React.useState<Language>('arabic');
  const [target, setTarget] = React.useState<Language>('sorani');

  const options: { id: Language; label: { english: string; arabic: string; sorani: string }; flag: string; available: boolean }[] = [
    { id: 'arabic', label: { english: 'Arabic', arabic: 'العربية', sorani: 'عەرەبی' }, flag: '🇸🇦', available: true },
    { id: 'sorani', label: { english: 'Kurdish', arabic: 'الكوردية', sorani: 'کوردی' }, flag: '☀️', available: true },
    { id: 'english', label: { english: 'English', arabic: 'الإنجليزية', sorani: 'ئینگلیزی' }, flag: '🇺🇸', available: false },
  ];

  const translations = {
    english: {
      title: 'Darga',
      subtitle: 'The Gateway to Mastery',
      nativeLabel: 'Native Tongue',
      goalLabel: 'Learning Goal',
      button: 'Enter the Gateway',
      soon: 'Soon'
    },
    arabic: {
      title: 'دەرگا',
      subtitle: 'البوابة نحو الإتقان',
      nativeLabel: 'اللغة الأم',
      goalLabel: 'هدف التعلم',
      button: 'ادخل البوابة',
      soon: 'قريباً'
    },
    sorani: {
      title: 'دەرگا',
      subtitle: 'دەروازەیەک بۆ لێهاتوویی',
      nativeLabel: 'زمانی دایک',
      goalLabel: 'ئامانجی فێربوون',
      button: 'بچۆ ژوورەوە',
      soon: 'بەمنزیكانە'
    }
  };

  const t = translations[native];
  const isRTL = native === 'arabic' || native === 'sorani';

  const isPathValid = native === 'arabic' && target === 'sorani';

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen p-8 bg-[#121212] transition-colors relative overflow-hidden cobblestone-bg ${isRTL ? 'rtl-layout' : 'ltr-layout'}`}>
      <div className="w-full max-w-sm space-y-12 z-10">
        <div className="text-center flex flex-col items-center">
          {/* Minimal Door Logo with Knob (Dot) */}
          <div className="w-16 h-20 bg-[#A65E44] rounded-t-full border-4 border-[#C2B280] mb-6 flex items-center justify-end px-3 shadow-2xl relative">
             <div className="w-2.5 h-2.5 bg-[#C2B280] rounded-full shadow-inner"></div>
          </div>
          <h1 className="text-5xl font-black text-[#F5F5F5] uppercase tracking-[0.2em]">{t.title}</h1>
          <p className="text-[#C2B280] font-bold mt-2 text-sm tracking-widest uppercase">{t.subtitle}</p>
        </div>

        <div className="space-y-8">
          <div className="space-y-3">
            <label className="text-[10px] font-black text-[#A65E44] tracking-[0.3em] uppercase opacity-80">{t.nativeLabel}</label>
            <div className="grid grid-cols-3 gap-3">
              {options.sort((a,b) => (a.id === 'arabic' ? -1 : 1)).map((opt) => (
                <button
                  key={opt.id}
                  disabled={!opt.available || opt.id !== 'arabic'}
                  onClick={() => setNative(opt.id)}
                  className={`clay-tablet p-4 rounded-xl font-bold transition-all text-[10px] border flex flex-col items-center relative ${
                    native === opt.id ? 'bg-[#A65E44] border-[#8D503A] text-white shadow-[0_0_20px_rgba(166,94,68,0.4)]' : 
                    (opt.id === 'arabic' ? 'bg-[#1E1E1E] border-white/5 text-gray-400' : 'bg-black/40 border-transparent text-gray-700 cursor-not-allowed opacity-40 grayscale')
                  }`}
                >
                  <div className="text-2xl mb-1">{opt.flag}</div>
                  {opt.label[native]}
                  {opt.id !== 'arabic' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                       <span className="bg-[#C2B280] text-black text-[8px] px-1.5 rounded-full font-black uppercase mt-8">{t.soon}</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black text-[#C2B280] tracking-[0.3em] uppercase opacity-80">{t.goalLabel}</label>
            <div className="grid grid-cols-3 gap-3">
              {options.sort((a,b) => (a.id === 'sorani' ? -1 : 1)).map((opt) => (
                <button
                  key={opt.id}
                  disabled={!opt.available || opt.id !== 'sorani'}
                  onClick={() => setTarget(opt.id)}
                  className={`clay-tablet p-4 rounded-xl font-bold transition-all text-[10px] border flex flex-col items-center relative ${
                    target === opt.id ? 'bg-[#C2B280] border-[#A99C70] text-black shadow-[0_0_20px_rgba(194,178,128,0.3)]' : 
                    (opt.id === 'sorani' ? 'bg-[#1E1E1E] border-white/5 text-gray-400' : 'bg-black/40 border-transparent text-gray-700 cursor-not-allowed opacity-40 grayscale')
                  }`}
                >
                  <div className="text-2xl mb-1">{opt.flag}</div>
                  {opt.label[native]}
                  {opt.id !== 'sorani' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                       <span className="bg-[#A65E44] text-white text-[8px] px-1.5 rounded-full font-black uppercase mt-8">{t.soon}</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={() => isPathValid && onSelect(native, target)}
          disabled={!isPathValid}
          className={`clay-tablet w-full py-5 rounded-2xl text-xl font-black uppercase tracking-[0.2em] shadow-xl transition-all ${
            isPathValid 
              ? 'bg-[#A65E44] border-[#8D503A] text-white hover:brightness-110' 
              : 'bg-gray-800 border-gray-900 text-gray-600 grayscale cursor-not-allowed opacity-50'
          }`}
        >
          {t.button}
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector;
