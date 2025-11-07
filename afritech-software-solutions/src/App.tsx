import './index.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Services } from './components/Services/Services'
import Hero from './components/Hero/Hero'
import { About } from './pages/About'
import WhyUs from './components/Why Us/WhyUs'
import Contact from './pages/Contact'
import { useState } from 'react'
function App() {
  const [Dark,turnDark]=useState(false)
  return (
    <div className={Dark ?'dark min-h-screen':'min-h-screen'}>
      <Header dark={Dark} setDark={turnDark}/>
        <main  aria-roledescription='main'>
          <Hero/>
          <About/>
          <Services/>
          <WhyUs/>
          <Contact/>
        </main>
        
      <Footer/>
    </div>
  )
}

export default App
