import React from 'react'
import Hero from '../Components/Hero/Hero'
import Navbar from '../Components/Navbar/Navbar'
import Featured from '../Components/Featured/Featured'

const Home = () => {
  return (
    <div> 
      <Navbar/>   
      <Hero/>
      <Featured/>
    </div>
  )
}

export default Home