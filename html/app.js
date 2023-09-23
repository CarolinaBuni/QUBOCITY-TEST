"use strict";

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

  // Define la URL de la imagen del nuevo icono
  const customIconUrl = './assets/qubonegro.svg'; // Reemplaza con la URL de tu imagen

  // Crea un nuevo marcador con el icono personalizado
  const marker = new google.maps.Marker({
    position: myLatLng,
    map,
    title: "My location",
    icon: customIconUrl
  });

  // Agrega un evento click al marcador
  marker.addListener("click", function() {
    // Define la URL de la página web que deseas abrir
    const webpageUrl = 'https://www.spatial.io/s/Qubo-Factory-Meeting-Room-650d7b39fa3720c215733286?share=6752416412510878923'; // Reemplaza con la URL de tu página web

    // Abre la página web en una nueva ventana o pestaña
    window.open(webpageUrl, '_blank');
  });
}
