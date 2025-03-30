const bankAccount = require('./BankAcoount');

test("BankAccount deposit and withdraw", () => {
    let amount = 500;
   expect(bankAccount.balance).toBe(1000);
   bankAccount.desposit(amount)
   expect(bankAccount.balance).toBe(1500);
    bankAccount.withdraw(1000)
   expect(bankAccount.balance).toBe(500);



});