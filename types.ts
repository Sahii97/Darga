
export type Language = 'english' | 'arabic' | 'sorani';
export type Level = 'Beginner' | 'Intermediate' | 'Advanced';
export type Theme = 'light' | 'dark';

export interface LessonContent {
  word_sorani: string;
  word_english: string;
  word_arabic: string;
  example_sentence_sorani: string;
  example_sentence_translation_en: string;
  example_sentence_translation_ar: string;
  word_grammar_tip_en: string;
  word_grammar_tip_ar: string;
  word_grammar_tip_sorani: string;
}

export interface Lesson {
  level_id: Level;
  lesson_id: number;
  title_en: string;
  title_ar: string;
  title_sorani: string;
  grammar_tip_en: string;
  grammar_tip_ar: string;
  grammar_tip_sorani: string;
  content: LessonContent[];
}

export interface AppState {
  nativeLanguage: Language;
  targetLanguage: Language;
  currentLevel: Level;
  completedLessons: Record<Level, number[]>;
  streak: number;
  theme: Theme;
}
