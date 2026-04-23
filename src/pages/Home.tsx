import React from 'react';
import { motion } from 'motion/react';
import { Play, ArrowRight } from 'lucide-react';
import SEO from '../components/common/SEO';
import { Link } from 'react-router-dom';

const HeroMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden bg-studio-line py-4 border-y border-studio-line mt-20">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 mx-4">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-studio-neon">Future Ready</span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/30">Next.js Specialists</span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-studio-neon">App Engineering</span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/30">Creative UI</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="Home" 
        description="Wisdom Studio is a high-end development boutique crafting unique digital legacies through code and creative vision. Specialized in Next.js, Web & App Development."
      />
      
      <HeroMarquee />

      <section className="relative min-h-[80vh] pt-40 md:pt-48 pb-20 px-6 md:px-12 flex flex-col items-center">
        <div className="max-w-[1400px] w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block px-4 py-1 border border-studio-neon/30 rounded-full mb-8">
              <span className="text-[10px] font-mono text-studio-neon font-bold uppercase tracking-widest animate-pulse">Available for new projects</span>
            </div>
            <h1 className="text-[12vw] md:text-[9vw] font-black leading-[0.85] mb-12 flex flex-col items-center">
              <span className="text-stroke">Crafting</span>
              <span className="text-white">Unique</span>
              <span className="text-stroke">Software</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/60 max-w-2xl mx-auto mb-12 font-medium">
              We are a high-end development boutique. We don't just build apps; we engineer digital legacies through code and creative vision.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link to="/contact" className="w-full md:w-auto bg-studio-neon text-studio-dark px-12 py-5 rounded-sm font-display font-black uppercase text-xl hover:bg-white transition-all transform hover:-rotate-2 rotate-1 text-center">
                Start Building
              </Link>
              <Link to="/portfolio" className="w-full md:w-auto border border-white/20 px-12 py-5 rounded-sm font-display font-black uppercase text-xl hover:border-studio-neon transition-all flex items-center justify-center gap-3 group">
                View Showcase <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 w-full max-w-[1200px] aspect-video border border-studio-line rounded-lg overflow-hidden relative group">
          <div className="absolute inset-0 bg-studio-dark/20 group-hover:bg-transparent transition-all z-10" />
          <img 
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000" 
            alt="Studio Workspace" 
            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
          />
          <div className="absolute bottom-8 left-8 z-20 flex items-center gap-4">
             <div className="w-16 h-16 rounded-full bg-studio-neon flex items-center justify-center text-studio-dark transform group-hover:scale-110 transition-transform cursor-pointer">
                <Play fill="currentColor" />
             </div>
             <span className="font-mono text-[10px] font-bold uppercase tracking-widest bg-studio-dark/80 backdrop-blur px-3 py-1">Inside Wisdom Studio</span>
          </div>
        </div>
      </section>

      {/* About CTA Section */}
      <section className="py-32 px-6 md:px-12 bg-studio-surface border-y border-studio-line">
        <div className="max-w-[1400px] mx-auto text-center">
          <span className="font-mono text-studio-neon text-[10px] font-bold uppercase tracking-widest mb-6 block">Our Philosophy</span>
          <h2 className="text-4xl md:text-7xl font-black mb-12">Quality Without Compromise.</h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto mb-16">
            In a world of fast-paced mediocrity, we choose to build with intent. Every line of code is an investment in your product's longevity and competitive edge.
          </p>
          <Link to="/about" className="inline-flex items-center gap-3 font-display font-black text-2xl uppercase hover:text-studio-neon transition-all group">
            Our Methods <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
