let finalScorePlayer1 = document.querySelector('#sc_p1'),
    finalScorePlayer2 = document.querySelector('#sc_p2'),
    btnNewGame = document.querySelector('#new_game_btn'),
    btnReset = document.querySelector('#reset_btn'),
    startBtnPlayer1 = document.querySelector('#image_col_1Player'),
    cardPlayer1 = document.querySelector('#image_1player'),
    cardPlayer2 = document.querySelector('#image_2player'),
    scorePlayer1 = document.querySelector('#score_player1'),
    scorePlayer2 = document.querySelector('#score_player2'),
    btnEnd1 = document.querySelector('#btn_end_1'),
    objPlayer = {},
    objComp = {},
    sumPlayer1 = 0,
    sumPlayer2 = 0,
    finalSumPlayer1 = 0,
    finalSumPlayer2 = 0,
    whoWinnerMessage = document.querySelector('#who_winner'),
    winnerBlock = document.querySelector('#winner_block');

    let a = 0;
    let b = 0;


    btnNewGame.addEventListener('click', startNewGame);
    btnReset.addEventListener('click', pushReset);

    function startNewGame() {
        resetValues();
        gamePlayer();
    }

    function gamePlayer() {
        console.log('Player');
        objPlayer = { 1: 6, 2: 6, 3: 6, 4: 6, 5: 7, 6: 7, 7: 7, 8: 7, 9: 8, 10: 8, 11: 8, 12: 8, 13: 9, 14: 9, 15: 9, 16: 9, 17: 10, 18: 10,  19: 10, 20: 10, 21: 2, 22: 2, 23: 2, 24: 2, 25: 3, 26: 3, 27: 3, 28: 3, 29: 4, 30: 4, 31: 4, 32: 4, 33: 1, 34: 1, 35: 1, 36: 1};

        startBtnPlayer1.addEventListener('click', calculation);
        
        function calculation() {
            let num = getRandom(1, 36);

            if (objPlayer[num] === null) {
                calculation();
            } else {
                sumPlayer1 += objPlayer[num];
                console.log(`num = ${num}, objPlayer[num] = ${objPlayer[num]}, sumPlayer1 = ${sumPlayer1}`);

                showCard(cardPlayer1, num, scorePlayer1, sumPlayer1);
                a = sumPlayer1;

                btnEnd1.addEventListener('click', startGameComputer);

                if (sumPlayer1 >= 21) {
                    startBtnPlayer1.removeEventListener('click', calculation);
                    
                    btnEnd1.removeEventListener('click', startGameComputer);
                    startGameComputer();
                }
                objPlayer[num] = null;
            }
        }
    }
        
    function startGameComputer() {
        btnEnd1.removeEventListener('click', startGameComputer);
        console.log('Comp');

        objComp = { 1: 6, 2: 6, 3: 6, 4: 6, 5: 7, 6: 7, 7: 7, 8: 7, 9: 8, 10: 8, 11: 8, 12: 8, 13: 9, 14: 9, 15: 9, 16: 9, 17: 10, 18: 10,  19: 10, 20: 10, 21: 2, 22: 2, 23: 2, 24: 2, 25: 3, 26: 3, 27: 3, 28: 3, 29: 4, 30: 4, 31: 4, 32: 4, 33: 1, 34: 1, 35: 1, 36: 1};
        
        calculation();

        function calculation() {
            let num = getRandom(1, 36);

            if (objComp[num] === null) {
                calculation();
            } else {
                sumPlayer2 += objComp[num];
                console.log(`num = ${num}, objComp[num] = ${objComp[num]}, sumPlayer2 = ${sumPlayer2}`);

                showCard(cardPlayer2, num, scorePlayer2, sumPlayer2);
                b = sumPlayer2;
                objComp[num] = null;
                check();
            }
        }
        function check() {
            console.log(`a = ${a}, b = ${b}`);

            if(a < 17 && b < 17) {
                setTimeout(calculation, 700);
            } else if (a < b && b >= 17 && b <=21){
                showMessage('Computer Win');
            } else if (a === 17 && b === 17) {
                setTimeout(calculation, 700);
            } else if (a === 18 && b === 18) {
                showMessage('Draw');
            } else if (a === 19 && b === 19) {
                showMessage('Draw');
            } else if (a === 20 && b === 20) {
                showMessage('Draw');
            } else if (a ===21  && b === 21) {
                showMessage('Draw');
            }
            else if (a >= 17 && a <= 21 && a > b) {
                setTimeout(calculation, 700);
            }
            else if (a > 21 && b > 21 ) {
                showMessage('Draw');
            }
            else if (a <= 21 && b > 21) {
                showMessage('You Win');
            }
            else if (a > 21 && b < 17) {
                setTimeout(calculation, 700);
            }
            else if (a > 21 && b >= 17 && b <= 21) {
                showMessage('Computer Win');
            }
        }
    }

    function showMessage(text) {
        whoWinnerMessage.innerHTML = text;
        console.log( whoWinnerMessage.innerHTML);
        show();
        setTimeout(hide, 1000);

       function show () {
            winnerBlock.classList.remove('message_off');
            winnerBlock.classList.add('message_on');
       }

       function hide () {
            winnerBlock.classList.remove('message_on');
            winnerBlock.classList.add('message_off');
       }
    }

    function resetValues() {
        scorePlayer1.innerHTML = '0';
        scorePlayer2.innerHTML = '0';
        cardPlayer1.style.display = 'none';
        cardPlayer2.style.display = 'none';
        sumPlayer1 = 0;
        sumPlayer2 = 0;
    }
    resetValues();

    function pushReset() {
        finalScorePlayer1.innerHTML = '0';
        finalScorePlayer2.innerHTML = '0';
        finalSumPlayer1 = 0;
        finalSumPlayer2 = 0;
        startNewGame();
    }

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min +1) + min);
    }
    function showCard (player, num, scorePlayer, sumPlayer) {
        player.src = `./img/${num}.svg`;
        player.style.display = 'block';
        player.onload = function() {
            scorePlayer.innerHTML = sumPlayer;
        }
    }
