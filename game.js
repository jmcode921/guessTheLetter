let howManyWrong = document.getElementById('howManyWrong')
const wrongLetter =document.getElementById('wrongLetters')
const word = document.getElementById('word')
const finalResult = document.getElementById('finalResult')
const gameWords = [
    "crazy",
    "party",
    "jokes"
]
let answer =gameWords[Math.floor(Math.random() * gameWords.length)]
 console.log(answer)

document.getElementById("myButton").onclick = function () {
    showUp()
    resetInputType()
}


let correctAr = []
let wrongAr = []

function resetInputType() {
        return document.getElementById("letterGuessed").value = " ";
    }
    
    function showUp() {
        let val= document.getElementById("letterGuessed").value
        
    if (answer === "crazy") {
        if (val === "c" || val === "r" || val === "a" || val === "z" || val === "y"){
          word.innerText = word.innerText+" "+ val  
            correctAr.push(val)
            console.log(correctAr)     
       } else {
        wrongLetter.innerText= wrongLetter.innerText+" "+ val
        wrongAr.push(val)
        console.log(wrongAr)
       }
    } else if (answer === "party") {
        if (val === "p" || val === "a" || val === "r" || val === "t" || val === "y"){
            word.innerText = word.innerText+" "+ val 
            correctAr.push(val)
            console.log(correctAr)
        } else {
            wrongLetter.innerText= wrongLetter.innerText+" "+ val
            wrongAr.push(val)
            console.log(wrongAr)
        }
    } else if (answer === "jokes"){
        if (val === "j" || val === "o" || val === "k" || val === "e" || val === "s"){
            word.innerText = word.innerText+" "+ val 
            correctAr.push(val)
            console.log(correctAr)
        } else {
            wrongLetter.innerText= wrongLetter.innerText+" "+ val
            wrongAr.push(val)
            console.log(wrongAr)
    }

}
winOrLose()
countUp()
console.log(word,wrongLetter)
}



function winOrLose() {
    if(answer.length === correctAr.length) {
      finalResult.innerHTML = `"You guessed the correct letters. The word is "${answer}". If you want to play again click START AGAIN!"`
    }else if (wrongAr.length === 5) {
        finalResult.innerHTML = "WRONG! You  have no more guesses left. START AGAIN "
    }

}

function countUp() {
    if (wrongAr.length){
        let length = wrongAr.length
        howManyWrong.innerHTML=length
    }
}


