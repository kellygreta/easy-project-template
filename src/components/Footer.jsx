import { Github } from "lucide-react";

export default function Footer() {
  const currentYear = 2025;
  return (
    <footer className="w-full bg-gray-100 shadow-inner p-4 flex items-center justify-center gap-2 mt-auto">
      <a
        href="https://github.com/kellygreta"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-gray-700 hover:text-black"
      >
        <Github size={18} />
        <span>GitHub</span>
      </a>
      <span className="ml-4 text-gray-500">
        © {currentYear} My React Template.
      </span>
      {/* Divider */}
      {/* <div className="border-t border-slate-800 mt-6 pt-4">
          <p className="text-center text-slate-500 text-xs">
            Built with React, Vite, and Tailwind CSS
          </p>
        </div> */}
    </footer>
  );
}
