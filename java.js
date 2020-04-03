
const mainlist = [
    {
        price: 100,
        product: 'mobile',
        brand: 'nokia',
    },
    {
        price: 1000,
        product: 'laptop',
        brand: 'honor',   
    }
];

  const result = mainlist.map(function(value) {
  return value.price;
});

console.log(result);