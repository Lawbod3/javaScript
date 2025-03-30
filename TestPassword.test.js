const {includeUpperCase,
    includeLowerCase,
    includeNumbers,
    includeSpecialCharacters } = require("./PasswordSCript")

    test("Include Upper Case", () => {
        let password ="";
        let result = includeUpperCase(password);
        expect(result).toBe("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

    test("Include Lower Case", () => {
        let password ="";
        password = includeUpperCase(password);
        let result = includeLowerCase(password);
        expect(result).toBe("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");
    });

    test("Include Numbers", () => {
        let password ="";
        password = includeUpperCase(password);
        password = includeLowerCase(password);
        let result = includeNumbers(password);
        expect(result).toBe("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");
    });

    test("Include Special Characters", () => {
        let password ="";
        password = includeUpperCase(password);
        password = includeLowerCase(password);
        password = includeNumbers(password);
        let result = includeSpecialCharacters(password);
        expect(result).toBe("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:',.<>?");
    });

