function emptyslots(board){
    var count = 0;
    for(var i = 0;i<9;i++){
        if(board[i]==="") count++;
    }
    return count;
}
export default emptyslots;