// var colors = ["blue", "orange", "green", "black", "magenta"];

// for (let i = 0; i<colors.length; i=i+2){
//  	console.log("My " + Number(i + 1)  + " choice is "  + colors[i]);


//  };

// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.


// var numbers = [];

// for (var i = 1; i <= 15; i++) {
// 	numbers.push(i);
// 	// console.log();
// 	if (numbers[i-1] % 2 == 0){
// 		console.log(i + " is an even number");
// 	}else{
// 		console.log(i + " is an odd number")
// 	}
    
// }

// var names = ["john", "sarah", 23, "Rudolf",34];


// for (let i = 0; i<names.length; i++){
// 	if (typeof(names[i]) === "string"){
// 		if(names[i][0] === names[i][0].toUpperCase())
// 		{console.log(names[i])}
// 		else{
// 		console.log(names[i][0].toUpperCase(i) + names[i].substring(1,))}
// 	}	
// }	

// var fam = {
// 	Children: 4,
// 	Car: "Toyota",
// 	Dog: "Pitbull",
// 	Religion: "Muslim"

// }

// for (item in fam){
// 	// console.log(item);
// 	console.log(fam[item]);
// }

// do{
// 	var i = Number(prompt("Please enter your number: "))
	
// }
/// while (i <= 10);


var arr = [5,0,9,1,7,4,2,6,3,8];


for (let i = 0; i<arr.length; i++){
	
	
	for (let j = 0; j<arr.length; j++){
		
		if(arr[j]<arr[j+1]){
			let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;

		}
	
	}
}
console.log(arr);