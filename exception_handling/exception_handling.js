// исключения - неожиданные события преривающие нормальную работу кода и возникающие
// во время выполнения сценариев(g.i ошибки которые останавливают рабоу кода)
// обработка исключений осуществляеться с помощью try, catch, finally 
// отливливает ТОЛЬКО ТЕ ОШИБКИ, который всплывают во время выполнения кода
// possible constrictions 
try {

} catch (error) {

}
//
try{

} finally {

}
//
try {

} catch (error) {

} finally {

}
// try - блок кода в котором может возникнуть ошибка
// catch - блок кода в котороый перейдет выполнение в случае ошибки в блоке try
// finally - блок кода, который гарантровано выполняется 
// если блок try отработал, то блок catch не срабатывает 

//--------------------------------------------------//

let jsonWithError = '{"name" : "Ivan", "age" = 20}'
let jsonWithoutError = '{"name": "Ivan", "age": 20}'

try{
    console.log(`try block`)
    let obj = JSON.parse(jsonWithError)
    // let obj = JSON.parse(jsonWithoutError)
    console.log(`end of try block`)
} catch (error) {
    // error.stack can show the error steps
    console.log(`catch block`)
    console.log(error.name)
    console.log(error.message)
}
console.log(`end of this construction`)

//--------------------------------------------------//

try {
    let obj = JSON.parse(jsonWithError)
} catch {
    console.log(`error during json operation`)
}

//--------------------------------------------------//
 
let jsonString = '{"name": "Oleh", "age": 20}'

function parce(str){
    console.time(`parsing`)
    try {
        let obj = JSON.parse(str)
        return obj;
    } catch (error) {
        console.log(error.name)
        console.log(error.message)
    } finally {
        console.timeEnd(`parsing`)
    }
}

parce(jsonString);

//--------------------------------------------------//

try {
    let err = new Error (`some error`)
    throw err;  // the throw operator generates a new error
} catch (error) {
    console.log(error.name)
    console.log(error.message)
}

