import Image from "next/image";
import GetDirectionsButton from "./components/GetDirectionBtn";

export default function Home() {
  return (
    <>
      <section id="hero" className="w-[100vw] h-screen bg-white">

        <nav className="w-[100%]">
          <ul className="max-w-[100vw] flex flex-row justify-around items-center">
            
              <li className="flex flex-row gap-[20px]">
                <a href="">Location</a>
                <a href="">Timetable</a>
                <a href="">About Us</a>
              </li>
              
              
            
            <li className="self-center">
              <a href="">
                <div className="flex flex-col justify-center items-center mt-4">
                  <Image
                    src={"/horse.svg"}
                    width={120}
                    height={120}
                    alt="Official Logo">
                  </Image>
                  <div className="wrapper flex flex-col items-center justify-center text-center">
                    <h1 className="text-xl tracking-[3px]">Joalharia Cavalinho</h1>
                    <h2 className="text-[8px] italic tracking-[4px]">Goldsmithing and Clockworking <br />Since  1975</h2>
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

