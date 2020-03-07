console.log('Hello world!')

function retirement(retirementAge) {
	return function(yearOfBirth) {
		var age = 2020 - yearOfBirth
		console.log(`${retirementAge - age} years left until retirement.`)
	}
}

var retirementUS = retirement(66)
var retirementGermany = retirement(65)
var retirementIceland = retirement(67)

retirementGermany(1990)
retirementUS(1990)
retirementIceland(1990)

retirement(66)(1990)

// Check this crap out

var user = {
	name: 'Jonathan',
	lastLogin: 3,
	favoriteThing: 'family'
}

var welcomeMessage = 'Welcome, '
welcomeMessage += user.name
welcomeMessage += '. You last logged in '
welcomeMessage += user.lastLogin
welcomeMessage += ' days ago. We know your favorite thing is your '
welcomeMessage += user.favoriteThing
welcomeMessage += '!'

console.log(welcomeMessage)

/*
=> Welcome, Jonathan. You last logged in 3 days ago. We know your favorite thing is your family!
*/

var welcomeMessage2 = `Welcome, ${user.name}. `
welcomeMessage2 += `You last logged in ${user.lastLogin} days ago. `
welcomeMessage2 += `We know your favorite thing is your ${user.favoriteThing}!`

console.log(welcomeMessage2)

// function interviewQuestion(job) {
// return function(name) {
// if (job === 'designer') {
// console.log(name + ', can you please explain what UX design is?');
// } else if (job === 'teacher') {
// console.log('What subject do you teach, ' + name + '?');
// } else {
// console.log('Hello ' + name + ', what do you do?');
// }
// }
// }
//
// interviewQuestion('teacher')('John');
