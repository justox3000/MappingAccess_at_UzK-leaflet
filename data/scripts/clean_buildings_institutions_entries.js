//this script establishes an institutions_object for buildings
//and removes duplicates of buildings by moving all institutions that occur in the same building
//into the institutions array of institution objects in a building.

    //for all buildings in buildings_polygons_incl_entries.geojson, move all institution data into an array of institutions.
    //then, after that, gather the institution arrays from all objects that have the same building_id
    //and write them to a single building_id
    //finally delete duplicate buildings

var fs = require('fs');

/*
//define institutions array of institution objects
institutions: [{ //array of institutions in the building
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
  }
}];
  */

//console.log(JSON.stringify(institutions));


fs.readFile('./data/lageplan_matuzk_geoJSONFiles/buildings_polygons_incl_entries.geojson', 'utf8', (err, fileContents) => {
  if (err) {
    console.error(err)
    return
  }
  try {
    const json = JSON.parse(fileContents);

    for(feature in json.features){ //loop through all feature objects in feature array 'features'
      //we want to make a new key "institutions" that holds an array of objects with the key "instititution"
            var instArray = json.features[feature].properties.institutions=[]//initialize array of institutions
            //console.log(JSON.stringify(json.features[feature].properties));
            instArray.push({});
            //console.log(JSON.stringify(json.features[feature].properties.institutions));
            json.features[feature].properties.institutions[0].institution={};
            //json.features[feature].properties.institutions[0].institution={};
           //console.log(JSON.stringify(json.features[feature].properties.institution));

            // populate all the data with the relevant institution data from that feature
            json.features[feature].properties.institutions[0].institution.institution_id=json.features[feature].properties.institution_id;
            json.features[feature].properties.institutions[0].institution.institution_name=json.features[feature].properties.institution_name;
            json.features[feature].properties.institutions[0].institution.institution_shortname=json.features[feature].properties.institution_shortname;
            json.features[feature].properties.institutions[0].institution.institution_tel=json.features[feature].properties.institution_tel;
            json.features[feature].properties.institutions[0].institution.institution_fax=json.features[feature].properties.institution_fax;
            json.features[feature].properties.institutions[0].institution.institution_homepage=json.features[feature].properties.institution_homepage;
            json.features[feature].properties.institutions[0].institution.institution_floor=json.features[feature].properties.institution_floor;
            json.features[feature].properties.institutions[0].institution.institution_buildingspecification=json.features[feature].properties.institution_buildingspecification;
            json.features[feature].properties.institutions[0].institution.institution_mail=json.features[feature].properties.institution_mail;
            json.features[feature].properties.institutions[0].institution.institution_wwwpath=json.features[feature].properties.institution_wwwpath;
            json.features[feature].properties.institutions[0].institution.institution_faculty=json.features[feature].properties.institution_faculty;

            //delete key-value pairs that were moved into institutions array
            delete json.features[feature].properties.institution_id;
            delete json.features[feature].properties.institution_name;
            delete json.features[feature].properties.institution_shortname;
            delete json.features[feature].properties.institution_tel;
            delete json.features[feature].properties.institution_fax;
            delete json.features[feature].properties.institution_homepage;
            delete json.features[feature].properties.institution_floor;
            delete json.features[feature].properties.institution_buildingspecification;
            delete json.features[feature].properties.institution_mail;
            delete json.features[feature].properties.institution_wwwpath;
            delete json.features[feature].properties.institution_faculty;

        console.log("successfully filled institutions key with array of institutions");
      };
      //now we have an array of features where each feature contains an array of institutions
      //but some features have the same building_id yet a different institution array
      //the task now is to copy all the institutions of the same building into the institutions array of that building



      //deduplicate all institutions of the institution array
      for(features in json.features){
        var institutionsArray = json.features[feature].properties.institutions;
        const uniqueBuildings = Array.from(new Set(institutionsArray.map(a => a.institution_id)))
          .map(institution_id => {
            return uniqueInstitutions.find(a => a.institution_id === institution_id)
          })
          console.log(uniqueBuildings);
      }





      //write the result to file
        console.log(JSON.stringify(json));

      fs.writeFile("./data/a11y_uzk/buildings_institutions_entries.geojson",JSON.stringify(json), "utf-8", (err) => {
            if (err) console.log(err);
            console.log("Successfully Written to File.");
      });
      */
      //then, check for duplicate buildings
      //if the building multiple times  copy the institutions into the institutions of the corresponding building
      //by adding the institution object to the array of institutions of the first building



  } catch(err) {
    console.error(err)
  }
});
