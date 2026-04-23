import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import SEO from '../components/common/SEO';

const Contact = () => {
  return (
    <div className="pt-32 min-h-screen">
      <SEO 
        title="Contact Us" 
        description="Ready to build your next high-end web or mobile application? Contact Wisdom Studio today to discuss your technical requirements."
      />

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-24">
            {/* Context Info */}
            <div>
               <span className="font-mono text-studio-neon text-[10px] font-bold uppercase tracking-widest mb-4 block">Let's Interface</span>
               <h1 className="text-6xl md:text-8xl font-black leading-[0.8] tracking-tighter uppercase mb-20">
                  Ready <br /> To <br /> <span className="text-studio-neon">Commit?</span>
               </h1>

               <div className="space-y-12">
                  <div className="flex gap-6 items-start group">
                     <div className="w-12 h-12 border border-studio-line flex items-center justify-center text-studio-neon group-hover:bg-studio-neon group-hover:text-studio-dark transition-all">
                        <Mail size={20} />
                     </div>
                     <div>
                        <p className="font-mono text-[9px] uppercase tracking-widest text-white/20 mb-2">Electronic Mail</p>
                        <p className="text-2xl font-display font-black uppercase group-hover:text-studio-neon transition-colors">build@wisdom.studio</p>
                     </div>
                  </div>

                  <div className="flex gap-6 items-start group">
                     <div className="w-12 h-12 border border-studio-line flex items-center justify-center text-studio-neon group-hover:bg-studio-neon group-hover:text-studio-dark transition-all">
                        <Phone size={20} />
                     </div>
                     <div>
                        <p className="font-mono text-[9px] uppercase tracking-widest text-white/20 mb-2">Voice Comms</p>
                        <p className="text-2xl font-display font-black uppercase group-hover:text-studio-neon transition-colors">+91 987 654 3210</p>
                     </div>
                  </div>

                  <div className="flex gap-6 items-start group">
                     <div className="w-12 h-12 border border-studio-line flex items-center justify-center text-studio-neon group-hover:bg-studio-neon group-hover:text-studio-dark transition-all">
                        <MapPin size={20} />
                     </div>
                     <div>
                        <p className="font-mono text-[9px] uppercase tracking-widest text-white/20 mb-2">Station Address</p>
                        <p className="text-2xl font-display font-black uppercase group-hover:text-studio-neon transition-colors">Silicon Valley, Bangalore, KA, IN</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Form Container */}
            <div className="bg-studio-surface border border-studio-line p-10 md:p-20 relative">
               <div className="absolute top-0 right-0 w-32 h-32 bg-studio-neon opacity-5 blur-[80px]" />
               
               <form className="space-y-10 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                     <label className="font-mono text-[9px] uppercase tracking-widest text-white/20">Name_Identity</label>
                     <input type="text" placeholder="WHO ARE YOU?" className="w-full bg-transparent border-b border-studio-line py-4 text-2xl font-display font-black placeholder:text-white/5 focus:border-studio-neon focus:outline-none transition-all uppercase" />
                  </div>

                  <div className="space-y-2">
                     <label className="font-mono text-[9px] uppercase tracking-widest text-white/20">Email_Vector</label>
                     <input type="email" placeholder="WHERE DO WE REPLY?" className="w-full bg-transparent border-b border-studio-line py-4 text-2xl font-display font-black placeholder:text-white/5 focus:border-studio-neon focus:outline-none transition-all uppercase" />
                  </div>

                  <div className="space-y-2">
                     <label className="font-mono text-[9px] uppercase tracking-widest text-white/20">Project_Capability</label>
                     <select className="w-full bg-studio-dark border-b border-studio-line py-4 text-xl font-display font-black focus:border-studio-neon focus:outline-none transition-all uppercase">
                        <option>SELECT SERVICE VECTOR</option>
                        <option>WEB ENGINEERING</option>
                        <option>MOBILE DEVELOPMENT</option>
                        <option>PRODUCT STRATEGY</option>
                        <option>CREATIVE UI/UX</option>
                     </select>
                  </div>

                  <div className="space-y-2">
                     <label className="font-mono text-[9px] uppercase tracking-widest text-white/20">Message_Buffer</label>
                     <textarea rows={4} placeholder="DEFINE YOUR SPEC..." className="w-full bg-transparent border-b border-studio-line py-4 text-xl font-display font-black placeholder:text-white/5 focus:border-studio-neon focus:outline-none transition-all uppercase resize-none" />
                  </div>

                  <button className="w-full bg-studio-neon text-studio-dark py-8 font-display font-black text-3xl uppercase hover:bg-white transition-all transform hover:rotate-1 shadow-2xl active:scale-[0.98]">
                     Initialize_Lead_V01
                  </button>
               </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
