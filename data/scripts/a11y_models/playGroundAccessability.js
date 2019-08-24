
var fs=require('fs');
var accessability=null;

accessability = {//describes accessability of a playground
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


function writeToFile(json){
      fs.writeFile("./data/scripts/a11y_models/a11y_playGroundModel.json",JSON.stringify(json), "utf-8", (err) => {
            if (err) console.log(err);
            console.log("Successfully Written to File.");
      });
};

json = accessability;
console.log(json);
writeToFile(json);
