var fs = require("fs")

//01 - File System
console.log("01 - File System \n");

// fs.readFile("jour07.txt", function (err, data) {
//     if (err) {
//         return console.error(err);
//     }
 
//     console.log(data.toString());
//     console.log("Et voilà ! Voyons le résultat");
// })
// fs.writeFile("jour07.txt", "test", function(err) {
//     if (err) {
//         return console.error(err)
//     }  
// })
console.log("")

//02 - Map Double
console.log("02 - Map Double \n")

var array = [1, 2, 3, 4, 5]

var double = array.map(function(num) {
    return num * 2
})
console.log(double)
console.log("")

//03 - Map Names
console.log("03 - Map Names \n")

var longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
]

shortNames = longNames.map(function(name) {
    return {name: `${name.firstName} ${name.lastName}`}
})
console.log(shortNames)
console.log("")

//04 - Filter Numbers
console.log("04 - Filter Numbers \n")

var array = [1, "toto", 34, "javascript", 8]

var numbers = array.filter(function(num){
    // return num !== "toto" && num !== "javascript"
	return typeof num === "number" //typeof
})
console.log(numbers)
console.log("")

//05 - Filter Even
console.log("05 - Filter Even")

var numbers = [1, 2, 3, 4, 5, 6, 7, 8]

var even = numbers.filter(function(num) {
    return num % 2 === 0
})
console.log(even)
console.log("")

//06 - Cakes
console.log("06 - Cakes")

var cakes = [
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]

var chocolate = cakes.filter(function (choco) {
    return choco.flavor === "chocolate"
})
console.log(chocolate)
var rupture = chocolate.map(function (soldout) {
    return {name: soldout.name,
            flavor: soldout.flavor,
            status: "sold out!"}
}) //...cake c'est la même chose
console.log(rupture);