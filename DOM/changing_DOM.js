let firstDiv = document.querySelector(".mainDIV")
// node creating
// document.createElement();
// document.createTextNode();

// insert methods
// node.append("newNode");
// node.prepend("newNode");
// node.before("newNode");
// node.after("newNode");
// node.replaceWith("newNode");

let divElement = document.createElement("div"); // div
let divText = document.createTextNode("Hello world"); // text

// The difference between a primitive string and a node - a node is an object

divElement.append(divText) // add text into div
document.body.append(divElement) // add text into div

// textContent - текстовое содержимое

divElement.textContent = "Buy world"

// insertAdjacentHTML если нам нужно вставить и теги и содержимое тега
let div = document.querySelector(".secondDIV")
div.insertAdjacentHTML("afterend", "<span>Hello world again</span>")
// beforebegin
// afterbegin
// beforeend
// afterend

// node.remove() - удаление узла из DOM
let deleteDiv = document.querySelector(".thirdDIV");
deleteDiv.remove()

// node.cloneNode(true/false) - создает копию элемента
// true - deep copy, false - shallow copy

let clone = document.querySelector(".clone")
const elemClone = clone.cloneNode(true)
clone.append(elemClone)

// ATTRIBUTES (стандартные и не стандартные)
firstDiv.hasAttribute("myAttribute") // true / false ( есть, нету )
firstDiv.getAttribute("myAttribute")
firstDiv.setAttribute("myAttribute", "newCustom") // сменит значение атрибута
firstDiv.removeAttribute("myAttribute")

// STYLES
let x = 20
firstDiv.style.backgroundColor = "red";
firstDiv.style.border = "1px solid black";
firstDiv.style.position = "relative";
firstDiv.style.top = "500px";
firstDiv.style.padding = x + "px"; // matching with variable
// CLASSES
let classDiv = document.querySelector("#classList");
classDiv.classList.add("orange-div");
classDiv.classList.remove("orange-div");
classDiv.classList.toggle("orange-div") // if this class exist, it will be removed, if not it will be added
// getComputedStyle - it is used when we want to read object property
let computedStyles = getComputedStyle(classDiv);
console.log(`height: ${computedStyles.height}, width: ${computedStyles.width}`)




