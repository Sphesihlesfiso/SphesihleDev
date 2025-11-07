import { Award, TrendingUp, Users, Zap } from "lucide-react";
export default function WhyUs() {
     const benefits = [
    {
      icon: Users,
      title: "Experienced Team",
      description: "Multi-industry expertise with proven track record",
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Build for today, ready for tomorrow's growth",
    },
    {
      icon: Zap,
      title: "Agile Development",
      description: "Collaborative approach with rapid iterations",
    },
    {
      icon: Award,
      title: "Clean Architecture",
      description: "Performance-focused and maintainable code",
    },
  ];
  return (
    <section id="WhyUs" className="py-24 g-linear-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 g-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            Why Choose AfriTech?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title}
              className="text-center group hover:scale-105 transition-transform"
            >
              <div className="w-16 h-16 rounded-full g-linear-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-shadow">
                <benefit.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
