// Initialize leaflet.js
var L = require('leaflet');


/*
When pulling in GeoJSON from external data source or hosting it locally,
you’ll need to load the data using AJAX. jQuery provides a standard getJSON function
which will load JSON from an external source and then fire a callback once the data has loaded.
*/

//use get-json module to get json documents (instaed of using jquery)
var getJSON = require('get-json')



// Initialize the map and set
var map = L.map('map', {
  //zoom control options
  scrollWheelZoom: true,
  zoomControl: false,
});

//create custom zoom Control on right bottom
var zoomControl = L.control.zoom(
  zoomOptions = {position: 'bottomright'}
).addTo(map);

// Set the position and zoom level of the map
//later set so that we always automatically zoom to see the data
map.setView([50.927, 6.931], 16);

// Initialize the base layer
//offer alternative base layer; include base layer choice toggle on top right of mapbox
var osm_mapnik = L.tileLayer('https://api.mapbox.com/styles/v1/jlambre1/cjtzjn4xv1ceo1fph8wuq1y9u/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoianVzbGFtYnJlIiwiYSI6ImNqeTB1ZGo4eTAxdXUzbmsyOG1xcmQ1NWMifQ.IWZKtDwcnUCq03fo9-ualg', {
	maxZoom: 19,
	attribution: '&copy; OSM Mapnik <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
