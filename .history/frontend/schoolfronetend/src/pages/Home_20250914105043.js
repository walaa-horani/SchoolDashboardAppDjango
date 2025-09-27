import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Programs from '../components/Programs'
import Events from '../components/Events'

function Home() {
  return (
    <div>
        <Hero/>
        <AboutUs/>
        <Programs/>
        <Events/>
    </div>
  )
}

export default Home