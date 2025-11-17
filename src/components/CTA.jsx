import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-indigo-900 to-violet-900 p-8 sm:p-12 text-white shadow-xl"
        >
          <div className="absolute -top-24 -left-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"/>
          <div className="absolute -bottom-28 -right-20 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl"/>

          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Ready to research faster, with answers you can cite?</h3>
            <p className="mt-3 text-white/80">Join legal teams who cut research time by up to 80%. Start free—no credit card required.</p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-gray-900 px-5 py-3 text-sm font-semibold shadow hover:bg-gray-100">
                Start Free
                <ArrowRight className="h-4 w-4"/>
              </a>
              <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 text-white px-5 py-3 text-sm font-semibold ring-1 ring-white/20 hover:bg-white/15">
                Book a Demo
              </a>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 text-sm text-white/80">
              <ShieldCheck className="h-4 w-4 text-emerald-400"/>
              End-to-end encrypted • GDPR compliant • No training on your data
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
