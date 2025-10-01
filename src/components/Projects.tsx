// import { motion } from 'framer-motion';
// import { ExternalLink, Github, Layers, Zap, Database } from 'lucide-react';
// import { useEffect, useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import AOS from 'aos';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'aos/dist/aos.css';

// const Projects = () => {
//   const swiperRef = useRef(null);

//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: true,
//       easing: 'ease-out-cubic',
//     });
//   }, []);

//   const projects = [
//     {
//       title: 'Real-Time Loan Analytics Platform',
//       description: 'Azure Data Factory + Databricks + Synapse integration with Kafka streaming for sub-2s event analytics and Power BI dashboards.',
//       image: 'public/loan_analytics.jpg',
//       technologies: ['Azure Data Factory', 'Databricks', 'Synapse', 'Power BI'],
//       metrics: ['40% faster decisions', 'Sub-2s analytics', '99% accuracy'],
//       demoUrl: '#',
//       codeUrl: '#',
//       category: 'Real-Time Analytics'
//     },
//     {
//       title: 'Cloud Data Warehouse Migration',
//       description: 'Complete migration from on-premises to cloud using AWS Glue, Lambda, S3, and EMR with SparkSQL optimization.',
//       image: '/api/placeholder/400/300',
//       technologies: ['AWS Glue', 'Lambda', 'S3', 'EMR', 'SparkSQL'],
//       metrics: ['35% faster ETL', '25% cost savings', '99.9% uptime'],
//       demoUrl: '#',
//       codeUrl: '#',
//       category: 'Cloud Migration'
//     },
//     {
//       title: 'Enterprise Data Lake & Streaming',
//       description: 'Comprehensive data lake solution with Spark + Hive pipelines, Airflow DAGs, and real-time Kafka streaming.',
//       image: '/api/placeholder/400/300',
//       technologies: ['Apache Spark', 'Hive', 'Airflow', 'Python'],
//       metrics: ['30% fewer errors', 'Real-time insights', 'Scalable architecture'],
//       demoUrl: '#',
//       codeUrl: '#',
//       category: 'Data Engineering'
//     },
//     {
//       title: 'Financial Analytics Dashboard',
//       description: 'Interactive Power BI dashboards with automated ETL pipelines for financial reporting and operational insights.',
//       image: '/api/placeholder/400/300',
//       technologies: ['Power BI', 'SQL Server', 'SSIS', 'Azure', 'Python'],
//       metrics: ['30% faster reporting', '99% accuracy', 'Real-time updates'],
//       demoUrl: '#',
//       codeUrl: '#',
//       category: 'Business Intelligence'
//     },
//     {
//       title: 'ML Pipeline Automation',
//       description: 'End-to-end machine learning pipeline with automated model training, validation, and deployment using MLOps practices.',
//       image: '/api/placeholder/400/300',
//       technologies: ['Python', 'TensorFlow', 'Docker', 'Kubernetes', 'Jenkins'],
//       metrics: ['80% faster deployment', 'CI/CD integration'],
//       demoUrl: '#',
//       codeUrl: '#',
//       category: 'Machine Learning'
//     }
//   ];

//   return (
//     <section id="projects" className="py-20 relative overflow-hidden">
//       {/* Parallax Background Stripe */}
//       <div className="absolute inset-0 parallax-stripe opacity-10" />
//       <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-muted/30 to-background/95" />
      
//       <div className="container mx-auto px-4 relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-16" data-aos="fade-up">
//           <motion.h2
//             className="text-4xl md:text-5xl font-display mb-6"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             Featured <span className="gradient-text">Projects</span>
//           </motion.h2>
//           <motion.p
//             className="text-xl text-muted-foreground max-w-3xl mx-auto"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Innovative data engineering solutions that drive business impact and technical excellence
//           </motion.p>
//         </div>

//         {/* Projects Carousel */}
//         <motion.div
//           className="relative"
//           data-aos="fade-up"
//           data-aos-delay="400"
//         >
//           <Swiper
//             ref={swiperRef}
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={30}
//             slidesPerView={1}
//             loop={true}
//             speed={1200}
//             autoplay={{
//               delay: 4000,
//               pauseOnMouseEnter: true,
//               disableOnInteraction: false,
//             }}
//             pagination={{
//               clickable: true,
//               bulletClass: 'swiper-pagination-bullet !bg-luxury-gold/30',
//               bulletActiveClass: 'swiper-pagination-bullet-active !bg-luxury-gold',
//             }}
//             navigation={{
//               nextEl: '.swiper-button-next-custom',
//               prevEl: '.swiper-button-prev-custom',
//             }}
//             breakpoints={{
//               640: { slidesPerView: 1 },
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//             className="pb-16"
//           >
//             {projects.map((project, index) => (
//               <SwiperSlide key={index}>
//                 <motion.div
//                   className="glass-card overflow-hidden group h-full"
//                   whileHover={{ y: -10, rotateY: 5 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {/* Project Image */}
//                   <div className="relative h-48 overflow-hidden">
//                     <motion.div
//                       className="w-full h-full bg-gradient-to-br from-luxury-gold/20 via-luxury-amber/20 to-luxury-orange/20 flex items-center justify-center"
//                       whileHover={{ scale: 1.1 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <Layers className="w-16 h-16 text-luxury-gold/60" />
//                     </motion.div>
//                     <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
//                     {/* Category Badge */}
//                     <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-luxury-gold/90 to-luxury-amber/90 rounded-full text-xs font-semibold text-background">
//                       {project.category}
//                     </div>
//                   </div>

