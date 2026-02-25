
import React from 'react';
import { Github, CheckCircle2 } from 'lucide-react';

const ProjectCard: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
  <div className="group relative rounded-3xl bg-[#121212] border border-white/5 transition-all duration-500 hover:shadow-2xl hover:shadow-[#00ff0005]">
    <div className="p-8">
      <h3 className="text-2xl font-black mb-4 group-hover:text-[#00ff00] transition-colors flex items-center justify-between">
        {title}
      </h3>
      <p className="text-gray-400 text-base leading-relaxed font-medium">
        {desc}
      </p>
    </div>
  </div>
);

export const Projects: React.FC = () => {
  return (
    <section id="projetos" className="py-32 px-6 bg-[#080808] scroll-mt-24">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 bg-[#00ff0015] border border-[#00ff0030] rounded-lg text-[#00ff00] text-sm font-bold mb-6 uppercase tracking-widest">
              Portfólio
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Projetos em Destaque</h2>
            <p className="text-gray-400 text-lg md:text-xl font-medium mb-6">
              Entregando soluções de software que resolvem problemas reais e impulsionam o crescimento.
            </p>
            
            {/* Informação sobre projetos reais */}
            <div className="inline-flex items-center space-x-3 bg-[#00ff0008] border border-[#00ff0020] px-5 py-3 rounded-2xl text-[#00ff00] text-sm md:text-base font-bold">
              <CheckCircle2 size={20} className="shrink-0" />
              <span>Estes são projetos já desenvolvidos para clientes reais de empresas e setores diversificados.</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ProjectCard 
            title="Gestão de Estágios"
            desc="Modelagem de banco de dados e plataforma para ambiente acadêmico, integrando fluxos de documentos e controle de horas."
          />
          <ProjectCard 
            title="Software para Agronegócio"
            desc="Plataforma robusta para gestão de fluxo de dados e monitoramento de processos agroindustriais em tempo real para a Pérola Agropecuária."
          />
          <ProjectCard 
            title="Dashboards Clínicos"
            desc="Interface de alta performance para visão geral de status e gestão estratégica de pacientes e recursos médicos em sistemas de saúde."
          />
          <ProjectCard 
            title="IA para Profissionais"
            desc="Agente inteligente para gestão de turmas e agenda automatizada via WhatsApp para Personal Trainers e profissionais liberais."
          />
        </div>

        <div className="mt-20 text-center">
          <a 
            href="https://github.com/AlbertoGRB" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 text-lg font-black text-[#00ff00] border-b-2 border-[#00ff00] pb-2 hover:text-white hover:border-white transition-all transform hover:translate-x-2"
          >
            <Github size={24} />
            <span>Ver portfólio completo no GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};
