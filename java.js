
const list = [
    'shubham',
    'aman',
    'manish',
    'puneet',
    'shubham',
    'puneet',
    'shubham',
];
const newmain = show => {
    return show.reduce((acc,x) => ({
        ...acc,
        [x] : acc[x] ? acc[x] +1 : 1,
    }),{});
};

console.log(newmain(list));