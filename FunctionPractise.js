function calculate(firstValue, secondValue, callBackFunction){
  return callBackFunction(firstValue, secondValue)
};

function addTwoNumbers(numberOne, numberTwo){
let result = numberOne + numberTwo;
return result;
};

function substractTwoNumbers(numberOne, numberTwo){
let result = numberOne - numberTwo;
return result;

};

function getEvenNumbers(array){
let arrayOfEvenNumbers = []
 for(let value of array){
   if(value % 2 === 0){
      arrayOfEvenNumbers.push(value)
   }
 }

  return arrayOfEvenNumbers
};


module.exports = {calculate, addTwoNumbers, substractTwoNumbers, getEvenNumbers};




