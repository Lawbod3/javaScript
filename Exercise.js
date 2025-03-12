const book = { title: 'The Great Gatsby',
               author: 'F.Scott Fitzgerald',
               yearPublished: 1925
             };

const {title, author} = book 
console.log(`${title} by ${author}`);


const car = { make: 'Toyota', model:'camry', year: 2021};

for (key in car){
console.log( car[key]);

}

const person = {
firstName: "Lawal",
lastName: "Olabode"
}

function fullName(person){

console.log(`${person.firstName} ${person.lastName}`);

}

fullName(person);

const personTwo = {
firstName: "Lawal",
lastName: "Olabode",
age: 25
}

function details(personTwo){

console.log(`firstName: ${personTwo.firstName} lastName: ${personTwo.lastName} age: ${personTwo.age}`);

}

details(personTwo);