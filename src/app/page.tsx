"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Zap, Target, ShoppingCart, CreditCard, MessageSquare, Award, HelpCircle, Users, Sparkles, Trophy } from "lucide-react";

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
          buttons={[
            { text: "View Teams", href: "teams" },
            { text: "Get Started", href: "https://formula1.com" }
          ]}
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

      <div id="products" data-section="products">
        <ProductCardTwo
          title="F1 Team Products"
          description="Official merchandise and collectibles from your favorite Formula 1 teams"
          tag="Shop"
          tagIcon={ShoppingCart}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "1",
              brand: "Red Bull Racing",
              name: "Official Team Cap",
              price: "$45.00",
              rating: 5,
              reviewCount: "1.2k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763644334880-05sr9kz8.jpg",
              imageAlt: "Red Bull Racing team cap"
            },
            {
              id: "2",
              brand: "Mercedes F1",
              name: "Die-Cast Model Car",
              price: "$89.99",
              rating: 5,
              reviewCount: "890",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763644336292-tf6rydb9.jpg",
              imageAlt: "Mercedes F1 model car"
            },
            {
              id: "3",
              brand: "Ferrari",
              name: "Replica Racing Helmet",
              price: "$299.00",
              rating: 4,
              reviewCount: "456",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763644337185-61844cam.jpg",
              imageAlt: "Ferrari replica helmet"
            }
          ]}
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

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What F1 Community Says"
          description="Real feedback from racing enthusiasts, journalists, and industry professionals"
          tag="Testimonials"
          tagIcon={MessageSquare}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Marcus Johnson",
              role: "F1 Journalist",
              testimonial: "The most comprehensive F1 database I've ever used. The analytics and historical data are invaluable for my reporting.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763644338325-hvkkfhph.jpg",
              imageAlt: "Marcus Johnson portrait"
            },
            {
              id: "2",
              name: "Sarah Chen",
              role: "Racing Engineer",
              testimonial: "Incredible technical insights and performance data. This platform has become essential for understanding team strategies.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763644339190-xd7wefdu.jpg",
              imageAlt: "Sarah Chen portrait"
            },
            {
              id: "3",
              name: "Alessandro Rossi",
              role: "F1 Enthusiast",
              testimonial: "Finally, a platform that brings all F1 team information together in one place. The user experience is outstanding.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763644340040-r78kufit.jpg",
              imageAlt: "Alessandro Rossi portrait"
            },
            {
              id: "4",
              name: "Emma Williams",
              role: "Motorsport Analyst",
              testimonial: "The depth of data and analytics available here is unmatched. It's transformed how I analyze race performance.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763644341116-l5rog0dg.jpg",
              imageAlt: "Emma Williams portrait"
            },
            {
              id: "5",
              name: "David Martinez",
              role: "Team Manager",
              testimonial: "Professional-grade tools and insights that help us understand competitive dynamics across all teams.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763644342192-i5wv7kuf.jpg",
              imageAlt: "David Martinez portrait"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by F1 Teams"
          description="Leading Formula 1 teams and organizations rely on our platform for comprehensive racing insights"
          tag="Partners"
          tagIcon={Award}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763644343352-8iymj1rw.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763644344515-xljba1jb.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763644345564-6m9k9zr7.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763644346544-wqdf3coq.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763644347398-0r4j7aq1.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763644348318-3yrsa616.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763644349193-wehhonfc.jpg"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our F1 teams database and features"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "How often is the F1 team data updated?",
              content: "Our database is updated in real-time during race weekends and within 24 hours for all other team announcements, driver changes, and technical updates."
            },
            {
              id: "2",
              title: "Can I access historical F1 team data?",
              content: "Yes, our platform includes comprehensive historical data dating back to 1950, covering all teams, drivers, and championship results throughout Formula 1 history."
            },
            {
              id: "3",
              title: "Is there a mobile app available?",
              content: "Currently, we offer a responsive web platform optimized for mobile devices. A dedicated mobile app is in development and will be released in 2025."
            },
            {
              id: "4",
              title: "What payment methods do you accept?",
              content: "We accept all major credit cards, PayPal, and bank transfers for premium subscriptions. All transactions are securely processed with 256-bit SSL encryption."
            },
            {
              id: "5",
              title: "Do you offer team or corporate plans?",
              content: "Yes, we offer custom enterprise plans for motorsport organizations, media companies, and educational institutions with special pricing and additional features."
            },
            {
              id: "6",
              title: "Can I export data for analysis?",
              content: "Premium and Enterprise subscribers can export data in various formats including CSV, JSON, and PDF reports for external analysis and presentation purposes."
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
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