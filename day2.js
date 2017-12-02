fs = require('fs')

var fs = require('fs');
var array = fs.readFileSync('input/day2.txt').toString().split("\n");

// Part 1
solution = array.map(diffOfMaxMin).reduce((total, amount) => total + amount);
console.log(solution);

solution2 = array.map(diffOfEvenlyDivisible).reduce((total, amount) => total + amount);
console.log(solution2)

// Part 2
function diffOfMaxMin(arr) {
	nums = arr.split('\t');
	const max = Math.max(...nums);
	const min = Math.min(...nums);
	return max - min	
}

function diffOfEvenlyDivisible(arr) {
	nums = arr.split('\t');
	for(let i = 0; i < nums.length; ++i) {
		for(let j = 0; j < nums.length; ++j) {
			if(nums[i] % nums[j] == 0 && i !== j) {
				return nums[i] / nums[j];
			}
		}	
	}	
}