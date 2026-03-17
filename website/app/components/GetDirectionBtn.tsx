"use client";

export default function GetDirectionsButton() {
  const destinationLat = 37.08720284985456; // your shop latitude
  const destinationLng = -8.253316869535183; // your shop longitude

  const handleClick = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported on this device.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const userLat = pos.coords.latitude;
        const userLng = pos.coords.longitude;

        const url = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${destinationLat},${destinationLng}&travelmode=driving`;

        window.open(url, "_blank");
      },
      () => {
        alert("Unable to retrieve your location.");
      }
    );
  };

  return (
    <button
      onClick={handleClick}
      className="w-full min-w-0 max-w-[360px] rounded-full bg-white px-10 py-4 text-2xl text-black shadow-2xl transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-700 sm:w-full sm:max-w-[420px] sm:px-14 sm:py-4 sm:text-2xl md:w-auto md:min-w-[380px] md:max-w-none md:px-16 md:py-5 md:text-3xl lg:min-w-[380px] lg:px-20 lg:py-5 lg:text-2xl xl:px-32 xl:text-3xl"
    >
      Get Directions
    </button>
  );
}
