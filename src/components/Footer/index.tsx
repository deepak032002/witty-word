import React from "react";
import Typography from "../ui/typography";
import { Raleway } from "next/font/google";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const raleway = Raleway({ subsets: ["latin"] });
const Footer = () => {
  return (
    <footer className="mt-12 container">
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-4">
        <div className="flex flex-col md:items-start items-center">
          <Typography className={`${raleway.className}`} size="h4">
            Witty Word
          </Typography>

          <div className="flex gap-6 md:mt-8 mt-2">
            <Typography className={`font-medium`} size="p">
              About Us
            </Typography>
            <Typography className={`font-medium`} size="p">
              Contact Us
            </Typography>
            <Typography className={`font-medium`} size="p">
              Support
            </Typography>
            <Typography className={`font-medium`} size="p">
              Blog
            </Typography>
          </div>
        </div>
        <div className="flex flex-col md:items-end items-center">
          <Typography className={``} size="h6">
            Subscribe
          </Typography>
          <div className="flex md:flex-row flex-col gap-2 md:justify-end items-center md:w-4/5 w-full mt-2">
            <Input className="focus-visible:ring-0 focus-visible:ring-offset-0 md:w-1/2" />
            <Button>Subscribe</Button>
          </div>
          <Typography className={`mt-2`} size="p">
            By subscribing, you agree to our Privacy Policy.
          </Typography>
        </div>
      </div>
      <hr className="my-8" />
      <div className="grid md:grid-cols-2 grid-cols-1 place-items-center md:place-items-stretch md:gap-0 gap-4 mb-8">
        <div className="flex gap-6">
          <Typography className={`font-medium`} size="p">
            Privacy Policy
          </Typography>
          <Typography className={`font-medium`} size="p">
            Terms & Conditions
          </Typography>
          <Typography className={`font-medium`} size="p">
            Cookie Policy
          </Typography>
        </div>
        <div className="md:text-right">
          <Typography size="p">© 2023 Relume. All rights reserved.</Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
