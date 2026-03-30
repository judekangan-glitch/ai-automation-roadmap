import { useState } from "react";
import { phase1 } from "./data/phase1";
import { phase2 } from "./data/phase2";
import { phase3 } from "./data/phase3";
import { phase4 } from "./data/phase4";
import { phase5 } from "./data/phase5";

const youtubeChannels = {
  liam: { name: "Liam Ottley", url: "https://www.youtube.com/@LiamOttley", desc: "AI Automation Agency model creator" },
  nate: { name: "Nate Herk", url: "https://www.youtube.com/@NateHerk", desc: "n8n & Make automation tutorials" },
  n8n: { name: "n8n Official", url: "https://www.youtube.com/@n8n-io", desc: "Official n8n tutorials & workflows" },
  make: { name: "Make.com Official", url: "https://www.youtube.com/@make_hq", desc: "Make.com tutorials & use cases" },
  corbin: { name: "Corbin AI", url: "https://www.youtube.com/@CorbinBrown", desc: "AI tools & automation for business" },
  david: { name: "David Ondrej", url: "https://www.youtube.com/@DavidOndrej", desc: "AI agents & automation business" },
  ai_jason: { name: "AI Jason", url: "https://www.youtube.com/@AIJasonZ", desc: "Advanced AI agents & RAG systems" },
  greg: { name: "Greg Isenberg", url: "https://www.youtube.com/@GregIsenberg", desc: "Selling AI tools & startup ideas" },
};

const curriculum = [...phase1, ...phase2, ...phase3, ...phase4, ...phase5];

const phaseConfig = {
  1: { color: "#00D4FF", label: "Foundation", emoji: "⚡" },
  2: { color: "#FFB800", label: "AI Integration", emoji: "🧠" },
  3: { color: "#00FF88", label: "Building", emoji: "🔨" },
  4: { color: "#FF6B35", label: "Sales Mastery", emoji: "💰" },
  5: { color: "#BF5FFF", label: "Mastery & Launch", emoji: "🚀" },
};

