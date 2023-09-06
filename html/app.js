"use strict";
let markers = [];
function initMap() {
  const myLatLng = {
    lat: 40.052364349365234,
    lng: 0.07500798255205154
  };
  const map = new google.maps.Map(document.getElementById("gmp-map"), {
    zoom: 14,
    center: myLatLng,
    fullscreenControl: false,
    zoomControl: true,
    streetViewControl: false
  });

  // Agregar evento de clic al marcador
  const marker = new google.maps.Marker({
    position: myLatLng,
    map,
    title: "My location",
    icon: "./assets/qubonegro.svg"
  });
let infoBoxOpen = false;

  marker.addListener("click", () => {
    if (infoBoxOpen) {
      document.getElementById("info-box").style.display = "none";
      infoBoxOpen = false;
    } else {
      document.getElementById("info-box").style.display = "block";
      infoBoxOpen = true;
    }
  });

  markers.push(marker);
}
