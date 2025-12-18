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
            <div className="w-full h-[450px] relative">
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
              <div className="w-full h-[450px]  relative">
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
              <div className="w-full h-[450px] relative">
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

      {/* MEET THE OWNER */}
      <section id="owner-section" className="w-screen min-h-screen text-black bg-white relative">

         <div id="positioner-div" className="w-full h-auto flex pb-[184px]">

          <div id="right-positioner-div" className="h-[100%] min-w-[50vh] flex items-center justify-center flex-col px-[18rem]">

              <article className="text-4xl font-thin font-caudex">
                <Image
                  src="/jorge-matias.webp"
                  alt="Watches"
                  width={600}
                  height={600}
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-fit float-right mr-96 ml-24 mb-24 relative left-64"
                  />
              <h3 className="font-libre text-6xl text-center mb-28 self-center">The Man Behind the <br /> Counter</h3>
              <p id="hero-h2" className="text-center text-[20px] italic tracking-[8px] mt-8 font-libre text-[var(--color-secondary)] mb-[32px]">
                Jorge Cabrita Matias
              </p>
                <p className="mb-16">At the heart of Joalharia Cavalinho is Jorge Cabrita Matias, a Portuguese craftsman, artisan and artist, who's life has been shaped by artistry, precision, and genuine human connection. </p>
                <p className="mb-16">Jorge began his artisan journey in his early twenties in Belgium, where he founded the renowned boutique La Boucle d’Art, just steps from Brussels’ iconic Grand Place.</p>
                <p className="mb-16">There, he learned to master multiple disciplines—salesmanship, craftsmanship, clockworking, goldsmithing, and artistic design — building a reputation for excellence and authenticity.</p>
                <p className="mb-16">Decades later, his path led him back to his roots in the Algarve, where he established Joalharia Cavalinho in Albufeira. For over 30 years, the shop has flourished under his steady hand, becoming a trusted, beloved presence in the community.</p>
                <p className="mb-16">Jorge is more than a jeweler or a watchmaker—he is a passionate storyteller, an artisan with an eye for detail, and a warm, welcoming guide who takes time to understand every client’s needs and desires. His dedication, experience, and heartfelt approach are the soul of the shop, and the reason so many customers return year after year.</p>
                {/* <img src="/jorge-matias.webp" className="float-right" alt="" /> */}
              </article>

            </div>
         </div>
      </section>

      {/* SERVICES */}
      <section id="services-section" className="w-screen min-h-screen text-black bg-[#E2E2E2] relative">
        <div id="positioner-div" className="w-full h-fit flex">
          <div className="flex flex-col items-center justify-center w-full">
            <h3 className="font-libre text-6xl text-center mb-28 self-center">Our Services</h3>
            <p id="hero-h2" className="text-center text-[20px] italic tracking-[8px] mt-8 font-libre text-[var(--color-secondary)] mb-[32px]">
              Every Service You Need <br /> All Under One Roof
            </p>
            <div 
              id="card-container" 
              className="flex flex-wrap items-left justify-evenly w-full h-fit px-[10vw] gap-y-10">
                
                <ServiceCard service="Watch Battery Change" image="/service-battery-change.jpeg"></ServiceCard>
                <ServiceCard service="Clock and Watch Repairs" image="/service-watch-repair.jpeg"></ServiceCard>
                <ServiceCard service="Clock and Watch Cleaning" image="/service-watch-cleaning.jpeg"></ServiceCard>
                <ServiceCard service="Jewelery Repairs" image="/service-jewellery-repair.jpeg"></ServiceCard>
                <ServiceCard service="Jewelery Cleaning" image="/service-jewellery-cleaning.jpg"></ServiceCard>
                <ServiceCard service="Jewelery Sizing Adjustment" image="/service-jeweller-sizing.jpeg"></ServiceCard>
                <ServiceCard service="Stone Setting" image="/service-stone-settings.jpeg"></ServiceCard>
                <ServiceCard service="Engraving" image="/service-engraving.jpeg"></ServiceCard>
                <ServiceCard service="Bath Plating (Gold and Silver)" image="/service-bath.jpeg"></ServiceCard>
                <ServiceCard service="Scratch Removal (Watches and Jewelery)" image="/service-scratch-removal.jpeg"></ServiceCard>
                <ServiceCard service="Custom Jewelery (to order)" image="/service-custom-jewellery.jpeg"></ServiceCard>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products-section" className="w-screen min-h-screen text-black bg-white relative">
        <div id="positioner-div" className="w-full h-fit flex">
          <div className="flex flex-col items-center justify-center w-full">
            <h3 className="font-libre text-6xl text-center mb-28 self-center">Our Products</h3>
            <p id="hero-h2" className="text-center text-[20px] italic tracking-[8px] mt-8 font-libre text-[var(--color-secondary)] mb-[32px]">
              Where Every Corner Reveals a Treasure
            </p>
            <div 
              id="card-container" 
              className="flex flex-wrap items-left justify-evenly w-full h-fit px-[10vw] gap-y-10">
                
                <ProductCard service="New Jewellery" image="/service-battery-change.jpeg"></ProductCard>
                <ProductCard service="Second Hand Jewellery" image="/service-watch-repair.jpeg"></ProductCard>
                <ProductCard service="Second Hand Wrist Watches" image="/service-watch-cleaning.jpeg"></ProductCard>
                <ProductCard service="Second Hand Pocket Watches" image="/service-jewellery-repair.jpeg"></ProductCard>
                <ProductCard service="Portuguese Hand Made Jewels (Silver & Gold)" image="/service-jewellery-cleaning.jpg"></ProductCard>
                <ProductCard service="Jewelery Sizing Adjustment" image="/service-jeweller-sizing.jpeg"></ProductCard>
                <ProductCard service="Stone Setting" image="/service-stone-settings.jpeg"></ProductCard>
                <ProductCard service="Engraving" image="/service-engraving.jpeg"></ProductCard>
                <ProductCard service="Bath Plating (Gold and Silver)" image="/service-bath.jpeg"></ProductCard>
                <ProductCard service="Scratch Removal (Watches and Jewelery)" image="/service-scratch-removal.jpeg"></ProductCard>
                <ProductCard service="Custom Jewelery (to order)" image="/service-custom-jewellery.jpeg"></ProductCard>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section id="highlights-section" className="w-screen h-fit text-white bg-black relative">
         <h3 className="font-libre text-6xl text-center mb-28 self-center">Boutique Highlights</h3>
            <p id="hero-h2" className="text-center text-[20px] italic tracking-[8px] mt-8 font-libre text-[var(--color-secondary)] mb-[32px]">
              Exceptional Pieces - For Exceptional People
            </p>
            <p className="text-center font-caudex text-4xl">More exceptional treasures coming soon...</p>
      </section>

      {/* CONTACT */}
      <section id="contact-section" className="w-screen min-h-screen h-fit text-black bg-white relative">

        <div id="positioner-div" className="w-full flex ">

          <div id="left-positioner-div" className=" min-w-[50vw] h-fit flex flex-col justify-center items-center">
            <div id="wrapper" className="bg-red-500 px-[30%]">
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

          <div id="right-positioner-div" className="bg-blue-500 h-fit w-full flex items-center justify-center flex-col">
               {/* <p className="text-center text-[20px] italic tracking-[8px] font-libre text-black my-[32px]">
                  Email Us Below
                </p>

                <form className="flex flex-col w-full px-[20%] h-fit gap-4" action="">
                  <label htmlFor="topic">Topic</label>
                  <input id="topic" type="text" placeholder="Topic of Contact (ex; Request Sizing Adjustment for Wedding Rings)" required/>
                  
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" placeholder="Your Full Name" required/>
                  
                  <div className="flex">
                    <div>
                      <label htmlFor="email">Email</label>
                      <input id="email" type="email" placeholder="Your Email" required/>
                    </div>
                    <div>
                      <label htmlFor="phone">Phone (Optional)</label>
                      <input id="phone" type="phone" placeholder="Your Phone Number (Optional)" />
                    </div>
                  </div>
                  
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message"  placeholder="Your message here..."></textarea>
                </form> */}

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

       

