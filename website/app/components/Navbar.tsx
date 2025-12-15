"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const navRef = useRef<HTMLElement | null>(null);
  const [useDark, setUseDark] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const sections = [
    { id: "location-section", label: "Location" },
    { id: "timetable-section", label: "Timetable" },
    { id: "about-section", label: "About Us" },
    { id: "owner-section", label: "Meet the Owner" },
    { id: "services-section", label: "Services" },
    { id: "products-section", label: "Products" },
    { id: "highlights-section", label: "Highlights" },
    { id: "contact-section", label: "Contact" },
  ];

  // ───────────────────────────────────────────────────────────
  // COLOR DETECTION (your existing logic)
  // ───────────────────────────────────────────────────────────
  const parseRGBA = (str: string | null) => {
    if (!str) return null;
    const nums = str.match(/[\d.]+/g);
    if (!nums) return null;
    const [r, g, b, a] = nums.map(Number);
    return [r ?? 0, g ?? 0, b ?? 0, a ?? 1];
  };

  const brightnessFromRgb = (r: number, g: number, b: number) =>
    (r * 299 + g * 587 + b * 114) / 1000;

  const findBackgroundColorUnderNav = () => {
    const nav = navRef.current;
    if (!nav) return null;

    const rect = nav.getBoundingClientRect();
    const sampleX = Math.round(rect.left + rect.width / 2);
    const sampleY = Math.round(rect.bottom + 2);

    const stacked = document.elementsFromPoint(sampleX, sampleY) as Element[];

    for (const el of stacked) {
      if (nav.contains(el)) continue;

      let walker: HTMLElement | null = el as HTMLElement;
      while (walker && walker !== document.documentElement) {
        const cs = window.getComputedStyle(walker);
        const bg = cs.backgroundColor;
        const rgba = parseRGBA(bg);
        if (rgba) {
          const alpha = rgba[3] ?? 1;
          if (alpha > 0) return rgba;
        }
        walker = walker.parentElement;
      }
    }

    const bodyBg = window.getComputedStyle(document.body).backgroundColor;
    return parseRGBA(bodyBg) ?? [255, 255, 255, 1];
  };

  const decideMode = () => {
    const rgba = findBackgroundColorUnderNav();
    if (!rgba) return;
    const [r, g, b] = rgba;
    const brightness = brightnessFromRgb(r, g, b);
    setUseDark(brightness > 160);
  };

  useEffect(() => {
    decideMode();
    window.addEventListener("scroll", decideMode, { passive: true });
    window.addEventListener("resize", decideMode);
    return () => {
      window.removeEventListener("scroll", decideMode);
      window.removeEventListener("resize", decideMode);
    };
  }, []);

  // ───────────────────────────────────────────────────────────
  // SECTION OBSERVER (for highlighting + dot)
  // ───────────────────────────────────────────────────────────

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // middle 20% detection window
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const sectionIds = [
      "hero-section",
      "location-section",
      "timetable-section",
      "about-section",
      "owner-section",
      "services-section",
      "products-section",
      "highlights-section",
      "contact-section",
    ];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scrolling function
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => scrollToSection("hero-section");

  // ───────────────────────────────────────────────────────────
  // COMPONENT
  // ───────────────────────────────────────────────────────────
  return (
    <nav
      ref={navRef}
      className="w-full fixed top-0 z-50 font-caudex pointer-events-auto bg-transparent text-[1.4rem]"
    >
      <ul
        className={`max-w-[100vw] flex flex-row justify-around items-center px-4 py-2 transition-colors duration-75 ${
          useDark ? "text-black" : "text-white"
        }`}
      >
        {/* Left Items - 4 items */}
        <li className="flex flex-row gap-[20px]">
          {sections.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center cursor-pointer relative"
              onClick={() => scrollToSection(item.id)}
            >
              <span className="transition-colors duration-75">
                {item.label}
              </span>

              {/* Dot */}
              {activeSection === item.id && (
                <div
                  className={`w-2 h-2 rounded-full absolute -bottom-2 left-1/2 -translate-x-1/2 transition-colors duration-75 ${
                    useDark ? "bg-black" : "bg-white"
                  }`}
                />
              )}
            </div>
          ))}
        </li>

        {/* Logo */}
        <li className="self-center">
          <div
            className="flex flex-col justify-center items-center mt-2 relative left-[-26px] mb-2 cursor-pointer"
            onClick={scrollToTop}
          >
            <div className="relative w-[100px] h-[100px]">
              <Image
                src="/logo-white.png"
                alt="Logo white"
                fill
                className={`object-contain transition-opacity duration-300 ${
                  useDark ? "opacity-0" : "opacity-100"
                }`}
              />
              <Image
                src="/logo-black.png"
                alt="Logo black"
                fill
                className={`object-contain transition-opacity duration-300 absolute top-0 left-0 ${
                  useDark ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>

            <div className="wrapper flex flex-col items-center justify-center text-center mt-1">
              <h1 className="text-xl tracking-[3px]">Joalharia Cavalinho</h1>
              <h2 className="text-[8px] italic tracking-[4px] font-caudex">
                Goldsmithing and Clockworking <br /> Since 1975
              </h2>
            </div>
          </div>
        </li>

        {/* Right Items - 4 items */}
        <li className="flex flex-row gap-[20px]">
          {sections.slice(4).map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center cursor-pointer relative"
              onClick={() => scrollToSection(item.id)}
            >
              <span className="transition-colors duration-75">
                {item.label}
              </span>

              {/* Dot */}
              {activeSection === item.id && (
                <div
                  className={`w-2 h-2 rounded-full absolute -bottom-2 left-1/2 -translate-x-1/2 transition-colors duration-75 ${
                    useDark ? "bg-black" : "bg-white"
                  }`}
                />
              )}
            </div>
          ))}
        </li>
      </ul>
    </nav>
  );
}