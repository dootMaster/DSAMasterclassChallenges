function someRecursive(arr, cb) {
  if(arr.length === 0) return false;
  if(cb(arr[0])) return true;
  arr.shift();
  return someRecursive(arr, cb);
}