"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function ContactPage() {
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

      <div id="footer" data-section="footer">
        <FooterBase
          brandName="F1 Teams Hub"
          copyrightText="© 2025 | F1 Teams Hub"
          columns={[
            {
              title: "Product",
              items: [
                { label: "Teams Database", href: "teams" },
                { label: "Analytics", href: "analytics" },
                { label: "Live Updates", href: "live" },
                { label: "API Access", href: "api" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Documentation", href: "docs" },
                { label: "Support", href: "support" },
                { label: "Community", href: "community" },
                { label: "Blog", href: "blog" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About", href: "about" },
                { label: "Contact", href: "contact" },
                { label: "Careers", href: "careers" },
                { label: "Press", href: "press" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}