//                   {/* Project Content */}
//                   <div className="p-6">
//                     <motion.h3
//                       className="text-xl font-heading gradient-text mb-3 group-hover:text-luxury-gold transition-colors duration-300"
//                       whileHover={{ scale: 1.02 }}
//                     >
//                       {project.title}
//                     </motion.h3>
                    
//                     <p className="text-muted-foreground text-sm leading-relaxed mb-4">
//                       {project.description}
//                     </p>

//                     {/* Metrics */}
//                     <div className="mb-4">
//                       <h4 className="text-xs font-semibold text-foreground mb-2 flex items-center gap-2">
//                         <Zap className="w-3 h-3 text-luxury-gold" />
//                         Impact Metrics
//                       </h4>
//                       <div className="flex flex-wrap gap-1">
//                         {project.metrics.map((metric, metricIndex) => (
//                           <motion.span
//                             key={metricIndex}
//                             className="text-xs px-2 py-1 bg-gradient-to-r from-success/20 to-success/30 text-success rounded border border-success/30"
//                             initial={{ opacity: 0, scale: 0 }}
//                             whileInView={{ opacity: 1, scale: 1 }}
//                             viewport={{ once: true }}
//                             transition={{ 
//                               duration: 0.3, 
//                               delay: metricIndex * 0.1 + index * 0.2 
//                             }}
//                             whileHover={{ scale: 1.05 }}
//                           >
//                             {metric}
//                           </motion.span>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Technologies */}
//                     <div className="mb-6">
//                       <h4 className="text-xs font-semibold text-foreground mb-2 flex items-center gap-2">
//                         <Database className="w-3 h-3 text-luxury-gold" />
//                         Technologies
//                       </h4>
//                       <div className="flex flex-wrap gap-1">
//                         {project.technologies.map((tech, techIndex) => (
//                           <motion.span
//                             key={tech}
//                             className="text-xs px-2 py-1 bg-gradient-to-r from-metallic-silver/20 to-metallic-gray/20 rounded border border-metallic-gray/30"
//                             initial={{ opacity: 0, rotate: -5 }}
//                             whileInView={{ opacity: 1, rotate: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ 
//                               duration: 0.3, 
//                               delay: techIndex * 0.05 + index * 0.2 
//                             }}
//                             whileHover={{ 
//                               scale: 1.05, 
//                               rotate: 2,
//                               backgroundColor: 'hsl(var(--metallic-gray) / 0.3)'
//                             }}
//                           >
//                             {tech}
//                           </motion.span>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Action Buttons */}
//                     <div className="flex gap-3 pt-4 border-t border-border">
//                       {/* <motion.a
//                         href={project.demoUrl}
//                         className="flex-1 btn-luxury text-center text-sm py-2 px-4 group relative overflow-hidden"
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                       >
//                         <ExternalLink className="w-4 h-4 mr-2 inline" />
//                         <span className="relative z-10">Preview</span>
//                         <motion.div
//                           className="absolute inset-0 bg-gradient-to-r from-luxury-amber via-luxury-orange to-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shimmer"
//                           whileHover={{ scale: 1.05 }}
//                         />
//                       </motion.a> */}
                      
//                       {/* <motion.a
//                         href={project.codeUrl}
//                         className="flex-1 btn-metallic text-center text-sm py-2 px-4 group"
//                         whileHover={{ 
//                           scale: 1.02,
//                           boxShadow: '0 0 20px rgba(156,163,175,0.8)'
//                         }}
//                         whileTap={{ scale: 0.98 }}
//                       >
//                         <Github className="w-4 h-4 mr-2 inline" />
//                         View Code
//                       </motion.a> */}
//                     </div>
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Custom Navigation Buttons */}
//           <div className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 glass-card flex items-center justify-center cursor-pointer group hover:scale-110 transition-all duration-300">
//             <div className="w-6 h-6 border-t-2 border-l-2 border-luxury-gold transform -rotate-45 group-hover:border-luxury-amber transition-colors duration-300" />
//           </div>
//           <div className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 glass-card flex items-center justify-center cursor-pointer group hover:scale-110 transition-all duration-300">
//             <div className="w-6 h-6 border-t-2 border-r-2 border-luxury-gold transform rotate-45 group-hover:border-luxury-amber transition-colors duration-300" />
//           </div>
//         </motion.div>

