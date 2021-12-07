// find the how many people are of 26, 76, 35. 23 age
const users = [
    { firstName: "Riyaz", lastName: "Ahamad", age: 23},
    { firstName: "Donald", lastName: "Trump", age: 76},
    { firstName: "Cristiano", lastName: "Ronaldo", age: 35},
    { firstName: "Albert", lastName: "Einstein", age: 23},
];

const output = users.reduce(function (acc, curr){

    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age]
    }
    else {
        acc[curr.age] = 1
    }
    return acc;
}, {});

console.log(output);

// OUTPUT
// {23: 2, 35: 1, 76: 1}