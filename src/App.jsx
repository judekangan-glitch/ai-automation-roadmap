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

const youtubeChannels = {
  liam: { name: "Liam Ottley", desc: "AI Automation Agency (AAA) pioneer.", url: "https://www.youtube.com/@LiamOttley" },
  nate: { name: "Nate Herk", desc: "No-code and AI automation flows.", url: "https://www.youtube.com/@nateherk" },
  corbin: { name: "Corbin AI", desc: "Cutting-edge AI automation builds.", url: "https://www.youtube.com/@CorbinAI" },
  david: { name: "David Ondrej", desc: "AI tools and agency scaling.", url: "https://www.youtube.com/@DavidOndrej" }
};

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
};

export default function App() {
  const [activeDay, setActiveDay] = useState(curriculum[0]);
  const [activeTab, setActiveTab] = useState("lecture");
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
        return <h3 key={i} style={{ color: "#E8E4D9", fontSize: "1.25rem", margin: "2rem 0 1rem", fontWeight: 600 }}>{line.replace(/\*\*/g, '')}</h3>;
      }
      if (line.includes('**')) {
        const parts = line.split(/\*\*(.*?)\*\*/g);
        return <p key={i} style={{ marginBottom: "1.25rem", lineHeight: 1.7, color: "#8A8F9E", fontWeight: 300 }}>
          {parts.map((p, j) => j % 2 === 1 ? <strong key={j} style={{ color: "#E8E4D9", fontWeight: 500 }}>{p}</strong> : p)}
        </p>;
      }
      if (line.trim().startsWith('- ') || line.trim().startsWith('✅') || line.trim().startsWith('□')) {
        return <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '0.75rem', color: '#8A8F9E', fontSize: '0.95rem', paddingLeft: '1rem' }}>
          <span style={{ color: pc.color }}>▹</span> {line.trim().replace(/^[- ✅□] +/, '')}
        </div>;
      }
      if (line.trim() === '') return <div key={i} style={{ height: '1.25rem' }} />;
      return <p key={i} style={{ marginBottom: "1.25rem", lineHeight: 1.7, color: "#8A8F9E", fontWeight: 300 }}>{line}</p>;
    });
  };

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden', background: '#050505', color: '#E8E4D9', fontFamily: "'Inter', sans-serif" }}>
      
      {/* SIDEBAR NAVIGATION - RESTORED ORIGINAL NATURE */}
      <nav style={{ 
        width: "320px", 
        borderRight: "1px solid rgba(255,255,255,0.05)", 
        display: isSidebarOpen ? "flex" : "none", 
        flexDirection: "column",
        background: "#080808",
        height: "100vh",
        zIndex: 100,
        position: window.innerWidth <= 1024 ? "fixed" : "relative"
      }}>
        <div style={{ padding: "2rem", borderBottom: "1px solid rgba(255,255,255,0.05)", display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="/pwa-192x192.png" alt="Logo" style={{ width: '32px', height: '32px', borderRadius: '6px' }} />
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "#5A6070", letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "4px" }}>JayKayDee Tech</div>
            <div style={{ fontSize: "1rem", fontWeight: 600 }}>AI ROADMAP</div>
          </div>
          {window.innerWidth <= 1024 && <button onClick={() => setIsSidebarOpen(false)} style={{ marginLeft: 'auto', background: 'none', border: 'none', color: '#5A6070' }}><Icons.Close /></button>}
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '1rem' }}>
          {curriculum.map(day => (
            <div 
              key={day.day} 
              onClick={() => { setActiveDay(day); setActiveTab("lecture"); if(window.innerWidth <= 1024) setIsSidebarOpen(false); }}
              style={{ 
                padding: '1rem', 
                marginBottom: '4px', 
                borderRadius: '12px',
                cursor: 'pointer',
                background: activeDay.day === day.day ? 'rgba(255,255,255,0.03)' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                border: activeDay.day === day.day ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent'
              }}
            >
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: completedDays.has(day.day) ? '#00FF88' : phaseConfig[day.phase].color,boxShadow: completedDays.has(day.day) ? '0 0 10px #00FF88' : 'none' }}></div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.6rem', color: '#5A6070', marginBottom: '2px' }}>DAY {String(day.day).padStart(2, '0')}</div>
                <div style={{ fontSize: '0.9rem', color: activeDay.day === day.day ? '#FFF' : '#8A8F9E', fontWeight: activeDay.day === day.day ? 500 : 400 }}>{day.title}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ padding: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.05)", background: "#060606" }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '8px' }}>
             <span style={{ color: '#5A6070' }}>PROGRESS</span>
             <span style={{ color: '#E8E4D9' }}>{progress}%</span>
          </div>
          <div style={{ height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${progress}%`, background: '#00D4FF', boxShadow: '0 0 10px #00D4FF' }}></div>
          </div>
        </div>
      </nav>

      {/* MAIN DASHBOARD */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100vh', position: 'relative' }}>
        
        {/* TOP HEADER */}
        <header style={{ 
          height: "80px", 
          borderBottom: "1px solid rgba(255,255,255,0.05)", 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          padding: '0 2.5rem',
          zIndex: 50
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} style={{ background: 'none', border: 'none', color: '#E8E4D9', cursor: 'pointer' }}><Icons.Menu /></button>
            <div style={{ height: '24px', width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button 
                onClick={() => setActiveTab("lecture")}
                style={{ 
                  background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px',
                  color: activeTab === "lecture" ? pc.color : "#5A6070",
                  transition: 'all 0.3s' 
                }}
              >LECTURE</button>
              <button 
                onClick={() => setActiveTab("videos")}
                style={{ 
                  background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px',
                  color: activeTab === "videos" ? pc.color : "#5A6070",
                  transition: 'all 0.3s' 
                }}
              >VIDEOS</button>
              <button 
                onClick={() => setActiveTab("task")}
                style={{ 
                  background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px',
                  color: activeTab === "task" ? pc.color : "#5A6070",
                  transition: 'all 0.3s' 
                }}
              >TASK</button>
            </div>
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", color: "#5A6070" }}>PHASE / {String(activeDay.phase).padStart(2, '0')}</div>
        </header>

        {/* SCROLLABLE CONTENT */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '4rem 2.5rem 6rem' }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            
            {/* Day Header */}
            <div style={{ marginBottom: "4rem" }} className="animate-fade-in">
              <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom: "1.5rem" }}>
                <span style={{ height:'1px', width:'30px', background:pc.color, display:'block' }}></span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", color: pc.color, letterSpacing: "3px", textTransform: "uppercase" }}>{pc.label}</span>
              </div>
              <h1 style={{ fontSize: "3.5rem", fontWeight: 700, margin: "0 0 1rem", letterSpacing: "-1.5px", lineHeight: 1.1 }}>{activeDay.title}</h1>
              <p style={{ fontSize: "1.25rem", color: "#6A7080", maxWidth: "700px", lineHeight: 1.6, fontWeight: 300 }}>{activeDay.keyTakeaway}</p>
            </div>

            {/* LECTURE TAB */}
            {activeTab === "lecture" && (
              <div className="animate-fade-in">
                <div style={{ background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.04)", borderRadius: "24px", padding: "3rem" }}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: "#4A5060", letterSpacing: "2.5px", marginBottom: "2.5rem", textTransform: "uppercase" }}>01 / Course Material</div>
                  {renderLecture(activeDay.lecture)}
                </div>

                {activeDay.resource && (
                  <a href={activeDay.resource} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginTop: "2rem", padding: "1.5rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", textDecoration: 'none' }}>
                    <div style={{ width:'44px', height:'44px', borderRadius:'12px', background:`rgba(${hexToRgb(pc.color)},0.1)`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.2rem' }}>🔗</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: "#5A6070", letterSpacing: "1px", marginBottom: "2px", textTransform: "uppercase" }}>Dive Deeper</div>
                      <div style={{ fontSize: "0.95rem", color: pc.color, fontWeight: 500 }}>{activeDay.resourceLabel}</div>
                    </div>
                    <div style={{ color: "#3A4050", fontSize: "1.2rem" }}>↗</div>
                  </a>
                )}
              </div>
            )}

            {/* VIDEOS TAB */}
            {activeTab === "videos" && (
              <div className="animate-fade-in">
                <p style={{ fontSize: "1.1rem", color: "#8A8F9E", marginBottom: "2.5rem", lineHeight: 1.6, fontWeight: 300 }}>Handpicked visual guides and tutorials from industry leaders to reinforce today's lesson.</p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem", marginBottom: "4rem" }}>
                  {activeDay.videos.map((v, i) => (
                    <a key={i} href={v.url} target="_blank" rel="noopener noreferrer" style={{ display: "flex", gap: "1.5rem", padding: "2rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "20px", alignItems: "center", textDecoration: 'none' }}>
                      <div style={{ width: "56px", height: "56px", borderRadius: "14px", background: "#FF0000", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", flexShrink: 0, boxShadow: '0 4px 20px rgba(255,0,0,0.2)' }}>▶</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "#FF3333", letterSpacing: "1.5px", marginBottom: "6px", textTransform: "uppercase" }}>YouTube • {v.channel}</div>
                        <div style={{ fontSize: "1.15rem", color: "#E8E4D9", fontWeight: 600, marginBottom: "0.25rem" }}>{v.title}</div>
                      </div>
                      <div style={{ color: "#3A4050", fontSize: "1.3rem" }}>↗</div>
                    </a>
                  ))}
                </div>

                <div style={{ padding: "2rem", background: "rgba(255,255,255,0.015)", border: "1px solid rgba(255,255,255,0.04)", borderRadius: "20px" }}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: "#4A5060", letterSpacing: "2.5px", marginBottom: "1.5rem", textTransform: "uppercase" }}>Expert Instructors</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
                    {Object.values(youtubeChannels).map((ch) => (
                      <a key={ch.name} href={ch.url} target="_blank" rel="noopener noreferrer" style={{ padding: "1.25rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "12px", textDecoration: 'none' }}>
                        <div style={{ fontSize: "0.95rem", color: "#E8E4D9", fontWeight: 600, marginBottom: "4px" }}>{ch.name}</div>
                        <div style={{ fontSize: "0.75rem", color: "#5A6070", lineHeight: 1.5 }}>{ch.desc}</div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TASK TAB */}
            {activeTab === "task" && (
              <div className="animate-fade-in">
                <div style={{ padding: "3rem", background: `rgba(${hexToRgb(pc.color)},0.04)`, border: `1px solid rgba(${hexToRgb(pc.color)},0.15)`, borderRadius: "24px", marginBottom: "2.5rem" }}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", color: pc.color, letterSpacing: "3px", marginBottom: "2rem", textTransform: "uppercase" }}>📋 Implementation Objective</div>
                  <p style={{ fontSize: "1.35rem", color: "#E8E4D9", lineHeight: 1.6, fontWeight: 500 }}>{activeDay.task}</p>
                </div>

                <div style={{ padding: "2rem", background: "rgba(255,255,255,0.015)", border: "1px solid rgba(255,255,255,0.04)", borderRadius: "20px", marginBottom: "3rem" }}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: "#5A6070", letterSpacing: "2.5px", marginBottom: "1.5rem", textTransform: "uppercase" }}>Excellence Criteria</div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {["You can explain the core concept to a non-technical manager.", "The task is fully implemented and tested.", "Results are documented or recorded for your portfolio."].map((item, i) => (
                      <li key={i} style={{ fontSize: "0.95rem", color: "#8A8F9E", lineHeight: 1.5, display:'flex', gap:'12px' }}>
                        <span style={{ color: pc.color }}>▹</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => { toggleComplete(activeDay.day); }} 
                  style={{ width: '100%', padding: "1.5rem", border: `1px solid rgba(${hexToRgb(pc.color)},0.4)`, borderRadius: "16px", background: completedDays.has(activeDay.day) ? `rgba(${hexToRgb(pc.color)},0.2)` : `rgba(${hexToRgb(pc.color)},0.1)`, color: pc.color, cursor: "pointer", fontFamily: "'DM Mono', monospace", fontSize: "0.9rem", letterSpacing: "2px", fontWeight: 700, transition: 'all 0.3s' }}
                >
                  {completedDays.has(activeDay.day) ? 'RECORDED IN ARCHIVE ✓' : 'COMPLETE AND RECORD SESSION'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* PWA INSTALLATION PROMPT */}
      {deferredPrompt && (
        <div style={{ position: 'fixed', bottom: '30px', left: '50%', transform: 'translateX(-50%)', background: 'rgba(20,20,20,0.95)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '1rem 1.5rem', borderRadius: '16px', display: 'flex', gap: '1.5rem', alignItems: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', zIndex: 2000 }}>
          <div style={{ fontSize: '0.9rem', fontWeight: 500 }}>Add AI Roadmap to your device</div>
          <button onClick={() => deferredPrompt.prompt()} style={{ background: '#00D4FF', color: 'black', border: 'none', padding: '8px 20px', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}>INSTALL</button>
        </div>
      )}
    </div>
  );
}

function hexToRgb(hex) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r ? `${parseInt(r[1],16)},${parseInt(r[2],16)},${parseInt(r[3],16)}` : "255,255,255";
}
