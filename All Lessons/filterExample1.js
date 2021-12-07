//filter out the even nubers inside array

const arr = [5, 1, 3, 2, 6];

function isEven(y){
	return y % 2 === 0;
}

const output = arr.filter(isEven);
console.log(output);