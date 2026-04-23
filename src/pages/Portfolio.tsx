import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import SEO from '../components/common/SEO';

interface PortfolioItemProps {
  title: string;
  category: string;
  description: string;
  img: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, category, description, img }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="group"
  >
    <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-studio-line mb-8 bg-studio-surface">
      <img 
        src={img} 
        alt={title} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-studio-bg/20 group-hover:bg-transparent transition-all" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-16 h-16 bg-studio-accent rounded-full flex items-center justify-center text-white transform scale-50 group-hover:scale-100 transition-all duration-500 shadow-2xl">
          <ArrowUpRight strokeWidth={3} />
        </div>
      </div>
    </div>
    <div className="flex justify-between items-start">
      <div>
        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-studio-accent mb-2 block">{category}</span>
        <h3 className="text-3xl font-black mb-3 group-hover:text-studio-accent transition-colors">{title}</h3>
        <p className="text-studio-dark/40 max-w-sm font-medium leading-relaxed">{description}</p>
      </div>
      <div className="text-right hidden sm:block">
        <span className="text-[10px] font-mono text-studio-dark/20 uppercase tracking-widest">Released: 2025</span>
      </div>
    </div>
  </motion.div>
);

const Portfolio = () => {
  const projects = [
    {
      title: "Nexus_Alpha",
      category: "Fintech_Architecture",
      description: "A high-performance trading dashboard built with Next.js and secure real-time WebSocket integrations. Designed for institutional-grade reliability.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Helios_OS_V2",
      category: "Mobile_Engineering",
      description: "A comprehensive lifestyle operating system for cross-platform mobile devices. Features biometric security and offline-first data sync.",
      img: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Aether_Cloud",
      category: "Infrastructure_Control",
      description: "Scalable cloud management interface optimizing massive server distributions and deployment workflows for enterprise scale.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Stark_Vault",
      category: "Blockchain_Security",
      description: "Security-first interface for decentralized asset management and smart contract interactions with multi-sig protocol support.",
      img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Onyx_Commerce",
      category: "Headless_Retail",
      description: "Ultra-fast headless Shopify build with custom React frontend and seamless server-side rendering for 100/100 Lighthouse score.",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Quantum_Analytics",
      category: "Data_Visualization",
      description: "Processing millions of data points per second into actionable, real-time insight nodes for logistic enterprises.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  return (
    <div className="pt-32 min-h-screen">
      <SEO 
        title="Work" 
        description="A showcase of selected software outputs by Wisdom Studio. From Fintech dashboards to Native Mobile Apps and Headless E-commerce."
      />

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-32">
            <div className="max-w-2xl">
              <span className="font-mono text-studio-accent text-[10px] font-bold uppercase tracking-widest mb-4 block">Proven Execution</span>
              <h1 className="text-6xl md:text-9xl font-black leading-[0.85] tracking-tighter uppercase">
                The <span className="text-stroke">Archive</span> <br /> <span className="text-studio-dark">Of Grit.</span>
              </h1>
            </div>
            <div className="flex flex-col items-end gap-2 border-l border-studio-dark/10 pl-8 h-fit">
              <span className="text-[10px] font-mono text-studio-dark/30 uppercase tracking-[0.3em] font-bold">Project Count</span>
              <span className="text-4xl font-display font-black text-studio-accent">150+</span>
            </div>
          </div>

          {/* Project Spotlight */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-40 relative group"
          >
             <div className="absolute top-0 right-0 p-8 z-10 hidden md:block">
                <span className="font-mono text-studio-accent text-[10px] font-bold uppercase tracking-[0.3em] bg-studio-bg/80 backdrop-blur px-4 py-2">Project Spotlight_01</span>
             </div>
             <div className="grid lg:grid-cols-12 gap-12 items-center bg-studio-surface border border-studio-line p-8 md:p-20 rounded-sm">
                <div className="lg:col-span-7 aspect-[16/9] overflow-hidden border border-studio-line">
                   <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200" 
                    alt="Featured Project" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
                   />
                </div>
                <div className="lg:col-span-5">
                   <span className="font-mono text-studio-accent text-[11px] font-bold uppercase tracking-widest mb-6 block">Featured Engineering</span>
                   <h2 className="text-5xl md:text-7xl font-black uppercase mb-8 leading-none">Cortex <br /> <span className="text-stroke">AI Node</span></h2>
                   <p className="text-studio-dark/60 text-lg font-medium leading-relaxed mb-12">
                      An enterprise-grade AI integration platform that autonomousy audits code for security vulnerabilities and performance bottlenecks in real-time.
                   </p>
                   <div className="flex flex-wrap gap-4 mb-12">
                      {['Next.js', 'PyTorch', 'Rust', 'WebAssembly'].map((t, i) => (
                        <span key={i} className="text-[10px] font-mono font-bold border border-studio-dark/10 px-3 py-1 uppercase">{t}</span>
                      ))}
                   </div>
                   <button className="flex items-center gap-4 text-xl font-display font-black uppercase hover:text-studio-accent transition-colors">
                      Deep Dive_Study <ArrowUpRight />
                   </button>
                </div>
             </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-x-20 gap-y-32">
            {projects.map((project, i) => (
              <PortfolioItem 
                key={i} 
                title={project.title}
                category={project.category}
                description={project.description}
                img={project.img}
              />
            ))}
          </div>

          <div className="mt-40 pt-20 border-t border-studio-line text-center">
            <h4 className="text-4xl md:text-6xl font-black uppercase mb-8">Ready to be the next <br /> <span className="text-studio-accent">Success Story?</span></h4>
            <a href="/contact" className="bg-studio-accent text-white px-12 py-5 rounded-sm font-display font-black uppercase text-xl hover:bg-studio-dark transition-all transform hover:-rotate-1 inline-block">
              Start Your Project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
