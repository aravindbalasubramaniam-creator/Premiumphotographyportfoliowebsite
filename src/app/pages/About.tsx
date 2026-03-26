import { motion, useScroll, useTransform } from 'motion/react';
import { aboutData } from '../data/portfolioData';
import { useRef } from 'react';

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section with Parallax */}
      <div ref={ref} className="relative h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-[120vh] bg-cover bg-center"
          style={{
            backgroundImage: `url(${aboutData.image})`,
            y,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1
            className="text-white text-[clamp(4rem,12vw,9rem)] tracking-[0.1em]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            About
          </h1>
        </motion.div>
      </div>

      {/* Bio Section */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-white text-[clamp(2.5rem,6vw,4.5rem)] mb-12 tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {aboutData.name}
            </h2>

            <div className="space-y-6 text-white/70 text-lg md:text-xl leading-relaxed">
              {aboutData.bio.split('\n\n').map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3
                className="text-white text-[clamp(2rem,4vw,3rem)] mb-8 tracking-wide"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Awards & Recognition
              </h3>
              <div className="h-px bg-white/20 w-24 mb-8" />
              <ul className="space-y-4">
                {aboutData.awards.map((award, index) => (
                  <motion.li
                    key={index}
                    className="text-white/60 text-base tracking-wide"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {award}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3
                className="text-white text-[clamp(2rem,4vw,3rem)] mb-8 tracking-wide"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Selected Clients
              </h3>
              <div className="h-px bg-white/20 w-24 mb-8" />
              <ul className="space-y-4">
                {aboutData.clients.map((client, index) => (
                  <motion.li
                    key={index}
                    className="text-white/60 text-base tracking-wide"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {client}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Statement */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <blockquote
              className="text-white text-2xl md:text-4xl leading-relaxed italic tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              "Every photograph is a meditation on light, time, and the human experience."
            </blockquote>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
