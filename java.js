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
console.log(objectlst2);
