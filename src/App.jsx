import { useState, useEffect } from "react";
import { phase1 } from "./data/phase1";
import { phase2 } from "./data/phase2";
import { phase3 } from "./data/phase3";
import { phase4 } from "./data/phase4";
import { phase5 } from "./data/phase5";

const curriculum = [...phase1, ...phase2, ...phase3, ...phase4, ...phase5];

const phaseConfig = {
  1: { color: "#00D4FF", label: "Foundation", emoji: "⚡" },
  2: { color: "#FFB800", label: "AI Integration", emoji: "🧠" },
  3: { color: "#00FF88", label: "Building", emoji: "🔨" },
  4: { color: "#FF6B35", label: "Sales Mastery", emoji: "💰" },
  5: { color: "#BF5FFF", label: "Mastery & Launch", emoji: "🚀" },
};

const Icons = {
  Menu: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  ),
  Close: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  ),
  Check: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  ),
  Play: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
  const pc = phaseConfig[activeDay.phase];

  const renderLecture = (text) => {
    return text.split('\n').map((line, i) => {
      if (line.startsWith('**') && line.endsWith('**')) {
        return <h3 key={i} style={{ color: 'var(--white-high)', fontSize: 'var(--font-size-xl)', margin: '2.5rem 0 1.5rem', fontFamily: 'var(--font-header)', fontWeight: 800 }}>{line.replace(/\*\*/g, '')}</h3>;
      }
      if (line.includes('**')) {
        const parts = line.split(/\*\*(.*?)\*\*/g);
        return <p key={i} className="lecture-text" style={{ marginBottom: '1.5rem' }}>
          {parts.map((p, j) => j % 2 === 1 ? <strong key={j}>{p}</strong> : p)}
        </p>;
      }
      if (line.trim().startsWith('- ') || line.trim().startsWith('✅') || line.trim().startsWith('□')) {
        return <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '1rem', color: 'var(--white-muted)', fontSize: 'var(--font-size-base)', paddingLeft: '1rem' }}>
          <span style={{ color: pc.color }}>▹</span> {line.trim().replace(/^[- ✅□] +/, '')}
        </div>;
      }
      if (line.trim() === '') return <div key={i} style={{ height: '1.5rem' }} />;
      return <p key={i} className="lecture-text" style={{ marginBottom: '1.5rem' }}>{line}</p>;
    });
  };

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden', background: 'var(--background)' }}>
      {/* GLOBAL BACKGROUND - REVERTED TO DARK */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 50% 50%, #111 0%, #050505 100%)', zIndex: 0 }} />

      {/* HEADER */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '70px', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 100, borderBottom: '1px solid var(--border)', background: 'rgba(5,5,5,0.8)', backdropFilter: 'blur(20px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <Icons.Menu />
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src="/pwa-192x192.png" alt="Logo" style={{ width: '32px', height: '32px', borderRadius: '4px' }} />
            <div className="header-title" style={{ fontSize: '1.2rem', color: 'white', textTransform: 'uppercase' }}>JayKayDee Tech</div>
          </div>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--white-muted)' }}>PHASE / {String(activeDay.phase).padStart(2, '0')}</div>
      </header>

      {/* SIDEBAR NAVIGATION */}
      <nav className="glass" style={{ 
        position: window.innerWidth <= 1024 ? 'fixed' : 'relative',
        left: isSidebarOpen ? 0 : '-320px',
        width: '300px',
        height: '100vh',
        zIndex: 200,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 0,
        borderTop: 'none',
        borderBottom: 'none',
        borderLeft: 'none',
        paddingTop: '70px'
      }}>
        <div style={{ padding: '24px', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
             <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '4px', color: 'var(--cyan)' }}>AI ROADMAP</div>
             <button onClick={() => setIsSidebarOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--white-muted)', cursor: 'pointer' }}>
               <Icons.Close />
             </button>
          </div>
          <div style={{ height: '3px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', marginBottom: '10px' }}>
            <div style={{ height: '100%', width: `${progress}%`, background: 'var(--cyan)', boxShadow: '0 0 15px var(--cyan)', transition: 'width 1s ease' }} />
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--white-muted)' }}>ARCHIVE COMPLETION: {progress}%</div>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '16px 8px' }}>
          {curriculum.map(day => (
            <div 
              key={day.day} 
              onClick={() => { setActiveDay(day); if(window.innerWidth <= 1024) setIsSidebarOpen(false); }}
              className="sidebar-item" 
              style={{ 
                padding: '16px 16px', 
                marginBottom: '4px', 
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                background: activeDay.day === day.day ? 'rgba(255,255,255,0.05)' : 'transparent',
                border: `1px solid ${activeDay.day === day.day ? 'rgba(255,255,255,0.1)' : 'transparent'}`
              }}
            >
              <div onClick={(e) => { e.stopPropagation(); toggleComplete(day.day); }} style={{ 
                width: '18px', height: '18px', borderRadius: '4px', border: `1.5px solid ${completedDays.has(day.day) ? 'var(--cyan)' : 'rgba(255,255,255,0.1)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', background: completedDays.has(day.day) ? 'var(--cyan)' : 'transparent',
                color: 'var(--background)', transition: 'all 0.3s'
              }}>
                {completedDays.has(day.day) && <Icons.Check />}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.65rem', color: phaseConfig[day.phase].color, opacity: 1, marginBottom: '2px', fontWeight: 600 }}>DAY {String(day.day).padStart(2, '0')} / {phaseConfig[day.phase].label.toUpperCase()}</div>
                <div style={{ fontSize: '0.95rem', color: activeDay.day === day.day ? 'white' : 'var(--white-muted)', textDecoration: completedDays.has(day.day) ? 'line-through' : 'none', fontWeight: activeDay.day === day.day ? 600 : 400 }}>{day.title}</div>
              </div>
            </div>
          ))}
        </div>
      </nav>

      {/* DASHBOARD CONTENT (BENTO BOX PATTERN) */}
      <main style={{ flex: 1, overflowY: 'auto', padding: '100px 32px 64px', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* HEADER SECTION */}
          <section className="animate-fade-in" style={{ marginBottom: '40px' }}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
              <span style={{ padding: '6px 14px', borderRadius: '100px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: pc.color, fontWeight: 600 }}>DAY {activeDay.day} / {pc.emoji} {pc.label.toUpperCase()}</span>
              <span style={{ padding: '6px 14px', borderRadius: '100px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--white-muted)' }}>{activeDay.focus.toUpperCase()}</span>
            </div>
            <h1 className="header-title" style={{ fontSize: 'var(--font-size-huge)', marginBottom: '20px', color: 'white' }}>
              {activeDay.title}
            </h1>
            <p style={{ color: 'var(--white-muted)', fontSize: '1.25rem', maxWidth: '750px', fontWeight: 300, lineHeight: 1.6 }}>{activeDay.keyTakeaway}</p>
          </section>

          {/* BENTO GRID (ORIGINAL PATTERN) */}
          <div className="bento-grid">
            
            {/* LECTURE MODULE (SPAN 8) */}
            <div className="glass animate-fade-in" style={{ gridColumn: window.innerWidth > 768 ? 'span 8' : 'span 12', padding: '48px', overflowX: 'hidden' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--cyan)', letterSpacing: '4px', marginBottom: '40px', borderLeft: '3px solid var(--cyan)', paddingLeft: '15px' }}>01 / CORE CURRICULUM</div>
              {renderLecture(activeDay.lecture)}
            </div>

            {/* SIDEBAR MODULES (SPAN 4) */}
            <div style={{ gridColumn: window.innerWidth > 768 ? 'span 4' : 'span 12', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* VIDEO MODULE (UPGRADED) */}
              <div className="glass animate-fade-in" style={{ padding: '32px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--cyan)', letterSpacing: '4px', marginBottom: '24px' }}>02 / VIDEO RESOURCES</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {activeDay.videos.map((v, i) => (
                    <a key={i} href={v.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: '20px', borderRadius: '16px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border)', textDecoration: 'none', transition: 'all 0.3s ease' }} className="sidebar-item">
                      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '12px' }}>
                        <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(0,212,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                           <Icons.Play />
                        </div>
                        <div style={{ fontSize: '1rem', fontWeight: 700, color: 'white', lineHeight: 1.3 }}>{v.title}</div>
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--white-muted)', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '10px' }}>
                        <span>CHANNEL: {v.channel.toUpperCase()}</span>
                        <span style={{ color: 'var(--cyan)' }}>WATCH NOW →</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* ASSIGNMENT MODULE */}
              <div className="glass animate-fade-in" style={{ padding: '32px', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--indigo)', letterSpacing: '4px', marginBottom: '24px' }}>03 / EXECUTION PHASE</div>
                <p style={{ fontSize: '1.15rem', color: 'var(--white-muted)', marginBottom: '32px', lineHeight: 1.6, fontWeight: 400 }}>{activeDay.task}</p>
                <button className="holographic-btn" onClick={() => toggleComplete(activeDay.day)} style={{ width: '100%', padding: '20px', borderRadius: '12px' }}>
                  {completedDays.has(activeDay.day) ? 'SYSTEM ARCHIVED ✓' : 'EXECUTE ASSIGNMENT'}
                </button>
              </div>

              {/* RESOURCE ACCESS */}
              <a href={activeDay.resource} target="_blank" rel="noopener noreferrer" className="glass animate-fade-in sidebar-item" style={{ padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none' }}>
                <div style={{ fontSize: '1rem', color: 'white', fontWeight: 600 }}>{activeDay.resourceLabel || 'Premium Library Access'}</div>
                <div style={{ color: 'var(--cyan)', fontSize: '1.2rem' }}>↗</div>
              </a>

            </div>
          </div>
        </div>
      </main>

      {/* PWA INSTALLATION HOVER */}
      {deferredPrompt && (
        <div id="pwa-install-toast" className="glass show animate-fade-in" style={{ width: 'auto', background: 'rgba(10,10,10,0.95)', border: '1px solid var(--cyan)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ fontSize: '0.95rem', fontWeight: 500 }}>Install AI Roadmap as a standalone application</div>
            <button onClick={() => deferredPrompt.prompt()} className="holographic-btn" style={{ padding: '10px 24px', borderRadius: '8px', fontSize: '0.85rem' }}>INSTALL</button>
          </div>
        </div>
      )}
      
      <style>{`
        @media (max-width: 1024px) {
          main { padding-top: 100px; padding-left: 20px; padding-right: 20px; }
          .bento-grid { gap: 1rem; }
        }
      `}</style>
    </div>
  );
}
