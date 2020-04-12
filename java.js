
// object value find with helps template literal ..

const stringobj = {
  name: 'mohan das',
  course: 'javascript',
  website: 'www.myhome.in',
  social: 'facebook',
};

const newobj = `${stringobj.name},${stringobj.course},${stringobj.website},${stringobj.social}`;
console.log(newobj);

// passed the parameter with helps object key..

const para = (name, ...num) => {
   console.log('name',name);
   console.log('second',num);
}
para('hello',`${stringobj.name},${stringobj.course},${stringobj.website},${stringobj.social}`);
  

// store string five line in one variable ...

const write =  `On sunday,Manu is parents  got him a red raincoat.
Ma, May i wear it now? Monu asked.
No,My dear,the rains are near,but just now sky is clear, said Ma.`;

console.log(write);

