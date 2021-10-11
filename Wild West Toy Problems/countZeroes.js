function countZeroes(arr) {
  let min = 0, max = arr.length - 1;
  while(min <= max) {
      let mid = Math.floor((min + max) * 0.5);
      let current = arr[mid];

      if(arr[mid] === 1 && arr[mid + 1] === undefined) return 0;
      else if(arr[mid] === 1 && arr[mid + 1] === 1) min = mid + 1;
      else if(arr[mid] === 0 && arr[mid + 1] === 0) max = mid - 1;
      else if(arr[mid] === 1 && arr[mid + 1] === 0) return arr.length - mid - 1;
  }
  return arr.length;
}

let a = [1,1,1,1,0,0,0,0,0,0,0,0,0];
let b = [1,1,1,1,1,1,1,0,0,0,0,0,0];
let c = [1,1,1,1,1,1,1,1,1,1,1,1,1];
let d = [0,0,0,0,0,0,0,0,0,0,0,0,0];

console.log('Array Length: ', a.length)
console.log(countZeroes(a));
console.log(countZeroes(b));
console.log(countZeroes(c));
console.log(countZeroes(d));