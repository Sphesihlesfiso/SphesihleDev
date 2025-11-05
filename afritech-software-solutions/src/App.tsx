import './index.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import Hero from './components/Hero/Hero'
import { useState } from 'react'
function App() {
  const [darkmode,setDarkmode]=useState(false)
  return (
    <div className='min-h-screen'>
      <Header dark={darkmode} setDark={setDarkmode} />
        <main>
          <Hero/>
           <div className="text-3xl font-bold text-red-500">
      Tailwind works!
    </div>
        </main>
      <Footer/>
    </div>
  )
}

export default App
