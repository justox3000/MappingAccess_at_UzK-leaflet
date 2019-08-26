// Initialize leaflet.js
var L = require('leaflet');

// Initialize the map
var map = L.map('map', {
  scrollWheelZoom: false
});

// Set the position and zoom level of the map
map.setView([50.928865, 6.928731], 15);

/*	Variety of base layers */
var osm_mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; OSM Mapnik <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var osm_bw_mapnik = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; OSM Black and White Mapnik<a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var osm_de = L.tileLayer('http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; OSM Deutschland <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
});


var stamen_Terrain = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 18,
	ext: 'png'
});


// Create base layers group object
var baseLayers = {
	"OSM Mapnik": osm_mapnik,
	"OSM Black White Mapnik": osm_bw_mapnik,
	"OSM Germany": osm_de,
	"Stamen Toner Lite": stamen_TonerLite,
	"Stamen Terrain": stamen_Terrain
};

// Add baseLayers to the map
L.control.layers(baseLayers, null).addTo(map);

var controlLayers = L.control.layers().addTo(map);

//load GeoJSON buildings
var buildings = $.getJSON("../data/a11y_uzk/a11y_buildings.geojson", function(data){
	//add GeoJSON layer to the map once the file is loaded
	L.geoJSON(data).addTo(map);

	controlLayers.addOverlay(geojsonLayer, 'Title');
});

//load GeoJSON family campus
var family = $.getJSON("../data/a11y_uzk/a11y_family_campus.geojson", function(data){
	//add GeoJSON layer to the map once the file is loaded
	L.geoJSON(data).addTo(map);
});

//load GeoJSON parking
var parking = $.getJSON("../data/a11y_parking.geojson", function(data){
	//add GeoJSON layer to the map once the file is loaded
	L.getJSON(data).addTo(map);
});

var overlayMaps = {
	"Buildings": buildings,
	"Family Campus": family,
	"Parking": parking
};

L.control.layers(null, overlayMaps).addTo(map);