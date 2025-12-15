"use client"
import Image from "next/image";
import GetDirectionsButton from "./components/GetDirectionBtn";
import Navbar from "./components/Navbar"

export default function Home() {

  const scrollToShopLocationSection = () => {
      const section = document.getElementById('location-section');
      section?.scrollIntoView({ behavior: 'smooth' });
    };

  const scrollToServicesSection = () => {
    const section = document.getElementById('services-section');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
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
               className="bg-[var(--color-secondary)] px-32 min-w-[380px] py-5 rounded-full text-3xl text-white shadow-2xl"
               onClick={() => {
                scrollToShopLocationSection();
               }}
               >
               Shop Location
            </button>
            <button 
              className="bg-[var(--color-primary)] px-32 py-5 min-w-[380px] radius-4 rounded-full text-3xl text-white shadow-2xl"
              onClick={() => {
                scrollToServicesSection();
              }}
              >Our Services</button>
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
      <section id="location-section" className="w-screen h-fit min-h-screen bg-sky-700  relative ">

        <div id="positioner-div" className="w-full flex ">

          <div id="left-positioner-div" className=" min-w-[50vw] flex flex-col justify-center items-center">
            <h3 className="text-6xl text-center mb-[32px]">Looking for our <br /> Shop?</h3>

             <div className="">
               <p id="hero-h2" className="text-center text-[20px] italic tracking-[8px] font-libre text-white mt-[32px]">
                We are Located at:
              </p>
              <p 
              className="text-4xl font-caudex mb-[32px] border-b border-white py-[24px] flex flex-col justify-center items-center text-center">Rua João de Deus 24 A <br />
              8200-142 Albufeira, <br /> Portugal </p>
              <GetDirectionsButton></GetDirectionsButton>
             </div>
          </div>

          <div id="right-positioner-div" className="h-[450px] w-full flex items-center justify-center flex-col">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!4v1763936381453!6m8!1m7!1sg9dnYX8yMmJNt1DQrpW1EA!2m2!1d37.08726626707691!2d-8.253348173524856!3f203.83644824871865!4f-1.5222311703891336!5f0.7820865974627469" 
              // width="750" 
              // height="500" 
              style={{border:0}}
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full">
            </iframe>
          </div>

        </div>
        
      </section>

      {/* TIMETABLE */}
      <section id="timetable-section" className="w-screen min-h-screen text-black bg-white relative">
        
        <div id="positioner-div" className=" w-full h-auto flex">

          <div id="right-positioner-div" className=" h-[100%] w-[50vw] max-w-[50vw] flex justify-center flex-col">
            <div className="w-full h-[600px] relative">
              <Image
                src="/watches.webp"
                alt="Watches"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>

          <div id="left-positioner-div" className="h-[100%] w-full max-w-[50vw] flex items-center justify-center flex-col px-[18rem]">
            <h3 className="text-6xl text-center mb-28 self-center">Timetable</h3>
            <p id="hero-h2" className="text-center text-[20px] italic tracking-[8px] mt-8 font-libre text-[var(--color-secondary)] mb-[32px]">
              Openening & Closing Hours
            </p>


            <div id="shop-status" className="border-b border-black py-[24px] flex flex-col justify-center items-start w-full">
              <h4 className="text-3xl mb-[4px]">Status</h4>
              <p className="font-caudex text-2xl">Our shop is currently <em className="not-italic font-bold text-red-700"> Closed</em></p>
              <p className="font-caudex text-2xl">We open <em className="not-italic font-bold">tomorrow at 10:30am</em></p>
            </div>

            <div id="open-closed" className="flex flex-row border-b border-black gap-32 w-full">
              <div className="py-[24px]">
                <h4 className="text-3xl mb-[4px]">Open</h4>
                <p className="font-caudex text-2xl"><em className="not-italic font-bold text-[var(--color-secondary)]">Monday</em> to <em className="not-italic font-bold text-[var(--color-primary)]">Friday</em></p>
                <p className="font-caudex text-2xl">From <em className="not-italic font-bold">10:30am</em> to  <em className="not-italic font-bold">1:30pm</em></p>
              </div>
              <div className="py-[24px]">
                <h4 className="text-3xl mb-[4px]">Closed</h4>
                <p className="font-caudex text-2xl"><em className="not-italic font-bold">Saturday</em> & <em className="not-italic font-bold">Sunday</em></p>
              </div>
            </div>





          </div>
        </div>
      </section>


      {/* About Us */}
      <section id="about-section" className="w-screen h-auto min-h-screen text-black bg-gray-300 relative">

        <div id="positioner-div" className=" w-full h-auto flex pb-[184px]">


            <div id="left-positioner-div" className="h-[100%] w-full max-w-[50vw] flex items-center justify-center flex-col px-[18rem]">
              <h3 className="text-6xl text-center mb-28 self-center">About Us</h3>
              <p id="hero-h2" className="text-center text-[20px] italic tracking-[8px] mt-8 font-libre text-[var(--color-secondary)] mb-[32px]">
                50 years of expertiese
              </p>
              <article className="text-4xl font-thin font-caudex">
                <p className="mb-16">For over 50 years, Joalharia Cavalinho has been dedicated to the art of fine jewelry and watchmaking with the same passion, care, and craftsmanship that defined our beginnings.</p>
                <p>We are a family-run, heritage shop known for our close relationship with customers and our unique selection of pieces that stand the test of time.</p>
              </article>
            </div>

            
            <div id="left-positioner-div" className=" h-[100%] w-[50vw] max-w-[50vw] flex justify-center flex-col">
              <div className="w-full h-[600px]  relative">
                <Image
                  src="/shop-outside.webp"
                  alt="Watches"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>


          <div id="positioner-div" className="w-full h-screen flex ">

           

            
            <div id="left-positioner-div" className=" h-[100%] w-[50vw] max-w-[50vw] flex justify-center flex-col">
              <div className="w-full h-[600px] relative">
                <Image
                  src="/vitrine.webp"
                  alt="Watches"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

             <div id="left-positioner-div" className="h-[100%] w-full max-w-[50vw] flex items-center justify-center flex-col px-[18rem]">
              <p id="hero-h2" className="text-center text-[20px] italic tracking-[8px] mt-8 font-libre text-[var(--color-secondary)] mb-[32px]">
                A Boutique of Treasures
              </p>
              <article className="text-4xl font-thin font-caudex">
                <p className="mb-16">Our space—warm, intimate, and reminiscent of a small brocante—is filled with exceptional finds, refined jewelry, Portuguese-made creations, and carefully chosen second-hand beauties. Here you’ll discover everything from Pandora, Seiko, and Filigree pieces to Breitling, Rolex, wedding bands, collectors’ items, and many other rare artifacts.</p>
                <p className="mb-16">More than a store, we are a meeting place for enthusiasts who value authenticity, history, and lasting quality. With hundreds of satisfied customers over the decades, we continue to offer expert knowledge, dedicated service, and that unmistakable feeling of finding something that seems meant just for you.</p>
                <p>At Joalharia Cavalinho, there’s always a treasure waiting.</p>
              </article>
            </div>

          </div>

      </section>


<section id="owner-section" className="w-screen h-screen min-h-screen text-black bg-white relative"></section>

      <section id="services-section" className="w-screen h-screen min-h-screen text-black bg-white relative"></section>
      <section id="products-section" className="w-screen h-screen min-h-screen text-black bg-white relative"></section>
      <section id="highlights-section" className="w-screen h-screen min-h-screen text-black bg-white relative"></section>
      <section id="contact-section" className="w-screen h-screen min-h-screen text-black bg-white relative"></section>









    </>
  )
}

       

