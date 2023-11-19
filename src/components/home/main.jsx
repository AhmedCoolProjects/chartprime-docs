import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";

const DATA = [
  {
    title: "Mobile App",
    icon: "cellphone-electronics-handphone-svgrepo-com.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit.",
    link: "/mobile-app",
  },

  {
    title: "Web App",
    icon: "laptop-minimalistic-svgrepo-com.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit.",
    link: "/web-app",
  },
  {
    title: "Packages & Subscriptions",
    icon: "package-svgrepo-com.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit.",
    link: "/packages-subscriptions",
  },
  {
    title: "Troubleshooting and FAQs",
    icon: "faq-svgrepo-com.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit.",
    link: "/troubleshooting-faqs",
  },
  {
    title: "Contact & Support",
    icon: "support-help-headset-svgrepo-com.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit.",
    link: "/contact-support",
  },
  {
    title: "Glossary",
    icon: "glossary-svgrepo-com.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit.",
    link: "/glossary",
  },
];

function MainHomepage() {
  return (
    <main className="flex flex-col pb-16 items-center">
      <div className="grid gap-8 mt-16 sm:w-9/12 lg:mb-8 grid-cols-1 w-11/12 md:w-5/6 lg:w-5/6 md:grid-cols-2 lg:grid-cols-3">
        {DATA.map((item) => (
          <CardItem key={item.title} {...item} />
        ))}
      </div>
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
          "p-5 md:p-6 h-full cursor-pointer rounded-2xl border border-gray-300",
          "shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out  hover:shadow-[#627DBE] ",
          className,
          // animation for border on hover
          "hover:border-[#627DBE] transition-colors duration-300 ease-in-out"
        )}>
        <img
          src={`/img/${icon}`}
          className="lg:h-8 h-5 object-contain"
          alt={icon}
        />
        <div className="flex  flex-row items-center ">
          <h1 className="font-bold md:whitespace-normal whitespace-nowrap text-[#627DBE] text-xl">
            {title}
          </h1>
        </div>
        <p>{description}</p>
      </div>
    </Link>
  );
}
