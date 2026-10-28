// Hawcoder Site Configuration
// Update these links whenever you host a new cohort or update channels!

export const appConfig = {
  // Google Form for Hawcoder Course Cohort Registration:
  googleFormApplicationUrl: "https://docs.google.com/forms",
  
  // Google Form for AddisCoder Info Session RSVP / Attendance:
  googleFormInfoSessionUrl: "https://docs.google.com/forms",
  
  // Official AddisCoder website:
  addisCoderUrl: "https://www.addiscoder.com",

  // Social Media Channels (with placeholders):
  socialLinks: {
    telegram: "https://t.me/hawcoder",
    instagram: "https://instagram.com/hawcoder",
    youtube: "https://youtube.com/@hawcoder",
    linkedin: "https://linkedin.com/company/hawcoder",
    github: "https://github.com/hawcoder"
  }
};

// Helper to get active social links (with localStorage support)
export const getSocialLinks = () => {
  try {
    const saved = localStorage.getItem('hawcoder_social_links');
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...appConfig.socialLinks, ...parsed };
    }
  } catch (e) {
    console.error('Error loading social links', e);
  }
  return appConfig.socialLinks;
};
