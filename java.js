
const list = [1,2,3,4,5,6,7,8,9,10];
const finds = x => x % 2 ==0;
const container = list.filter(finds);
console.log(container);