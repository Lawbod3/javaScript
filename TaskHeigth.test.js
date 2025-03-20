const {calculateArea, convertToFahrenheit, isEven, isLeapYear, countVowels} = require("./Task.js");

test("Area of rectangle", ()=> {
    let width = 6;
    let height = 6;
    const result = calculateArea(width, height);
    let answer = 36;
    expect(result).toBe(answer);

})

test("Convert to farenheit", ()=> {
     let celsius = 23;
     const result = convertToFahrenheit(celsius);
     let answer = 73.4
     expect(result).toBe(answer);

})

test("Return true for even number", ()=> {
   let number = 4;
   const result = isEven(number);
   let answer = true
   expect(result).toBe(answer);

})

test("Return true for leapYear", ()=> {
    let year = 2024;
    const result = isLeapYear(year);
    let answer = true
    expect(result).toBe(answer);


})

test("count the number of vowels in string", ()=> {
    let word = "bode";
    const result = countVowels(word);
    let answer = 2
    expect(result).toBe(answer);
    
})









