const nobject = {
  name:'manish',
  relatiion:'bhai',
  salary: 2000
  
};

nobject.salary =  +3000;
console.log(nobject.salary);

// toString or valueOf //
const list  = {
    name:'shubham',
    pincode: 320031,
    valueOf () {
        return this.pincode;
    }
};
console.log(list * 2);


// Arrow function have no 'this'. //
const newlist = {
    country: 'india',

    sayhello () {
        let hi = () => 
            console.log(this.country);
            hi();
        }
};
 newlist.sayhello();
