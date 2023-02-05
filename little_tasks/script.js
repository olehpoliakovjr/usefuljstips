
let value = 0;
let timerId;

function tick (){
    value++;
    document.querySelector(".out").textContent = value;
}
function resetValue(){
    value = 0
}

document.querySelector(".start").addEventListener("click", function (){
    if (!timerId){
        timerId = setInterval(tick,1000)
    }
})

document.querySelector(".stop").addEventListener("click",function (){
    if (timerId){
        clearInterval(timerId)
        timerId = null
    }
})

document.querySelector(".reset").addEventListener("click",function (){
    resetValue()
})