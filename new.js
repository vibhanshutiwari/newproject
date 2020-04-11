
const value = [{
    name:'manish',
    street : 3,
},
  {
      name: 'makal',
      studentID: 093739,
  }];
      
 let nee = value.map(inst => {
      return inst.name;
  });
   //console.log(nee);

 var num = 'manish';

     value.forEach(fid => fid.name == num);
     console.log(num);
    