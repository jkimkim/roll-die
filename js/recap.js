let fname = "John"
let lname = "Kim"
let fullname = fname + " " + lname
console.log(fullname);

//second recap
let name = "Linda"
let greeting = "Hi there"
function greet() {
    let fullGreet = greeting + "," + " " + name + "!"
    console.log(fullGreet)
}
greet();

//third recap
let errorMsg = document.getElementById("error")
function error() {
    errorMsg.innerText = "An error occured! Please try again!"
}


//simple calculator
let num1 = 8
let num2 = 2
let sum = document.getElementById("sum")
document.getElementById("num1").textContent = num1
document.getElementById("num2").textContent = num2

function add() {
    let result = num1 + num2
    sum.textContent += result + " "
}

function subtract() {
    let subres = num1 - num2
    sum.textContent += subres + " "
}

function divide() {
    let divres = num1 / num2
    sum.textContent += divres + " "
}

function multiply() {
    let multres = num1 * num2
    sum.textContent += multres + " "
}

let skills = [
    "javaScript",
    "HTML",
    "CSS",
    "Java", 
    "VB"]
console.log(skills[1])
console.log(skills[2])
console.log(skills[0]
)
let messages = [
    "hey, how's it going",
    "I'm great! Thank you",
    "all good."
]
let newMessage = "same here"
messages.push(newMessage)
messages.pop(newMessage)
console.log(messages)



//for loop
// for (let i = 10; i < 101; i += 10) {
//     console.log(i)
// }
// let cards = [7, 3, 9]
// for (let i = 0; i < cards.length; i++){
//     console.log(cards[i])
// }

// let sentence = ["Hello", "my", "name", "is", "Per"]
// let greetingEl = document.getElementById("greeting-el")
// console.log(greetingEl)
// for (let i = 0; i < sentence.length; i++){
//     console.log(sentence[i])
//     greetingEl.textContent += sentence[i] + " "
// }

let randomNumber = Math.floor( Math.random() *6)
console.log(randomNumber)

// let flooredNumber = Math.floor(3.45632)
// console.log(flooredNumber)


let player1 = 304
let player2 = 205

function getTotalTime() {
    return player1 + player2
}
let totalTime = getTotalTime()
console.log(totalTime)

// let hasCompletedCourse = true
// let givesCertificate = true

// if (hasCompletedCourse === true && givesCertificate === true) {
//     generateCertificate()
// }
// function generateCertificate() {
//     console.log("Generating certificate...")
// }

let hasSolvedChallenge = false
let hasHintsLeft = false

if (hasSolvedChallenge === false && hasHintsLeft === false)
{
    showSolution()
    }

function showSolution() {
    console.log("Showing Solution...")
}

let likesStartups = false
let likesDocumentaries = true

if (likesDocumentaries === true || likesStartups === true)
{
    recommendMovie()
}
function recommendMovie() {
    console.log("Hey! Check out this new film we think you will like!")
}


rentCastle = {
    isSuperHost: true,
    head: "live like a king in my Castle",
    title: "The Great Castle",
    Location: "Kenya",
    tags: [4 + " Guests", 2 + " Bedrooms", 2 + " Beds"],
    price: "$" + 140 + "/ night",
   rating: [4.95, 1235 + " reviews"]
}

console.log(rentCastle.rating, rentCastle.tags)