"use client";
import { HeroSection } from "./components/HeroSection";
import { NavbarComp } from "./components/Navbar";
import ServicesCards from "./components/OurService";
import { Timeline } from "./components/ui/timeline";
const data = [
  {
    title: "2025 - Present",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Driven by his passion for design, Omi knew he couldn't build his
          vision alone. He joined forces with three brilliant minds,
          transforming a solo dream into a shared reality. Together, Omi, Izza,
          Joko, and Jeny—each a master in their own right—established UIStellar
          Studio as an independent entity. Their collective commitment was
          simple yet profound: to create exceptional UI/UX and branding
          solutions. With a unified purpose and a combined talent for empowering
          brilliant ideas, they are committed to growing UIStellar Studio and
          continuing to inspire.{" "}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://assets.aceternity.com/templates/startup-1.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/templates/startup-2.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Continuing his passion as a solo founder, Omi officially established
          UIStellar Studio as an independent entity. With a vision to empower
          brilliant ideas through stunning UI/UX design and branding, UIStellar
          Studio continues to grow and inspire
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://assets.aceternity.com/templates/startup-1.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/templates/startup-2.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/templates/startup-3.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/templates/startup-4.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Early 2023",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Omi joined a technopreneurship program at his university and
          co-founded PT. Mudapedia Digital Indonesia with his friends. During
          this time, UIStellar Studio was born as one of Mudapedia's business
          lines, marking the first milestone in turning ideas into impactful
          design.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://assets.aceternity.com/pro/hero-sections.png"
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/features-section.png"
            alt="feature template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/pro/bento-grids.png"
            alt="bento template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/cards.png"
            alt="cards template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          After working at several companies, Omi decided to start his journey
          as a freelance UI/UX designer. He served dozens of clients across
          multiple countries, gaining valuable experience and expanding his
          global perspective.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://assets.aceternity.com/pro/hero-sections.png"
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/features-section.png"
            alt="feature template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/pro/bento-grids.png"
            alt="bento template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/cards.png"
            alt="cards template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarComp />
      <HeroSection />
      <ServicesCards />
      {/* Main Content Section */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Check the navbar at the top of the container
          </h1>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            For demo purpose we have kept the position as{" "}
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">
              Sticky
            </span>
            . Keep in mind that this component is{" "}
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">
              fixed
            </span>{" "}
            and will not move when scrolling.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {[
            {
              id: 1,
              title: "The",
              width: "lg:col-span-1",
              height: "h-48 sm:h-56 lg:h-60",
              bg: "bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900",
              border: "border border-neutral-200 dark:border-neutral-700",
            },
            {
              id: 2,
              title: "First",
              width: "sm:col-span-2 lg:col-span-2",
              height: "h-48 sm:h-56 lg:h-60",
              bg: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30",
              border: "border border-blue-200 dark:border-blue-700/50",
            },
            {
              id: 3,
              title: "Rule",
              width: "lg:col-span-1",
              height: "h-48 sm:h-56 lg:h-60",
              bg: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30",
              border: "border border-purple-200 dark:border-purple-700/50",
            },
            {
              id: 4,
              title: "Of",
              width: "sm:col-span-2 lg:col-span-3",
              height: "h-48 sm:h-56 lg:h-60",
              bg: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30",
              border: "border border-green-200 dark:border-green-700/50",
            },
            {
              id: 5,
              title: "Fight",
              width: "lg:col-span-1",
              height: "h-48 sm:h-56 lg:h-60",
              bg: "bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/30",
              border: "border border-red-200 dark:border-red-700/50",
            },
            {
              id: 6,
              title: "Club",
              width: "sm:col-span-2 lg:col-span-2",
              height: "h-48 sm:h-56 lg:h-60",
              bg: "bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/30 dark:to-yellow-800/30",
              border: "border border-yellow-200 dark:border-yellow-700/50",
            },
            {
              id: 7,
              title: "Is",
              width: "sm:col-span-2 lg:col-span-2",
              height: "h-48 sm:h-56 lg:h-60",
              bg: "bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30",
              border: "border border-indigo-200 dark:border-indigo-700/50",
            },
            {
              id: 8,
              title: "You",
              width: "lg:col-span-1",
              height: "h-48 sm:h-56 lg:h-60",
              bg: "bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/30 dark:to-pink-800/30",
              border: "border border-pink-200 dark:border-pink-700/50",
            },
            {
              id: 9,
              title: "Do NOT TALK about",
              width: "sm:col-span-2 lg:col-span-2",
              height: "h-48 sm:h-56 lg:h-60",
              bg: "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30",
              border: "border border-orange-200 dark:border-orange-700/50",
            },
            {
              id: 10,
              title: "Fight Club",
              width: "lg:col-span-1",
              height: "h-48 sm:h-56 lg:h-60",
              bg: "bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30",
              border: "border border-teal-200 dark:border-teal-700/50",
            },
          ].map((box) => (
            <div
              key={box.id}
              className={`
                ${box.width} 
                ${box.height} 
                ${box.bg} 
                ${box.border}
                flex items-center justify-center 
                rounded-xl 
                p-4 sm:p-6 
                shadow-sm hover:shadow-md 
                transition-all duration-300 
                hover:scale-[1.02] 
                cursor-pointer
                group
              `}
            >
              <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-center text-gray-800 dark:text-gray-200 group-hover:scale-105 transition-transform duration-300">
                {box.title}
              </h2>
            </div>
          ))}
        </div>

        {/* Additional Content for Scrolling Demo */}
        <div className="mt-24 lg:mt-32 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Scroll down to see more content
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 mx-auto"></div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Feature {item}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Timeline data={data} />

      {/* Footer */}
      <footer className="bg-neutral-100 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © 2025 Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
