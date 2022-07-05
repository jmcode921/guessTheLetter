const word = document.getElementById('word')
const wrongLetter =document.getElementById('wrongLetters')
const gameWords = [
    "crazy",
    "party",
    "jokes"
]
let howManyWrong = document.getElementById('howManyWrong')
let amountOfLives = document.getElementById('amountOfLives').innerHTML
let answer =gameWords[Math.floor(Math.random() * gameWords.length)]
 

document.getElementById("myButton").onclick = function () {
    let guessedLetters = document.getElementById("letterGuessed").value;
    console.log(guessedLetters)
}