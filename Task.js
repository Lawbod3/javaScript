function calculateArea(width, height){
 let area =  width * height;
 return area;

}

function convertToFahrenheit(celsius){
let farenheit = celsius * 9/5 + 32
return farenheit;

}

function isEven(number){
 if(number % 2 === 0){
  return true;
}

return false;

} 

function isLeapYear(year){
if(year % 4 === 0){
return true;
}

else if(year % 100 === 0 ){
 return false;
}

else if(year % 400 === 0){
return true;

}

else{
return false;
}

return false
}

function countVowels(word){
  let vowel = "aeiou"
  let vowelCount = 0;
for(let count = 0; count < word.length; count++){
 if(vowel.includes(word.charAt(count).toLowerCase())){
      vowelCount++;
}

}


return vowelCount;
}






module.exports = {calculateArea, convertToFahrenheit, isEven, isLeapYear, countVowels};
