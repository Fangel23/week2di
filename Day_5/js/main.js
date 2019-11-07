let amount = prompt("How many bottles of beer should we start with?");
var newAmount = 1;
for (let reduce = 1; reduce <= newAmount; reduce++) {
	newAmount = amount - reduce;
​	console.log(amount + " bottles of beer on the wall\n" + amount + " bottles of beer\nTake " + reduce + " down, pass it around\n" + newAmount + " bottles of beer on the wall");
​	amount = newAmount;
}if (amount == 1) {
	console.log("One bottle of beer on the wall\nOne bottle of beer\nTake that one down, pass it around\nWhat a waste of alcohol?");
}else {
	console.log(amount + " bottles of beer on the wall\n" + amount + " bottles of beer\nTake those " + amount + " down, pass them around\nAnyone here have more beer for my wall?");
}