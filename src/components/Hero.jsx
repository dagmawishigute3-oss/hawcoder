import React from 'react';
import { hawcoderMission } from '../data/infoSessionData';

export default function Hero({ onOpenApply }) {
  return (
    <section id="about" className="py-10 sm:py-14 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        
        {/* Main Title & Subtitle */}
        <div className="space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-500">
            Hawassa, Sidama Region, Ethiopia • 100% Free
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
            Sharing What We Learned at AddisCoder with Students in Hawassa
          </h1>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl pt-1">
            We are a group of high school students from Hawassa who participated in <strong>AddisCoder 2026</strong>. 
            We started <strong>Hawcoder</strong> to share the demanding, college-level computer science, Python, and algorithm design we learned with other students in our city.
          </p>
        </div>

        {/* Quick Meta Details */}
        <div className="p-3.5 bg-slate-50 rounded border border-slate-200 text-xs sm:text-sm text-slate-700 grid grid-cols-1 sm:grid-cols-3 gap-2">
          <div>
            <strong>Venue:</strong> American Corner, Hawassa
          </div>
          <div>
            <strong>Format:</strong> 19 sessions (~10 weeks)
          </div>
          <div>
            <strong>Cost:</strong> 100% Free (0 ETB)
          </div>
        </div>

        {/* Navigation jump buttons */}
        <div className="flex flex-wrap gap-2.5 pt-1 pb-4 border-b border-slate-100 text-xs sm:text-sm">
          <a
            href="#syllabus"
            className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-4 py-2 rounded transition-colors"
          >
            Course Syllabus (19 Sessions)
          </a>
          <a
            href="#info-sessions"
            className="bg-amber-100 hover:bg-amber-200 text-amber-900 font-medium px-4 py-2 rounded border border-amber-300 transition-colors"
          >
            AddisCoder Info Sessions & Prep
          </a>
          <button
            onClick={onOpenApply}
            className="text-blue-900 hover:underline font-semibold px-3 py-2"
          >
            Apply to Join →
          </button>
        </div>

        {/* Narrative & Motivation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-slate-700 leading-relaxed pt-2">
          
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-serif font-bold text-slate-900">
              What is AddisCoder?
            </h2>
            <p>
              AddisCoder is a free, four-week intensive summer program in Addis Ababa for high school students from all over Ethiopia. It was started in 2011 by <strong>Jelani Nelson</strong>, an Ethiopian-American computer science professor at UC Berkeley, and is now run with the Ethiopian Ministry of Education.
            </p>
            <p>
              Housing, meals, and transport are all covered. Classes run about eight hours a day, and most of each day is spent solving hard problems by writing code, not following step-by-step tutorials. Topics like Big-O, graph algorithms, and memoization changed how we think, and we want students in Hawassa to have that experience too.
            </p>
            <p className="text-xs text-slate-500">
              Official website:{' '}
              <a href="https://www.addiscoder.com" target="_blank" rel="noopener noreferrer" className="text-blue-800 underline">
                www.addiscoder.com
              </a>
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-serif font-bold text-slate-900">
              The Problem We Noticed
            </h2>
            <p>
              {hawcoderMission.theProblem}
            </p>
            <p className="font-semibold text-slate-900 pt-1">
              What we are doing:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              <li>
                <strong>AddisCoder Info Sessions:</strong> Hosting sessions at the American Corner to explain who can apply, when applications open, and how to submit a strong application before the late-December deadline.
              </li>
              <li>
                <strong>A Course Based on What We Learned:</strong> Teaching Python, problem solving, and algorithms in small groups, using the same hands-on style we experienced at AddisCoder.
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
