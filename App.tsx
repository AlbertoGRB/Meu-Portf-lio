
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Specialties } from './components/Specialties';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

const App: React.FC = () => {


  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#050505]">
      {/* Background Decor */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-10"></div>
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00ff0008] blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#00ff0005] blur-[120px] rounded-full pointer-events-none"></div>

      <Navbar />
      <main>
        <Hero onOpenVideo={() => setIsVideoModalOpen(true)} />
        <About />
        <Specialties />
        <Projects />
      </main>
      <Footer />


    </div>
  );
};

export default App;
