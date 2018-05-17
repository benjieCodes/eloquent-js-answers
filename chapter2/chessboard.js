for (var i = 0; i < 9; i++) {
  var chessboard = "";
  for (var j = 0; j < 9; j++) {
    var total = i + j;
    if (total % 2 === 0) {
      chessboard += " ";
    } else {
      chessboard += "#";
    }
  }
  console.log(chessboard);
}
