"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import { Zap, Target, ShoppingCart, CreditCard, MessageSquare, Award, HelpCircle } from "lucide-react";

export default function LandingPage() {
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

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Formula 1 Teams Directory"
          description="Discover comprehensive information about all Formula 1 teams, their drivers, technical specifications, and racing history in one centralized platform"
          tag="Racing Excellence"
          tagIcon={Zap}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763644327626-8puxpdnw.jpg"
          imageAlt="Formula 1 racing cars on track"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={false}
          buttons={[
            { text: "Explore Teams", href: "teams" },
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}