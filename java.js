
const add = x => x+4;
const subtract = x => x-5;
const multiply = x => x*6;
const triple = x => x*12; 

const anwser = [
    add,
    subtract,
    multiply,
    triple,
];
 var num = 231;
 anwser.forEach(fun =>fun=(num));
  console.log(num);
 

