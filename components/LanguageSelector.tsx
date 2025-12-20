
import React from 'react';
import { Language } from '../types';

interface Props {
  onSelect: (native: Language, target: Language) => void;
}

const LanguageSelector: React.FC<Props> = ({ onSelect }) => {
  const [native, setNative] = React.useState<Language>('arabic');
  const [target, setTarget] = React.useState<Language>('sorani');

  const options: { id: Language; label: { english: string; arabic: string; sorani: string }; available: boolean }[] = [
    { id: 'arabic', label: { english: 'Arabic', arabic: 'العربية', sorani: 'عەرەبی' }, available: true },
    { id: 'sorani', label: { english: 'Kurdish', arabic: 'الكوردية', sorani: 'کوردی' }, available: true },
    { id: 'english', label: { english: 'English', arabic: 'الإنجليزية', sorani: 'ئینگلیزی' }, available: false },
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
    <div className={`flex flex-col items-center justify-center min-h-screen p-6 bg-[#121212] transition-colors relative overflow-hidden ${isRTL ? 'rtl-layout' : 'ltr-layout'}`}>
      <div className="w-full max-w-sm space-y-10 z-10">
        <div className="text-center flex flex-col items-center">
          {/* Enlarged Arch Logo */}
          <div className="w-24 h-32 bg-[#A65E44] rounded-t-full border-[6px] border-[#C2B280] mb-8 flex items-center justify-end px-5 shadow-2xl relative">
             <div className="w-3 h-3 bg-[#C2B280] rounded-full shadow-inner"></div>
          </div>
          <h1 className="text-5xl font-black text-[#F5F5F5] uppercase tracking-wide">{t.title}</h1>
          <p className="text-[#C2B280] font-bold mt-2 text-sm tracking-widest uppercase opacity-80">{t.subtitle}</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <label className="text-[10px] font-black text-[#A65E44] tracking-widest uppercase opacity-80">{t.nativeLabel}</label>
            <div className="grid grid-cols-3 gap-2">
              {options.sort((a,b) => (a.id === 'arabic' ? -1 : 1)).map((opt) => (
                <button
                  key={opt.id}
                  disabled={!opt.available || opt.id !== 'arabic'}
                  onClick={() => setNative(opt.id)}
                  className={`clay-tablet py-5 px-2 rounded-xl font-bold transition-all text-xs flex items-center justify-center text-center relative ${
                    native === opt.id ? 'bg-[#A65E44] border-[#8D503A] text-white shadow-lg' : 
                    (opt.id === 'arabic' ? 'bg-[#1E1E1E] border-white/5 text-gray-400' : 'bg-black/40 border-transparent text-gray-700 cursor-not-allowed opacity-40 grayscale')
                  }`}
                >
                  {opt.label[native]}
                  {opt.id !== 'arabic' && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#C2B280] text-black text-[7px] px-1.5 rounded-full font-black uppercase whitespace-nowrap">{t.soon}</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black text-[#C2B280] tracking-widest uppercase opacity-80">{t.goalLabel}</label>
            <div className="grid grid-cols-3 gap-2">
              {options.sort((a,b) => (a.id === 'sorani' ? -1 : 1)).map((opt) => (
                <button
                  key={opt.id}
                  disabled={!opt.available || opt.id !== 'sorani'}
                  onClick={() => setTarget(opt.id)}
                  className={`clay-tablet py-5 px-2 rounded-xl font-bold transition-all text-xs flex items-center justify-center text-center relative ${
                    target === opt.id ? 'bg-[#C2B280] border-[#A99C70] text-black shadow-lg' : 
                    (opt.id === 'sorani' ? 'bg-[#1E1E1E] border-white/5 text-gray-400' : 'bg-black/40 border-transparent text-gray-700 cursor-not-allowed opacity-40 grayscale')
                  }`}
                >
                  {opt.label[native]}
                  {opt.id !== 'sorani' && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#A65E44] text-white text-[7px] px-1.5 rounded-full font-black uppercase whitespace-nowrap">{t.soon}</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={() => isPathValid && onSelect(native, target)}
          disabled={!isPathValid}
          className={`clay-tablet w-full py-6 rounded-2xl text-lg font-black uppercase tracking-widest shadow-xl transition-all ${
            isPathValid 
              ? 'bg-[#A65E44] border-[#8D503A] text-white' 
              : 'bg-gray-800 border-gray-900 text-gray-600 grayscale opacity-50'
          }`}
        >
          {t.button}
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector;
