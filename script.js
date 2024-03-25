function getComputerChoice(random) {
    random = ['Rock','Paper','Scissors'];
    return random[Math.floor(Math.random() * random.length)]
    
}
console.log(getComputerChoice())
function playerSelection(playerChoice) {
    return playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);

}
console.log(playerSelection('rock'))