import { Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full glass-effect backdrop-blur-md border-b border-white/10 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center h-16">
          {/* Logo + Title */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-primary-600 rounded-lg shadow-md">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text animate-glow">
                React + Vite Template
              </h1>
              <p className="text-sm text-slate-300">Modern & Modular</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
