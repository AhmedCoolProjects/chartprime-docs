import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";

const DATA = [
  {
    title: "Getting Started",
    icon: "launch.webp",
    description:
      "Learn about ChartPrime and the various platforms we are compatible with.",
    link: "/docs/category/getting-started",
  },
  {
    title: "Premium Toolkits Overview",
    icon: "overview.webp",
    description:
      "Comprehensive guides and details regarding our tools and features.",
    link: "/docs/category/premium-toolkits-overview",
  },

  {
    title: "Market Oracle Toolkit",
    icon: "trading.webp",
    description:
      "Innovative tools for early trend signals and chart simplification.",
    link: "/docs/category/market-oracle-toolkit",
  },
  {
    title: "ChartPrime Oscillators Toolkit",
    icon: "oscillator.webp",
    description: "Enhance momentum trading with two oscillator modes.",
    link: "/docs/category/chartprime-oscillators-toolkit",
  },
  {
    title: "Market Dynamics Pro Toolkit",
    icon: "picker.webp",
    description:
      "Streamlined indicators for pinpointing key market levels and patterns.",
    link: "/docs/category/market-dynamics-pro-toolkit",
  },
  {
    title: "Advanced Techniques",
    icon: "advanced.webp",
    description:
      "Unlock advanced signals and over 20 other top-rated indicators.",
    link: "/docs/category/advanced-techniques",
  },
];

function MainHomepage() {
  return (
    <main className="flex flex-col pb-16 items-center">
      <div className="grid gap-8 mt-16 sm:w-9/12 lg:mb-8 grid-cols-1 w-11/12 md:w-5/6 lg:w-5/6 md:grid-cols-2 lg:grid-cols-3">
        {DATA.map((item) => (
          <CardItem key={item.title} {...item} />
        ))}
        <div className="hidden lg:flex"></div>
        <CardItem
          title="FAQs"
          icon="faq.webp"
          description="Get answers to frequently asked questions."
          link="/"
          className="flex md:hidden lg:flex flex-col col-start-3"
        />
      </div>

      <CardItem
        title="FAQs"
        icon="faq.webp"
        description="Get answers to frequently asked questions."
        link="/"
        className="mx-4 lg:hidden md:flex flex-col hidden  md:w-[calc(37.5vw_-_1rem)]"
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
          "p-5 md:p-9 h-full cursor-pointer rounded-2xl border border-gray-300",
          "shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out  hover:shadow-purple-800 ",
          className,
          // animation for border on hover
          "hover:border-[#B739FE] transition-colors duration-300 ease-in-out"
        )}>
        <div className="flex  mb-4 flex-row items-center ">
          <img
            src={`/img/${icon}`}
            className="lg:h-6 h-5  object-contain mr-3"
            alt={icon}
          />
          <h1 className="font-bold md:whitespace-normal whitespace-nowrap text-[#B739FE] text-xl">
            {title}
          </h1>
        </div>
        <p>{description}</p>
      </div>
    </Link>
  );
}
