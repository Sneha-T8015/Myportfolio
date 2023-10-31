import React from 'react'
import group from "../img/Group.png"
import Typewriter from 'typewriter-effect';
export default function Header() {
    const typeStrings = ['Developer', 'Designer', 'Freelancer']; 

  const scrollDownToContactMe = () => {
    const contactMeSection = document.getElementById('contactMe');
    if (contactMeSection) {
      contactMeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
   
        
     <div className='w-full flex items-center justify-between pt-12 px-0 lg:px-[100px]  '> 
    <div className="flex items-center justify-center flex-col lg:flex-row gap-5 lg:gap-12">
       
       <div className=" flex flex-col text-left px-12  items-start lg:px-28  lg:mt-0 justify-center">
         <h1 className="text-2xl lg:text-4xl font-semibold text-black my-3">I'm</h1>
         <p className="text-3xl lg:text-5xl font-bold text-gray-900 my-3">Sneha Thangaraj</p>
         <div className="text-2xl font-semibold h-[60px] items-center flex justify-start w-[300px]">
           <Typewriter
             options={{
               strings: typeStrings,
               autoStart: true,
               loop: true,
             }}
           />
         </div>
         <div
           onClick={() => scrollDownToContactMe()}
           className="border border-pink-700 px-4 hover:bg-pink-700 text-black hover:text-white text-xl p-3 my-3 items-center justify-center cursor-pointer rounded-full"
         >
           Connect with Me
         </div>
       </div>
    
   <div className=' mr-1 '>
   <img src={group} alt="" className='w-[200px] h-[250px] lg:w-[450px] lg:h-[500px]'/>
   </div>
   
   </div>
     
        
    </div>
  )
}
