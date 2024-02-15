import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Typography from "@/components/ui/typography";
import React from "react";

const Testimonials = () => {
  return (
    <section className="w-full container my-20">
      <Carousel className="w-full">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1 text-center w-1/2 mx-auto">
                <Typography size="h6">
                  Our blog has been a game-changer for me. I&apos;ve learned so
                  much and it has helped me increase my affiliate earnings
                  significantly.
                </Typography>

                <div className="flex flex-col gap-1 mt-4 items-center justify-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <Typography className="font-semibold" size="p">
                    John Doe
                  </Typography>
                  <Typography size="p">Marketing Manager, ABC Corp</Typography>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </section>
  );
};

export default Testimonials;
