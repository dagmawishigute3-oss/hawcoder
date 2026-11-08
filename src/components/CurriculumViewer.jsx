import React, { useState } from 'react';
import { courseOverview, hawcoderSessions } from '../data/curriculumData';
import { ExternalLink, Download, FileCode, Presentation, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

export default function CurriculumViewer() {
  const [expandedSession, setExpandedSession] = useState(1); // Default open Session 1

  const toggleSession = (num) => {
    setExpandedSession(expandedSession === num ? null : num);
  };

  const getMaterialIcon = (type) => {
    switch (type) {
      case 'slides':
        return <Presentation className="w-3.5 h-3.5 text-amber-600" />;
      case 'notebook':
        return <FileCode className="w-3.5 h-3.5 text-blue-600" />;
      case 'exercises':
        return <FileCode className="w-3.5 h-3.5 text-indigo-600" />;
      case 'solutions':
        return <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />;
      default:
        return <FileCode className="w-3.5 h-3.5 text-slate-600" />;
    }
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
            <span>Schedule (10 Sessions)</span>
            <span className="font-sans font-normal text-xs text-slate-500">
              Click any session to view details & download course materials
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 font-semibold text-slate-700">
                  <th className="py-2.5 px-3 w-20 text-center border-r border-slate-200">Session</th>
                  <th className="py-2.5 px-3">Topic</th>
                  <th className="py-2.5 px-3 w-28 text-center border-l border-slate-200">Materials</th>
                  <th className="py-2.5 px-3 w-28 text-right">Lecture ref.</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {hawcoderSessions.map((s) => {
                  const isExpanded = expandedSession === s.session;
                  const hasMaterials = s.materials && s.materials.length > 0;

                  return (
                    <React.Fragment key={s.session}>
                      <tr 
                        onClick={() => toggleSession(s.session)}
                        className={`hover:bg-slate-50/80 cursor-pointer transition-colors ${
                          isExpanded ? 'bg-slate-50' : ''
                        }`}
                      >
                        <td className="py-3 px-3 text-center font-mono font-semibold text-slate-800 border-r border-slate-200">
                          <div className="flex items-center justify-center gap-1.5">
                            {isExpanded ? <ChevronUp className="w-3.5 h-3.5 text-slate-400" /> : <ChevronDown className="w-3.5 h-3.5 text-slate-400" />}
                            <span>{s.session}</span>
                          </div>
                        </td>
                        <td className="py-3 px-3 text-slate-900 font-medium">
                          <div className="flex items-center gap-2">
                            <span>{s.topic}</span>
                            {hasMaterials && (
                              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                4 Files
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-3 px-3 text-center border-l border-slate-200">
                          {hasMaterials ? (
                            <span className="text-xs font-medium text-emerald-700">
                              Available
                            </span>
                          ) : (
                            <span className="text-xs text-slate-400">
                              Coming soon
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-3 text-right">
                          <a
                            href={s.lectureUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="font-mono text-xs text-blue-800 hover:underline inline-flex items-center gap-1"
                            title="View lecture reference in AddisCoder 2026 syllabus"
                          >
                            <span>{s.lectureRef}</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        </td>
                      </tr>

                      {/* Expanded Section Details & Downloadable Course Materials */}
                      {isExpanded && (
                        <tr className="bg-slate-50/90 border-t border-slate-200">
                          <td colSpan={4} className="p-4 space-y-3">
                            <div>
                              <strong className="text-xs font-semibold text-slate-700 block mb-1">
                                Topic Breakdown:
                              </strong>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                {s.summary}
                              </p>
                            </div>

                            {/* Download / View Course Materials */}
                            {hasMaterials ? (
                              <div className="pt-2 border-t border-slate-200">
                                <span className="text-xs font-semibold text-slate-900 block mb-2">
                                  Course Materials for Session {s.session}:
                                </span>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                  {s.materials.map((mat, idx) => (
                                    <div 
                                      key={idx}
                                      className="bg-white border border-slate-200 rounded-lg p-2.5 flex items-start justify-between gap-2 shadow-sm hover:border-slate-300 transition-colors"
                                    >
                                      <div className="flex items-start gap-2 min-w-0">
                                        <div className="mt-0.5 p-1 bg-slate-50 rounded border border-slate-200">
                                          {getMaterialIcon(mat.type)}
                                        </div>
                                        <div className="min-w-0">
                                          <div className="text-xs font-semibold text-slate-900 truncate">
                                            {mat.name}
                                          </div>
                                          <div className="text-[11px] text-slate-500 truncate">
                                            {mat.desc}
                                          </div>
                                        </div>
                                      </div>

                                      <div className="flex items-center gap-1.5 flex-shrink-0">
                                        {mat.colabUrl && (
                                          <a
                                            href={mat.colabUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 px-2 py-1 rounded text-[11px] font-medium bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors"
                                            title="Open and run in Google Colab"
                                          >
                                            Colab
                                            <ExternalLink className="w-2.5 h-2.5" />
                                          </a>
                                        )}
                                        <a
                                          href={mat.file}
                                          download
                                          className="inline-flex items-center gap-1 px-2 py-1 rounded text-[11px] font-medium bg-slate-900 text-white hover:bg-slate-800 transition-colors"
                                          title="Download file to computer"
                                        >
                                          <Download className="w-3 h-3" />
                                          Save
                                        </a>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ) : (
                              <p className="text-[11px] text-slate-500 italic pt-1 border-t border-slate-200">
                                Slides and notebook materials for this session will be uploaded prior to class.
                              </p>
                            )}
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
