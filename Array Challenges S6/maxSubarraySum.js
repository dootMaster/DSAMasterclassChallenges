function maxSubarraySum(array, subLength){
  // add whatever parameters you deem necessary - good luck!
  if(array.length < subLength) {
      return null;
  }
   let sum = 0;
   for(let i = 0; i < subLength; i++) {
       sum += array[i];
   }
   let left = 0;
   let right = subLength;
   let max = sum;
   while(right < array.length) {
       let window = sum - array[left] + array[right];
       if(window > max) {
           max = window;
       }
       sum = window;
       left++;
       right++;
   }
   return max;
}