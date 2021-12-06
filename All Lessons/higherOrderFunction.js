const radius = [3, 1, 2, 4];

const calculateArea = function (radius){
    const output = [];
    for (let i=0; i<radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}
const result1 = calculateArea(radius);
console.log(result1);

const calculateCircumference = function (radius){
    const output = [];
    for (let i=0; i<radius.length; i++){
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
}
const result2 = calculateCircumference(radius);
console.log(result2);

const calculateDiameter = function (radius){
    const output = [];
    for (let i=0; i<radius.length; i++){
        output.push(2 * radius[i]);
    }
    return output;
}
const result3 = calculateDiameter(radius);
console.log(result3);