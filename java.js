

for(let num = 0; num <= 10; num ++) {
    if(num % 2 == 1) {
        console.log(`odd ${num}`);
    }
}


const isPrime = nums => {
  if(nums == 2) {
      return true;
  }
   else if(nums > 1) {
      for(let i = 2; i < nums; i ++) {

          if(nums % i !== 0) {
              return true;
          } 
          else if(nums == i * i) {
              return false;
          } 
          else {
           return false;
          }
      }
  }   
    else {
        return false;
    }
}

console.log(isPrime(51));