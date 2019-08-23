//this script establishes an institutions_object for buildings
//and copies the institution data into the building institutions arrays
//it then does the same with entrances/entries

var fs = require('fs');
var json=null;
var instJson=null;
var entrJson=null;



function writeToFile(json){
  fs.writeFile("./data/lageplan_matuzk_geoJSONFiles/buildings_institutions.geojson",JSON.stringify(json), "utf-8", (err) => {
        if (err) console.log(err);
        console.log("Successfully Written to File.");
  });
}

fs.readFile('./data/lageplan_matuzk_geoJSONFiles/buildings_without_institutions_polygons.geojson', 'utf8', (err, fileContents) => {
  if (err) {
    console.error(err)
    return
  }
  try {

     json = JSON.parse(fileContents);

    for (feature in json.features){
      json.features[feature].properties.institutions=[];//make institutions array
      json.features[feature].properties.entrances=[];//make entrances array for later
      json.features[feature].properties.restrooms=[] //make restrooms array
    }


      fs.readFile('./data/lageplan_matuzk_geoJSONFiles/institutions.geojson', 'utf8', (err, fC) => {
              if (err) {
                console.error(err)
                return
              }
              try {
              instJson=JSON.parse(fC);
               console.log(instJson);
               console.log(json);

              //now, for each of the institutions get the property object and push it to the corresponding building institutions array
              for(feature in json.features){
                var key= json.features[feature].properties.building_id;
                for(inst in instJson.features){
                  var for_key = instJson.features[inst].properties.building_id;
                  if(key==for_key){
                    json.features[feature].properties.institutions.push(instJson.features[inst].properties);
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
