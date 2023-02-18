// рекурсия -  это когда функции вызывает сама себя для каких то действий

function pow (x,n) {
    if(n <= 0){
        return 0;
    } else if(n === 1){
        return x
    } else {
        return x * pow(x, n - 1)
    }
}

console.log(pow(2,1)) // 2
console.log(pow(2,2)) // 4
console.log(pow(2,3)) // 8
console.log(pow(2,4)) // 16


//---------------------------------------//

// object.values() -  возвращает массив значений перечисляемых элементов в том же порядке что и for..in

let students = {
    js: [
        {
            name: "John",
            progress: 60
        },
        {
            name: "Olga",
            progress: 100
        }
    ],
    html: {
        basic: [
        {
            name: "Alex",
            progress: 20
        },
        {
            name: "Pavel",
            progress: 45
        }
    ],
        pro: [
        {
            name: "Andrii",
            progress: 13
        }
    ]
    }
}

const result = getTotalProgressByRecursion(students)
console.log(result[0] / result[1])

function getTotalProgressByRecursion (data){
    if(Array.isArray(data)){

        let total = 0;

        for(let i = 0; i < data.length; i++){
            total += data[i].progress;
        }

        return [total, data.length];
    } else {
        let total = [0,0];

        for(let subData of Object.values(data)){
            const subDataArray = getTotalProgressByRecursion(subData);
            total[0] += subDataArray[0];
            total[1] += subDataArray[1];
        }

        return total;
    }
}

