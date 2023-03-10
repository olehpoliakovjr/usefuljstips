// Objects can include properties and methods

// Object.keys() - возвращает массив ключей перечесляемых свойств 
// Object.values() - возвращает массив знайчений перечесляемых свойств 
// Object.entries() - возвращает массив вложеных массивов с key:value

let user1 = {
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
user1.status = true; // add new property into object
console.log(user1)
console.log(user1.greeting(user1.name))
console.log(user1["name"])
console.log(user1.address["city"])
delete user1.isMarried; // delete property or method

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

//------------------------------------------------------------------//

// Дескрипторы свойств
// изначальн все флаги стоят в позиции true, но если мы создадим объект через Object.defineProperty(),
// то флаги будут стоять в позиции false

// writable - можно изменить или нет
// enumerable - перечисляеться ли свойсвто в циклах или нет
// configurable - можно удалить и атрубиты изменить или нет

const user = {
    name: "Alex",
    surname: "Smith",
    dateOfBirth: "19/02/1987",
    showMyPublicData: () => {
        console.log(`${this.name}, ${this.surname}`)
    }
}
Object.defineProperty(user, "dateOfBirth", {writable: false})
console.log(Object.getOwnPropertyDescriptor(user, "surname"))
console.log(Object.getOwnPropertyDescriptor(user, "dateOfBirth"))

Object.defineProperty(user, "showMyPublicData", {enumerable: false})

for(let key in user){
    console.log(key) // showMyPublicData не убедт отображаться
}


// итерируэмые объекты 
// строка и массив - итерируеэмые, а объект нет
const userExample = {
    name: "Alex",
    surname: "Smith",
    dateOfBirth: "19/02/1987",
    showMyPublicData: () => {
        console.log(`${this.name}, ${this.surname}`)
    }
}

for(let key in userExample){    // for..in получает ключ
    console.log(userExample[key])
}

let array = ["b","a","c"]

for(let key of array){  // for..of поулчает сразу значение
    console.log(key)
}

//------------------------------------------------------------------//
// делаем объект итерируемым (что бы работал for..of)
const salaries = {
    john: 500,
    mark: 1000,
    maria: 3000,
    sayHello: () => {
        console.log(`Hello`)
    }
}
// каждие 500 долларов будет увечиваться
salaries[Symbol.iterator] = function () {
    return {                    // тут for..of будет работать с возвращаемым объектом
        current: this.john,
        last: this.maria,
        next(){
            if(this.current < this.last){
                this.current = this.current + 500;
                return {done: false, value: this.current}
            } else {
                return {done: true}
            }
        }
    }
}

for(let res of salaries){
    console.log(res)
}
//------------------------------------------------------------------//

//MAP - it is an object. 
const shops = [
    {rice: 500},
    {bread: 50},
    {oil: 200}
]
const budget = [1000,2000,1500]

const map = new Map([
    [{paper: 12000}, 3500]
])

shops.forEach((shop,i) => {
    map.set(shop, budget[i]); // тут i это каждый элемент массива budget
})

console.log(map)
console.log(map.get(shops[0]))
console.log(map.has(shops[2]))


const goods = [] // все товары нашего магазина
for(let shop of map.keys()) { // возвращаэт итерируэмый объект по ключам
    goods.push(Object.keys(shop)[0])
}
console.log(goods)

let totalValue = 0;
for(let value of map.values()){
    totalValue += value
}
console.log(totalValue)



for(let [shop,price] of map.entries()){
    console.log(shop,price)
}

//------------------------------------------------------------------//

// Set - особый вид колекция, где каждое значение может повторяться только один раз

const arr = ['Alex','Anna','Oleg','Alex']

const set = new Set(arr)

function unique(arr){               // возвращает обычный массив
    return Array.from(new Set (arr))
}

set.add('Ivan')
set.delete('Anna')
set.has('Oleg')
set.size;

set.forEach((value, valueAgain,set) => {
    console.log(value, valueAgain)
})

console.log(set)
console.log(set.keys())

