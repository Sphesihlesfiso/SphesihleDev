import React from "react";

const ServiceCard = ({ icon, title, description, features, delay }) => {
  return (
    <div
      className="rounded-lg border bg-card text-card-foreground shadow-sm group hover:border-primary transition-all duration-300 hover:shadow-[0_10px_40px_-10px_hsl(45_100%51%/0.2)] animate-scale-in"
      style={{ animationDelay: delay }}
    >
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="font-semibold tracking-tight text-xl mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {features && (
        <div className="p-6 pt-0">
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
