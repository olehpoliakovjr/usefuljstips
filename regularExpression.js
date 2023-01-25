
//Регулярные выражения это средства поиска и замены в строке

// 1. Объявление
//  const regExp = /love/gmi        1способ
//  const _regExp - new RegExp("This week I had lots of events", "gmi")
// 2. Флаги
// i - означает не чувствительность к регистру
    /love/i.test("I lovE you")
    console.log(/Love/i.test("I love you"))
// g - глобальный поиск
    console.log("I love love you".match(/love/g))
// m - мультистрочный поиск
    const str = "th1s seco4d and m0re";
console.log(str.match(/^\d/mg))
// 3. Методы
    console.log('i love you so much so much!'.match(/much/g)) // 1m

    console.log('i love you so much'.replace(/love/, "never love"))  // 2m

    console.log(/love/i.test('i LOVE you so much'))  // 3m
// 4. Буквенные классы
// \d - любая цифра
// \w - латинская буква, цифра, _
// \s - пробел
// \D - любой символ кроме \d
// \W - любой символ кроме \w
// \S - любой символ кроме \s