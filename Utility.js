var position
var totalDieRolls

const NO_MOVE = 0
const SNAKE = 1
const LADDER = 2

class Utility {

    //function to play the game
    playGame = () => {

        var dieValue = Math.floor(Math.random() * 10 % 6) + 1;
        var moveOption = Math.floor(Math.random() * 10 % 3);

        switch(moveOption){
            case SNAKE:
                position -= dieValue
                break;
            case LADDER:
                position += dieValue
            case NO_MOVE:
        }

        if (position < 0)
            position = 0

        if (position > 100)
            position -= dieValue

    }

    //function to simulate the complete game
    simulateGame = () => {
        totalDieRolls = 0
        position = 0
        while (position != 100) {
            this.playGame()
            totalDieRolls++
        }

        console.log(`Total number of die rolls is ${totalDieRolls}`)
        return totalDieRolls

    }

    //play between 2 players
    playBetweenTwoPlayers = () => {
        console.log("For player 1 ==> ")
        let playerOneMoves = this.simulateGame()

        console.log("For player 2 ==> ")
        let playerTwoMoves = this.simulateGame()

        let winner = (playerOneMoves < playerTwoMoves) ? "Player 1" : "Player 2"
        console.log(`${winner} won the game!`)
    }
}

module.exports = new Utility();