// Hawcoder Announcements Data
// This data can be updated directly, via GitHub, or via the Hawcoder Admin Dashboard.

export const initialAnnouncements = [
  {
    id: "announcement-1",
    date: "October 2026",
    title: "AddisCoder Information Session at the American Corner, Hawassa",
    badge: "Upcoming Event",
    content: "We are hosting a free information session to help Grade 9-11 high school students in Hawassa learn about AddisCoder and prepare their applications before the late-December deadline. Hosted at the American Corner, Hawassa.",
    actionText: "RSVP via Google Form",
    actionLink: "#info-sessions",
    active: true
  },
  {
    id: "announcement-2",
    date: "October 2026",
    title: "19-Session Course Syllabus Announced",
    badge: "Academics",
    content: "The complete 10-week syllabus (covering Python, Recursion, Big-O, Sorting, and Graphs) as adopted by Dagmawi Shigute from the AddisCoder 2026 curriculum is now available.",
    actionText: "View Syllabus",
    actionLink: "#syllabus",
    active: true
  }
];

// Helper to get announcements (from localStorage override if set by admin, or defaults)
export const getActiveAnnouncements = () => {
  try {
    const saved = localStorage.getItem('hawcoder_public_announcements');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.filter(a => a.active);
      }
    }
  } catch (e) {
    console.error('Error loading announcements', e);
  }
  return initialAnnouncements.filter(a => a.active);
};
