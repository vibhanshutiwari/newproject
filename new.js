
// constructor method //
const User = (name, lname) => {
    this.name = name;
    this.lname = lname;
}
User('Shubham');
console.log(this.name);


// Array delete and splice use //
const list = ['shu', 'ht', 'gth', 'tt'];

delete list[3];
console.log(list.length);

let store = list.slice(2);
console.log(store);

// string value add in object with helps of splice //
const newiteam = ['name', 'lman', 'nborn'];
  const newvalue = newiteam.splice(1, 0, 'how');
    
  console.log(newiteam);

  // another object add in array in object //
const oneobject = [{
    rollno: 21,
    class: 9,
}];
newobject = {
    anotherclass: 10,
    otherstudentno: 33,
};

oneobject.splice(0, 0, newobject);
   

// sorting in array //
const sorted = [22.44,11,55,1];
 
 const hey = (a,b) => {
     if(a > b) return 1;
     if(a < b) return -1;
 }
   sorted.sort(hey);
   console.log(sorted);

    let marks = sorted.reduce((acc,x) => {
       acc + x;
   },0);
   console.log(marks);