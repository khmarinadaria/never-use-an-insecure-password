let firstButton = document.getElementById("first-button")
let secondButton = document.getElementById("second-button")
let generateButton = document.getElementById("generate-button")
let numbersCheckbox = document.getElementById("numbers")
let specialSymbolsCheckbox = document.getElementById("symbols")
let passwordLength = document.getElementById("password-length")
let copyMessage1 = document.getElementById("copy-message1") 
let copyMessage2 = document.getElementById("copy-message2")

let letters = ["A","B","C","D","E","F","G","H","I","J","K","L",
    "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b",
    "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z"]

let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let specialSymbols = ["~","`","!","@","#","$","%","^","&","*","(",")",
     "_","\-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

generateButton.addEventListener("click", function() {
    firstButton.textContent = " "
    secondButton.textContent = " "
    for (let i=0; i<passwordLength.value; i++) {
        let characters = [...letters]

        if (numbersCheckbox.checked) {
            characters.push(...numbers)
        }

        if (specialSymbolsCheckbox.checked) {
            characters.push(...specialSymbols)
        }

        firstButton.textContent += characters[Math.floor(Math.random()*characters.length)]
        secondButton.textContent += characters[Math.floor(Math.random()*characters.length)]
    }
}) 

firstButton.addEventListener("click", function(){
    navigator.clipboard.writeText(firstButton.textContent.trim())
    .then(function(){
        console.log("First text copied!")
        copyMessage1.textContent = "Text copied!"
        setTimeout(function() {
            copyMessage1.textContent = ""
        }, 1000)
    }) 
    .catch(function(error){
        console.log("Copy of first text failed: " + error)
    })
})

secondButton.addEventListener("click", function(){
    navigator.clipboard.writeText(secondButton.textContent.trim())
    .then(function(){
        console.log("Second text copied")
        copyMessage2.textContent = "Text copied!"
        setTimeout(function() {
            copyMessage2.textContent = ""
        }, 1000)
    })
    .catch(function(error){
            console.log("Copy of second text failed: " + error)
    })
})