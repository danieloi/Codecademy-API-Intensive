// All code should be written in this file.
let playerOneMoveOneType, playerOneMoveTwoType, playerOneMoveThreeType, playerOneMoveOneValue, playerOneMoveTwoValue, playerOneMoveThreeValue;
let playerTwoMoveOneType, playerTwoMoveTwoType, playerTwoMoveThreeType, playerTwoMoveOneValue, playerTwoMoveTwoValue, playerTwoMoveThreeValue;


function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
        
    if (moveOneType == undefined || moveTwoType == undefined || moveThreeType == undefined){
        return;
    }

    // if (player !== 'Player One' || player !== 'Player Two') {
    //     return;
    // }

    if (moveOneValue == undefined || moveTwoValue == undefined || moveThreeValue == undefined) {
        return;
    }

    let moves = ['rock', 'paper', 'scissors'];
    if(moves.indexOf(moveOneType) < 0 || moves.indexOf(moveTwoType) < 0 || moves.indexOf(moveThreeType) < 0) {
        return;
    }
    // if ({moveOneType, moveTwoType, moveThreeType } != 'rock' || 'paper' || 'scissors'){
    //     return;
    // }

    if(moveOneValue < 1 || moveTwoValue < 1 || moveThreeValue < 1){
        return;
    }


    if(moveOneValue > 99 || moveTwoValue > 99 || moveThreeValue > 99){
        return;
    }

    if((moveOneValue + moveTwoValue + moveThreeValue) > 99){
        return;
    }

    if (player == 'Player One') {
        playerOneMoveOneType = moveOneType;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeValue = moveThreeValue;
    } else if( player == 'Player Two') {
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeValue = moveThreeValue;
    }
}

function getRoundWinner(round) {
    if(playerOneMoveOneType == undefined || playerOneMoveTwoType == undefined || playerOneMoveThreeType == undefined || playerTwoMoveOneType == undefined || playerTwoMoveTwoType == undefined || playerTwoMoveThreeType  == undefined) {
        return null;
    }

    if(playerOneMoveOneValue == undefined || playerOneMoveTwoValue == undefined || playerOneMoveThreeValue == undefined || playerTwoMoveOneValue == undefined || playerTwoMoveTwoValue == undefined || playerTwoMoveThreeValue  == undefined) {
        return null;
    }

    switch (round) {
        case 1:
            if(playerOneMoveOneType == playerTwoMoveOneType) {
                if (playerOneMoveOneValue > playerTwoMoveOneValue) {
                    return 'Player One';
                } else if (playerOneMoveOneValue < playerTwoMoveOneValue) {
                    return 'Player Two';
                } else {
                    return 'Tie';
                }
            }
            switch (playerOneMoveOneType) {
                case 'rock':
                    if(playerTwoMoveOneType == 'paper') {
                        return 'Player Two';
                    } else {
                        return 'Player One';
                    }
                    break;
                case 'paper':
                    if(playerTwoMoveOneType == 'scissors') {
                        return 'Player Two';
                    } else {
                        return 'Player One';
                    }
                    break;

                case 'scissors':
                    if(playerTwoMoveOneType == 'rock') {
                        return 'Player Two';
                    } else {
                        return 'Player One';
                    }
                    break;
                default:
                    break;
            }
            break;
        case 2:
            if(playerOneMoveTwoType == playerTwoMoveTwoType) {
                if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
                    return 'Player One';
                } else if (playerOneMoveTwoValue < playerTwoMoveTwoValue) {
                    return 'Player Two';
                } else {
                    return 'Tie';
                }
            }
            switch (playerOneMoveTwoType) {
                case 'rock':
                    if(playerTwoMoveTwoType == 'paper') {
                        return 'Player Two';
                    } else {
                        return 'Player One';
                    }
                    break;
                case 'paper':
                    if(playerTwoMoveTwoType == 'scissors') {
                        return 'Player Two';
                    } else {
                        return 'Player One';
                    }
                    break;

                case 'scissors':
                    if(playerTwoMoveTwoType == 'rock') {
                        return 'Player Two';
                    } else {
                        return 'Player One';
                    }
                    break;
                default:
                    break;
            }
            break;
        case 3:
            if(playerOneMoveThreeType == playerTwoMoveThreeType) {
                if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
                    return 'Player One';
                } else if (playerOneMoveThreeValue < playerTwoMoveThreeValue) {
                    return 'Player Two';
                } else {
                    return 'Tie';
                }
            }
            switch (playerOneMoveThreeType) {
                case 'rock':
                    if(playerTwoMoveThreeType == 'paper') {
                        return 'Player Two';
                    } else {
                        return 'Player One';
                    }
                    break;
                case 'paper':
                    if(playerTwoMoveThreeType == 'scissors') {
                        return 'Player Two';
                    } else {
                        return 'Player One';
                    }
                    break;

                case 'scissors':
                    if(playerTwoMoveThreeType == 'rock') {
                        return 'Player Two';
                    } else {
                        return 'Player One';
                    }
                    break;
                default:
                    break;
            }
                break;
        default:
            return null;
            break;
    }

}

function getGameWinner() {

}

function setComputerMoves() {

}