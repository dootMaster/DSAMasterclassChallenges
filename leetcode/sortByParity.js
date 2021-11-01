var sortArrayByParity = function(nums) {
  let moved = 0, i = 0;
  while(i < nums.length - moved) {
      if(nums[i] % 2 !== 0) {
          nums.push(nums.splice(i, 1)[0]);
          moved++;
      } else {
          i++;
      }
  }
  return nums;
};