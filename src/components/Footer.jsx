import React from 'react';
import { officialDisclaimer } from '../data/infoSessionData';
import { ExternalLink, AlertCircle } from 'lucide-react';

export default function Footer({ onOpenApply, onOpenRSVP }) {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-2">
            <h3 className="text-white font-serif font-bold text-base flex items-center gap-2">
              <span className="font-mono text-slate-300 bg-slate-800 px-1.5 py-0.5 rounded text-xs select-none">|=|</span>
              <span>Hawcoder</span>
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              A student-led initiative by AddisCoder 2026 alumni sharing algorithms and Python in Hawassa, Ethiopia. Hosted at the American Corner, Hawassa.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#about" className="hover:text-white transition-colors">About Hawcoder</a></li>
              <li><a href="#syllabus" className="hover:text-white transition-colors">Course Syllabus (19 Sessions)</a></li>
              <li><a href="#info-sessions" className="hover:text-white transition-colors">AddisCoder Info Sessions</a></li>
              <li><button onClick={onOpenApply} className="hover:text-white transition-colors text-left">Apply for Course</button></li>
              <li><a href="#team" className="hover:text-white transition-colors">Founders & Team</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider">Official AddisCoder</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Official program applications and information:
            </p>
            <a
              href="https://www.addiscoder.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-blue-300 hover:text-blue-200 underline"
            >
              www.addiscoder.com
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Legal notice */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 leading-relaxed text-[11px] space-y-1">
          <strong className="text-amber-400 block font-semibold">
            Important Trademark & Affiliation Notice:
          </strong>
          <p>{officialDisclaimer.fullNotice}</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <span>© {new Date().getFullYear()} Hawcoder (Hawassa, Ethiopia).</span>
          <span>Venue Partner: American Corner, Hawassa</span>
        </div>

      </div>
    </footer>
  );
}
