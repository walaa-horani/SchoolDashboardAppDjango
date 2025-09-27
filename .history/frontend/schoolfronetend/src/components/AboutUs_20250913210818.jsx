import React from 'react'

function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto p-5 mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
  
  {/* العمود الأول - الصورة */}
  <div>
    <img 
      className="rounded-lg object-cover w-full h-[350px]" 
      src="/about.jpg" 
      alt="About Us"
    />
  </div>

  {/* العمود الثاني - النص */}
  <div>
    <h3 className="text-pink-600 font-semibold mb-2">About Us</h3>
    <h1 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
      We Learn Smart Way To Build Bright Future For Your Children
    </h1>
    <p className="text-gray-600 leading-relaxed">
      At our school, we believe every child carries endless potential waiting
      to shine. Through creative programs, engaging activities, and caring
      teachers, we nurture curiosity and confidence in every step of their
      journey. Our mission is to inspire young minds, build strong values, and
      provide a safe and joyful environment where learning feels like play and
      every child feels special.
    </p>
  </div>

</div>

  )
}

export default AboutUs