//         {/* View All Projects Button */}
//         <motion.div
//           className="text-center mt-12"
//           data-aos="fade-up"
//           data-aos-delay="600"
//         >
//           <motion.button
//             className="btn-luxury px-8 py-4 text-lg group relative overflow-hidden"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <span className="relative z-10">View All Projects</span>
//             <motion.div
//               className="absolute inset-0 bg-gradient-to-r from-luxury-orange via-luxury-amber to-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shimmer"
//               whileHover={{ scale: 1.1 }}
//             />
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Projects;




// import { motion } from 'framer-motion';
// import { ExternalLink, Github, Layers, Zap, Database } from 'lucide-react';
// import { useEffect, useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import AOS from 'aos';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'aos/dist/aos.css';

// const Projects = () => {
//   const swiperRef = useRef(null);

//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: true,
//       easing: 'ease-out-cubic',
//     });
//   }, []);

//   const projects = [
//     {
//       title: 'Real-Time Loan Analytics Platform',
//       description: 'Azure Data Factory + Databricks + Synapse integration with Kafka streaming for sub-2s event analytics.',
//       image: "public/loan_analytics.jpg",
//       technologies: ['Azure Data Factory', 'Databricks', 'Synapse', 'Power BI'],
//       metrics: ['40% faster decisions', 'Sub-2s analytics', '99% accuracy'],
//       demoUrl: '#',
//       codeUrl: '#',
//       category: 'Real-Time Analytics'
//     },
//     {
//       title: 'Cloud Data Warehouse Migration',
//       description: 'Complete migration from on-premises to cloud using AWS Glue, Lambda, S3, and EMR with SparkSQL optimization.',
//       image: '/api/placeholder/400/300',
//       technologies: ['AWS Glue', 'Lambda', 'S3', 'EMR', 'SparkSQL'],
//       metrics: ['35% faster ETL', '25% cost savings', '99.9% uptime'],
//       demoUrl: '#',
//       codeUrl: '#',
//       category: 'Cloud Migration'
//     },
//     {
//       title: 'Enterprise Data Lake & Streaming',
//       description: 'Comprehensive data lake solution with Spark + Hive pipelines, Airflow DAGs, and real-time Kafka streaming.',
//       image: '/api/placeholder/400/300',
//       technologies: ['Apache Spark', 'Hive', 'Airflow', 'Python'],
//       metrics: ['30% fewer errors', 'Real-time insights', 'Scalable architecture'],
//       demoUrl: '#',
//       codeUrl: '#',
//       category: 'Data Engineering'
//     },
//     {
//       title: 'Financial Analytics Dashboard',
//       description: 'Interactive Power BI dashboards with automated ETL pipelines for financial reporting and operational insights.',
//       image: '/api/placeholder/400/300',
//       technologies: ['Power BI', 'SQL Server', 'SSIS', 'Azure', 'Python'],
//       metrics: ['30% faster reporting', '99% accuracy', 'Real-time updates'],
//       demoUrl: '#',
//       codeUrl: '#',
//       category: 'Business Intelligence'
//     },
//     {
//       title: 'ML Pipeline Automation',
//       description: 'End-to-end ML pipeline with automated model training, validation, and deployment using MLOps practices.',
//       image: '/api/placeholder/400/300',
//       technologies: ['Python', 'TensorFlow', 'Docker', 'Kubernetes', 'Jenkins'],
//       metrics: ['80% faster deployment', 'CI/CD integration'],
//       demoUrl: '#',
//       codeUrl: '#',
//       category: 'Machine Learning'
//     }
//   ];

//   return (
//     <section id="projects" className="py-20 relative overflow-hidden">
//       {/* Parallax Background Stripe */}
//       <div className="absolute inset-0 parallax-stripe opacity-10" />
//       <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-muted/30 to-background/95" />
      
//       <div className="container mx-auto px-4 relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-16" data-aos="fade-up">
//           <motion.h2
//             className="text-4xl md:text-5xl font-display mb-6"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             Featured <span className="gradient-text">Projects</span>
//           </motion.h2>
//           <motion.p
//             className="text-xl text-muted-foreground max-w-3xl mx-auto"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Innovative data engineering solutions that drive business impact and technical excellence
//           </motion.p>
//         </div>

