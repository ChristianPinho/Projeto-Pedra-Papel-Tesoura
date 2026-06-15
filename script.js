const result = document.querySelector('.result')
const choicesText = document.querySelector('.choices')
const youScore = document.querySelector('#you-score')
const computerScore = document.querySelector('#computer-score')

let humanScore = 0
let compScore = 0

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playComputer())
}

const playComputer = () => {

    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const translateChoice = (choice) => {
    if (choice === 'rock') return 'Pedra'
    if (choice === 'paper') return 'Papel'
    if (choice === 'scissors') return 'Tesoura'
}

const playTheGame = (human, computer) => {

    choicesText.textContent = `Você: ${translateChoice(human)} - Computador: ${translateChoice(computer)}`
    result.classList.remove('win', 'lose', 'draw')
    
    if (human === computer) {
        result.textContent = 'Empate!'
        result.classList.add('draw')
    }
    else if ((human === 'rock' && computer === 'scissors') ||
        (human === 'paper' && computer === 'rock') ||
        (human === 'scissors' && computer === 'paper')) {
        humanScore++
        youScore.textContent = humanScore
        result.textContent = 'Você venceu!'
        result.classList.add('win')
    }
    else {
        compScore++
        computerScore.textContent = compScore
        result.textContent = 'O computador venceu!'
        result.classList.add('lose')
    }
}