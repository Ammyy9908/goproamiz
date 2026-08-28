"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import {
  Play,
  Share2,
  Trash2,
  Maximize2,
  Terminal as TerminalIcon,
  Loader2,
  Search,
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { LANGUAGES, type Language } from "../constants";

const CodeEditor = dynamic(() => import("@/components/CodeEditor"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full bg-hacker-bg text-hacker-muted">
      <div className="flex flex-col items-center gap-2 font-mono text-sm">
        <Loader2 size={24} className="animate-spin text-hacker-bright" />
        <span className="text-xs tracking-widest uppercase opacity-80">
          Initializing buffer…
        </span>
      </div>
    </div>
  ),
});

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(LANGUAGES[0]);
  const [code, setCode] = useState(LANGUAGES[0].defaultCode);
  const [output, setOutput] = useState<string>("");
  const [isRunning, setIsRunning] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      setCode(selectedLanguage.defaultCode);
      setOutput("");
    }
  }, [selectedLanguage, isMounted]);

  const handleRun = async () => {
    setIsRunning(true);
    setOutput("Connecting to custom execution backend...");

    setTimeout(() => {
      setIsRunning(false);
      setOutput(
        "Ready for custom backend integration.\n\nPlease implement your execution logic in handleRun."
      );
    }, 1000);
  };

  const handleClear = () => {
    setOutput("");
  };

  const filteredLanguages = LANGUAGES.filter((lang) =>
    lang.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative z-[1] flex h-screen w-full overflow-hidden bg-hacker-bg text-hacker-green shadow-hacker">
      <aside className="flex flex-col w-64 shrink-0 border-r border-hacker-border bg-hacker-surface">
        <div className="p-4 border-b border-hacker-border">
          <div className="flex items-center gap-2 px-3 py-2 rounded border border-hacker-border bg-hacker-raised/80 shadow-hacker-sm">
            <Search size={16} className="text-hacker-muted shrink-0" />
            <input
              type="text"
              placeholder="filter modules..."
              className="bg-transparent border-none outline-none w-full text-sm text-hacker-green placeholder:text-hacker-dim placeholder:uppercase placeholder:text-[10px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-2 scrollbar-hacker">
          {filteredLanguages.map((lang) => (
            <button
              key={lang.id}
              onClick={() => setSelectedLanguage(lang)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-2.5 transition-all text-sm font-medium relative group font-mono",
                selectedLanguage.id === lang.id
                  ? "bg-hacker-dim/30 text-hacker-bright shadow-[inset_0_0_12px_rgba(0,255,65,0.08)]"
                  : "text-hacker-muted hover:text-hacker-green hover:bg-hacker-raised/60"
              )}
            >
              <lang.icon
                size={18}
                className={cn(
                  "transition-transform group-hover:scale-110 shrink-0",
                  selectedLanguage.id === lang.id ? "text-hacker-bright" : "text-hacker-dim"
                )}
              />
              <span>{lang.name}</span>
              {selectedLanguage.id === lang.id && (
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-hacker-bright shadow-[0_0_8px_#39ff14]" />
              )}
            </button>
          ))}
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-16 flex items-center justify-between px-6 border-b border-hacker-border shrink-0 bg-hacker-surface/90 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded border border-hacker-border bg-hacker-raised flex items-center justify-center text-hacker-bright font-mono text-sm shadow-hacker-sm">
                &gt;_
              </div>
              <div className="hidden sm:block font-mono">
                <span className="font-bold text-hacker-bright tracking-tight text-lg">
                  Code
                </span>
                <span className="text-hacker-muted text-xs ml-2 tracking-[0.2em]">
                  // COMPILER
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded border border-hacker-border bg-hacker-bg/80 text-xs font-mono text-hacker-muted">
              <selectedLanguage.icon size={14} className="text-hacker-bright" />
              <span>{selectedLanguage.extension}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="p-2 rounded border border-transparent hover:border-hacker-border hover:bg-hacker-raised text-hacker-muted hover:text-hacker-bright transition-colors hidden md:flex"
              aria-label="Share"
            >
              <Share2 size={18} />
            </button>
            <button
              type="button"
              onClick={handleRun}
              disabled={isRunning}
              className="flex items-center gap-2 px-5 py-2 rounded border border-hacker-bright/60 bg-hacker-dim/40 font-mono font-semibold text-hacker-bright transition-all hover:bg-hacker-dim/70 hover:shadow-[0_0_18px_rgba(57,255,20,0.25)] disabled:opacity-50 disabled:cursor-not-allowed shadow-hacker-sm"
            >
              {isRunning ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <Play size={18} fill="currentColor" />
              )}
              <span>EXEC</span>
            </button>
          </div>
        </header>

        <div className="flex-1 flex flex-col md:flex-row min-h-0">
          <div className="flex-1 flex flex-col min-w-0 border-r border-hacker-border bg-hacker-bg">
            <div className="h-10 flex items-center px-4 border-b border-hacker-border shrink-0 bg-hacker-surface/50">
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-hacker-dim">
                [ src ]
              </span>
              <div className="ml-auto flex items-center gap-2">
                <button
                  type="button"
                  className="p-1 text-hacker-dim hover:text-hacker-bright transition-colors"
                  aria-label="Maximize"
                >
                  <Maximize2 size={14} />
                </button>
              </div>
            </div>
            <div className="flex-1 relative min-h-0">
              {isMounted ? (
                <CodeEditor
                  language={selectedLanguage.monacoLanguage}
                  value={code}
                  onChange={(value) => setCode(value || "")}
                />
              ) : (
                <div className="flex items-center justify-center h-full bg-hacker-bg text-hacker-muted">
                  <div className="flex flex-col items-center gap-2 font-mono text-sm">
                    <Loader2 size={24} className="animate-spin text-hacker-bright" />
                    <span className="text-xs tracking-widest uppercase opacity-80">
                      Initializing buffer…
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex-1 flex flex-col min-w-0 bg-hacker-bg">
            <div className="h-10 flex items-center px-4 border-b border-hacker-border shrink-0 bg-hacker-surface/50">
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-hacker-dim">
                [ stdout ]
              </span>
              <button
                type="button"
                onClick={handleClear}
                className="ml-auto flex items-center gap-1.5 text-[10px] font-mono font-medium uppercase tracking-wider text-hacker-dim hover:text-hacker-bright transition-colors"
              >
                <Trash2 size={14} />
                <span>clear</span>
              </button>
            </div>
            <div className="flex-1 p-6 font-mono text-sm overflow-auto whitespace-pre-wrap text-hacker-muted scrollbar-hacker">
              {output ? (
                <div className="animate-in fade-in slide-in-from-top-1 duration-300 text-hacker-green">
                  {output}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-hacker-dim gap-3 opacity-70">
                  <TerminalIcon size={48} strokeWidth={1} className="text-hacker-dim" />
                  <p className="text-xs tracking-widest uppercase font-mono">
                    Awaiting execution…
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <footer className="h-8 flex items-center px-4 border-t border-hacker-border text-[10px] uppercase tracking-[0.2em] font-mono font-bold shrink-0 bg-hacker-surface text-hacker-dim">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div
                className={cn(
                  "w-2 h-2 rounded-full",
                  isRunning ? "bg-hacker-bright animate-pulse shadow-[0_0_8px_#39ff14]" : "bg-hacker-green shadow-[0_0_6px_#00ff41]"
                )}
              />
              <span>{isRunning ? "RUNNING" : "READY"}</span>
            </div>
            <span className="text-hacker-muted">{selectedLanguage.name}</span>
            <span>UTF-8</span>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <span>Ln 1, Col 1</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
