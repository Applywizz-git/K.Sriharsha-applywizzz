// import { motion } from 'framer-motion';
// import { ChevronDown, Download, Mail } from 'lucide-react';
// import { Link } from 'react-scroll';
// // import heroPortrait from 'public/profileimage.png';

// const Hero = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: { y: 0, opacity: 1 },
//   };

//   const imageVariants = {
//     hidden: { scale: 0.8, opacity: 0, rotate: -10 },
//     visible: { scale: 1, opacity: 1, rotate: 0 },
//   };

//   return (
//     <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0 parallax-stripe opacity-20" />
      
//       {/* Background Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/70" />
      
//       {/* Content */}
//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           className="grid lg:grid-cols-2 gap-12 items-center"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {/* Text Content */}
//           <div className="text-center py-20 lg:text-left">
//             <motion.div
//               variants={itemVariants}
//               className="mb-4"
//               transition={{ duration: 0.8, ease: "easeOut" }}
//             >
//               <span className="text-luxury-gold font-inter font-semibold text-lg">
//                 Hello, I'm
//               </span>
//             </motion.div>

//             <motion.h1
//               variants={itemVariants}
//               className="text-5xl md:text-7xl font-display mb-6"
//               transition={{ duration: 0.8, ease: "easeOut" }}
//             >
//               <span className="text-foreground">K</span>
//               <span className="gradient-text"> SRIHARSHA</span>
//             </motion.h1>

//             <motion.h2
//               variants={itemVariants}
//               className="text-2xl md:text-3xl font-heading text-muted-foreground mb-8"
//             >
//               Full-Stack / Data Engineer
//             </motion.h2>

//             <motion.p
//               variants={itemVariants}
//               className="text-lg text-muted-foreground mb-8 max-w-2xl"
//               transition={{ duration: 0.8, ease: "easeOut" }}
//             >
//               Crafting scalable ETL pipelines and cloud architectures across AWS, Azure, 
//               and hybrid environments. Expert in real-time analytics and data-driven solutions.
//             </motion.p>

//             <motion.div
//               variants={itemVariants}
//               className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
//               transition={{ duration: 0.8, ease: "easeOut" }}
//             >
//               <Link
//                 to="projects"
//                 smooth={true}
//                 duration={500}
//                 offset={-70}
//                 className="cursor-pointer"
//               >
//                 <motion.button
//                   className="btn-luxury group relative overflow-hidden"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <span className="relative z-10">View My Work</span>
//                   <motion.div
//                     className="absolute inset-0 bg-gradient-to-r from-luxury-amber via-luxury-orange to-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                     whileHover={{ scale: 1.1 }}
//                   />
//                 </motion.button>
//               </Link>

             
//               <motion.a
//     href="public/sriharsha_resume.pdf"
//     className="btn-metallic group relative overflow-hidden flex items-center justify-center gap-2"
//     whileHover={{ scale: 1.05 }}
//     whileTap={{ scale: 0.95 }}
//     download
// >
//     <Download className="w-5 h-5" />
//     <span>Download Resume</span>
// </motion.a>
//             </motion.div>

//             {/* Stats */}
//             <motion.div
//               variants={itemVariants}
//               className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12"
//               transition={{ duration: 0.8, ease: "easeOut" }}
//             >
//               <div className="text-center">
//                 <motion.div
//                   className="text-3xl font-display gradient-text"
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   transition={{ delay: 1, duration: 0.5 }}
//                 >
//                   3+
//                 </motion.div>
//                 <div className="text-sm text-muted-foreground">Years Experience</div>
//               </div>
//               <div className="text-center">
//                 <motion.div
//                   className="text-3xl font-display gradient-text"
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   transition={{ delay: 1.2, duration: 0.5 }}
//                 >
//                   5+
//                 </motion.div>
//                 <div className="text-sm text-muted-foreground">Projects Completed</div>
//               </div>
//               <div className="text-center">
//                 <motion.div
//                   className="text-3xl font-display gradient-text"
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   transition={{ delay: 1.4, duration: 0.5 }}
//                 >
//                   99%
//                 </motion.div>
//                 <div className="text-sm text-muted-foreground">Accuracy Rate</div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Profile Image */}
//           <motion.div
//             variants={imageVariants}
//             className="flex justify-center lg:justify"
//             transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
//           >
//             <div className="relative">
//               {/* Glowing Background */}
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-br from-luxury-gold/20 via-luxury-amber/20 to-luxury-orange/20 rounded-3xl blur-2xl"
//                 animate={{
//                   scale: [1, 1.1, 1],
//                   rotate: [0, 5, 0],
//                 }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               />
              
//               {/* Profile Image */}
//               <motion.div
//                 className="relative glass-card p-2 max-w-md"
//                 whileHover={{ y: -10 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <img
//                   src='/profileimage2.png'
//                   alt="K SRIHARSHA - Data Engineer"
//                   className="w-64 rounded-2xl justify-center shadow-2xl"
//                 />
//               </motion.div>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Scroll Indicator */}
//         <motion.div
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 2, duration: 0.8 }}
//         >
//           <Link
//             to="about"
//             smooth={true}
//             duration={500}
//             offset={-70}
//             className="cursor-pointer"
//           >
//             <motion.div
//               className="flex flex-col items-center text-muted-foreground hover:text-luxury-gold transition-colors duration-300"
//               animate={{ y: [0, 10, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//             >
//               <span className="text-sm font-inter mb-2">Scroll Down</span>
//               <ChevronDown className="w-6 h-6" />
//             </motion.div>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;











import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { Link } from 'react-scroll';
import heroPortrait from 'profileimage.png';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -10 },
    visible: { scale: 1, opacity: 1, rotate: 0 },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 parallax-stripe opacity-20" />
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/70" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <div className="text-center py-20 lg:text-left">
            <motion.div
              variants={itemVariants}
              className="mb-4"
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-luxury-gold font-inter font-semibold text-lg">
                Hello, I'm
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-display mb-6"
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-foreground">K</span>
              <span className="gradient-text"> SRIHARSHA</span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl font-heading text-muted-foreground mb-8"
            >
            Data Engineer
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground mb-8 max-w-2xl"
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Crafting scalable ETL pipelines and cloud architectures across AWS, Azure, 
              and hybrid environments. Expert in real-time analytics and data-driven solutions.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer"
              >
                <motion.button
                  className="btn-luxury group relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">View My Work</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-luxury-amber via-luxury-orange to-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  />
                </motion.button>
              </Link>

             
              <motion.a
    href="public/sriharsha_resume.pdf"
    className="btn-metallic group relative overflow-hidden flex items-center justify-center gap-2"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    download
>
    <Download className="w-5 h-5" />
    <span>Download Resume</span>
</motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12"
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="text-center">
                <motion.div
                  className="text-3xl font-display gradient-text"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  3+
                </motion.div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-3xl font-display gradient-text"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  5+
                </motion.div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-3xl font-display gradient-text"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                >
                  99%
                </motion.div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            variants={imageVariants}
            className="flex justify-center lg:justify"
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            <div className="relative">
              {/* Glowing Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-luxury-gold/20 via-luxury-amber/20 to-luxury-orange/20 rounded-3xl blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Profile Image */}
              <motion.div
                className="relative glass-card p-2 max-w-md"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src='public/profileimage2.png'
                  alt="K SRIHARSHA - Data Engineer"
                  className="w-64 rounded-2xl justify-center shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer"
          >
            <motion.div
              className="flex flex-col items-center text-muted-foreground hover:text-luxury-gold transition-colors duration-300"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-sm font-inter mb-2">Scroll Down</span>
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
