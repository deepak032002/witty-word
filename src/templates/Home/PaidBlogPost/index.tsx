import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import React from "react";

const PaidBlogPost = () => {
  return (
    <section className="mt-12 container w-full">
      <div className="flex flex-col items-center gap-y-4">
        <Typography size="p" className="font-semibold">
          Paid
        </Typography>
        <Typography size="h2">Informative and Engaging Blog</Typography>
        <Typography size="p">
          Explore our collection of informative and engaging blog posts.
        </Typography>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-6">
        {Array(3)
          .fill("")
          .map((_, key) => {
            return <BlogCard key={key} className="" variant="vertical" />;
          })}
      </div>

      <div className="text-center mt-4">
        <Button variant={"outline"} className="w-fit mt-6" size={"lg"}>
          View All
        </Button>
      </div>
    </section>
  );
};

export default PaidBlogPost;
