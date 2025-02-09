import React from 'react';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import project1 from "../../public/images/projects/hotell.JPG";
import project2 from "../../public/images/projects/mono.JPG";
import project3 from "../../public/images/projects/stick.JPG";
import project4 from "../../public/images/projects/nono.JPG";
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icons';
import TransitionEffect from '@/components/TransitionEffect';

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className="w-full flex flex-col md:flex-row items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-lg p-8 dark:bg-dark dark:border-light space-y-6 md:space-y-0">
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl' />
            
            <Link
                href={link}
                target="_blank"
                className="w-full md:w-1/2 cursor-pointer overflow-hidden rounded-lg"
            >
                <Image
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover rounded-lg"
                    layout="responsive"
                />
            </Link>

            {/* Content Section */}
            <div className="w-full md:w-1/2 flex flex-col items-start justify-between px-6">
                {/* Type */}
                <span className="text-primary font-medium text-xl dark:text-primaryDark">{type}</span>

                {/* Title */}
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="text-2xl font-bold hover:underline dark:text-light">{title}</h2>
                </Link>

                {/* Summary */}
                <p className="text-dark font-medium my-4 dark:text-light">{summary}</p>

                {/* Action Links */}
                <div className="flex items-center space-x-4 mt-4">
                    <Link href={github} target="_blank" className="w-10">
                        <GithubIcon  />
                    </Link>
                    <Link
                        href={link}
                        target="_blank"
                        className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark"
                    >
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    );
};

const Project = ({ title, type, img, link, github, summary }) => {
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light  dark:bg-dark dark:border-light p-6 relative space-y-6">
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light' />
            {/* Image Section */}
            <Link
                href={link}
                target="_blank"
                className="w-full cursor-pointer overflow-hidden rounded-lg"
            >
                <Image
                    src={img}
                    alt={title}
                    className="w-full h-auto object-cover rounded-lg"
                    layout="responsive"
                />
            </Link>

            {/* Content Section */}
            <div className="w-full flex flex-col items-start justify-between mt-4 space-y-4 dark:text-light">
                {/* Type */}
                <span className="text-primary font-medium text-xl dark:text-primaryDark">{type}</span>

                {/* Title */}
                <Link href={link} target="_blank" className="hover:underline underline-offset-2 dark:text-light">
                    <h2 className="text-3xl font-bold hover:underline">{title}</h2>
                </Link>

                {/* Summary */}
                <p className="text-dark font-medium dark:text-light">{summary}</p>

                {/* Action Links */}
                <div className="flex items-center justify-between w-full space-x-4 mt-4">
                    <Link
                        href={link}
                        target="_blank"
                        className="text-lg font-semibold underline"
                    >
                        Visit
                    </Link>
                    <Link href={github} target="_blank" className="text-dark w-8 h-6">
                        <GithubIcon className="w-full h-full" />
                    </Link>
                </div>
            </div>
        </article>
    );
};


const Projects = () => {
    return (
        <>
            <Head>
                <title>AymanBahou | Projects Page</title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect />
            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16' />

                    <div className="grid grid-cols-12 gap-24 gap-y-32">
                        <div className="col-span-12 mt-12">
                            <FeaturedProject
                                title="Tripin Hotel Booking Application"
                                img={project1}
                                summary="A dynamic hotel booking application developed in HTML, CSS, and JavaScript as part of a two-person team for the startup Tripin. The frontend simplifies the search and reservation of hotel rooms, enhancing the online booking experience."
                                link="/"
                                github="/"
                                type="Featured Project"
                            />
                        </div>

                        {/* Placeholder Projects */}
                        <div className="col-span-6"><Project
                            title="Toulouse-Themed Monopoly Game"
                            img={project2}
                            summary="A customized Monopoly game developed in Java, designed collaboratively with a team of five students. This version features stations inspired by Toulouse, enriching the gameplay with a local touch specific to la ville rose. "
                            link="/"
                            github="/"
                            type="Featured Project"
                        /></div>

                        {/* These are now using Project component for consistency */}
                        <div className="col-span-6"><Project
                            title="Matchstick Game"
                            img={project3}
                            summary="An engaging matchstick game created in Java, where users compete against the computer to remove 1 to 3 matchsticks. The project includes both naive and expert modes, with a referee class to declare the winner and handle any instances of cheating.

"
                            link="/"
                            github="/"
                            type="Featured Project"
                        /></div>
                        
                        <div className="col-span-12 mt-12"><FeaturedProject
                            title="TechExam IoT Project"
                            img={project4}
                            summary="An IoT-based exam room management system developed in Python using Raspberry Pi and Arduino. This project incorporated motion detection and facial recognition to streamline examination processes, enhancing efficiency and user experience.

"
                            link="/"
                            github="/"
                            type="Featured Project"
                        /></div>

                        {/* Using Project component for 5th and 6th project */}
                       
                    </div>
                </Layout>
            </main>
        </>
    );
};


export default Projects;
