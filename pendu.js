//Bonus 
var prompt = require("prompt")
const randomWordFR = require('random-word-fr')
var counter = 10
var tiret = []
var allVisible = false

//recuperer un mot random
do {
    var mysteryWord = randomWordFR()   
} while (mysteryWord.length != 5) 
console.log(mysteryWord)
mysteryWord = mysteryWord.split("")
var objetWord = mysteryWord.map(function(item) {
    return {letter : item,
            isVisible: false}
})
// console.log(objetWord)

//cacher les lettres avec tiret du bas
function tiretWord(objet) {
    tiret = []
    var cachelettre = objet.forEach(function(item) {
        if (item.isVisible === false) {
            tiret = tiret + "_"
        } else {
            tiret = tiret + item.letter
        }
    })
}
tiretWord(objetWord)

//check isVisible
function checkVisible(objet) {
    allVisible = true
    var test = objet.forEach(function(item){
        if (item.isVisible === false) {
            allVisible = false
        }
    })
    return allVisible
}

prompt.start()  // démarre le prompt

function pendu() {
    if (allVisible === false) {
        prompt.get({ name: "lettre", description: `Vous avez ${counter} chances pour trouver le mot ${tiret}` }, function (err, res) { // permet de paramétrer la question
        if (err) {
            console.log(err)
        }
            objetWord.find(function(element){
                if (element.letter === res.lettre && element.isVisible === false) {
                    element.isVisible = true
                    return true
                }
            })
            tiretWord(objetWord)
            console.log(objetWord)
            allVisible = checkVisible(objetWord)
            pendu()
        })
    } else {
        console.log("c'est gagné")
    }
}
pendu()