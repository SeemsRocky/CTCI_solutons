/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const columnCheck = []
  const rowCheck = []
  for(let row = 0; row < matrix.length; row +=1){
    for(let col = 0; col < matrix[row].length; col+=1){
      if(matrix[row][col]===0){
        rowCheck[row] = true;
        columnCheck[column] = true;
      }
    }
  }
  for(let row = 0; row < matrix.length; row +=1){
    for(let col = 0; col < matrix[row].length; col+=1){
      if(rowCheck[row] || columnCheck[column]){
        matrix[row][column] = 0
      }
    }
  }
};