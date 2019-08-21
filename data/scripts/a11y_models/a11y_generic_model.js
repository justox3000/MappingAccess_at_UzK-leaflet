//this script creates an accessability object which will be used in all dataframes generically
//this describes the physical and human rated accessability to a space

//it is part of the property object of each building: PlacePropert

//inspired by A11yJSON by @sozialhelden https://sozialhelden.github.io/ac-format/

//conventions:
//undefined always indicates unknown, null is used for not applicable
//or for "there is none"

accessability = {//describes accessability of a place
  description: "", //text space for narration on accessability/subjective experiences
  ground: {   //describes ground conditions
   evenPavemement: undefined,//true if pavement is even not plastered
   isLevel:undefined,//true if ground is level
   sidewalkConditions:"",//space to narrate subjective experience on ground
  },
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
  }],

  restrooms:[{//describes accessability of restroom in place
    restroom:{
      isUnisex: undefined, //true if unisex toilet
      changingTable: undefined,//true if it has a changing table
      isFemale: undefined, //true if for females
      isMale: undefined, //true if for males
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
        },
      heightOfDryer:{//how high the towel or dryer hangs
        Quantity:{
          isEstimate: undefined, //true if number was estimated, false if measured
          value:0, //value of measurement, e.g. 20
          unit: "" //unit, e.g. cm, m...
          }
      },
      heightOfSoap:{//how high the soap hangs
        Quantity:{
          isEstimate: undefined, //true if number was estimated, false if measured
          value:0, //value of measurement, e.g. 20
          unit: "" //unit, e.g. cm, m...
          }
      },
      hasSupportRails:undefined, //true if there are support rails on the walls
      turningSpaceInside:{//how much space there is to turn, e.g. 5qm
        Quantity:{
          isEstimate: undefined, //true if number was estimated, false if measured
          value:0, //value of measurement, e.g. 20
          unit: "" //unit, e.g. cm, m...
          }
      },
      toilet:{//describes toilet of restroom
        onlyUrinal: undefined, //true if it is only a urinal
        hasFoldingHandles:undefined,//true if there are folding Handles
        height:{//how high is the base of the toilet
          Quantity:{
            isEstimate: undefined, //true if number was estimated, false if measured
            value:0, //value of measurement, e.g. 20
            unit: "" //unit, e.g. cm, m...
            }
        },
        washBasin:{//describes wash basin of restroom
          height:{
            Quantity:{
              isEstimate: undefined, //true if number was estimated, false if measured
              value:0, //value of measurement, e.g. 20
              unit: "" //unit, e.g. cm, m...
              }
          }
        }
      }
    }
  }],

  pathways:{//describe pathways/hallways in a place
    width:{//width constraints of all pathways inside a place
        Quantity:{//object to describe a Quantity
            isEstimate: undefined, //true if number was estimated, false if measured
            value:0, //value of measurement, e.g. 20
            unit: "" //unit, e.g. cm, m...
        }
      }
  },

  staff:{//describe presence of staff and their qualification
    canSeeVisitorsFromInside: undefined, //true if staff can see people outside
    offersAssistance: undefined, //true if staff helps disabled users
    usesSignLanguage: undefined //true if staff uses sign language to communicates
  },

  allowsGuideDogs: undefined, //true if place allows guide dogs
  smokingProhibited:undefined, //if smoking is prohibited or not
  hasTactileGuidestrips: undefined, //true if venue has tactile guide strips on floor or wall
  isQuiet: undefined, //if venue is rated as a quiet or noisy place
  isWellLit: undefined, //if venue is rated as well lit or dim
};
console.log(JSON.stringify(accessability));
