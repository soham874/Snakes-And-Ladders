var position
var totalDieRolls

class Utility {

    //function to play the game
    playGame() {

        var dieValue = Math.floor(Math.random() * 10 % 6) + 1;
        var moveOption = Math.floor(Math.random() * 10 % 3);

        (moveOption == 1) ? position -= dieValue : position += dieValue

        if (position < 0)
            position = 0

        if (position > 100)
            position -= dieValue

    }

    //function to simulate the complete game
    simulateGame() {
        totalDieRolls = 0
        position = 0
        while (position != 100) {
            this.playGame()
            totalDieRolls++
        }

        console.log("Total number of die rolls is " + totalDieRolls)
        return totalDieRolls

    }

    //play between 2 players
    playBetweenTwoPlayers() {
        console.log("For player 1 ==> ")
        let playerOneMoves = this.simulateGame()

        console.log("For player 2 ==> ")
        let playerTwoMoves = this.simulateGame()

        if (playerOneMoves < playerTwoMoves)
            var output = "Player 1"
        else
            var output = "Player 2"
        console.log(output + " won the game!")
    }
}

module.exports = new Utility();