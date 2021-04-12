const palindromes = function(str) {
	const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
	const whiteSpace = /\s/g;
	const removePunct = str.replace(regex, '');
	const removeWhiteSpace = removePunct.replace(whiteSpace, '');
	const lowerCase = removeWhiteSpace.toLowerCase();
	const reversed = lowerCase
										.split('')
										.reverse()
										.join('');
	return lowerCase === reversed;


}

module.exports = palindromes
