import React from 'react';
import { appConfig, getSocialLinks } from '../data/config';
import { ExternalLink, Calendar, Bell, CheckCircle } from 'lucide-react';

export default function ApplicationSection() {
  const isFormActive = Boolean(
    appConfig.applicationsOpen && 
    appConfig.googleFormApplicationUrl && 
    appConfig.googleFormApplicationUrl.trim() !== '' && 
    appConfig.googleFormApplicationUrl !== 'https://docs.google.com/forms'
  );

  const social = getSocialLinks();

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
            {isFormActive 
              ? "Applications for Hawcoder cohorts are submitted through our official application form. All application instructions and requirements are detailed directly in the form."
              : "Admission to Hawcoder cohorts is completely free for high school students in Hawassa. Cohorts run periodically at the American Corner, Hawassa."
            }
          </p>
        </div>

        {/* Application Card */}
        <div className="rounded-lg border border-slate-300 bg-slate-50 p-6 sm:p-8 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-lg font-serif font-bold text-slate-900">
                Hawcoder Cohort Application
              </h3>
              <p className="text-xs text-slate-500">
                Hosted at the American Corner, Hawassa
              </p>
            </div>
            
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                100% Free (0 ETB)
              </span>
              {isFormActive ? (
                <span className="text-xs font-semibold text-blue-800 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                  Applications Open
                </span>
              ) : (
                <span className="text-xs font-semibold text-slate-700 bg-slate-200/80 px-2.5 py-1 rounded border border-slate-300">
                  Currently Closed
                </span>
              )}
            </div>
          </div>

          {isFormActive ? (
            /* Active Form State */
            <div className="pt-2">
              <a
                href={appConfig.googleFormApplicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm px-6 py-3 rounded transition-colors shadow-sm"
              >
                <span>Apply via Google Form</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ) : (
            /* No Active Application State */
            <div className="bg-white rounded border border-slate-200 p-5 space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-amber-50 text-amber-700 rounded-lg border border-amber-200 flex-shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-slate-900">
                    There is no active application open at this time
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Applications for our upcoming cohort are currently closed. When registration opens for the next session cycle, the official Google Form application link will be activated right here.
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Bell className="w-3.5 h-3.5 text-blue-600" />
                  <span>Stay updated: announcements will be posted on our Telegram channel and website.</span>
                </div>
                {social.telegram && (
                  <a
                    href={social.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-blue-800 hover:underline"
                  >
                    Join Telegram
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Quick Notes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 pt-2 border-t border-slate-200/80">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-slate-500" />
              <span>For Grades 9–11 high school students in Hawassa</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-slate-500" />
              <span>No prior coding or programming experience required</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
