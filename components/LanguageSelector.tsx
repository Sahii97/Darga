
import React from 'react';
import { Language } from '../types';

interface Props {
  onSelect: (native: Language, target: Language) => void;
}

const LanguageSelector: React.FC<Props> = ({ onSelect }) => {
  const [native, setNative] = React.useState<Language>('english');
  const [target, setTarget] = React.useState<Language>('sorani');

  const options: { id: Language; label: { english: string; arabic: string; sorani: string }; available: boolean }[] = [
    { id: 'arabic', label: { english: 'Arabic', arabic: 'العربية', sorani: 'عەرەبی' }, available: true },
    { id: 'sorani', label: { english: 'Kurdish', arabic: 'الكوردية', sorani: 'کوردی' }, available: true },
    { id: 'english', label: { english: 'English', arabic: 'الإنجليزية', sorani: 'ئینگلیزی' }, available: true },
  ];

  const translations = {
    english: {
      title: 'Darga',
      subtitle: 'The Gateway to Mastery',
      nativeLabel: 'I speak',
      goalLabel: 'I want to learn',
      button: 'Enter the Gateway',
      soon: 'Soon'
    },
    arabic: {
      title: 'دەرگا',
      subtitle: 'البوابة نحو الإتقان',
      nativeLabel: 'أنا أتحدث',
      goalLabel: 'أريد أن أتعلم',
      button: 'ادخل البوابة',
      soon: 'قريباً'
    },
    sorani: {
      title: 'دەرگا',
      subtitle: 'دەروازەیەک بۆ لێهاتوویی',
      nativeLabel: 'من دەدوێم',
      goalLabel: 'دەمهەوێت فێربم',
      button: 'بچۆ ژوورەوە',
      soon: 'بەمنزیكانە'
    }
  };

  const t = translations[native];
  const isRTL = native === 'arabic' || native === 'sorani';

  const isPathValid = native !== 'sorani' && target === 'sorani';

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen p-6 bg-[#121212] transition-colors relative overflow-hidden ${isRTL ? 'rtl-layout' : 'ltr-layout'}`}>
      <div className="w-full max-w-sm space-y-8 z-10">
        <div className="text-center flex flex-col items-center">
          <div className="w-24 h-32 bg-[#A65E44] rounded-t-lg border-[6px] border-[#C2B280] mb-6 flex items-center justify-end px-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative">
             <div className="w-3 h-3 bg-[#C2B280] rounded-full shadow-inner"></div>
             <div className="absolute inset-0 border-t-2 border-x-2 border-white/5 rounded-t-lg"></div>
          </div>
          <h1 className="text-4xl font-black text-[#F5F5F5] uppercase tracking-wide">{t.title}</h1>
          <p className="text-[#C2B280] font-bold mt-1 text-[10px] tracking-widest uppercase opacity-80">{t.subtitle}</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-[#A65E44] tracking-widest uppercase opacity-80">{t.nativeLabel}</label>
            <div className="grid grid-cols-3 gap-2">
              {options.map((opt) => (
                <button
                  key={opt.id}
                  disabled={opt.id === 'sorani'}
                  onClick={() => setNative(opt.id)}
                  className={`clay-tablet py-4 px-1 rounded-xl font-bold transition-all text-[11px] flex items-center justify-center text-center relative ${
                    native === opt.id ? 'bg-[#A65E44] border-[#8D503A] text-white shadow-lg' : 
                    (opt.id === 'arabic' ? 'bg-[#1E1E1E] border-white/5 text-gray-500' : 'bg-black/40 border-transparent text-gray-700 cursor-not-allowed opacity-30 grayscale')
                  }`}
                >
                  {opt.label[native]}
                  {opt.id === 'sorani' && <span className="absolute -bottom-1 text-[7px] text-[#C2B280] font-black">{t.soon}</span>}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-[#C2B280] tracking-widest uppercase opacity-80">{t.goalLabel}</label>
            <div className="grid grid-cols-3 gap-2">
              {options.map((opt) => (
                <button
                  key={opt.id}
                  disabled={!opt.available || opt.id !== 'sorani'}
                  onClick={() => setTarget(opt.id)}
                  className={`clay-tablet py-4 px-1 rounded-xl font-bold transition-all text-[11px] flex items-center justify-center text-center relative ${
                    target === opt.id ? 'bg-[#C2B280] border-[#A99C70] text-black shadow-lg' : 
                    (opt.id === 'sorani' ? 'bg-[#1E1E1E] border-white/5 text-gray-500' : 'bg-black/40 border-transparent text-gray-700 cursor-not-allowed opacity-30 grayscale')
                  }`}
                >
                  {opt.label[native]}
                  {opt.id !== 'sorani' && <span className="absolute -bottom-1 text-[7px] text-[#A65E44] font-black">{t.soon}</span>}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={() => isPathValid && onSelect(native, target)}
          disabled={!isPathValid}
          className={`clay-tablet w-full py-5 rounded-2xl text-base font-black uppercase tracking-widest shadow-xl transition-all ${
            isPathValid 
              ? 'bg-[#A65E44] border-[#8D503A] text-white' 
              : 'bg-gray-800 border-gray-900 text-gray-600 grayscale opacity-40'
          }`}
        >
          {t.button}
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector;
