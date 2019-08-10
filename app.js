// Initialize leaflet.js
var L = require('leaflet');


// Initialize the map
var map = L.map('map', {
  scrollWheelZoom: false,
  zoomControl: false
});

// Set the position and zoom level of the map
map.setView([50.927, 6.931], 16);

// Initialize the base layer
var osm_mapnik = L.tileLayer('https://api.mapbox.com/styles/v1/jlambre1/cjtzjn4xv1ceo1fph8wuq1y9u/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoianVzbGFtYnJlIiwiYSI6ImNqeTB1ZGo4eTAxdXUzbmsyOG1xcmQ1NWMifQ.IWZKtDwcnUCq03fo9-ualg', {
	maxZoom: 19,
	attribution: '&copy; OSM Mapnik <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//zoom control options
var zoomOptions = {
	zoomInText: '+',
	zoomOutText: '-',
	position: 'topright',
};
var zoom = L.control.zoom(zoomOptions); //Creating Zoom Control
zoom.addTo(map); //Adding Zoom Control to map