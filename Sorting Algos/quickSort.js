const pivot = (arr, start=0, end=arr.length+1) => {
  let pivot = arr[start];
  let swapIdx = start;

  const swap = (arr, x, y) => {
    [arr[x], arr[y]] = [arr[y], arr[x]];
  };

  for(let i = start + 1; i <= end; i++) {
    if(pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, start, swapIdx);
  return swapIdx;
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if(left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex+1, right);
  }
  return arr;
}

let a1 = quickSort([12, 43, 551, 132, 6, 763, 0]);
let a2 = quickSort([1,4,8,2,8,2,4,8,9,2421,341]);

console.log(a1);
console.log(a2);