//script to add a name to the type of parking
const fs = require('fs')


fs.readFile('./data/lageplan_matuzk_geoJSONfiles/parking_coded.geojson', 'utf8', (err, fileContents) => {
  if (err) {
    console.error(err)
    return
  }
  try {
    const json = JSON.parse(fileContents);
    //console.log(JSON.stringify(json));
    for(feature in json.features){ //loop through all feature objects in feature array 'features'
          console.log(JSON.stringify(json.features[feature].properties.parking_affiliation));
          //add a specification for each value of the affiliation of the parking
          switch(json.features[feature].properties.parking_affiliation){
            case 0:
              json.features[feature].properties.parking_affiliation_name="öffentlich";
              break;
            case 1:
              json.features[feature].properties.parking_affiliation_name="Uni";
              break;
            case 2:
              json.features[feature].properties.parking_affiliation_name="Klinik";
              break;
            default:
                json.features[feature].properties.parking_affiliation_name="NULL";
            }

          console.log(JSON.stringify(json.features[feature].properties));
          console.log("successfully decoded object");
      }
    //write the result to file
    fs.writeFile("./data/lageplan_matuzk_geoJSONFiles/parking_decoded.geojson",JSON.stringify(json), "utf-8", (err) => {
      if (err) console.log(err);
      console.log("Successfully Written to File.");
    });

  } catch(err) {
    console.error(err)
  }
});
