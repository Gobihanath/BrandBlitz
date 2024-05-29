import React from 'react'
import Hero from '../Components/Hero/Hero'
import Navbar from '../Components/Navbar/Navbar'
import Featured from '../Components/Featured/Featured'
import Container1 from '../Components/Container1/Container1'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <div> 
      <Navbar/>   
      <Hero/>
      <Featured/>
      <Container1/> 
      <Footer/>
    </div>
  )
}

export default Home