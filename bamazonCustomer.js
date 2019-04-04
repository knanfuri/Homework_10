var mysql = require("mysql");
var inquirer = require("inquirer")

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
    // Question();
});

// function Question() {

// inquirer
//   .prompt({
      
//     question:"What item_id would you like?",
//     choices:[100,200,300,400,500,600,700,800,900,1000, "exit"]
    
    
   
    
//   })
//   console.log(question)
    
//   .then( function (answer) {
//     // Use user feedback for... whatever!!
//   });
//   console.log(Question)






 
// connection.query('SELECT * from Product', function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });
 
connection.end();




