import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Cloud, 
  BarChart3, 
  Cog, 
  Zap,
  Server,
  GitBranch,
  Brain
} from 'lucide-react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const skillCategories = [
    {
      title: 'Programming & Scripting',
      icon: Code,
      color: 'from-blue-500 to-blue-700',
      skills: ['Python', 'SQL', 'T-SQL', 'PySpark', 'Bash', 'Shell Scripting'],
      proficiency: 95
    },
    {
      title: 'Big Data & ETL Tools',
      icon: Database,
      color: 'from-green-500 to-green-700',
      skills: ['Apache Spark', 'Hadoop', 'Hive', 'Pig', 'Sqoop', 'Flume', 'Oozie', 'Kafka', 'Airflow', 'Delta Lake', 'dbt', 'Informatica', 'SSIS', 'Talend'],
      proficiency: 92
    },
    {
      title: 'Cloud Platforms',
      icon: Cloud,
      color: 'from-purple-500 to-purple-700',
      skills: ['AWS','S3', 'Redshift', 'Glue', 'Lambda','Kinesis', 'Azure','ADF', 'Synapse', 'Databricks', 'Data Lake Gen2', 'Functions', 'GCP,BigQuery','Dataflow','Bigtable'],
      proficiency: 90
    },
    {
      title: 'Databases',
      icon: Server,
      color: 'from-orange-500 to-orange-700',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'HBase', 'SQL Server', 'Snowflake', 'Teradata', 'Oracle', 'Cosmos DB'],
      proficiency: 88
    },
    {
      title: 'Visualization & BI',
      icon: BarChart3,
      color: 'from-pink-500 to-pink-700',
      skills: ['Power BI', 'Tableau', 'Looker', 'Qlik Sense', 'Matplotlib', 'Seaborn', 'Plotly', 'Pandas Profiling'],
      proficiency: 85
    },
    {
      title: 'ML & Data Science',
      icon: Brain,
      color: 'from-teal-500 to-teal-700',
      skills: ['Pandas', 'NumPy', 'SciPy', 'Scikit-learn', 'TensorFlow', 'PyTorch'],
      proficiency: 82
    },
    {
      title: 'DevOps & Orchestration',
      icon: GitBranch,
      color: 'from-indigo-500 to-indigo-700',
      skills: ['Docker', 'Kubernetes', 'Jenkins', 'Git', 'GitHub Actions', 'Terraform', 'Helm'],
      proficiency: 80
    },
    {
      title: 'Tools & OS',
      icon: Cog,
      color: 'from-gray-500 to-gray-700',
      skills: ['Linux', 'Windows', 'MacOS', 'VS Code', 'PyCharm', 'Jupyter Notebook'],
      proficiency: 90
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/50" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-l from-luxury-gold/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-gradient-to-r from-luxury-amber/10 to-transparent rounded-full blur-3xl" />
      
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
            Technical <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive expertise across modern data engineering and cloud technologies
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="glass-card p-6 group relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={categoryIndex * 100}
              whileHover={{ 
                y: -10, 
                rotateY: 5,
                scale: 1.02
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <motion.div
                  className="p-3 glass-card mr-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 10 }}
                >
                  <category.icon className="w-8 h-8 text-luxury-gold" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-lg font-heading gradient-text group-hover:text-luxury-gold transition-colors duration-300">
                    {category.title}
                  </h3>
                  
                  {/* Proficiency Bar */}
                  <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-luxury-gold to-luxury-amber"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${category.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 1.5, 
                        delay: categoryIndex * 0.2 + 0.5,
                        ease: "easeOut"
                      }}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {category.proficiency}% Proficiency
                  </div>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center group/skill"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: skillIndex * 0.05 + categoryIndex * 0.1 + 0.8 
                    }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-3 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="leading-relaxed">{skill}</span>
                  </motion.div>
                ))}
              </div>

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-luxury-gold/10 via-luxury-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                whileHover={{ scale: 1.1 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Skill Highlights */}
        <motion.div
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: 'Years Experience', value: '3+', icon: Zap },
              { label: 'Technologies Mastered', value: '50+', icon: Code },
              { label: 'Cloud Platforms', value: '3', icon: Cloud },
              { label: 'Certifications', value: '4+', icon: BarChart3 }
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

export default Skills;