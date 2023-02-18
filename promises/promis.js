// promise, asynchronous code
// asynchronous code this is code that runs in parallel, not sequentially
// организация асинхронного кода делаться с помощью callback & promis
// promise - представляет значение, которое еще не существует
// promise - это объект который хранит в себе функцию которая выполняеться асинхронно
// возможные состояния объекта промис - fulfield,rejected,pending
// в метод then можно записать функцию, с помощью then можно более удобно настроить цепочку выполнения
// в аргумент метода then передеться одна или две функции

//-------Without promis (sequentially) ---------//

document.querySelector(".imgBtn").addEventListener("click", function(){

    let firstImage = downloadImage("https://i.pinimg.com/originals/a9/3c/b4/a93cb4e0316ef9c4db83846550ff4deb.jpg");
    let secondImage = downloadImage("https://bipbap.ru/wp-content/uploads/2019/05/86ae0b2400c92d333751c8d9a9ae68e4.png");

    document.body.append(firstImage)
    document.body.append(secondImage)
})

function downloadImage (url) {
    let img = new Image()
    img.src = url;
    img.style.width = "100px";
    img.style.height = "100px";
    return img;
}

//-------Download photos with promis--------//

document.querySelector(".imgBtn2").addEventListener("click", function(){
    let firstImageUrl = "https://webmg.ru/wp-content/uploads/2020/12/malenkie-kartinki-dlya-srisovki.jpg"
    let secondImageUrl = "https://klike.net/uploads/posts/2018-06/1528641366_2.jpg"

    let firstPromis = promisDownloadImage(firstImageUrl)
    // and the argument of the .then function is passed what the resolve function returns to us!!!
    firstPromis.then(image => document.body.append(image), e => console.log(e.message))
    // here are two functions in .then method, first one will be invoked if resolve is worked
    // second onde will be ran if some wrong 

    let secondPromis = promisDownloadImage(secondImageUrl)
    secondPromis.then(image => document.body.append(image), e => console.log(e.message))
})

// the function is always executed after the function in the promis is executed


function promisDownloadImage(url){
    return new Promise (function(resolve,reject){
        let image = new Image (100)
        image.src = url;

        image.onload = function(){  // this method will be invoked if everything is okay!
            setTimeout(function(){
                resolve(image)  // this value will be returned 
            },2000)
            
        }

        image.onerror = function(e){ // this method will be invoked if we have a some wrong
            reject(new Error("image could not be uploaded" + this.src))
        }
    })
}

//-------One more example with promise--------//

function somePromis (){
    return new Promise (function(resolve,reject){
        let str = `Hell`
        setTimeout(function(){
            resolve(str + ` from promis `)
        },3000)
        if(str.length < 5){
            reject(new Error (`something is broken...`))
        }
    })
}

somePromis().then(function(text){console.log(text)},function(e){console.log(e.message)})

//-------One more example with promise--------//

function asyncOperation () {
    return new Promise (function(resolve,reject){
        let randomValue = Math.floor(Math.random() * 5001) // random value from 0 to 5000

        if(randomValue > 1000){
            setTimeout(function(){
                resolve(randomValue)
            },randomValue) // time as well as value
        } else {
            setTimeout(function(){
                reject(new Error(` ${randomValue} is less than 1000`))
            },randomValue)
        }
    })
}

document.querySelector(".asyncBtn").addEventListener("click", function(){

    asyncOperation()
    .then(randomValue => console.log(randomValue))
    .catch(error => console.log(error.message))

})