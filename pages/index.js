import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import About from '../components/About'
import ContactShort from '../components/ContactShort'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {
  const [dark, setDark] = useState(false)
  return (
    <div>
      <Head>
        <title>Kenneth | Junior Front End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/svg/ccchaos-gradient-squared.png" />
      </Head>

      
      <Navbar dark={dark} setDark={setDark} />
      <Main/>
      <About />
      <Skills />
      <Projects />
      <ContactShort />
      
      
    </div>
  )
}
