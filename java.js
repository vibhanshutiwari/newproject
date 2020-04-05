
const mainlist = [
    {
        price: 100,
        product: 'mobile',
        brand: 'nokia',
    },
    {
        price: 1000,
        main: 'laptop',
        brand: 'honor',   
    }
];
 var name = 200;
  const ans = mainlist.filter(value => {
      return value.price >= name;   
  });

console.log(ans);