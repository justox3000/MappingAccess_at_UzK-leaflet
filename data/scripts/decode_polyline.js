/*Script used to convert a polyline-encoded GeoJSON to standard GeoJSON coordinate arrays.
using npm package geojson-polyline
Parse buildings_polyline.geojson which contains data on the bulildings and institutions
extracted from Lageplan DB and converted to GeoJSON in QGIS
*/

/*
example of package function:
  const polygon = {
    type: 'Polygon',
    coordinates: [polyline]//replace with strings containing polyline encoded coordinates
  }

  const geoJSON = decode(polygon)
    => { type: 'Polygon', coordinates: [[[-81.63829, 41.48093], [-81.63628, 41.47993], [-81.63625, 41.47931], [-81.63829, 41.48033], [-81.63829, 41.48093]]]}

*/

/*
example of a feature object in buildings_polyline.geojson

  { "type": "Feature",
    "properties": { "building_id": "1", "building_polygon_id": 122, "building_polyline": "q|xuHsiei@K]VSCYf@QAIRGCWTIFr@IBBZJEDp@UFCYSHCY]JBP", "building_number": "1", "building_name": "Klinik-Verwaltung", "building_street": "Kerpener Str.", "building_housenr": "68", "building_postalcode": "50931", "building_city": "Köln", "building_image": "ME-1.jpg", "building_affiliation": 1, "institution_id": "585", "institution_name": "Transplantationszentrum", "institution_shortname": null, "institution_tel": "0221 - 478 - 86339", "institution_fax": "0221 - 478 - 86342", "institution_homepage": "http:\/\/transplantationszentrum.uk-koeln.de\/", "institution_floor": "NULL", "institution_buildingspecification": null, "institution_mail": "transplantation@uk-koeln.de", "institution_wwwpath": null, "institution_faculty": "4" },
    "geometry": null },

*/


//    polygon : A GeoJSON object whose coordinates are expressed as polylines (required).
//    options : An optional Object with the following possible properties:
//              precision: A Number specifying the precision that the polyline was encoded with. Default is 5.

const fs = require('fs')

const decode = require('geojson-polyline').decode //calls the function decode of the package geojson-polyline

var polyline; //will be used to store polyline in buildings_polyline.geojson

var polygon; //variable will store polygon object with coordinates key that contains as a value the polyline to be decoded
var geoJSON; //variable that stores the decoded polygon to be used as a value of geometry object in each feature (replacing "null")

var json=null; //variable to store the file which stores the json object to be manipulated ("buildings_polyline.geojson")

//var decoded_json = null; //variable to store the file to which  the decoded json object will be written ("buildings_polygons.geojson")

fs.readFile('./data/lageplan_matuzk_geoJSONFiles/buildings_polyline.geojson', 'utf8', (err, fileContents) => {
  if (err) {
    console.error(err)
    return
  }
  try {
    const json = JSON.parse(fileContents)
    //do stuff with JSON:
      //we want to access the properties key which stores an object with keys
      //there, we want to access the key "building_polyline" and extract its value that is returned.
      //then, we want to decode the polyline using the geoJSON-polyline decode() function which only takes a geoJSON object wiht coordinates as polylines
      //so, we want create a polygon object that stores the polyline variable in coordinates feature
      //console.log(json.features);

    for(feature in json.features){ //loop through all feature objects in feature array 'features'
          polyline = json.features[feature].properties.building_polyline; //stores the encoded polyline in the variable polyline
          //console.log(polyline);

          polygon = { //create a polygon object that will be used by the decoding function
            type: 'Polygon',
            coordinates:[polyline]
          };
        //  console.log(polygon);
          geoJSON=decode(polygon);
        //  console.log(JSON.stringify(geoJSON));

          //replace geometry value with geoJSON object containing the decoded coordinates.
          if (json.features[feature].geometry === null) {
            json.features[feature].geometry=geoJSON;//replace null with decoded polyline result (polygon)
          }
          //console.log(JSON.stringify(json.features[feature].geometry));
        console.log("successfully decoded object");
      }
    //write the result to file
    console.log(JSON.stringify(json));

    fs.writeFile("./data/lageplan_matuzk_geoJSONFiles/buildings_polygons.geojson",JSON.stringify(json), "utf-8", (err) => {
      if (err) console.log(err);
      console.log("Successfully Written to File.");
    });

  } catch(err) {
    console.error(err)
  }
});
