/*
const prompt = require('prompt-sync')();

const n = prompt('wat: ' )
console.log('you entered: '+n)
console.log(`you entered: ${n}`)





for(let count = 1; count <= 10; count++){
	//console.log(count)
	//process.stdout.write(count.toString() + " ")
	process.stdout.write(" " +count)
	};




let array = [2,3,4,5,6]
	for(let value of array){
		console.log(value)
	}





let obj = {

name: "kai",
age: "23"

}

for(let key in obj){
	console.log(obj[key])

}




let array = [2,3,4,5,6]
for(let index in array){
	console.log(array[index])
}





let number = 0;

while(number <= 10){
	console.log(number);
	number++;

}






	let number = 1;
do{
	console.log(number);
	number++;
}
	while(number <= 10)



//function declaration

let array = [1,2,3,4,5,6,7,8,9,10];

function getEvenNumbers(numbers){
	for(let number of numbers){
//== does not check datatype
//=== checks datatype
		if(number % 2 === 0){
		//if(number % 2 === "0"){

			console.log(number);
		}
	}
};

getEvenNumbers(array);






//function expression
let array = [1,2,3,4,5,6,7,8,9,10];

const getEvenNumbers = function(numbers){
	for(let number of numbers){
		if(number % 2 === 0){
			console.log(number);
		}
	}
};

getEvenNumbers(array);





//nested function

let numberOne = 2;
function outerFunction(outerNumber){
	let numberTwo = 6; 
	function innerFunction(innerNumber) {
		let result = outerNumber + innerNumber;
		return result;
	}

	return innerFunction(numberTwo)
}

console.log(outerFunction(numberOne))







//Arrow functions

let numberOne = 2;
let numberTwo = 3;

//const getSum = function(firstNumber, secondNumber){
//makes the code shorter when arrow function is used
const getSum = (firstNumber, secondNumber)=>{
	let result = firstNumber + secondNumber;
	return result;
}

console.log(getSum(numberOne, number Two));




*/


//function as a returned object


let numberOne = 10;
let numberTwo = 2;
function createcalculator(numOne, numTwo){
	return{

		add: function(){
			return numOne + numTwo
		},
		
		subtract: function(){
			return numOne - numTwo
		},

		multiply: function(){
			return numOne * numTwo
		}
	}
}

let result = createcalculator(numberOne, numberTwo);
console.log("Addition: "+result.add());
console.log("suntraction: "+result.subtract());
console.log("multiplication: "+result.multiply());





