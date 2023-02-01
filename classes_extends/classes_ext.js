//classes inheriting
//наследование - это концепция ооп согласно которой один класс может наследовать данные -
//и функциональность из другого класса

//Наследование способствует повторному использованию существующего кода

//Наследование сделано для того, что бы не дублировать значения, которые будут общими для всех классов
//--------------------------------------------//
class Animal{
    sleep() {
        console.log(`Animal is sleeping now`)
    }
    eat(){
        console.log(`Animal is eating now`)
    }
}

class Dog extends Animal{
    eat(){
        console.log(`The dog is eating meet`)
    }
}
class Cow extends Animal{
    eat(){
        console.log(`The cow is eating grass`)
    }
}

let anim1 = new Dog()
let anim2 = new Cow()

anim1.eat()
anim1.sleep()
console.log(anim1)
console.log(anim2)

// базовый класс - этот тот от которого наследуемся, производный - тот который наследуеться

class BaseClass {
    method1(){
        console.log(`method from base class`)
    }
}
class DerivedClass extends BaseClass {
    constructor(value) {
        super();            // всегда нужно указывать метод super в производном классе
                            // если у базового класса есть свой конструктор с аргументами, мы должны передать их в super()
        this.classProperty = value
    }
    method2(){
        console.log(`method from inherited class ` + this.classProperty)
    }
}
let obj1 = new BaseClass()
let obj2 = new DerivedClass(10)

obj1.method1()
obj2.method2()
//--------------------------------------------//

class someBaseClass{
    exemp(){
        console.log(`BASE CLASS`)
    }
}
class someDerivedClass extends someBaseClass{
    exemp(){
        super.exemp();  // расширение класса, тобешь будет и свой метод и метод с базвого класса
                        // можно использовать и свой функционал и дополнительный
        console.log(`DERIVED CLASS`)
    }
}

let objs1 = new someBaseClass()
let objs2 = new someDerivedClass()

console.log(objs1.exemp())
console.log(objs2.exemp())
console.log(`--------------------------`)
// static - ключевое слово для определения статических полей и методов
// статический член класса существует в одном экземпляре для всего приложения
// статическое свойство или метод создаются в конструкторе класса
class MyClass {
    property1;
    static property2        // static property
}
let m1 = new MyClass()
let m2 = new MyClass()

m1.property1 = 10;
m2.property1 = 30;

MyClass.property2 = 50;

console.log(m1.property1)
console.log(m2.property1)
console.log(m2.property2) // undefined

console.log(MyClass.property2)
console.log(`--------------------------`)

class MyMethod{
    property1;
    constructor(value) {
        this.property1 = value;
    }
    method1(){
        console.log(`not static method ` + this.property1)
    }
    static method2(){
        console.log(`static method ` + this.property1)
    }
}
let m3 = new MyMethod(20);
let m4 = new MyMethod(30);

m3.method1()
m4.method1()

MyMethod.method2()
