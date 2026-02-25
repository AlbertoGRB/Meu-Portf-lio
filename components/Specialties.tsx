
import React from 'react';
import { Layers, Zap, Bot, ShieldCheck } from 'lucide-react';

const SpecialtyCard: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="bg-[#121212] p-10 rounded-3xl border border-white/5 hover:border-[#00ff00]/40 transition-all duration-500 group hover:-translate-y-3 shadow-xl">
    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#00ff0010] transition-all duration-300 text-[#00ff00]">
      {icon}
    </div>
    <h3 className="text-2xl font-black mb-5 group-hover:text-white transition-colors">{title}</h3>
    <p className="text-gray-400 text-base leading-relaxed font-medium">
      {text}
    </p>
  </div>
);

export const Specialties: React.FC = () => {
  return (
    <section id="especialidades" className="py-32 px-6 scroll-mt-24">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 bg-[#00ff0015] border border-[#00ff0030] rounded-lg text-[#00ff00] text-sm font-bold mb-6 uppercase tracking-widest">
            Expertise
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 italic">Especialidades</h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Stack tecnológica moderna e processos de engenharia focados em performance, segurança e automação inteligente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SpecialtyCard 
            icon={<Layers size={36} />}
            title="Sistemas e Plataformas"
            text="Desenvolvimento End-to-End de plataformas, dashboards complexos e aplicações web escaláveis."
          />
          <SpecialtyCard 
            icon={<Zap size={36} />}
            title="Automação de Processos"
            text="Automação de workflows e integrações ágeis entre diferentes softwares para otimização de tempo e recursos."
          />
          <SpecialtyCard 
            icon={<Bot size={36} />}
            title="IA e Chatbots"
            text="Desenvolvimento de agentes de IA e chatbots inteligentes para atendimento automatizado de alto nível."
          />
          <SpecialtyCard 
            icon={<ShieldCheck size={36} />}
            title="Infra e Deploy"
            text="Gestão de ambientes em nuvem escaláveis, seguros e de alta disponibilidade com foco em estabilidade."
          />
        </div>
      </div>
    </section>
  );
};
