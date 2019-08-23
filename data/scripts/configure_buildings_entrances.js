//this script establishes an institutions_object for buildings
//and copies the institution data into the building institutions arrays
//it then does the same with entrances/entries

var fs = require('fs');
var json=null;
var enentJson=null;



function writeToFile(json){
  fs.writeFile("./data/lageplan_matuzk_geoJSONFiles/buildings_institutions_restrooms_entrances.geojson",JSON.stringify(json), "utf-8", (err) => {
        if (err) console.log(err);
        console.log("Successfully Written to File.");
  });
}

fs.readFile('./data/lageplan_matuzk_geoJSONFiles/buildings_institutions_restrooms.geojson', 'utf8', (err, fileContents) => {
  if (err) {
    console.error(err)
    return
  }
  try {

     json = JSON.parse(fileContents);

      fs.readFile('./data/lageplan_matuzk_geoJSONFiles/entries.geojson', 'utf8', (err, fC) => {
              if (err) {
                console.error(err)
                return
              }
              try {
              entJson=JSON.parse(fC);
               console.log(entJson);
               console.log(json);

              //now, for each of the institutions get the property object and push it to the corresponding building institutions array
              for(feature in json.features){
                var key= json.features[feature].properties.building_id;
                for(ent in entJson.features){
                  var for_key = entJson.features[ent].properties.entries_gebaude_id;
                  if(key==for_key){
                    json.features[feature].properties.entrances.push(entJson.features[ent].properties);
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
