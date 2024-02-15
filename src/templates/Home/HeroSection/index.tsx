import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full relative overflow-hidden h-[600px] group">
      <div className="absolute z-[-1] inset-0 bg-cover bg-no-repeat brightness-50 bg-center group-hover:scale-105 transition-transform duration-100 bg-[url('https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"></div>
      <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
        <Typography size="h1" className="text-white md:text-left text-center">
          Discover the Best Affiliate Marketing Tips
        </Typography>
        <Typography size="h6" className="text-white md:text-left text-center">
          Learn how to maximize your earnings and build a successful affiliate
          business.
        </Typography>

        <div className="flex gap-2">
          <Button>Explore</Button>
          <Button variant={"outline"} className="bg-transparent text-white">
            Join
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
