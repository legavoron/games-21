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
    obj = {},
    sumPlayer1 = 0,
    sumPlayer2 = 0,
    finalSumPlayer1 = 0,
    finalSumPlayer2 = 0,
    whoWinnerMessage = document.querySelector('#who_winner'),
    winnerBlock = document.querySelector('#winner_block');


    btnNewGame.addEventListener('click', startNewGame);
    btnReset.addEventListener('click', pushReset);

    function startNewGame() {
        resetValues();
        gamePlayer();
    }


    function gamePlayer () {
        obj = { 1: 6, 2: 6, 3: 6, 4: 6, 5: 7, 6: 7, 7: 7, 8: 7, 9: 8, 10: 8, 11: 8, 12: 8, 13: 9, 14: 9, 15: 9, 16: 9, 17: 10, 18: 10,  19: 10, 20: 10, 21: 2, 22: 2, 23: 2, 24: 2, 25: 3, 26: 3, 27: 3, 28: 3, 29: 4, 30: 4, 31: 4, 32: 4, 33: 1, 34: 1, 35: 1, 36: 1};

        function calculation() {
            function getRandom(min, max) {
                return Math.floor(Math.random() * (max - min +1) + min);
            }
            let num = getRandom(1, 36);
            
            if( obj[num] === null) {
                calculation();
            } else {
                sumPlayer1 += obj[num];
                scorePlayer1.innerHTML = String(sumPlayer1);
                cardPlayer1.src = `./img/${num}.svg`;
                cardPlayer1.style.display = 'block';
                console.log(obj[num], sumPlayer1);
                obj[num] = null;
            }

            if (sumPlayer1 >= 21) {
                startBtnPlayer1.removeEventListener('click', calculation);
                setTimeout(startGameComp, 1000);
                btnEnd1.removeEventListener('click', player2);
            }
        }

        function player2() {
            startBtnPlayer1.removeEventListener('click', calculation);
            btnEnd1.removeEventListener('click', player2);
            startGameComp();
        }

        btnEnd1.addEventListener('click', player2);
        startBtnPlayer1.addEventListener('click', calculation);
        
    }    // ----------------------------------------------- End Player Game -------------------------------------------------------

    
    function startGameComp() {
        obj = { 1: 6, 2: 6, 3: 6, 4: 6, 5: 7, 6: 7, 7: 7, 8: 7, 9: 8, 10: 8, 11: 8, 12: 8, 13: 9, 14: 9, 15: 9, 16: 9, 17: 10, 18: 10,  19: 10, 20: 10, 21: 2, 22: 2, 23: 2, 24: 2, 25: 3, 26: 3, 27: 3, 28: 3, 29: 4, 30: 4, 31: 4, 32: 4, 33: 1, 34: 1, 35: 1, 36: 1};

        calculation();

        function calculation() {
            function getRandom(min, max) {
                return Math.floor(Math.random() * (max - min +1) + min);
            }
            let num = getRandom(1, 36);
            
            if( obj[num] === null) {
                calculation();
            } else {
                sumPlayer2 += obj[num];
                scorePlayer2.innerHTML = String(sumPlayer2);
                cardPlayer2.src = `./img/${num}.svg`;
                cardPlayer2.style.display = 'block';
                console.log(obj[num], sumPlayer2);
                obj[num] = null;
            }

            let a = sumPlayer1;
            let b = sumPlayer2;

            if (a <= 21 && b < 21 && a > b) {
                setTimeout(calculation, 700);
            } else if (a < 21 && b <= 21 && a < b) {
                comparison();
            } else if (a < 17 && b < 17 && a === b) {
                setTimeout(calculation, 700);
            } else if (a > 16 && b > 16 && a === b && (a === 17 || a === 18)) {
                setTimeout(calculation, 700);
            } else if (a === 19 && b === 19) {
                comparison();
            } else if (a === 20 && b === 20) {
                comparison();
            } else if (a === 21 && b === 21) {
                comparison();
            } else if (a > 21 && b < 17 ) {
                setTimeout(calculation, 700);
            } else if (a > 21 && b <= 21 && b >= 17 ) {
                comparison();
            } else if (a > 21 && b > 21) {
                comparison();
            } else if (a <= 21 && b > 21) {
                comparison();
            }
            return;
        } return;
    } // -------------------------------------------- End Comp Game -------------------------------------------------------


    function comparison() {
        let a = +scorePlayer1.innerHTML;
        let b = +scorePlayer2.innerHTML;

        if (a === b) {
            showMessage('Draw');
        } else if (a > 21 && b > 21) {
            showMessage('Draw');
        } else if (a <= 21 && b > 21) {
            showMessage('You Win');
            finalSumPlayer1++;
            finalScorePlayer1.innerHTML = finalSumPlayer1;
        } else if (a > 21 && b <=21) {
            showMessage('Computer Win');
            finalSumPlayer2++;
            finalScorePlayer2.innerHTML = finalSumPlayer2;
        } else if (a < 21 && b <= 21 && a < b) {
            showMessage('Computer Win');
            finalSumPlayer2++;
            finalScorePlayer2.innerHTML = finalSumPlayer2;
        } else if (a <= 21 && b < 21 && a > b) {
            showMessage('You Win');
            finalSumPlayer1++;
            finalScorePlayer1.innerHTML = finalSumPlayer1;
        }
    }


    function showMessage(text) {
        whoWinnerMessage.innerHTML = text;
        console.log( whoWinnerMessage.innerHTML);
        setTimeout(show, 500);
        setTimeout(hide, 2000);

       function show () {
            winnerBlock.classList.remove('message_off');
            winnerBlock.classList.add('message_on');
            console.log(winnerBlock);
       }

       function hide () {
            winnerBlock.classList.remove('message_on');
            winnerBlock.classList.add('message_off');
            console.log(winnerBlock);
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
