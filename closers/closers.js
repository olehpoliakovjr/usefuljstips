// замыкания
// closer it is a function inside other function
// 1. function will invoke other function
function createCalcFunction (n){
    return function (){
        console.log(42 * n)
    }
}

const calc = createCalcFunction(5)
calc()

function createString(s){
    return function (){
        console.log("new " + s)
    }
}
const string = createString("Word")
string()



