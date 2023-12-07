'use client';

import { use, useState } from 'react';
import { motion } from 'framer-motion'
import { staggerContainer } from '../utils/motion'
import { ExploreCard, TypingText, TitleText } from '../components'
import { exploreWorlds } from '../constants'
import styles  from '../styles'


const Explore = () => {
  
  const [active, setActive] = useState('world-2'); 
  
  return(
    <section 
      id='explore'
      className={`${styles.paddings} `}
    >
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{once: false, amount: 0.25}}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title=" | The World" textStyles='text-center' />
        <TitleText 
          title ={<>Chose the world you want <br className='hidden md:block' /> to explore</>} 
          textStyles='text-center'
        />
        <div className='mt-[15px] flex lg:flex-row flex-col min-h-[70vh] gap-5'>
          {exploreWorlds.map((world,index) => (
            <ExploreCard 
              key={index}  
              {...world}
              index={index}
              active={active}
              handleClick= {setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
)};

export default Explore;
