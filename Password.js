const prompt = require('prompt-sync')();

const {includeUpperCase,
    includeLowerCase,
    includeNumbers,
    includeSpecialCharacters } = require("./PasswordSCript")

let password ="";
let length = prompt("Enter the password length: ");
let selectionUpperCase = prompt("Do you want to include to uppercase the password? (1 for yes, 2 for no): ")
while (selectionUpperCase < 1 || selectionUpperCase > 2) {
    console.log("Invalid selection. Please enter 1 or 2.");
    selectionUpperCase = prompt("Do you want to include the password to uppercase? (1 for yes, 2 for no): ")
  
}
if (selectionUpperCase == 1) {
    password = includeUpperCase(password);
}
else if (selectionUpperCase == 2) {
    password = password;
}


let selectionLowerCase = prompt("Do you want to include Lowercase to the password? (1 for yes, 2 for no): ")
while (selectionLowerCase < 1 || selectionLowerCase > 2) {
    console.log("Invalid selection. Please enter 1 or 2.");
    selectionLowerCase = prompt("Do you want to include Lowercase to the password? (1 for yes, 2 for no): ")
}
if (selectionLowerCase == 1) {
    password = includeLowerCase(password);
}
else if (selectionLowerCase == 2) { 
        
        password = password;
    } 
let selectionNumbers = prompt("Do you want to include the password to uppercase? (1 for yes, 2 for no): ")
while (selectionNumbers < 1 || selectionNumbers > 2) {
    console.log("Invalid selection. Please enter 1 or 2.");
    selectionNumbers = prompt("Do you want to include numbers to password? (1 for yes, 2 for no): ") 
}
if (selectionNumbers == 1) {
    password = includeNumbers(password);
}
else if (selectionNumbers == 2) {
    password = password;
}
let selectionSpecialCharacters = prompt("Do you want to include special charactersto the password? (1 for yes, 2 for no): ") 
while (selectionSpecialCharacters < 1 || selectionSpecialCharacters > 2) {
    console.log("Invalid selection. Please enter 1 or 2.");
    selectionSpecialCharacters = prompt("Do you want to include the password to uppercase? (1 for yes, 2 for no): ")
}
if (selectionSpecialCharacters == 1) {
    password = includeSpecialCharacters(password);
}   
else if (selectionSpecialCharacters == 2) {
    password = password;
}

let passwordResult = '';
if(password == "") {
    console.log("Please select at least one option to generate a password.");
    return;
}else if (length < 1) {
    console.log("Password length must be greater than 0.");
    return;
}

for (let i = 0; i < length; i++) {
    const randResult = Math.floor(Math.random() * password.length);
    passwordResult += password.charAt(randResult);
}



console.log(passwordResult);
