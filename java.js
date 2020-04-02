
const value = ({name,age,city}) => {
    var _name = name;
    var _age = age;
    var _city = city;

    return {
        getName: () => _name,
        getAge: () => _age,
        getCity: () => _city,

        setName:newName => _name =newName,
    };
}
 
const ans = value ({
    name:'shubham',
    age:21,
    city:'delhi',
});
console.log(ans.getName());

ans.setName('aman');
console.log(ans.getName());