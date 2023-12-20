import React from 'react'
import Navbar from '../components/Navbar'
import Wrapper from '../assets/wrappers/MainLayout'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const PortfolioLayout = () => {
  return (
    <Wrapper>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </Wrapper>
  )
}

export default PortfolioLayout
