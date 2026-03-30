import { useState, useEffect } from "react";
import { phase1 } from "./data/phase1";
import { phase2 } from "./data/phase2";
import { phase3 } from "./data/phase3";
import { phase4 } from "./data/phase4";
import { phase5 } from "./data/phase5";

const curriculum = [...phase1, ...phase2, ...phase3, ...phase4, ...phase5];

const phaseConfig = {
  1: { color: "#0D9488", label: "Foundation", emoji: "01" },
  2: { color: "#065F46", label: "AI Integration", emoji: "02" },
  3: { color: "#064E3B", label: "Building Systems", emoji: "03" },
  4: { color: "#115E59", label: "Sales Strategy", emoji: "04" },
  5: { color: "#134E4A", label: "Mastery & Launch", emoji: "05" },
};

const Icons = {
  Menu: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="12" x2="20" y2="12"></line>
      <line x1="4" y1="6" x2="20" y2="6"></line>
      <line x1="4" y1="18" x2="20" y2="18"></line>
    </svg>
  ),
  Close: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  ),
  Check: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  ),
  Play: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
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
        return <h2 key={i} className="magazine-header animate-reveal" style={{ fontSize: '2.5rem', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--titanium)' }}>{line.replace(/\*\*/g, '')}</h2>;
      }
      if (line.trim().startsWith('- ') || line.trim().startsWith('✅') || line.trim().startsWith('□')) {
        return <div key={i} className="animate-reveal" style={{ padding: '0.75rem 0', borderBottom: '1px solid var(--border)', fontSize: '0.95rem', color: 'var(--gray-medium)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span style={{ color: 'var(--emerald)', fontSize: '1.2rem' }}>•</span> {line.trim().replace(/^[- ✅□] +/, '')}
        </div>;
      }
      if (line.trim() === '') return <div key={i} style={{ height: '1.5rem' }} />;
      return <p key={i} className="animate-reveal" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--gray-medium)', marginBottom: '1.5rem', letterSpacing: '-0.01em' }}>{line}</p>;
    });
  };

  return (
    <div style={{ background: '#ffffff', color: 'var(--titanium)', minHeight: '100vh', width: '100vw', position: 'relative' }}>
      {/* MINIMAL NAV */}
      <header style={{ position: 'fixed', top: 0, width: '100%', height: '80px', borderBottom: '1px solid var(--border)', zIndex: 100, background: 'rgba(255,255,255,1)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', padding: '0 3rem', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <Icons.Menu />
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src="/pwa-192x192.png" alt="Logo" style={{ width: '32px', height: '32px', borderRadius: '4px' }} />
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px' }}>JayKayDee Tech</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '3rem', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--gray-light)' }}>
          <div>CURRICULUM v1.0</div>
          <div>EST. 2024</div>
        </div>
      </header>

      {/* SIDEBAR NAVIGATION (EDITORIAL STYLE) */}
      <nav style={{ position: 'fixed', left: isSidebarOpen ? 0 : '-350px', top: '80px', bottom: 0, width: '350px', background: 'var(--background)', borderRight: '1px solid var(--border)', transition: 'left 0.4s cubic-bezier(0.4, 0, 0.2, 1)', zIndex: 90, display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '3rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--emerald)', marginBottom: '1rem' }}>EDITION / 01</div>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', lineHeight: 1, marginBottom: '2rem' }}>AI Automation Roadmap</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--gray-light)' }}>
            <div>COMPLETION</div>
            <div>{progress}%</div>
          </div>
          <div style={{ height: '1px', background: 'var(--border)', marginTop: '8px', position: 'relative' }}>
             <div style={{ position: 'absolute', top: 0, left: 0, height: '1px', width: `${progress}%`, background: 'var(--emerald)' }} />
          </div>
        </div>
        
        <div style={{ flex: 1, overflowY: 'auto', padding: '1rem 0' }}>
          {curriculum.map(day => (
            <div 
              key={day.day} 
              className="sidebar-item" 
              onClick={() => { setActiveDay(day); if(window.innerWidth < 1024) setIsSidebarOpen(false); }}
              style={{ padding: '1.5rem 3rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '1.5rem', background: activeDay.day === day.day ? 'var(--surface-alt)' : 'transparent' }}
            >
              <div style={{ width: '16px', height: '16px', border: `1px solid ${completedDays.has(day.day) ? 'var(--emerald)' : 'var(--border)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {completedDays.has(day.day) && <Icons.Check />}
              </div>
              <div>
                <div style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: phaseConfig[day.phase].color }}>SECTION {phaseConfig[day.phase].emoji}</div>
                <div style={{ fontSize: '0.9rem', color: activeDay.day === day.day ? 'black' : 'var(--gray-medium)', fontWeight: activeDay.day === day.day ? 600 : 400 }}>{day.title}</div>
              </div>
            </div>
          ))}
        </div>
      </nav>

      {/* DASHBOARD CONTENT (ASYMMETRICAL GRID) */}
      <main style={{ marginLeft: isSidebarOpen && window.innerWidth > 1024 ? '350px' : 0, transition: 'margin 0.4s ease', paddingTop: '80px' }}>
        <div className="architectural-grid animate-reveal" style={{ padding: '0 6rem 6rem' }}>
          
          {/* HEADER HERO SECTION */}
          <div style={{ gridColumn: 'span 12', padding: '6rem 0' }}>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
              <span style={{ fontSize: '0.7rem', border: '1px solid var(--border)', padding: '0.4rem 1rem', borderRadius: '100px', background: 'var(--emerald-light)', color: 'var(--emerald)', fontFamily: 'var(--font-mono)' }}>{pc.label.toUpperCase()}</span>
              <span style={{ fontSize: '0.7rem', border: '1px solid var(--border)', padding: '0.4rem 1rem', borderRadius: '100px', color: 'var(--gray-light)', fontFamily: 'var(--font-mono)' }}>{activeDay.focus.toUpperCase()}</span>
            </div>
            <h1 className="magazine-header" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 900, color: 'var(--titanium)', maxWidth: '900px', marginBottom: '2rem' }}>
              {activeDay.title}
            </h1>
            <div style={{ width: '120px', height: '2px', background: 'var(--emerald)', marginBottom: '4rem' }} />
            <div style={{ width: '100%', height: '400px', backgroundImage: 'url(/src/assets/hero-light.png)', backgroundSize: 'cover', backgroundPosition: 'center', border: '1px solid var(--border)' }} />
          </div>

          {/* LECTURE (MAIN COLUMN) */}
          <div style={{ gridColumn: 'span 7' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--emerald)', borderBottom: '1px solid var(--border)', paddingBottom: '1rem', marginBottom: '3rem' }}>ISSUE NO. {String(activeDay.day).padStart(2, '0')} / TRANSCRIPT</div>
            {renderLecture(activeDay.lecture)}
          </div>

          {/* SIDEBAR (MAGAZINE STYLE) */}
          <div style={{ gridColumn: 'span 4', gridColumnStart: 9, display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            
            {/* ACTION MODULE */}
            <div className="brushed-aluminum" style={{ padding: '3rem' }}>
              <div style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--gray-light)', marginBottom: '1.5rem' }}>APPLICATION / EXECUTE</div>
              <p style={{ fontSize: '1rem', color: 'var(--gray-medium)', lineHeight: 1.6, marginBottom: '2rem' }}>{activeDay.task}</p>
              <button className="emerald-btn" onClick={() => toggleComplete(activeDay.day)} style={{ width: '100%', padding: '1.2rem', textTransform: 'uppercase', fontSize: '0.8rem' }}>
                {completedDays.has(activeDay.day) ? 'TASK VERIFIED' : 'COMMIT ACTION'}
              </button>
            </div>

            {/* VISUALS MODULE */}
            <div>
              <div style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--emerald)', borderBottom: '1px solid var(--border)', paddingBottom: '1rem', marginBottom: '2rem' }}>MEDIA / VISUALS</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {activeDay.videos.map((v, i) => (
                  <a key={i} href={v.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', gap: '1rem', textDecoration: 'none', borderBottom: '1px solid var(--border)', paddingBottom: '1.5rem', color: 'inherit' }}>
                    <div style={{ width: '32px', height: '32px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icons.Play /></div>
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'black' }}>{v.title}</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--gray-light)' }}>PLATFORM: YouTube / CHANNEL: {v.channel}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* KEY TAKEAWAY */}
            <div style={{ borderLeft: '4px solid var(--emerald)', paddingLeft: '2rem' }}>
              <div style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--emerald)', marginBottom: '1rem' }}>PRIMARY / OBJECTIVE</div>
              <p style={{ fontSize: '1.1rem', fontFamily: 'var(--font-serif)', color: 'var(--titanium)', fontWeight: 700 }}>"{activeDay.keyTakeaway}"</p>
            </div>

          </div>
        </div>
      </main>

      {/* PWA INSTALL PROMPT */}
      {deferredPrompt && (
        <div className="animate-reveal brushed-aluminum" style={{ position: 'fixed', bottom: '40px', right: '40px', padding: '1.5rem 2.5rem', zIndex: 1000, display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 600 }}>Install Archive Experience</div>
          <button onClick={() => deferredPrompt.prompt()} className="emerald-btn" style={{ padding: '0.6rem 1.2rem', fontSize: '0.7rem' }}>INSTALL</button>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          main { margin-left: 0 !important; }
          .architectural-grid { padding: 3rem 1.5rem !important; }
          header { padding: 0 1.5rem !important; }
          div[style*="gridColumn: span 7"] { grid-column: span 12 !important; }
          div[style*="gridColumn: span 4"] { grid-column: span 12 !important; grid-column-start: 1 !important; }
        }
      `}</style>
    </div>
  );
}
