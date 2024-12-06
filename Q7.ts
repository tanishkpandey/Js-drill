// Write a JavaScript program to check if all the properties of the object are same or not.  

const obj1 = {
    name: "Pikachu",
    type: "Electric",
    abilities: ["Static", "Lightning Rod"],
    stats: {
        hp: 35,
        attack: 55,
        defense: 40,
        speed: 90
    }
};

const obj2 = {
    name: "Charmander",
    type: "Fire",
    abilities: ["Blaze", "Solar Power"],
    stats: {
        hp: 39,
        attack: 52,
        defense: 43,
        speed: 65
    }
};

const a = Object.keys(obj1)
const b = Object.keys(obj2)

let isTrue = false
for(let i of a){
    for (let j of b){
        if (i === j ){
            isTrue = true
        }
    }
}

isTrue ? console.log('Yes same keys') : console.log("Nope ")

console.log(typeof(a))