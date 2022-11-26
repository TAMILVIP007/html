const lt1 = [];
const lt2 = [];

function addS() {
    let name1 = document.getElementById("txt1").value
    let age1 = document.getElementById("txt2").value
    let city1 = document.getElementById("txt3").value
    console.log(name1)
    if (name1 == "") {
        return alert("No txt")
    } else if (lt1.includes(name1)) {
        return alert("Already in list")
    }
    lt1.push(name1)
    const karthicke = new student(name1, age1, city1)
    var g = document.createElement("li");
    var nd = document.createTextNode(karthicke.fulldetails());
    g.appendChild(nd);
    element = document.getElementById("lol");
    element.appendChild(g);
}

function Find() {
    let element = document.getElementById("sr").value;
    if (element == "") {
        return alert("no txt")
    } else if (lt2.includes(element)) {
        return alert("Already in screen")
    }
    lt2.push(element)
    let info = retrivedetails(element)
    console.log(info)
    let g = document.createElement("li");
    let nd = document.createTextNode(info);
    g.appendChild(nd);
    element = document.getElementById("lol1");
    element.appendChild(g)

}


class student {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
        let val = {"name":name, "age":age, "city":city}
        localStorage.setItem(this.name, JSON.stringify(val))
        let y = localStorage.getItem(this.name)
        console.log(y)
        
    }
fulldetails() {
    return `${this.name} is ${this.age} years old and lives in ${this.city} sucessfully registered`
}
}



function retrivedetails(name) {
        let k = localStorage.getItem(name)
        let y = JSON.parse(k)
        return `Name ${y.name} is ${y.age} and lives in ${y.city}`
}
