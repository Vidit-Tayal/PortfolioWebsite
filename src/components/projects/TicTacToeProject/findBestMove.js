import minimax from "./minimax";

function findBestMove(grid){
    var bestVal = -1000;
    var bestMove = -1;


    for(var i=0;i<9;i++){
        if(grid[i]==""){

            // make the move
            grid[i] = "X";

            // compute evaluation function for this move
            var moveVal = minimax(grid,0,false); //yha glti hai


            // backtrack
            grid[i] = "";

            if(moveVal>bestVal){
                bestMove = i;
                bestVal = moveVal;
            }
        }
    }
    return bestMove;
}

export default findBestMove;