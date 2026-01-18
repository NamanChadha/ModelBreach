import React, { useState } from 'react';
import { Shield, Zap, Terminal, Activity } from 'lucide-react';

function App() {
  const [inArena, setInArena] = useState(false);

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-blue/20 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-purple/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <nav className="p-6 flex justify-between items-center glass m-4 rounded-xl">
        <div className="flex items-center gap-2">
          <Shield className="w-8 h-8 text-neon-blue" />
          <h1 className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
            MODEL<span className="text-white">BREACH</span>
          </h1>
        </div>
        <div className="flex gap-4 text-sm font-mono text-gray-400">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            SYSTEM ONLINE
          </div>
          <span>v0.1.0-ALPHA</span>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {!inArena ? (
          <div className="flex flex-col items-center text-center space-y-8 animate-in fade-in zoom-in duration-500">
            <h2 className="text-6xl font-bold max-w-4xl leading-tight">
              Adversarial Testing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-purple-400">
                Arena for LLMs
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl">
              Compete to jailbreak advanced AI systems in non-replayable, deterministic scenarios.
              Extract secrets. Bypass agents. Win the bounty.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mt-12">
              {[
                { icon: Terminal, title: "Prompt Injection", desc: "Extract hidden secrets from resisting system prompts." },
                { icon: Zap, title: "SQL/RAG Leak", desc: "Manipulate context to leak protected database fields." },
                { icon: Activity, title: "Multi-Agent Bypass", desc: "Orchestrate conflict between opposing AI agents." }
              ].map((item, i) => (
                <div key={i} className="glass p-8 rounded-2xl border border-white/5 hover:border-neon-blue/50 transition-all hover:-translate-y-2 group">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-neon-blue">
                    <item.icon />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <button
                onClick={() => setInArena(true)}
                className="btn-primary flex items-center gap-3 text-lg group"
              >
                ENTER ARENA
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <p className="mt-4 text-xs text-gray-500 font-mono">
                SERVER TIME: {new Date().toISOString()}
              </p>
            </div>
          </div>
        ) : (
          <ArenaView onLeave={() => setInArena(false)} />
        )}
      </main>
    </div>
  );
}

function ArenaView({ onLeave }: { onLeave: () => void }) {
  const [logs, setLogs] = useState<string[]>(["[SYSTEM] Arena Initialized...", "[SYSTEM] Connection Secure.", "[GAME] Challenge 1: INJECTION loaded."]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLogs(prev => [...prev, `[USER] ${input}`, `[AI] Access Denied. Nice try.`]);
    setInput("");
  };

  return (
    <div className="w-full max-w-6xl mx-auto h-[80vh] flex gap-6 animate-in fade-in slide-in-from-bottom-10 duration-500">
      {/* Sidebar */}
      <div className="w-1/4 glass rounded-2xl p-6 flex flex-col gap-4">
        <button onClick={onLeave} className="text-gray-400 hover:text-white mb-4 text-sm">← Back to Lobby</button>
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-neon-blue/10 border border-neon-blue/30">
            <h4 className="text-neon-blue text-sm font-bold uppercase tracking-wider mb-1">Current Objective</h4>
            <p className="text-sm font-semibold">Extract the API Key</p>
          </div>

          <div>
            <h5 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Challenge Sequence</h5>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-sm p-2 rounded bg-white/5 border-l-2 border-neon-blue">
                <span className="text-neon-blue">01</span> Prompt Injection
              </div>
              <div className="flex items-center gap-3 text-sm p-2 rounded opacity-50">
                <span>02</span> SQL Leak
              </div>
              <div className="flex items-center gap-3 text-sm p-2 rounded opacity-50">
                <span>03</span> Agent Bypass
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 glass rounded-2xl flex flex-col overflow-hidden">
        <div className="p-4 border-b border-white/10 flex justify-between items-center bg-black/20">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="font-mono text-sm tracking-widest uppercase">Target: SYSTEM_PRIME</span>
          </div>
          <span className="text-xs text-gray-500 font-mono">ID: 8f92-a2b1</span>
        </div>

        <div className="flex-1 p-6 overflow-y-auto font-mono space-y-3">
          {logs.map((log, i) => (
            <div key={i} className={`p-2 rounded ${log.startsWith('[USER]') ? 'bg-white/5 text-right' : 'text-neon-blue/80'}`}>
              {log}
            </div>
          ))}
        </div>

        <form onSubmit={handleSend} className="p-4 border-t border-white/10 bg-black/20 flex gap-4">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none focus:ring-0 text-white font-mono placeholder-gray-600 focus:outline-none"
            placeholder="Enter injection vector..."
            autoFocus
          />
          <button type="submit" className="text-neon-blue hover:text-white transition-colors">
            <Terminal size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
