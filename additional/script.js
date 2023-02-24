
let box = document.querySelector(".box")

let elementWidth = 100;
let elementHeight = 100;

function changeProperties (elem,w,h) {
    elem.style.width = `${w ?? 200}px`
    elem.style.height = `${h ?? 200}px`
}
changeProperties(box, elementWidth,elementHeight)


// ?? (nulish) this operator works with undefined or null only
let username;
let userKey

console.log(username ?? userKey ?? 'User')

//------------------------------------------------------------------//

// Symbol

let id = Symbol("itIsId")

let obj = {
    'name': "someName",
    [id]: 1,
    getIn: () => {
        return this[id]
    }
}
for(let value in obj){
    console.log(value)
}
console.log(Object.getOwnPropertySymbols(obj))
console.log(obj[Object.getOwnPropertySymbols(obj)[0]])


//------------------------------------------------------------------//
//BigInt
//bigint нельзя использовать с Math
// нельзя смешивать bigint и обычные числа
const bigInt = 89819849284018241902840124821491802948124812n;
console.log(typeof bigInt)
console.log(5n / 2n) // = 2

// WeakMap() эта конструкция служит для отпимизации памяти


// Date

const now = new Date()
console.log(now.getSeconds())

// getFullYear()
// getMonth()
// getDate()
// getDay() // weekday
// getMinutes()
// getSeconds()
// getHours()
// getUTCHours()

// getTime() // кол-во милисекунд от 1970
// getTimezoneOffset()

const firstDate = new Date (0)
console.log(firstDate)

const someDate = new Date(2023,1,22,20)     // месяцы считаються с 0
console.log(someDate)

const setDate = new Date ()
setDate.setHours(18)
console.log(setDate)

// таймер обратного остчета

const deadline = "2023-05-10";

function getTimeReminding(end){     //  получаем разницу между датами

    const m = Date.parse(end) - Date.parse(new Date()); // тут мы получаем разницу в милисекундах
    let days = Math.floor(m / (1000 * 60 * 60 * 24));
    let hours = Math.floor((m / 1000 * 60 * 60) % 24); // % 24 - записываем только то что осталость о телого дня
    let minutes = Math.floor((m / 1000 / 60) % 60);
    let seconds = Math.floor((m / 1000) % 60)

        if(m <= 0 ){     // убираем отрицательные значения;
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        }
    return {
        "totalMilliseconds" : m,
        "days": days,
        "hours": hours,
        "minutes": minutes,
        "seconds": seconds
    }
}

function getZero(num){
    if(num >= 0 && num <= 10){
        return `0${num}`
    } else {
        return num;
    }
}

function setClock(selector, endtime) {
      const timer = document.querySelector(selector),
            days = document.querySelector(".days"),
            hours = document.querySelector(".hours"),
            minutes = document.querySelector(".minutes"),
            seconds = document.querySelector(".seconds");

            const timeInterval = setInterval(updateClock,1000)

            updateClock(); // запускаем 1раз что бы убрать мигание

            function updateClock(){
            const t = getTimeReminding(endtime)
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if(timer.totalMilliseconds <= 0){
                clearInterval(timeInterval)
            }
        }
}
setClock(".timer", deadline)


// создание объектов на старнице через класс


let transf = 40;

class ShopItem{
    constructor(src,description,price,parentSelector){
        this.src = src;
        this.description = description;
        this.price = price;
        this.transfer = 40;
        this.parent = document.querySelector(parentSelector);
        this.changeToUAH();
    }

    // конвертация из доллара в гривну
    changeToUAH() { 
        this.price = this.price * this.transfer;
    }

    render(){
        const item = document.createElement("div");
        item.innerHTML = 
            `
                <div class="item">
                    <img class="itemImage" src=${this.src}>
                    <div class="description">
                        ${this.description}
                    </div>
                    <p class="price">${this.price} UAH</p>
                </div>
            `
        this.parent.append(item);
    }

}
const item = new ShopItem(
    "assets/itemImg.png",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, nulla. Eveniet quos molestias voluptatibus molestiae fugit quibusdam",
    15,
    ".shop-block"
    )
item.render()
const item1 = new ShopItem(
    "assets/itemImg.png",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, nulla. Eveniet quos molestias voluptatibus molestiae fugit quibusdam",
    15,
    ".shop-block"
    )
item.render()
const item2 = new ShopItem(
    "assets/itemImg.png",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, nulla. Eveniet quos molestias voluptatibus molestiae fugit quibusdam",
    15,
    ".shop-block"
    )
item.render()
const item3 = new ShopItem(
    "assets/itemImg.png",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, nulla. Eveniet quos molestias voluptatibus molestiae fugit quibusdam",
    15,
    ".shop-block"
    )
item.render()


// new ShopItem().render() можно использовать когда мы используем объект на месте



