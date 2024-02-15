import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const InfoCard = () => {
  return (
    <section className="container bg-white py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <Typography
                size="p"
                className="text-base font-semibold leading-7"
              >
                Lorem, ipsum.
              </Typography>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                The Art of Blogging
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat totam culpa provident!
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative">
                  <dt className="inline font-semibold text-gray-900">
                    Lorem, ipsum{" "}
                  </dt>
                  <dd className="inline">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem, adipisci neque. Voluptatum.
                  </dd>
                </div>
                <div className="relative">
                  <dt className="inline font-semibold text-gray-900">
                    Lorem, ipsum{" "}
                  </dt>
                  <dd className="inline">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptatibus officiis est aliquid!
                  </dd>
                </div>
                <div className="relative">
                  <dt className="inline font-semibold text-gray-900">
                    Lorem, ipsum{" "}
                  </dt>
                  <dd className="inline">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum blanditiis ea officiis?
                  </dd>
                </div>
              </dl>
            </div>
            <div className="mt-10 flex items-center gap-x-6">
              <Button asChild={true}>
                <Link
                  href="/"
                  className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Start for free
                </Link>
              </Button>

              <Button variant={"ghost"} asChild={true}>
                <Link
                  href="/"
                  className="text-sm font-semibold leading-6 text-gray-700"
                >
                  Schedule a demo
                  <span aria-hidden="true">→</span>
                </Link>
              </Button>
            </div>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjb21wdXRlcnxlbnwwfDB8fHwxNjkxODE2NjY3fDA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Product screenshot"
            className="w-full h-full object-cover rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0"
            width="1000"
            height="1000"
          />
        </div>
      </div>
    </section>
  );
};

export default InfoCard;
