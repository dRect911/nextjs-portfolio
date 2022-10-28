import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import About from '../components/About'
import ContactShort from '../components/ContactShort'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import ccchaos from '../public/ccchaos-gradient.png'

export default function Home() {
  const [dark, setDark] = useState(false)
  return (
    <div>
      <Head>
        <title>Kenneth | Web Developer</title>
        {/* Open Graph properties */}
        {/* https://i.ibb.co/F6LymfN/preview-light.png
https://i.ibb.co/LztK64V/preview-raw.png */}
        <meta property="og:site_name" content="Kenneth PRINCE AGBODJAN" />
        <meta property="og:title" content="Kenneth | Web Developer" />
        <meta name="description" content="I'm a web developer specializing in building exceptional digital experiences. " />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="http://nextjs-portfolio-drect911.vercel.app/" />
        <meta property="og:image" content="https://i.ibb.co/F6LymfN/preview-light.png" />
        <meta property="og:image:secure_url" content="https://i.ibb.co/F6LymfN/preview-light.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="225" />
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
