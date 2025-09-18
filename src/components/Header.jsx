import { Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full glass-effect backdrop-blur-md p-3 z-50 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 bg-primary-600 rounded-lg">
            <Sparkles className="w-5 h-5 text-black" />
          </div>
          <h1 className="text-2xl font-bold gradient-text animate-glow">
            React + Vite Template
          </h1>
        </div>
      </div>
    </header>
  );
}
