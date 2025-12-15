// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";

// export default function Navbar() {
//   const navRef = useRef<HTMLElement | null>(null);
//   const [useDark, setUseDark] = useState(false);

//   // Parse "rgb(...)" or "rgba(...)" string into [r,g,b,a]
//   const parseRGBA = (str: string | null) => {
//     if (!str) return null;
//     const nums = str.match(/[\d.]+/g);
//     if (!nums) return null;
//     const [r, g, b, a] = nums.map(Number);
//     return [r ?? 0, g ?? 0, b ?? 0, a ?? 1];
//   };

//   // perceived brightness formula
//   const brightnessFromRgb = (r: number, g: number, b: number) =>
//     (r * 299 + g * 587 + b * 114) / 1000;

//   // find the first element under the navbar that's NOT part of the navbar,
//   // and climb parents until a non-transparent background-color is found
//   const findBackgroundColorUnderNav = () => {
//     const nav = navRef.current;
//     if (!nav) return null;

//     const rect = nav.getBoundingClientRect();
//     // sample a point just below the navbar center to hit the page content under it
//     const sampleX = Math.round(rect.left + rect.width / 2);
//     const sampleY = Math.round(rect.bottom + 2); // 2px below navbar bottom

//     const stacked = document.elementsFromPoint(sampleX, sampleY) as Element[]; // top-to-bottom

//     for (const el of stacked) {
//       // skip elements that are inside the nav
//       if (nav.contains(el)) continue;

//       // climb up from this element to look for computed backgroundColor
//       let walker: HTMLElement | null = (el as HTMLElement) || null;
//       while (walker && walker !== document.documentElement) {
//         const cs = window.getComputedStyle(walker);
//         const bg = cs.backgroundColor;
//         const rgba = parseRGBA(bg);
//         if (rgba) {
//           const alpha = rgba[3] ?? 1;
//           // treat transparent as not a color
//           if (alpha > 0 && !(rgba[0] === 0 && rgba[1] === 0 && rgba[2] === 0 && alpha === 0)) {
//             return rgba; // [r,g,b,a]
//           }
//         }
//         walker = walker.parentElement;
//       }
//       // if walker didn't find a background, try next stacked element (in case this one is an img/video)
//     }

//     // fallback to body/background
//     const bodyBg = window.getComputedStyle(document.body).backgroundColor;
//     return parseRGBA(bodyBg) ?? [255, 255, 255, 1];
//   };

//   const decideMode = () => {
//     const rgba = findBackgroundColorUnderNav();
//     if (!rgba) return;
//     const [r, g, b] = rgba;
//     const brightness = brightnessFromRgb(r, g, b);
//     // threshold tuned for typical light/dark backgrounds
//     const shouldUseDark = brightness > 160;
//     setUseDark(shouldUseDark);
//   };

//   useEffect(() => {
//     decideMode(); // initial check
//     window.addEventListener("scroll", decideMode, { passive: true });
//     window.addEventListener("resize", decideMode);
//     return () => {
//       window.removeEventListener("scroll", decideMode);
//       window.removeEventListener("resize", decideMode);
//     };
//   }, []);




//   // Navigation Functions

//   const scrollToTop = () => {
//       const section = document.getElementById('hero-section');
//       section?.scrollIntoView({ behavior: 'smooth' });
//     };

//   return (
//     <nav
//       id="navbar"
//       ref={navRef}
//       className="w-full fixed top-0 z-50 font-libre pointer-events-auto"
//       aria-label="Main navigation"
//     >
//       <ul
//         className={`max-w-[100vw] flex flex-row justify-around items-center px-4 py-2 transition-colors duration-75 ${
//           useDark ? "text-black" : "text-white"
//         }`}
//       >
//         <li className="flex flex-row gap-[20px]">
//           <a className="transition-colors duration-75" href="">
//             Location
//           </a>
//           <a className="transition-colors duration-75" href="">
//             Timetable
//           </a>
//           <a className="transition-colors duration-75" href="">
//             About Us
//           </a>
//         </li>

//         <li className="self-center">

