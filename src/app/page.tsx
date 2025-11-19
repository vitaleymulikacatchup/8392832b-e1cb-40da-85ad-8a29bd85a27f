"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroBillboardCarousel from "@/components/sections/hero/HeroBillboardCarousel";
import SplitAboutMetric from "@/components/sections/about/SplitAboutMetric";
import FeatureCardThree from "@/components/sections/feature/featureCardThree/FeatureCardThree";
import TestimonialCardFour from "@/components/sections/testimonial/TestimonialCardFour";
import TeamCardThree from "@/components/sections/team/TeamCardThree";
import PricingCardThree from "@/components/sections/pricing/PricingCardThree";
import FaqSplitMedia from "@/components/sections/faq/FaqSplitMedia";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";
import { Calendar, Globe, Linkedin, Sparkles } from "lucide-react";

export default function AestheticMedicalCenter() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="small"
      sizing="large"
      background="aurora"
      cardStyle="layered-gradient"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763566543658-g0edvckh.jpg"
          logoAlt="Aesthetic Medical Center"
          brandName="AMC"
          navItems={[
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Team", id: "team" },
            { name: "Pricing", id: "pricing" },
            { name: "Testimonials", id: "testimonials" },
          ]}
          button={{ text: "Book Consultation", href: "contact" }}
          buttonClassName="px-4 py-2 rounded-sharp"
          buttonTextClassName="font-semibold text-sm"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Your Transformation Awaits"
          description="Advanced aesthetic procedures delivered with precision, artistry, and compassionate care. See real results from real patients."
          tag="Cosmetic Excellence"
          buttons={[
            { text: "Schedule Consultation", href: "contact" },
            { text: "View Our Work", href: "services" },
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763566545476-fx0aihtv.jpg",
              imageAlt: "Facial rejuvenation transformation",
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763566547111-r126wg3g.jpg",
              imageAlt: "Cosmetic enhancement results",
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763566548257-p38uwifo.jpg",
              imageAlt: "Aesthetic procedure outcomes",
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763566549393-anil1hwd.jpg",
              imageAlt: "Professional cosmetic results",
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763566550599-eg0puog8.jpg",
              imageAlt: "Medical beauty enhancement",
            },
          ]}
          containerClassName="relative z-10"
          titleClassName="text-5xl md:text-7xl font-bold leading-tight"
          descriptionClassName="text-lg md:text-xl max-w-2xl mx-auto"
          buttonContainerClassName="flex gap-4 justify-center flex-wrap mt-8"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAboutMetric
          title="Trusted Aesthetic Excellence"
          description={[
            "With over two decades of combined surgical expertise, our team of board-certified plastic surgeons specializes in creating natural-looking, beautiful results. We use cutting-edge technology and proven techniques to help you look and feel your best. Every procedure is customized to your unique goals and anatomy.",
          ]}
          metrics={[
            { label: "Years of Experience", value: "20+" },
            { label: "Satisfied Patients", value: "5,000+" },
          ]}
          showBorder={false}
          titleClassName="text-5xl md:text-6xl font-bold"
          descriptionClassName="text-lg leading-relaxed"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardThree
          title="Our Signature Procedures"
          description="We offer comprehensive aesthetic solutions tailored to enhance your natural beauty and boost your confidence."
          tag="Services"
          features={[
            {
              id: "01",
              title: "Botox & Dysport",
              description: "Smooth dynamic wrinkles and prevent new lines with FDA-approved neuromodulators. Results in 3-7 days.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763566552152-hhlzs7ji.jpg",
              imageAlt: "Botox injection procedure",
            },
            {
              id: "02",
              title: "Dermal Fillers",
              description: "Restore volume and enhance facial features with premium dermal fillers. Natural results with no downtime.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763566553688-mii09zc7.jpg",
              imageAlt: "Dermal filler injection treatment",
            },
            {
              id: "03",
              title: "Facelifts",
              description: "Achieve dramatic facial rejuvenation with our advanced facelift techniques. Turn back the clock naturally.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763566554887-elmg2cp3.jpg",
              imageAlt: "Facelift surgery results",
            },
            {
              id: "04",
              title: "Rhinoplasty",
              description: "Reshape and refine your nose with precision. Balance and harmony for your entire face.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763566556563-pg95szjj.jpg",
              imageAlt: "Rhinoplasty nose surgery results",
            },
          ]}
          textboxLayout="default"
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          containerClassName="py-16"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="Real Results from Real Patients"
          description="Hear directly from our satisfied patients about their transformative experiences and beautiful outcomes."
          tag="Success Stories"
          textboxLayout="default"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Executive",
              company: "Finance Sector",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763566557951-g73hgclb.jpg",
              imageAlt: "Sarah Mitchell testimonial",
            },
            {
              id: "2",
              name: "Jessica Chen",
              role: "Marketing Director",
              company: "Tech Company",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763566559450-8zkere5h.jpg",
              imageAlt: "Jessica Chen testimonial",
            },
            {
              id: "3",
              name: "Michael Torres",
              role: "Entrepreneur",
              company: "Business Owner",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763566561177-k9mvjvbf.jpg",
              imageAlt: "Michael Torres testimonial",
            },
            {
              id: "4",
              name: "Amanda Richardson",
              role: "Medical Professional",
              company: "Healthcare",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763566562640-vz7oed98.jpg",
              imageAlt: "Amanda Richardson testimonial",
            },
          ]}
          containerClassName="py-16"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree
          title="Meet Our Surgeons"
          description="Board-certified plastic surgeons with extensive training and a passion for aesthetic excellence."
          tag="Expert Team"
          textboxLayout="default"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Dr. James Anderson",
              role: "Chief Surgeon",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763566563894-pbotebpk.jpg",
              imageAlt: "Dr. James Anderson",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Globe, url: "https://example.com" },
              ],
            },
            {
              id: "2",
              name: "Dr. Patricia Lee",
              role: "Facial Surgery Specialist",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763566565284-kmyzs00t.jpg",
              imageAlt: "Dr. Patricia Lee",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Globe, url: "https://example.com" },
              ],
            },
            {
              id: "3",
              name: "Dr. Robert Kim",
              role: "Reconstructive Surgeon",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763566566873-mm0ekgag.jpg",
              imageAlt: "Dr. Robert Kim",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Globe, url: "https://example.com" },
              ],
            },
          ]}
          containerClassName="py-16"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Procedure Pricing"
          description="Transparent pricing for our most popular procedures. Schedule a consultation for personalized quotes."
          tag="Investment"
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "botox",
              price: "$12-15",
              name: "Botox (per unit)",
              badge: "Popular",
              badgeIcon: Sparkles,
              buttons: [
                { text: "Learn More", href: "contact" },
                { text: "Book Now", href: "contact" },
              ],
              features: [
                "Results in 3-7 days",
                "Lasts 3-4 months",
                "No downtime",
                "Natural-looking results",
              ],
            },
            {
              id: "fillers",
              price: "$600-800",
              name: "Dermal Fillers (per syringe)",
              buttons: [
                { text: "Learn More", href: "contact" },
                { text: "Book Now", href: "contact" },
              ],
              features: [
                "Immediate results",
                "12-18 month duration",
                "Minimal downtime",
                "Customizable volumes",
              ],
            },
            {
              id: "facelift",
              price: "$8,000-12,000",
              name: "Facelift",
              buttons: [
                { text: "Learn More", href: "contact" },
                { text: "Book Now", href: "contact" },
              ],
              features: [
                "Dramatic rejuvenation",
                "Results last 10+ years",
                "Comprehensive approach",
                "Custom to your anatomy",
              ],
            },
          ]}
          containerClassName="py-16"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Get answers to common questions about our procedures, recovery, and patient care."
          tag="Patient Info"
          textboxLayout="default"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763566569513-rza4f9c4.jpg"
          imageAlt="Modern aesthetic clinic interior"
          mediaPosition="right"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "Is the procedure painful?",
              content: "Most procedures are performed with local anesthesia and minimal discomfort. We use advanced numbing techniques to ensure your comfort throughout the procedure.",
            },
            {
              id: "2",
              title: "What is the recovery time?",
              content: "Recovery varies by procedure. Injectables have minimal downtime (1-2 days), while surgical procedures may require 1-2 weeks of rest. We provide detailed post-care instructions.",
            },
            {
              id: "3",
              title: "Are results permanent?",
              content: "Results vary by procedure. Injectables typically last 3-4 months, fillers 12-18 months, and surgical procedures can provide long-lasting results of 10+ years.",
            },
            {
              id: "4",
              title: "What qualifications do your surgeons have?",
              content: "All our surgeons are board-certified by the American Board of Plastic Surgery with extensive training and years of clinical experience.",
            },
            {
              id: "5",
              title: "How do I schedule a consultation?",
              content: "You can book a consultation online, call our office, or fill out our contact form. Initial consultations are complimentary and give you a chance to discuss your goals with our team.",
            },
          ]}
          containerClassName="py-16"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          tagIcon={Calendar}
          title="Schedule Your Consultation Today"
          description="Take the first step toward your aesthetic goals. Our team is ready to discuss your vision and create a personalized treatment plan."
          inputPlaceholder="Your email address"
          buttonText="Schedule Consultation"
          termsText="We respect your privacy. Your consultation request will be kept confidential."
          containerClassName="py-16"
          titleClassName="text-4xl md:text-5xl font-bold"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Aesthetic Medical Center"
          columns={[
            {
              items: [
                { label: "Services", href: "services" },
                { label: "Pricing", href: "pricing" },
                { label: "Team", href: "team" },
              ],
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Testimonials", href: "testimonials" },
                { label: "FAQ", href: "faq" },
              ],
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Schedule", href: "contact" },
                { label: "Blog", href: "#" },
              ],
            },
          ]}
          containerClassName="bg-primary-cta text-secondary-cta py-12"
        />
      </div>
    </ThemeProvider>
  );
}
