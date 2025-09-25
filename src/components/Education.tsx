import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const education = {
    degree: 'Master of Computer Science',
    university: 'University of Central Missouri',
    location: 'Warrensburg, MO',
    period: '2019 - 2021',
    description: 'Advanced coursework in data structures, algorithms, machine learning, and distributed systems. Focus on big data technologies and cloud computing architectures.',
    coursework: [
      'Advanced Data Structures & Algorithms',
      'Machine Learning & AI',
      'Distributed Systems',
      'Database Systems Design',
      'Cloud Computing',
      'Software Engineering',
      'Data Mining & Analytics',
      'Computer Networks'
    ],
    achievements: [
      'Graduate Research Assistant',
      'Dean\'s List Recognition',
      'Advanced Database Projects',
      'Cloud Architecture Research'
    ]
  };

  return (
    <section id="education" className="py-20 relative overflow-hidden">
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
            Academic <span className="gradient-text">Background</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Strong academic foundation in computer science with specialization in data engineering and cloud technologies
          </motion.p>
        </div>

        {/* Education Card */}
        <motion.div
          className="max-w-4xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <motion.div
            className="glass-card p-8 md:p-12 relative overflow-hidden group"
            whileHover={{ 
              y: -10, 
              rotateY: 2,
              scale: 1.02 
            }}
            transition={{ duration: 0.5 }}
          >
            {/* University Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
              <div className="flex items-center gap-6">
                <motion.div
                  className="p-4 glass-card group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 15 }}
                >
                  <GraduationCap className="w-12 h-12 text-luxury-gold" />
                </motion.div>
                <div>
                  <motion.h3
                    className="text-2xl md:text-3xl font-heading gradient-text mb-2"
                    whileHover={{ scale: 1.02 }}
                  >
                    {education.degree}
                  </motion.h3>
                  <div className="text-lg font-inter text-foreground mb-2">
                    {education.university}
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {education.location}
                    </div>
                    {/* <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {/* {education.period} */}
                    {/* </div> */}
                  </div>
                </div>
              </div>
              
              <motion.div
                className="px-4 py-2 bg-gradient-to-r from-luxury-gold/20 to-luxury-amber/20 rounded-full text-sm border border-luxury-gold/30"
                whileHover={{ scale: 1.05 }}
              >
                Graduate Degree
              </motion.div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <p className="text-muted-foreground leading-relaxed text-lg">
                {education.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Coursework */}
              <div>
                <h4 className="text-lg font-heading text-foreground mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-luxury-gold" />
                  Core Coursework
                </h4>
                <div className="space-y-3">
                  {education.coursework.map((course, index) => (
                    <motion.div
                      key={course}
                      className="text-muted-foreground flex items-center group/course"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.1 + 0.6 
                      }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        className="w-2 h-2 bg-luxury-gold rounded-full mr-3 opacity-0 group-hover/course:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.5 }}
                      />
                      <span className="leading-relaxed group-hover/course:text-foreground transition-colors duration-300">
                        {course}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-lg font-heading text-foreground mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-luxury-gold" />
                  Key Achievements
                </h4>
                <div className="space-y-3">
                  {education.achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement}
                      className="text-muted-foreground flex items-center group/achievement"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.1 + 0.8 
                      }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        className="w-2 h-2 bg-gradient-to-r from-luxury-gold to-luxury-amber rounded-full mr-3 opacity-0 group-hover/achievement:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.5 }}
                      />
                      <span className="leading-relaxed group-hover/achievement:text-foreground transition-colors duration-300">
                        {achievement}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hover Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-luxury-gold/5 via-luxury-amber/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              whileHover={{ scale: 1.1 }}
            />
          </motion.div>
        </motion.div>

        {/* Education Stats */}
        <motion.div
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: 'Master\'s Degree', value: 'MS', icon: GraduationCap },
              { label: 'Years of Study', value: '2', icon: Calendar },
              { label: 'Core Courses', value: '8+', icon: BookOpen },
              { label: 'Academic Focus', value: 'CS', icon: GraduationCap }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass-card p-6 text-center group"
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="mb-4"
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-8 h-8 text-luxury-gold mx-auto group-hover:animate-bounce-gentle" />
                </motion.div>
                <motion.div
                  className="text-2xl font-display gradient-text mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.2 + 1,
                    type: 'spring' 
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;