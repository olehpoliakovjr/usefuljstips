
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
