import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  projectType: string;
  projectDate: string;
  message: string;
}

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    reset();

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="max-w-3xl mx-auto">
      {isSubmitted && (
        <motion.div
          className="mb-8 p-6 bg-white/5 border border-white/10 text-white text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          Thank you for your enquiry. I'll be in touch soon.
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <label htmlFor="name" className="block text-white/60 text-xs tracking-[0.2em] uppercase mb-3">
              Name *
            </label>
            <input
              id="name"
              type="text"
              {...register('name', { required: 'Name is required' })}
              className="w-full bg-transparent border-b border-white/20 text-white pb-3 focus:border-white/60 outline-none transition-colors duration-300"
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-2">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-white/60 text-xs tracking-[0.2em] uppercase mb-3">
              Email *
            </label>
            <input
              id="email"
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              className="w-full bg-transparent border-b border-white/20 text-white pb-3 focus:border-white/60 outline-none transition-colors duration-300"
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-2">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <label htmlFor="projectType" className="block text-white/60 text-xs tracking-[0.2em] uppercase mb-3">
              Project Type
            </label>
            <select
              id="projectType"
              {...register('projectType')}
              className="w-full bg-transparent border-b border-white/20 text-white pb-3 focus:border-white/60 outline-none transition-colors duration-300 cursor-pointer"
            >
              <option value="" className="bg-black">Select...</option>
              <option value="fashion" className="bg-black">Fashion Editorial</option>
              <option value="portrait" className="bg-black">Portrait</option>
              <option value="architecture" className="bg-black">Architecture</option>
              <option value="product" className="bg-black">Product</option>
              <option value="documentary" className="bg-black">Documentary</option>
              <option value="other" className="bg-black">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="projectDate" className="block text-white/60 text-xs tracking-[0.2em] uppercase mb-3">
              Preferred Date
            </label>
            <input
              id="projectDate"
              type="text"
              placeholder="e.g., April 2024"
              {...register('projectDate')}
              className="w-full bg-transparent border-b border-white/20 text-white pb-3 focus:border-white/60 outline-none transition-colors duration-300"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-white/60 text-xs tracking-[0.2em] uppercase mb-3">
            Message *
          </label>
          <textarea
            id="message"
            rows={6}
            {...register('message', { required: 'Message is required' })}
            className="w-full bg-transparent border border-white/20 text-white p-4 focus:border-white/60 outline-none transition-colors duration-300 resize-none"
          />
          {errors.message && (
            <p className="text-red-400 text-xs mt-2">{errors.message.message}</p>
          )}
        </div>

        <motion.button
          type="submit"
          className="flex items-center gap-3 text-white border border-white/40 px-8 py-4 hover:bg-white hover:text-black transition-all duration-500 cursor-hover"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="text-sm tracking-[0.2em] uppercase">Send Enquiry</span>
          <Send size={16} />
        </motion.button>
      </form>
    </div>
  );
}
