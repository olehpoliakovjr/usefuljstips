
// variants of searching form on the page
let form = document.forms[0]
let form1 = document.forms.loginForm; // name attribute
// все содержимые элементы формы доступны через коллекцию elements на объекте формы
document.querySelector(".validateForm").addEventListener("click", function(){
    for(let i = 0; i < form.elements.length; i++){
        const element = form.elements[i]
        console.log(element.name + " == " + element.value)
    }
})
//
document.querySelector(".checkValues").addEventListener("click", function (){
    let form = document.forms[1]
    console.log(form.input1.value)
    let date = new Date(form.input1.value)
    let newDate = new Date()
    if (newDate.getMonth() < date.getMonth()){
        console.log(true)
    }
})

// date
let time = document.querySelector("#time");
setInterval(showDate,1000)
function showDate(){
    let date = new Date()

    time.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
}

// currencyForm
let currencyForm = document.forms[2]
document.querySelector("#checkButton").addEventListener("click", function (){
    console.log(`agree terms = ` + currencyForm.termsAccept.checked)
    console.log(`is chosen currency = ` + currencyForm.currency.value)
})

//validation
let btn = document.querySelector("#checkButton")
let check = currencyForm.termsAccept
check.addEventListener("click", function (){
    if (this.checked){
       btn.disabled = false
    } else{
        btn.disabled = true
    }
})

//form validation
const formValid = document.forms[3];
  // submit event is heppening when we make a click on a button
formValid.addEventListener("submit",function (event){
    alert(`submit event`)
    // if this field is empty don't send the form
    if (formValid.search.value.length == 0){
        event.preventDefault()
    }
})

//focus and bloor
const formValid2 = document.forms[4];
formValid2.searchh.addEventListener("focus",function (){
    console.log(`focus`)
    this.style.outline = "2px solid green"
})
formValid2.searchh.addEventListener("blur",function (){
    console.log(`blur`)
    this.style.outline = "none"
})
// form5 `this filed is required`
let formRequired = document.forms[5];
let search = formRequired.search;
let searchError = document.querySelector(".error");

function showError(){
    searchError.style.display = "block"
}
function hideError(){
    searchError.style.display = "none"
}
search.addEventListener("focus", function (){
    hideError()
})
search.addEventListener("blur", function (event){
    if (event.target.value.length == 0){
        showError()
    }
})
formRequired.addEventListener("submit", function (event){
    if (formRequired.search.value.length == 0){
        event.preventDefault()
    }
})
// form6 `full form`
let fullForm = document.forms[6];
let checkLink = document.querySelector(".checkLink");

fullForm.addEventListener("submit", function(){
    alert(`Form was sent`)
})

fullForm.passwordConfirm.addEventListener("input",function(){
    if(fullForm.passwordConfirm.value != fullForm.password.value){
        fullForm.passwordConfirm.setCustomValidity(`passwod and password dont match`)
        fullForm.password.setCustomValidity(`passwod and password dont match`)
    } else {
        fullForm.passwordConfirm.setCustomValidity(``)
        fullForm.password.setCustomValidity(``)
    }
})

checkLink.addEventListener("click", function(){
    alert(fullForm.checkValidity())
    // checkValidity() проверяет, есть ли у элемента ограничения и соответсвует ли
    // элемент этим ограничениям, false если есть ошибка валидации,true если все хорошо
    // :valid :invalid - псевдоклассы, 

})


