// Initialize leaflet.js
var L = require('leaflet');

/*
When pulling in GeoJSON from external data source or hosting it locally,
you’ll need to load the data using AJAX. jQuery provides a standard getJSON function
which will load JSON from an external source and then fire a callback once the data has loaded.
leaflet plugin: leaflet ajax
 Add GeoJSON data via ajax or jsonp.
*/

//OSM tiles attribution and URL
var osmLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
var osmURL = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib = '&copy; ' + osmLink;

//Carto tiles attribution and URL
var cartoLink = '<a href="http://cartodb.com/attributions">CartoDB</a>';
var cartoURL = 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png';
var cartoAttrib = '&copy; ' + osmLink + ' &copy; ' + cartoLink;

//Stamen Toner tiles attribution and URL
var stamenURL = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.{ext}';
var stamenAttrib = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

//Creation of map tiles
var osmMap = L.tileLayer(osmURL, {attribution: osmAttrib});
var cartoMap = L.tileLayer(cartoURL, {attribution: cartoAttrib});
var stamenMap = L.tileLayer(stamenURL,{
  attribution: stamenAttrib,
  subdomains: 'abcd',
  ext: 'png'
});

//Map creation
var map = L.map('map',{
  zoomControl:false,
  layers: [osmMap]
}).setView([50.927, 6.931], 16);

//Base layers definition and addition
var baseLayers = {
  "OSM Mapnik": osmMap,
  "Carto DarkMatter": cartoMap,
  "Stamen Toner": stamenMap
};

 //Add baseLayers to map as control layers
 L.control.layers(baseLayers).addTo(map);

//create custom zoom Control on right bottom
var zoomControl = L.control.zoom(
  zoomOptions = {position: 'bottomright'}
).addTo(map);

// Initialize the base layer
//offer alternative base layer; include base layer choice toggle on top right of mapbox
var osm_mapnik = L.tileLayer('https://api.mapbox.com/styles/v1/jlambre1/cjtzjn4xv1ceo1fph8wuq1y9u/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoianVzbGFtYnJlIiwiYSI6ImNqeTB1ZGo4eTAxdXUzbmsyOG1xcmQ1NWMifQ.IWZKtDwcnUCq03fo9-ualg', {
	maxZoom: 19,
	attribution: '&copy; OSM Mapnik <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


//var toilets_Layer = new L.GeoJSON.AJAX("https://raw.githubusercontent.com/justox3000/MappingAccess-UzK-leaflet/master/data/plain_geojsons/toilets.geojson");
