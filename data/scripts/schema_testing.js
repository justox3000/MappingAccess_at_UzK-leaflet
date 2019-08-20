//A11yJSON: A harmonized data schema for describing the accessibility of physical places
    //https://sozialhelden.github.io/ac-format/attributes.html
    //--> definitions in TypeScript for compile-time validation.
    //but it only supports PointGeometry as Geometry.

    //we are using the npm package 'simpl-schema' from https://github.com/aldeed/simple-schema-js#extracting-schemas

    //we want to use the simpl-schema package in order to define our own schema drawing on / subsetting the ac-format A11yJSON
    //defined by sozialhelden (see link above)

    //We won't adapt the whole format as part of your own  mapping specs (especially for indoors as we cannot display it)
    // we will adapt single interfaces that fit our model.

    //for QUANTITIES, ac-format allows for any quantity+unit strings that js-quantities (JavaScript library for quantity calculation and unit conversion) supports as input.
    //reference: https://github.com/gentooboontoo/js-quantities
    //Each attribute definition contains a preferred unit.
    //When saving quantities, you have to specify them with a unit.
    //You can provide measures as fixed quantities, but also with constraints and uncertainty or variance allowing for
    //fuzzy quantities when the measurement method is imprecise, for example when a person guesses the width of a door.

var SimpleSchema = require('simpl-schema').default;
  //resolving TypeError "SimpleSchema is not a constructor" (It looks like
  // an ES Module compat problem, because SimpleSchema is the default export as an ES Module,
  //if you are using require, you need to access the default export by name.

var acSchema = require('@sozialhelden/ac-format');
console.log(acSchema);

//get all exports offered by @sozialhelden/ac-format module
console.dir(Object.keys(acSchema));

const schema = new SimpleSchema({

});

console.log(schema);


/*
//TESTING
const schema = new SimpleSchema({
  name: String,
  age: SimpleSchema.Integer,
  registered: Boolean,
});
*/
