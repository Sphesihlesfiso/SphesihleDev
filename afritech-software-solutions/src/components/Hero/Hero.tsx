import heroImage from './../../assets/hero-image.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex justify-center items-center" style={{backgroundImage: `url(${heroImage})`,
    
    backgroundSize:'cover',
    backgroundPosition:"center"
    }}>
      <div className='relative z-10 py-32 px-4 m-0 text-center'>
        <h1 className="mb-6 text-primary-foreground  animate-fade-in font-bold text-5xl  md:text-6xl lg:text-7xl    ">AfriTech Software Solutions</h1>
        <p className="mb-8 text-xl max-w-3xl text-primary-foreground leading-relaxed bg-background-90 md:2xl  mx-auto">We turn ideas into powerful, reliable web applications. Based in Cape <br/>Town, our team builds full-stack systems for businesses of all sizes,<br/> delivering fast, scalable, and production-ready software.</p>
        <p className="text-lg text-primary-foreground mb-10 bg-background-80 md:text-xl" >Looking to modernize your business with a custom web app? Let's build it together.</p>
          <button className="h-auto py-6 px-8 text-lg bg-accent text--accent-foreground rounded-md shadow-card transition-colors duration-300 :hover shadow-hover ">Let's Talk</button>
      </div>
    </section>
  )
}
