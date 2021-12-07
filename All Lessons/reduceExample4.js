// find the first name of all the people whose age is less than 30
const users = [
    { firstName: "Riyaz", lastName: "Ahamad", age: 23},
    { firstName: "Donald", lastName: "Trump", age: 76},
    { firstName: "Cristiano", lastName: "Ronaldo", age: 35},
    { firstName: "Albert", lastName: "Einstein", age: 23},
];

const output = users.reduce(function (acc, curr) {
    if (curr.age < 30){
        acc.push(curr.firstName);
    }
    return acc;
}, []);

console.log(output);

//  OUTPUT
// (2) ['Riyaz', 'Albert']