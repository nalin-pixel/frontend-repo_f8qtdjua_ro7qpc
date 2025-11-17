import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    period: "",
    highlight: false,
    features: [
      "3 document uploads",
      "Basic Q&A (RAG)",
      "50 queries/month",
      "Source citations",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: "$49",
    period: "/month",
    highlight: true,
    features: [
      "200 document uploads",
      "Advanced Q&A + summaries",
      "1,500 queries/month",
      "Smart citations with page refs",
      "Export quotes and briefs",
      "Priority support",
    ],
  },
  {
    name: "Team",
    price: "$199",
    period: "/month",
    highlight: false,
    features: [
      "Unlimited uploads",
      "10,000 queries/month",
      "Shared libraries & permissions",
      "Case brief & precedent compare",
      "SSO + audit logs",
      "Admin controls",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-gray-600">Start free. Upgrade as your team grows.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`rounded-2xl border ${t.highlight ? 'border-indigo-500' : 'border-gray-200'} bg-white p-6 shadow-sm relative`}
            >
              {t.highlight && (
                <span className="absolute -top-3 right-6 rounded-full bg-indigo-600 px-2 py-1 text-xs text-white shadow">Most Popular</span>
              )}
              <div className="text-lg font-semibold text-gray-900">{t.name}</div>
              <div className="mt-4 flex items-end gap-1">
                <div className="text-4xl font-extrabold text-gray-900">{t.price}</div>
                <div className="text-gray-500">{t.period}</div>
              </div>
              <ul className="mt-6 grid gap-2 text-sm text-gray-700">
                {t.features.map((f, i) => (
                  <li key={i} className="inline-flex items-start gap-2">
                    <Check className="h-4 w-4 text-indigo-600 mt-0.5"/>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#cta" className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold shadow-sm transition ${t.highlight ? 'bg-gray-900 text-white hover:bg-gray-800' : 'bg-white text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50'}`}>Get started</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
