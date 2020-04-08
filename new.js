const nobject = {
  name:'manish',
  relatiion:'bhai',
  salary: 2000
  
};

nobject.salary =  +3000;
console.log(nobject.salary);

const list  = {
    name:'shubham',
    pincode: 320031,
    valueOf () {
        return this.pincode;
    }
};
console.log(list * 2);
