function averagePair(arr, avg){
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
      let pair = (arr[left] + arr[right])/2;
      if (pair === avg) return true;
      else if (pair > avg) right--;
      else left++;
  }
  return false;
}