import React from 'react';
import { getActiveAnnouncements } from '../data/announcementsData';
import { Bell, ArrowRight } from 'lucide-react';

export default function AnnouncementsSection() {
  const announcements = getActiveAnnouncements();

  if (!announcements || announcements.length === 0) return null;

  return (
    <section id="announcements" className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        
        {/* Header */}
        <div className="space-y-1">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
            News &amp; Updates
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
            Announcements
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Latest announcements regarding info sessions, application windows, and schedule updates at the American Corner, Hawassa.
          </p>
        </div>

        {/* Announcements List */}
        <div className="space-y-3">
          {announcements.map((item) => (
            <div 
              key={item.id}
              className="p-5 rounded border border-slate-200 bg-white space-y-2 hover:border-slate-300 transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-slate-500 font-semibold">
                    {item.date}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-[10px] font-mono uppercase bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                    {item.badge}
                  </span>
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {item.content}
              </p>

              {item.actionText && item.actionLink && (
                <div className="pt-1">
                  <a
                    href={item.actionLink}
                    className="inline-flex items-center gap-1 text-xs font-medium text-blue-800 hover:underline"
                  >
                    <span>{item.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
