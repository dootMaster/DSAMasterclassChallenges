let testMatrix = [
  [8, 1, 6, 8, 9, 8, 1, 3, 7, 6],
  [6, 4, 0, 3, 9, 2, 3, 1, 3, 7],
  [2, 1, 6, 1, 0, 5, 3, 5, 6, 2],
  [0, 1, 5, 5, 0, 1, 1, 7, 8, 2],
  [0, 1, 2, 0, 0, 8, 4, 3, 1, 6],
  [7, 2, 2, 0, 7, 3, 4, 4, 8, 3],
  [7, 2, 2, 3, 7, 1, 8, 8, 6, 3],
  [3, 0, 4, 7, 3, 0, 5, 3, 4, 6],
  [4, 3, 7, 3, 6, 0, 6, 2, 0, 3],
  [0, 2, 0, 1, 4, 5, 7, 8, 2, 7],
]

function findHighestSum(matrix, sideLength) {
  let max = 0;
  let minLength = (sideLength*2) - 1;
  if(matrix.length < minLength || matrix[0].length < minLength) return 'it too big';

  for(let i = 0; i <= matrix.length - minLength; i++) {
    for(let j = sideLength - 1; j <= matrix[i].length - sideLength; j++) {
      let sum = helperSumFinder(matrix, sideLength, i, j);
      if(sum > max) max = sum;
    }
  }

  return max;
}

function helperSumFinder(matrix, sideLength, startRow, startColumn) {
  let height = (sideLength*2) - 1;
  let rowIndex = startRow;
  let sum = 0;
  let leftBound = startColumn, rightBound = startColumn;
  let widestRowTouched = false;

  while(rowIndex <= height + startRow) {
    for(let i = leftBound; i <= rightBound; i++) {
      sum += matrix[rowIndex][i];
    }

    rowIndex++;

    if(rightBound - leftBound === height - 1) widestRowTouched = true;

    if(!widestRowTouched) {
      leftBound--;
      rightBound++
    } else {
      leftBound++;
      rightBound--;
    }
  }

  return sum;
}

console.log(findHighestSum(testMatrix, 1));