
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-32 px-6 bg-[#080808] scroll-mt-24">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00ff00] to-[#00ffff] rounded-3xl opacity-10 group-hover:opacity-30 transition duration-1000 group-hover:duration-200 blur-xl"></div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <img 
                src="/IMG/eu de terno.png" 
                alt="Alberto Gabriel" 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 brightness-90 group-hover:brightness-100"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-[#121212] border border-white/10 p-8 rounded-3xl shadow-3xl hidden md:block">
              <div className="flex items-center space-x-6">
                <div className="text-5xl font-black text-[#00ff00]">UEMG</div>
                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest leading-tight">
                  Sistemas de <br /> Informação
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="inline-block px-4 py-1.5 bg-[#00ff0015] border border-[#00ff0030] rounded-lg text-[#00ff00] text-sm font-bold mb-6">
              SOBRE MIM
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight">
              Quem eu sou e como cheguei até aqui.
            </h2>
            <div className="space-y-8 text-gray-400 text-lg md:text-xl leading-relaxed font-medium">
              <p>
                Olá, sou <span className="text-white font-bold">Alberto Gabriel</span>. Acredito que a tecnologia só cumpre seu papel quando facilita a vida das pessoas e gera resultados reais. 
                Concluindo o bacharelado em <span className="text-white font-bold">Sistemas de Informação na UEMG</span>, construí minha trajetória combinando a engenharia de software acadêmica com uma busca incessante por soluções práticas no mercado.
              </p>
              <p>
                Sou focado no aprendizado contínuo: de arquiteturas em nuvem a integrações complexas. Minha fluência técnica me permite analisar o gargalo da sua empresa e escolher a melhor tecnologia para resolver o problema com excelência.
              </p>
              <div className="bg-[#121212] border-l-4 border-[#00ff00] p-6 rounded-r-2xl italic text-gray-300">
                "Não entrego apenas código, mas ativos digitais de alto valor que otimizam o tempo e escalam negócios."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