//         {/* Projects Carousel */}
//         <motion.div
//           className="relative"
//           data-aos="fade-up"
//           data-aos-delay="400"
//         >
//           <Swiper
//             ref={swiperRef}
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={30}
//             slidesPerView={1}
//             loop={true}
//             speed={1200}
//             autoplay={{
//               delay: 4000,
//               pauseOnMouseEnter: true,
//               disableOnInteraction: false,
//             }}
//             pagination={{
//               clickable: true,
//               bulletClass: 'swiper-pagination-bullet !bg-luxury-gold/30',
//               bulletActiveClass: 'swiper-pagination-bullet-active !bg-luxury-gold',
//             }}
//             navigation={{
//               nextEl: '.swiper-button-next-custom',
//               prevEl: '.swiper-button-prev-custom',
//             }}
//             breakpoints={{
//               640: { slidesPerView: 1 },
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//             className="pb-16"
//           >
//             {projects.map((project, index) => (
//               <SwiperSlide key={index}>
//                 <motion.div
//                   className="glass-card overflow-hidden group flex flex-col h-full"
//                   whileHover={{ y: -10, rotateY: 5 }}
//                   transition={{ duration: 0.3 }}
//                   style={{ height: '100%' }}
//                 >
//                   {/* Project Image */}
//                   <div className="relative h-48 overflow-hidden flex-shrink-0">
//                     <motion.div
//                       // className="w-full h-full bg-gradient-to-br from-luxury-gold/20 via-luxury-amber/20 to-luxury-orange/20 flex items-center justify-center"
//                       whileHover={{ scale: 1.1 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <Layers className="w-16 h-16 text-luxury-gold/60" />
//                     </motion.div>
//                     <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
//                     {/* Category Badge */}
//                     <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-luxury-gold/90 to-luxury-amber/90 rounded-full text-xs font-semibold text-background">
//                       {project.category}
//                     </div>
//                   </div>

//                   {/* Project Content */}
//                   <div className="p-6 flex flex-col flex-grow">
//                     <motion.h3
//                       className="text-xl font-heading gradient-text mb-3 group-hover:text-luxury-gold transition-colors duration-300"
//                       whileHover={{ scale: 1.02 }}
//                     >
//                       {project.title}
//                     </motion.h3>
                    
//                     <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
//                       {project.description}
//                     </p>

//                     {/* Metrics */}
//                     <div className="mb-4">
//                       <h4 className="text-xs font-semibold text-foreground mb-2 flex items-center gap-2">
//                         <Zap className="w-3 h-3 text-luxury-gold" />
//                         Impact Metrics
//                       </h4>
//                       <div className="flex flex-wrap gap-1">
//                         {project.metrics.map((metric, metricIndex) => (
//                           <motion.span
//                             key={metricIndex}
//                             className="text-xs px-2 py-1 bg-gradient-to-r from-success/20 to-success/30 text-success rounded border border-success/30"
//                             initial={{ opacity: 0, scale: 0 }}
//                             whileInView={{ opacity: 1, scale: 1 }}
//                             viewport={{ once: true }}
//                             transition={{ 
//                               duration: 0.3, 
//                               delay: metricIndex * 0.1 + index * 0.2 
//                             }}
//                             whileHover={{ scale: 1.05 }}
//                           >
//                             {metric}
//                           </motion.span>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Technologies */}
//                     <div className="mb-6">
//                       <h4 className="text-xs font-semibold text-foreground mb-2 flex items-center gap-2">
//                         <Database className="w-3 h-3 text-luxury-gold" />
//                         Technologies
//                       </h4>
//                       <div className="flex flex-wrap gap-1">
//                         {project.technologies.map((tech, techIndex) => (
//                           <motion.span
//                             key={tech}
//                             className="text-xs px-2 py-1 bg-gradient-to-r from-metallic-silver/20 to-metallic-gray/20 rounded border border-metallic-gray/30"
//                             initial={{ opacity: 0, rotate: -5 }}
//                             whileInView={{ opacity: 1, rotate: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ 
//                               duration: 0.3, 
//                               delay: techIndex * 0.05 + index * 0.2 
//                             }}
//                             whileHover={{ 
//                               scale: 1.05, 
//                               rotate: 2,
//                               backgroundColor: 'hsl(var(--metallic-gray) / 0.3)'
//                             }}
//                           >
//                             {tech}
//                           </motion.span>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Action Buttons */}
//                     <div className="flex gap-3 pt-4 border-t border-border mt-auto">
//                       {/* <motion.a
//                         href={project.demoUrl}
//                         className="flex-1 btn-luxury text-center text-sm py-2 px-4 group relative overflow-hidden"
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                       >
//                         <ExternalLink className="w-4 h-4 mr-2 inline" />
//                         <span className="relative z-10">Preview</span>
//                         <motion.div
//                           className="absolute inset-0 bg-gradient-to-r from-luxury-amber via-luxury-orange to-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shimmer"
//                           whileHover={{ scale: 1.05 }}
//                         />
//                       </motion.a> */}
                      
