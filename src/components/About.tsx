import { motion } from 'framer-motion';
import { Award, Coffee, MapPin, Users } from 'lucide-react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const stats = [
    { icon: Award, number: '3+', label: 'Years Experience' },
    { icon: Coffee, number: '5+', label: 'Projects Completed' },
    { icon: Users, number: '99%', label: 'Accuracy Rate' },
    { icon: MapPin, number: 'TX', label: 'Based in Aubrey' },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/50 to-background" />
      <div className="absolute top-1/2 -right-32 w-64 h-64 bg-gradient-to-br from-luxury-gold/20 to-luxury-amber/20 rounded-full blur-3xl" />
      <div className="absolute top-1/4 -left-32 w-48 h-48 bg-gradient-to-br from-luxury-orange/20 to-luxury-gold/20 rounded-full blur-3xl" />

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
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Passionate about transforming raw data into actionable insights through innovative engineering solutions
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div data-aos="fade-right" data-aos-delay="200">
            <motion.div
              className="glass-card p-8"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-heading gradient-text mb-6">
                Data Engineer & Cloud Architect
              </h3>
              
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Data Engineer with 3 years of experience designing and optimizing scalable ETL pipelines, 
                  data lakes, and cloud architectures across AWS, Azure, and hybrid environments.
                </p>
                
                <p className="leading-relaxed">
                  Expert in Spark, PySpark, Scala, Kafka, Airflow, Databricks, SQL, and Python for real-time 
                  and batch data processing, warehouse migrations (Synapse, Redshift, Snowflake), and BI 
                  integration with Power BI and Tableau.
                </p>
                
                <p className="leading-relaxed">
                  Skilled in data modeling, governance, quality, and high-throughput secure data solutions, 
                  enabling actionable insights for financial, operational, and enterprise analytics.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-luxury-gold" />
                    <span>Aubrey, TX</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-luxury-gold" />
                    <span>Multiple Certifications</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Stats Grid */}
          <div data-aos="fade-left" data-aos-delay="400">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass-card p-6 text-center group cursor-pointer"
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    rotateX: 5 
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ 
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                >
                  <motion.div
                    className="mb-4"
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-8 h-8 text-luxury-gold mx-auto group-hover:animate-bounce-gentle" />
                  </motion.div>
                  
                  <motion.div
                    className="text-3xl font-display gradient-text mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.2 + 0.6,
                      type: 'spring',
                      stiffness: 200 
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  
                  <p className="text-sm text-muted-foreground font-inter">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Skills Preview */}
            <motion.div
              className="mt-8 glass-card p-6"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-lg font-heading gradient-text mb-4">Core Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'SQL', 'AWS', 'Azure', 'Spark', 'Kafka', 'Airflow'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-gradient-to-r from-luxury-gold/20 to-luxury-amber/20 rounded-full text-sm font-inter border border-luxury-gold/30"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.1 + 0.8,
                      type: 'spring' 
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: 'hsl(var(--luxury-gold) / 0.3)'
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;