import React, { useState, useEffect } from 'react';
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
import AdminDashboardModal from './components/AdminDashboardModal';

export default function App() {
  const [isRSVPOpen, setIsRSVPOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  useEffect(() => {
    // Open admin dashboard if URL contains #admin
    if (window.location.hash === '#admin') {
      setIsAdminOpen(true);
    }
    const handleHashChange = () => {
      if (window.location.hash === '#admin') {
        setIsAdminOpen(true);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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
        <ApplicationSection />

        {/* 7. Founders & Alumni Team from Hawassa */}
        <AlumniSection />

        {/* 8. Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* 9. Dignified Academic Footer */}
      <Footer 
        onOpenApply={scrollToApply}
        onOpenRSVP={() => setIsRSVPOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Lightweight Modals */}
      <RSVPModal 
        isOpen={isRSVPOpen} 
        onClose={() => setIsRSVPOpen(false)} 
      />

      {/* Dedicated Passcode-Protected Admin Dashboard */}
      <AdminDashboardModal 
        isOpen={isAdminOpen} 
        onClose={() => {
          setIsAdminOpen(false);
          if (window.location.hash === '#admin') {
            history.replaceState(null, '', window.location.pathname);
          }
        }} 
      />

    </div>
  );
}
