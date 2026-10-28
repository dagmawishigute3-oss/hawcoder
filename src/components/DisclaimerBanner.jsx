import React, { useState } from 'react';
import { officialDisclaimer } from '../data/infoSessionData';
import { ExternalLink, X } from 'lucide-react';

export default function DisclaimerBanner() {
  const [showFull, setShowFull] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-amber-50/90 border-b border-amber-200 text-amber-950 text-xs py-2 px-4">
      <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 flex-1 min-w-[280px]">
          <span className="font-mono font-bold text-[10px] uppercase bg-amber-200 text-amber-900 px-1.5 py-0.5 rounded">
            Disclaimer
          </span>
          <p className="leading-snug">
            Hawcoder is an independent, non-profit student initiative run by AddisCoder 2026 alumni in Hawassa. We are <strong>not</strong> an official part of AddisCoder Inc.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 text-[11px]">
          <button
            onClick={() => setShowFull(!showFull)}
            className="underline text-amber-900 hover:text-black font-medium"
          >
            {showFull ? 'Hide notice' : 'Full notice'}
          </button>
          <a
            href={officialDisclaimer.officialWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 font-semibold text-blue-900 hover:underline"
          >
            addiscoder.com
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss banner"
            className="text-amber-700 hover:text-black ml-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {showFull && (
        <div className="max-w-4xl mx-auto pt-2 mt-2 border-t border-amber-200 text-amber-900 text-xs leading-relaxed">
          {officialDisclaimer.fullNotice}
        </div>
      )}
    </div>
  );
}
