import './App.css'
import Header from './components/Header'
import Comp from './components/Comp'
import Intro from './components/Intro'
import About from './components/About'
import Skills from './components/Skills'
import Journey from './components/Journey'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { motion } from 'framer-motion'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (

    <motion.div initial="hidden" animate="show" className="App">

      {/* <Header /> */}
      <Intro />

      <Comp title="About" bgCol="linear-gradient(-45deg, #C02425, #F0CB35);" col="#fff" content={<About />} emphasised_text="Who am I?" />

      <Comp title="Skills" bgCol="#000000" col="#fff" content={<Skills />} emphasised_text="My Talents" />

      <Comp title="My Journey" bgCol="linear-gradient(-45deg, #FF4E50, #F9D423);" col="#fff" content={<Journey />} emphasised_text="How I became a Dev?" />

      <Work />

      <Contact />

      <Footer />

    </motion.div>

  );
}

export default App;