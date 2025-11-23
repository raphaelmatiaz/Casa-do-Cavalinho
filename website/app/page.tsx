import Image from "next/image";
import GetDirectionsButton from "./components/GetDirectionBtn";

export default function Home() {
  return (
    <div className="w-200 h-200 bg-red-500">

        {/* Google Maps Integration */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!4v1763936381453!6m8!1m7!1sg9dnYX8yMmJNt1DQrpW1EA!2m2!1d37.08726626707691!2d-8.253348173524856!3f203.83644824871865!4f-1.5222311703891336!5f0.7820865974627469" 
          width="600" 
          height="450" 
          style={{border:0}}
          allowFullScreen
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
          </iframe>
          <GetDirectionsButton></GetDirectionsButton>
    </div>
  );
}
