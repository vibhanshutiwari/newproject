
const list = [11.2, 33.2, 32.7, 54.4];

const ans = list.reduce((acc, total) => {
  return acc + total

}, 0);

console.log(ans);


const lists = [11.2, 33.2, 32.7, 54.4];

const answer = list.reduce((total, amount) => {
  if (amount > 30) {
    total.push(amount);
  }
  return total;

}, []);

console.log(answer);

const fruitBasket =
  ['apple', 'banana', 'cherry', 'orange', 'chilli',
    'apple', 'banana', 'cherry', 'orange', 'chilli',
    'apple', 'banana'
  ];

const result = fruitBasket.reduce((tally, fruit) => {
  tally[fruit] = (tally[fruit] || 0) + 1;
  return tally;
}, {});

console.log(result);


const data = [[1, 2, 3, 4,], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14]];

const flat = data.reduce((total, amt) => {
  return total.concat(amt);

}, []);

console.log(flat);


const datas = [
  {
    a: 'shubham',
    b: 'manish',
    c: ['red', 'yellow']
  },
  {
    a: 'vikas',
    b: 'deepak',
    c: ['green', 'blue']
  },
  {
    a: 'vikas',
    b: 'deepak',
    c: ['red', 'blue', 'yellow', 'black']
  },
];

const colors = datas.reduce((total, current) => {
  current.c.forEach(color => {

    // if (total.indexOf(color) === -1) {}  // -- find unique color
    total.push(color);

  })
  return total;
}, []);

console.log(colors);
