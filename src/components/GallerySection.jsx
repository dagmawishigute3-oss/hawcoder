import React, { useState } from 'react';
import { getActivePhotos } from '../data/galleryData';
import { Camera, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export default function GallerySection() {
  const photos = getActivePhotos();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);

  if (!photos || photos.length === 0) return null;

  const categories = ['All', ...Array.from(new Set(photos.map(p => p.category).filter(Boolean)))];

  const filteredPhotos = selectedCategory === 'All'
    ? photos
    : photos.filter(p => p.category === selectedCategory);

  const openLightbox = (index) => {
    setActivePhotoIndex(index);
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
  };

  const nextPhoto = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % filteredPhotos.length);
    }
  };

  const prevPhoto = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Camera className="w-5 h-5 text-slate-700" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 font-mono">
                Community & Classroom
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
              Hawcoder in Action
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-xl">
              Moments from our cohort sessions, algorithms labs, and AddisCoder guidance workshops at the American Corner, Hawassa.
            </p>
          </div>

          {/* Category Filter Pills */}
          {categories.length > 2 && (
            <div className="flex flex-wrap gap-1.5 self-start md:self-end">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs px-3 py-1 rounded-full transition-colors font-medium ${
                    selectedCategory === cat
                      ? 'bg-slate-900 text-white'
                      : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id || index}
              onClick={() => openLightbox(index)}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] bg-slate-200 overflow-hidden">
                <img
                  src={photo.url}
                  alt={photo.caption || 'Hawcoder Session Photo'}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-slate-900 px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 shadow-sm">
                    <ZoomIn className="w-3.5 h-3.5" />
                    Enlarge Photo
                  </span>
                </div>
                {photo.category && (
                  <span className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-0.5 rounded">
                    {photo.category}
                  </span>
                )}
                {photo.date && (
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-slate-700 text-[11px] font-mono px-2 py-0.5 rounded">
                    {photo.date}
                  </span>
                )}
              </div>

              {/* Caption */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-sm text-slate-700 leading-snug line-clamp-2">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activePhotoIndex !== null && filteredPhotos[activePhotoIndex] && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Close button */}
            <div className="p-3 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between text-slate-300 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-mono text-slate-400">
                  {activePhotoIndex + 1} of {filteredPhotos.length}
                </span>
                {filteredPhotos[activePhotoIndex].category && (
                  <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded text-[11px]">
                    {filteredPhotos[activePhotoIndex].category}
                  </span>
                )}
              </div>
              <button
                onClick={closeLightbox}
                className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="Close photo"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Photo view */}
            <div className="relative bg-black max-h-[75vh] flex items-center justify-center overflow-hidden">
              <img
                src={filteredPhotos[activePhotoIndex].url}
                alt={filteredPhotos[activePhotoIndex].caption}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />

              {/* Prev / Next buttons */}
              {filteredPhotos.length > 1 && (
                <>
                  <button
                    onClick={prevPhoto}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white transition-colors border border-slate-700"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextPhoto}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white transition-colors border border-slate-700"
                    aria-label="Next photo"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Bottom Caption */}
            <div className="p-4 bg-slate-950 text-slate-300 text-xs sm:text-sm flex items-center justify-between">
              <p className="flex-1 mr-4">
                {filteredPhotos[activePhotoIndex].caption}
              </p>
              {filteredPhotos[activePhotoIndex].date && (
                <span className="text-slate-500 font-mono text-xs whitespace-nowrap">
                  {filteredPhotos[activePhotoIndex].date}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
