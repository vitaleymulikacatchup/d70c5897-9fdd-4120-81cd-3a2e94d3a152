"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import { CreditCard, Sparkles, Trophy, Users } from "lucide-react";

export default function PricingPage() {
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

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="F1 Hub Access Plans"
          description="Choose the perfect plan to access Formula 1 team data and insights"
          tag="Pricing"
          tagIcon={CreditCard}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "basic",
              badge: "Basic",
              badgeIcon: Users,
              price: "Free",
              subtitle: "Perfect for casual F1 fans",
              features: [
                "Basic team information",
                "Current season standings",
                "Race calendar access",
                "Community forum"
              ]
            },
            {
              id: "pro",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$9.99/mo",
              subtitle: "Ideal for racing enthusiasts",
              features: [
                "Advanced analytics dashboard",
                "Historical race data",
                "Driver comparison tools",
                "Live race updates",
                "Premium support"
              ]
            },
            {
              id: "enterprise",
              badge: "Professional",
              badgeIcon: Trophy,
              price: "$29.99/mo",
              subtitle: "For motorsport professionals",
              features: [
                "Complete telemetry data",
                "API access",
                "Custom reports",
                "Team collaboration tools",
                "Priority support",
                "Export capabilities"
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}