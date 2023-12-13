import React from 'react'
import Navbar from '../components/Navbar'
import Wrapper from '../assets/wrappers/MainLayout'
import HeroSection from '../components/HeroSection'

const PortfolioLayout = () => {
  return (
    <Wrapper>
      <Navbar/>
      <HeroSection/>
    </Wrapper>
  )
}

export default PortfolioLayout
