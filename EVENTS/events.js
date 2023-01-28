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