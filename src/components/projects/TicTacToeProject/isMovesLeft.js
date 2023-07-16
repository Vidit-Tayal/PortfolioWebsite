function isMovesLeft(board){
    for(var i=0;i<9;i++){
        if(board[i]=="") return true;
    }
    return false;
}

export default isMovesLeft;