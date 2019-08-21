//this script establishes accessability data for family_campus dataframe
//except for the playground  they get the room interface
//the playground objects get the playground a11y adaptation.

var fs = require('fs');

//read in the a11y_room_model
roomAccessability = { //describes accessability of rooms
    name:"", //use to differentiate from other rooms
    description:"", //space for narrated experience about usage of room
    smokingProhibited:true,
    hasInductionLoop: false, //boolean. true if venue as induction loops in functional units
    hasTactileGuidestrips: false, //true if venue has tactile guide strips on floor or wall
    isQuiet:false, //if venue is rated as a quiet or noisy place
    isWellLit:true, //if venue is rated as well lit or dim
    entrances:[{ //describes accessability of entrances to a place
      entrance:{//describes entrance to a place
        name: "", //name to differentiate from other entrances
        door:{ //describes the door of an enttrance or one of its facilities such as toilet
          doorOpensToOutside: true, //true if door opens to outside
          hasErgonomicDoorHandle: true, //true if door's handle is easy to use
          isAutomatic: false, //true if door is automatic
          isRevolving: false, //true if door is revolving
          width:{ //describes width of a door
            Quantity:{//object to describe a Quantity
                isEstimate: true, //true if number was estimated, false if measured
                value:2, //value of measurement, e.g. 20
                unit: "m" //unit, e.g. cm, m...
            }
          }
        },
        hasRamp:false, //true if entrance has fixed or removable ramp
        isLevel:true, //true if entrance has no step and needs no ramp
        stairs:[{  //describes on or more stairs in the place
            name: "", //a string to differentiate the staircase from others in the same place
            hasAlternatives: null, //if there are escalators, elevators to use instead of stairs
            count: 0, //number of steps
            hasBrailleNavigation: null, //true if braille for the stairecase
            hasHandRail: null, //true if there is a handrail for the stairecase
            stepHeight: { //indicates how high steps are
              Quantity:{
                isEstimate: null, //true if number was estimated, false if measured
                value:0, //value of measurement, e.g. 20
                unit: "m" //unit, e.g. cm, m...
                }
              }
          }],
        }
      }],
  };

//read in the a11y_playground model

playGroundAccessability = {//describes accessability of a playground
  description: "", //text space for narration on accessability/subjective experiences
  ground: {   //describes ground conditions
   evenPavemement: true,//true if pavement is even not plastered
   isLevel:true,//true if ground is level
   sidewalkConditions: "",//space to narrate subjective experience on ground
  },
  entrances:[{ //describes accessability of entrances to a place
    entrance:{//describes entrance to a place
      name: "", //name to differentiate from other entrances
      door:{//describes the door of an enttrance to the playground
        doorOpensToOutside: true, //true if door opens to outside
        hasErgonomicDoorHandle: false, //true if door's handle is easy to use
        isAutomatic: false, //true if door is automatic
        isRevolving: false, //true if door is revolving
        width:{//describes width of a door
          Quantity:{//object to describe a Quantity
              isEstimate: true, //true if number was estimated, false if measured
              value:1, //value of measurement, e.g. 20
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
              isEstimate: false, //true if number was estimated, false if measured
              value:0, //value of measurement, e.g. 20
              unit: "m" //unit, e.g. cm, m...
              }
            }
        }]}
    }],
  pathways:{//describe pathways/hallways in a place
    width:{//width constraints of all pathways inside a place
        Quantity:{//object to describe a Quantity
            isEstimate: true, //true if number was estimated, false if measured
            value:1, //value of measurement, e.g. 20
            unit: "m" //unit, e.g. cm, m...
        }
      }
  },
  staff:{//describe presence of staff and their qualification
    canSeeVisitorsFromInside: false, //true if staff can see people outside
    offersAssistance: false, //true if staff helps disabled users
    usesSignLanguage: false //true if staff uses sign language to communicates
  },
  allowsGuideDogs: true, //true if place allows guide dogs
  smokingProhibited:true, //if smoking is prohibited or not
  hasTactileGuidestrips: false, //true if venue has tactile guide strips on floor or wall
  isQuiet: false, //if venue is rated as a quiet or noisy place
  isWellLit: true, //if venue is rated as well lit or dim
};

//for all fc_facility_type = 4 (playgrounds), add the accessability frame for playgrounds
//for all others, add the room model.

fs.readFile('./data/lageplan_matuzk_geoJSONFiles/family_campus_decoded.geojson', 'utf8', (err, fileContents) => {
  if (err) {
    console.error(err)
    return
  }
  try {
    const json = JSON.parse(fileContents);
    for(feature in json.features){ //loop through all feature objects in feature array 'features'
      if(json.features[feature].properties.fc_facility_type != 4){
        json.features[feature].properties.accessability = roomAccessability;
      } else{
        json.features[feature].properties.accessability = playGroundAccessability;
      }
    };
    //write the result to file
    console.log(JSON.stringify(json));

    fs.writeFile("./data/a11y_uzk/a11y_family_campus.geojson",JSON.stringify(json), "utf-8", (err) => {
      if (err) console.log(err);
      console.log("Successfully Written to File.");
    });
  } catch(err) {
    console.error(err)
  }
});