//                       {/* <motion.a
//                         href={project.codeUrl}
//                         className="flex-1 btn-metallic text-center text-sm py-2 px-4 group"
//                         whileHover={{ 
//                           scale: 1.02,
//                           boxShadow: '0 0 20px rgba(156,163,175,0.8)'
//                         }}
//                         whileTap={{ scale: 0.98 }}
//                       >
//                         <Github className="w-4 h-4 mr-2 inline" />
//                         View Code
//                       </motion.a> */}
//                     </div>
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Custom Navigation Buttons */}
//           <div className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 glass-card flex items-center justify-center cursor-pointer group hover:scale-110 transition-all duration-300">
//             <div className="w-6 h-6 border-t-2 border-l-2 border-luxury-gold transform -rotate-45 group-hover:border-luxury-amber transition-colors duration-300" />
//           </div>
//           <div className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 glass-card flex items-center justify-center cursor-pointer group hover:scale-110 transition-all duration-300">
//             <div className="w-6 h-6 border-t-2 border-r-2 border-luxury-gold transform rotate-45 group-hover:border-luxury-amber transition-colors duration-300" />
//           </div>
//         </motion.div>

//         {/* View All Projects Button */}
//         <motion.div
//           className="text-center mt-12"
//           data-aos="fade-up"
//           data-aos-delay="600"
//         >
//           <motion.button
//             className="btn-luxury px-8 py-4 text-lg group relative overflow-hidden"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <span className="relative z-10">View All Projects</span>
//             <motion.div
//               className="absolute inset-0 bg-gradient-to-r from-luxury-orange via-luxury-amber to-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shimmer"
//               whileHover={{ scale: 1.1 }}
//             />
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Projects;






// import { motion } from 'framer-motion';
// import { ExternalLink, Github, Layers, Zap, Database } from 'lucide-react';
// import { useEffect, useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import AOS from 'aos';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'aos/dist/aos.css';

// const Projects = () => {
//   const swiperRef = useRef(null);

//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: true,
//       easing: 'ease-out-cubic',
//     });
//   }, []);

//   const projects = [
//     {
//       title: 'Real-Time Loan Analytics Platform',
//       description: 'Azure Data Factory + Databricks + Synapse integration with Kafka streaming for sub-2s event analytics.',
//       image: 'public/loan_analytics.jpg',
//       technologies: ['Azure Data Factory', 'Databricks', 'Synapse', 'Power BI'],
//       metrics: ['40% faster decisions', 'Sub-2s analytics', '99% accuracy'],
//       demoUrl: '#',
//       codeUrl: '#',
//       category: 'Real-Time Analytics'
//     },
//     {
//       title: 'Cloud Data Warehouse Migration',
//       description: 'Complete migration from on-premises to cloud using AWS Glue, Lambda, S3, and EMR with SparkSQL optimization.',
//       image: 'public/datawarahouse.png',
//       technologies: ['AWS Glue', 'Lambda', 'S3', 'EMR', 'SparkSQL'],
//       metrics: ['35% faster ETL', '25% cost savings', '99.9% uptime'],
//       demoUrl: '#',
//       codeUrl: '#',
//       category: 'Cloud Migration'
//     },
//     {
//       title: 'Enterprise Data Lake & Streaming',
//       description: 'Comprehensive data lake solution with Spark + Hive pipelines, Airflow DAGs, and real-time Kafka streaming.',
//       image: 'public/Data-Lake.png',
//       technologies: ['Apache Spark', 'Hive', 'Airflow', 'Python'],
//       metrics: ['30% fewer errors', 'Real-time insights', 'Scalable architecture'],
//       demoUrl: '#',
//       codeUrl: '#',
//       category: 'Data Engineering'
//     },
//     {
//       title: 'Financial Analytics Dashboard',
//       description: 'Interactive Power BI dashboards with automated ETL pipelines for financial reporting and operational insights.',
//       image: 'public/financial_analytics.png',
//       technologies: ['Power BI', 'SQL Server', 'SSIS', 'Azure', 'Python'],
//       metrics: ['30% faster reporting', '99% accuracy', 'Real-time updates'],
//       demoUrl: '#',
//       codeUrl: '#',
//       category: 'Business Intelligence'
//     },
//     {
//       title: 'ML Pipeline Automation',
//       description: 'End-to-end ML pipeline with automated model training, validation, and deployment using MLOps practices.',
//       image: 'public/ml.jpg',
//       technologies: ['Python', 'TensorFlow', 'Docker', 'Kubernetes', 'Jenkins'],
//       metrics: ['80% faster deployment', 'CI/CD integration'],
//       demoUrl: '#',
//       codeUrl: '#',
//       category: 'Machine Learning'
//     }
//   ];

