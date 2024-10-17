// index.js
function receivesAFunction(callback) {
    callback(); // Calls the callback function
  }
  
  // Export the function if needed
  //module.exports = { receivesAFunction };
  


function returnsANamedFunction (){
    return function namedFunction (){
console.log("This is a named function");
    }
}




function returnsAnAnonymousFunction() {
    return function () {
      console.log('This is an anonymous function');
    };
  }
  
  // Export the function if needed
  module.exports = { returnsAnAnonymousFunction };
  