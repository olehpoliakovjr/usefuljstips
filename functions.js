// function can be invoked whenever you want and as many times as you want

function repeatText (text,value){
    for (let i = 0; i < value; i++){
        console.log(text)
    }
}
repeatText("hello",12);

//recursion - calling a function from the same function

// function context (this)
// this указывает на объект, которому принадлежит выполняемый метод

let user1 = {
    name: "andrii",
    age: 22,
    greet: null
}
let user2 = {
    name: "pasha",
    age: 20,
    greet: null
}

function show(x,y){
    return `hello, ${this.name} x + y = ${(x+y)}`
}
// устанавливаем функцию как метод объекта
// user1.greet = show;
// user2.greet = show;
console.log(show.call(user1,5,5))

// создание новой функции через байнд, мы можем передавать ей аргументы

let newFunc = show.bind(user2);
console.log(newFunc(20,25))

// проверка в объекте, проверка свойство объекта
if ('name' in user1){
    console.log(`name is exist`)
} else {
    console.log(`name is not exist`)
}
// или с помощью hasOwnProperty, вернет true если свойство есть, false если его нету
console.log(user1.hasOwnProperty("name"))

// цикл для объекта
for (const key in user1){
    // в переменную key - будет записываться название свойства
    // значение свойства можно получить так user1[key]
    console.log(`Свойство ${key}, значение ${user1[key]}`)
}
// object it is the link type of data
// что бы скопировать не ссылку на объект, то можно использовать (...copingObject),НО
// ЭТОТ МЕТОД НЕ СКОПИНУЕТ ВЛОЖЕНЫЕ ОБЪЕКТЫ



