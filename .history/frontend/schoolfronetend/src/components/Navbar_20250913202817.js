import React, { useState } from 'react'

function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="text-sm text-white w-full">
    <div className="text-center font-medium py-2 bg-gradient-to-r from-violet-500 via-[#9938CA] to-[#E0724A]">
       <p>New Academic Year Admissions Now Open – <span className="underline underline-offset-2">Apply Today !</span></p>
    </div>
   <nav className="relative h-[70px] flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-white text-gray-900 transition-all shadow">

       <img className='w-40 h-40'  src='/logo.png'/>
       <ul className="hidden md:flex items-center space-x-8 md:pl-28">
           <li><a href="#">Home</a></li>
           <li><a href="#"> Teachers</a></li>
           <li><a href="#"> Programs</a></li>
           <li><a href="#"> Events</a></li>
       </ul>
       
       <button className="hidden md:block  bg-white hover:bg-gray-50 border border-gray-300 ml-20 px-9 py-2 rounded-full active:scale-95 transition-all">Get started</button>

       <button onClick={()=> setIsOpen(!isOpen)} aria-label="menu-btn" type="button" className="menu-btn inline-block md:hidden active:scale-90 transition">
           <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
               <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z"/>
           </svg>
       </button>

            {isOpen && (
                     <div className="mobile-menu absolute top-[70px] left-0 w-full bg-white shadow-sm p-6  md:hidden">
           <ul className="flex flex-col space-y-4 text-lg">
               <li><a href="#" className="text-sm">Home</a></li>
               <li><a href="#" className="text-sm">Services</a></li>
               <li><a href="#" className="text-sm">Portfolio</a></li>
               <li><a href="#" className="text-sm">Pricing</a></li>
           </ul>

           <button type="button" className="bg-white text-gray-600 border border-gray-300 mt-6 text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full">
               Get started
           </button>
       </div>
            )}
      
   </nav>
</div>


  )
}

export default Navbar