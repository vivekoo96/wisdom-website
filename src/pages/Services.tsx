import React from 'react';
import { motion } from 'motion/react';
import { MonitorCheck, AppWindow, Cpu, Layers, ArrowUpRight } from 'lucide-react';
import SEO from '../components/common/SEO';

const Services = () => {
  const categories = [
    {
      title: "Web Engineering",
      icon: <MonitorCheck />,
      description: "We engineer pixel-perfect, lightning-fast web architectures that serve as the backbone of high-growth digital brands.",
      features: ["Next.js & React Specialists", "Headless CMS Architectures", "Progressive Web Apps", "SEO Dominance Patterns", "Complex API Orchestration"],
      color: "bg-blue-500"
    },
    {
      title: "App Development",
      icon: <AppWindow />,
      description: "Forging native-quality mobile applications with fluid gestures, deep hardware integration, and zero-latency performance.",
      features: ["React Native Specialists", "Cross-platform Architecture", "Biometric Authentication", "Push Notification Logic", "Native Module Bridging"],
      color: "bg-studio-accent"
    },
    {
      title: "Full-Stack Strategy",
      icon: <Cpu />,
      description: "Strategic technical consulting that maps your business vision to a robust, scalable backend and cloud infrastructure.",
      features: ["SaaS Architecture Design", "Microservices Optimization", "Cloud Deployment (AWS/GCP)", "Database Normalization", "Security Hardening"],
      color: "bg-purple-500"
    },
    {
      title: "Tactical UI/UX",
      icon: <Layers />,
      description: "We design intentional interfaces that reduce cognitive load while maximizing user engagement and brand prestige.",
      features: ["Design System Engineering", "Interactive Prototyping", "A11y Compliance Audits", "Motion & Interaction Logic", "Brand Identity Alignment"],
      color: "bg-orange-500"
    }
  ];

  const processSteps = [
    { step: "01", title: "Logic_mapping", desc: "We deep-dive into your business logic, identifying technical edge cases before the first line of code exists." },
    { step: "02", title: "Protocol_design", desc: "Translating logic into architectural blueprints, selecting the perfect stack for your long-term success." },
    { step: "03", title: "Iteration_sprints", desc: "Rapid development cycles with high-frequency feedback loops to ensure alignment at every node." },
    { step: "04", title: "Stress_audit", desc: "Rigorous testing across browsers, devices, and network speeds to guarantee complete system integrity." },
    { step: "05", title: "Deployment_edge", desc: "Hardened launch protocols using automated CI/CD and edge-optimized delivery for global reach." }
  ];

  return (
    <div className="pt-32 min-h-screen">
      <SEO 
        title="Services" 
        description="Comprehensive web engineering, mobile development, product strategy, and creative design services by Wisdom Studio. We build high-performance software."
      />

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto text-center mb-32">
          <span className="font-mono text-studio-accent text-[10px] font-bold uppercase tracking-widest mb-4 block">Our Capabilities</span>
          <h1 className="text-6xl md:text-9xl font-black leading-[0.85] tracking-tighter uppercase mb-12">
            The <span className="text-stroke">Service</span> <br /> <span className="text-studio-dark">Spectrum.</span>
          </h1>
          <p className="text-studio-dark/40 max-w-2xl mx-auto text-xl leading-relaxed">
            We provide deep-level technical engineering combined with strategic insight. We don't just "complete tasks"—we solve business problems through software.
          </p>
        </div>

        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-px bg-studio-line border border-studio-line">
          {categories.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="bg-studio-bg p-10 md:p-20 group hover:bg-studio-dark transition-all duration-700 relative overflow-hidden"
            >
              <div className={`absolute -top-20 -right-20 w-64 h-64 ${service.color} opacity-0 group-hover:opacity-10 blur-[100px] transition-all duration-700`} />
              
              <div className="text-studio-accent group-hover:text-white mb-10 transition-colors transform group-hover:scale-110 origin-left">
                {React.cloneElement(service.icon as React.ReactElement, { size: 60 })}
              </div>

              <h2 className="text-4xl font-black mb-6 group-hover:text-white transition-colors">{service.title}</h2>
              <p className="text-studio-dark/50 group-hover:text-white/70 text-lg mb-12 font-medium">
                {service.description}
              </p>

              <div className="space-y-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-studio-accent group-hover:bg-white transition-colors rounded-full" />
                    <span className="text-sm font-bold uppercase tracking-widest text-studio-dark/30 group-hover:text-white/40 transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-16 pt-10 border-t border-studio-line group-hover:border-white/10 flex justify-between items-center transition-colors">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-studio-dark/30 group-hover:text-white/30">Sector_0{i+1}</span>
                <ArrowUpRight className="text-studio-dark/20 group-hover:text-white transition-colors" size={32} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Development Protocol */}
      <section className="py-40 bg-studio-dark text-white px-6 md:px-12 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-32">
             <span className="font-mono text-studio-accent text-[10px] font-bold uppercase tracking-widest mb-6 block">Execution Protocol</span>
             <h2 className="text-5xl md:text-8xl font-black uppercase leading-none">Engineering <br /> <span className="text-studio-accent">Perfection.</span></h2>
          </div>

          <div className="space-y-12">
            {processSteps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col md:flex-row items-start gap-8 md:gap-24 border-b border-white/10 pb-12 group hover:border-studio-accent/50 transition-colors"
              >
                <span className="text-5xl md:text-7xl font-display font-black text-white/5 group-hover:text-studio-accent/20 transition-colors">{step.step}</span>
                <div className="flex-1">
                   <h3 className="text-3xl font-black uppercase mb-4 tracking-tighter group-hover:text-studio-accent transition-colors">{step.title}</h3>
                   <p className="text-white/40 text-xl max-w-2xl group-hover:text-white/70 transition-colors">{step.desc}</p>
                </div>
                <div className="hidden md:block w-32 h-1 bg-white/5 group-hover:bg-studio-accent group-hover:w-48 transition-all duration-700 mt-6" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
