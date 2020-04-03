
const list = [11,22,33,44,55,66,77,33,66,32,34,65];
const ans = list.reduce((acc,x) => {
return acc + x;
},0)
console.log(ans);