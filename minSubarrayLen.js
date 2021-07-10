const minSubArrayLen = (array, int) => {
  let minLength;
  let total = array[0];
  let left = 0;
  let right = 1;

  while(right <= array.length) {
      if(total >= int) {
          if(minLength === undefined || right - left < minLength) minLength = right - left;
          total -= array[left];
          left++;
      } else {
          total += array[right];
          right++;
      }
  }

  if(minLength === undefined) return 0;
  return minLength;
};