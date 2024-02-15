import Footer from "@/components/Footer";
import FeaturedBlog from "@/templates/Home/FeaturedBlogPost";
import HeroSection from "@/templates/Home/HeroSection";
import InfoCard from "@/templates/Home/InfoCard";
import InsightSection from "@/templates/Home/InsightSection";
import PaidBlogPost from "@/templates/Home/PaidBlogPost";
import Testimonials from "@/templates/Home/Testimonials";
import React from "react";

const HomePage = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedBlog />
      <PaidBlogPost />
      <InsightSection />
      <InfoCard />
      <Testimonials />
    </main>
  );
};

export default HomePage;
