const chessBoard = new ChessBoard("chess-parent", chessCell);
chessBoard.render();
function chessCell(column, row) {
    console.log(column + row);
}