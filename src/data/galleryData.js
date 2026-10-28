// Hawcoder Gallery Photos Data
// Automatically synced from Hawcoder Admin

export const initialPhotos = [
  {
    "id": "photo-1",
    "url": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    "caption": "Student cohort working through Python algorithm exercises at the American Corner, Hawassa.",
    "category": "American Corner",
    "date": "October 2026",
    "active": true
  },
  {
    "id": "photo-2",
    "url": "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    "caption": "Hawcoder organizers and AddisCoder 2026 alumni collaborating on problem set materials.",
    "category": "Alumni & Mentors",
    "date": "October 2026",
    "active": true
  },
  {
    "id": "photo-3",
    "url": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    "caption": "Hands-on coding lab: students practicing loops, conditionals, and recursion.",
    "category": "Lab Sessions",
    "date": "October 2026",
    "active": true
  },
  {
    "id": "photo-4",
    "url": "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
    "caption": "Information session guiding Hawassa high school students on AddisCoder applications.",
    "category": "Info Sessions",
    "date": "October 2026",
    "active": true
  }
];

export const getActivePhotos = () => {
  return initialPhotos.filter(p => p.active);
};
