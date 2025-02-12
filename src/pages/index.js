import Head from 'next/head';
import Layout from '@/components/Layout';
import Image from 'next/image';
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from '@/components/AnimatedText';
import HireMe from '@/components/HireMe';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons'; 
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from '@/components/TransitionEffect';


export default function Home() {
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light pt-4 relative'> 
        <Layout>
          <div className="flex items-center justify-between w-full">
            {/* Image Section */}
            <div className="transform translate-x-0 translate-y-0">
              <Image 
                src={profilePic} 
                alt="Profile Picture" 
                className='w-85 h-85 -mt-40'  
              />
            </div>
            {/* Text Section */}
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="Turning Vision into Reality with Code and Design." className='!text-5xl' />
              <p className="mt-2 text-base font-medium">
                As a computer science engineering student at ENSEEIHT-INP, I am dedicated to turning ideas into functional web applications. My passion for coding and design fuels my exploration of innovative solutions. Check out my latest projects to see my skills in action!
              </p>
              <div className='flex items-center self-start mt-4'>
                <Link href="/CV_AB.pdf" target={"_blank"}
                    className="flex items-center bg-dark text-light p-2.5 px-6
                    rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                    border-2 border-solid border-transparent hover:border-dark
                    dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                    "
                    download={true}
                >
                    Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link href="\contact" className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light">Contact</Link>

              </div>
            </div>
          </div>
        </Layout>
        
        {/* HireMe Component positioned absolutely at bottom left */}
        <div className="fixed left-4 bottom-[-150px]">
  
    <HireMe />
  
</div>


        {/* LightBulb positioned absolutely at bottom right */}
        <div className='absolute right-4 bottom-0 transform translate-y-[-125px] inline-block w-24'> {/* Adjust the bottom value as needed */}
          <Image src={lightBulb} alt="Light Bulb" className='w-full h-auto' />
        </div>

      </main>
    </>
  );
}
