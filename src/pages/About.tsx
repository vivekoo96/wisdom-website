import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import SEO from '../components/common/SEO';

const About = () => {
  const values = [
    { title: "Technical Rigor", desc: "We don't cut corners. We build for performance, security, and extreme longevity." },
    { title: "Brutal Clarity", desc: "No jargon. No smoke and mirrors. Just honest communication and measurable output." },
    { title: "Relentless Grit", desc: "We push through technical stagnation to find creative solutions to impossible problems." }
  ];

  return (
    <div className="pt-32 min-h-screen">
      <SEO 
        title="About Studio" 
        description="Learn about the philosophy, vision, and technical grit behind Wisdom Studio. We are an elite team of developers and designers."
      />

      {/* Intro */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="font-mono text-studio-neon text-[10px] font-bold uppercase tracking-widest mb-4 block">The Wisdom Mission</span>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.8] tracking-tighter uppercase mb-12">
              Software <br /> Built <br /> <span className="text-studio-neon">Differently.</span>
            </h1>
            <p className="text-xl text-white/50 leading-relaxed font-medium">
              Wisdom Studio was founded on a simple realization: the digital world is cluttered with "good enough." We exist for the founders and enterprises who demand the exceptional.
            </p>
          </div>
          <div className="relative aspect-square border border-studio-line rounded-sm overflow-hidden bg-studio-surface p-1">
             <div className="w-full h-full border border-studio-line flex items-center justify-center relative">
                <div className="text-[200px] font-display font-black text-white/5">W</div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-24 h-24 bg-studio-neon rounded-full blur-[60px] opacity-20 animate-pulse" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-6 md:px-12 bg-studio-surface border-y border-studio-line">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-20">
             <h2 className="text-5xl font-black uppercase tracking-tighter">Our Internal <br /> <span className="text-stroke">Constants.</span></h2>
             <p className="text-white/40 max-w-sm text-lg font-medium">These aren't marketing slogans. They are the rules we live by during every sprint and code review.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-studio-line border border-studio-line">
            {values.map((v, i) => (
              <div key={i} className="bg-studio-dark p-12 group hover:bg-studio-neon transition-all duration-500">
                <span className="font-mono text-studio-neon text-[10px] font-bold uppercase tracking-widest mb-8 block group-hover:text-studio-dark transition-colors">Principle_0{i+1}</span>
                <h3 className="text-3xl font-black mb-6 group-hover:text-studio-dark transition-colors">{v.title}</h3>
                <p className="text-white/40 group-hover:text-studio-dark/60 font-medium leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Reprise */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-[10vw] font-black uppercase leading-none mb-8">The <span className="text-studio-neon">Studio</span> Workflow.</h2>
            <div className="flex justify-center gap-2 items-center text-white/20 animate-bounce">
              <span className="font-mono text-[9px] uppercase tracking-widest font-bold">Scroll Through the logic</span>
              <ArrowDown size={14} />
            </div>
          </div>

          <div className="space-y-4 shadow-2xl">
            {[
              { title: "Logic Mapping", step: "A", desc: "Understanding the technical constraints and user behavior before a single line is written." },
              { title: "Agile Production", step: "B", desc: "High-velocity sprints with weekly releases for immediate feedback and iteration." },
              { title: "Hardened Delivery", step: "C", desc: "Rigorously tested, optimized, and audited code that is ready for production stress." }
            ].map((p, i) => (
              <div key={i} className="bg-studio-surface border border-studio-line p-12 lg:p-20 flex flex-col md:flex-row gap-12 items-start group hover:border-studio-neon/50 transition-colors">
                <div className="w-20 h-20 bg-studio-dark border border-studio-line flex items-center justify-center font-display font-black text-4xl group-hover:bg-studio-neon group-hover:text-studio-dark transition-all">
                  {p.step}
                </div>
                <div>
                   <h4 className="text-4xl font-black uppercase mb-4">{p.title}</h4>
                   <p className="text-white/40 text-xl max-w-2xl font-medium leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
