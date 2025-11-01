import React from "react";
import ServiceCard from "./ServiceCard";
import { ShieldIcon, UsersIcon, CarIcon, BuildingIcon, PlaneIcon, ClockIcon } from "./icons";

const serviceList = [
  {
    icon: <ShieldIcon />,
    title: "Executive Protection",
    description: "Close protection for CEOs, VIPs, and high-net-worth individuals. Our elite bodyguards provide discreet 24/7 security.",
    features: ["Personal Bodyguards", "Threat Assessment", "Security Planning"],
    delay: "0s",
  },
  {
    icon: <UsersIcon />,
    title: "VIP Security Teams",
    description: "Comprehensive security details for celebrities, dignitaries, and public figures requiring advanced protection protocols.",
    features: ["Multi-Agent Teams", "Event Security", "Crowd Management"],
    delay: "0.1s",
  },
  {
    icon: <CarIcon />,
    title: "Secure Transportation",
    description: "Armored vehicle services with trained drivers and security escorts for safe travel to any destination.",
    features: ["Armored Vehicles", "Secure Routes", "Emergency Response"],
    delay: "0.2s",
  },
  {
    icon: <BuildingIcon />,
    title: "Residential Security",
    description: "Complete home security solutions including surveillance, access control, and on-site security personnel.",
    features: ["24/7 Monitoring", "Access Control", "Security Personnel"],
    delay: "0.3s",
  },
  {
    icon: <PlaneIcon />,
    title: "Travel Security",
    description: "Global protection services for international travel, including advance security assessments and local support.",
    features: ["Global Coverage", "Travel Planning", "Local Support"],
    delay: "0.4s",
  },
  {
    icon: <ClockIcon />,
    title: "Event Security",
    description: "Comprehensive security management for private events, corporate functions, and high-profile gatherings.",
    features: ["Risk Assessment", "Venue Security", "Emergency Plans"],
    delay: "0.5s",
  },
];

const Services = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Our <span className="text-primary">Services</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Comprehensive security solutions tailored to your specific needs. From personal protection to large-scale event security, we deliver excellence in every engagement.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {serviceList.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;

