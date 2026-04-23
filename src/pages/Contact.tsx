import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '../components/common/SEO';

const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [selectedService, setSelectedService] = useState<string>('');

  const services = [
    "Web Engineering", "App Development", "Full-Stack Strategy", "Tactical UI/UX"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 2000);
  };

  return (
    <div className="pt-32 min-h-screen bg-studio-bg selection:bg-studio-accent selection:text-white">
      <SEO 
        title="Connect" 
        description="Ready to build your next high-end web or mobile application? Connect with the Wisdom Studio collective today."
      />

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-px bg-studio-line border border-studio-line overflow-hidden rounded-sm">
            
            {/* Left Column: Brand & Info */}
            <div className="lg:col-span-5 bg-studio-surface p-10 md:p-20 flex flex-col justify-between">
              <div>
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="font-mono text-studio-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-8 block"
                >
                  Network_Node: Contact_V4
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-6xl md:text-8xl font-black leading-[0.8] tracking-tighter uppercase mb-12"
                >
                  Let's <br /> Build <br /> <span className="text-stroke text-studio-bg">Real.</span>
                </motion.h1>
                <p className="text-xl text-studio-dark/50 font-medium leading-relaxed max-w-sm mb-20">
                  Whether you're starting from zero or optimizing a legacy system, our architecture team is ready to audit your requirements.
                </p>

                <div className="space-y-10">
                  {[
                    { label: "Direct Comms", val: "build@wisdom.studio", icon: <Mail size={18} /> },
                    { label: "Voice Channel", val: "+91 987 654 3210", icon: <Phone size={18} /> },
                    { label: "HQ Coordinates", val: "Silicon Valley, Bangalore", icon: <MapPin size={18} /> }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="group flex gap-6 items-center"
                    >
                      <div className="w-10 h-10 border border-studio-line flex items-center justify-center text-studio-dark/20 group-hover:bg-studio-accent group-hover:border-studio-accent group-hover:text-white transition-all duration-500">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-mono text-[8px] uppercase tracking-widest text-studio-dark/30 mb-1">{item.label}</p>
                        <p className="text-lg font-display font-black uppercase group-hover:text-studio-accent transition-colors">
                          {item.val}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-20 pt-10 border-t border-studio-line/50">
                <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-studio-dark/20 leading-relaxed">
                  Encryption Status: Active <br />
                  Lead Protocol: Secure <br />
                  Average Response: 12-24 Hours
                </p>
              </div>
            </div>

            {/* Right Column: Interaction Form */}
            <div className="lg:col-span-7 bg-studio-bg p-10 md:p-20">
              <AnimatePresence mode="wait">
                {formState !== 'success' ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="space-y-12"
                    onSubmit={handleSubmit}
                  >
                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="space-y-2 group">
                        <label className="font-mono text-[9px] uppercase tracking-widest text-studio-dark/40 group-focus-within:text-studio-accent transition-colors">Full_Identity</label>
                        <input 
                          required
                          type="text" 
                          placeholder="Your Name" 
                          className="w-full bg-transparent border-b border-studio-line py-4 text-2xl font-display font-black placeholder:text-studio-dark/5 focus:border-studio-accent focus:outline-none transition-all uppercase" 
                        />
                      </div>
                      <div className="space-y-2 group">
                        <label className="font-mono text-[9px] uppercase tracking-widest text-studio-dark/40 group-focus-within:text-studio-accent transition-colors">Email_Endpoint</label>
                        <input 
                          required
                          type="email" 
                          placeholder="your@email.com" 
                          className="w-full bg-transparent border-b border-studio-line py-4 text-2xl font-display font-black placeholder:text-studio-dark/5 focus:border-studio-accent focus:outline-none transition-all uppercase" 
                        />
                      </div>
                    </div>

                    <div className="space-y-6">
                      <label className="font-mono text-[9px] uppercase tracking-widest text-studio-dark/40">Select_Service_Vector</label>
                      <div className="grid md:grid-cols-2 gap-4">
                        {services.map((service) => (
                          <button
                            key={service}
                            type="button"
                            onClick={() => setSelectedService(service)}
                            className={`px-6 py-4 border font-display font-black uppercase text-sm tracking-widest transition-all text-left flex justify-between items-center group/btn ${
                              selectedService === service 
                                ? 'bg-studio-accent border-studio-accent text-white' 
                                : 'bg-studio-surface border-studio-line text-studio-dark/40 hover:border-studio-accent hover:text-studio-accent'
                            }`}
                          >
                            {service}
                            <ArrowRight size={14} className={`transition-transform ${selectedService === service ? 'translate-x-0' : '-translate-x-4 opacity-0 group-hover/btn:translate-x-0 group-hover/btn:opacity-100'}`} />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 group">
                      <label className="font-mono text-[9px] uppercase tracking-widest text-studio-dark/40 group-focus-within:text-studio-accent transition-colors">Project_Brief_Buffer</label>
                      <textarea 
                        required
                        rows={5} 
                        placeholder="Define your technical specifications and business goals..." 
                        className="w-full bg-transparent border-b border-studio-line py-4 text-xl font-display font-black placeholder:text-studio-dark/5 focus:border-studio-accent focus:outline-none transition-all uppercase resize-none" 
                      />
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <button 
                        disabled={formState === 'submitting'}
                        type="submit"
                        className="w-full md:w-auto bg-studio-accent text-white px-16 py-6 font-display font-black text-xl uppercase hover:bg-studio-dark transition-all transform hover:-rotate-1 active:scale-95 disabled:opacity-50 flex items-center justify-center gap-4 group"
                      >
                        {formState === 'submitting' ? 'Processing...' : (
                          <>
                            Transmit_Protocol <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </button>
                      <p className="font-mono text-[9px] uppercase tracking-widest text-studio-dark/20 max-w-[200px]">
                        By transmitting, you agree to our secure data handling protocol.
                      </p>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center space-y-8"
                  >
                    <div className="w-32 h-32 bg-studio-accent/10 rounded-full flex items-center justify-center text-studio-accent mb-4">
                      <CheckCircle2 size={64} />
                    </div>
                    <div>
                      <h3 className="text-5xl font-black uppercase mb-4 tracking-tighter">Protocol_Success</h3>
                      <p className="text-xl text-studio-dark/50 font-medium max-w-sm mx-auto">
                        Your data has been successfully ingested into our lead management grid. A specialist will respond within 12 standard hours.
                      </p>
                    </div>
                    <button 
                      onClick={() => setFormState('idle')}
                      className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-studio-accent hover:underline decoration-2 underline-offset-8"
                    >
                      Return to interface
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Micro Info */}
      <section className="py-32 px-6 md:px-12 border-t border-studio-line">
         <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-16">
            {[
               { q: "What's the typical lead time?", a: "MVP development usually takes 4-8 weeks. Enterprise migrations vary by complexity vectors." },
               { q: "Do you offer post-launch audit?", a: "Every deployment includes 12 months of high-level monitoring and edge-optimization support." },
               { q: "Can you work with existing teams?", a: "Our engineers can act as a force-multiplier for your in-house division or function as a standalone squad." }
            ].map((faq, i) => (
               <div key={i}>
                  <p className="font-mono text-studio-accent text-[10px] font-bold uppercase tracking-widest mb-4">Query_Node_{i+1}</p>
                  <h4 className="text-xl font-black uppercase mb-4 tracking-tight">{faq.q}</h4>
                  <p className="text-studio-dark/40 font-medium leading-relaxed">{faq.a}</p>
               </div>
            ))}
         </div>
      </section>
    </div>
  );
};

export default Contact;
