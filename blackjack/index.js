let firstCard = 12
let secondCard = 9

let cards = [firstCard,secondCard] //array
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

let message = ""

let messageEl = document.getElementById("message-el")

// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector(".sum-el")

let cardsEl = document.getElementById("cards-el")

function startGame(){
    renderGame()
}

function renderGame() {

    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20){
        message = "Do you want to draw a new card?"
    }
    else if(sum === 21){
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    }
    else{
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    let card = 7
    sum += card
    renderGame()
}