// locial variable //
const local = () => {
    let mess = 'hello everyone!';
    console.log(mess);
}
 local();

 // outer variable //
 let num = 59;

 const outer = () => {
  console.log(num);
 }
  outer();


  // Default value //
  const message = (from, text = 'i am shubham') => {
      console.log(from + ':'+ text);
  }
    message('delhi');


const display = name => console.log(`name ${name}`);
display('shubam');


// parameters //
const ans = (name,lastname) => {
    console.log(name + lastname);
}
ans('aman','pandey');


let age = 44;
const showage = () => {
    if(age >= 33) {
        console.log('its real age');
    } else  {
        console.log(' this not real age');
    }
}
showage();