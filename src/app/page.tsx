"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { 
  Play, 
  Share2, 
  Trash2, 
  Maximize2, 
  Moon, 
  Sun, 
  Terminal as TerminalIcon,
  Loader2,
  Search
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { LANGUAGES, type Language } from '../constants';

// Dynamically import the editor to avoid SSR issues
const CodeEditor = dynamic(() => import('@/components/CodeEditor'), { 
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full bg-[#1e1e1e] text-slate-500">
      <div className="flex flex-col items-center gap-2">
        <Loader2 size={24} className="animate-spin" />
        <span className="text-xs">Loading Editor...</span>
      </div>
    </div>
  )
});

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(LANGUAGES[0]);
  const [code, setCode] = useState(LANGUAGES[0].defaultCode);
  const [output, setOutput] = useState<string>('');
  const [isRunning, setIsRunning] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Update code when language changes
  useEffect(() => {
    if (isMounted) {
      setCode(selectedLanguage.defaultCode);
      setOutput('');
    }
  }, [selectedLanguage, isMounted]);

  const handleRun = async () => {
    setIsRunning(true);
    setOutput('Connecting to custom execution backend...');
    
    // Placeholder for custom backend logic
    setTimeout(() => {
      setIsRunning(false);
      setOutput('Ready for custom backend integration.\n\nPlease implement your execution logic in handleRun.');
    }, 1000);
  };

  const handleClear = () => {
    setOutput('');
  };

  const filteredLanguages = LANGUAGES.filter(lang => 
    lang.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={cn(
      "flex h-screen w-full overflow-hidden transition-colors duration-300",
      isDarkMode ? "bg-[#0d1117] text-slate-300" : "bg-[#f8fafc] text-slate-900"
    )}>
      {/* Sidebar - Language Selection */}
      <aside className={cn(
        "flex flex-col border-r transition-all duration-300 w-64 shrink-0",
        isDarkMode ? "bg-[#161b22] border-slate-800" : "bg-white border-slate-200"
      )}>
        <div className="p-4 border-b border-inherit">
          <div className={cn(
            "flex items-center gap-2 px-3 py-2 rounded-lg text-sm",
            isDarkMode ? "bg-slate-800" : "bg-slate-100"
          )}>
            <Search size={16} className="text-slate-500" />
            <input 
              type="text" 
              placeholder="Search languages..." 
              className="bg-transparent border-none outline-none w-full text-inherit placeholder:text-slate-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className={cn(
          "flex-1 overflow-y-auto py-2",
          isDarkMode ? "scrollbar-dark" : "scrollbar-light"
        )}>
          {filteredLanguages.map((lang) => (
            <button
              key={lang.id}
              onClick={() => setSelectedLanguage(lang)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-2.5 transition-all text-sm font-medium relative group",
                selectedLanguage.id === lang.id 
                  ? (isDarkMode ? "bg-blue-600/10 text-blue-400" : "bg-blue-50 text-blue-600")
                  : (isDarkMode ? "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50" : "text-slate-500 hover:text-slate-700 hover:bg-slate-50")
              )}
            >
              <lang.icon size={18} className={cn(
                "transition-transform group-hover:scale-110",
                selectedLanguage.id === lang.id ? "text-blue-500" : "text-slate-500"
              )} />
              <span>{lang.name}</span>
              {selectedLanguage.id === lang.id && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-r-full" />
              )}
            </button>
          ))}
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className={cn(
          "h-16 flex items-center justify-between px-6 border-b shrink-0",
          isDarkMode ? "bg-[#161b22] border-slate-800" : "bg-white border-slate-200"
        )}>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                P
              </div>
              <span className="font-bold text-xl tracking-tight hidden sm:block">
                Programiz <span className="text-blue-600">Compiler</span>
              </span>
            </div>
            
            <div className={cn(
              "flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium ml-4",
              isDarkMode ? "bg-slate-800" : "bg-slate-100"
            )}>
              <selectedLanguage.icon size={14} />
              <span>{selectedLanguage.extension}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={cn(
                "p-2 rounded-lg transition-colors",
                isDarkMode ? "hover:bg-slate-800" : "hover:bg-slate-100"
              )}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className={cn(
              "p-2 rounded-lg transition-colors hidden md:flex",
              isDarkMode ? "hover:bg-slate-800" : "hover:bg-slate-100"
            )}>
              <Share2 size={18} />
            </button>
            <button 
              onClick={handleRun}
              disabled={isRunning}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-600/20"
            >
              {isRunning ? <Loader2 size={18} className="animate-spin" /> : <Play size={18} fill="currentColor" />}
              <span>Run</span>
            </button>
          </div>
        </header>

        {/* Editor & Output Split View */}
        <div className="flex-1 flex flex-col md:flex-row min-h-0">
          {/* Editor Section */}
          <div className="flex-1 flex flex-col min-w-0 border-r border-slate-800/10">
            <div className={cn(
              "h-10 flex items-center px-4 border-b shrink-0",
              isDarkMode ? "bg-[#0d1117] border-slate-800" : "bg-slate-50 border-slate-200"
            )}>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Editor</span>
              <div className="ml-auto flex items-center gap-2">
                <button className="p-1 text-slate-400 hover:text-slate-600 transition-colors">
                  <Maximize2 size={14} />
                </button>
              </div>
            </div>
            <div className="flex-1 relative">
              {isMounted ? (
                <CodeEditor
                  language={selectedLanguage.monacoLanguage}
                  value={code}
                  theme={isDarkMode ? "vs-dark" : "light"}
                  onChange={(value) => setCode(value || '')}
                />
              ) : (
                <div className="flex items-center justify-center h-full bg-[#1e1e1e] text-slate-500">
                  <div className="flex flex-col items-center gap-2">
                    <Loader2 size={24} className="animate-spin" />
                    <span className="text-xs">Loading Editor...</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Output Section */}
          <div className={cn(
            "flex-1 flex flex-col min-w-0",
            isDarkMode ? "bg-[#0d1117]" : "bg-white"
          )}>
            <div className={cn(
              "h-10 flex items-center px-4 border-b shrink-0",
              isDarkMode ? "bg-[#0d1117] border-slate-800" : "bg-slate-50 border-slate-200"
            )}>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Output</span>
              <button 
                onClick={handleClear}
                className="ml-auto flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-slate-600 transition-colors"
              >
                <Trash2 size={14} />
                <span>Clear</span>
              </button>
            </div>
            <div className={cn(
              "flex-1 p-6 font-mono text-sm overflow-auto whitespace-pre-wrap",
              isDarkMode ? "text-slate-300" : "text-slate-700"
            )}>
              {output ? (
                <div className="animate-in fade-in slide-in-from-top-1 duration-300">
                  {output}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-slate-400 gap-3 opacity-50">
                  <TerminalIcon size={48} strokeWidth={1} />
                  <p>Run your code to see the output here</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer / Status Bar */}
        <footer className={cn(
          "h-8 flex items-center px-4 border-t text-[10px] uppercase tracking-widest font-bold shrink-0",
          isDarkMode ? "bg-[#161b22] border-slate-800 text-slate-500" : "bg-white border-slate-200 text-slate-400"
        )}>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className={cn("w-2 h-2 rounded-full", isRunning ? "bg-yellow-500 animate-pulse" : "bg-green-500")} />
              <span>{isRunning ? "Executing..." : "Ready"}</span>
            </div>
            <span>{selectedLanguage.name}</span>
            <span>UTF-8</span>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <span>Line 1, Column 1</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
