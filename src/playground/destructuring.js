// const person = {
//     name: "Tomek",
//     age: 33,
//     location: {
//         city: "Krakow",
//         temp: 3
//     }
// }

// const { name: firstName = "anonymous", age } = person
// const { city, temp: temperature } = person.location
// console.log(`${firstName} is ${age}`)

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//     title: "Harry Potter",
//     author: "JK Rowling",
//     publisher: {
//         name: "Bloomsberry"
//     }
// }
// const { name: publisherName = "self-published" } = book.publisher
// console.log(publisherName) // valid or self-published

// array dest

// const address = ["Stanczyka 10/9", "Krakow", "malopolskie", "30-126"]

// const [, city, state = "default state"] = address
// console.log(`you are in ${city}, ${state}`)

const item = ["coffee (hot)", "$2.00", "$2.50", "2.75"]

const [menuItem, , priceM] = item

console.log(`A ${menuItem} costs ${priceM}`)