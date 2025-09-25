import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Show success toast with animation
      toast({
        title: "Message Sent Successfully! ✨",
        description: "Thank you for reaching out. I'll get back to you soon!",
        duration: 5000,
      });

      // Confetti effect could be added here
    }, 2000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Aubrey, TX',
      href: '#'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (913)-201-6393',
      href: 'tel:+19132016393'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'harshas4411@gmail.com',
      href: 'mailto:harshas4411@gmail.com'
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Luxury Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-start via-navy-end to-navy-start opacity-95" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/20" />
      
      {/* Shimmer Effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-metallic-silver to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <motion.h2
            className="text-4xl md:text-5xl font-display mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Let's <span className="gradient-text">Connect</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to discuss data engineering solutions or explore collaboration opportunities? 
            I'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <motion.div
              className="glass-card p-8 relative overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-heading gradient-text mb-8">
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <motion.div
                  className="relative"
                  whileFocus={{ scale: 1.02 }}
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-transparent focus:border-luxury-gold focus:outline-none focus-luxury transition-colors duration-300 peer"
                    placeholder="Your Name"
                  />
                  <label className="absolute left-0 -top-6 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-luxury-gold peer-focus:text-sm">
                    Your Name
                  </label>
                </motion.div>

                {/* Email Field */}
                <motion.div
                  className="relative"
                  whileFocus={{ scale: 1.02 }}
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-transparent focus:border-luxury-gold focus:outline-none focus-luxury transition-colors duration-300 peer"
                    placeholder="Email Address"
                  />
                  <label className="absolute left-0 -top-6 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-luxury-gold peer-focus:text-sm">
                    Email Address
                  </label>
                </motion.div>

                {/* Subject Field */}
                <motion.div
                  className="relative"
                  whileFocus={{ scale: 1.02 }}
                >
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-transparent focus:border-luxury-gold focus:outline-none focus-luxury transition-colors duration-300 peer"
                    placeholder="Subject"
                  />
                  <label className="absolute left-0 -top-6 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-luxury-gold peer-focus:text-sm">
                    Subject
                  </label>
                </motion.div>

                {/* Message Field */}
                <motion.div
                  className="relative"
                  whileFocus={{ scale: 1.02 }}
                >
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-transparent focus:border-luxury-gold focus:outline-none focus-luxury transition-colors duration-300 peer resize-none"
                    placeholder="Your Message"
                  />
                  <label className="absolute left-0 -top-6 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-luxury-gold peer-focus:text-sm">
                    Your Message
                  </label>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-luxury py-4 text-lg font-semibold group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-background border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        Send Message
                      </>
                    )}
                  </span>
                  {!isSubmitting && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-luxury-amber via-luxury-orange to-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shimmer"
                      whileHover={{ scale: 1.05 }}
                    />
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <div className="space-y-8">
              <motion.div
                className="glass-card p-8"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-heading gradient-text mb-6">
                  Get in touch
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I'm always interested in discussing new opportunities, 
                  innovative data solutions, or potential collaborations. 
                  Whether you have a project in mind or just want to connect, 
                  feel free to reach out.
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-4 glass-card hover:bg-luxury-gold/10 transition-colors duration-300 group"
                      whileHover={{ x: 5, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="p-3 glass-card group-hover:bg-luxury-gold/20 transition-colors duration-300"
                        whileHover={{ rotate: 10 }}
                      >
                        <info.icon className="w-6 h-6 text-luxury-gold" />
                      </motion.div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                        <div className="text-white font-inter group-hover:text-luxury-gold transition-colors duration-300">
                          {info.value}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Portfolio Link */}
              {/* <motion.div
                className="glass-card p-8 text-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-lg font-heading gradient-text mb-4">
                  Current Portfolio
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  View my latest projects and case studies
                </p>
                <motion.a
                  href="https://ksriharsha-applywizz.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-metallic inline-flex items-center gap-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Visit Portfolio</span>
                  <motion.div
                    className="w-4 h-4"
                    whileHover={{ x: 2, y: -2 }}
                  >
                    ↗
                  </motion.div>
                </motion.a>
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;