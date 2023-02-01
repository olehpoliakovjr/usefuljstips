// class - it is a template for the object creating
// class can include data and methods, which are supposed to process this data
// objects that are created using classes are called instances
// если метод указывать внутри конструктора, он добавляеться в объект, в если нет, то в прототип
// classes are not maintaining hoisting (initialization)
// classes always use `use strict`
// classes maintain getters, setters, close and open fields
class Rect {
    // constructor is a method that will be run immediately after the object is created
    constructor(width,height) {
        this._width = width;
        this._height = height;
    }
    getArea(){
        return this._height * this._width
    }
    getPerimeter(){
        return this._height * 2 + this._width * 2;
    }
}
// new instance always is created with "new" key word
let rect0 = new Rect(10,20)
console.log(rect0)
console.log(rect0.getArea())
console.log(rect0.getPerimeter())

//getter - синтаксис, связывающий свойство объекта с методом
class Rect1 {
    constructor(width,height) {
        this._width = width;
        this._height = height;
    }
    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }
    get area(){
        return this.height * this.width; // getters are used
    }
}

let r1 = new Rect1(20,5)
console.log(r1.width) // 34s
console.log(r1.height)  // 38s
console.log(r1.area) // 41s

//setter - синтаксис, связывающий свойство объекта с функцией
//setter вызывается во время присвоения значения свойству
// private fields can be used into the class only - #
class Rect2 {
    #back // the closed field must be created within class but not into constructor
    constructor(width,height,back) {
        this._width = width;
        this._height = height;
        this.#back = back;
    }
    get width(){
        return this._width;
    }
    set width(value){
        if (value < 0){
            alert(`The value cant be lowest than 0`)
        } else {
            this._width = value;
        }
    }
    get height(){
        return this._height;
    }
    set height(value){
        if (value < 0){
            alert(`The value cant be lowest than 0`)
        } else {
            this._height = value;
        }
    }
    get area(){
        return this.height * this.width; // getters are used
    }
    getBack(){
        return this.#back
    }
}

let r2 = new Rect2(50,30,"black")

r2.width = -10; //60s если тут ошибка, то вернется значения по умолчанию = new Rect2 (50,30)
r2.height = 50; //66s

console.log(r2.width)
console.log(r2.height)
console.log(r2.area)

console.log(r2.getBack())




