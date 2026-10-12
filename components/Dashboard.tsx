import React from 'react';
import { AppState, Level, Theme } from '../types';
import { curriculum } from '../curriculumData';
import Translator from './Translator';
interface Props { state: AppState; onStartLesson:(index:number)=>void; onLevelChange:(level:Level)=>void; onReset:()=>void; onUnlockAll:()=>void; onToggleTheme:(theme:Theme)=>void }
export default function Dashboard({state,onStartLesson,onLevelChange,onReset,onToggleTheme}:Props) {
 const [tab,setTab]=React.useState('learn');
 const lessons=curriculum.filter(l=>l.level_id===state.currentLevel);
 const done=state.completedLessons[state.currentLevel];
 const progress=Math.round(lessons.filter(l=>done.includes(l.lesson_id)).length/lessons.length*100);
 return <div className="app-shell" data-theme={state.theme}>
 <header className="page-header"><span className="wordmark">Darga<span className="wordmark-detail"> / Learn Sorani</span></span><span className="edition">دەرگا</span></header>
 <main className="page-content">
 {tab==='learn' && <><div className="intro"><span className="eyebrow">A language. A new way in.</span><h1>Open the next door.</h1><div className="progress-caption"><span>{state.currentLevel}</span><span>{progress}%</span></div><div className="progress-track" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}><span style={{width:progress+'%'}}/></div></div>
 <div className="level-tabs">{(['Beginner','Intermediate','Advanced'] as Level[]).map(l=><button key={l} aria-pressed={state.currentLevel===l} onClick={()=>onLevelChange(l)}>{l}</button>)}</div>
 <div className="door-path">{lessons.map((l,i)=>{const completed=done.includes(l.lesson_id);const locked=!completed&&i>0&&!done.includes(lessons[i-1].lesson_id);return <div className={'path-stop '+(i%2?'right':'left')} key={l.lesson_id}>
 {i<lessons.length-1&&<svg className="door-link" viewBox="0 0 400 240" preserveAspectRatio="none" aria-hidden="true"><path d={i%2?'M 290 0 V 90 Q 290 120 260 120 H 140 Q 110 120 110 150 V 240':'M 110 0 V 90 Q 110 120 140 120 H 260 Q 290 120 290 150 V 240'}/></svg>}
 <button className={'lesson-door '+(completed?'completed':locked?'locked':'current')} disabled={locked} onClick={()=>onStartLesson(curriculum.indexOf(l))} aria-label={`${l.title_en}${locked?' — locked':''}`}><span className="door-number">{String(i+1).padStart(2,'0')}</span><span className="door-panel"/><span className="door-handle"/><span className="door-status">{completed?'✓':locked?'—':'↗'}</span></button><div className="door-caption"><span>{completed?'Completed':locked?'Coming next':'Step inside'}</span><h2>{l.title_en}</h2></div></div>})}</div></>}
 {tab==='translate'&&<Translator/>}
 {tab==='settings'&&<section className="settings"><span className="eyebrow">Make yourself at home</span><h1>Settings</h1><div className="setting-row"><div><h2>Night mode</h2><p>A quieter palette after dark.</p></div><button className="toggle" role="switch" aria-checked={state.theme==='dark'} aria-label="Night mode" onClick={()=>onToggleTheme(state.theme==='dark'?'light':'dark')}><span/></button></div><label className="setting-row">Learning level<select value={state.currentLevel} onChange={e=>onLevelChange(e.target.value as Level)}>{['Beginner','Intermediate','Advanced'].map(l=><option key={l}>{l}</option>)}</select></label><button className="text-button" onClick={onReset}>Change learning language</button></section>}
 </main><nav className="bottom-nav" aria-label="Main navigation">{[['learn','⌑','Learn'],['translate','⇄','Translate'],['settings','⚙','Settings']].map(([id,icon,label])=><button key={id} aria-current={tab===id?'page':undefined} onClick={()=>setTab(id)}><span aria-hidden="true">{icon}</span>{label}</button>)}</nav></div>
}
