import React from 'react';
import { upcomingInfoSessions } from '../data/infoSessionData';
import { appConfig } from '../data/config';
import { ExternalLink, Database } from 'lucide-react';

export default function AddisCoderHub({ onOpenRSVP }) {
  return (
    <section id="info-sessions" className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        
        {/* Section Header */}
        <div className="space-y-1">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
            Outreach &amp; Guidance
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
            AddisCoder Info Sessions &amp; Application Guidance
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
            Helping Hawassa high school students learn about AddisCoder, prepare competitive applications, and submit on time before the late-December deadline.
          </p>
        </div>

        {/* The Upcoming Session Card */}
        {upcomingInfoSessions.map((session) => (
          <div 
            key={session.id}
            className="rounded border border-slate-300 p-5 sm:p-6 bg-slate-50 space-y-4"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              
              <div className="space-y-3 max-w-2xl">
                <div>
                  <span className="text-xs font-mono font-bold uppercase text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded">
                    {session.badge}
                  </span>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 mt-1.5">
                    {session.title}
                  </h3>
                </div>

                <div className="text-xs sm:text-sm text-slate-700 space-y-1">
                  <p><strong>Venue:</strong> {session.venue} ({session.locationDetail})</p>
                  <p><strong>Target Audience:</strong> {session.targetAudience}</p>
                </div>

                {/* Important Deadline Warning */}
                <div className="p-3 bg-amber-50 border border-amber-300 rounded text-xs text-amber-950">
                  <strong>⚠️ Critical Notice:</strong> {session.keyDeadlineWarning}
                </div>

                {/* Agenda */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Session Agenda:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-700">
                    {session.agenda.map((item, idx) => (
                      <li key={idx}>
                        <strong>{item.title}:</strong> {item.desc}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* RSVP Callout via Google Form */}
              <div className="md:w-60 bg-white p-4 rounded border border-slate-200 text-center space-y-2.5 shrink-0">
                <span className="text-xs font-mono font-bold text-slate-600 uppercase block">
                  Reserve a Seat
                </span>
                <p className="text-xs text-slate-600">
                  Free for high school students in Hawassa.
                </p>
                
                <a
                  href={appConfig.googleFormInfoSessionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2 px-3 rounded text-xs transition-colors"
                >
                  <span>RSVP via Google Form</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <span className="text-[11px] text-slate-400 block pt-1 border-t border-slate-100">
                  American Corner, Hawassa
                </span>
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
