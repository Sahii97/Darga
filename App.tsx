
import React from 'react';
import { Language, AppState, Level, Theme } from './types';
import { curriculum } from './curriculumData';
import LanguageSelector from './components/LanguageSelector';
import Dashboard from './components/Dashboard';
import LessonSession from './components/LessonSession';

const App: React.FC = () => {
  const [state, setState] = React.useState<AppState | null>(() => { try { return JSON.parse(localStorage.getItem("darga-state") || "null"); } catch { return null; } });
  const [activeLessonIndex, setActiveLessonIndex] = React.useState<number | null>(null);

  React.useEffect(() => { localStorage.setItem("darga-state", JSON.stringify(state)); }, [state]);

  const handleLangSelect = (native: Language, target: Language) => {
    setState({
      nativeLanguage: native,
      targetLanguage: target,
      currentLevel: 'Beginner',
      completedLessons: {
        Beginner: [],
        Intermediate: [],
        Advanced: []
      },
      streak: 1,
      theme: 'dark'
    });
  };

  const handleLevelChange = (level: Level) => {
    if (state) setState({ ...state, currentLevel: level });
  };

  const handleToggleTheme = (theme: Theme) => {
    if (state) setState({ ...state, theme });
  };

  const handleUnlockAll = () => {
    if (state) {
      const allCompleted: Record<Level, number[]> = {
        Beginner: curriculum.filter(l => l.level_id === 'Beginner').map(l => l.lesson_id),
        Intermediate: curriculum.filter(l => l.level_id === 'Intermediate').map(l => l.lesson_id),
        Advanced: curriculum.filter(l => l.level_id === 'Advanced').map(l => l.lesson_id)
      };
      setState({ ...state, completedLessons: allCompleted });
    }
  };

  const handleReset = () => {
    setState(null);
  };

  const handleLessonComplete = () => {
    if (state && activeLessonIndex !== null) {
      const lesson = curriculum[activeLessonIndex];
      const updatedCompleted = { ...state.completedLessons, [lesson.level_id]: [...state.completedLessons[lesson.level_id]] };
      if (!updatedCompleted[lesson.level_id].includes(lesson.lesson_id)) {
        updatedCompleted[lesson.level_id].push(lesson.lesson_id);
      }
      
      setState({
        ...state,
        completedLessons: updatedCompleted,
        streak: state.streak + 1
      });
    }
    setActiveLessonIndex(null);
  };

  if (!state) {
    return <LanguageSelector onSelect={handleLangSelect} />;
  }

  return (
    <div className="min-h-screen">
      {activeLessonIndex !== null ? (
        <LessonSession 
          state={state} 
          lesson={curriculum[activeLessonIndex]}
          onComplete={handleLessonComplete}
          onExit={() => setActiveLessonIndex(null)}
        />
      ) : (
        <Dashboard 
          state={state} 
          onStartLesson={(idx) => setActiveLessonIndex(idx)}
          onLevelChange={handleLevelChange}
          onReset={handleReset}
          onUnlockAll={handleUnlockAll}
          onToggleTheme={handleToggleTheme}
        />
      )}
    </div>
  );
};

export default App;
