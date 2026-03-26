import { motion } from 'motion/react';
import { ContactForm } from '../components/ContactForm';
import { Mail, Instagram, Globe } from 'lucide-react';

export function Contact() {
  return (
    <div className="bg-black min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16 md:mb-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1
            className="text-white text-[clamp(3rem,10vw,7rem)] mb-6 tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Let's Connect
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-8">
            I'm always open to new creative projects, editorial commissions, and collaborative opportunities.
          </p>
          <div className="h-px bg-white/20 w-48 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16 md:gap-24 items-start">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-12"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <h2
                className="text-white text-3xl md:text-4xl mb-8 tracking-wide"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Get in Touch
              </h2>

              <div className="space-y-6">
                <a
                  href="mailto:hello@arjunmehta.photo"
                  className="flex items-center gap-4 text-white/70 hover:text-white transition-colors duration-300 cursor-hover group"
                >
                  <Mail size={20} className="group-hover:scale-110 transition-transform duration-300" />
                  <span className="tracking-wide">hello@arjunmehta.photo</span>
                </a>

                <a
                  href="https://instagram.com/arjunmehta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-white/70 hover:text-white transition-colors duration-300 cursor-hover group"
                >
                  <Instagram size={20} className="group-hover:scale-110 transition-transform duration-300" />
                  <span className="tracking-wide">@arjunmehta</span>
                </a>

                <a
                  href="https://arjunmehta.photo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-white/70 hover:text-white transition-colors duration-300 cursor-hover group"
                >
                  <Globe size={20} className="group-hover:scale-110 transition-transform duration-300" />
                  <span className="tracking-wide">arjunmehta.photo</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white/60 text-sm tracking-[0.2em] uppercase mb-4">
                Based In
              </h3>
              <p className="text-white/80 text-lg tracking-wide">
                Mumbai & New Delhi
              </p>
              <p className="text-white/60 text-sm mt-2">
                Available for work worldwide
              </p>
            </div>

            <div>
              <h3 className="text-white/60 text-sm tracking-[0.2em] uppercase mb-4">
                Response Time
              </h3>
              <p className="text-white/80 text-lg tracking-wide">
                Within 24-48 hours
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <ContactForm />
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-24 md:mt-32 pt-16 border-t border-white/10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white/50 text-sm tracking-wider">
            For urgent enquiries or commercial opportunities, please mention "Priority" in your subject line.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