//   return (
//     <section id="projects" className="py-20 relative overflow-hidden">
//       {/* Parallax Background Stripe */}
//       <div className="absolute inset-0 parallax-stripe opacity-10" />
//       <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-muted/30 to-background/95" />
      
//       <div className="container mx-auto px-4 relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-16" data-aos="fade-up">
//           <motion.h2
//             className="text-4xl md:text-5xl font-display mb-6"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             Featured <span className="gradient-text">Projects</span>
//           </motion.h2>
//           <motion.p
//             className="text-xl text-muted-foreground max-w-3xl mx-auto"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Innovative data engineering solutions that drive business impact and technical excellence
//           </motion.p>
//         </div>

//         {/* Projects Carousel */}
//         <motion.div
//           className="relative"
//           data-aos="fade-up"
//           data-aos-delay="400"
//         >
//           <Swiper
//             ref={swiperRef}
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={30}
//             slidesPerView={1}
//             loop={true}
//             speed={1200}
//             autoplay={{
//               delay: 4000,
//               pauseOnMouseEnter: true,
//               disableOnInteraction: false,
//             }}
//             pagination={{
//               clickable: true,
//               bulletClass: 'swiper-pagination-bullet !bg-luxury-gold/30',
//               bulletActiveClass: 'swiper-pagination-bullet-active !bg-luxury-gold',
//             }}
//             navigation={{
//               nextEl: '.swiper-button-next-custom',
//               prevEl: '.swiper-button-prev-custom',
//             }}
//             breakpoints={{
//               640: { slidesPerView: 1 },
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//             className="pb-16"
//           >
//             {projects.map((project, index) => (
//               <SwiperSlide key={index}>
//                 <motion.div
//                   className="glass-card overflow-hidden group flex flex-col h-full"
//                   whileHover={{ y: -10, rotateY: 5 }}
//                   transition={{ duration: 0.3 }}
//                   style={{ height: '100%' }}
//                 >
//                   {/* Project Image */}
//                   <div className="relative h-48 overflow-hidden flex-shrink-0">
//                     <motion.div
//                       className="w-full h-full bg-cover bg-center bg-no-repeat"
//                       style={{ backgroundImage: `url(${project.image})` }}
//                       whileHover={{ scale: 1.1 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <div className="w-full h-full bg-gradient-to-br from-luxury-gold/20 via-luxury-amber/20 to-luxury-orange/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                         <Layers className="w-16 h-16 text-luxury-gold/60" />
//                       </div>
//                     </motion.div>
//                     <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
//                     {/* Category Badge */}
//                     <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-luxury-gold/90 to-luxury-amber/90 rounded-full text-xs font-semibold text-background">
//                       {project.category}
//                     </div>
//                   </div>

//                   {/* Project Content */}
//                   <div className="p-6 flex flex-col flex-grow">
//                     <motion.h3
//                       className="text-xl font-heading gradient-text mb-3 group-hover:text-luxury-gold transition-colors duration-300"
//                       whileHover={{ scale: 1.02 }}
//                     >
//                       {project.title}
//                     </motion.h3>
                    
//                     <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
//                       {project.description}
//                     </p>

//                     {/* Metrics */}
//                     <div className="mb-4">
//                       <h4 className="text-xs font-semibold text-foreground mb-2 flex items-center gap-2">
//                         <Zap className="w-3 h-3 text-luxury-gold" />
//                         Impact Metrics
//                       </h4>
//                       <div className="flex flex-wrap gap-1">
//                         {project.metrics.map((metric, metricIndex) => (
//                           <motion.span
//                             key={metricIndex}
//                             className="text-xs px-2 py-1 bg-gradient-to-r from-success/20 to-success/30 text-success rounded border border-success/30"
//                             initial={{ opacity: 0, scale: 0 }}
//                             whileInView={{ opacity: 1, scale: 1 }}
//                             viewport={{ once: true }}
//                             transition={{ 
//                               duration: 0.3, 
//                               delay: metricIndex * 0.1 + index * 0.2 
//                             }}
//                             whileHover={{ scale: 1.05 }}
//                           >
//                             {metric}
//                           </motion.span>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Technologies */}
//                     <div className="mb-6">
//                       <h4 className="text-xs font-semibold text-foreground mb-2 flex items-center gap-2">
//                         <Database className="w-3 h-3 text-luxury-gold" />
//                         Technologies
//                       </h4>
//                       <div className="flex flex-wrap gap-1">
//                         {project.technologies.map((tech, techIndex) => (
//                           <motion.span
//                             key={tech}
//                             className="text-xs px-2 py-1 bg-gradient-to-r from-metallic-silver/20 to-metallic-gray/20 rounded border border-metallic-gray/30"
//                             initial={{ opacity: 0, rotate: -5 }}
//                             whileInView={{ opacity: 1, rotate: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ 
//                               duration: 0.3, 
//                               delay: techIndex * 0.05 + index * 0.2 
//                             }}
//                             whileHover={{ 
//                               scale: 1.05, 
//                               rotate: 2,
//                               backgroundColor: 'hsl(var(--metallic-gray) / 0.3)'
//                             }}
//                           >
//                             {tech}
//                           </motion.span>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Action Buttons */}
//                     <div className="flex gap-3 pt-4 border-t border-border mt-auto">
//                       {/* <motion.a
//                         href={project.demoUrl}
//                         className="flex-1 btn-luxury text-center text-sm py-2 px-4 group relative overflow-hidden"
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                       >
//                         <ExternalLink className="w-4 h-4 mr-2 inline" />
//                         <span className="relative z-10">Preview</span>
//                         <motion.div
//                           className="absolute inset-0 bg-gradient-to-r from-luxury-amber via-luxury-orange to-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shimmer"
//                           whileHover={{ scale: 1.05 }}
//                         />
//                       </motion.a> */}
                      
