/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var rotate = function(matrix) {
  const transpose = () => {
      for(let row = 0; row < matrix.length; row +=1){
          for(let col = row; col < matrix[row].length; col +=1){
              if(row!==col){
                  [matrix[row][col],matrix[col][row]] = [matrix[col][row], matrix[row][col]]
              }
          }
      }
  }
  const reverse = () => {
      for(let row = 0; row < matrix.length; row +=1){
          for(let col = 0; col < Math.floor((matrix[row].length)/2); col+=1){
              [matrix[row][col],matrix[row][matrix[row].length-1-col]] = [matrix[row][matrix[row].length-1-col],matrix[row][col]]
          }
      }
  }
  transpose()
  reverse()
  //transpose then reverse
};