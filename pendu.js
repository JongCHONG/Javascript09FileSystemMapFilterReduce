//Bonus 
var prompt = require("prompt")
const randomWordFR = require('random-word-fr')
var counter = 10

//recuperer un mot random
do {
    var mysteryWord = randomWordFR()   
} while (mysteryWord.length != 8) 
console.log(mysteryWord)
mysteryWord = mysteryWord.split("")
console.log(mysteryWord)

//cacher les lettres avec tiret du bas
var tiret = []
mysteryWord.forEach(function(item) {
    tiret = tiret + "_"
})

prompt.start()  // démarre le prompt

function pendu() {
    prompt.get({ name: "lettre", description: `Vous avez ${counter} chances pour trouver le mot ${tiret}` }, function (err, res) { // permet de paramétrer la question
        if (err) {
            console.log(err)
        }
        console.log(res.lettre)
        if (mysteryWord.includes(res.lettre)) {
            var index = mysteryWord.filter(function (item) {
                return item === res.lettre
            })
            console.log(index)
        } else {
            console.log("erreur")
        }
    })
}
pendu()