//this script adds the accessability dataframe to the building objects

//entrances and restrooms are copied into the accessability object

var fs = require('fs');
var json=null;

//add the building accessability to the building data in the dataset

accessability= { //describes accessability of a place (here excluding the restroom and entrances which are added later)
  description: "", //text space for narration on accessability/subjective experiences
  ground: {   //describes ground conditions
   evenPavemement: false,//true if pavement is even not plastered
   isLevel:false,//true if ground is level
   sidewalkConditions:"",//space to narrate subjective experience on ground
  },
  rooms:[{//describes accessability of rooms that are not restrooms in place, e.g. cafes, seminar rooms etc.
    room:{//describes accessability of rooms
      name:"", //use to differentiate from other rooms
      description:"", //space for narrated experience about usage of room
      smokingProhibited:true,
      hasInductionLoop: false, //boolean. true if venue as induction loops in functional units
      hasTactileGuidestrips: false, //true if venue has tactile guide strips on floor or wall
      isQuiet: false, //if venue is rated as a quiet or noisy place
      isWellLit: false, //if venue is rated as well lit or dim
      entrances:[{ //describes accessability of entrances to a place
        entrance:{//describes entrance to a place
          name: "", //name to differentiate from other entrances
          door:{//describes the door of an enttrance or one of its facilities such as toilet
            doorOpensToOutside: true, //true if door opens to outside
            hasErgonomicDoorHandle: false, //true if door's handle is easy to use
            isAutomatic: false, //true if door is automatic
            isRevolving: false, //true if door is revolving
            width:{//describes width of a door
              Quantity:{//object to describe a Quantity
                  isEstimate: true, //true if number was estimated, false if measured
                  value:0, //value of measurement, e.g. 20
                  unit: "m" //unit, e.g. cm, m...
              }
            }
          },
          hasRamp:false, //true if entrance has fixed or removable ramp
          isLevel:true, //true if entrance has no step and needs no ramp
          stairs:[{  //describes on or more stairs in the place
              name: "", //a string to differentiate the staircase from others in the same place
              hasAlternatives: false, //if there are escalators, elevators to use instead of stairs
              count: 0, //number of steps
              hasBrailleNavigation: false, //true if braille for the stairecase
              hasHandRail: false, //true if there is a handrail for the stairecase
              stepHeight: {//indicates how high steps are
                Quantity:{
                  isEstimate: true, //true if number was estimated, false if measured
                  value:0, //value of measurement, e.g. 20
                  unit: "m" //unit, e.g. cm, m...
                  }
                }
            }],
          }
        }],
    }
  }],

  pathways:{//describe pathways/hallways in a place
    width:{//width constraints of all pathways inside a place
        Quantity:{//object to describe a Quantity
            isEstimate: true, //true if number was estimated, false if measured
            value:0, //value of measurement, e.g. 20
            unit: "m" //unit, e.g. cm, m...
        }
      }
  },
  staff:{//describe presence of staff and their qualification
    canSeeVisitorsFromInside: false, //true if staff can see people outside
    offersAssistance: false, //true if staff helps disabled users
    usesSignLanguage: false //true if staff uses sign language to communicates
  },
  allowsGuideDogs: false, //true if place allows guide dogs
  smokingProhibited:true, //if smoking is prohibited or not
  hasTactileGuidestrips: false, //true if venue has tactile guide strips on floor or wall
  isQuiet: false, //if venue is rated as a quiet or noisy place
  isWellLit: false, //if venue is rated as well lit or dim
  hasConstructionSite:{//determine if it has a construction site currently
    description:"",//describe the site and its  properties
    plannedEndingDate:"0000-01-01",// forseeable ending date
  }
};


//add the entrance_a11y data to the entrances in the dataset
var entrance_a11y= {//describes entrance to a place
    name: "", //name to differentiate from other entrances
    door:{//describes the door of an enttrance or one of its facilities such as toilet
      doorOpensToOutside: true, //true if door opens to outside
      hasErgonomicDoorHandle: false, //true if door's handle is easy to use
      isAutomatic: false, //true if door is automatic
      isRevolving: false, //true if door is revolving
      width:{//describes width of a door
        Quantity:{//object to describe a Quantity
            isEstimate: true, //true if number was estimated, false if measured
            value:0, //value of measurement, e.g. 20
            unit: "m" //unit, e.g. cm, m...
        }
      }
    },
    hasRamp:false, //true if entrance has fixed or removable ramp
    isLevel:true, //true if entrance has no step and needs no ramp
    stairs:[{  //describes on or more stairs in the place
        name: "", //a string to differentiate the staircase from others in the same place
        hasAlternatives: false, //if there are escalators, elevators to use instead of stairs
        count: 0, //number of steps
        hasBrailleNavigation: false, //true if braille for the stairecase
        hasHandRail: false, //true if there is a handrail for the stairecase
        stepHeight: {//indicates how high steps are
          Quantity:{
            isEstimate: true, //true if number was estimated, false if measured
            value:0, //value of measurement, e.g. 20
            unit: "m" //unit, e.g. cm, m...
            }
          }
      }],
};

