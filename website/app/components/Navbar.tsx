"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const navRef = useRef<HTMLElement | null>(null);
  const [useDark, setUseDark] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  useEffect(() => {
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

    const handleModeCheck = () => {
      const rgba = findBackgroundColorUnderNav();
      if (!rgba) return;
      const [r, g, b] = rgba;
      const brightness = brightnessFromRgb(r, g, b);
      setUseDark(brightness > 160);
    };

    const rafId = window.requestAnimationFrame(handleModeCheck);
    window.addEventListener("scroll", handleModeCheck, { passive: true });
    window.addEventListener("resize", handleModeCheck);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleModeCheck);
      window.removeEventListener("resize", handleModeCheck);
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
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    scrollToSection("hero-section");
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const { body, documentElement } = document;
    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = documentElement.style.overflow;
    const previousBodyTouchAction = body.style.touchAction;

    if (mobileMenuOpen) {
      body.style.overflow = "hidden";
      documentElement.style.overflow = "hidden";
      body.style.touchAction = "none";
    }

    return () => {
      body.style.overflow = previousBodyOverflow;
      documentElement.style.overflow = previousHtmlOverflow;
      body.style.touchAction = previousBodyTouchAction;
    };
  }, [mobileMenuOpen]);

  // ───────────────────────────────────────────────────────────
  // COMPONENT
  // ───────────────────────────────────────────────────────────
  return (
    <nav
      ref={navRef}
      className="fixed top-0 z-50 w-full bg-transparent font-caudex text-base pointer-events-auto min-[1180px]:text-[1.4rem]"
    >
      <div
        className={`max-w-[100vw] px-4 pt-8 pb-2 transition-colors duration-75 min-[1180px]:pt-32 ${
          useDark ? "text-black" : "text-white"
        }`}
      >
        {/* Mobile Navbar */}
        <div className="flex items-center justify-center min-[1180px]:hidden">
          <button
            type="button"
            className="relative h-[88px] w-[88px]"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
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
              className={`absolute left-0 top-0 object-contain transition-opacity duration-300 ${
                useDark ? "opacity-100" : "opacity-0"
              }`}
            />
          </button>
        </div>

        {mobileMenuOpen && (
          <ul className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-black/90 text-white backdrop-blur-sm min-[1180px]:hidden">
            <button
              type="button"
              className="absolute left-1/2 top-8 h-[88px] w-[88px] -translate-x-1/2"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <Image
                src="/logo-white.png"
                alt="Logo white"
                fill
                className="object-contain"
              />
            </button>
            <button
              type="button"
              className="absolute right-5 top-5 pr-5 pt-5 text-[7.5rem] leading-none"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>
            {sections.map((item) => (
              <li key={item.id} className="text-center">
                <button
                  type="button"
                  className="relative text-4xl sm:text-5xl tracking-[1px]"
                  onClick={() => scrollToSection(item.id)}
                >
                  {activeSection === item.id && (
                    <span className="mr-3 inline-block h-3 w-3 rounded-full align-middle bg-white" />
                  )}
                  {item.label}
                  {activeSection === item.id && (
                    <span className="ml-3 inline-block h-3 w-3 rounded-full align-middle bg-white" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Desktop Navbar */}
        <ul className="relative hidden w-full flex-row items-center justify-between px-4 py-2 min-[1180px]:flex min-[1180px]:px-12 min-[1180px]:py-4">
          {/* Left Items - 4 items */}
          <li className="flex flex-row gap-[20px] min-[1180px]:pl-8">
            {sections.slice(0, 4).map((item) => (
              <button
                key={item.id}
                type="button"
                className="relative flex cursor-pointer flex-col items-center"
                onClick={() => scrollToSection(item.id)}
              >
                <span className="transition-colors duration-75">{item.label}</span>

                {/* Dot */}
                {activeSection === item.id && (
                  <div
                    className={`absolute -bottom-2 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full transition-colors duration-75 ${
                      useDark ? "bg-black" : "bg-white"
                    }`}
                  />
                )}
              </button>
            ))}
          </li>

          {/* Logo */}
          <li className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 self-center">
            <button
              type="button"
              className="mb-2 mt-2 flex cursor-pointer flex-col items-center justify-center"
              onClick={scrollToTop}
            >
              <div className="relative h-[100px] w-[100px]">
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
                  className={`absolute left-0 top-0 object-contain transition-opacity duration-300 ${
                    useDark ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>

              <div className="wrapper mt-1 flex flex-col items-center justify-center text-center">
                <h1 className="text-xl tracking-[3px]">Joalharia Cavalinho</h1>
                <h2 className="text-[8px] italic tracking-[4px] font-caudex">
                  Goldsmithing and Clockworking <br /> Since 1975
                </h2>
              </div>
            </button>
          </li>

          {/* Right Items - 4 items */}
          <li className="flex flex-row gap-[20px] min-[1180px]:pr-8">
            {sections.slice(4).map((item) => (
              <button
                key={item.id}
                type="button"
                className="relative flex cursor-pointer flex-col items-center"
                onClick={() => scrollToSection(item.id)}
              >
                <span className="transition-colors duration-75">{item.label}</span>

                {/* Dot */}
                {activeSection === item.id && (
                  <div
                    className={`absolute -bottom-2 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full transition-colors duration-75 ${
                      useDark ? "bg-black" : "bg-white"
                    }`}
                  />
                )}
              </button>
            ))}
          </li>
        </ul>
      </div>
    </nav>
  );
}