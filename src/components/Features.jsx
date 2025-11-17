import { motion } from "framer-motion";
import { Files, Shield, SearchCheck, ScrollText, BadgeCheck, Sparkles } from "lucide-react";

const items = [
  {
    icon: Files,
    title: "Upload & Organize",
    desc: "Books, PDFs, case laws, pleadings, memos and more. Automatic extraction, chunking & indexing.",
  },
  {
    icon: SearchCheck,
    title: "RAG Q&A",
    desc: "Ask natural questions and get verifiable answers grounded in your own documents.",
  },
  {
    icon: ScrollText,
    title: "Briefs & Summaries",
    desc: "Generate case summaries, key issue lists and draft briefs with direct references.",
  },
  {
    icon: BadgeCheck,
    title: "Smart Citations",
    desc: "Every answer includes source citations and page references, exportable in one click.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    desc: "End-to-end encrypted, GDPR compliant, no training on your data. On‑prem options.",
  },
  {
    icon: Sparkles,
    title: "Cross-Document Insight",
    desc: "Compare precedents and statutes, find patterns, and reason across your entire corpus.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Built for legal speed and rigor</h2>
          <p className="mt-3 text-gray-600">Everything you need for fast, reliable, and citation‑backed research.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-white">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
