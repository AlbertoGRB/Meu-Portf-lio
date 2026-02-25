
import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const WHATSAPP_URL = "https://wa.me/5534992169148?text=Olá Alberto, vi seu portfólio e gostaria de falar sobre um projeto!";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Sobre', id: 'sobre' },
    { name: 'Especialidades', id: 'especialidades' },
    { name: 'Projetos', id: 'projetos' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-lg py-4 border-b border-white/5 shadow-2xl' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#inicio" 
          onClick={(e) => handleScrollTo(e, 'inicio')}
          className="text-xl md:text-2xl font-black tracking-tighter hover:text-[#00ff00] transition-colors"
        >
          Alberto Gabriel <span className="text-[#00ff00]">| Dev</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => handleScrollTo(e, link.id)}
              className="text-sm font-semibold text-gray-400 hover:text-[#00ff00] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-[#00ff00] text-black px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-[#00e600] transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(0,255,0,0.3)]"
          >
            <MessageCircle size={18} />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[#0a0a0a] z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-8 right-8 text-gray-400"
        >
          <X size={32} />
        </button>
        <a 
          href="#inicio" 
          onClick={(e) => handleScrollTo(e, 'inicio')}
          className="text-3xl font-black hover:text-[#00ff00] transition-colors"
        >
          Início
        </a>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={`#${link.id}`}
            onClick={(e) => handleScrollTo(e, link.id)}
            className="text-3xl font-black hover:text-[#00ff00] transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-[#00ff00] text-black px-10 py-5 rounded-2xl text-xl font-bold"
        >
          <MessageCircle size={24} />
          <span>Falar no WhatsApp</span>
        </a>
      </div>
    </nav>
  );
};
