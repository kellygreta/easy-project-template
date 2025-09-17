import { Github } from "lucide-react";

export default function Footer() {
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
      <span className="ml-4 text-gray-500">© 2025</span>
    </footer>
  );
}
