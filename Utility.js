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

    }

}

module.exports = new Utility();