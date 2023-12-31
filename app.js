let board = 
                [
                    [" ", " ", " "],
                    [" ", " ", " "],
                    [" ", " ", " "],

                ]

for (let i in board){
    for (j in board){
        console.log(board[i],board[j]);
    }
}

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

function checkWin(){

}

function chekDraw(){
    
}

function resetGame(){

}

