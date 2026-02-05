
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Flywheel from './components/Flywheel';
import Services from './components/Services';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="relative min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 bg-grid">
        <Navbar />
        <section id="hero"><Hero /></section>
        <section id="flywheel" className="py-24"><Flywheel /></section>
        <section id="services" className="py-24"><Services /></section>
        <section id="proof" className="py-24"><Stats /></section>
        <section id="social" className="py-24"><Testimonials /></section>
        <section id="contact" className="py-24"><Contact /></section>
        <Footer />
      </div>
    </main>
  );
};

export default App;
