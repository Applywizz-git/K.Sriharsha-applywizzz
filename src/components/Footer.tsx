import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  const socialLinks = [
    // {
    //   icon: Github,
    //   label: 'GitHub',
    //   href: 'https://github.com/ksriharsha',
    //   color: 'hover:text-gray-400'
    // },
    // {
    //   icon: Linkedin,
    //   label: 'LinkedIn',
    //   href: 'https://linkedin.com/in/ksriharsha',
    //   color: 'hover:text-blue-400'
    // },
    // {
    //   icon: Mail,
    //   label: 'Email',
    //   href: 'mailto:harshas4411@gmail.com',
    //   color: 'hover:text-luxury-gold'
    // }
  ];

  const quickLinks = [
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Glass Divider with Shimmer */}
      <div className="h-px bg-gradient-to-r from-transparent via-metallic-silver to-transparent opacity-30 shimmer" />
      
      {/* Main Footer */}
      <div className="bg-gradient-to-br from-background via-navy-start/20 to-navy-end/30 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-end/50 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 py-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-64">
            {/* Brand Column */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h3
                className="text-3xl font-display gradient-text mb-4"
                whileHover={{ scale: 1.02 }}
              >
                K SRIHARSHA
              </motion.h3>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                Data Engineer passionate about transforming complex data challenges 
                into scalable, efficient solutions. Building the future of 
                data-driven decision making, one pipeline at a time.
              </p>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-6">
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-2xl font-display gradient-text">3+</div>
                  <div className="text-xs text-muted-foreground">Years</div>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-2xl font-display gradient-text">5+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-2xl font-display gradient-text">99%</div>
                  <div className="text-xs text-muted-foreground">Accuracy</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-heading text-foreground mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      className="cursor-pointer text-muted-foreground hover:text-luxury-gold transition-colors duration-300 flex items-center group"
                    >
                      <motion.div
                        className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.5 }}
                      />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Connect */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-lg font-heading text-foreground mb-6">Let's Connect</h4>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 text-muted-foreground ${social.color} transition-colors duration-300 group`}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="p-2 glass-card group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 10 }}
                      style={{
                        background: `linear-gradient(135deg, 
                          hsl(var(--luxury-gold) / 0.1), 
                          hsl(var(--luxury-amber) / 0.1), 
                          hsl(var(--luxury-orange) / 0.1)
                        )`,
                      }}
                    >
                      <social.icon className="w-4 h-4" />
                    </motion.div>
                    {social.label}
                  </motion.a>
                ))}
              </div>

              {/* Newsletter */}
              {/* <motion.div
                className="mt-8 p-4 glass-card"
                whileHover={{ y: -2 }}
              >
                <h5 className="text-sm font-heading text-foreground mb-2">Portfolio Updates</h5>
                <p className="text-xs text-muted-foreground mb-3">
                  Follow my latest projects and insights
                </p>
                <motion.a
                  href="https://ksriharsha-applywizz.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs btn-luxury w-full text-center py-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Visit Portfolio
                </motion.a>
              </motion.div>
            </motion.div>  */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <motion.div
                className="flex items-center gap-2 text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
               
              >
                <motion.span
                animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}> K SRIHARSHA</motion.span>
                {/* <motion.span
                  className="flex items-center gap-1"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  • Made with & Code
                </motion.span> */}
              </motion.div>

              {/* Social Icons */}
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 glass-card ${social.color} transition-colors duration-300 group`}
                    whileHover={{ 
                      scale: 1.1,
                      y: -2,
                      boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                    }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      background: `linear-gradient(135deg, 
                        hsl(var(--luxury-gold) / 0.1), 
                        hsl(var(--luxury-amber) / 0.1), 
                        hsl(var(--luxury-orange) / 0.1)
                      )`,
                      borderImage: `linear-gradient(135deg, 
                        hsl(var(--luxury-gold) / 0.3), 
                        hsl(var(--luxury-amber) / 0.3), 
                        hsl(var(--luxury-orange) / 0.3)
                      ) 1`,
                    }}
                  >
                    <social.icon 
                      className="w-5 h-5 group-hover:animate-bounce-gentle" 
                      aria-label={social.label}
                    />
                  </motion.a>
                ))}
              </motion.div>

              {/* Scroll to Top */}
              {/* <Link
                to="hero"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                <motion.div
                  className="p-3 glass-card hover:bg-luxury-gold/20 transition-colors duration-300 group"
                  whileHover={{ 
                    scale: 1.1,
                    y: -2,
                    boxShadow: '0 10px 25px hsl(var(--luxury-gold) / 0.3)'
                  }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    background: `linear-gradient(135deg, 
                      hsl(var(--metallic-silver) / 0.1), 
                      hsl(var(--luxury-gold) / 0.1)
                    )`,
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: -360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <ArrowUp 
                      className="w-5 h-5 text-luxury-gold group-hover:text-luxury-amber transition-colors duration-300" 
                      aria-label="Scroll to top"
                    />
                  </motion.div>
                </motion.div>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;