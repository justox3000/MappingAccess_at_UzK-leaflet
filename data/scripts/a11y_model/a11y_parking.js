//this script creates an accessability object for parkings
//this describes the physical and human rated accessability to a parking space

//it is part of the property object of a parking object

//inspired by A11yJSON by @sozialhelden https://sozialhelden.github.io/ac-format/

//conventions:
//undefined always indicates unknown, null is used for not applicable
//or for "there is none"


parkingAccessability = {//information about parking facilities around venue. null or forWheelChairUsers
  description:"",//description of parking opportunity; narrative data
  count:0, //definition of how many parking lots are available
  distanceToBuilding:{//distance to next building
    Quantity:{//object to describe a Quantity
        isEstimate: undefined, //true if number was estimated, false if measured
        value:0, //value of measurement, e.g. 20
        unit: "" //unit, e.g. cm, m...
    }
  },
  isWheelChairParkingOnly:undefined, //if reserved for wheelchair
  isGarage:undefined, //if garage or outside parking
  maxLengthParkingLot:{//max length of parking lot
    Quantity:{//object to describe a Quantity
        isEstimate: undefined, //true if number was estimated, false if measured
        value:0, //value of measurement, e.g. 20
        unit: "" //unit, e.g. cm, m...
    }
  },
  maxWidthParkingLot: {//max width of parking lot
    Quantity:{//object to describe a Quantity
        isEstimate: undefined, //true if number was estimated, false if measured
        value:0, //value of measurement, e.g. 20
        unit: "" //unit, e.g. cm, m...
    }
  }
}
console.log(JSON.stringify(parkingAccessability));
