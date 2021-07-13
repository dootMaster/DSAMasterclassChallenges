function findLongestSubstring(str) {
  let duplicateHash = {};
  let counter = 0;
  let maxLength = 0;

  for(let i = 0; i < str.length; i++) {
    if(duplicateHash[str[i]] === undefined) {
        duplicateHash[str[i]] = i;
        counter++;
        if(counter > maxLength) maxLength = counter;
    }
    else {
        i = duplicateHash[str[i]];
        duplicateHash = {};
        counter = 0;
    }
  }
  return maxLength;
}