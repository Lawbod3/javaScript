let company = {
    name:"TransCorp",
    location:"San Francisco",
    employees:[
        {id:1000, name:"moses", department:"HR"},{}]
}
company.employees[1] = {id:10001, name:"Idowu", department:"Marketing"}
company.employees[2] = {id:10002, name:"Lawal", department:"Engineering"}
company.employees[3] = {id:10003, name:"Sulaimon", department:"HR"}

const{name, location} = company
console.log(`${name} \n${location}`);
console.log(company.employees[1].name)
for(let count = 0; count < company.employees.length; count++){
    console.log(company.employees[count].name);
}