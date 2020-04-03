
const list = [11,22,33,44,55,66,77,33,66,32,34,65];
const ans = (a,b) => {
  if(a>b) return -1;
  if(a<b) return 1;
}

const result = list.slice().sort(ans);
console.log(result);