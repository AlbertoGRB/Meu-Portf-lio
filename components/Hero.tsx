
import React from 'react';
import { ArrowRight, Play, Terminal } from 'lucide-react';

interface HeroProps {
  onOpenVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVideo }) => {
  const WHATSAPP_URL = "https://wa.me/5534992169148?text=Olá Alberto, vi seu portfólio e gostaria de falar sobre um projeto!";

  const handleScrollToProjetos = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projetos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-32 pb-20 md:pt-56 md:pb-40 px-6 relative scroll-mt-24">
      <div className="container mx-auto max-w-5xl text-center">
        <div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-10 text-xs md:text-sm font-semibold text-gray-300">
          <span className="text-[#00ff00]"><Terminal size={16} /></span>
          <span>Full-Stack Developer & Automation Specialist</span>
        </div>
        
        <h1 className="text-4xl md:text-8xl font-black leading-[1.1] mb-10 tracking-tighter">
          Transformando Desafios Complexos em <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-[#00ff00] to-[#00ffff] bg-clip-text text-transparent">
            Soluções Digitais Inteligentes.
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-14 leading-relaxed font-medium">
          Sou Desenvolvedor Full-Stack especializado na criação de plataformas sob medida e automação de processos. 
          Eu construo a tecnologia que faz o seu negócio escalar.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 bg-[#00ff00] text-black rounded-2xl font-black text-lg hover:bg-[#00e600] transition-all transform hover:-translate-y-1 shadow-[0_0_30px_rgba(0,255,0,0.2)] flex items-center justify-center"
          >
            Iniciar um Projeto
            <ArrowRight size={20} className="ml-2" />
          </a>
          <a
            href="#projetos"
            onClick={handleScrollToProjetos}
            className="w-full sm:w-auto px-10 py-5 bg-[#121212] border border-white/10 text-white rounded-2xl font-black text-lg hover:bg-white/10 transition-all transform hover:-translate-y-1 flex items-center justify-center"
          >
            Ver Projetos
          </a>
          <button
            onClick={() => alert('Em breve teremos projetos postados com vídeo e demonstrações!')}
            className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/10 text-white rounded-2xl font-black text-lg hover:bg-white/5 transition-all transform hover:-translate-y-1 flex items-center justify-center"
          >
            <Play size={20} className="mr-2 fill-current" />
            Assistir Apresentação
          </button>
        </div>
      </div>
    </section>
  );
};
