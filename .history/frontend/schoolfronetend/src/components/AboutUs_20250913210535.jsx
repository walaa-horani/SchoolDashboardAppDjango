import React from 'react'

function AboutUs() {
  return (
    <div className='max-w-7xl mx-auto p-5 mt-16 grid'>
        <div className='flex gap-5 items-center justify-around'>

        <img className='rounded-lg'  src='/about.jpg'/>

        <div>
            <h3>About Us</h3>
            <h1 className='mt-3'>We Learn Smart Way To Build Bright Futute For Your Children
            </h1>
            <p className='text-gray-400 mt-3'>At our school, we believe every child carries endless potential waiting to shine. Through creative programs, engaging activities, and caring teachers, we nurture curiosity and confidence in every step of their journey.
            Our mission is to inspire young minds, build strong values, and provide a safe and joyful environment where learning feels like play and every child feels special.</p>

        </div>
        </div>
    </div>
  )
}

export default AboutUs