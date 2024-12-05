// Dates

let myDate = new Date()

// console.log(typeof myDate) //object
// console.log(myDate) // 2024-12-05T03:15:44.799Z
// console.log(myDate.toString()) // Thu Dec 05 2024 08:45:53 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString()) // 2024-12-05T03:16:15.099Z
// console.log(myDate.toJSON()) // 2024-12-05T03:16:15.099Z
// console.log(myDate.toDateString()) //Thu Dec 05 2024
// console.log(myDate.toLocaleDateString()) // 5/12/2024
// console.log(myDate.toLocaleString()) // 5/12/2024, 8:46:38 am
// console.log(myDate.toLocaleTimeString()) // 8:47:34 am
// console.log(myDate.toTimeString()) // 08:47:34 GMT+0530 (India Standard Time)
// console.log(myDate.toUTCString()) // Thu, 05 Dec 2024 03:17:34 GMT



// toString(), toLocaleString(), toTimeString(), toDateString(), toLocaleTimeString(), toLocaleDateString() are the main Deal


// console.log(myDate.getTime()) // get Time in milliseconds

console.log(myDate.toLocaleTimeString()) // get Time in h:m:s
console.log(myDate.getHours())
console.log(myDate.getMinutes())
console.log(myDate.getSeconds())  


console.log(myDate.toLocaleDateString()) // normal day to day date
console.log(myDate.getDate())
console.log(myDate.getMonth() + 1)
console.log(myDate.getFullYear())

console.log(myDate.toLocaleString('default', { weekday: "long" })) // get month
console.log(myDate.toLocaleString('default', { month: "long" })) // get month

