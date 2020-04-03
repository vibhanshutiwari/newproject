
const list = [{
  name:'shubham',
  age:21,
  jobs:'yet not',
  nick:'shu',
  personal:'everythings',
  become:' softwere developer',
  salary:20000,
}];

const resultsalary = list => list.salary > 18000;
const newsalary = list.some(resultsalary);
console.log(newsalary);