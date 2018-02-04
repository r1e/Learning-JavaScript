/* --------------------------------------------------------------------------------
   文字列の実験
---------------------------------------------------------------------------------- */

var string = 'The revolution will not be televised.';
console.log(string); //The revolution will not be televised.

var badString = string;
console.log(badString); //The revolution will not be televised.

var sgl = 'Single quotes.';
var dbl = "Double quotes";

console.log(sgl); //Single quotes.
console.log(dbl); //Double quotes


var sglDbl = 'Would you eat a "fish supper"?';
var dblSgl = "I'm feeling blue.";
console.log(sglDbl); //Would you eat a "fish supper"?
console.log(dblSgl); //I'm feeling blue.

var bigmouth = 'I\'ve got no right to take my place...';
console.log(bigmouth); //I've got no right to take my place...

console.log('Front ' + 242); //Front 242

var myDate = '19' + '67';
console.log('typeof myDate'); //typeof myDate

var myString = '123';
var myNum = Number(myString);
console.log(typeof myNum); //number

var myNum = 123;
var myString = myNum.toString();
console.log(typeof myString); //string