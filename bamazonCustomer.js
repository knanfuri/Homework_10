var mysql = require("mysql");
var inquirer = require("inquirer")
var  cTable = require('console.table');

// var prompt = inquirer.createPromptModule();
 
// prompt(questions).then(/* ... */);

// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])
//   .then(answers => {
//     // Use user feedback for... whatever!!
//   });


var connection = mysql.createConnection({
host: "localhost",  
port: 3307,
user: "root",
password: "root",
database: "baMazon"

  });

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected");

connection.query('SELECT * from Product', function (error, results, fields) {
  if (error) throw error;
  console.table(results);

  Question()
});
 
// connection.end();

})





    

function Question() {

inquirer
  .prompt([{
      
    type: "input",
    name: "name",
    message:"What item_id would you like?"
  },
    {
      type: "input",
      name: "user",
      message:"How many would you like?",

    }

  ])
  console.log(message)
    
  .then( function (answer) {
    // Use user feedback for... whatever!!
    console.log(answer.user)
    
  });
  
  };
  
 



