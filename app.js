let board = 
                [
                    [" ", " ", " "],
                    [" ", " ", " "],
                    [" ", " ", " "],

                ];



let player = "X"; 

function MakeMove(row, col){
    if(board[row][col] === " "){
        board[row][col] = player;
    }

    displayboard();

    if (checkWin(player)){
        alert(`le joueur ${player} à gagner`);
        resetGame();

        return;
    }
    if (chekDraw()){
        alert("Match nul");
        resetGame();

        return;
    }


    if (player === "X"){
        player = "O";
    }
    else {
        player = "X";
    }
}

function checkWin(player){

    if (board[0][0] === player &&  board[1][1] === player && board[2][2] === player  || board[0][2] === player &&  board[1][1] === player && board[2][0] === player){
        return true;
    }

    for (let row = 0 ; row < 3; row++){
        if (board[row][0] === player && board[row][1] === player  && board[row][2] === player){
            return true;
        }
    }
    for (let col = 0 ; col < 3; col++){
        if (board[0][col] === player && board[1][col] === player  && board[2][col] === player){
            return true;
        }
    }
    return false;

}

function chekDraw(){
    for (let row = 0 ; row < 3 ; row++){
        for (let col = 0; col < 3; col ++){
            if (board[row][col] === player){
                return true;
            }
        }
    }
    return false;

}


function displayboard(){
    const boardContainaire = document.getElementById("board");

    boardContainaire.innerHTML = " "; 

    for (let row = 0 ; row < 3 ; row++){
        for (let col = 0; col < 3; col ++){
            const cellule = document.createElement('div');
            cellule.classList.add("cellule");

            cellule.textContent = board[row][col];

            cellule.addEventListener("click", function(){
                MakeMove(row, col);
            })

            boardContainaire.appendChild(cellule);
        }
    }

}


function resetGame(){

    board = 
                [
                    [" ", " ", " "],
                    [" ", " ", " "],
                    [" ", " ", " "],

                ];

    player = "O";
    displayboard();

}

displayboard();

