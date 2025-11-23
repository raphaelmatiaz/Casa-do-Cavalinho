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
      className="px-4 py-2 bg-black text-white rounded-md"
    >
      Get Directions
    </button>
  );
}
