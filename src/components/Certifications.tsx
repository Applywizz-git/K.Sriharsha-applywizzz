import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Certifications = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const certifications = [
    {
      title: 'IBM AI Practitioner',
      issuer: 'Coursera',
      date: '2024',
      description: 'Comprehensive AI and machine learning certification covering practical applications and implementation strategies.',
      skills: ['Artificial Intelligence', 'Machine Learning', 'Python', 'Data Science'],
      credentialUrl: '#',
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Google Data Analytics Professional Certificate',
      issuer: 'Coursera',
      date: '2024',
      description: 'End-to-end data analytics program covering data collection, processing, analysis, and visualization.',
      skills: ['Data Analytics', 'SQL', 'Tableau', 'R Programming', 'Data Visualization'],
      credentialUrl: '#',
      color: 'from-green-500 to-green-700'
    },
    {
      title: 'Microsoft Azure Data Engineer Associate',
      issuer: 'LinkedIn Learning',
      date: '2023',
      description: 'Advanced Azure data engineering certification focusing on data storage, processing, and security.',
      skills: ['Azure', 'Data Factory', 'Databricks', 'Synapse Analytics', 'Power BI'],
      credentialUrl: '#',
      color: 'from-purple-500 to-purple-700'
    },
    {
      title: 'Data Engineering with Google Cloud Professional Certificate',
      issuer: 'Coursera',
      date: '2023',
      description: 'Comprehensive GCP data engineering certification covering BigQuery, Dataflow, and Pub/Sub.',
      skills: ['Google Cloud', 'BigQuery', 'Dataflow', 'Pub/Sub', 'Cloud Storage'],
      credentialUrl: '#',
      color: 'from-orange-500 to-orange-700'
    }
  ];

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/30" />
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-gradient-to-r from-luxury-gold/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-48 h-48 bg-gradient-to-l from-luxury-amber/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <motion.h2
            className="text-4xl md:text-5xl font-display mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Professional <span className="gradient-text">Certifications</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Continuous learning and industry-recognized credentials in data engineering and cloud technologies
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="glass-card p-8 group relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 150}
              whileHover={{ 
                y: -10, 
                rotateY: 5,
                scale: 1.02 
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <motion.div
                    className="p-3 glass-card group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 15 }}
                  >
                    <Award className="w-8 h-8 text-luxury-gold" />
                  </motion.div>
                  <div>
                    <motion.h3
                      className="text-xl font-heading gradient-text mb-2 group-hover:text-luxury-gold transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      {cert.title}
                    </motion.h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="font-inter">{cert.issuer}</span>
                      {/* <span>•</span> */}
                      <div className="flex items-center gap-1">
                        {/* <Calendar className="w-3 h-3" /> */}
                        {/* {cert.date} */}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* <motion.a
                  href={cert.credentialUrl}
                  className="p-2 glass-card hover:scale-110 transition-transform duration-300 group/link"
                  whileHover={{ rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {/* <ExternalLink className="w-5 h-5 text-luxury-gold group-hover/link:text-luxury-amber transition-colors duration-300" /> */}
                {/* </motion.a>  */}
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {cert.description}
              </p>

              {/* Skills Covered */}
              <div className="mb-6">
                <h4 className="text-sm font-heading text-foreground mb-3">Skills Covered</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1 bg-gradient-to-r from-luxury-gold/20 to-luxury-amber/20 rounded-full text-xs font-inter border border-luxury-gold/30"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.3, 
                        delay: skillIndex * 0.05 + index * 0.1 + 0.6 
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: 'hsl(var(--luxury-gold) / 0.3)'
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Credential Button */}
              {/* <motion.a
                href={cert.credentialUrl}
                className="btn-luxury w-full text-center group relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Award className="w-4 h-4" />
                  View Credential
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-luxury-amber via-luxury-orange to-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shimmer"
                  whileHover={{ scale: 1.05 }}
                />
              </motion.a> */}

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-luxury-gold/5 via-luxury-amber/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                whileHover={{ scale: 1.1 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Certification Stats */}
        <motion.div
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="glass-card p-6"
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl font-display gradient-text mb-2">4+</div>
              <div className="text-sm text-muted-foreground">Professional Certifications</div>
            </motion.div>
            <motion.div
              className="glass-card p-6"
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl font-display gradient-text mb-2">3</div>
              <div className="text-sm text-muted-foreground">Cloud Platforms Certified</div>
            </motion.div>
            <motion.div
              className="glass-card p-6"
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl font-display gradient-text mb-2">2024</div>
              <div className="text-sm text-muted-foreground">Latest Certification</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;