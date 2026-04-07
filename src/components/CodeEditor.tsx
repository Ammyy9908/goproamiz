"use client";

import React from "react";
import Editor, { type Monaco } from "@monaco-editor/react";

interface CodeEditorProps {
  language: string;
  value: string;
  onChange: (value: string | undefined) => void;
}

function defineHackerTheme(monaco: Monaco) {
  monaco.editor.defineTheme("hacker", {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "3d7a52", fontStyle: "italic" },
      { token: "keyword", foreground: "00ff88" },
      { token: "string", foreground: "66ff99" },
      { token: "number", foreground: "88ffcc" },
      { token: "regexp", foreground: "55ff77" },
      { token: "type", foreground: "00dd88" },
      { token: "class", foreground: "77ff99" },
      { token: "function", foreground: "99ffbb" },
      { token: "variable", foreground: "00ff66" },
    ],
    colors: {
      "editor.background": "#050508",
      "editor.foreground": "#00ff66",
      "editorLineNumber.foreground": "#1a5533",
      "editorLineNumber.activeForeground": "#00ff41",
      "editorCursor.foreground": "#00ff41",
      "editor.selectionBackground": "#00ff4126",
      "editor.inactiveSelectionBackground": "#00ff4118",
      "editor.lineHighlightBackground": "#00ff410d",
      "editor.findMatchBackground": "#00ff4133",
      "editorBracketMatch.background": "#00ff411a",
      "editorBracketMatch.border": "#00ff4144",
      "scrollbarSlider.background": "#1a4d2e88",
      "scrollbarSlider.hoverBackground": "#2a6d3eaa",
      "scrollbarSlider.activeBackground": "#3a8d4ecc",
      "minimap.background": "#050508",
      "editorWhitespace.foreground": "#1a3322",
      "editorIndentGuide.background": "#0f1f14",
      "editorIndentGuide.activeBackground": "#1a3322",
    },
  });
}

export default function CodeEditor({ language, value, onChange }: CodeEditorProps) {
  return (
    <Editor
      height="100%"
      language={language}
      value={value}
      theme="hacker"
      beforeMount={defineHackerTheme}
      onChange={onChange}
      options={{
        fontSize: 14,
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        automaticLayout: true,
        padding: { top: 16 },
        fontFamily: "var(--font-hacker), 'JetBrains Mono', ui-monospace, monospace",
        lineNumbers: "on",
        roundedSelection: false,
        cursorStyle: "line",
        glyphMargin: false,
      }}
    />
  );
}
