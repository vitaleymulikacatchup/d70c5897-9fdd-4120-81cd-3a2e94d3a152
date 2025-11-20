"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import { Target } from "lucide-react";

export default function FeaturesPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="small"
      background="animatedAurora"
      cardStyle="glass-elevated"
      primaryButtonStyle="flat"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Teams", id: "teams" },
            { name: "Features", id: "features" },
            { name: "Products", id: "products" },
            { name: "Pricing", id: "pricing" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="F1 Teams Hub"
          button={{
            text: "Get Started",
            href: "https://formula1.com"
          }}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSeven
          title="Advanced F1 Analytics"
          description="Discover powerful features that provide deep insights into Formula 1 team performance and racing data"
          tag="Features"
          tagIcon={Target}
          textboxLayout="default"
          animationType="blur-reveal"
          features={[
            {
              id: 1,
              title: "Team Performance Analytics",
              description: "Real-time analysis of lap times, pit stop strategies, and championship standings with interactive data visualization",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763644332109-nt102j05.jpg",
              imageAlt: "F1 performance analytics dashboard"
            },
            {
              id: 2,
              title: "Driver Statistics Database",
              description: "Comprehensive driver profiles including career statistics, race history, and head-to-head comparisons",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763644333035-nw9csd9s.jpg",
              imageAlt: "F1 driver statistics interface"
            },
            {
              id: 3,
              title: "Technical Specifications",
              description: "Detailed car specifications, aerodynamic data, and engineering innovations for each team's vehicles",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763644334035-cwz3c6hy.jpg",
              imageAlt: "F1 technical specifications view"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}