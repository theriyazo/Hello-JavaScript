//find the maximum number of all the number inside an array
const arr = [5, 1, 3, 2, 6];

const output = arr.reduce(function (max, curr) {
    if(curr > max){
        max=curr;
    }
    return max;
}, 0);

console.log(output);