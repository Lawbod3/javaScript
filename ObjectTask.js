let student ={
    name:"olabode",
    age:20,
    courses:["Math", "Physics", "computer science"],
    address:
        {city:"New York",
        Zip:10001},

        expression: function(){
            return `${this.name} is ${this.age} years old and has a GPA of ${this.Gpa}`
        }
};

student.age = 23
student.Gpa = 3.8


console.log(student.age)
console.log(student.Gpa)
console.log(student)
console.log(student.expression())

module.exports = student
