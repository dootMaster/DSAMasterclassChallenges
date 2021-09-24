function areThereDuplicates(...args) {
  // good luck. (supply any arguments you deem necessary.)

  const counter = {};
  console.log(typeof args);
  for(let arg of args) {
      if (counter[arg] === undefined) {
          counter[arg] = 1;
      } else if(counter[arg]) {
          return true;
      }
  }
  return false;
}


let a = areThereDuplicates(1, 2, 3, 4);

console.log(a);