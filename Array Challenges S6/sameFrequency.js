function sameFrequency(int1, int2){
  // good luck. Add any arguments you deem necessary.

  const str1 = int1.toString();
  const str2 = int2.toString();

  if (str1.length !== str2.length) {
      return false;
  }

  const counter1 = {};
  const counter2 = {};

  for (let i = 0; i < str1.length; i++) {
      if(counter1[str1[i]] === undefined) {
          counter1[str1[i]] = 1;
      } else {
          counter1[str1[i]]++;
      }
  }

  for (let i = 0; i < str1.length; i++) {
      if(counter2[str2[i]] === undefined) {
          counter2[str2[i]] = 1;
      } else {
          counter2[str2[i]]++;
      }
  }

  for(let digit in counter1) {
      if(counter1[digit] !== counter2[digit]) {
          return false;
      }
  }

  return true;
}