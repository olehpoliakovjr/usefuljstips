//function context
// если this указано просто в функции, то this будет ссылаться на window
// если this указано в объекте, то this будет ссылаться на объект
// если включен usestrict, то this будет ссылать на undefined

// при вызове функции через методы call & apply, можно указать контекст вызова
// с помощью bind можно создать новую функцию с привязанным контекстом

//-----------------------------------------//
let obj1 = {
    prop1: 'Hello',
    prop2: true
}
let obj2 = {
    prop1: 134,
    prop2: "World"
}
function show (){
    console.log(this.prop1)
    console.log(this.prop2)
}

show()

show.apply(obj1)
show.call(obj2)

//-----------------------------------------//

let objDiv = {
    prop1: "Hello",
    prop2: "World"
}
function shows(elementSelector, color){
    let element = document.querySelector(elementSelector)
    element.style.color = color;
    element.innerHTML += this.prop1 + ' ';
    element.innerHTML += this.prop2;
}

shows.apply(objDiv,['#elem1', 'red'])   // параметры передаются массивом
shows.call(objDiv,'#elem2','green')     // параметры передаются по отдельности
let f = shows.bind(objDiv,"#elem3","blue") // через bind (параметры привязаны к создаваемой функции)
f()
//-----------------------------------------//
// setTimeout() - планирует однократный вызов функции, спустя указанный интервал времени
                //если мы передаем параметры в функцию, они указываются как 3й и все следующий аргументы
function showMassage(counter){
    console.log(++counter)
}
setTimeout(showMassage,2000,4)

// setInterval() - запускает повторный вызов функции через определенный промежуток времени
// clearInterval - останавливает работу setInterval
let i = 0
function showM(){
    console.log(i++)
}
setInterval(showM,2000, 1)
