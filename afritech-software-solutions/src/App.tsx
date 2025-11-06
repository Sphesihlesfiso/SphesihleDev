import './index.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import Hero from './components/Hero/Hero'
import { useState } from 'react'
function App() {
  const [Dark,turnDark]=useState(false)
  return (
    <div className={Dark ?'dark min-h-screen':'min-h-screen'}>
      <Header dark={Dark} setDark={turnDark}/>
        <main aria-roledescription='main'>
          <Hero/>
          
        </main>
      <Footer/>
    </div>
  )
}

export default App