export default function App() {
  const [activeDay, setActiveDay] = useState(curriculum[0]);
  const [completedDays, setCompletedDays] = useState(new Set());
  const [activeTab, setActiveTab] = useState("lecture");
  const [activePhaseFilter, setActivePhaseFilter] = useState(0);

  const toggleComplete = (day) => {
    setCompletedDays(prev => {
      const next = new Set(prev);
      next.has(day) ? next.delete(day) : next.add(day);
      return next;
    });
  };

  const filteredDays = activePhaseFilter === 0 ? curriculum : curriculum.filter(d => d.phase === activePhaseFilter);
  const progress = Math.round((completedDays.size / 30) * 100);
  const pc = phaseConfig[activeDay.phase];

  const renderLecture = (text) => {
    return text.split('\n').map((line, i) => {
      // Bold subheaders with font change
      if (line.startsWith('**') && line.endsWith('**')) {
        return <div key={i} style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", fontWeight: 700, color: "#E8E4D9", margin: "1.5rem 0 0.75rem" }}>{line.replace(/\*\*/g, '')}</div>;
      }
      // Inline bolding
      if (line.includes('**')) {
        const parts = line.split(/\*\*(.*?)\*\*/g);
        return <p key={i} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: "#B8B4A9", lineHeight: 1.8, marginBottom: "0.75rem", fontWeight: 300 }}>
          {parts.map((part, j) => j % 2 === 1 ? <strong key={j} style={{ color: "#E8E4D9", fontWeight: 500 }}>{part}</strong> : part)}
        </p>;
      }
      // List items
      if (line.trim().startsWith('- ') || line.trim().startsWith('✅') || line.trim().startsWith('❌') || line.trim().startsWith('□')) {
        return <div key={i} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: "#B8B4A9", lineHeight: 1.7, marginBottom: "0.5rem", paddingLeft: "1.25rem", fontWeight: 300, position: 'relative' }}>
          <span style={{ position: 'absolute', left: 0, color: pc.color }}>{line.trim().startsWith('- ') ? '•' : ''}</span>
          {line.trim().startsWith('- ') ? line.trim().substring(2) : line}
        </div>;
      }
      // Numbered lists
      if (/^\d+\./.test(line.trim())) {
        return <div key={i} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: "#B8B4A9", lineHeight: 1.7, marginBottom: "0.5rem", paddingLeft: "1.25rem", fontWeight: 300 }}>{line}</div>;
      }
      // Tables & Code blocks (skipped visually as in original, but can be improved)
      if (line.startsWith('|')) return null;
      if (line.startsWith('```')) return null;
      // Empty spaces
      if (line.trim() === '') return <div key={i} style={{ height: "0.75rem" }} />;
      
      return <p key={i} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: "#B8B4A9", lineHeight: 1.8, marginBottom: "0.75rem", fontWeight: 300 }}>{line}</p>;
    });
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#07090F", fontFamily: "'DM Sans', sans-serif", color: "#E8E4D9" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: rgba(255,255,255,0.02); }
        ::-webkit-scrollbar-thumb { background: #222535; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #2D314A; }
        .day-item { transition: all 0.2s ease; cursor: pointer; }
        .day-item:hover { background: rgba(255,255,255,0.04) !important; }
        .tab-btn { transition: all 0.2s ease; cursor: pointer; border: none; }
        .tab-btn:hover { opacity: 0.8; }
        a { color: inherit; text-decoration: none; }
        a:hover { opacity: 0.8; }
        .lecture-content { max-width: 800px; margin: 0 auto; padding-bottom: 4rem; }
      `}</style>

      {/* LEFT SIDEBAR */}
      <div style={{ width: "280px", flexShrink: 0, background: "#0D1020", borderRight: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column", height: "100vh", position: "sticky", top: 0 }}>
        {/* Header */}
        <div style={{ padding: "1.5rem 1.25rem 1rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "3px", color: "#00D4FF", marginBottom: "0.5rem", textTransform: "uppercase", opacity: 0.8 }}>JayKayDee Tech</div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem" }}>AI Automation Roadmap</div>
          <div style={{ height: "4px", background: "rgba(255,255,255,0.04)", borderRadius: "2px", overflow: "hidden", marginBottom: "0.5rem" }}>
            <div style={{ height: "100%", width: `${progress}%`, background: "linear-gradient(90deg, #00D4FF, #BF5FFF)", borderRadius: "2px", transition: "width 0.6s cubic-bezier(0.4, 0, 0.2, 1)" }} />
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: "#5A6070" }}>{completedDays.size}/30 days · {progress}% Complete</div>
        </div>

        {/* Phase Filter */}
        <div style={{ padding: "0.75rem 1.25rem", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", gap: "0.5rem", flexWrap: "wrap", background: "rgba(0,0,0,0.1)" }}>
          <button onClick={() => setActivePhaseFilter(0)} style={{ padding: "0.25rem 0.6rem", borderRadius: "100px", border: `1px solid ${activePhaseFilter === 0 ? "#fff" : "rgba(255,255,255,0.1)"}`, background: activePhaseFilter === 0 ? "rgba(255,255,255,0.05)" : "transparent", color: activePhaseFilter === 0 ? "#fff" : "#5A6070", fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", cursor: "pointer" }}>ALL</button>
          {Object.entries(phaseConfig).map(([k, v]) => (
            <button key={k} title={v.label} onClick={() => setActivePhaseFilter(Number(k))} style={{ padding: "0.25rem 0.6rem", borderRadius: "100px", border: `1px solid ${activePhaseFilter === Number(k) ? v.color : "rgba(255,255,255,0.1)"}`, background: "transparent", color: activePhaseFilter === Number(k) ? v.color : "#5A6070", fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", cursor: "pointer" }}>{v.emoji}</button>
          ))}
        </div>

        {/* Day List */}
        <div style={{ flex: 1, overflowY: "auto", padding: "0.5rem 0" }}>
          {filteredDays.map((day) => {
            const p = phaseConfig[day.phase];
            const isActive = activeDay.day === day.day;
            const isDone = completedDays.has(day.day);
            return (
              <div key={day.day} className="day-item" onClick={() => { setActiveDay(day); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ padding: "0.85rem 1.25rem", background: isActive ? "rgba(255,255,255,0.04)" : "transparent", borderLeft: `3px solid ${isActive ? p.color : "transparent"}`, display: "flex", alignItems: "center", gap: "12px" }}>
                <div onClick={(e) => { e.stopPropagation(); toggleComplete(day.day); }} style={{ width: "18px", height: "18px", borderRadius: "50%", border: `1.5px solid ${isDone ? p.color : "rgba(255,255,255,0.15)"}`, background: isDone ? p.color : "transparent", color: isDone ? "#07090F" : "transparent", fontSize: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, cursor: "pointer", transition: "all 0.2s" }}>{isDone && "✓"}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: p.color, marginBottom: "1px", opacity:isActive?1:0.6 }}>Day {day.day}</div>
                  <div style={{ fontSize: "0.8rem", color: isActive ? "#E8E4D9" : "#7A7F8E", lineHeight: 1.3, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontWeight: isActive ? 500 : 400, textDecoration: isDone ? "line-through" : "none", opacity: isDone ? 0.5 : 1 }}>{day.emoji} {day.title}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, overflowY: "auto", display:'flex', flexDirection:'column' }}>
        {/* Day Header */}
        <div style={{ padding: "3rem 4rem 2rem", borderBottom: "1px solid rgba(255,255,255,0.06)", background: `linear-gradient(180deg, rgba(${hexToRgb(pc.color)},0.04) 0%, transparent 100%)` }}>
          <div style={{ maxWidth:'800px', margin:'0 auto' }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1.5rem" }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
                  <span style={{ padding: "0.25rem 0.75rem", borderRadius: "100px", background: `rgba(${hexToRgb(pc.color)},0.1)`, border: `1px solid rgba(${hexToRgb(pc.color)},0.25)`, fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: pc.color, letterSpacing: "1.5px", textTransform: "uppercase" }}>Phase {activeDay.phase} — {pc.label}</span>
                  <span style={{ padding: "0.25rem 0.75rem", borderRadius: "100px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "#6A7080", letterSpacing: "1px", textTransform: "uppercase" }}>{activeDay.focus}</span>
                </div>
                <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.2, color: "#E8E4D9" }}>
                   Day {activeDay.day}: {activeDay.title}
                </h1>
              </div>
              <button onClick={() => toggleComplete(activeDay.day)} style={{ flexShrink: 0, padding: "0.6rem 1.25rem", borderRadius: "8px", border: `1px solid ${completedDays.has(activeDay.day) ? "#00FF88" : "rgba(255,255,255,0.1)"}`, background: completedDays.has(activeDay.day) ? "rgba(0,255,136,0.08)" : "rgba(255,255,255,0.02)", color: completedDays.has(activeDay.day) ? "#00FF88" : "#6A7080", fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", cursor: "pointer", transition: "all 0.2s" }}>
                {completedDays.has(activeDay.day) ? "✓ COMPLETED" : "MARK COMPLETE"}
              </button>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div style={{ position: 'sticky', top: 0, zIndex: 10, background: 'rgba(7, 9, 15, 0.8)', backdropFilter: 'blur(10px)', borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "0 4rem" }}>
          <div style={{ maxWidth:'800px', margin:'0 auto', display:'flex', gap:'2rem' }}>
            {["lecture", "videos", "task"].map((tab) => (
              <button key={tab} className="tab-btn" onClick={() => setActiveTab(tab)} style={{ padding: "1rem 0.5rem", background: "transparent", color: activeTab === tab ? pc.color : "#5A6070", fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "2px", textTransform: "uppercase", borderBottom: `2.5px solid ${activeTab === tab ? pc.color : "transparent"}`, marginBottom: "-1px", fontWeight: activeTab === tab ? 500 : 400 }}>
                {tab === "lecture" ? "📖 Lecture" : tab === "videos" ? "🎥 Videos" : "✅ Assignment"}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div style={{ padding: "3rem 4rem", flex: 1 }}>
          <div className="lecture-content">
            {/* LECTURE TAB */}
            {activeTab === "lecture" && (
              <div className="animate-fade-in">
                {renderLecture(activeDay.lecture)}

                {/* Key Takeaway Card */}
                <div style={{ marginTop: "3.5rem", padding: "1.75rem 2rem", background: `linear-gradient(145deg, rgba(${hexToRgb(pc.color)},0.08) 0%, rgba(${hexToRgb(pc.color)},0.03) 100%)`, border: `1px solid rgba(${hexToRgb(pc.color)},0.2)`, borderRadius: "16px", boxShadow: `0 4px 20px rgba(0,0,0,0.2)` }}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: pc.color, letterSpacing: "2px", marginBottom: "0.75rem", textTransform: "uppercase" }}>🎯 Key Takeaway</div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: "#E8E4D9", lineHeight: 1.65, fontWeight: 400 }}>{activeDay.keyTakeaway}</p>
                </div>

                {/* Primary Resource */}
                {activeDay.resource && (
                  <a href={activeDay.resource} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "1.5rem", padding: "1.25rem 1.5rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", transition: "all 0.3s ease" }}>
                    <div style={{ width:'40px', height:'40px', borderRadius:'10px', background:`rgba(${hexToRgb(pc.color)},0.1)`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.2rem' }}>🔗</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: "#5A6070", letterSpacing: "1px", marginBottom: "2px", textTransform: "uppercase" }}>Dive Deeper</div>
                      <div style={{ fontSize: "0.9rem", color: pc.color, fontWeight: 500 }}>{activeDay.resourceLabel}</div>
                    </div>
                    <div style={{ color: "#3A4050", fontSize: "1.1rem" }}>↗</div>
                  </a>
                )}
              </div>
            )}

            {/* VIDEOS TAB */}
            {activeTab === "videos" && (
              <div className="animate-fade-in">
                <p style={{ fontSize: "0.95rem", color: "#8A8F9E", marginBottom: "2rem", lineHeight: 1.6, fontWeight: 300 }}>Handpicked visual guides and tutorials from industry leaders to reinforce today's lesson.</p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem", marginBottom: "3rem" }}>
                  {activeDay.videos.map((v, i) => (
                    <a key={i} href={v.url} target="_blank" rel="noopener noreferrer" style={{ display: "flex", gap: "1.25rem", padding: "1.5rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "16px", alignItems: "flex-start" }}>
                      <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "#FF0000", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0, boxShadow: '0 4px 15px rgba(255,0,0,0.15)' }}>▶</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: "#FF3333", letterSpacing: "1.5px", marginBottom: "4px", textTransform: "uppercase" }}>YouTube • {v.channel}</div>
                        <div style={{ fontSize: "1.05rem", color: "#E8E4D9", fontWeight: 500, marginBottom: "0.5rem" }}>{v.title}</div>
                        <div style={{ fontSize: "0.85rem", color: "#6A7080", lineHeight: 1.5, fontWeight: 300 }}>💡 {v.note}</div>
                      </div>
                      <div style={{ color: "#3A4050", fontSize: "1.2rem" }}>↗</div>
                    </a>
                  ))}
                </div>

                <div style={{ padding: "1.5rem", background: "rgba(255,255,255,0.015)", border: "1px solid rgba(255,255,255,0.04)", borderRadius: "14px" }}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "#4A5060", letterSpacing: "2px", marginBottom: "1.25rem", textTransform: "uppercase" }}>Recommended Learning Channels</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "0.75rem" }}>
                    {Object.values(youtubeChannels).map((ch) => (
                      <a key={ch.name} href={ch.url} target="_blank" rel="noopener noreferrer" style={{ padding: "1rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "10px" }}>
                        <div style={{ fontSize: "0.85rem", color: "#E8E4D9", fontWeight: 500, marginBottom: "0.25rem" }}>{ch.name}</div>
                        <div style={{ fontSize: "0.7rem", color: "#5A6070", lineHeight: 1.4 }}>{ch.desc}</div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TASK TAB */}
            {activeTab === "task" && (
              <div className="animate-fade-in">
                <div style={{ padding: "2.5rem", background: `rgba(${hexToRgb(pc.color)},0.04)`, border: `1px solid rgba(${hexToRgb(pc.color)},0.15)`, borderRadius: "20px", marginBottom: "2rem" }}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: pc.color, letterSpacing: "2.5px", marginBottom: "1.5rem", textTransform: "uppercase" }}>📋 Practice Assignment</div>
                  <p style={{ fontSize: "1.15rem", color: "#E8E4D9", lineHeight: 1.65, fontWeight: 400 }}>{activeDay.task}</p>
                </div>

                <div style={{ padding: "1.75rem", background: "rgba(255,255,255,0.015)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "16px", marginBottom: "2.5rem" }}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "#5A6070", letterSpacing: "2px", marginBottom: "1rem", textTransform: "uppercase" }}>Success Criteria</div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {["You can explain the core concept to a non-technical manager.", "The task is fully implemented and tested.", "Results are documented or recorded for your portfolio.", "You've considered the ROI for a potential client."].map((item, i) => (
                      <li key={i} style={{ fontSize: "0.9rem", color: "#8A8F9E", lineHeight: 1.5, display:'flex', gap:'10px' }}>
                        <span style={{ color: pc.color }}>▹</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: "flex", gap: "1rem" }}>
                  <button onClick={() => { toggleComplete(activeDay.day); setActiveTab("lecture"); if (activeDay.day < 30) { setActiveDay(curriculum[activeDay.day]); window.scrollTo({ top: 0, behavior: 'smooth' }); } }} style={{ flex: 1, padding: "1.15rem", border: `1px solid rgba(${hexToRgb(pc.color)},0.4)`, borderRadius: "12px", background: `rgba(${hexToRgb(pc.color)},0.1)`, color: pc.color, cursor: "pointer", fontFamily: "'DM Mono', monospace", fontSize: "0.85rem", letterSpacing: "1.5px", fontWeight: 600 }}>
                    COMPLETION RECORDED & NEXT DAY →
                  </button>
                </div>
              </div>
            )}

            {/* Navigation Footer */}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "5rem", paddingTop: "2.5rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              {activeDay.day > 1 ? (
                <button onClick={() => { setActiveDay(curriculum[activeDay.day - 2]); setActiveTab("lecture"); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ padding: "0.85rem 1.5rem", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "10px", background: "transparent", color: "#6A7080", cursor: "pointer", fontFamily: "'DM Mono', monospace", fontSize: "0.75rem" }}>← Day {activeDay.day - 1}</button>
              ) : <div />}
              {activeDay.day < 30 && (
                <button onClick={() => { setActiveDay(curriculum[activeDay.day]); setActiveTab("lecture"); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ padding: "0.85rem 1.5rem", border: `1px solid rgba(${hexToRgb(pc.color)},0.2)`, borderRadius: "10px", background: `rgba(${hexToRgb(pc.color)},0.05)`, color: pc.color, cursor: "pointer", fontFamily: "'DM Mono', monospace", fontSize: "0.75rem" }}>Day {activeDay.day + 1} →</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function hexToRgb(hex) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r ? `${parseInt(r[1],16)},${parseInt(r[2],16)},${parseInt(r[3],16)}` : "255,255,255";
}
