import React, { useState } from 'react';
import { faqList } from '../data/teamAndFaqData';
import { ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="space-y-2 mb-8 text-center sm:text-left">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
            Common Questions About Hawcoder
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqList.map((faq, index) => {
            const isOpen = openIndex === index;
            const isAffiliation = index === 0;

            return (
              <div
                key={index}
                className={`rounded-xl border transition-all ${
                  isAffiliation
                    ? 'border-amber-300 bg-amber-50/40'
                    : 'border-slate-200 bg-white'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-3.5 px-4 sm:px-5 text-left flex items-center justify-between gap-3 focus:outline-none"
                >
                  <span className={`text-xs sm:text-sm font-semibold ${
                    isAffiliation ? 'text-amber-950 font-bold' : 'text-slate-900'
                  }`}>
                    {faq.question}
                  </span>
                  <span className="text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
