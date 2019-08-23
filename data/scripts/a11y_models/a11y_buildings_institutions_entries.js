// add the general accessability frame to buildings, institutions and entries and merge these.
//add some data using entries and toilets dataframes


//write all entry data into the entrances information.
//one building can have muultiple entrances with different accessability ratings.
/*
"entries_id": 22,
"entries_gebaude_id": 318,
"entries_lat": 50.936107635500001,
"entries_lng": 6.9218549728000003,
"entries_bin_accessability": 0
  */

/*
  entrances=[{ //describes accessability of entrances to a place
    entrance:{//describes entrance to a place
      entry_id:0, //id that the rrzk gave the entrance
      entry_lat:0,//latitude info for entrance
      entry_lng:0, //longitude info for entrance
      entry_bin_accessability:0, //1  means accessible for wheelchair users (determined by RRZK Lageplan)
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


  //map onto buildings by matching building_id
  //if entries_gebaude_id matches building_id fill the feature accessability>entrances>entrance with a new object containing that information
  //if it does not contain the same enties_id yet.
  //finally remove the default option with entries_id 0 by deleting that object

//do the same with toilets if toilets_building_id matches the building_id, add it as a toilet to the toilet dataframe
//use unisex value "toilet_is_unisex": 1, for entering isUnisex true or false


  restrooms:[{//describes accessability of restroom in place
    restroom:{
      toilet_id:0, //id of toilet given by RRZK lageplan
      toilet_lat: 0, //lat info about toilet
      toilet_lng: 0,//lng info about toilet
      isUnisex: false, //1 if unisex toilet
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
              unit: cm"" //unit, e.g. cm, m...
              }
          }
        }
      }
    }
  }],
*/