//add the restroom_a11y data to the restrooms in the dataset
restroom_a11y = {
    changingTable: false,//true if it has a changing table
    isFemale: false, //true if for females
    isMale: false, //true if for males
    entrance:{//describes entrance to a place
      name: "", //name to differentiate from other entrances
      door:{//describes the door of an enttrance or one of its facilities such as toilet
        doorOpensToOutside: false, //true if door opens to outside
        hasErgonomicDoorHandle: false, //true if door's handle is easy to use
        isAutomatic: false, //true if door is automatic
        isRevolving: false, //true if door is revolving
        width:{//describes width of a door
          Quantity:{//object to describe a Quantity
              isEstimate: true, //true if number was estimated, false if measured
              value:0, //value of measurement, e.g. 20
              unit: "m" //unit, e.g. cm, m...
          }
        }
      },
      hasRamp:false, //true if entrance has fixed or removable ramp
      isLevel:true, //true if entrance has no step and needs no ramp
      stairs:[{  //describes on or more stairs in the place
          name: "", //a string to differentiate the staircase from others in the same place
          hasAlternatives: false, //if there are escalators, elevators to use instead of stairs
          count: 0, //number of steps
          hasBrailleNavigation: false, //true if braille for the stairecase
          hasHandRail: false, //true if there is a handrail for the stairecase
          stepHeight: {//indicates how high steps are
            Quantity:{
              isEstimate: true, //true if number was estimated, false if measured
              value:0, //value of measurement, e.g. 20
              unit: "cm" //unit, e.g. cm, m...
              }
            }
        }],
      },
    heightOfDryer:{//how high the towel or dryer hangs
      Quantity:{
        isEstimate: true, //true if number was estimated, false if measured
        value:0, //value of measurement, e.g. 20
        unit: "cm" //unit, e.g. cm, m...
        }
    },
    heightOfSoap:{//how high the soap hangs
      Quantity:{
        isEstimate: true, //true if number was estimated, false if measured
        value:0, //value of measurement, e.g. 20
        unit: "cm" //unit, e.g. cm, m...
        }
    },
    hasSupportRails:false, //true if there are support rails on the walls
    turningSpaceInside:{//how much space there is to turn, e.g. 5qm
      Quantity:{
        isEstimate: true, //true if number was estimated, false if measured
        value:0, //value of measurement, e.g. 20
        unit: "cm" //unit, e.g. cm, m...
        }
    },
    toilet:{//describes toilet of restroom
      onlyUrinal: false, //true if it is only a urinal
      hasFoldingHandles:false,//true if there are folding Handles
      height:{//how high is the base of the toilet
        Quantity:{
          isEstimate: true, //true if number was estimated, false if measured
          value:0, //value of measurement, e.g. 20
          unit: "cm" //unit, e.g. cm, m...
          }
      },
      washBasin:{//describes wash basin of restroom
        height:{
          Quantity:{
            isEstimate: true, //true if number was estimated, false if measured
            value:0, //value of measurement, e.g. 20
            unit: "cm" //unit, e.g. cm, m...
            }
        }
      }
    }
  };

function writeToFile(json){
  fs.writeFile("./data/lageplan_matuzk_geoJSONFiles/temp_buildings.geojson",JSON.stringify(json), "utf-8", (err) => {
        if (err) console.log(err);
        console.log("Successfully Written to File.");
  });
}


fs.readFile('./data/lageplan_matuzk_geoJSONFiles/buildings_institutions_restrooms_entrances.geojson', 'utf8', (err, fileContents) => {
  if (err) {
    console.error(err)
    return
  }
  try {
     json = JSON.parse(fileContents);
     for(feature in json.features){
       //add general accessability data
       json.features[feature].properties.accessability=accessability;

       //add entrances and restrooms array
       //console.log(json.features[feature].properties.entrances);
       //console.log(json.features[feature].properties.restrooms);
       json.features[feature].properties.accessability.entrances=[];
       json.features[feature].properties.accessability.restrooms=[];
    //   console.log('made entrances and restrooms array in accessability framework')


         //add accessability data to the toilets
       for(toilet in json.features[feature].properties.restrooms)  {
         var obj=json.features[feature].properties.restrooms[toilet];
         Object.assign(obj, restroom_a11y);
         //console.log(obj);
       }
       //add accessability data to the entrances
       for(entrance in json.features[feature].properties.entrances){
         var obj=json.features[feature].properties.entrances[entrance];
         Object.assign(obj, entrance_a11y);
       }


    }

      //finally write this to a file
   writeToFile(json);
  } catch(err) {
    console.error(err)
  }
});
