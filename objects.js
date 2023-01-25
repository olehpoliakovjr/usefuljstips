// Objects can include properties and methods

let user = {
    name : "Oleg",
    age : 20,
    isMarried: false,
    greeting: function (x){ // method
        return `Hello, ${x}`
    },
    address: {
        city: "London",
        wuewodstwo: "Slensk"
    }
}
user.status = true; // add new property into object
console.log(user)
console.log(user.greeting(user.name))
console.log(user["name"])
console.log(user.address["city"])
delete user.isMarried; // delete property or method

let order = [
    {product : "Apple", price: 10},
    {product : "Orange", price: 15},
    {product : "Strawberry", price: 50},
]
// cycle array of objects
for (let i = 0; i < order.length; i++){
    let prod = order[i]["price"] // получение одного из єлементов массива
    console.log(prod)
}
