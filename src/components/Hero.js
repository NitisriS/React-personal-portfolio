import HeroImg from '../assets/coding2.gif';
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";

export default function Hero() {
    return <section id='home' className="flex flex-col md:flex-row px-8 py-32 bg-primary justify-center">
        <div className='md:w-1/2 flex flex-col'>
       <h1 className=' font-medium text-6xl text-gray-700'>Hi, <br /> I'm <span className='font-bold text-6.5xl text-black'>Nitisri</span> from Erode. 
       <p className='font-bold text-3.5xl  text-black py-2'>
        Full-stack Developer
        </p></h1> 
        
        <div className='flex py-12'>
            <a href="https://www.linkedin.com/in/nitisrisivapprakasam/" className='pr-4 hover:text-gray-600'><AiOutlineLinkedin size={40}/></a>
            <a href="https://github.com/NitisriS" className='pr-4 hover:text-gray-600'><AiOutlineGithub size={40}/></a>
            <a href="https://www.instagram.com/nitisri_sivapprakasam/" className='pr-4 hover:text-gray-600'><AiOutlineInstagram size={40}/></a>
            <a href="https://x.com/Nitisri_S" className='pr-4 hover:text-gray-600'><AiOutlineTwitter size={40}/></a>
            </div>
            </div>
        <img className="md:w-1/3 " src = {HeroImg}/>
    </section>
}