import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import Typography from "../ui/typography";
import moment from "moment";

interface BlogCardProps {
  className?: string;
  variant?: "horizontal" | "vertical";
}
const BlogCard: React.FC<BlogCardProps> = ({
  className = "",
  variant = "vertical",
}) => {
  const isHorizontal = variant === "horizontal";

  return (
    <Card
      className={`border-0 overflow-hidden h-full shadow group flex ${
        isHorizontal ? "flex-row" : "flex-col"
      } ${className}`}
    >
      <CardHeader
        className={`p-0 ${
          isHorizontal ? "h-auto w-36" : "h-64 w-auto"
        } overflow-hidden`}
      >
        <Image
          src={
            "https://plus.unsplash.com/premium_photo-1661414415246-3e502e2fb241?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFya2V0aW5nfGVufDB8fDB8fHww"
          }
          alt="blog"
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-100"
          width={300}
          height={300}
        />
      </CardHeader>
      <div className="flex flex-col justify-end flex-1">
        <CardContent>
          <Typography className="mt-2 font-medium text-xs" size="p">
            All
          </Typography>

          <Typography className="" size="h3">
            The Art of Blogging
          </Typography>

          <Typography
            className={`text-sm my-2 ${isHorizontal ? "hidden" : ""}`}
            size="p"
          >
            Learn the secrets to successful blogging and engage your audience.
          </Typography>
        </CardContent>
        <CardFooter>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300"></div>
            <div className="flex flex-col">
              <Typography className="text-sm font-semibold" size="p">
                John Doe
              </Typography>
              <Typography className="flex gap-2 items-center" size="p">
                {moment(new Date()).format("DD MMM yyyy")}
                <span className="h-1 w-1 block rounded-full bg-black"></span>5
                min read
              </Typography>
            </div>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
};

export default BlogCard;
