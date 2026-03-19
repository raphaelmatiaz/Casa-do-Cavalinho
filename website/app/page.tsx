"use client"
import Image from "next/image";
import GetDirectionsButton from "./components/GetDirectionBtn";
import Navbar from "./components/Navbar"
import ServiceCard from "./components/ServiceCard";
import ProductCard from "./components/ProductCard"
import ContactForm from "./components/ContactForm";

export default function Home() {

  const scrollToShopLocationSection = () => {
      const section = document.getElementById('location-section');
      section?.scrollIntoView({ behavior: 'smooth' });
    };

  const scrollToServicesSection = () => {
    const section = document.getElementById('services-section');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => scrollToSection("hero-section");

  type ShopStatusInfo = {
    statusLabel: "Open" | "Closed" | "Closing";
    statusColorClass: string;
    statusText: string;
    secondaryText: string;
    showCallNote: boolean;
    localDay: string;
    localTime: string;
  };

  const getShopStatusInfo = (): ShopStatusInfo => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Lisbon",
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    const parts = formatter.formatToParts(new Date());
    const day = parts.find((part) => part.type === "weekday")?.value ?? "Monday";
    const hour = Number(parts.find((part) => part.type === "hour")?.value ?? "0");
    const minute = Number(parts.find((part) => part.type === "minute")?.value ?? "0");
    const localTime = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;

    const currentMinutes = hour * 60 + minute;
    const openingMinutes = 10 * 60 + 30;
    const closingWarningMinutes = 13 * 60;
    const closingMinutes = 13 * 60 + 30;

    const isFriday = day === "Friday";
    const isSaturday = day === "Saturday";
    const isSunday = day === "Sunday";
    const isWeekend = isSaturday || isSunday;

    if (isFriday || isSaturday || (!isWeekend && currentMinutes >= closingMinutes)) {
      return {
        statusLabel: "Closed",
        statusColorClass: "text-red-700",
        statusText: "Our shop is currently",
        secondaryText: "We open tomorrow at 10:30am",
        showCallNote: false,
        localDay: day,
        localTime,
      };
    }

    if (!isWeekend && currentMinutes >= closingWarningMinutes && currentMinutes < closingMinutes) {
      return {
        statusLabel: "Closing",
        statusColorClass: "text-orange-500",
        statusText: "Our shop is currently",
        secondaryText: "We close at 1:30pm",
        showCallNote: false,
        localDay: day,
        localTime,
      };
    }

    if (!isWeekend && currentMinutes >= openingMinutes && currentMinutes < closingWarningMinutes) {
      return {
        statusLabel: "Open",
        statusColorClass: "text-green-700",
        statusText: "Our shop is currently:",
        secondaryText: "",
        showCallNote: true,
        localDay: day,
        localTime,
      };
    }

    if (isWeekend) {
      return {
        statusLabel: "Closed",
        statusColorClass: "text-red-700",
        statusText: "Our shop is currently:",
        secondaryText: "We open tomorrow at 10:30am",
        showCallNote: false,
        localDay: day,
        localTime,
      };
    }

    return {
      statusLabel: "Closed",
      statusColorClass: "text-red-700",
      statusText: "Our shop is currently:",
      secondaryText: "We open today at 10:30am",
      showCallNote: false,
      localDay: day,
      localTime,
    };
  };

  const shopStatusInfo = getShopStatusInfo();

  return (
    <>
      <Navbar></Navbar>
        
      <section
        id="hero-section"
        className="relative flex min-h-[100svh] w-[100vw] flex-col justify-center bg-black !pt-0 !pb-0"
      >
        <video
          src="/videos/cavalinho-hero.mp4"
          loop
          autoPlay
          muted
          className="absolute left-0 top-0 h-full w-full object-cover opacity-25 grayscale-25"
        ></video>

        <div
          id="hero-presentation-wrapper"
          className="relative z-10 mb-16 mt-24 px-4 text-shadow-lg font-caudex sm:mb-20 sm:px-8 md:mb-[10vh] md:mt-[140px]"
        >
          <p
            id="hero-h1"
            className="text-center text-6xl leading-tight sm:text-7xl md:text-7xl lg:text-[64px]"
          >
            The{" "}
            <em className="text-[var(--color-secondary)] not-italic">
              Goldsmith’s
            </em>
            <br className="sm:hidden" />{" "}
            Touch, and
            <br className="sm:hidden" /> <br className="hidden sm:inline" />
            the{" "}
            <em className="text-[var(--color-primary)] not-italic">
              Watchmaker’s
            </em>
            <br className="sm:hidden" />{" "}
            Mind
          </p>
          <p
            id="hero-h2"
            className="mt-4 px-2 text-center text-base italic tracking-[3px] font-libre sm:text-lg sm:tracking-[5px] md:mt-8 md:text-2xl md:tracking-[7px] lg:text-[20px] lg:tracking-[8px]"
          >
            Jewelery — Watches — Repairs — Commissions
          </p>
          <div
            id="hero-buttons-wrapper"
            className="mt-12 flex flex-col items-center justify-center gap-4 px-4 sm:mt-10 sm:w-full sm:flex-col sm:gap-6 md:mt-12 min-[870px]:flex-row min-[870px]:gap-10 lg:mt-16 lg:gap-16"
          >
            <button
              className="w-full min-w-0 max-w-[360px] rounded-full bg-[var(--color-secondary)] px-10 py-4 text-2xl text-white shadow-2xl sm:w-full sm:max-w-[420px] sm:px-14 sm:py-4 sm:text-2xl md:w-auto md:min-w-[380px] md:max-w-none md:px-16 md:py-5 md:text-3xl lg:min-w-[380px] lg:px-20 lg:py-5 lg:text-2xl xl:px-32 xl:text-3xl"
              onClick={() => {
                scrollToShopLocationSection();
              }}
            >
              Shop Location
            </button>
            <button
              className="radius-4 w-full min-w-0 max-w-[360px] rounded-full bg-[var(--color-primary)] px-10 py-4 text-2xl text-white shadow-2xl sm:w-full sm:max-w-[420px] sm:px-14 sm:py-4 sm:text-2xl md:w-auto md:min-w-[380px] md:max-w-none md:px-16 md:py-5 md:text-3xl lg:min-w-[380px] lg:px-20 lg:py-5 lg:text-2xl xl:px-32 xl:text-3xl"
              onClick={() => {
                scrollToServicesSection();
              }}
            >
              Our Services
            </button>
          </div>
        </div>

        <div
          id="scroll-icon-positioner"
          className="absolute bottom-2 z-10 flex w-screen items-center justify-center md:bottom-0"
        >
          <div className="flex flex-col items-center">
            <p className="relative left-[4px] text-xs italic tracking-[4px] md:text-sm md:tracking-[10px]">
              scroll
            </p>
            <div className="mt-[4px] h-8 w-[1px] bg-white md:h-[48px]"></div>
          </div>
        </div>
      </section>

    {/* SHOP LOCATION */}
      <section
        id="location-section"
        className="relative min-h-screen w-screen bg-sky-700 !pb-16 sm:!pb-20 lg:!pb-28"
      >
        <div
          id="positioner-div"
          className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-4 sm:px-8 2xl:flex-row 2xl:items-stretch 2xl:gap-0 2xl:px-0"
        >
          <div
            id="left-positioner-div"
            className="flex w-full flex-col items-center justify-center 2xl:min-h-[450px] 2xl:w-1/2 2xl:px-10"
          >
            <h3 className="mb-8 text-center font-libre text-6xl leading-tight sm:text-7xl md:text-7xl lg:text-[64px]">
              Looking for our <br className="hidden sm:block" /> Shop?
            </h3>

            <div className="w-full max-w-[560px]">
              <p
                id="hero-h2"
                className="mt-4 px-2 text-center text-base italic tracking-[3px] font-libre text-white sm:text-lg sm:tracking-[5px] md:mt-8 md:text-2xl md:tracking-[7px] lg:text-[20px] lg:tracking-[8px]"
              >
                We are Located at:
              </p>
              <p className="mb-8 mt-4 border-b border-white/80 py-6 text-center text-2xl leading-relaxed font-caudex sm:text-3xl lg:text-4xl">
                Rua João de Deus 24 A <br />
                8200-142 Albufeira, <br /> Portugal
              </p>
              <div className="flex justify-center">
                <GetDirectionsButton></GetDirectionsButton>
              </div>
            </div>
          </div>

          <div
            id="right-positioner-div"
            className="h-[320px] w-full overflow-hidden rounded-2xl shadow-2xl sm:h-[420px] 2xl:h-auto 2xl:min-h-[450px] 2xl:w-1/2 2xl:rounded-none 2xl:shadow-none"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1763936381453!6m8!1m7!1sg9dnYX8yMmJNt1DQrpW1EA!2m2!1d37.08726626707691!2d-8.253348173524856!3f203.83644824871865!4f-1.5222311703891336!5f0.7820865974627469"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* TIMETABLE */}
      <section id="timetable-section" className="relative min-h-screen w-screen bg-white text-black">
        
        <div id="positioner-div" className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-0 lg:flex-row lg:items-stretch lg:gap-0">

          <div id="right-positioner-div" className="w-full lg:w-1/2">
            <div className="relative h-[280px] w-full sm:h-[360px] lg:h-[450px]">
              <Image
                src="/watches.webp"
                alt="Watches"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div
            id="left-positioner-div"
            className="flex w-full flex-col items-center justify-center px-6 pb-4 sm:px-10 md:px-16 lg:w-1/2 lg:px-12 lg:pb-0 xl:px-20"          >
            <h3 className="mb-2 mt-8 text-center font-libre text-6xl leading-tight sm:text-7xl md:text-7xl lg:text-[64px]">
              Timetable
            </h3>
            <p
              id="hero-h2"
              className="mt-4 mb-8 px-2 text-center text-base italic tracking-[3px] font-libre text-[var(--color-secondary)] sm:text-lg sm:tracking-[5px] md:mt-8 md:text-2xl md:tracking-[7px] lg:text-[20px] lg:tracking-[8px]"
            >
              Business Hours & Status
            </p>


            <div
              id="shop-status"
              className="flex w-full flex-col items-start justify-center border-b border-black py-5 sm:py-6"
            >
              <h4 className="text-2xl sm:text-3xl lg:text-4xl mb-4">Status</h4>
              <p className="font-caudex text-2xl sm:text-3xl lg:text-3xl">
                &#10146; {shopStatusInfo.statusText}
                <em className={`not-italic font-bold ${shopStatusInfo.statusColorClass}`}>
                  {" "}
                  {shopStatusInfo.statusLabel}
                </em>
              </p>
              {shopStatusInfo.secondaryText && (
                <p className="font-caudex text-2xl sm:text-3xl lg:text-3xl">{shopStatusInfo.secondaryText}</p>
              )}
              {shopStatusInfo.showCallNote && (
                <p className="mt-8 p-4 font-caudex text-2xl sm:text-3xl lg:text-2xl bg-gray-300 border-l-4 border-gray-500">
                  <em className="not-italic font-bold">Note: </em> In rare cases, the shop may be closed even when marked as "Open" on our site. If you are coming from far away, we recommend calling the owner at <em className="not-italic font-bold">(+351) 914 824 244</em> beforehand.
                </p>
              )}
              {/* <p className="mt-2 font-caudex text-2xl text-gray-700 sm:text-3xl lg:text-2xl">
                Local time in Albufeira: {shopStatusInfo.localDay}, {shopStatusInfo.localTime}
              </p> */}
            </div>

            <div id="open-closed" className="flex w-full flex-col gap-2 border-b border-black sm:flex-row sm:gap-8 lg:gap-16">
              <div className="py-5 sm:py-6">
                <h4 className="text-2xl sm:text-3xl lg:text-4xl mb-4">We're Open:</h4>
                <p className="font-caudex text-2xl sm:text-3xl lg:text-3xl"> &#10146;
                  <em className="not-italic text-[var(--color-secondary)] font-bold"> Monday</em> to{" "}
                  <em className="not-italic text-[var(--color-primary)] font-bold">Friday</em>
                </p>
                <p className="font-caudex text-2xl sm:text-3xl lg:text-3xl">
                  &#10146; From <em className="not-italic font-bold">10:30am</em> to{" "}
                  <em className="not-italic font-bold">1:30pm</em>
                </p>
              </div>
              <div className="py-5 sm:py-6">
                <h4 className="text-2xl sm:text-3xl lg:text-4xl mb-4">We're Closed:</h4>
                <p className="font-caudex text-2xl sm:text-3xl lg:text-3xl"> &#10146;
                  <em className="not-italic font-bold"> Saturday</em> &{" "}
                  <em className="not-italic font-bold">Sunday</em>
                </p>
              </div>
            </div>





          </div>
        </div>
      </section>


{/* About Us */}
<section id="about-section" className="w-screen h-auto text-black bg-gray-300 relative">

  {/* Block 1: Text left, Image right */}
  <div id="block-1" className="w-full h-auto flex flex-col lg:flex-row">

    {/* Text */}
    <div className="w-full lg:w-1/2 flex items-center justify-center flex-col px-6 py-12 sm:px-10 sm:py-16 md:px-16 md:py-20 lg:px-16 xl:px-24">
      <h3 className="text-4xl sm:text-5xl lg:text-6xl text-center mb-8 sm:mb-12 lg:mb-16 self-center">
        About Us
      </h3>
      <p
        id="hero-h2"
        className="text-center text-sm sm:text-base lg:text-[20px] italic tracking-[4px] sm:tracking-[6px] lg:tracking-[8px] font-libre text-[var(--color-secondary)] mb-6 sm:mb-8 lg:mb-8"
      >
        50 years of expertise
      </p>
      <article className="text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-thin font-caudex">
        <p className="mb-8 sm:mb-10 lg:mb-12">
          For over 50 years, Joalharia Cavalinho has been dedicated to the art of fine jewelry and
          watchmaking with the same passion, care, and craftsmanship that defined our beginnings.
        </p>
        <p>
          We are a family-run, heritage shop known for our close relationship with customers and our
          unique selection of pieces that stand the test of time.
        </p>
      </article>
    </div>

    {/* Image */}
    <div className="w-full lg:w-1/2 order-first lg:order-last">
      <div className="w-full h-[260px] sm:h-[360px] lg:h-full min-h-[400px] relative">
        <Image
          src="/shop-outside.webp"
          alt="Outside view of Joalharia Cavalinho shop"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </div>

  </div>

  {/* Block 2: Image left, Text right */}
  <div id="block-2" className="w-full h-auto flex flex-col lg:flex-row ">

    {/* Image */}
    <div className="w-full lg:w-1/2">
      <div className="w-full h-[260px] sm:h-[360px] lg:h-full min-h-[400px] relative">
        <Image
          src="/vitrine.webp"
          alt="Interior vitrine display of jewelry at Joalharia Cavalinho"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </div>

    {/* Text */}
    <div className="w-full lg:w-1/2 flex items-center justify-center flex-col px-6 py-12 sm:px-10 sm:py-16 md:px-16 md:py-20 lg:px-16 xl:px-24">
      <p
        id="hero-h2"
        className="text-center text-sm sm:text-base lg:text-[20px] italic tracking-[4px] sm:tracking-[6px] lg:tracking-[8px] font-libre text-[var(--color-secondary)] mb-6 sm:mb-8 lg:mb-8"
      >
        A Boutique of Treasures
      </p>
      <article className="text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-thin font-caudex">
        <p className="mb-8 sm:mb-10 lg:mb-12">
          Our space—warm, intimate, and reminiscent of a small brocante—is filled with exceptional
          finds, refined jewelry, Portuguese-made creations, and carefully chosen second-hand
          beauties. Here you'll discover everything from Pandora, Seiko, and Filigree pieces to
          Breitling, Rolex, wedding bands, collectors' items, and many other rare artifacts.
        </p>
        <p className="mb-8 sm:mb-10 lg:mb-12">
          More than a store, we are a meeting place for enthusiasts who value authenticity, history,
          and lasting quality. With hundreds of satisfied customers over the decades, we continue to
          offer expert knowledge, dedicated service, and that unmistakable feeling of finding
          something that seems meant just for you.
        </p>
        <p>At Joalharia Cavalinho, there's always a treasure waiting.</p>
      </article>
    </div>

  </div>

</section>

{/* MEET THE OWNER */}
<section id="owner-section" className="w-screen min-h-screen text-black bg-white relative">

  <div className="w-full max-w-[1440px] mx-auto px-6 py-12 sm:px-10 sm:py-16 md:px-16 md:py-20 lg:px-24 xl:px-32">

    <h3 className="font-libre text-4xl sm:text-5xl lg:text-6xl text-center mb-6 sm:mb-10 lg:mb-16">
      The Man Behind the Counter
    </h3>
    <p className="text-center text-sm sm:text-base lg:text-[20px] italic tracking-[4px] sm:tracking-[6px] lg:tracking-[8px] font-libre text-[var(--color-secondary)] mb-8 sm:mb-12 lg:mb-16">
      Jorge Cabrita Matias
    </p>

    {/* Mobile only: full-width banner image */}
    <div className="relative w-full h-[280px] sm:hidden mb-8">
      <Image
        src="/jorge-matias.webp"
        alt="Jorge Cabrita Matias, owner of Joalharia Cavalinho"
        fill
        sizes="100vw"
        className="object-cover object-top"
      />
    </div>

    {/* Article with float image on sm–md, side column on lg+ */}
    <div className="flex flex-col lg:flex-row lg:gap-16 xl:gap-24">

      {/* Desktop sidebar image */}
      <div className="hidden lg:block lg:flex-shrink-0">
        <Image
          src="/jorge-matias.webp"
          alt="Jorge Cabrita Matias, owner of Joalharia Cavalinho"
          width={420}
          height={500}
          sizes="420px"
          className="object-cover"
        />
      </div>

      {/* Text — float image sits inside here for sm/md */}
      <article className="text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-thin font-caudex">

        {/* Tablet float image: square, top-right, text wraps around it */}
        <div className="hidden sm:block lg:hidden float-right ml-8 mb-6 w-[240px] h-[240px] md:w-[300px] md:h-[300px] relative flex-shrink-0">
          <Image
            src="/jorge-matias.webp"
            alt="Jorge Cabrita Matias, owner of Joalharia Cavalinho"
            fill
            sizes="(max-width: 768px) 240px, 300px"
            className="object-cover object-top"
          />
        </div>

        <p className="mb-8 sm:mb-10 lg:mb-12">
          At the heart of Joalharia Cavalinho is Jorge Cabrita Matias, a Portuguese craftsman,
          artisan and artist, whose life has been shaped by artistry, precision, and genuine human
          connection.
        </p>
        <p className="mb-8 sm:mb-10 lg:mb-12">
          Jorge began his artisan journey in his early twenties in Belgium, where he founded the
          renowned boutique La Boucle d'Art, just steps from Brussels' iconic Grand Place.
        </p>
        <p className="mb-8 sm:mb-10 lg:mb-12">
          There, he learned to master multiple disciplines—salesmanship, craftsmanship,
          clockworking, goldsmithing, and artistic design—building a reputation for excellence
          and authenticity.
        </p>
        <p className="mb-8 sm:mb-10 lg:mb-12">
          Decades later, his path led him back to his roots in the Algarve, where he established
          Joalharia Cavalinho in Albufeira. For over 30 years, the shop has flourished under his
          steady hand, becoming a trusted, beloved presence in the community.
        </p>
        <p>
          Jorge is more than a jeweler or a watchmaker—he is a passionate storyteller, an artisan
          with an eye for detail, and a warm, welcoming guide who takes time to understand every
          client's needs and desires. His dedication, experience, and heartfelt approach are the
          soul of the shop, and the reason so many customers return year after year.
        </p>
      </article>

    </div>
  </div>

</section>
{/* SERVICES */}
<section id="services-section" className="w-screen min-h-screen text-black bg-[#E2E2E2] relative">
  <div className="w-full h-fit flex">
    <div className="flex flex-col items-center justify-center w-full px-6 py-12 sm:px-10 sm:py-16 md:px-12 md:py-20 lg:px-16">

      <h3 className="font-libre text-4xl sm:text-5xl lg:text-6xl text-center mb-6 sm:mb-10 lg:mb-16">
        Our Services
      </h3>
      <p className="text-center text-sm sm:text-base lg:text-[20px] italic tracking-[4px] sm:tracking-[6px] lg:tracking-[8px] font-libre text-[var(--color-secondary)] mb-10 sm:mb-14 lg:mb-16">
        Every Service You Need <br /> All Under One Roof
      </p>

      <div
        id="card-container"
        className="flex flex-wrap justify-center sm:justify-between w-full h-fit gap-6 sm:gap-5 lg:gap-8"
      >
        <ServiceCard service="Watch Battery Change" image="/service-battery-change.jpeg" />
        <ServiceCard service="Clock and Watch Repairs" image="/service-watch-repair.jpeg" />
        <ServiceCard service="Clock and Watch Cleaning" image="/service-watch-cleaning.jpeg" />
        <ServiceCard service="Jewelery Repairs" image="/service-jewellery-repair.jpeg" />
        <ServiceCard service="Jewelery Cleaning" image="/service-jewellery-cleaning.jpg" />
        <ServiceCard service="Jewelery Sizing Adjustment" image="/service-jeweller-sizing.jpeg" />
        <ServiceCard service="Stone Setting" image="/service-stone-settings.jpeg" />
        <ServiceCard service="Engraving" image="/service-engraving.jpeg" />
        <ServiceCard service="Bath Plating (Gold and Silver)" image="/service-bath.jpeg" />
        <ServiceCard service="Scratch Removal (Watches and Jewelery)" image="/service-scratch-removal.jpeg" />
        <ServiceCard service="Custom Jewelery (to order)" image="/service-custom-jewellery.jpeg" />

        {/* 11 cards: tablet (2-col) has 1 orphan, desktop (3-col) has 2 orphans */}
        <div aria-hidden="true" className="hidden sm:block sm:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.25rem)] xl:w-[36rem] h-0 min-h-0 p-0 m-0 bg-transparent shadow-none border-none" />
      </div>

    </div>
  </div>
</section>

{/* PRODUCTS */}
<section id="products-section" className="w-screen min-h-screen text-black bg-white relative">
  <div className="w-full h-fit flex">
    <div className="flex flex-col items-center justify-center w-full px-6 py-12 sm:px-10 sm:py-16 md:px-12 md:py-20 lg:px-16">

      <h3 className="font-libre text-4xl sm:text-5xl lg:text-6xl text-center mb-6 sm:mb-10 lg:mb-16">
        Our Products
      </h3>
      <p className="text-center text-sm sm:text-base lg:text-[20px] italic tracking-[4px] sm:tracking-[6px] lg:tracking-[8px] font-libre text-[var(--color-secondary)] mb-10 sm:mb-14 lg:mb-16">
        Where Every Corner Reveals a Treasure
      </p>

      <div
        id="card-container"
        className="flex flex-wrap justify-center sm:justify-between w-full h-fit gap-6 sm:gap-5 lg:gap-8"
      >
        <ProductCard service="Brand New Jewellery" image="/product-new-jewellery.jpeg" />
        <ProductCard service="Second Hand Jewellery" image="/product-second-hand-jewellery.jpeg" />
        <ProductCard service="Brand New Wrist Watches" image="/product-brand-new-wrist-watch.jpeg" />
        <ProductCard service="Second Hand Wrist Watches" image="/product-second-hand-wrist-watch.jpeg" />
        <ProductCard service="Second Hand Pocket Watches" image="/product-second-hand-pocket-watch.jpeg" />
        <ProductCard service="Portuguese Hand Made Jewels (Silver & Gold)" image="/product-portuguese-hand-made.jpeg" />

        {/* Invisible spacers to left-align the last row */}
        <div aria-hidden="true" className="hidden sm:block sm:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.25rem)] xl:w-[36rem] h-0 min-h-0 p-0 m-0 bg-transparent shadow-none border-none" />
        <div aria-hidden="true" className="hidden lg:block lg:w-[calc(33.333%-1.25rem)] xl:w-[36rem] h-0 min-h-0 p-0 m-0 bg-transparent shadow-none border-none" />
      </div>

    </div>
  </div>
</section>

{/* HIGHLIGHTS */}
{/* <section id="highlights-section" className="w-screen h-fit text-white bg-black relative px-6 py-12 sm:px-10 sm:py-16 md:px-16 md:py-20 lg:px-24">
  <h3 className="font-libre text-4xl sm:text-5xl lg:text-6xl text-center mb-6 sm:mb-10 lg:mb-16">
    Boutique Highlights
  </h3>
  <p className="text-center text-sm sm:text-base lg:text-[20px] italic tracking-[4px] sm:tracking-[6px] lg:tracking-[8px] font-libre text-[var(--color-secondary)] mb-8 sm:mb-10 lg:mb-12">
    Exceptional Pieces - For Exceptional People
  </p>
  <p className="text-center font-caudex text-2xl sm:text-3xl xl:text-3xl">
    More exceptional treasures coming soon...
  </p>
</section> */}

      {/* CONTACT */}
      <section id="contact-section" className="w-screen min-h-screen h-fit text-black bg-white relative">

        <div id="positioner-div" className="w-full flex ">

          <div id="left-positioner-div" className=" min-w-[50vw] h-fit flex flex-col justify-center items-center">
            <div id="wrapper" className="px-[30%]">
              <h3 className="text-6xl text-center mb-[32px]">Get it Touch</h3>
               <div className="">
                 <p className="text-center text-[20px] italic tracking-[8px] font-libre text-black my-[32px]">
                  We’d Love to Hear <br /> From You
                  </p>
                  <p className="text-4xl font-caudex text-center">Feel Free to Email the owner through our contact form on the right, or by contacting at: </p>
                  <p
                  className="text-4xl font-caudex mb-[32px] border-b border-black py-[24px] flex flex-col justify-center items-center text-center">
                  jorge.albufeira55@gmail.com</p>
                  <p className="text-4xl font-caudex text-center">For any further assistance, feel free to directly call the owner at: </p>
                  <p 
                  className="text-4xl font-caudex mb-[32px] border-b border-black py-[24px] flex flex-col justify-center items-center text-center">
                  (+351) 914824244</p>
               </div>
            </div>
          </div>

          <div id="right-positioner-div" className=" h-fit w-full flex items-center justify-center flex-col">
               
                <ContactForm></ContactForm>
                
          </div>

        </div>
        
      </section>
            
      <footer className="bg-[#313131] relative">
        <Image 
          src={"/logo-white.png"} 
          width={400} 
          height={400} 
          alt="Logo Image"
          className="p-16 ml-32"
          onClick={() => {scrollToTop()}}>
          

        </Image>
        <p className="absolute bottom-16 right-32 text-3xl">Joalharia Cavalinho 2025, All Rights Reserved</p>
      </footer>

    </>
  )
}

       

