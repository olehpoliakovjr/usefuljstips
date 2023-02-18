//ARRAYS
let firstArray = [1,2,3,4,'name',6,Object,true,false] // array can include as much as you want elements

firstArray.length // by using length property we can know how many element are in this array

console.log(typeof firstArray) // array is object

Array.isArray(firstArray) // true, because the firstArray is array

firstArray[1] = "bops" // assigning an element to an array
let index = firstArray[1];
console.log(index);

let cities = ["London","Paris","Rome","Kyiv","Wroclaw"]
for (let index = 0; index < cities.length; index++){
    const element = cities[index]; // обращаемся к элементу массива по индексу на каждой итерации
    console.log(element)
}
// alternative way

for (const i of cities ){
    console.log(i)
}

// in this case I have to find a max number into array
const arrayOfNumbers = [1,7,54,31,8,121,90,45,1,11];

let max = Number.MIN_VALUE;

for (let i = 0; i < arrayOfNumbers.length; i++){
    const element = arrayOfNumbers[i];
    if (element > max){
        max = element;
    }
}
console.log(`max number in this array is ` + max)


//METHODS
// firstArray.map()   // создает новый массив, заполненный результатами вызова предоставленной функции для каждого элемента в вызывающем массиве.
// firstArray.pop()  // this method delete the LAST element in the array and return him
// firstArray.shift() // // this method delete the FIRST element in the array and return him
// firstArray.push("something...")  // this method add the element in the END of array
// firstArray.unshift("something.")// this method add the element in the START of array
// firstArray.splice(1, 1) // начиная с индекса 1 удалить 1 элемент
// firstArray.splice(1, 1, "Madrid","Berlin")
// // начиная с индекса 1 удалить 1 элемент и добавить "Madrid","Berlin" // ^
// firstArray.slice(start,end) // this method is returned a new array , from START to END without END
// firstArray.concat(array) // this method create a new array and copy data from other array
// firstArray.indexOf('value') // this method search the value into array, and will return the index of element,
//                             // if this method have not found the elem in array is returns -1
// firstArray.split(", ") // this method splits the array into pieces
// console.log(firstArray)
// Array.from() // метод создаёт новый экземпляр Array из массивоподобного или итерируемого объекта.
// // (Array.from('foo'));
// // Expected output: Array ["f", "o", "o"]
// firstArray.filter() // Метод filter() создаёт новый массив со всеми элементами,
//                     // прошедшими проверку, задаваемую в передаваемой функции.
// firstArray.push() // this method add an element into array
// firstArray.map() // method creates a new array populated with the results of calling a provided function on every element in the calling array.
// const map1 = array1.map(x => x * 2)

function countPositivesSumNegatives(input) {
    let positivNumbers = 0;
    let negativeAmount = 0;
        if(input == null || input.length === 0){
            return []
        } else {
            for(let number of input){
                if(number > 0){
                    positivNumbers += 1;
                } else {
                    negativeAmount += number
                }
            }
        }
        return [positivNumbers, negativeAmount]
}
countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])

function sumStr(a,b) {
  let result = ''
  result = Number(a) + Number(b)
    return result.toString()
}
console.log(sumStr("4","5"))









