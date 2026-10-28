// Hawcoder Gallery Photos Data
// Automatically synced from Hawcoder Admin

export const initialPhotos = [
  {
    "id": "photo-2",
    "url": "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    "caption": "Hawcoder organizers and AddisCoder 2026 alumni collaborating on problem set materials.",
    "category": "Alumni & Mentors",
    "date": "October 2026",
    "active": true
  }
];

export const getActivePhotos = () => {
  return initialPhotos.filter(p => p.active);
};