//                       {/* <motion.a
//                         href={project.codeUrl}
//                         className="flex-1 btn-metallic text-center text-sm py-2 px-4 group"
//                         whileHover={{ 
//                           scale: 1.02,
//                           boxShadow: '0 0 20px rgba(156,163,175,0.8)'
//                         }}
//                         whileTap={{ scale: 0.98 }}
//                       >
//                         <Github className="w-4 h-4 mr-2 inline" />
//                         View Code
//                       </motion.a> */}
//                     </div>
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Custom Navigation Buttons */}
//           <div className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 glass-card flex items-center justify-center cursor-pointer group hover:scale-110 transition-all duration-300">
//             <div className="w-6 h-6 border-t-2 border-l-2 border-luxury-gold transform -rotate-45 group-hover:border-luxury-amber transition-colors duration-300" />
//           </div>
//           <div className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 glass-card flex items-center justify-center cursor-pointer group hover:scale-110 transition-all duration-300">
//             <div className="w-6 h-6 border-t-2 border-r-2 border-luxury-gold transform rotate-45 group-hover:border-luxury-amber transition-colors duration-300" />
//           </div>
//         </motion.div>

//         {/* View All Projects Button */}
//         {/* <motion.div
//           className="text-center mt-12"
//           data-aos="fade-up"
//           data-aos-delay="600"
//         >
//           {/* <motion.button
//             className="btn-luxury px-8 py-4 text-lg group relative overflow-hidden"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <span className="relative z-10">View All Projects</span>
//             <motion.div
//               className="absolute inset-0 bg-gradient-to-r from-luxury-orange via-luxury-amber to-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shimmer"
//               whileHover={{ scale: 1.1 }}
//             />
//           </motion.button> */}
//         {/* </motion.div>  */}
//       </div>
//     </section>
//   );
// };

// export default Projects;




















import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, Zap, Database } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import AOS from 'aos';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'aos/dist/aos.css';

