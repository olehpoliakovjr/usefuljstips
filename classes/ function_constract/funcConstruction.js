
//функция констурктор (стандарт es5)
// конутрукторы нужны для создания новых однотипных объектов
function User(name,id){
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = () => {
        console.log(`hello ${this.name}`)
    }
}

const oleh = new User('oleh',3921)
console.log(oleh)

oleh.hello()

const alex = new User('alex',8821)
console.log(alex)