import emptyslots from "./emptyslots";
import evaluate from "./evaluate";
import isMovesLeft from "./isMovesLeft";

function minimax(board,depth,isMax){

    var score = evaluate(board);
    // console.log("score: "+score); //maybe glti ho skti hai
    var e = emptyslots(board);



    if(score==10) return score + e;

    if(score==-10) return score - e;

    if(!isMovesLeft(board)) return 0;

    // if maximizer's move
    if(isMax){
        var best = -1000;

        //traverse all cells
        for(var i=0;i<9;i++){

            // check if empty
            if(board[i]===""){

                // make the move
                board[i] = "X";


                best = Math.max(best,minimax(board,depth+1,!isMax));

                // undo the move
                board[i] = "";
            }
        }
        return best;
    }

    // if minimizer's move
    else{
        var best = 1000;
        for(var i=0;i<9;i++){

            if(board[i]===""){
                board[i] = "O";


                best = Math.min(best,minimax(board,depth+1,!isMax));

                board[i] = "";
            }
        }
        return best;
    }
}

export default minimax;