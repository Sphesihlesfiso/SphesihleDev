
import './App.css';
import About from './Pages/About/About';
import Header from './Pages/Header/Header';
import Hero from './Pages/Hero/Hero';
import Services from './Pages/Services/Services';

//Must make app have white and dark mode.
function App() {
  return (
    <div className="App">
      
       <Header/>
       <Hero/>
       <About/>
       <Services/>
           
    </div>
  );
}

export default App;
