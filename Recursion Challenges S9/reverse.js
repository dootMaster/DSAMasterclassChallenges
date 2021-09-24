function reverse(str){
  if(str.length === 0) return '';
  return str.slice(str.length - 1) + reverse(str.slice(-str.length, -1));
}

console.log(reverse('asdf'));