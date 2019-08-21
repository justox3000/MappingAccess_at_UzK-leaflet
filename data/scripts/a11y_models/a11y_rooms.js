//this script creates an accessability object for rooms specifically.
//this describes the physical and human rated accessability to a room.

//it is extracted from a11y_generic_model.js and used to describe the a11y of
//family_campus_rooms specifically (although there we do not use an array but only one object)

//inspired by A11yJSON by @sozialhelden https://sozialhelden.github.io/ac-format/

//conventions:
//these are default values that need to be changed by inputting data

roomAccessability = [{ //describes accessability of rooms that are not restrooms in place
  room:{ //describes accessability of rooms
    name:"", //use to differentiate from other rooms
    description:"", //space for narrated experience about usage of room
    smokingProhibited:true,
    hasInductionLoop: false, //boolean. true if venue as induction loops in functional units
    hasTactileGuidestrips: false, //true if venue has tactile guide strips on floor or wall
    isQuiet: false, //if venue is rated as a quiet or noisy place
    isWellLit: true, //if venue is rated as well lit or dim
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
  }
}];
//console.log(JSON.stringify(roomAccessability));
