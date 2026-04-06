"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "Is this a recruitment agency?",
    answer:
      "No, we are a matching platform. We provide the tools for direct connection between contractors and candidate sources (TAFEs, RTOs) without heavy commission fees.",
  },
  {
    question: "How do you verify White Cards?",
    answer:
      "We integrate with state registers to verify White Cards and Cert II/III progress in real-time, giving site managers total confidence in candidate compliance.",
  },
  {
    question: "What trades do you cover?",
    answer:
      "We currently focus on electrical, plumbing, carpentry, and general construction trades across Victoria. More trades are being added as we expand.",
  },
  {
    question: "How much does it cost?",
    answer:
      "During our early access pilot, the platform is free for employers. We plan to introduce tiered pricing based on the number of hires made through the platform.",
  },
] as const;

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 md:px-8 bg-surface">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-3xl font-headline font-black mb-12 text-center underline decoration-secondary decoration-8 underline-offset-4">
          COMMON QUESTIONS
        </h3>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div key={index} className="bg-surface-container rounded-xl">
              <button
                className="w-full p-6 cursor-pointer flex justify-between items-center font-headline font-bold text-left"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                aria-expanded={openIndex === index}
              >
                {item.question}
                <span
                  className={`material-symbols-outlined transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  expand_more
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-on-surface-variant">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
