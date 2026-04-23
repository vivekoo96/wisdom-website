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
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-studio-accent">Future Ready</span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-studio-dark/30">Next.js Specialists</span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-studio-accent">App Engineering</span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-studio-dark/30">Creative UI</span>
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
            <div className="inline-block px-4 py-1 border border-studio-accent/30 rounded-full mb-8">
              <span className="text-[10px] font-mono text-studio-accent font-bold uppercase tracking-widest animate-pulse">Available for new projects</span>
            </div>
            <h1 className="text-[12vw] md:text-[9vw] font-black leading-[0.85] mb-12 flex flex-col items-center">
              <span className="text-stroke">Crafting</span>
              <span className="text-studio-dark">Unique</span>
              <span className="text-stroke">Software</span>
            </h1>
            <p className="text-lg md:text-2xl text-studio-dark/60 max-w-2xl mx-auto mb-12 font-medium">
              We are a high-end development boutique. We don't just build apps; we engineer digital legacies through code and creative vision.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link to="/contact" className="w-full md:w-auto bg-studio-accent text-white px-12 py-5 rounded-sm font-display font-black uppercase text-xl hover:bg-studio-dark transition-all transform hover:-rotate-2 rotate-1 text-center">
                Start Building
              </Link>
              <Link to="/portfolio" className="w-full md:w-auto border border-studio-dark/20 px-12 py-5 rounded-sm font-display font-black uppercase text-xl hover:border-studio-accent transition-all flex items-center justify-center gap-3 group">
                View Showcase <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 w-full max-w-[1200px] aspect-video border border-studio-line rounded-lg overflow-hidden relative group">
          <div className="absolute inset-0 bg-studio-bg/20 group-hover:bg-transparent transition-all z-10" />
          <img 
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000" 
            alt="Studio Workspace" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-1000"
          />
          <div className="absolute bottom-8 left-8 z-20 flex items-center gap-4">
             <div className="w-16 h-16 rounded-full bg-studio-accent flex items-center justify-center text-white transform group-hover:scale-110 transition-transform cursor-pointer">
                <Play fill="currentColor" />
             </div>
             <span className="font-mono text-[10px] font-bold uppercase tracking-widest bg-studio-bg/80 backdrop-blur px-3 py-1">Inside Wisdom Studio</span>
          </div>
        </div>
      </section>

      {/* Featured Metrics */}
      <section className="py-32 px-6 md:px-12 border-b border-studio-line">
         <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
               { label: "Execution Units", value: "250+", sub: "Projects Shipped" },
               { label: "Lines of Precision", value: "1.2M", sub: "Code Audited" },
               { label: "Uptime Factor", value: "99.9%", sub: "Service Integrity" },
               { label: "Client Retension", value: "94%", sub: "Trust Quotient" }
            ].map((stat, i) => (
               <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center md:text-left"
               >
                  <p className="font-mono text-[10px] uppercase tracking-widest text-studio-accent mb-2">{stat.label}</p>
                  <h3 className="text-5xl md:text-6xl font-display font-black mb-1">{stat.value}</h3>
                  <p className="text-studio-dark/40 text-xs uppercase font-bold tracking-widest">{stat.sub}</p>
               </motion.div>
            ))}
         </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-32 px-6 md:px-12">
         <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
               <div className="max-w-2xl">
                  <span className="font-mono text-studio-accent text-[10px] font-bold uppercase tracking-widest mb-6 block">Capabilities_V3.0</span>
                  <h2 className="text-5xl md:text-8xl font-black uppercase leading-[0.85]">Engineered <br /> <span className="text-stroke">For Scale.</span></h2>
               </div>
               <p className="text-studio-dark/40 max-w-sm text-lg font-medium leading-relaxed">
                  We don't settle for template-based solutions. Every interface is a custom-coded specimen optimized for performance and conversion.
               </p>
            </div>

            <div className="grid md:grid-cols-12 md:grid-rows-2 gap-6 h-auto md:h-[800px]">
               <motion.div 
                  whileHover={{ y: -10 }}
                  className="md:col-span-8 md:row-span-1 bg-studio-surface border border-studio-line p-12 relative overflow-hidden group"
               >
                  <div className="relative z-10">
                     <span className="font-mono text-[10px] font-bold text-studio-accent uppercase tracking-widest mb-4 block">Web Engineering</span>
                     <h3 className="text-4xl font-black uppercase mb-6">High_Performance <br /> Ecosystems</h3>
                     <p className="text-studio-dark/50 max-w-md font-medium">Building scalable web architectures with Next.js and specialized headless CMS integrations.</p>
                  </div>
                  <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-studio-accent/5 rounded-full blur-[100px] group-hover:bg-studio-accent/10 transition-all" />
                  <div className="absolute right-12 bottom-12 text-studio-dark/5 font-display font-black text-[120px] select-none">WEB</div>
               </motion.div>

               <motion.div 
                  whileHover={{ y: -10 }}
                  className="md:col-span-4 md:row-span-2 bg-studio-dark p-12 flex flex-col justify-between group"
               >
                  <div>
                     <span className="font-mono text-[10px] font-bold text-studio-accent uppercase tracking-widest mb-4 block">Mobile Spec</span>
                     <h3 className="text-4xl font-black uppercase text-white mb-6">Native <br /> Fluidity</h3>
                     <p className="text-white/40 font-medium leading-relaxed">Crafting iOS and Android experiences that feel like a biological extension of the user.</p>
                  </div>
                  <div className="space-y-4">
                     {['React Native', 'Swift', 'Kotlin', 'Flutter'].map((tech, i) => (
                        <div key={i} className="flex justify-between items-center border-b border-white/10 pb-2">
                           <span className="text-white font-mono text-[10px] uppercase font-bold tracking-widest">{tech}</span>
                           <span className="w-1.5 h-1.5 bg-studio-accent rounded-full" />
                        </div>
                     ))}
                  </div>
               </motion.div>

               <motion.div 
                  whileHover={{ y: -10 }}
                  className="md:col-span-4 md:row-span-1 border border-studio-line p-12 flex flex-col justify-center gap-6 group hover:bg-studio-accent transition-all duration-500"
               >
                  <span className="font-mono text-[10px] font-bold text-studio-accent uppercase tracking-widest block group-hover:text-white">Design_Intel</span>
                  <h3 className="text-3xl font-black uppercase group-hover:text-white transition-colors">Cognitive <br /> UX Design</h3>
               </motion.div>

               <motion.div 
                  whileHover={{ y: -10 }}
                  className="md:col-span-4 md:row-span-1 bg-studio-surface border border-studio-line p-12 group"
               >
                  <span className="font-mono text-[10px] font-bold text-studio-accent uppercase tracking-widest mb-4 block">Deployment_Grid</span>
                  <h3 className="text-3xl font-black uppercase mb-4">Edge <br /> Optimization</h3>
                  <p className="text-studio-dark/50 text-sm font-medium">99.9% uptime guaranteed via distributed edge networks and specialized CI/CD pipelines.</p>
               </motion.div>
            </div>
         </div>
      </section>

      {/* About CTA Section */}
      <section className="py-32 px-6 md:px-12 bg-studio-surface border-y border-studio-line">
        <div className="max-w-[1400px] mx-auto text-center">
          <span className="font-mono text-studio-accent text-[10px] font-bold uppercase tracking-widest mb-6 block">Our Philosophy</span>
          <h2 className="text-4xl md:text-7xl font-black mb-12">Quality Without Compromise.</h2>
          <p className="text-xl text-studio-dark/50 max-w-2xl mx-auto mb-16">
            In a world of fast-paced mediocrity, we choose to build with intent. Every line of code is an investment in your product's longevity and competitive edge.
          </p>
          <Link to="/about" className="inline-flex items-center gap-3 font-display font-black text-2xl uppercase hover:text-studio-accent transition-all group" >
            Our Methods <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
