import React, { useState } from 'react';
import { saveRSVP } from '../utils/storage';
import { appConfig } from '../data/config';
import { X, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react';

export default function RSVPModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    contact: '',
    school: '',
    grade: 'Grade 10',
    question: ''
  });
  const [confirmed, setConfirmed] = useState(null);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.contact.trim()) return;
    const rsvp = saveRSVP(formData);
    setConfirmed(rsvp);
  };

  const handleClose = () => {
    setConfirmed(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-200">
        
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmed ? (
          <div className="text-center space-y-4 py-2">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-bold font-serif text-slate-900">Seat Reserved</h3>
              <p className="text-xs text-slate-600">
                You are registered for the AddisCoder info session at the American Corner, Hawassa.
              </p>
            </div>

            <div className="bg-slate-900 text-white rounded-xl p-3 font-mono text-left text-xs space-y-1">
              <p className="text-amber-400">RSVP: {confirmed.id}</p>
              <p>Name: {confirmed.fullName}</p>
              <p>Venue: American Corner, Hawassa</p>
            </div>

            <div className="text-left p-2.5 bg-amber-50 rounded-lg border border-amber-200 text-[11px] text-amber-900">
              <strong>Notice:</strong> This session is hosted voluntarily by Hawcoder (AddisCoder 2026 alumni). Official AddisCoder applications are handled strictly via <code>addiscoder.com</code>.
            </div>

            <button
              onClick={handleClose}
              className="w-full bg-slate-900 text-white font-medium py-2 rounded-lg text-xs"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                Free Info Session RSVP
              </span>
              <h3 className="text-xl font-bold font-serif text-slate-900 mt-1">
                AddisCoder Info Session
              </h3>
              <p className="text-xs text-slate-500">
                American Corner, Hawassa • Hosted by AddisCoder 2026 Alumni
              </p>
            </div>

            <div className="p-2.5 bg-amber-50 rounded-lg border border-amber-200 text-[11px] text-amber-900 leading-snug">
              <strong>Important:</strong> Applications for AddisCoder usually close at the end of December. We host this session to help you apply on time.
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Biruk Tadesse"
                  required
                  className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone Number or Telegram Handle *
                </label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="0911... or @username"
                  required
                  className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-slate-800"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    School in Hawassa
                  </label>
                  <input
                    type="text"
                    name="school"
                    value={formData.school}
                    onChange={handleChange}
                    placeholder="e.g. Tabor, Comboni"
                    className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Grade
                  </label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-slate-800 bg-white"
                  >
                    <option value="Grade 9">Grade 9</option>
                    <option value="Grade 10">Grade 10</option>
                    <option value="Grade 11">Grade 11</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Question for Alumni (Optional)
                </label>
                <textarea
                  name="question"
                  rows={2}
                  value={formData.question}
                  onChange={handleChange}
                  placeholder="Ask anything about the test, requirements, or schedule..."
                  className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-slate-800"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2 rounded-lg text-xs transition-colors"
              >
                Confirm RSVP (Free)
              </button>

              <div className="pt-1 text-center">
                <a
                  href={appConfig.googleFormInfoSessionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-blue-800 hover:underline inline-flex items-center gap-1"
                >
                  <span>Or open the official Google Form for RSVPs</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
