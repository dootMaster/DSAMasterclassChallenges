var findDisappearedNumbers = function(nums) {
  let result = [], set = new Set();
  for(let i = 0; i < nums.length; i++) {
      set.add(nums[i]);
  }
  for(let i = 0; i < nums.length; i++) {
      if(!set.has(i+1)) result.push(i+1);
  }
  return result;
};