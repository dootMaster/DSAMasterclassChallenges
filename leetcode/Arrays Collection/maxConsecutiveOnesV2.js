//version 2 challenges us to find the solution for if we are allowed to flip a single 0 to a 1.

var findMaxConsecutiveOnes = function(nums) {
  let flip = false, flipIndex = -1, i = 0, ones = 0, maxOnes = 0;
  while(i < nums.length) {
      if(nums[i] === 0) {
          if(!flip) {
              ones++;
              if(ones > maxOnes) maxOnes = ones;
              flip = true;
              flipIndex = i;
              i++;
          } else {
              flip = false;
              i = flipIndex + 1;
              ones = 0;
          }
      } else {
          ones++;
          if(ones > maxOnes) maxOnes = ones;
          i++;
      }
  }
  return maxOnes;
};