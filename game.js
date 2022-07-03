let gameWords = [
    "crazy",
    "party",
    "jokes"
]

let answer = ''
let amountOfLives = 5
let howManyWrong = 0
let guessedLetters = []

function randomWord() {
    answer =gameWords[Math.floor(Math.random) * gameWords.length]
}

document.getElementById('amountOfLives').innerHTML = amountOfLives