const Projects = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const projects = [
    {
      title: 'Real-Time Loan Analytics Platform',
      description: 'Azure Data Factory + Databricks + Synapse integration with Kafka streaming for sub-2s event analytics.',
      image: '/loan_analytics.jpg',
      technologies: ['Azure Data Factory', 'Databricks', 'Synapse', 'Power BI'],
      metrics: ['40% faster decisions', 'Sub-2s analytics', '99% accuracy'],
      demoUrl: '#',
      codeUrl: '#',
      category: 'Real-Time Analytics'
    },
    {
      title: 'Cloud Data Warehouse Migration',
      description: 'Complete migration from on-premises to cloud using AWS Glue, Lambda, S3, and EMR with SparkSQL optimization.',
      image: '/datawarahouse.png',
      technologies: ['AWS Glue', 'Lambda', 'S3', 'EMR', 'SparkSQL'],
      metrics: ['35% faster ETL', '25% cost savings', '99.9% uptime'],
      demoUrl: '#',
      codeUrl: '#',
      category: 'Cloud Migration'
    },
    {
      title: 'Enterprise Data Lake & Streaming',
      description: 'Comprehensive data lake solution with Spark + Hive pipelines, Airflow DAGs, and real-time Kafka streaming.',
      image: '/Data-Lake.png',
      technologies: ['Apache Spark', 'Hive', 'Airflow', 'Python'],
      metrics: ['30% fewer errors', 'Real-time insights', 'Scalable architecture'],
      demoUrl: '#',
      codeUrl: '#',
      category: 'Data Engineering'
    },
    {
      title: 'Financial Analytics Dashboard',
      description: 'Interactive Power BI dashboards with automated ETL pipelines for financial reporting and operational insights.',
      image: '/financial_analytics.png',
      technologies: ['Power BI', 'SQL Server', 'SSIS', 'Azure', 'Python'],
      metrics: ['30% faster reporting', '99% accuracy', 'Real-time updates'],
      demoUrl: '#',
      codeUrl: '#',
      category: 'Business Intelligence'
    },
    // {
    //   title: 'ML Pipeline Automation',
    //   description: 'End-to-end ML pipeline with automated model training, validation, and deployment using MLOps practices.',
    //   image: 'public/ml.jpg',
    //   technologies: ['Python', 'TensorFlow', 'Docker', 'Kubernetes', 'Jenkins'],
    //   metrics: ['80% faster deployment', 'CI/CD integration'],
    //   demoUrl: '#',
    //   codeUrl: '#',
    //   category: 'Machine Learning'
    // }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Parallax Background Stripe */}
      <div className="absolute inset-0 parallax-stripe opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-muted/30 to-background/95" />
      
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
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Innovative data engineering solutions that drive business impact and technical excellence
          </motion.p>
        </div>

        {/* Projects Carousel */}
        <motion.div
          className="relative"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            speed={1200}
            autoplay={{
              delay: 4000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-luxury-gold/30',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-luxury-gold',
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="glass-card overflow-hidden group flex flex-col h-full"
                  whileHover={{ y: -10, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                  style={{ height: '100%' }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden flex-shrink-0">
                    <motion.div
                      className="w-full h-full bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${project.image})` }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-luxury-gold/20 via-luxury-amber/20 to-luxury-orange/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <Layers className="w-16 h-16 text-luxury-gold/60" />
                      </div>
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-luxury-gold/90 to-luxury-amber/90 rounded-full text-xs font-semibold text-background">
                      {project.category}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <motion.h3
                      className="text-xl font-heading gradient-text mb-3 group-hover:text-luxury-gold transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      {project.title}
                    </motion.h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Zap className="w-3 h-3 text-luxury-gold" />
                        Impact Metrics
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {project.metrics.map((metric, metricIndex) => (
                          <motion.span
                            key={metricIndex}
                            className="text-xs px-2 py-1 bg-gradient-to-r from-success/20 to-success/30 text-success rounded border border-success/30"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 0.3, 
                              delay: metricIndex * 0.1 + index * 0.2 
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {metric}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-xs font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Database className="w-3 h-3 text-luxury-gold" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="text-xs px-2 py-1 bg-gradient-to-r from-metallic-silver/20 to-metallic-gray/20 rounded border border-metallic-gray/30"
                            initial={{ opacity: 0, rotate: -5 }}
                            whileInView={{ opacity: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 0.3, 
                              delay: techIndex * 0.05 + index * 0.2 
                            }}
                            whileHover={{ 
                              scale: 1.05, 
                              rotate: 2,
                              backgroundColor: 'hsl(var(--metallic-gray) / 0.3)'
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-border mt-auto">
                      {/* <motion.a
                        href={project.demoUrl}
                        className="flex-1 btn-luxury text-center text-sm py-2 px-4 group relative overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink className="w-4 h-4 mr-2 inline" />
                        <span className="relative z-10">Preview</span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-luxury-amber via-luxury-orange to-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shimmer"
                          whileHover={{ scale: 1.05 }}
                        />
                      </motion.a> */}
                      
                      {/* <motion.a
                        href={project.codeUrl}
                        className="flex-1 btn-metallic text-center text-sm py-2 px-4 group"
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: '0 0 20px rgba(156,163,175,0.8)'
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github className="w-4 h-4 mr-2 inline" />
                        View Code
                      </motion.a> */}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 glass-card flex items-center justify-center cursor-pointer group hover:scale-110 transition-all duration-300">
            <div className="w-6 h-6 border-t-2 border-l-2 border-luxury-gold transform -rotate-45 group-hover:border-luxury-amber transition-colors duration-300" />
          </div>
          <div className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 glass-card flex items-center justify-center cursor-pointer group hover:scale-110 transition-all duration-300">
            <div className="w-6 h-6 border-t-2 border-r-2 border-luxury-gold transform rotate-45 group-hover:border-luxury-amber transition-colors duration-300" />
          </div>
        </motion.div>

        {/* View All Projects Button */}
        {/* <motion.div
          className="text-center mt-12"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {/* <motion.button
            className="btn-luxury px-8 py-4 text-lg group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View All Projects</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-luxury-orange via-luxury-amber to-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shimmer"
              whileHover={{ scale: 1.1 }}
            />
          </motion.button> */}
        {/* </motion.div>  */}
      </div>
    </section>
  );
};

export default Projects;
