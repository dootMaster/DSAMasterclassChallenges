var validMountainArray = function(arr) {
  if(arr.length < 3) return false;
  let l = 0, r = arr.length - 1;
  while(arr[l] < arr[l+1]) {
      l++;
  }
  while(arr[r] < arr[r-1]) {
      r--;
  }
  if(l === r && arr[l] > arr[arr.length - 1] && arr[l] > arr[0]) return true;
  else return false;
};
