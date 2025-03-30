const findExpensiveProducts = require('./ExpensiveProduct.js');

test("findExpensiveProducts", () => {
    const products = [
        {id:1, name:"laptop", price: 1200 },
        {id:2, name:"Phone", price: 800},
        {id:3, name:"Table", price:500},
        {id:4, name:"Desktop", price:700}
    ];
    let threshold = 2000;
    expect(findExpensiveProducts(products, threshold)).toBe("No product is above the threshold");







});