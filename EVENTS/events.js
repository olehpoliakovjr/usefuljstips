//EVENTS
//mouseEvents

// еще есть offsetX/Y (координаты относительно элемента, а не всей страницы) >>
//DOMContentLoaded - the browser was uploaded layout and was built the DOM, (document)
// but external resources, images for example,can be not uploaded yet

//load - HTML and external resources were uploaded (window)

//event - it is an interface, which represent an event that makes into DOM
let button = document.querySelector(".btn");
button.addEventListener("click",handler)
function handler (event){
    console.log(event)
}

//mouse
//mouseover - cursor is into the block
//mouseout - cursor is left the block
//mousemove - cursor is moved into bock
let block = document.querySelector(".block1");
block.addEventListener("mouseover",over);
block.addEventListener("mouseout",out)
block.addEventListener("mousemove",move);

function over () {
    block.style.backgroundColor = "green"
}
function out () {
    block.style.backgroundColor = "orange"
}
function move (e) {
    block.textContent = `X:${e.clientX}, Y:${e.clientY}`;
}

//e.which - which key is pressed

//keydown,keyup
block.addEventListener("keydown", function (event){
    block.textContent = `key: ${event.key}`
})

let outputDiv = document.querySelector(".output")
document.addEventListener("keydown",function (e){
     let massage = `keydown (code ${e.code}),key (code ${e.key})`
    outputDiv.innerHTML = massage;
     //code - код клавиши, key - символ клавиши
})
document.addEventListener("keyup",function (e){
    let massage = `keyup (code ${e.code}),key (code ${e.key})`
    outputDiv.innerHTML = massage;
})

//-------------------------------------------//

let moveBlock = document.querySelector(".moveBlock");
let distance = 10;
document.addEventListener("keydown", function (e){
    if (e.code == "ArrowLeft"){
        moveLeft(moveBlock,distance)
    } else if (e.code == "ArrowRight"){
        moveRight(moveBlock,distance)
    } else if (e.code == "ArrowUp"){
        moveUp(moveBlock,distance)
    } else if (e.code == "ArrowDown"){
        moveDown(moveBlock,distance)
    }
})

function moveLeft (block,distance){
    let left = getComputedStyle(block).left;
    console.log(parseInt(left))
    block.style.left = parseInt(left) - (distance * 2) + "px"
}
function moveRight (block,distance){
    let left = getComputedStyle(block).left;
    console.log(parseInt(left))
    block.style.left = parseInt(left) + (distance * 2) + "px"
}

function moveUp (block,distance){
    let top = getComputedStyle(block).top;
    console.log(parseInt(top))
    block.style.top = parseInt(top) - distance + "px"
}

function moveDown (block,distance){
    let top = getComputedStyle(block).top;
    console.log(parseInt(top))
    block.style.top = parseInt(top) + distance + "px"
}

//-------------------------------------------//

// Фазы события
// 1 capturing phase
// 2 at target phase
// 3 bubbling phase

// event.stopPropagation() - запретить событию продолжать двигаться по элементам
// event.preventDefault() - отмена события по умолчанию

