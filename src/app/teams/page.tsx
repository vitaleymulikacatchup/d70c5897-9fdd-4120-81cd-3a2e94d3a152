"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';

export default function TeamsPage() {
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

      <div id="about" data-section="about">
        <AboutPhoneTimeline
          tag="About F1 Hub"
          title="Your Ultimate F1 Resource"
          description="We provide the most comprehensive database of Formula 1 teams, delivering detailed insights into team performance, driver statistics, and technical innovations that shape the sport"
          phoneOne={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763644328569-yt8ygb1f.jpg",
            imageAlt: "F1 team profiles mobile view"
          }}
          phoneTwo={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763644329423-5pr2bw9v.jpg",
            imageAlt: "F1 statistics mobile view"
          }}
          textboxLayout="default"
          buttons={[
            { text: "View Teams", href: "teams" },
            { text: "Get Started", href: "https://formula1.com" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}