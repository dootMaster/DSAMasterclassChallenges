function isSubsequence(substring, string) {
  // good luck. Add any arguments you deem necessary.
  let sub = 0;
  let main = 0;

  while (main < string.length) {
      if(sub === substring.length - 1) {
          return true;
      }
      if(substring[sub] === string[main]) {
          sub++;
          main++;
      } else {
          main++;
      }
  }
  return false;
}