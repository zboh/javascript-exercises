let findTheOldest = function(arr) {
	let oldest = arr.reduce((age, person) => {
		if('yearOfDeath' in person) {
			return;
		} else {
			person['yearOfDeath'] = new Date().getFullYear();
		};
		age = person['yearOfDeath'] - person['yearOfDeath'];
	}, 0);
}

module.exports = findTheOldest


