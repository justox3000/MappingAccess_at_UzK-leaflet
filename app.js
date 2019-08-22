// Initialize leaflet.js
var L = require('leaflet');

//OSM tiles attribution and URL
var osmLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
var osmURL = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib = '&copy; ' + osmLink;

//Stamen Toner tiles attribution and URL
var stamenURL = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.{ext}';
var stamenAttrib = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

//Creation of map tiles
var osmMap = L.tileLayer(osmURL, {attribution: osmAttrib});
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
  "Stamen Toner": stamenMap
};



 //Add baseLayers to map as control layers
 L.control.layers(baseLayers).addTo(map);

 //Fullscreen button
 map.addControl(new L.Control.Fullscreen());

 map.on('fullscreenchange', function () {
  if (map.isFullscreen()) {
      console.log('entered fullscreen');
  } else {
      console.log('exited fullscreen');
  }
});

map.isFullscreen() // Is the map fullscreen?
map.toggleFullscreen() // Either go fullscreen, or cancel the existing fullscreen.

// `fullscreenchange` Event that's fired when entering or exiting fullscreen.
map.on('fullscreenchange', function () {
    if (map.isFullscreen()) {
        console.log('entered fullscreen');
    } else {
        console.log('exited fullscreen');
    }
});

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
