const object = {
    name:'himansh',
    last:'tiwari',
    town:'kaleniya',
};

const object2 = {
    type:'name',
    personal:'matter',
    station:'mankaur',
};

const update = {
  name:'shubham',
  last:'pandey',
  town:'delhi',
};

const resut = {
  ...object,
  ...update,
};
console.log(resut);