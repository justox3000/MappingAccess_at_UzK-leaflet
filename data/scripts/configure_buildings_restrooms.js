//this script establishes an institutions_object for buildings
//and copies the institution data into the building institutions arrays
//it then does the same with entrances/entries

var fs = require('fs');
var json=null;
var restroomJson=null;



function writeToFile(json){
  fs.writeFile("./data/lageplan_matuzk_geoJSONFiles/buildings_institutions_restrooms.geojson",JSON.stringify(json), "utf-8", (err) => {
        if (err) console.log(err);
        console.log("Successfully Written to File.");
  });
}

fs.readFile('./data/lageplan_matuzk_geoJSONFiles/buildings_institutions.geojson', 'utf8', (err, fileContents) => {
  if (err) {
    console.error(err)
    return
  }
  try {

     json = JSON.parse(fileContents);

      fs.readFile('./data/lageplan_matuzk_geoJSONFiles/toilets.geojson', 'utf8', (err, fC) => {
              if (err) {
                console.error(err)
                return
              }
              try {
              tJson=JSON.parse(fC);
               console.log(tJson);
               console.log(json);

              //now, for each of the institutions get the property object and push it to the corresponding building institutions array
              for(feature in json.features){
                var key= json.features[feature].properties.building_id;
                for(toil in tJson.features){
                  var for_key = tJson.features[toil].properties.toilet_building_id;
                  if(key==for_key){
                    json.features[feature].properties.restrooms.push(tJson.features[toil].properties);
                    console.log('pushed institution object to building institutions array');
                  }
                }
              }
            //finally write this to a file
              writeToFile(json);

                } catch(err) {
                console.error(err)
              }
      });

  } catch(err) {
    console.error(err)
  }
});
