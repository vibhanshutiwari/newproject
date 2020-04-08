
const nameobj = {
    name: 'shubham',
    room: 'key'
};

// object add key value and delete key value //
nameobj.room = 'key';
delete nameobj.room;
console.log(nameobj);

let newname = 'name';
console.log(nameobj[newname]);


// for.. in loop //
const object = {
  city: 'pune',
  age: 21,
  mob: 32343234
};

for(let prop in object) {
    console.log(prop);
    console.log(object[prop]);
}


const shu = {
    name:'aman',
    age: 15,
};

const merge = {
    ...shu,
};

console.log(merge);