import AboutImg from '../assets/coding4bg.png';

export default function About () {
    return <section id='about' className='flex flex-col md:flex-row px-5 py-15 bg-primary'>
<div className='py-2 px-20  md:w-1/2'>
    <img src={AboutImg}  />
</div>
<div className='md:w-1/2 flex justify-center'>
<div className='flex flex-col justify-center'>
<h1 className='font-medium text-4xl border-b-4 border-black mb-5 w-[170px] text-black'>About Me</h1>
    <p className='text-gray-600 pb-4'>

    I am an enthusiastic Full Stack Developer with a passion for innovation and problem-solving. I have completed a one-month summer internship in web development, where I successfully delivered projects, including a hotel booking website and a personal portfolio website.
    </p>

<p className='text-gray-600'>
With experience in React JS and JavaScript projects, I am actively honing my skills in React JS and continually seeking new challenges and  knowledge. My background includes developing a "Rotten Grocery Prediction" model, showcasing my expertise in deep learning.
 I also hold a certification in mobile application development using Flutter. Additionally, I have crafted Figma designs and possess 
 a foundational understanding of UI/UX design. I approach learning with a steady and methodical mindset, always eager to expand my skillset. 
 Open to new opportunities and collaborations.
 </p>

    
</div>
</div>
    </section>
}