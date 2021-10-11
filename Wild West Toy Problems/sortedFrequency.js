function sortedFrequency(arr, target){

  //catch out of range
  if(target > arr[arr.length - 1] || target < arr[0]) return -1;

  //find lower boundary
  let lowerBoundMin = 0, lowerBoundMax = arr.length - 1, lowerBoundIndex = 0;

  while(lowerBoundMin <= lowerBoundMax) {
      let mid = Math.floor(lowerBoundMin + lowerBoundMax) * 0.5;
      let current = arr[mid];
      if(current >= target) lowerBoundMax = mid - 1;
      else if(current < target && arr[mid + 1] === target) {
          lowerBoundIndex = mid + 1;
          break;
      }
      else if(current < target) lowerBoundMin = mid + 1;
  }

  //find upper boundary
  let upperBoundMin = 0, upperBoundMax = arr.length - 1, upperBoundIndex = arr.length - 1;

  while(upperBoundMin <= upperBoundMax) {
      let mid = Math.floor(upperBoundMin + upperBoundMax) * 0.5;
      let current = arr[mid];

      if(current > target && arr[mid - 1] === target) {
          upperBoundIndex = mid - 1;
          break;
      }
      else if(current > target) upperBoundMax = mid - 1;
      else if(current <= target) upperBoundMin = mid + 1;
  }

  //return frequency
  return 1 + upperBoundIndex - lowerBoundIndex;
}