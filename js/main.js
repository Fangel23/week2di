


// var arr = (prompt("What is your list of words"));
// var arr2 = arr.split(" ");
var arr2 = ['faine', 'yullllllllllia', 'mhwdhw'];

console.log(arr2);


function my_f(arr2) {
	for (let item = 0; item < arr2.length-1; item++){
		let width = 0;
		if (arr2[item].length > arr2[item+1].length){
			console.log(arr2[item]);
			width = (arr2[item].length) + 4;
			console.log(width)}}
		
		let star ="";

 	for (let j = 0; j<width; j++){
 			star = star + "*";
 		} 
 		console.log(star);
 		
 	for (z of arr2){
 		let marginRight = (width +1 - arr2[z].length);
 		console.log(marginRight);
 		let rightSpaces = "";
 	
 		for (i = 0; i<marginRight; i++){
 			rightSpaces = rightSpaces + " ";
 		}
 		console.log("* " + word + rightSpaces + "*");	
 	}
 	console.log(star);	

}

my_f(arr2);