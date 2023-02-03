// String
// String.includes() //Метод includes() проверяет, содержит ли строка заданную подстроку, и возвращает, соответственно true или false.
// String.endsWith() // Метод endsWith() позволяет определить, заканчивается ли строка символами указанными в скобках, возвращая, соответственно, true или false.
// String.charAt() // Метод charAt() возвращает указанный символ из строки. (проверка на какой позиции буква)
// String.trim()  // Метод trim() удаляет пробельные символы с начала и конца строки. Пробельными символами в этом контексте считаются все собственно пробельные символы.
// String.match() // метод возвращает получившиеся совпадения при сопоставлении строки с регулярным выражением.
// String.replaceAll() //  заменяет все символы на другие в строке
// The last string element = element.length - 1

function palindrom (str) {
   let str2 = str.toLowerCase().split("").reverse().join("")
   if (str === str2){
       return true;
   } else {
       return false;
   }
}
console.log(palindrom("abbba"))

