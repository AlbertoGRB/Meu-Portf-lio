
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl"></div>
      
      <div 
        className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-3 bg-black/50 text-white rounded-full hover:bg-[#00ff00] hover:text-black transition-all"
        >
          <X size={24} />
        </button>
        
        <iframe 
          className="w-full h-full"
          src="https://www.youtube.com/embed/VkyIX3aImJA?autoplay=1" 
          title="Alberto Gabriel - Apresentação" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
