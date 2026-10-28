import React from 'react';
import { appConfig } from '../data/config';
import { ExternalLink, FileText, CheckCircle2, ShieldCheck, Database, HelpCircle } from 'lucide-react';

export default function ApplicationSection({ onOpenOrganizer }) {
  return (
    <section id="apply" className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        
        {/* Header */}
        <div className="space-y-1">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
            Admissions &amp; Registration
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
            Apply to Join Hawcoder
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
            Because cohort timelines, questions, and submission criteria change between rounds, all applications and transcript uploads are managed through our official cohort form.
          </p>
        </div>

        {/* Application Portal Box */}
        <div className="rounded border border-slate-300 bg-white p-6 sm:p-8 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-mono font-bold uppercase bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                Hawassa Cohort Registration
              </span>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 mt-1">
                Official Application Form
              </h3>
            </div>
            <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 self-start sm:self-auto">
              Tuition: 100% Free (0 ETB)
            </span>
          </div>

          {/* Application Steps */}
          <div className="space-y-3 text-xs sm:text-sm text-slate-700">
            <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider">
              Application Steps:
            </h4>
            <ol className="list-decimal list-inside space-y-2 text-slate-700 leading-relaxed">
              <li>
                <strong>Review the Syllabus:</strong> Check the 19-session course outline to ensure you can attend the sessions at the American Corner, Hawassa.
              </li>
              <li>
                <strong>Prepare Your Transcript:</strong> Have a clear PDF scan or photo of your Grade 9, 10, or 11 report card ready to upload.
              </li>
              <li>
                <strong>Fill Out the Form:</strong> Answer the short motivation statement in your own authentic words (do not use AI tools like ChatGPT).
              </li>
            </ol>
          </div>

          {/* Direct Action Button */}
          <div className="pt-2">
            <a
              href={appConfig.googleFormApplicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm px-6 py-3 rounded transition-colors w-full sm:w-auto text-center"
            >
              <span>Open Hawcoder Application Form (Google Form)</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <p className="text-[11px] text-slate-500 mt-2">
              Opens the secure application form. Uploads are stored directly in the official Hawcoder Google Drive.
            </p>
          </div>
        </div>

        {/* Where do the accounts sit? Explanation Card */}
        <div className="rounded border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600 space-y-2">
          <div className="flex items-center gap-2 text-slate-900 font-semibold">
            <Database className="w-4 h-4 text-slate-700" />
            <span>How Applications &amp; Transcripts Are Handled:</span>
          </div>
          <p className="leading-relaxed">
            All submitted student applications populate a private <strong>Google Sheet</strong> in the Hawcoder team’s Google Drive, and attached transcripts automatically save into a secure <strong>Google Drive Folder</strong>. The organizers (Dagmawi, Biniyam, Amr, Meklit, Abenezer) can access, review, and evaluate applicants at any time from both phones and laptops at zero cost.
          </p>
        </div>

      </div>
    </section>
  );
}
