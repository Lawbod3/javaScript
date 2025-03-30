const {calculate, addTwoNumbers, subsctractTwoNumbers,  getEvenNumbers} = require("./FunctionPractise.js");

test("add two numbers", ()=> {
   let firstNumber = 5;
   let secondNumber = 72; //Arrange
   const result = addTwoNumbers(firstNumber, secondNumber); //Act
   let answer = 77;
   expect(result).toBe(answer) //Assert

})

test("return even numbers", ()=>{
    let arrayOfNumbers = [2,3,4,5,6,7,9];
    let answer = [2,4,6];
    let result =  getEvenNumbers(arrayOfNumbers)
    expect(result).toEqual(answer);

})
