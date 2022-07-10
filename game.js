let howManyWrong = document.getElementById('howManyWrong')
const wrongLetter =document.getElementById('wrongLetters')
const word = document.getElementById('word')
const finalResult = document.getElementById('finalResult')
const gameWords = [
    "crazy",
    "party",
    "jokes"
]

const buttonOne = document.getElementById('btn')

let answer =gameWords[Math.floor(Math.random() * gameWords.length)]
 console.log(answer)

document.getElementById("myButton").onclick = function () {
    showUp()
}
let correctAnswer = ""
let correctAr = []
let wrongAr = []


function showUp2 (){
    if (correctAnswer)
    word.innerHTML = correctAnswer
}
    function showUp() {
        let val= document.getElementById("letterGuessed").value
        let lCase = val.toLowerCase()
        
    if (answer === "crazy" ) {
        if (lCase === "c" || lCase === "r" || lCase === "a" || lCase === "z" || lCase === "y"){
            if(lCase === "c"){
                correctAr.splice(0,0,lCase)
            } else if (lCase === "r") {
                correctAr.splice(1,0,lCase)
            } else if (lCase==="a"){
                correctAr.splice(2,0,lCase)
            } else if (lCase==="z") {
                correctAr.splice(3,0,lCase)
            }else if (lCase==="y"){
                correctAr.splice(4,0,lCase)
            }
            correctAnswer = ""
            correctAr.forEach(cA=>{
                correctAnswer += cA
            })
            // correctAnswer.innerText.push()
            console.log('this is the first one',correctAnswer)   
            console.log(correctAr)  
            word.innerText = correctAnswer
        } else {
        wrongLetter.innerText= wrongLetter.innerText+" "+ lCase
        wrongAr.push(lCase)
        console.log(wrongAr)
       }
    } else if (answer === "party") {
        if (lCase === "p" || lCase === "a" || lCase === "r" || lCase === "t" || lCase === "y"){
            

            if(lCase === "p"){
                correctAr.splice(0,0,lCase)
                
            } else if (lCase ==="a") {
                correctAr.splice(1,0,lCase)
                
            } else if(lCase==="r"){
                correctAr.splice(2,0,lCase)
                
            } else if(lCase==="t") {
                correctAr.splice(3,0,lCase)
                
            }else  if(lCase==="y"){
                correctAr.splice(4,0,lCase)
            }
            // return
            // {break}
            correctAnswer = ""
            correctAr.forEach(cA=>{
                correctAnswer += cA
            })
            // correctAnswer.innerText.push()
            console.log('this is the first one',correctAnswer)   
            console.log(correctAr)  
            word.innerText = correctAnswer
            // word.innerText = word.innerText+" "+ lCase 
            // correctAr.push(lCase)
            // console.log(correctAr)
        } else {
            wrongLetter.innerText= wrongLetter.innerText+" "+ lCase
            wrongAr.push(lCase)
            console.log(wrongAr)
        }
    } else if (answer === "jokes"){
        if (lCase === "j" || lCase === "o" || lCase === "k" || lCase === "e" || lCase === "s"){
            if(lCase === "j"){
                correctAr.splice(0,0,lCase)
            } else if (lCase === "o") {
                correctAr.splice(1,0,lCase)
            } else if (lCase==="k"){
                correctAr.splice(2,0,lCase)
            } else if (lCase==="e") {
                correctAr.splice(3,0,lCase)
            }else if (lCase==="s"){
                correctAr.splice(4,0,lCase)
            }
            correctAnswer = ""
            correctAr.forEach(cA=>{
                correctAnswer += cA
            })
            // correctAnswer.innerText.push()
            console.log('this is the first one',correctAnswer)   
            console.log(correctAr)  
            word.innerText = correctAnswer
            // word.innerText = word.innerText+" "+ lCase 
            // correctAr.push(lCase)
            // console.log(correctAr)
        } else {
            wrongLetter.innerText= wrongLetter.innerText+" "+ lCase
            wrongAr.push(lCase)
            console.log(wrongAr)
        }

    }
// ab()
numOfLetters()
winOrLose()
countUp()
// craz()
console.log(word,wrongLetter)
console.log(correctAnswer)
showUp2()
}

correctAr.forEach(answer => {
    correctAnswer += answer
})



function winOrLose() {
    if(answer.length === correctAr.length) {
      finalResult.innerHTML = `You guessed the correct letters. The word is "${answer}". If you want to play again click START AGAIN!`
    }else if (wrongAr.length === 5) {
        finalResult.innerHTML = `WRONG! The correct word was "${answer}". You have no more guesses left. START AGAIN `
    }

}
let howManyLettersInWord = document.getElementById('howManyLettersInWord')
function numOfLetters() {
    if (answer){
      let nuLe = answer.length  
      howManyLettersInWord.innerHTML= nuLe

    }
    
}

function countUp() {
    if (wrongAr.length){
        let length = wrongAr.length
        howManyWrong.innerHTML=length
    }
}


const changeClass = () => {
    document.body.classList.toggle('green')
}

buttonOne.addEventListener('click', changeClass)

// function craz (){
//     if (answer==="crazy")
//         if (correctAr==="c")
//         innerHTML.correctAr.split[crazy].sort().join('')
//         //correctAr.push(crazy)
//         console.log(craz)
// }



// let crazy = ["c","r","a","z","y"]
// crazy[0] = 'c'
// crazy[1] = 'r'
// crazy[2] = 'a'
// crazy[3] = 'z'
// crazy[4] = 'y'

// let crazy2 = "crazy"
// let crazy3 = []

// for (let i = 0; i <crazy2.length;i++) {
//     crazy3.push(crazy2.charAt(i))
// }

// function ab() {
//     if(answer === "crazy"){
//         let crazy4 = crazy3.split("", 1).sort()
//         console.log(crazy4)
//     console.log(crazy3)

//     }
// }

// crazy.sort(function (c,r,a,z,y) {
//     if (a>b)
//         return a-b
//     if (a<b)
//         return b-a
    
// })


// let party = []
// party[0] = 'p'
// party[1] = 'a'
// party[2] = 'r'
// party[3] = 't'
// party[4] = 'y'

// let jokes = []
// jokes[0] = 'j'
// jokes[1] = 'o'
// jokes[2] = 'k'
// jokes[3] = 'e'
// jokes[4] = 's'

// function crazy {
//     if (answer === "crazy")
//     if(correctAr === "c") {
//         correctAr.innerText = "c"
//     } 
// }