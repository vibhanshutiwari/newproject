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

const merge = {
   ...object,
   ...object2,
};
console.log(merge);