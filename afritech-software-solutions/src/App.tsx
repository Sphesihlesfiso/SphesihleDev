import './index.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import Hero from './components/Hero/Hero'
function App() {
  
  return (
    <div className='min-h-screen'>
      <Header/>
        <main>
          <Hero/>
        </main>
      <Footer/>
    </div>
  )
}

export default App
