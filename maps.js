var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 55.755733, lng: 37.609544 },
    zoom: 17
  });
  var myMap = document.getElementById('map');
  var modal = document.querySelector('.map-modal-window');
  var newModal = modal.cloneNode(true);
  newModal.className = 'map-modal-window';
  myMap.appendChild(newModal);
  console.log(newModal);
}