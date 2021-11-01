var replaceElements = function(arr) {
  if(arr.length === 1) return [-1];
  let max = 0;
  let maxIndex;
  for(let i = 0; i < arr.length; i++) {
      if(max === 0 || i === maxIndex) {
          max = 0;
          maxIndex = undefined;
          for(let j = i + 1; j < arr.length; j++) {
              if(arr[j] > max) {
                  max = arr[j];
                  maxIndex = j;
              }
          }
      }
      arr[i] = max;
  }
  arr[arr.length - 1] = -1;
  return arr;
};