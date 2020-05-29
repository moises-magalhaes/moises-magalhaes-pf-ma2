//question 1
var petArray = ['cat', 'cow', 'dog'];

//question 2
console.log(petArray[1]);

//question 3
petArray.push('sheep');

//question 4
console.log(petArray.length);

//question 5
var catObject = {
	name: 'janson',
	colour: 'black',
	age: 2,
};

//question 6
console.log(catObject.age);

//questio 7
var catArray = [
	{
		name: 'janson',
		colour: 'black',
		age: 2,
	},
];

//question 8
for (var i = 0; i < catArray.length; i++) {
	console.log(catArray[i]);
	console.log(catObject.name);
	console.log(catObject.colour);
	console.log(catObject.age);
}

//question 9
function logToConsole(animal) {
	console.log(animal);
}

//question 10
logToConsole(donkey);
