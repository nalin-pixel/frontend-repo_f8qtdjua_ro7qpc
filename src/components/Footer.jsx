import { Github, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-200/70 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <div className="text-lg font-semibold text-gray-900">LexRAG</div>
            <p className="text-sm text-gray-600 mt-1">Evidence‑backed AI research for legal teams.</p>
          </div>
          <div className="flex items-center gap-4 text-gray-600">
            <a href="#" className="hover:text-gray-900"><Github className="h-5 w-5"/></a>
            <a href="#" className="hover:text-gray-900"><Twitter className="h-5 w-5"/></a>
            <a href="#" className="hover:text-gray-900"><Mail className="h-5 w-5"/></a>
          </div>
        </div>
        <div className="mt-6 text-center sm:text-right text-xs text-gray-500">© {new Date().getFullYear()} LexRAG. All rights reserved.</div>
      </div>
    </footer>
  );
}
