import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaTwitter,FaLinkedinIn, FaReact } from 'react-icons/fa'
import { siTailwindcss, siFigma } from "react-icons/si"

const Banner = () => {
    const [text] = useTypewriter({
        words: ['FullStack Developer.', 'Frontend Developer.', 'Backend Developer.'],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 1500
    })
    return (
        <section id='home'
            className='w-full py-20 flex items-center border-b-[1px] font-titleFont border-b-black'>
            <div className='w-1/2 flex flex-col gap-20'>
                <div className='flex flex-col gap-5'>
                    <h4 className='text-lg font-normal'>hello banner</h4>
                    <h1 className='text-6xl font-bold text-white'>
                        Hi, I'm {" "}  <span className='text-designColor capitalize'>Mukul Kumar</span>
                    </h1>
                    <h2 className='text-4xl font-bold text-white'>
                        a <span>{text}</span>
                        <Cursor cursorBlinking='true'
                            cursorStyle='|'
                            cursorColor='#ff014f' />
                    </h2>
                    <p className='text-base font-bodyFont leading-6 tracking-wide'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div>
                    <h2 className='text-base uppercase font-titleFont mb-4'>
                        Find me in
                    </h2>
                    <div className="flex gap-4">
                        <span className="bannerIcon">
                            
                        </span>
                        <span className="bannerIcon">
                            <FaTwitter />
                        </span>
                        <span className="bannerIcon">
                            <FaLinkedinIn />
                        </span>
                    </div>
                </div>
            </div>
            <div className='w-1/2'></div>
        </section>
    )
}

export default Banner