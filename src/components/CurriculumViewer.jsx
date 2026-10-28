import React, { useState } from 'react';
import { courseOverview, hawcoderSessions } from '../data/curriculumData';
import { ExternalLink } from 'lucide-react';

export default function CurriculumViewer() {
  const [expandedSession, setExpandedSession] = useState(null);

  const toggleSession = (num) => {
    setExpandedSession(expandedSession === num ? null : num);
  };

  return (
    <section id="syllabus" className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        
        {/* Header */}
        <div className="space-y-1">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
            Course Outline
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
            {courseOverview.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            As adopted by <strong>{courseOverview.adoptedBy}</strong> • Sourced from the{' '}
            <a 
              href={courseOverview.sourceUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-800 underline inline-flex items-center gap-0.5"
            >
              {courseOverview.curriculumSource}
              <ExternalLink className="w-3 h-3" />
            </a>
          </p>
        </div>

        {/* Specifications */}
        <div className="border border-slate-200 rounded p-3 text-xs sm:text-sm grid grid-cols-2 sm:grid-cols-4 gap-2 bg-slate-50/50">
          <div>
            <span className="text-slate-500 block text-xs">Format:</span>
            <span className="font-medium text-slate-900">{courseOverview.format}</span>
          </div>
          <div>
            <span className="text-slate-500 block text-xs">Session Length:</span>
            <span className="font-medium text-slate-900">{courseOverview.sessionLength}</span>
          </div>
          <div>
            <span className="text-slate-500 block text-xs">Language:</span>
            <span className="font-medium text-slate-900">{courseOverview.language}</span>
          </div>
          <div>
            <span className="text-slate-500 block text-xs">Venue:</span>
            <span className="font-medium text-slate-900">{courseOverview.venue}</span>
          </div>
        </div>

        {/* Schedule Table */}
        <div className="border border-slate-300 rounded overflow-hidden">
          <div className="bg-slate-100 px-4 py-2 border-b border-slate-300 font-serif font-bold text-slate-900 text-sm flex items-center justify-between">
            <span>Schedule (19 Sessions)</span>
            <span className="font-sans font-normal text-xs text-slate-500">
              Click row to view topic breakdown
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 font-semibold text-slate-700">
                  <th className="py-2.5 px-3 w-16 text-center border-r border-slate-200">Week</th>
                  <th className="py-2.5 px-3 w-20 text-center border-r border-slate-200">Session</th>
                  <th className="py-2.5 px-3">Topic</th>
                  <th className="py-2.5 px-3 w-32 text-right">Lecture ref.</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {hawcoderSessions.map((s) => {
                  const isExpanded = expandedSession === s.session;
                  return (
                    <React.Fragment key={s.session}>
                      <tr 
                        onClick={() => toggleSession(s.session)}
                        className={`hover:bg-slate-50 cursor-pointer ${
                          isExpanded ? 'bg-slate-50' : ''
                        }`}
                      >
                        <td className="py-2 px-3 text-center font-mono text-slate-500 border-r border-slate-200">{s.week}</td>
                        <td className="py-2 px-3 text-center font-mono font-semibold text-slate-800 border-r border-slate-200">{s.session}</td>
                        <td className="py-2 px-3 text-slate-900 font-medium">{s.topic}</td>
                        <td className="py-2 px-3 text-right">
                          <a
                            href={s.lectureUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="font-mono text-xs text-blue-800 hover:underline"
                            title="View in AddisCoder 2026 syllabus"
                          >
                            {s.lectureRef}
                          </a>
                        </td>
                      </tr>

                      {isExpanded && (
                        <tr className="bg-slate-50/70">
                          <td colSpan={4} className="py-2 px-4 text-xs text-slate-600 border-t border-slate-200">
                            <strong>Summary:</strong> {s.summary}
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-xs text-slate-500">
          * Curriculum adopted directly from the open AddisCoder 2026 syllabus. Students do not need any prior coding background to begin.
        </p>

      </div>
    </section>
  );
}
