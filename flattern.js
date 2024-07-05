// Javascript Flattern Numbers find
const numbers = [
	1,
	[3, [2, 8, [12]], 9],
	[5],
	[12, [[5]]],
	[100, [23, 45]]
];
const flatternNumb = (numbers) => {
	return numbers.reduce((acc, num) => {
		return acc.concat(Array.isArray(num) ? 
		flatternNumb(num) : num);
	}, []);
};
console.log(flatternNumb(numbers));
// using inbuild function
//console.log(numbers.flat(Infinity));

//output
//[1,3,2,8,12,9,5,12,5,100,23,45]