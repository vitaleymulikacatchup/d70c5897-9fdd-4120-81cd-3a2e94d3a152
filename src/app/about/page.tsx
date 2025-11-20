"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import { MessageSquare, Award, HelpCircle } from "lucide-react";

export default function AboutPage() {
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
    </ThemeProvider>
  );
}