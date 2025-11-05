import heroImage from './../../assets/hero-image.jpg';




export default function Hero() {
  return (
    <div className="flex flex-col py-8  text-center min-h-screen " style={{backgroundImage: `url(${heroImage})`,backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',}}>
        <h1 className="text-center mb-8 mt-4 text-8xl  "style={{color:'white'}}>AfriTech Software Solutions</h1>
        <p className="mb-8 text-4xl leading-relaxed" style={{color:'white'}}>We turn ideas into powerful, reliable web applications. Based in Cape <br/>Town, our team builds full-stack systems for businesses of all sizes,<br/> delivering fast, scalable, and production-ready software.
        </p>
        <p className="text-4xl mb-10" style={{color:'white'}}>Looking to modernize your business with a custom web app? Let's build it together.
        </p>
       <button className="py-4 px-6 text-lg bg-amber-400 hover:bg-amber-500 transition-colors  w-fit mx-auto">
            Let's Talk
        </button>
    </div>
  )
}
