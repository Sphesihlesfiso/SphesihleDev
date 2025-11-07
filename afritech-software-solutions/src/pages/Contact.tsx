
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@afritech.co.za",
      href: "mailto:hello@afritech.co.za",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+27 63 813 3387",
      href: "tel:+27638133387",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with us",
      href: "https://linkedin.com/company/afritech-solutions",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View our work",
      href: "https://github.com/Sphesihlesfiso/SphesihleDev/tree/afritech-footer-fix/afritech-software-solutions",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 g-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Contact Us
            </h2>
            <p className="text-lg text-muted-foreground mb-0">
              Ready to bring your idea to life? Reach out to our team today and let's discuss your project.
            </p>
          </div>

          
              <h1 className="text-2xl text-center">Get In Touch</h1>
              <h2 className="text-center mb-4">
                We're here to help turn your vision into reality
              </h2>
            
              <div className="grid md:grid-cols-2 gap-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-lg border hover:border-primary/50 hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium group-hover:text-primary transition-colors">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button className="h-auto py-6 px-8 text-lg bg-accent text--accent-foreground rounded-md shadow-card transition-colors duration-300 :hover shadow-hover" >
                  <a href="mailto:hello@afritech.co.za">
                    Send us an email
                  </a>
                </button>
              </div>
           
        </div>
      </div>
    </section>
  );
};

export default Contact;
