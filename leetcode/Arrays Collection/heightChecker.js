function merge(a, b) {
  let results = [];
  let i = 0, j = 0;
  while(i < a.length && j < b.length) {
      if(b[j] > a[i]) {
          results.push(a[i]);
          i++;
      } else {
          results.push(b[j]);
          j++;
      }
  }
  while(i < a.length) {
      results.push(a[i]);
      i++;
  }
  while(j < b.length) {
      results.push(b[j]);
      j++;
  }
  return results;
}

function mergeSort(arr) {
  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

var heightChecker = function(heights) {
  let heightsCopy = [...heights]
  let sortedHeights = mergeSort(heightsCopy);
  let result = 0;
  for(let i = 0; i < heights.length; i++) {
      if(heights[i] !== sortedHeights[i]) result++;
  }
  return result;
};