//describes the physical and human rated accessability to a space

//inspired by A11yJSON by @sozialhelden https://sozialhelden.github.io/ac-format/

var fs=require('fs');
var accessability=null;

accessability = {//information about parking facilities around venue. null or forWheelChairUsers
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

function writeToFile(json){
      fs.writeFile("./data/scripts/a11y_models/a11y_parkingModel.json",JSON.stringify(json), "utf-8", (err) => {
            if (err) console.log(err);
            console.log("Successfully Written to File.");
      });
};

var json = accessability;
console.log(json);
writeToFile(json);
