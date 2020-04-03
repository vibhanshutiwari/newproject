const maxnumber = (x,y) => {
   if(x > y) {
    return;
}
   console.log(x);
   maxnumber(x + 1,2);
 };
 maxnumber(1,2);

var factorial = function fac(num) {
    if(num == 1){
     return 1;
    } 
    return num * fac(num-1);
 };
 var newvalue = factorial(5);
console.log(newvalue);