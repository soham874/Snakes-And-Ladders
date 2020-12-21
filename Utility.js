var position = 0

class Utility {

    //function to play the game
    playGame() {


        var dieValue = Math.floor(Math.random() * 10 % 6) + 1;
        var moveOption = Math.floor(Math.random() * 10 % 3);

        switch(moveOption){
            case 1:
                position-=dieValue
                break
            case 2:
                position+=dieValue
        }

        if(position < 0)
            position = 0

        if(position > 100)
            position-=dieValue
    }

    //function to simulate the complete game
    simulateGame(){

        while(position!=100)
            this.playGame()

    }

}

module.exports = new Utility();