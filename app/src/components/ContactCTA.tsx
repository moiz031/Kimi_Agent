import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, Clock, MessageCircle, Mail } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="py-24 bg-[#0A1417] text-white relative overflow-hidden border-t border-[#1CA88C]/20">
      {/* Background Glow Orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#1CA88C]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-[#20C997]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="rounded-[2.5rem] bg-gradient-to-b from-[#101D21] to-[#0D181C] border border-[#1CA88C]/25 p-8 sm:p-12 lg:p-16 shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1CA88C]/15 border border-[#1CA88C]/35 text-[#20C997] text-xs font-bold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-[#1CA88C] animate-pulse" />
                Start Your Digital Evolution
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
                Have any idea to work on? —{' '}
                <span className="font-editorial text-[#20C997] font-normal block sm:inline">
                  let's get started
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl mb-8 leading-relaxed">
                Partner with Mentinox Solutions to engineer modern web architectures, AI automation engines, and data-driven customer acquisition pipelines.
              </p>

              {/* Guarantees List */}
              <div className="grid sm:grid-cols-3 gap-4 mb-10 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-[#1CA88C] shrink-0" />
                  <span className="text-xs text-slate-300 font-medium">&lt; 2hr Response SLA</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-[#1CA88C] shrink-0" />
                  <span className="text-xs text-slate-300 font-medium">100% Code Rights</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Zap className="w-5 h-5 text-[#1CA88C] shrink-0" />
                  <span className="text-xs text-slate-300 font-medium">Sprint Delivery</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold rounded-xl text-white bg-gradient-to-r from-[#1CA88C] to-[#159279] shadow-[0_8px_25px_rgba(28,168,140,0.35)] hover:shadow-[0_12px_32px_rgba(28,168,140,0.5)] transition-all"
                  >
                    <span>Request Free Proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>

                <a
                  href="https://wa.me/923309999149"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#20C997]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column: Quick Contact Box */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#091316] border border-[#1CA88C]/20 p-6 sm:p-8 shadow-inner">
                <h3 className="text-xl font-bold text-white mb-2">Direct Inquiry</h3>
                <p className="text-xs text-slate-400 mb-6">Connect directly with our lead solutions architect.</p>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#101D21] border border-white/5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#1CA88C]/15 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[#1CA88C]" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 uppercase tracking-wider">Email Us</div>
                      <a href="mailto:contact@mentinox.com" className="text-sm font-semibold text-white hover:text-[#20C997] transition-colors">
                        contact@mentinox.com
                      </a>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#101D21] border border-white/5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#1CA88C]/15 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 text-[#1CA88C]" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 uppercase tracking-wider">Direct WhatsApp</div>
                      <a href="https://wa.me/923309999149" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:text-[#20C997] transition-colors">
                        +92 330 9999149
                      </a>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-gradient-to-r from-[#1CA88C]/10 to-transparent border border-[#1CA88C]/20 text-xs text-slate-300 leading-relaxed">
                    ⚡ Guaranteed response within 2 business hours. NDA provided upon request.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;

