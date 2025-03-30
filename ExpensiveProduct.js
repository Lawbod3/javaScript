const products = [
   {id:1, name:"laptop", price: 1200 },
   {id:2, name:"Phone", price: 800},
   {id:3, name:"Table", price:500},
   {id:4, name:"Desktop", price:700}
];
let threshold = 2000;

let findExpensiveProducts = function(products, threshold){
     let maximumPrice = 0;
    for( let i = 0; i < products.length; i++){
        if(products[i].price > threshold){
            return console.log(`Product name: ${products[i].name} Product price: ${products[i].price}`)
        } 
        if(products[i].price > maximumPrice){
            maximumPrice = products[i].price
        }  
    }
    if(threshold > maximumPrice){
        return "No product is above the threshold"
    }
    return "End of expensive products"
}  


module.exports = findExpensiveProducts;
