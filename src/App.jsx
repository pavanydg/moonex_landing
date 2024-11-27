import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './pages/Hero'
import AboutUs from './pages/AboutUs'
import Feature from './pages/Feature'
import FAQSection from './pages/Faqs'
import Footer from './pages/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='overflow-hidden'>
      <NavBar/>
      <Hero/>
      <AboutUs/>
      <Feature/>
      <FAQSection/>
      <Footer/>
    </div>
  )
}

export default App
