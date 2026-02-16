import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Mail, Phone, Building2, User } from 'lucide-react';

interface LeadCaptureFormProps {
  variant?: 'inline' | 'card' | 'minimal';
  title?: string;
  subtitle?: string;
  buttonText?: string;
  showLabels?: boolean;
}

const LeadCaptureForm = ({ 
  variant = 'card',
  title = 'Get Your Free Proposal',
  subtitle = 'Tell us about your business and we\'ll create a custom strategy plan.',
  buttonText = 'Get My Free Proposal',
  showLabels = true
}: LeadCaptureFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-8"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-[#0a1f44] mb-2">Thank You!</h3>
        <p className="text-[#3b4555]">
          We&apos;ve received your information. Our team will contact you within 24 hours with your custom proposal.
        </p>
      </motion.div>
    );
  }

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#426dd8] focus:ring-2 focus:ring-[#426dd8]/20 outline-none transition-all"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-3 bg-[#426dd8] text-white font-semibold rounded-lg hover:bg-[#3a5ec0] transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {isSubmitting ? (
            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    );
  }

  if (variant === 'minimal') {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          name="email"
          placeholder="Enter your work email"
          value={formData.email}
          onChange={handleChange}
          required
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#426dd8] focus:ring-2 focus:ring-[#426dd8]/20 outline-none transition-all"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-3 bg-[#ffc225] text-[#0a1f44] font-bold rounded-lg hover:bg-[#e5af21] transition-colors disabled:opacity-70"
        >
          {isSubmitting ? 'Sending...' : buttonText}
        </button>
      </form>
    );
  }

  // Card variant (default)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-[#0a1f44] mb-2">{title}</h3>
        <p className="text-[#3b4555]">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            {showLabels && <label className="block text-sm font-medium text-[#0a1f44] mb-1">Full Name</label>}
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#426dd8] focus:ring-2 focus:ring-[#426dd8]/20 outline-none transition-all"
              />
            </div>
          </div>
          <div>
            {showLabels && <label className="block text-sm font-medium text-[#0a1f44] mb-1">Company</label>}
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="company"
                placeholder="Your Company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#426dd8] focus:ring-2 focus:ring-[#426dd8]/20 outline-none transition-all"
              />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            {showLabels && <label className="block text-sm font-medium text-[#0a1f44] mb-1">Email</label>}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#426dd8] focus:ring-2 focus:ring-[#426dd8]/20 outline-none transition-all"
              />
            </div>
          </div>
          <div>
            {showLabels && <label className="block text-sm font-medium text-[#0a1f44] mb-1">Phone</label>}
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                name="phone"
                placeholder="(555) 123-4567"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#426dd8] focus:ring-2 focus:ring-[#426dd8]/20 outline-none transition-all"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-[#426dd8] text-white font-bold rounded-lg hover:bg-[#3a5ec0] transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              {buttonText}
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>

        <p className="text-xs text-center text-gray-500">
          By submitting, you agree to our privacy policy. We respect your privacy.
        </p>
      </form>
    </motion.div>
  );
};

export default LeadCaptureForm;
