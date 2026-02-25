
import React from 'react';
import { Github, Instagram, Mail, MessageSquare, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const WHATSAPP_URL = "https://wa.me/5534992169148?text=Olá Alberto, vi seu portfólio e gostaria de falar sobre um projeto!";
  const LINKEDIN_URL = "https://www.linkedin.com/in/alberto-gabriel-1b7bb9238/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app";

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contato" className="py-32 px-6 border-t border-white/5 bg-[#050505]">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-4xl md:text-7xl font-black mb-12 tracking-tighter leading-tight">
          Pronto para otimizar os <br className="hidden md:block" /> processos da sua empresa?
        </h2>
        
        <div className="mb-20">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-4 bg-[#00ff00] text-black px-16 py-8 rounded-3xl text-xl md:text-2xl font-black hover:bg-[#00e600] transition-all transform hover:scale-105 shadow-[0_0_50px_rgba(0,255,0,0.2)] group"
          >
            <MessageSquare size={32} className="group-hover:animate-bounce" />
            <span>Vamos Conversar no WhatsApp</span>
          </a>
        </div>

        <div className="flex justify-center items-center gap-6 mb-20 flex-wrap">
          <a href="https://github.com/AlbertoGRB" target="_blank" rel="noopener noreferrer" className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-[#00ff00] hover:text-black transition-all transform hover:-translate-y-2">
            <Github size={28} />
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-[#00ff00] hover:text-black transition-all transform hover:-translate-y-2">
            <Linkedin size={28} />
          </a>
          <a href="https://www.instagram.com/alberto_gabriel_r/" target="_blank" rel="noopener noreferrer" className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-[#00ff00] hover:text-black transition-all transform hover:-translate-y-2">
            <Instagram size={28} />
          </a>
          <a href="mailto:dead.gusta.007@gmail.com" className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-[#00ff00] hover:text-black transition-all transform hover:-translate-y-2">
            <Mail size={28} />
          </a>
        </div>

        <div className="pt-16 border-t border-white/5 text-gray-500 text-sm font-semibold flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 uppercase tracking-widest">
          <p>© 2024 Alberto Gabriel. Todos os direitos reservados.</p>
          <div className="flex space-x-10">
            <a 
              href="#inicio" 
              onClick={(e) => handleScrollTo(e, 'inicio')}
              className="hover:text-white transition-colors"
            >
              Voltar ao topo
            </a>
            <a 
              href="#projetos" 
              onClick={(e) => handleScrollTo(e, 'projetos')}
              className="hover:text-white transition-colors"
            >
              Projetos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
