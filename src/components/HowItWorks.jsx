import { motion } from "framer-motion";
import { Upload, Cpu, BookOpen, Link as LinkIcon } from "lucide-react";

const steps = [
  { icon: Upload, title: "Upload", desc: "Add your books, PDFs, case files, and internal knowledge." },
  { icon: Cpu, title: "Index", desc: "We extract text, chunk it, and build vector indices for fast retrieval." },
  { icon: BookOpen, title: "Ask", desc: "Ask natural‑language questions about your materials." },
  { icon: LinkIcon, title: "Cite", desc: "Get answers with citations and page references you can export." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-16 sm:py-20 bg-gradient-to-b from-white to-indigo-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">How it works</h2>
          <p className="mt-3 text-gray-600">From upload to verifiable answers in minutes.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-white">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
