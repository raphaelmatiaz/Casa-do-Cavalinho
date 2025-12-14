"use client"
import Image from "next/image";
import GetDirectionsButton from "./components/GetDirectionBtn";
import Navbar from "./components/Navbar"

export default function Home() {

  const scrollToShopLocationSection = () => {
      const section = document.getElementById('shop-location-section');
      section?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <>
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

      <Navbar></Navbar>
        
      <section id="hero-section" className="bg-black relative w-[100vw] h-[100vh] flex flex-col justify-center">

          <video
            src="/videos/cavalinho-hero.mp4"
            loop
            autoPlay
            muted
            className="absolute top-0 left-0 w-full h-full object-cover opacity-25 grayscale-25">
          </video>

        <div id="hero-presentation-wrapper" className="relative z-10 mb-[10vh] mt-[140px] text-shadow-lg font-caudex">
          <p id="hero-h1" className="text-center text-[64px]">
            The <em className="text-[var(--color-secondary)] not-italic">Goldsmith’s</em> Touch, and <br />
            the <em className="text-[var(--color-primary)] not-italic">Watchmaker’s</em> Mind
          </p>
          <p id="hero-h2" className="text-center text-[20px] italic tracking-[8px] mt-8 font-libre">
            Jewelery — Watches — Repairs — Commissions
          </p>
          <div id="hero-buttons-wrapper" className="flex justify-center mt-16 gap-32 ">
            <button
               className="bg-[var(--color-secondary)] px-32 min-w-[380px] py-2 rounded-full text-xl text-white shadow-2xl"
               onClick={() => {
                scrollToShopLocationSection();
               }}
               >
               Shop Location
            </button>
            <button className="bg-[var(--color-primary)] px-32 min-w-[380px] radius-4 rounded-full text-xl text-white shadow-2xl">Our Services</button>
          </div>
        </div>

        <div id="scroll-icon-positioner" className="absolute bottom-0 w-screen flex items-center justify-center z-10">
          <div className="flex flex-col items-center">
            <p className="text-sm italic tracking-[10px] relative left-[4px]">scroll</p>
            <div className="h-[48px] w-[1px] bg-white mt-[4px]"></div>
          </div>
        </div>
      </section>

    {/* SHOP LOCATION */}
      <section id="location-section" className="w-screen h-screen min-h-screen bg-blue-400 relative">

        <div id="positioner-div" className="w-full h-[70%] absolute bottom-0 flex ">

          <div id="left-positioner-div" className=" h-[100%] w-full flex items-center justify-center flex-col gap-9">
            <h3 className="text-6xl text-center">Looking for our <br /> Shop?</h3>
            <p className="text-5xl font-caudex">We are Located at:</p>
            <p className="text-3xl font-caudex">Rua João de Deus 24 A <br /> 8200-142 Albufeira</p>
            <GetDirectionsButton></GetDirectionsButton>
          </div>

          <div id="right-positioner-div" className="h-[100%] w-full flex items-center justify-center flex-col">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!4v1763936381453!6m8!1m7!1sg9dnYX8yMmJNt1DQrpW1EA!2m2!1d37.08726626707691!2d-8.253348173524856!3f203.83644824871865!4f-1.5222311703891336!5f0.7820865974627469" 
              width="750" 
              height="500" 
              style={{border:0}}
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="">
            </iframe>
          </div>

        </div>
        
      </section>

      {/* TIMETABLE */}
      <section id="timetable-section" className="w-screen h-screen min-h-screen text-black bg-white relative pb-4">

        <div id="positioner-div" className="w-full h-[70%] absolute bottom-0 flex ">

          <div id="left-positioner-div" className=" h-[100%] w-full flex items-start justify-center flex-col gap-9">
            <div className="w-[725px] h-[450px] overflow-hidden relative">
              <Image
                src="/watches.webp"
                alt="Watches"
                fill
                className="object-cover scale-110 ml-4"
              />
            </div>
          </div>

          <div id="right-positioner-div" className="h-[100%] w-full flex items-start justify-center flex-col ">
            <h3 className="text-6xl text-center mb-[8px] self-center">Timetable</h3>
            <ul className="ml-20 mb-">

              <li>
                <div className="border-b border-black py-[24px]">
                  <h4 className="text-3xl mb-[4px]">Status</h4>
                  <p className="font-caudex text-2xl">Our shop is currently <em className="not-italic font-bold text-red-700"> Closed</em></p>
                  <p className="font-caudex text-2xl">We open <em className="not-italic font-bold">tomorrow at 10:30am</em></p>
                </div>
              </li>

              <li>
                <div className="border-b border-black py-[24px]">
                  <h4 className="text-3xl mb-[4px]">Open Hours</h4>
                  <p className="font-caudex text-2xl"><em className="not-italic font-bold text-[var(--color-secondary)]">Monday</em> to <em className="not-italic font-bold text-[var(--color-primary)]">Friday</em></p>
                  <p className="font-caudex text-2xl">From <em className="not-italic font-bold">10:30am</em> to  <em className="not-italic font-bold">1:30pm</em></p>
                </div>
              </li>

              <li>
                <div className="py-[24px]">
                  <h4 className="text-3xl mb-[4px]">Closed Hours</h4>
                  <p className="font-caudex text-2xl"><em className="not-italic font-bold">Saturday</em> & <em className="not-italic font-bold">Sunday</em></p>
                </div>
              </li>

            </ul>
          </div>

        </div>
      </section>



      <section id="about-section" className="w-screen h-screen min-h-screen text-black bg-gray-300 relative pb-4"></section>
      <section id="services-section" className="w-screen h-screen min-h-screen text-black bg-white relative pb-4"></section>
      <section id="products-section" className="w-screen h-screen min-h-screen text-black bg-white relative pb-4"></section>
      <section id="highlights-section" className="w-screen h-screen min-h-screen text-black bg-white relative pb-4"></section>
      <section id="contact-section" className="w-screen h-screen min-h-screen text-black bg-white relative pb-4"></section>









    </>
  )
}

       

