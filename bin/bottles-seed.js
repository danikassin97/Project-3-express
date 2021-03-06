const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reservations-express');

const Tables = require('../models/tables-model.js');



var bottle1 = {
 name: 'Johnnie Walker Red 750ml',
 price: 350,
};

var bottle2 = {
 name: 'Jack Daniels 750ml',
 price: 400,
};

var bottle3 = {
 name: 'Fireball 750ml',
 price: 300,
};

var bottle4 = {
 name: 'Absolut 750ml',
 price: 450,
};

var bottle5 = {
 name: 'Ketel One 750ml',
 price: 200,
};

var bottle6 = {
 name: 'Belvedere 750ml',
 price: 600,
};

var bottle7 = {
 name: 'Bacardi Gold 750ml',
 price: 500,
};

var bottle8 = {
 name: 'Bacardi White 750ml',
 price: 480,
};

var bottle9 = {
 name: 'Don Q Cristal 750ml',
 price: 350,
};

var bottle10 = {
 name: 'Don Julio Blanco 750ml',
 price: 400,
};

var bottle11 = {
 name: 'Camarena Silver 750ml',
 price: 400,
};

var bottle12 = {
 name: 'Patron Silver 750ml',
 price: 350,
};

const bottlesArray = [
// Whiskey
 bottle1,
 bottle2,
 bottle3,

 // Vodka
  bottle4,
  bottle5,
  bottle6,

 // Rum
  bottle7,
  bottle8,
  bottle9,

 // Tequila
  bottle10,
  bottle11,
  bottle12
];


const tablesArray = [
  {
    tableMinimum: 700,
    bottles: bottlesArray,
  }
];


Tables.create(
  tablesArray,               // first argument --> array of product info objects

  (err, tableResults) => {      // second argument --> callback
    if (err) {
      console.log("problem");
      return;
    }
      tableResults.forEach((oneTable) => {
        console.log("new table: " + oneTable.tableMinimum);
      });
    }

);

// tablesArray.forEach((bottle) => {
//  bottle.save(myTransactionSchema);
//   });
