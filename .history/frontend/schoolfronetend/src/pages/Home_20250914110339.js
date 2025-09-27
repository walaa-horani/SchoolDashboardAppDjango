import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Programs from '../components/Programs'
import Events from '../components/Events'
import Teachers from '../components/Teachers'

function Home() {
  return (
    <div>
        <Hero/>
        <AboutUs/>
        <Programs/>
        <Events/>
        <Teachers/>
    </div>
  )
}

export default Home