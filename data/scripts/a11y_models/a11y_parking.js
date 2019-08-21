//this script creates an accessability object for parkings
//this describes the physical and human rated accessability to a parking space

//it is part of the property object of a parking object

//inspired by A11yJSON by @sozialhelden https://sozialhelden.github.io/ac-format/

parkingAccessability = {//information about parking facilities around venue. null or forWheelChairUsers
  description:"",//description of parking opportunity; narrative data
  count:3, //definition of how many parking lots are available
  distanceToBuilding:{//distance to next building
    Quantity:{//object to describe a Quantity
        isEstimate: true, //true if number was estimated, false if measured
        value:100, //value of measurement, e.g. 20
        unit: "m" //unit, e.g. cm, m...
    }
  },
  isWheelChairParkingOnly:false, //if reserved for wheelchair
  isGarage:false, //if garage or outside parking
  maxLengthParkingLot:{//max length of parking lot
    Quantity:{//object to describe a Quantity
        isEstimate: false, //true if number was estimated, false if measured
        value:2, //value of measurement, e.g. 20
        unit: "m" //unit, e.g. cm, m...
    }
  },
  maxWidthParkingLot: {//max width of parking lot
    Quantity:{//object to describe a Quantity
        isEstimate: true, //true if number was estimated, false if measured
        value:2, //value of measurement, e.g. 20
        unit: "m" //unit, e.g. cm, m...
    }
  }
};


fs = require('fs');

fs.readFile('./data/lageplan_matuzk_geoJSONFiles/parking_decoded.geojson', 'utf8', (err, fileContents) => {
  if (err) {
    console.error(err)
    return
  }
  try {
    const json = JSON.parse(fileContents);
    for(feature in json.features){ //loop through all feature objects in feature array 'features'
      //add parkingAccessability object to properties
      json.features[feature].properties.accessability = parkingAccessability;
    }
    //write the result to file
    console.log(JSON.stringify(json));

    fs.writeFile("./data/a11y_uzk/a11y_parking.geojson",JSON.stringify(json), "utf-8", (err) => {
      if (err) console.log(err);
      console.log("Successfully Written to File.");
    });

  } catch(err) {
    console.error(err)
  }
});
