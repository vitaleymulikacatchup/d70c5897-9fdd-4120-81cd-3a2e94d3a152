"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import { ShoppingCart } from "lucide-react";

export default function ProductsPage() {
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
    </ThemeProvider>
  );
}