//Bonus 
var prompt = require("prompt")
const randomWordFR = require('random-word-fr')
var counter = 5
var tiret = []
var allVisible = false
var noLetter = false

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
    objet.forEach(function(item) { //si le code bug, ajoute var cachelettre devant
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
function findWord(objet, lettre) {
    objet.find(function(element){
        if (element.letter === lettre && element.isVisible === false) {
            element.isVisible = true
            noLetter = false
            return true
        } else {
            noLetter = true
        }
    })
    return noLetter
}

prompt.start()  // démarre le prompt

function pendu() {
    if (counter !== 0) {
        if (allVisible === false) {
            prompt.get({ name: "lettre", description: `Vous avez ${counter} chances pour trouver le mot ${tiret}` }, function (err, res) { // permet de paramétrer la question
                if (err) {
                    console.log(err)
                }
                if (findWord(objetWord, res.lettre) === true) {
                    counter--
                    console.log("Il n'y a pas cette lettre dans le mot..");
                }
                
                tiretWord(objetWord)
                // console.log(objetWord)
                allVisible = checkVisible(objetWord)
                pendu()
            })
        } else {
            console.log("C'est gagné")
        }
    } else {
        console.log("Vous avez perdu...");
    }
}
pendu()