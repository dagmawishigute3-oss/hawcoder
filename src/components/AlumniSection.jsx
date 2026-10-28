import React from 'react';
import { teamMembers } from '../data/teamAndFaqData';

export default function AlumniSection() {
  return (
    <section id="team" className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        
        {/* Header */}
        <div className="space-y-1">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
            Team
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
            Organizers &amp; Instructors
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            High school alumni of AddisCoder 2026 living in Hawassa, volunteering to organize and teach Hawcoder.
          </p>
        </div>

        {/* Side-by-side Names */}
        <div className="p-4 rounded border border-slate-200 bg-slate-50/60">
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-sm sm:text-base font-serif font-bold text-slate-900">
            {teamMembers.map((name, i) => (
              <span key={i} className="inline-flex items-center">
                <span>{name}</span>
                {i < teamMembers.length - 1 && (
                  <span className="ml-2.5 text-slate-400 font-sans font-normal">•</span>
                )}
              </span>
            ))}
          </div>
          <p className="text-xs text-slate-500 font-sans mt-2">
            Role: Organizer and Instructor
          </p>
        </div>

        {/* Initiative proposal note */}
        <div className="p-3.5 rounded bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-0.5">
          <p className="font-semibold text-slate-800">
            Initiative Proposal:
          </p>
          <p>
            "Proposal: Sharing What We Learned at AddisCoder with Students in Hawassa" — submitted to and hosted at the <strong>American Corner, Hawassa</strong> (September 28, 2026).
          </p>
        </div>

      </div>
    </section>
  );
}
