const merge = (a, b) => {
  let i = 0, j = 0, result = [];
  while(i < a.length && j < b.length) {
    if(a[i] < b[j]) {
      result.push(a[i])
      i++;
    } else {
      result.push(b[j]);
      j++;
    }
  }

  while(i < a.length) {
    result.push(a[i]);
    i++;
  }

  while(j < b.length) {
    result.push(b[j]);
    j++;
  }

  return result;
}

let a = [1, 3, 5, 7];
let b = [1, 2, 4, 6, 7];

// console.log(merge(a, b));

const mergeSort = (arr) => {
  if(arr.length === 1) return arr;
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

console.log(mergeSort([4,3,2,7,1,7,14,76,3241,652,1,0]));