var fs=require('fs');

var json=null;

        function writeToFile(json){
          fs.writeFile("./data/a11y_uzk/a11y_buildings.geojson",JSON.stringify(json), "utf-8", (err) => {
                if (err) console.log(err);
                console.log("Successfully Written to File.");
          });
        }

        fs.readFile('./data/lageplan_matuzk_geoJSONFiles/temp_buildings.geojson', 'utf8', (err, fileContents) => {
          if (err) {
            console.error(err)
            return
          }
          try {
             json = JSON.parse(fileContents);
             for(feature in json.features){
              //  json.features[feature].properties.accessability.entrances.push(json.features[feature].properties.entrances);
              // json.features[feature].properties.accessability.restrooms.push(json.features[feature].properties.restrooms);
              json.features[feature].properties.accessability.entrances = json.features[feature].properties.entrances;
              json.features[feature].properties.accessability.restrooms = json.features[feature].properties.restrooms;
                delete json.features[feature].properties.restrooms;
                delete json.features[feature].properties.entrances;
            }

              //finally write this to a file
           writeToFile(json);
          } catch(err) {
            console.error(err);
          }
        });
