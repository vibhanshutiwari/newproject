const objectlst = [{
    name:'himansh',
    last:'tiwari',
    town:'kaleniya',
}];

const objectlst2 =[{
    type:'name',
    personal:'matter',
    station:'mankaur',
    ...objectlst,
}];
//console.log(objectlst2);

const update = [{
  type:'jobs',
  personal:'document',
  office:'navi mumbai',
}];

const updated = [{
  ...objectlst2,
  ...update
}];

console.log(updated);