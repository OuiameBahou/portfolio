import React, { useEffect, useRef } from 'react'
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Image from 'next/image';
import profilePic from "../../public/images/profile/AB.png";
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';



const AnimatedNumbers = ({value}) => {
const ref = useRef(null);
const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, { duration: 3000 })
const isInView = useInView(ref, {once: true});

useEffect(() => {
    if(isInView){
        motionValue.set(value);

    }
}, [isInView, value, motionValue])

useEffect(() => {
    springValue.on("change", (latest) => {
        if(ref.current && latest.toFixed(0) <= value){
            ref.current.textContent = latest.toFixed(0);
        }
    })
}, [springValue, value])


    return <span ref={ref}></span>


}


const about = () => {
    return (
        <>
        <Head>
            <title>AymanBahou | About Page</title>
            <meta name="description" content="any description" />
        </Head>
        <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
        <AnimatedText text="Passion Fuels Purpose!" className='mb-16' />
        <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start'>
                <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                <p className='font-medium'>
    I&apos;m <span className='font-bold'>Ayman BAHOU</span>, a computer science student specializing in software development. I&apos;m passionate about turning ideas into functional software, with hands-on experience in programming and systems design.
</p>
  
<p className='my-4 font-medium'>
    For me, development goes beyond coding—it&apos;s about creating smooth, intuitive user experiences. I&apos;ve honed my skills in data analysis and application development, focusing on practical, user-centered solutions.
</p>

<p className='my-4 font-medium'>
    Whether it&apos;s web apps or software systems, I&apos;m dedicated to delivering excellence and collaborating to bring ideas to life. Let&apos;s work together to elevate your projects.
</p>

            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
bg-light p-8 mt-16 dark:bg-dark dark:border-light
'>
<div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
    <Image src={profilePic} alt="wiwi" className='w-full h-auto rounded-2xl' />
</div>

<div className='col-span-2 flex flex-col items-end justify-between'>
    <div className='flex flex-col items-end justify-center'>
        <span className='inline-block text-7xl font-bold'>
            <AnimatedNumbers value={2} />+

        </span>
        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>Years Of Experience</h2>
    </div>
    <div className='flex flex-col items-end justify-center'>
        <span className='inline-block text-7xl font-bold'>
        <AnimatedNumbers value={10} />+
        </span>
        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>Projects Completed</h2>
    </div>
    <div className='flex flex-col items-end justify-center'>
        <span className='inline-block text-7xl font-bold'>
        <AnimatedNumbers value={5} />+
        </span>
        <h2 className='text-xl font-medium capitalize text-dark/75 whitespace-nowrap dark:text-light/75'>Technologies Mastered</h2>
    </div>

</div>
        </div>

        <Skills />
        <Education />
        </Layout>

         
      </main>
    
        
        </>
    )
}

export default about