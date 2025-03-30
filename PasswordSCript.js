let password = " ";

const includeUpperCase = (passwordString) => {
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     passwordString = passwordString + upperCase;
    
    return passwordString;
    }
    
const includeLowerCase = (passwordString) => {
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    passwordString = passwordString + lowerCase;
    
    return passwordString;
}

const includeNumbers = (passwordString) => {
    let numbers = "0123456789";
    passwordString = passwordString + numbers;
    
    return passwordString;
}

const includeSpecialCharacters = (passwordString) => {
    let specialCharacters = "!@#$%^&*()_+[]{}|;:',.<>?";
    passwordString = passwordString + specialCharacters;
    
    return passwordString;
}

module.exports =  {
    includeUpperCase,
    includeLowerCase,
    includeNumbers,
    includeSpecialCharacters
} ;