const person = {
    name: "Inzamam",
    age: 24,
    isAdult : true,
    favcar: ["carA", "carB", "carC", "carD"]
}

// const p1 = Object.create(person)
const p1 = {
    __proto__: person
}

// const p2 = Object.create(p1)
const p2 = {
    __proto__: person
}

