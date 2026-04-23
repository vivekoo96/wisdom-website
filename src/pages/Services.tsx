import React from 'react';
import { motion } from 'motion/react';
import { MonitorCheck, AppWindow, Cpu, Layers, ArrowUpRight } from 'lucide-react';
import SEO from '../components/common/SEO';

const Services = () => {
  const categories = [
    {
      title: "Web Engineering",
      icon: <MonitorCheck />,
      description: "High-performance web systems built for speed, SEO, and scalability.",
      features: ["Next.js & React Specialists", "Headless CMS Architectures", "Progressive Web Apps", "Performance Optimization", "Third-party Integrations"],
      color: "bg-blue-500"
    },
    {
      title: "Mobile Development",
      icon: <AppWindow />,
      description: "Native-quality experiences for iOS and Android tailored for user retention.",
      features: ["React Native Experts", "Cross-platform Fluidity", "Offline-first Design", "App Store Optimization", "Real-time Syncing"],
      color: "bg-studio-neon"
    },
    {
      title: "Product Strategy",
      icon: <Cpu />,
      description: "End-to-end technical direction and product roadmapping for startups and enterprises.",
      features: ["Technical Prototyping", "Scalability Audits", "MVP Development", "SaaS Architecture", "Cloud Infrastructure"],
      color: "bg-purple-500"
    },
    {
      title: "Creative Design",
      icon: <Layers />,
      description: "Visual systems and UI/UX that align with your business goals and technical constraints.",
      features: ["Component-based Design Systems", "High-fidelity Prototyping", "User Journey Mapping", "Brutal & Minimalist UI", "Brand-Code Alignment"],
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="pt-32 min-h-screen">
      <SEO 
        title="Services" 
        description="Comprehensive web engineering, mobile development, product strategy, and creative design services by Wisdom Studio. We build high-performance software."
      />

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-24">
            <span className="font-mono text-studio-neon text-[10px] font-bold uppercase tracking-widest mb-4 block">Our Capabilities</span>
            <h1 className="text-6xl md:text-9xl font-black leading-[0.85] tracking-tighter uppercase mb-12">
              The <span className="text-stroke">Service</span> <br /> <span className="text-white">Spectrum.</span>
            </h1>
            <p className="text-white/40 max-w-2xl text-xl leading-relaxed">
              We provide deep-level technical engineering combined with strategic insight. We don't just "complete tasks"—we solve business problems through software.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {categories.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-studio-surface border border-studio-line p-10 md:p-16 group hover:bg-white transition-all duration-700 relative overflow-hidden"
              >
                <div className={`absolute -top-20 -right-20 w-64 h-64 ${service.color} opacity-0 group-hover:opacity-10 blur-[100px] transition-all duration-700`} />
                
                <div className="text-studio-neon group-hover:text-studio-dark mb-10 transition-colors transform group-hover:scale-110 origin-left">
                  {React.cloneElement(service.icon as React.ReactElement, { size: 64 })}
                </div>

                <h2 className="text-4xl font-black mb-6 group-hover:text-studio-dark transition-colors">{service.title}</h2>
                <p className="text-white/50 group-hover:text-studio-dark/70 text-lg mb-12 font-medium">
                  {service.description}
                </p>

                <div className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-studio-neon group-hover:bg-studio-dark transition-colors rounded-full" />
                      <span className="text-sm font-bold uppercase tracking-widest text-white/30 group-hover:text-studio-dark/40 transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-16 pt-10 border-t border-studio-line group-hover:border-studio-dark/10 flex justify-between items-center transition-colors">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-white/30 group-hover:text-studio-dark/30">Phase_0{i+1}</span>
                  <ArrowUpRight className="text-white/20 group-hover:text-studio-dark transition-colors" size={32} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