//             <div 
//                 className="flex flex-col justify-center items-center mt-2 relative left-[36px] mb-2 cursor-pointer"
//                 onClick={() => {
//                     scrollToTop();
//                   }}
//             >
//               {/* Stacked images for smooth cross-fade */}
//               <div className="relative w-[120px] h-[120px]">
//                 <Image
//                   src="/logo-white.png"
//                   alt="Logo white"
//                   fill
//                   className={`object-contain transition-opacity duration-300  ${
//                     useDark ? "opacity-0" : "opacity-100"
//                   }`}
                  
//                 />
//                 <Image
//                   src="/logo-black.png"
//                   alt="Logo black"
//                   fill
//                   className={`object-contain transition-opacity duration-300 absolute top-0 left-0  ${
//                     useDark ? "opacity-100" : "opacity-0"
//                   }`}
//                 />
//               </div>

//               <div className="wrapper flex flex-col items-center justify-center text-center mt-1">
//                 <h1 className="text-xl tracking-[3px]">Joalharia Cavalinho</h1>
//                 <h2 className="text-[8px] italic tracking-[4px] font-caudex">
//                   Goldsmithing and Clockworking <br />Since 1975
//                 </h2>
//               </div>
//             </div>

//         </li>

//         <li className="flex flex-row gap-[20px]">
//           <a className="transition-colors duration-75" href="">
//             Services
//           </a>
//           <a className="transition-colors duration-75" href="">
//             Products
//           </a>
//           <a className="transition-colors duration-75" href="">
//             Highlights
//           </a>
//           <a className="transition-colors duration-75" href="">
//             Contact
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// }



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
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveSection(entry.target.id);
//           }
//         });
//       },
//       { threshold: 0.4 }
//     );

//     sections.forEach(({ id }) => {
//       const el = document.getElementById(id);
//       if (el) observer.observe(el);
//     });

//     const hero = document.getElementById("hero-section");
//     if (hero) observer.observe(hero);

//     return () => observer.disconnect();
//   }, []);

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
        {/* Left Items */}
        <li className="flex flex-row gap-[20px]">
          {sections.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => scrollToSection(item.id)}
            >
              <span className="transition-colors duration-75">
                {item.label}
              </span>

              {/* Dot */}
              {activeSection === item.id && (
                <div
                  className={`w-2 h-2 rounded-full mt-1 transition-colors duration-75 ${
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
            className="flex flex-col justify-center items-center mt-2 relative left-[36px] mb-2 cursor-pointer"
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

        {/* Right Items */}
        <li className="flex flex-row gap-[20px]">
          {sections.slice(3).map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => scrollToSection(item.id)}
            >
              <span className="transition-colors duration-75">
                {item.label}
              </span>

              {/* Dot */}
              {activeSection === item.id && (
                <div
                  className={`w-2 h-2 rounded-full mt-1 transition-colors duration-75 ${
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





// BACKUP

      {/* <nav className="w-full bg-[rgba(0,0,0,0.05)] z-50 fixed top-0 font-libre">
        <ul className="max-w-[100vw] flex flex-row justify-around items-center text-white">
          
          <li className="flex flex-row gap-[20px]">
            <a href="">Location</a>
            <a href="">Timetable</a>
            <a href="">About Us</a>
          </li>
          
          <li className="self-center">
            <a href="">
              <div className="flex flex-col justify-center items-center mt-4 relative left-[36px] mb-4">
                <Image
                  src={"/logo-white.png"}
                  width={120}
                  height={120}
                  alt="Official Logo">
                </Image>
                <div className="wrapper flex flex-col items-center justify-center text-center">
                  <h1 className="text-xl tracking-[3px]">Joalharia Cavalinho</h1>
                  <h2 className="text-[8px] italic tracking-[4px] font-caudex">Goldsmithing and Clockworking <br />Since  1975</h2>
                </div>
              </div>
            </a>
          </li>

          <li className="flex flex-row gap-[20px]">
            <a href="">Services</a>
            <a href="">Products</a>
            <a href="">Highlights</a>
            <a href="">Contact</a>
          </li>

        </ul>
      </nav> */}