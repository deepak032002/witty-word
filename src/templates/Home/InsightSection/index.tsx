import { Card, CardHeader } from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import React from "react";
import InsightCard from "./InsightCard";

const InsightSection = () => {
  return (
    <section className="w-full container mt-12">
      <div className="flex flex-col items-center gap-y-4">
        <Typography size="p" className="font-semibold">
          Discover
        </Typography>
        <Typography size="h2">Uncover the Best Insights</Typography>
        <Typography size="p">
          Stay Updated with Product Reviews and Tutorials
        </Typography>
      </div>
      <div className="mt-12">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {Array(3)
            .fill("")
            .map((_, key) => {
              return <InsightCard key={key} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default InsightSection;
