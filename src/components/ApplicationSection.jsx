import React from 'react';
import { appConfig } from '../data/config';
import { ExternalLink } from 'lucide-react';

export default function ApplicationSection() {
  return (
    <section id="apply" className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        
        {/* Header */}
        <div className="space-y-1">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
            Admissions
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
            Apply to Hawcoder
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
            Applications for Hawcoder cohorts are submitted through our official application form. All application instructions and requirements are detailed directly in the form.
          </p>
        </div>

        {/* Simple Application Card */}
        <div className="rounded border border-slate-300 bg-slate-50 p-6 sm:p-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-lg font-serif font-bold text-slate-900">
                Hawcoder Cohort Application
              </h3>
              <p className="text-xs text-slate-500">
                Hosted at the American Corner, Hawassa
              </p>
            </div>
            <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 self-start sm:self-auto">
              100% Free (0 ETB)
            </span>
          </div>

          <div className="pt-2">
            <a
              href={appConfig.googleFormApplicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm px-6 py-3 rounded transition-colors"
            >
              <span>Apply via Google Form</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
