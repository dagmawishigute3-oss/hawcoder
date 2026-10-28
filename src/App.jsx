import React, { useState } from 'react';
import DisclaimerBanner from './components/DisclaimerBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AnnouncementsSection from './components/AnnouncementsSection';
import CurriculumViewer from './components/CurriculumViewer';
import AddisCoderHub from './components/AddisCoderHub';
import ApplicationSection from './components/ApplicationSection';
import AlumniSection from './components/AlumniSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import RSVPModal from './components/RSVPModal';

export default function App() {
  const [isRSVPOpen, setIsRSVPOpen] = useState(false);

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
      />

      {/* 3. Main Content: About, Announcements, Syllabus, AddisCoder Guidance, Apply, Team, FAQ */}
      <main className="flex-1">
        <Hero 
          onOpenApply={scrollToApply}
          onOpenRSVP={() => setIsRSVPOpen(true)}
        />

        {/* 4. Announcements & Latest News */}
        <AnnouncementsSection />

        {/* 5. Course Syllabus (19 Sessions as adopted by Dagmawi Shigute) */}
        <CurriculumViewer />

        {/* 6. AddisCoder Info Sessions & Application Guidance */}
        <AddisCoderHub 
          onOpenRSVP={() => setIsRSVPOpen(true)}
        />

        {/* 7. Hawcoder Student Application Portal */}
        <ApplicationSection />

        {/* 8. Founders & Alumni Team from Hawassa */}
        <AlumniSection />

        {/* 9. Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* 10. Dignified Academic Footer */}
      <Footer 
        onOpenApply={scrollToApply}
        onOpenRSVP={() => setIsRSVPOpen(true)}
      />

      {/* Info Session RSVP Modal */}
      <RSVPModal 
        isOpen={isRSVPOpen} 
        onClose={() => setIsRSVPOpen(false)} 
      />

    </div>
  );
}
