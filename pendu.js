//Bonus 
var prompt = require("prompt")
var counter = 0

prompt.start()  // démarre le prompt

prompt.get(["username"], function (err, res) {  // demande à obtenir les propriétés "username" et "email"
    if (err) {
		console.log(err)
    }

})