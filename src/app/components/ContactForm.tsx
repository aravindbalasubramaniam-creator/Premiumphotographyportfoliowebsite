import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface FormData {
  name: string;
  email: string;
  projectType: string;
  projectDate: string;
  message: string;
}

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Send data to Supabase contact_inquiries table
      const { error } = await supabase.from('contact_inquiries').insert([
        {
          name: data.name,
          email: data.email,
          project_type: data.projectType || null,
          project_date: data.projectDate || null,
          message: data.message,
        },
      ]);

      if (error) throw error;

      setIsSubmitted(true);
      reset();

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err: any) {
      console.error('Error submitting form:', err.message);
      setSubmitError('There was a problem sending your message. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {submitError && (
        <motion.div
          className="mb-8 p-6 bg-red-500/10 border border-red-500/20 text-red-200 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {submitError}
        </motion.div>
      )}

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
            <select
              id="projectDate"
              {...register('projectDate')}
              className="w-full bg-transparent border-b border-white/20 text-white pb-3 focus:border-white/60 outline-none transition-colors duration-300 cursor-pointer"
            >
              <option value="" className="bg-black">Select timeframe...</option>
              <option value="asap" className="bg-black">As soon as possible</option>
              <option value="1_month" className="bg-black">Within 1 month</option>
              <option value="3_months" className="bg-black">Within 3 months</option>
              <option value="6_months" className="bg-black">Within 6 months</option>
              <option value="flexible" className="bg-black">Flexible / Date TBD</option>
            </select>
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
          disabled={isSubmitting}
          className="flex items-center gap-3 text-white border border-white/40 px-8 py-4 hover:bg-white hover:text-black transition-all duration-500 cursor-hover disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
        >
          <span className="text-sm tracking-[0.2em] uppercase">
            {isSubmitting ? 'Sending...' : 'Send Enquiry'}
          </span>
          <Send size={16} className={isSubmitting ? 'animate-pulse' : ''} />
        </motion.button>
      </form>
    </div>
  );
}
