const fibonacci = function(num) {
	let toInteger = parseInt(num);
	let first = 0;
	let second = 1;
	let sum = 0;
	if(toInteger < 0) {
		return 'OOPS';
	}

	if(toInteger == 0 || toInteger == 1) {
		return toInteger;
	}

	for (let i = 1; i < toInteger; i++) {
		sum = first + second;
		first = second;
		second = sum;
	}
	return sum;
}



module.exports = fibonacci
