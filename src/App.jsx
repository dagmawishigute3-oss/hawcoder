import React, { useState } from 'react';
import DisclaimerBanner from './components/DisclaimerBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CurriculumViewer from './components/CurriculumViewer';
import AddisCoderHub from './components/AddisCoderHub';
import ApplicationSection from './components/ApplicationSection';
import AlumniSection from './components/AlumniSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import RSVPModal from './components/RSVPModal';
import AdminExportModal from './components/AdminExportModal';

export default function App() {
  const [isRSVPOpen, setIsRSVPOpen] = useState(false);
  const [isOrganizerOpen, setIsOrganizerOpen] = useState(false);

  const scrollToApply = () => {
    const el = document.getElementById('apply');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col text-slate-800 antialiased">
      
      {/* 1. Transparent Independent Affiliation Notice */}
      <DisclaimerBanner />

      {/* 2. Simple Header & Navigation with Logo */}
      <Navbar 
        onOpenApply={scrollToApply}
        onOpenOrganizer={() => setIsOrganizerOpen(true)}
      />

      {/* 3. Main Content: About, Syllabus, AddisCoder Guidance, Apply, Team, FAQ */}
      <main className="flex-1">
        <Hero 
          onOpenApply={scrollToApply}
          onOpenRSVP={() => setIsRSVPOpen(true)}
        />

        {/* 4. Course Syllabus (19 Sessions as adopted by Dagmawi Shigute) */}
        <CurriculumViewer />

        {/* 5. AddisCoder Info Sessions & Application Prep */}
        <AddisCoderHub 
          onOpenRSVP={() => setIsRSVPOpen(true)}
        />

        {/* 6. Hawcoder Student Registration Portal */}
        <ApplicationSection 
          onOpenOrganizer={() => setIsOrganizerOpen(true)}
        />

        {/* 7. Founders & Alumni Team from Hawassa */}
        <AlumniSection />

        {/* 8. Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* 9. Dignified Academic Footer */}
      <Footer 
        onOpenApply={scrollToApply}
        onOpenRSVP={() => setIsRSVPOpen(true)}
      />

      {/* Lightweight Modals */}
      <RSVPModal 
        isOpen={isRSVPOpen} 
        onClose={() => setIsRSVPOpen(false)} 
      />

      <AdminExportModal 
        isOpen={isOrganizerOpen} 
        onClose={() => setIsOrganizerOpen(false)} 
      />

    </div>
  );
}
