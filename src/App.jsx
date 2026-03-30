import { useState, useEffect, useMemo } from "react";
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

// --- SVG ICONS ---
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
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </svg>
  )
};

export default function App() {
  const [activeDay, setActiveDay] = useState(curriculum[0]);
  const [completedDays, setCompletedDays] = useState(new Set());
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 1024);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallToast, setShowInstallToast] = useState(false);

  // --- PWA INSTALL LOGIC ---
  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallToast(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setShowInstallToast(false);
    }
  };

  const progress = Math.round((completedDays.size / 30) * 100);
  const pc = phaseConfig[activeDay.phase];

  const toggleComplete = (dayId) => {
    setCompletedDays(prev => {
      const next = new Set(prev);
      next.has(dayId) ? next.delete(dayId) : next.add(dayId);
      return next;
    });
  };

  const renderLecture = (text) => {
    return text.split('\n').map((line, i) => {
      if (line.startsWith('**') && line.endsWith('**')) {
        return <h3 key={i} style={{ color: 'var(--white-frosted)', fontSize: '1.4rem', margin: '2rem 0 1rem', fontFamily: 'var(--font-serif)' }}>{line.replace(/\*\*/g, '')}</h3>;
      }
      if (line.includes('**')) {
        const parts = line.split(/\*\*(.*?)\*\*/g);
        return <p key={i} style={{ lineHeight: '1.8', color: 'var(--gray-muted)', marginBottom: '1.2rem', fontSize: '1rem', fontWeight: 300 }}>
          {parts.map((p, j) => j % 2 === 1 ? <strong key={j} style={{ color: 'var(--white-frosted)', fontWeight: 500 }}>{p}</strong> : p)}
        </p>;
      }
      if (line.trim().startsWith('- ') || line.trim().startsWith('✅') || line.trim().startsWith('□')) {
        return <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '0.8rem', color: 'var(--gray-muted)', fontSize: '1rem', fontWeight: 300, paddingLeft: '1rem' }}>
          <span style={{ color: pc.color }}>▹</span> {line.trim().replace(/^[- ✅□] +/, '')}
        </div>;
      }
      if (line.trim() === '') return <div key={i} style={{ height: '1rem' }} />;
      return <p key={i} style={{ lineHeight: '1.8', color: 'var(--gray-muted)', marginBottom: '1.2rem', fontSize: '1rem', fontWeight: 300 }}>{line}</p>;
    });
  };

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden', background: 'var(--background)', position: 'relative' }}>
      {/* GLOBAL BACKGROUND ENHANCEMENTS */}
      <div style={{ 
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
        backgroundImage: 'url(/src/assets/hero-bg.png)', 
        backgroundSize: 'cover', backgroundPosition: 'center', 
        opacity: 0.15, pointerEvents: 'none', zIndex: 0,
        filter: 'grayscale(100%) contrast(120%)',
        transform: 'scale(1.1)' 
      }} />

      {/* MOBILE HEADER */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '70px', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 100, borderBottom: '1px solid var(--border)', background: 'rgba(5,5,5,0.8)', backdropFilter: 'blur(20px)' }}>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} style={{ background: 'none', border: 'none', color: 'var(--white-frosted)', cursor: 'pointer' }}>
          <Icons.Menu />
        </button>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 700 }}>JayKayDee Tech</div>
        <div style={{ width: '24px' }}></div>
      </header>

      {/* SIDEBAR NAVIGATION */}
      <nav className="glass" style={{ 
        position: window.innerWidth <= 1024 ? 'fixed' : 'relative',
        left: isSidebarOpen ? 0 : '-320px',
        width: '300px',
        height: '100vh',
        zIndex: 200,
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 0,
        borderTop: 'none',
        borderBottom: 'none',
        borderLeft: 'none'
      }}>
        <div style={{ padding: '32px 24px 16px', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
             <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '4px', color: 'var(--cyan)' }}>COLLECTION</div>
             <button onClick={() => setIsSidebarOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--gray-muted)', cursor: 'pointer' }}>
               <Icons.Close />
             </button>
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '24px' }}>AI Roadmap</h2>
          <div style={{ height: '2px', background: 'var(--gray-deep)', borderRadius: '2px', marginBottom: '12px' }}>
            <div style={{ height: '100%', width: `${progress}%`, background: 'var(--cyan)', boxShadow: '0 0 10px var(--cyan-glow)', transition: 'width 1s ease' }} />
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--gray-muted)' }}>{progress}% ARCHIVED</div>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '16px 8px' }}>
          {curriculum.map(day => (
            <div 
              key={day.day} 
              onClick={() => { setActiveDay(day); if(window.innerWidth <= 1024) setIsSidebarOpen(false); }}
              className="glass-card" 
              style={{ 
                padding: '16px 16px', 
                marginBottom: '4px', 
                borderRadius: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                background: activeDay.day === day.day ? 'var(--gray-deep)' : 'transparent',
                border: `1px solid ${activeDay.day === day.day ? 'var(--border-light)' : 'transparent'}`
              }}
            >
              <div onClick={(e) => { e.stopPropagation(); toggleComplete(day.day); }} style={{ 
                width: '18px', height: '18px', borderRadius: '4px', border: `1.5px solid ${completedDays.has(day.day) ? 'var(--cyan)' : 'var(--gray-deep)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', background: completedDays.has(day.day) ? 'var(--cyan)' : 'transparent',
                color: 'var(--background)', transition: 'all 0.3s'
              }}>
                {completedDays.has(day.day) && <Icons.Check />}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.65rem', color: phaseConfig[day.phase].color, opacity: 0.8, marginBottom: '2px' }}>DAY {String(day.day).padStart(2, '0')}</div>
                <div style={{ fontSize: '0.85rem', color: activeDay.day === day.day ? 'white' : 'var(--gray-muted)', textDecoration: completedDays.has(day.day) ? 'line-through' : 'none' }}>{day.title}</div>
              </div>
            </div>
          ))}
        </div>
      </nav>

      {/* DASHBOARD CONTENT */}
      <main style={{ flex: 1, overflowY: 'auto', padding: '100px 32px 64px', perspective: '1000px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* HEADER SECTION */}
          <section className="animate-fade-in" style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
              <span style={{ padding: '6px 12px', borderRadius: '100px', background: 'var(--gray-deep)', border: '1px solid var(--border)', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: pc.color }}>{pc.emoji} {pc.label.toUpperCase()}</span>
              <span style={{ padding: '6px 12px', borderRadius: '100px', background: 'var(--gray-deep)', border: '1px solid var(--border)', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--gray-muted)' }}>{activeDay.focus.toUpperCase()}</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, marginBottom: '16px', lineHeight: 1 }}>
              {activeDay.title}
            </h1>
            <p style={{ color: 'var(--gray-muted)', fontSize: '1.2rem', maxWidth: '600px', fontWeight: 300 }}>{activeDay.keyTakeaway}</p>
          </section>

          {/* BENTO GRID */}
          <div className="bento-grid">
            
            {/* LECTURE MODULE */}
            <div className="glass glass-card animate-fade-in" style={{ gridColumn: window.innerWidth > 768 ? 'span 8' : 'span 12', padding: '48px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--cyan)', letterSpacing: '4px', marginBottom: '32px' }}>01 / LECTURE</div>
              {renderLecture(activeDay.lecture)}
            </div>

            {/* SIDEBAR MODULES */}
            <div style={{ gridColumn: window.innerWidth > 768 ? 'span 4' : 'span 12', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* VIDEO MODULE */}
              <div className="glass glass-card animate-fade-in" style={{ padding: '32px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--cyan)', letterSpacing: '4px', marginBottom: '24px' }}>02 / VISUALS</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {activeDay.videos.map((v, i) => (
                    <a key={i} href={v.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', gap: '16px', padding: '16px', borderRadius: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)', textDecoration: 'none' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--gray-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                         <Icons.Play />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.8rem', fontWeight: 500, color: 'white' }}>{v.title}</div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--gray-muted)' }}>{v.channel}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* ASSIGNMENT MODULE */}
              <div className="glass glass-card animate-fade-in" style={{ padding: '32px', border: '1px solid var(--indigo)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--indigo)', letterSpacing: '4px', marginBottom: '24px' }}>03 / ACTION</div>
                <p style={{ fontSize: '0.95rem', color: 'var(--gray-muted)', marginBottom: '32px', lineHeight: 1.6 }}>{activeDay.task}</p>
                <button className="holographic-btn" onClick={() => toggleComplete(activeDay.day)} style={{ width: '100%', padding: '16px', borderRadius: '12px' }}>
                  {completedDays.has(activeDay.day) ? 'SYSTEM ARCHIVED' : 'EXECUTE ASSIGNMENT'}
                </button>
              </div>

              {/* RESOURCE MODULE */}
              <a href={activeDay.resource} target="_blank" rel="noopener noreferrer" className="glass glass-card animate-fade-in" style={{ padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ fontSize: '0.85rem' }}>View Resources</div>
                <div style={{ color: 'var(--cyan)' }}>→</div>
              </a>

            </div>
          </div>
        </div>
      </main>

      {/* INSTALL TOAST */}
      <div id="pwa-install-toast" className={`glass ${showInstallToast ? 'show' : ''}`} style={{ width: 'auto' }}>
        <div style={{ fontSize: '0.9rem' }}>Install AI Roadmap for a premium mobile experience</div>
        <button onClick={handleInstallClick} className="holographic-btn" style={{ padding: '8px 16px', borderRadius: '8px', fontSize: '0.8rem' }}>INSTALL</button>
      </div>
      
      <style>{`
        @media (max-width: 1024px) {
          main { padding-top: 120px; }
        }
      `}</style>
    </div>
  );
}

function hexToRgb(hex) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r ? `${parseInt(r[1],16)},${parseInt(r[2],16)},${parseInt(r[3],16)}` : "255,255,255";
}
