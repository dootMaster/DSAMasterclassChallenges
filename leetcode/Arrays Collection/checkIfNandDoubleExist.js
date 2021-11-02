var checkIfExist = function(arr) {
  let memo = {};
  for(let i = 0; i < arr.length; i++) {
      if(arr[i] !== 0) memo[arr[i]] = true;
      else if(arr[i] === 0) {
          if(!memo[arr[i]]) memo[arr[i]] = 1;
          else memo[arr[i]]++;
          if(memo[arr[i]] > 1) return true;
      }
      if(arr[i] !== 0) {
          if(memo[arr[i] * 2] || memo[arr[i] / 2]) {
              return true;
          }
      }
  }
  return false;
};