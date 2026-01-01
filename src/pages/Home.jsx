import React from 'react'
import { Header } from '../component/Header'
import Hero from '../component/Hero'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <div className='min-h-screen bg-black text-[#EDEFF4]'>
      <Header />
      <div>
        <Hero />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
