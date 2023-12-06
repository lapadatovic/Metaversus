'use client';

import { motion } from 'framer-motion'
import styles from '../styles';
import { TypingText } from '../components'
import { staggerContainer } from '../utils/motion';

// About section
const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    {/* Gradient  created with self closign div*/}
    <div className='gradient-02 z-0'/> 
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title=" | About Metaversus "
        textStyles="text-center"
       />
    </motion.div>
  </section>
);

export default About;
