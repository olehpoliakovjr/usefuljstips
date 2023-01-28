function palindrom (str) {
   let str2 = str.toLowerCase().split("").reverse().join("")
   if (str === str2){
       return true;
   } else {
       return false;
   }
}
console.log(palindrom("abbba"))

