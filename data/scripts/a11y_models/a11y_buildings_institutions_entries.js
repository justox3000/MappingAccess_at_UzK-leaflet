//this script establishes an institutions_object for buildings
//and removes duplicates of buildings by moving all institutions that occur in the same building
//into the institutions array of institution objects in a building.

var fs = require('fs');

/*
//define institutions
institutions = [ //array of institutions in the building
  institution: {//object institution
    institution_id:undefined, //number
    institution_name:"", //name of instiuttion
    institution_shortname:"",
    institution_tel:"",
    institution_fax:"",
    institution_homepage:"",//URL
    institution_floor:"",
    institution_buildingspecification:"", //e.g. Room XY
    institution_mail:"",//email address
    institution_wwwpath:"", //wwwpath
    institution_faculty:undefined //number
  }];
  */

//console.log(JSON.stringify(institutions));


fs.readFile('./data/lageplan_matuzk_geoJSONFiles/buildings_polygons_incl_entries.geojson', 'utf8', (err, fileContents) => {
  if (err) {
    console.error(err)
    return
  }
  try {
    const json = JSON.parse(fileContents)

    //for all buildings in buildings_polygons_incl_entries.geojson, move all institution data into an array of institutions.
    //then, after that, gather the institution arrays from all objects that have the same building_id and write them
    //to a single building_id
    //finally delete duplicate buildings


    for(feature in json.features){ //loop through all feature objects in feature array 'features'
          //json.features[feature].properties.institution_id;
          console.log(JSON.stringify(json.features[feature].properties.institution_id));
            json.features[feature].properties.institutions=[];//initialize array of institutions
            var inst = new Object();
            json.features[feature].properties.institutions[0]=inst;
            // populate all the data with the relevant institution data from that feature
            inst.institution_id=json.features[feature].properties.institution_id;
            inst.institution_name=json.features[feature].properties.institution_name;
            inst.institution_shortname=json.features[feature].properties.institution_shortname;
            inst.institution_tel=json.features[feature].properties.institution_teljson.features[feature].properties.institutions;
            inst.properties.institutions[0].institution_fax=json.features[feature].properties.institution_fax;
            inst.institutions[0].institution_homepage=json.features[feature].properties.institution_homepage;
            inst.institution_floor=json.features[feature].properties.institution_floor;
            inst.institution_buildingspecification=json.features[feature].properties.institution_buildingspecification;
            inst.institution_mail=json.features[feature].properties.institution_mail;
            inst.institution_wwwpath=json.features[feature].properties.institution_wwwpath;
            inst.institution_faculty=json.features[feature].properties.institution_faculty;


            //delete json.features[feature].properties.institution_id;
        console.log("successfully filled institutions key with array of institutions");
      }
    //write the result to file
    console.log(JSON.stringify(json));

    //then add the accessability data

    fs.writeFile("./data/a11y_uzk/buildings_institutions_entries.geojson",JSON.stringify(json), "utf-8", (err) => {
      if (err) console.log(err);
      console.log("Successfully Written to File.");
    });

  } catch(err) {
    console.error(err)
  }
});
