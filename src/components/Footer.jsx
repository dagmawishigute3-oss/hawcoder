import React from 'react';
import { officialDisclaimer } from '../data/infoSessionData';
import { getSocialLinks } from '../data/config';
import { ExternalLink } from 'lucide-react';

export default function Footer({ onOpenApply }) {
  const social = getSocialLinks();

  const socialChannels = [
    {
      id: 'telegram',
      name: 'Telegram',
      url: social.telegram,
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
        </svg>
      )
    },
    {
      id: 'instagram',
      name: 'Instagram',
      url: social.instagram,
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2" aria-hidden="true">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      )
    },
    {
      id: 'youtube',
      name: 'YouTube',
      url: social.youtube,
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: social.linkedin,
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      )
    },
    {
      id: 'github',
      name: 'GitHub',
      url: social.github,
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      )
    }
  ].filter(c => Boolean(c.url));

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
              <li><a href="#announcements" className="hover:text-white transition-colors">Announcements</a></li>
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

        {/* Social Media Channels */}
        {socialChannels.length > 0 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-3 px-4 rounded-lg bg-slate-950/70 border border-slate-800/80">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="font-medium text-xs text-slate-200">Connect with Hawcoder:</span>
              <span className="text-[11px] text-slate-500">Official social channels</span>
            </div>
            <div className="flex items-center flex-wrap gap-2">
              {socialChannels.map((ch) => (
                <a
                  key={ch.id}
                  href={ch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700 text-xs font-medium"
                  title={ch.name}
                >
                  {ch.icon}
                  <span>{ch.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}

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
