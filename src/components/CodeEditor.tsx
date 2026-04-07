"use client";

import React from 'react';
import Editor from '@monaco-editor/react';

interface CodeEditorProps {
  language: string;
  value: string;
  theme: string;
  onChange: (value: string | undefined) => void;
}

export default function CodeEditor({ language, value, theme, onChange }: CodeEditorProps) {
  return (
    <Editor
      height="100%"
      language={language}
      value={value}
      theme={theme}
      onChange={onChange}
      options={{
        fontSize: 14,
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        automaticLayout: true,
        padding: { top: 16 },
        fontFamily: "'JetBrains Mono', monospace",
        lineNumbers: 'on',
        roundedSelection: false,
        cursorStyle: 'line',
        glyphMargin: false,
      }}
    />
  );
}
