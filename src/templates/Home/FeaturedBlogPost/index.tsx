import BlogCard from "@/components/BlogCard";
import Typography from "@/components/ui/typography";
import React from "react";

const FeaturedBlog = () => {
  return (
    <section className="w-full container pt-8">
      <div className="flex flex-col gap-y-4">
        <Typography size="p" className="font-semibold">
          Latest
        </Typography>
        <Typography size="h2">Discover the best Blogs</Typography>
        <Typography size="p">Stay updated with our top blog posts</Typography>
      </div>

      <div className="mt-12">
        <Typography size="h6" className="font-semibold mb-2">
          Featured blog posts
        </Typography>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 py-2">
          <BlogCard />
          <div className="grid grid-rows-3 gap-6">
            <BlogCard className="" variant="horizontal" />
            <BlogCard className="" variant="horizontal" />
            <BlogCard className="" variant="horizontal" />
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Typography size="h6" className="font-semibold mb-2">
          Latest Post
        </Typography>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {Array(6)
            .fill("")
            .map((_, key) => {
              return <BlogCard key={key} className="" variant="vertical" />;
            })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlog;
