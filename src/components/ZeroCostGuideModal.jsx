import React from 'react';
import { 
  X, 
  ShieldCheck, 
  Globe, 
  Database, 
  Send, 
  Code2, 
  CheckCircle2, 
  Laptop,
  Check,
  Zap
} from 'lucide-react';

export default function ZeroCostGuideModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-fadeIn max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Guaranteed \$0.00 Forever Blueprint
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            How to Build & Host Hawcoders for \$0
          </h3>
          <p className="text-sm text-slate-600">
            This entire platform is designed to require zero dollars, zero server bills, and zero credit card subscriptions.
          </p>
        </div>

        {/* 4 Pillars of $0 Cost Operation */}
        <div className="space-y-4">
          
          {/* Pillar 1: Free Hosting */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base">
              <div className="w-8 h-8 rounded-lg bg-hawassa-100 text-hawassa-700 flex items-center justify-center">
                <Globe className="w-4 h-4" />
              </div>
              <h4>1. 100% Free Web Hosting Options</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Because this website is a modern static web application (built with Vite + React), it can be deployed to top global clouds for <strong>\$0.00/month forever</strong>:
            </p>
            <ul className="text-xs text-slate-700 space-y-1 list-disc list-inside pt-1">
              <li><strong>GitHub Pages:</strong> Push code to a free GitHub repository and enable Pages. 100% free forever.</li>
              <li><strong>Vercel (Hobby Tier):</strong> Free 1-click import from GitHub with automatic free HTTPS SSL certificates.</li>
              <li><strong>Cloudflare Pages:</strong> Unlimited free requests and free global CDN caching.</li>
              <li><strong>Netlify:</strong> Free tier with automated deploys.</li>
            </ul>
          </div>

          {/* Pillar 2: Free Application Storage */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                <Database className="w-4 h-4" />
              </div>
              <h4>2. \$0 Database & Registration System</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              No need to pay for PostgreSQL or AWS databases:
            </p>
            <ul className="text-xs text-slate-700 space-y-1 list-disc list-inside pt-1">
              <li><strong>Built-in Browser Storage:</strong> Applications save instantly in browser LocalStorage. Organizers can click "Export to CSV" anytime and open student lists in Excel for \$0.</li>
              <li><strong>Free Google Forms / Sheets:</strong> You can link the application buttons directly to a free Google Form. Every response populates a live Google Sheet in real time.</li>
            </ul>
          </div>

          {/* Pillar 3: Free Course Materials Delivery */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                <Laptop className="w-4 h-4" />
              </div>
              <h4>3. \$0 Coding Platforms for Hawassa Students</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Students do not need high-end paid computers to learn Python and algorithms:
            </p>
            <ul className="text-xs text-slate-700 space-y-1 list-disc list-inside pt-1">
              <li><strong>Google Colab:</strong> 100% free cloud Python environments in the web browser.</li>
              <li><strong>Pydroid 3 (Android):</strong> Completely free offline Python interpreter for students with smartphones.</li>
              <li><strong>Python.org:</strong> Official open-source Python is completely free to install.</li>
            </ul>
          </div>

          {/* Pillar 4: Free Community & Communications */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base">
              <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center">
                <Send className="w-4 h-4" />
              </div>
              <h4>4. \$0 Community Communication</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              <strong>Telegram Channels & Groups:</strong> The standard for Ethiopian high schoolers and university students. Free file sharing, lecture note broadcasts, and voice/video discussion rooms.
            </p>
          </div>

        </div>

        {/* Quick Deploy Command Box */}
        <div className="mt-6 p-4 rounded-2xl bg-slate-900 text-white font-mono text-xs space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span>To build static HTML/JS for free hosting:</span>
            <span className="text-emerald-400">npm run build</span>
          </div>
          <p className="text-slate-300">
            Outputs an ultra-lightweight <code>dist/</code> folder ready to upload directly to GitHub Pages or drag-and-drop into Netlify Drop for \$0.00!
          </p>
        </div>

        {/* Dismiss Button */}
        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl transition-colors"
          >
            I Understand — Proceed with \$0 Cost
          </button>
        </div>

      </div>
    </div>
  );
}
