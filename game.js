let howManyWrong = document.getElementById('howManyWrong')
const wrongLetter =document.getElementById('wrongLetters')
const word = document.getElementById('word')
const gameWords = [
    "crazy",
    "party",
    "jokes"
]

let answer =gameWords[Math.floor(Math.random() * gameWords.length)]
 

document.getElementById("myButton").onclick = function () {
    let guessedLetters = document.getElementById("letterGuessed").value;
    console.log(guessedLetters)
}

function showUp() {
    let val= document.getElementById("letterGuessed").value
    if (document.getElementById(answer.value === "crazy")) {
       if (val === "c"||val==="r"||val==="a"||val==="z"||val==="y"){
        word.push("letterGuessed") 
       } else {
        wrongLetter.push(guessedLetters)
       }
    } else if (document.getElementById(answer.value === "party")) {
        if (val==="p"||val==="a"||val==="r"||val==="t"||val==="y"){
        word.push(guessedLetters)
        }else {
        wrongLetter.push(guessedLetters)
        }
    } else if (document.getElementById(answer.value === "jokes")){
        if (val=== "j"||val==="o"||val==="k"||val==="e"||val==="s"){
        word.push(guessedLetters)
        }else {
        wrongLetter.push(guessedLetters)
    }

    }

}
