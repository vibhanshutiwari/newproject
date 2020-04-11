
const instructor = {
    firstname: 'shubham',
    lastname: 'tiwari',
    village: 'gonda',
    course: 'javascript',
    social: {
        email: 'vibh@',
        facebook: 'shubham',
        tittok: 'shu@13'
    },
    interest: 'playing',

};
  const {firstname,lastname,village,course,social} = instructor;
  //console.log(firstname,lastname,village,course,social.facebook);

 
  const newdestructor = [
      {
        firstname: 'shubham',
        lastname: 'tiwari',
        village: 'gonda',
        course: 'javascript',
        social: {
            email: 'vibh@',
            facebook: 'shubham',
            tittok: 'shu@13'
        },
        interest: 'playing',
      },
      {
        firstname: 'manish',
        lastname: 'pandey',
        village: 'lucknow',
        course: '.net',
        social: {
            email: 'namhu@',
            facebook: 'aman',
            tittok: 'manu@13'
        },
        interest: 'teaching',
        subject: 'chemistry',
      }
  ];
  
  //way 2
 // var obj = newdestructor.map((inst, indx) => {
   //   console.log(indx);
    //return {fname : inst.firstname, lname: inst.lastname, facebook : inst.social.facebook};
 // });
  //console.log(obj);

 newdestructor.map(inst => {
    const {firstname: fname,lastname: lname,village: vill,social: scl} = inst;

    console.log(fname,lname,vill,scl.facebook);
 });