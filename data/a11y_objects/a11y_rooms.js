//this script creates an accessability object for rooms specifically.
//this describes the physical and human rated accessability to a room.

//it is extracted from a11y_generic_model.js and used to describe the a11y of
//family_campus_rooms specifically.

//inspired by A11yJSON by @sozialhelden https://sozialhelden.github.io/ac-format/

//conventions:
//undefined always indicates unknown, null is used for not applicable
//or for "there is none"

roomsAccessability ={
  rooms:[{//describes accessability of rooms that are not restrooms in place
  room:{//describes accessability of rooms
    name:"", //use to differentiate from other rooms
    description:"", //space for narrated experience about usage of room
    smokingProhibited:undefined,
    hasInductionLoop: undefined, //boolean. true if venue as induction loops in functional units
    hasTactileGuidestrips: undefined, //true if venue has tactile guide strips on floor or wall
    isQuiet: undefined, //if venue is rated as a quiet or noisy place
    isWellLit: undefined, //if venue is rated as well lit or dim
    entrances:[{ //describes accessability of entrances to a place
      entrance:{//describes entrance to a place
        name: "", //name to differentiate from other entrances
        door:{//describes the door of an enttrance or one of its facilities such as toilet
          doorOpensToOutside: undefined, //true if door opens to outside
          hasErgonomicDoorHandle: undefined, //true if door's handle is easy to use
          isAutomatic: undefined, //true if door is automatic
          isRevolving: undefined, //true if door is revolving
          width:{//describes width of a door
            Quantity:{//object to describe a Quantity
                isEstimate: undefined, //true if number was estimated, false if measured
                value:0, //value of measurement, e.g. 20
                unit: "" //unit, e.g. cm, m...
            }
          }
        },
        hasRamp:undefined, //true if entrance has fixed or removable ramp
        isLevel:undefined, //true if entrance has no step and needs no ramp
        stairs:[{  //describes on or more stairs in the place
            name: "", //a string to differentiate the staircase from others in the same place
            hasAlternatives: undefined, //if there are escalators, elevators to use instead of stairs
            count: 0, //number of steps
            hasBrailleNavigation: undefined, //true if braille for the stairecase
            hasHandRail: undefined, //true if there is a handrail for the stairecase
            stepHeight: {//indicates how high steps are
              Quantity:{
                isEstimate: undefined, //true if number was estimated, false if measured
                value:0, //value of measurement, e.g. 20
                unit: "" //unit, e.g. cm, m...
                }
              }
          }],
        }
      }],
  }
}]}
console.log(JSON.stringify(roomsAccessability));
