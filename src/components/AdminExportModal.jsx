import React, { useState, useEffect } from 'react';
import { 
  getSavedApplications, 
  getSavedRSVPs, 
  exportToCSV 
} from '../utils/storage';
import { 
  X, 
  Users, 
  Calendar, 
  Database, 
  FileSpreadsheet,
  ShieldCheck
} from 'lucide-react';

export default function AdminExportModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('applications');
  const [applications, setApplications] = useState([]);
  const [rsvps, setRsvps] = useState([]);

  useEffect(() => {
    if (isOpen) {
      setApplications(getSavedApplications());
      setRsvps(getSavedRSVPs());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleExportApplications = () => {
    if (applications.length === 0) {
      alert("No student applications to export yet.");
      return;
    }
    exportToCSV(applications, `hawcoder_applications_${new Date().toISOString().slice(0,10)}.csv`);
  };

  const handleExportRSVPs = () => {
    if (rsvps.length === 0) {
      alert("No info session RSVPs to export yet.");
      return;
    }
    exportToCSV(rsvps, `hawcoder_infosession_rsvps_${new Date().toISOString().slice(0,10)}.csv`);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-4xl w-full p-6 shadow-xl border border-slate-200 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
          <div className="flex items-center gap-2.5">
            <Database className="w-5 h-5 text-slate-700" />
            <div>
              <h3 className="font-serif font-bold text-slate-900 text-base sm:text-lg">
                Hawcoder Organizer Portal
              </h3>
              <p className="text-xs text-slate-500">
                View student registrations and export to Excel/CSV with zero server fees.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs & Export Buttons */}
        <div className="flex items-center justify-between py-3 border-b border-slate-100">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('applications')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeTab === 'applications'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Course Applications ({applications.length})
            </button>
            <button
              onClick={() => setActiveTab('rsvps')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeTab === 'rsvps'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Info Session RSVPs ({rsvps.length})
            </button>
          </div>

          <div>
            {activeTab === 'applications' ? (
              <button
                onClick={handleExportApplications}
                className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-medium transition-colors"
              >
                <FileSpreadsheet className="w-3.5 h-3.5" />
                <span>Export Applications to CSV</span>
              </button>
            ) : (
              <button
                onClick={handleExportRSVPs}
                className="bg-amber-700 hover:bg-amber-800 text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-medium transition-colors"
              >
                <FileSpreadsheet className="w-3.5 h-3.5" />
                <span>Export RSVPs to CSV</span>
              </button>
            )}
          </div>
        </div>

        {/* Content Table */}
        <div className="flex-1 overflow-y-auto py-3">
          {activeTab === 'applications' ? (
            applications.length === 0 ? (
              <div className="text-center py-10 text-slate-500 text-xs">
                No course applications recorded yet in this browser.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 font-mono">
                      <th className="py-2 px-2.5">ID</th>
                      <th className="py-2 px-2.5">Name</th>
                      <th className="py-2 px-2.5">School</th>
                      <th className="py-2 px-2.5">Grade</th>
                      <th className="py-2 px-2.5">Contact</th>
                      <th className="py-2 px-2.5">Computer Access</th>
                      <th className="py-2 px-2.5">Transcript</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {applications.map((app) => (
                      <tr key={app.id} className="hover:bg-slate-50">
                        <td className="py-2 px-2.5 font-mono text-slate-700">{app.id}</td>
                        <td className="py-2 px-2.5 font-semibold text-slate-900">{app.fullName}</td>
                        <td className="py-2 px-2.5">{app.school}</td>
                        <td className="py-2 px-2.5">{app.grade}</td>
                        <td className="py-2 px-2.5">{app.phone || app.telegram}</td>
                        <td className="py-2 px-2.5">{app.deviceAccess}</td>
                        <td className="py-2 px-2.5">
                          {app.transcriptData ? (
                            <a
                              href={app.transcriptData}
                              download={app.transcriptName || 'transcript'}
                              className="text-blue-800 underline font-medium hover:text-blue-950"
                              title="Click to download transcript"
                            >
                              Download
                            </a>
                          ) : (
                            <span className="text-slate-400">None</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          ) : (
            rsvps.length === 0 ? (
              <div className="text-center py-10 text-slate-500 text-xs">
                No info session RSVPs recorded yet in this browser.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 font-mono">
                      <th className="py-2 px-2.5">ID</th>
                      <th className="py-2 px-2.5">Name</th>
                      <th className="py-2 px-2.5">Contact</th>
                      <th className="py-2 px-2.5">School</th>
                      <th className="py-2 px-2.5">Grade</th>
                      <th className="py-2 px-2.5">Question</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {rsvps.map((r) => (
                      <tr key={r.id} className="hover:bg-slate-50">
                        <td className="py-2 px-2.5 font-mono text-slate-700">{r.id}</td>
                        <td className="py-2 px-2.5 font-semibold text-slate-900">{r.fullName}</td>
                        <td className="py-2 px-2.5">{r.contact}</td>
                        <td className="py-2 px-2.5">{r.school || '—'}</td>
                        <td className="py-2 px-2.5">{r.grade}</td>
                        <td className="py-2 px-2.5 truncate max-w-[180px]">{r.question || '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          )}
        </div>

        <div className="pt-3 border-t border-slate-200 text-[11px] text-slate-500 flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Data stored locally in browser. Can also be connected to a Google Sheet.</span>
        </div>

      </div>
    </div>
  );
}
