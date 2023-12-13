'use client';

import { motion } from 'framer-motion'
import { staggerContainer, fadeIn } from '../utils/motion'
import { TitleText, TypingText } from '../components'

import styles from '../styles';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    {/* Container div */}
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{once: false, amount:0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col `}
    >
    <TypingText title='| People on the World' textStyles='text-center'/>
    <TitleText 
      title={
        <>
        Track friends around you and invite them to play toghether in the same world
        </>
      } 
      textStyles='text-center'
    />
    <motion.div
      variants={fadeIn('up', 'tween', 0.3,1)}
      className='relative mt-[68px] flex w-full h-[550px]'
    >
      <img 
        src="/map.png" 
        alt="map" 
        className='w-full h-full object-cover'
      />
      <div 
        className='absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[$5d6680]'
      >
        <img 
          src="./people-01.png" 
          alt="people"
          className='w-full h-full' 
        />
      </div>
      <div 
        className='absolute top-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[$5d6680]'
      >
        <img 
          src="./people-02.png" 
          alt="people"
          className='w-full h-full' 
        />
      </div>
      {/* people-03 */}
      <div 
        className='absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[$5d6680]'
      >
        <img 
          src="./people-03.png" 
          alt="people"
          className='w-full h-full' 
        />
      </div>

      <div className='flex flex-col items-center justify-center absolute top-10 left-[50px] w-[200px] h-[100px] rounded-[24px] bg-gradient-to-r from-[#890FC8] to-[#0EDBFF] p-1'>
          {/* bg image */}
          <img 
            src="/card-01.png" 
            alt="" 
            className='object-cover w-full h-full rounded-[24px]'  
          />
          <div className='absolute left-3 flex items-center justify-between gap-4'>
            <div className='relative flex justify-between'>
              <img 
                src="/people-02.png" 
                alt="" 
                className='object-contain w-[24px] h-[24px] rounded-[24px] z-10'  
              />
              <img 
                src="/people-01.png" 
                alt="" 
                className='object-contain w-[24px] h-[24px] rounded-[24px] absolute z-1 left-4'  
              />
              
            </div>
            <p className='text-white text-[12px]'>+ 289 has joined</p>
          </div>
          <h1 className='text-white text-[18px] absolute left-3 bottom-0 mb-1 '>
            The Upside Down
          </h1>
      </div>
    </motion.div>
    </motion.div>
  </section>
);

export default World;
