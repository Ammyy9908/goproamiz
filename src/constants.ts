import { 
  Code2, 
  Coffee, 
  Terminal, 
  FileJson, 
  Cpu, 
  Binary,
  Globe,
  Database,
  Flame,
  Gem,
  Hash,
  Layout,
  Box,
  Layers,
  Zap,
  Wind,
  Wrench,
  Shield,
  Activity,
  Anchor,
  Atom,
  Beaker,
  Book,
  Bug,
  Camera,
  Cloud,
  Compass,
  CreditCard,
  Eye,
  Feather,
  Flag,
  Gift,
  Heart,
  Home,
  Image,
  Key,
  Link,
  Lock,
  Mail,
  Map,
  Mic,
  Music,
  Paperclip,
  Phone,
  PieChart,
  Play,
  Printer,
  Search,
  Settings,
  Share,
  ShoppingBag,
  ShoppingCart,
  Smile,
  Star,
  Sun,
  Tag,
  ThumbsUp,
  Trash,
  User,
  Video,
  Wifi,
  X
} from "lucide-react";

export interface Language {
  id: string;
  name: string;
  icon: any;
  defaultCode: string;
  monacoLanguage: string;
  extension: string;
}

export const LANGUAGES: Language[] = [
  {
    id: "python",
    name: "Python",
    icon: Terminal,
    monacoLanguage: "python",
    extension: "main.py",
    defaultCode: "print(\"Hello, World!\")\n\n# Try some logic\nfor i in range(5):\n    print(f\"Step {i+1}\")"
  },
  {
    id: "c",
    name: "C",
    icon: Binary,
    monacoLanguage: "c",
    extension: "main.c",
    defaultCode: "#include <stdio.h>\n\nint main() {\n    printf(\"Hello, World!\\n\");\n    return 0;\n}"
  },
  {
    id: "cpp",
    name: "C++",
    icon: Cpu,
    monacoLanguage: "cpp",
    extension: "main.cpp",
    defaultCode: "#include <iostream>\n\nint main() {\n    std::cout << \"Hello, World!\" << std::endl;\n    return 0;\n}"
  },
  {
    id: "java",
    name: "Java",
    icon: Coffee,
    monacoLanguage: "java",
    extension: "Main.java",
    defaultCode: "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}"
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: FileJson,
    monacoLanguage: "javascript",
    extension: "index.js",
    defaultCode: "console.log(\"Hello, World!\");\n\nconst greet = (name) => `Hello, ${name}!`;\nconsole.log(greet(\"Developer\"));"
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: Code2,
    monacoLanguage: "typescript",
    extension: "index.ts",
    defaultCode: "interface User {\n  name: string;\n  id: number;\n}\n\nconst user: User = { name: \"Dev\", id: 1 };\nconsole.log(`User: ${user.name} (ID: ${user.id})`);"
  },
  {
    id: "rust",
    name: "Rust",
    icon: Flame,
    monacoLanguage: "rust",
    extension: "main.rs",
    defaultCode: "fn main() {\n    println!(\"Hello, World!\");\n}"
  },
  {
    id: "ruby",
    name: "Ruby",
    icon: Gem,
    monacoLanguage: "ruby",
    extension: "main.rb",
    defaultCode: "puts \"Hello, World!\""
  },
  {
    id: "php",
    name: "PHP",
    icon: Globe,
    monacoLanguage: "php",
    extension: "index.php",
    defaultCode: "<?php\necho \"Hello, World!\";\n?>"
  },
  {
    id: "swift",
    name: "Swift",
    icon: Zap,
    monacoLanguage: "swift",
    extension: "main.swift",
    defaultCode: "print(\"Hello, World!\")"
  },
  {
    id: "kotlin",
    name: "Kotlin",
    icon: Box,
    monacoLanguage: "kotlin",
    extension: "main.kt",
    defaultCode: "fun main() {\n    println(\"Hello, World!\")\n}"
  },
  {
    id: "go",
    name: "Go",
    icon: Wind,
    monacoLanguage: "go",
    extension: "main.go",
    defaultCode: "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, World!\")\n}"
  },
  {
    id: "sql",
    name: "SQL",
    icon: Database,
    monacoLanguage: "sql",
    extension: "query.sql",
    defaultCode: "CREATE TABLE Users (ID int, Name varchar(255));\nINSERT INTO Users VALUES (1, 'Alice'), (2, 'Bob');\nSELECT * FROM Users;"
  },
  {
    id: "csharp",
    name: "C#",
    icon: Hash,
    monacoLanguage: "csharp",
    extension: "Program.cs",
    defaultCode: "using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine(\"Hello, World!\");\n    }\n}"
  },
  {
    id: "r",
    name: "R",
    icon: Activity,
    monacoLanguage: "r",
    extension: "main.r",
    defaultCode: "print(\"Hello, World!\")"
  },
  {
    id: "perl",
    name: "Perl",
    icon: Anchor,
    monacoLanguage: "perl",
    extension: "main.pl",
    defaultCode: "print \"Hello, World!\\n\";"
  },
  {
    id: "scala",
    name: "Scala",
    icon: Layers,
    monacoLanguage: "scala",
    extension: "Main.scala",
    defaultCode: "object Main extends App {\n  println(\"Hello, World!\")\n}"
  },
  {
    id: "haskell",
    name: "Haskell",
    icon: Atom,
    monacoLanguage: "haskell",
    extension: "main.hs",
    defaultCode: "main = putStrLn \"Hello, World!\""
  },
  {
    id: "lua",
    name: "Lua",
    icon: Smile,
    monacoLanguage: "lua",
    extension: "main.lua",
    defaultCode: "print(\"Hello, World!\")"
  },
  {
    id: "dart",
    name: "Dart",
    icon: Beaker,
    monacoLanguage: "dart",
    extension: "main.dart",
    defaultCode: "void main() {\n  print('Hello, World!');\n}"
  },
  {
    id: "clojure",
    name: "Clojure",
    icon: Book,
    monacoLanguage: "clojure",
    extension: "main.clj",
    defaultCode: "(println \"Hello, World!\")"
  },
  {
    id: "elixir",
    name: "Elixir",
    icon: Cloud,
    monacoLanguage: "elixir",
    extension: "main.ex",
    defaultCode: "IO.puts \"Hello, World!\""
  },
  {
    id: "erlang",
    name: "Erlang",
    icon: Compass,
    monacoLanguage: "erlang",
    extension: "main.erl",
    defaultCode: "-module(main).\n-export([start/0]).\n\nstart() ->\n    io:format(\"Hello, World!~n\")."
  },
  {
    id: "fortran",
    name: "Fortran",
    icon: Flag,
    monacoLanguage: "fortran",
    extension: "main.f90",
    defaultCode: "program hello\n  print *, \"Hello, World!\"\nend program hello"
  },
  {
    id: "pascal",
    name: "Pascal",
    icon: Heart,
    monacoLanguage: "pascal",
    extension: "main.pas",
    defaultCode: "program Hello;\nbegin\n  writeln('Hello, World!');\nend."
  },
  {
    id: "objective-c",
    name: "Objective-C",
    icon: Image,
    monacoLanguage: "objective-c",
    extension: "main.m",
    defaultCode: "#import <Foundation/Foundation.h>\n\nint main() {\n    @autoreleasepool {\n        NSLog(@\"Hello, World!\");\n    }\n    return 0;\n}"
  },
  {
    id: "shell",
    name: "Shell",
    icon: Terminal,
    monacoLanguage: "shell",
    extension: "script.sh",
    defaultCode: "echo \"Hello, World!\""
  }
];
