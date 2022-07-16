// Lesson 8

//1. Function Declaration:
function getName1 (name) {
	return(name);
}
let postName = getName1('Yuriy');
console.log(postName);

//2. Function expression
const getName2 = function(name) {
	return (name);
}
let postName2= getName2('Yuriy_2');
console.log(postName2);

//3. Arrow function
const getName3 = name => name;
let postName3= getName3('Yuriy_3');
console.log(postName3);