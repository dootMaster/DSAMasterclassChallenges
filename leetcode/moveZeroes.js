var moveZeroes = function(nums) {
  for(let i = nums.length - 1; i >= 0; i--) {
      if(nums[i] === 0) nums.push(nums.splice(i, 1)[0]);
  }
};