// Predict and explain first...

// Why will an error occur when this program runs?
// / to calculate the percentage it has used the value from 
// convertToPercentage() function so there will be error because 
// the variable name for the parameter and const is the same. and console.log is called 
// to print decimalNumber which is not known outside the function
// instead of printing the retun value of the function.


// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// the error was syntaxError it is stating decimalNumber has already been declared
//the parameter of the function convertToPercentage() and the const variable is the same  

// Finally, correct the code to fix the problem

