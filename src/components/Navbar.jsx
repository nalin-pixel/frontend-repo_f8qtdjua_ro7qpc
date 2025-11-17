import { useState } from "react";
import { Menu, X, Bot, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-md">
              <Bot className="h-5 w-5" />
            </span>
            <div className="text-gray-900 font-semibold">LexRAG</div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-gray-700 hover:text-gray-900 transition">Features</a>
            <a href="#how" className="text-sm text-gray-700 hover:text-gray-900 transition">How it works</a>
            <a href="#pricing" className="text-sm text-gray-700 hover:text-gray-900 transition">Pricing</a>
            <a href="#security" className="inline-flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900 transition">
              <ShieldCheck className="h-4 w-4 text-emerald-600" /> Security
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#demo" className="text-sm font-medium text-gray-700 hover:text-gray-900">Book a demo</a>
            <a href="#cta" className="inline-flex items-center rounded-lg bg-gray-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-800 transition">Try Free</a>
          </div>

          <button aria-label="Menu" className="md:hidden inline-flex p-2 rounded-md hover:bg-gray-100" onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="grid gap-2">
              <a href="#features" className="rounded-md px-3 py-2 text-sm hover:bg-gray-100">Features</a>
              <a href="#how" className="rounded-md px-3 py-2 text-sm hover:bg-gray-100">How it works</a>
              <a href="#pricing" className="rounded-md px-3 py-2 text-sm hover:bg-gray-100">Pricing</a>
              <a href="#security" className="rounded-md px-3 py-2 text-sm hover:bg-gray-100">Security</a>
              <div className="h-px bg-gray-200 my-2" />
              <a href="#demo" className="rounded-md px-3 py-2 text-sm hover:bg-gray-100">Book a demo</a>
              <a href="#cta" className="rounded-md px-3 py-2 text-sm bg-gray-900 text-white">Try Free</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
