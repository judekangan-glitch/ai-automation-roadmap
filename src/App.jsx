import { useState, useEffect } from "react";
import { phase1 } from "./data/phase1";
import { phase2 } from "./data/phase2";
import { phase3 } from "./data/phase3";
import { phase4 } from "./data/phase4";
import { phase5 } from "./data/phase5";

const curriculum = [...phase1, ...phase2, ...phase3, ...phase4, ...phase5];

const Icons = {
  Menu: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  ),
  Close: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  ),
  Check: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  ),
  Play: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0070f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </svg>
  )
};

export default function App() {
  const [activeDay, setActiveDay] = useState(curriculum[0]);
  const [completedDays, setCompletedDays] = useState(new Set());
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 1024);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handlePrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handlePrompt);
    return () => window.removeEventListener('beforeinstallprompt', handlePrompt);
  }, []);

  const toggleComplete = (id) => {
    setCompletedDays(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const progress = Math.round((completedDays.size / 30) * 100);

  const renderLecture = (text) => {
    return text.split('\n').map((line, i) => {
      if (line.startsWith('**') && line.endsWith('**')) {
        return <h2 key={i} style={{ marginTop: '2rem', marginBottom: '1rem' }}>{line.replace(/\*\*/g, '')}</h2>;
      }
      if (line.includes('**')) {
        const parts = line.split(/\*\*(.*?)\*\*/g);
        return <p key={i} style={{ marginBottom: '1rem' }}>
          {parts.map((p, j) => j % 2 === 1 ? <strong key={j}>{p}</strong> : p)}
        </p>;
      }
      if (line.trim().startsWith('- ') || line.trim().startsWith('✅') || line.trim().startsWith('□')) {
        return <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '0.5rem', paddingLeft: '1rem' }}>
          <span style={{ color: '#0070f3' }}>•</span> {line.trim().replace(/^[- ✅□] +/, '')}
        </div>;
      }
      if (line.trim() === '') return <div key={i} style={{ height: '1rem' }} />;
      return <p key={i} style={{ marginBottom: '1rem' }}>{line}</p>;
    });
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', width: '100vw' }}>
      {/* MOBILE HEADER */}
      <header style={{ position: 'fixed', top: 0, width: '100%', height: '60px', backgroundColor: 'white', borderBottom: '1px solid #eaeaea', display: 'flex', alignItems: 'center', padding: '0 1rem', zIndex: 100, justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <Icons.Menu />
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/pwa-192x192.png" alt="Logo" style={{ width: '24px', height: '24px', borderRadius: '4px' }} />
            <h1 style={{ fontSize: '1rem', margin: 0 }}>JayKayDee Tech</h1>
          </div>
        </div>
        <div style={{ fontSize: '0.9rem', color: '#666' }}>Progress: {progress}%</div>
      </header>

      {/* SIDEBAR NAVIGATION */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`} style={{ marginTop: '60px' }}>
        <div style={{ padding: '0 0.5rem' }}>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', padding: '0 1rem' }}>30-Day AI Roadmap</h2>
          {curriculum.map(day => (
            <div 
              key={day.day} 
              className={`day-item ${activeDay.day === day.day ? 'active' : ''}`} 
              onClick={() => { setActiveDay(day); if(window.innerWidth <= 1024) setIsSidebarOpen(false); }}
              style={{ display: 'flex', gap: '12px', alignItems: 'center' }}
            >
              <div style={{ 
                width: '18px', height: '18px', borderRadius: '4px', border: `1px solid ${completedDays.has(day.day) ? '#22c55e' : '#ccc'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: completedDays.has(day.day) ? '#22c55e' : 'transparent',
                color: 'white'
              }}>
                {completedDays.has(day.day) && <Icons.Check />}
              </div>
              <span>Day {day.day}: {day.title}</span>
            </div>
          ))}
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="content" style={{ marginTop: '60px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ color: '#0070f3', fontSize: '0.9rem', fontWeight: 600 }}>PHASE {activeDay.phase}: {activeDay.phaseTitle.toUpperCase()}</span>
            <h1 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>{activeDay.title}</h1>
            <p style={{ fontSize: '1.2rem', color: '#666' }}>{activeDay.focus}</p>
          </div>

          <div className="card">
            <h3>Lesson Material</h3>
            {renderLecture(activeDay.lecture)}
          </div>

          <div className="card">
            <h3>Video Resources</h3>
            <p style={{ color: '#666', marginBottom: '1.5rem' }}>Watch these tutorials to deepen your understanding.</p>
            {activeDay.videos.map((v, i) => (
              <a key={i} href={v.url} target="_blank" rel="noopener noreferrer" className="video-link">
                <Icons.Play />
                <div>
                  <div style={{ fontWeight: 600 }}>{v.title}</div>
                  <div style={{ fontSize: '0.8rem', color: '#666' }}>Channel: {v.channel}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="card" style={{ borderLeft: '4px solid #0070f3' }}>
            <h3>Day {activeDay.day} Assignment</h3>
            <p style={{ marginBottom: '1.5rem' }}>{activeDay.task}</p>
            <button className={`btn ${completedDays.has(activeDay.day) ? 'btn-complete' : ''}`} onClick={() => toggleComplete(activeDay.day)}>
              {completedDays.has(activeDay.day) ? 'Completed ✓' : 'Mark as Complete'}
            </button>
          </div>

          <div style={{ textAlign: 'center', padding: '2rem 0', color: '#999', fontSize: '0.8rem' }}>
            JayKayDee Tech AI Automation Roadmap © 2024
          </div>
        </div>
      </main>

      {/* PWA INSTALLATION BANNER */}
      {deferredPrompt && (
        <div style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#333', color: 'white', padding: '1rem 2rem', borderRadius: '10px', display: 'flex', gap: '1.5rem', alignItems: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', zIndex: 2000 }}>
          <span>Install AI Roadmap on your device</span>
          <button className="btn" onClick={() => deferredPrompt.prompt()} style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>Install</button>
        </div>
      )}
    </div>
  );
}
