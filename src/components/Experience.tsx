import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin, TrendingUp } from 'lucide-react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const experiences = [
    {
      company: 'Credit Suisse',
      position: 'Data Engineer',
      location: 'New York, USA',
      period: 'Aug 2023 – Present',
      type: 'Full-time',
      achievements: [
        'Migrated on-prem warehouses to Synapse using Azure Data Factory & Databricks (35% faster queries)',
        'Streamlined ETL into Azure SQL (datasets 40% faster refreshed)',
        'Enhanced Spark workloads (50% throughput gain)',
        'Built Airflow monitoring (downtime cut 30%)',
        'Kafka streaming (<2s latency ingestion)',
        'Optimized T-SQL for Power BI',
        'Strengthened governance with Azure Key Vault',
        'Achieved 99% accuracy with PySpark data validation'
      ],
      color: 'from-blue-500 to-blue-700',
      skills: ['Azure', 'Databricks', 'Spark', 'Kafka', 'Airflow', 'Power BI']
    },
    {
      company: 'Hewlett Packard',
      position: 'Data Analyst',
      location: 'India',
      period: 'Oct 2020 – Nov 2021',
      type: 'Full-time',
      achievements: [
        'Built Power BI dashboards (decision-making 30% faster)',
        'Optimized SQL Server queries (25% faster reporting)',
        'Ensured BI report accuracy (99%)',
        'Used Hadoop + Spark (batch analytics 40% faster)',
        'Automated ETL (manual effort cut 30%)',
        'Agile SDLC (BI speed +20%)',
        'Data quality checks for compliance',
        'Delivered ad-hoc + scheduled financial/ops reports'
      ],
      color: 'from-purple-500 to-purple-700',
      skills: ['Power BI', 'SQL Server', 'Hadoop', 'Spark', 'ETL', 'Python']
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/30" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-luxury-gold/10 via-transparent to-transparent" />
      
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
            Professional <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Building scalable data solutions across leading technology companies
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-luxury-gold via-luxury-amber to-luxury-orange opacity-30" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative mb-16 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-left' : 'md:pl-1/2 md:ml-auto'
              }`}
              data-aos={index % 2 === 0 ? "fade-left" : "fade-left"}
              data-aos-delay={index * 200}
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-br from-luxury-gold to-luxury-amber rounded-full border-4 border-background shadow-lg z-10"
                whileHover={{ scale: 1.3 }}
                transition={{ duration: 0.3 }}
              />

              {/* Content Card */}
              <motion.div
                className={`ml-20 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                } glass-card p-8 group`}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Company Header */}
                <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                  <div>
                    <motion.h3
                      className="text-2xl font-heading gradient-text mb-2"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {exp.position}
                    </motion.h3>
                    <div className="flex items-center gap-2 text-lg font-inter text-foreground mb-2">
                      <Building2 className="w-5 h-5 text-luxury-gold" />
                      {exp.company}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>
                  </div>
                  <motion.div
                    className="px-3 py-1 bg-gradient-to-r from-luxury-gold/20 to-luxury-amber/20 rounded-full text-sm border border-luxury-gold/30"
                    whileHover={{ scale: 1.05 }}
                  >
                    {exp.type}
                  </motion.div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-lg font-heading text-foreground mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-luxury-gold" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achieveIndex) => (
                      <motion.li
                        key={achieveIndex}
                        className="text-muted-foreground leading-relaxed pl-4 relative"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.5, 
                          delay: achieveIndex * 0.1 + 0.3 
                        }}
                      >
                        <div className="absolute left-0 top-2 w-2 h-2 bg-gradient-to-br from-luxury-gold to-luxury-amber rounded-full" />
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Skills Used */}
                <div>
                  <h4 className="text-sm font-heading text-muted-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1 bg-gradient-to-r from-metallic-silver/20 to-metallic-gray/20 rounded-full text-xs font-inter border border-metallic-gray/30 text-foreground"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.3, 
                          delay: skillIndex * 0.05 + 0.8,
                          type: 'spring' 
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: 'hsl(var(--metallic-gray) / 0.3)'
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Career Stats */}
        <motion.div
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="glass-card p-6"
              whileHover={{ y: -5, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl font-display gradient-text mb-2">40%</div>
              <div className="text-sm text-muted-foreground">Avg Performance Improvement</div>
            </motion.div>
            <motion.div
              className="glass-card p-6"
              whileHover={{ y: -5, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl font-display gradient-text mb-2">99%</div>
              <div className="text-sm text-muted-foreground">Data Accuracy Rate</div>
            </motion.div>
            <motion.div
              className="glass-card p-6"
              whileHover={{ y: -5, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl font-display gradient-text mb-2">&lt;2s</div>
              <div className="text-sm text-muted-foreground">Real-time Latency</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;