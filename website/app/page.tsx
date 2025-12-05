import Image from "next/image";
import GetDirectionsButton from "./components/GetDirectionBtn";

export default function Home() {
  return (
    <>
        <nav className="w-full bg-[rgba(0,0,0,0.05)] z-50 fixed top-0 font-libre">
          <ul className="max-w-[100vw] flex flex-row justify-around items-center text-white">
            
              <li className="flex flex-row gap-[20px]">
                <a href="">Location</a>
                <a href="">Timetable</a>
                <a href="">About Us</a>
              </li>
            
            <li className="self-center">
              <a href="">
                <div className="flex flex-col justify-center items-center mt-4 relative left-[44px] mb-4">
                  <Image
                    src={"/horse.png"}
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
        </nav>
        
<section id="hero" className="bg-black relative w-[100vw] h-[100vh] flex flex-col justify-center">

    <video
      src="/videos/cavalinho.mp4"
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
      <button className="bg-[var(--color-secondary)] px-32 min-w-[380px] py-2 rounded-full text-xl text-white shadow-2xl">Shop Location</button>
      <button className="bg-[var(--color-primary)] px-32 min-w-[380px] radius-4 rounded-full text-xl text-white shadow-2xl">Our Services</button>
    </div>
  </div>

  <div id="scroll-icon-positioner" className="absolute bottom-0 left-[48%] z-10">
    <div className="flex flex-col items-center">
      <p className="text-sm italic tracking-[10px] relative left-[4px]">scroll</p>
      <div className="h-[48px] w-[1px] bg-white mt-[4px]"></div>
    </div>
  </div>
</section>

    
      <section className="w-screen min-h-screen h-fit bg-blue-400"></section>
      <section className="w-screen min-h-screen h-fit bg-white"></section>
      <section className="w-screen min-h-screen h-fit bg-gray-300"></section>

    </>
  )
}

        {/* Google Maps Integration
        <iframe 
          src="https://www.google.com/maps/embed?pb=!4v1763936381453!6m8!1m7!1sg9dnYX8yMmJNt1DQrpW1EA!2m2!1d37.08726626707691!2d-8.253348173524856!3f203.83644824871865!4f-1.5222311703891336!5f0.7820865974627469" 
          width="600" 
          height="450" 
          style={{border:0}}
          allowFullScreen
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
          </iframe>
          <GetDirectionsButton></GetDirectionsButton> */}

