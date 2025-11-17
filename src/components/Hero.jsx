import { motion } from "framer-motion";
import { ArrowRight, BookOpenCheck, FileText, SearchCheck, Quote } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="absolute -top-48 -left-32 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="absolute -bottom-40 -right-20 h-[28rem] w-[28rem] rounded-full bg-violet-200/40 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1 text-xs text-gray-700 shadow-sm">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-white"><SearchCheck className="h-3 w-3"/></span>
              Evidence-backed AI for legal teams
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              AI research you can cite
            </h1>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Upload case files, statutes, and internal knowledge. Ask questions in plain English. Get precise, verifiable answers with source citations—instantly.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 text-white px-5 py-3 text-sm font-semibold shadow-lg hover:bg-gray-800 transition">
                Try LexRAG Free
                <ArrowRight className="h-4 w-4"/>
              </a>
              <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50">
                Book a Demo
              </a>
            </div>

            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
              <div className="inline-flex items-center gap-2"><FileText className="h-4 w-4 text-indigo-600"/> Citation-backed answers</div>
              <div className="inline-flex items-center gap-2"><BookOpenCheck className="h-4 w-4 text-violet-600"/> Works across PDFs & books</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-violet-500/10 rounded-3xl blur-xl"/>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border border-gray-200 bg-white/80 backdrop-blur shadow-xl p-4"
            >
              <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-gray-900 via-indigo-900 to-violet-900 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-white/70">LexRAG Playground</div>
                  <div className="flex gap-2">
                    <span className="h-2 w-2 rounded-full bg-red-400"/>
                    <span className="h-2 w-2 rounded-full bg-yellow-400"/>
                    <span className="h-2 w-2 rounded-full bg-green-400"/>
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  <div className="text-xs text-white/70">Question</div>
                  <div className="rounded-lg bg-white/10 ring-1 ring-white/10 p-3">Summarize key precedents on consideration in contract law.</div>

                  <div className="text-xs text-white/70 mt-2">Answer</div>
                  <div className="rounded-lg bg-white/10 ring-1 ring-white/10 p-3">
                    In Currie v Misa (1875), consideration was defined as a detriment to the promisee... <span className="text-indigo-300">[Cites: Page 42, Contract Law Handbook]</span>
                  </div>

                  <div className="text-xs text-white/70 mt-2">Sources</div>
                  <div className="grid sm:grid-cols-2 gap-2">
                    <div className="rounded-md bg-white/10 ring-1 ring-white/10 p-2 text-sm">Contract Law Handbook – p. 42</div>
                    <div className="rounded-md bg-white/10 ring-1 ring-white/10 p-2 text-sm">Currie v Misa (1875) – p. 131</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 w-48 rounded-xl border border-gray-200 bg-white shadow-md p-3"
            >
              <div className="text-[10px] uppercase text-gray-500">What users say</div>
              <div className="mt-1 text-sm text-gray-900 flex gap-1">
                <Quote className="h-4 w-4 text-indigo-600"/>
                Reduced research time by 70%.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
