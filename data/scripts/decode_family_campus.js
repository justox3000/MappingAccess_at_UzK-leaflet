//script to add a name to the type of facility of family campus
const fs = require('fs')

fs.readFile('./data/lageplan_matuzk_geoJSONfiles/family_campus_coded.geojson', 'utf8', (err, fileContents) => {
  if (err) {
    console.error(err)
    return
  }
  try {
    const json = JSON.parse(fileContents);
    //console.log(JSON.stringify(json));

    for(feature in json.features){ //loop through all feature objects in feature array 'features'
          console.log(JSON.stringify(json.features[feature].properties.fc_facility_type));
          //add a key-value pair for each type of facility clarifying its type
          switch(json.features[feature].properties.fc_facility_type){
            case 0:
              json.features[feature].properties.fc_facility_name="Wickelraum";
              break;
            case 1:
              json.features[feature].properties.fc_facility_name="Stillraum";
              break;
            case 2:
              json.features[feature].properties.fc_facility_name="Eltern-Kind-Raum";
              break;
            case 3:
              json.features[feature].properties.fc_facility_name="Kindertagesstätte";
              break;
            case 4:
              json.features[feature].properties.fc_facility_name="Spielplatz";
              break;
            default:
                json.features[feature].properties.fc_facility_name="NULL";
            }

          console.log(JSON.stringify(json.features[feature].properties));
          console.log("successfully decoded object");
      }
    //write the result to file
    fs.writeFile("./data/lageplan_matuzk_geoJSONFiles/family_campus_decoded.geojson",JSON.stringify(json), "utf-8", (err) => {
      if (err) console.log(err);
      console.log("Successfully Written to File.");
    });

  } catch(err) {
    console.error(err)
  }
});
