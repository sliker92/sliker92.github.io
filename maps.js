var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 55.755733, lng: 37.609544 },
    zoom: 17
  });
}
