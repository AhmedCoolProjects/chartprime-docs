import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";

const DATA = [
  {
    title: "Getting Started",
    icon: "launch.webp",
    description:
      "Learn about ChartPrime and the various platforms we are compatible with.",
    link: "",
  },
  {
    title: "Premium Toolkits Overview",
    icon: "overview.webp",
    description:
      "Comprehensive guides and details regarding our tools and features.",
    link: "",
  },

  {
    title: "Market Oracle Toolkit",
    icon: "trading.webp",
    description:
      "Innovative tools for early trend signals and chart simplification.",
    link: "",
  },
  {
    title: "ChartPrime Oscillators Toolkit",
    icon: "oscillator.webp",
    description:
      " Enhance momentum trading with two oscillator modes for early shift detection and added confluence.",
    link: "",
  },
  {
    title: "Market Dynamics Pro Toolkit",
    icon: "picker.webp",
    description:
      "Streamlined indicators for pinpointing key market levels and patterns.",
    link: "",
  },
  {
    title: "Advanced Techniques",
    icon: "advanced.webp",
    description:
      "Unlock advanced signals and over 20 other top-rated indicators based on community input.",
    link: "",
  },
];

function MainHomepage() {
  return (
    <main className="flex flex-col pb-16 items-center">
      <div className="grid gap-8 mt-16 mb-8 grid-cols-1 w-2/3 md:grid-cols-2">
        {DATA.map((item) => (
          <CardItem key={item.title} {...item} />
        ))}
      </div>
      <CardItem
        title="FAQs"
        icon="faq.webp"
        description="Get answers to frequently asked questions."
        link="/"
        className="w-[calc(33vw_-_1rem)]"
      />
    </main>
  );
}

export default MainHomepage;

function CardItem({ title, icon, description, link, className = "" }) {
  return (
    <Link
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
      to={link}>
      <div
        className={clsx(
          "p-9 cursor-pointer rounded-2xl border border-gray-300",
          "shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out",
          className,
          // animation for border on hover
          "hover:border-[#B739FE] transition-colors duration-300 ease-in-out"
        )}>
        <div className="flex  mb-4 flex-row items-center ">
          <img
            src={`/img/${icon}`}
            className="h-10  object-contain mr-3"
            alt={icon}
          />
          <h1 className="font-bold text-[#B739FE] text-xl">{title}</h1>
        </div>
        <p>{description}</p>
      </div>
    </Link>
  );
}
