import React, { useState } from 'react';
import { appConfig } from '../data/config';
import { 
  X, 
  Lock, 
  ExternalLink, 
  FileSpreadsheet, 
  Folder, 
  FileText, 
  CheckSquare, 
  Users, 
  ShieldCheck, 
  Settings, 
  Key,
  LogOut,
  Download
} from 'lucide-react';
import { exportToCSV } from '../utils/storage';

export default function AdminDashboardModal({ isOpen, onClose }) {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Default organizer passcode
  const CORRECT_PASSCODE = 'hawcoder2026';

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode === CORRECT_PASSCODE) {
      setIsAuthenticated(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Incorrect passcode. Please try again.');
    }
  };

  const handleDownloadAttendanceTemplate = () => {
    const attendanceTemplate = [
      {
        "Student Name": "Example: Almaz Bekele",
        "School": "Hawassa Tabor",
        "Grade": "Grade 10",
        "Phone": "0911...",
        "Session 1": "",
        "Session 2": "",
        "Session 3": "",
        "Session 4": "",
        "Session 5": "",
        "Notes": ""
      }
    ];
    exportToCSV(attendanceTemplate, 'hawcoder_american_corner_attendance_sheet.csv');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-300 max-h-[92vh] overflow-y-auto">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 rounded"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!isAuthenticated ? (
          /* Passcode Gate */
          <div className="max-w-md mx-auto py-6 text-center space-y-4">
            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-700">
              <Lock className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-serif font-bold text-slate-900">
                Hawcoder Organizer Access
              </h3>
              <p className="text-xs text-slate-500">
                This area is for Hawcoder organizers (Dagmawi, Biniyam, Amr, Meklit, Abenezer).
              </p>
            </div>

            {errorMsg && (
              <p className="text-xs text-rose-600 bg-rose-50 border border-rose-200 py-1.5 px-3 rounded">
                {errorMsg}
              </p>
            )}

            <form onSubmit={handleLogin} className="space-y-3 pt-2">
              <div>
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter organizer passcode"
                  className="w-full px-3 py-2 text-center text-sm rounded border border-slate-300 focus:outline-none focus:ring-1 focus:ring-slate-800 font-mono"
                  autoFocus
                />
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2 rounded text-xs transition-colors"
              >
                Unlock Organizer Dashboard
              </button>
            </form>

            <p className="text-[11px] text-slate-400">
              Default passcode: <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-700">hawcoder2026</code>
            </p>
          </div>
        ) : (
          /* Authenticated Dashboard View */
          <div className="space-y-6">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Authenticated
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mt-1">
                  Hawcoder Organizer Dashboard
                </h3>
                <p className="text-xs text-slate-500">
                  Centralized command center for managing student registrations, transcripts, and session logistics.
                </p>
              </div>

              <button
                onClick={() => setIsAuthenticated(false)}
                className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 border border-slate-200 px-2.5 py-1.5 rounded"
                title="Lock dashboard"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Lock</span>
              </button>
            </div>

            {/* Quick Links to Google Drive & Sheets */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <FileSpreadsheet className="w-4 h-4 text-emerald-700" />
                <span>Google Drive &amp; Spreadsheet Destinations</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {/* Applications Sheet */}
                <div className="p-3.5 rounded border border-slate-200 bg-slate-50/70 space-y-2">
                  <div className="flex items-center justify-between">
                    <strong className="text-slate-900 font-semibold">Course Applications Sheet</strong>
                    <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                  </div>
                  <p className="text-slate-500 text-[11px]">
                    Responses and applicant list submitted by high school students.
                  </p>
                  <a
                    href="https://sheets.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-800 hover:underline font-medium text-xs pt-1"
                  >
                    <span>Open Google Sheets</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Transcripts Drive Folder */}
                <div className="p-3.5 rounded border border-slate-200 bg-slate-50/70 space-y-2">
                  <div className="flex items-center justify-between">
                    <strong className="text-slate-900 font-semibold">Transcripts Folder</strong>
                    <Folder className="w-4 h-4 text-amber-600" />
                  </div>
                  <p className="text-slate-500 text-[11px]">
                    Uploaded PDF and photo report cards stored in your Google Drive.
                  </p>
                  <a
                    href="https://drive.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-800 hover:underline font-medium text-xs pt-1"
                  >
                    <span>Open Google Drive</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Info Sessions RSVPs Sheet */}
                <div className="p-3.5 rounded border border-slate-200 bg-slate-50/70 space-y-2">
                  <div className="flex items-center justify-between">
                    <strong className="text-slate-900 font-semibold">Info Session RSVPs Sheet</strong>
                    <FileSpreadsheet className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-slate-500 text-[11px]">
                    Student names, grades, and questions submitted for the AddisCoder info session.
                  </p>
                  <a
                    href="https://sheets.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-800 hover:underline font-medium text-xs pt-1"
                  >
                    <span>Open RSVP Responses</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Edit Google Forms */}
                <div className="p-3.5 rounded border border-slate-200 bg-slate-50/70 space-y-2">
                  <div className="flex items-center justify-between">
                    <strong className="text-slate-900 font-semibold">Edit Google Forms</strong>
                    <Settings className="w-4 h-4 text-slate-600" />
                  </div>
                  <p className="text-slate-500 text-[11px]">
                    Add/change questions, modify eligibility, or adjust deadline dates.
                  </p>
                  <a
                    href="https://forms.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-800 hover:underline font-medium text-xs pt-1"
                  >
                    <span>Open Forms Editor</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* American Corner Logistics & Attendance Template */}
            <div className="p-4 rounded border border-slate-200 bg-white space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    American Corner Session Materials
                  </h4>
                  <p className="text-xs text-slate-500">
                    Printable attendance tracking and lab checklist for Hawassa sessions.
                  </p>
                </div>

                <button
                  onClick={handleDownloadAttendanceTemplate}
                  className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs px-3 py-1.5 rounded border border-slate-300 font-medium transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Attendance Sheet (CSV)</span>
                </button>
              </div>

              <div className="text-xs text-slate-600 space-y-1 pt-1 border-t border-slate-100">
                <p>• <strong>Venue:</strong> American Corner, Hawassa</p>
                <p>• <strong>Hardware:</strong> Check computer lab terminals & internet connection before session</p>
                <p>• <strong>Teaching Style:</strong> Pairs of students ("driver & navigator") solving daily code exercises</p>
              </div>
            </div>

            {/* Config Links Reference */}
            <div className="p-3 bg-slate-50 rounded border border-slate-200 text-xs text-slate-600 space-y-1">
              <span className="font-semibold text-slate-800 block">
                Active Website Form Endpoints:
              </span>
              <p className="font-mono text-[11px] text-slate-700 truncate">
                Course Application Form: {appConfig.googleFormApplicationUrl}
              </p>
              <p className="font-mono text-[11px] text-slate-700 truncate">
                Info Session RSVP Form: {appConfig.googleFormInfoSessionUrl}
              </p>
              <p className="text-[11px] text-slate-400 pt-0.5">
                (To change these links, update <code>src/data/config.js</code> anytime.)
              </p>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
