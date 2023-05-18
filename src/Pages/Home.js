import React from 'react'
import "./Home.css"
import Header from '../components/Header'
import Background from '../components/Background'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from "../components/Projects"
import Footer from "..//components/Footer"
function Home() {
  return (
    <>
    <Header />
    <div className='container'>
    <Background />
    <Skills />  
    <Experience />
    <Projects />
    <Footer />
    </div>
    </>
  )
}

export default Home