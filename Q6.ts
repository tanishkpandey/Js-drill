// Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array.

const csvString : string = `Name,Age,City
John,25,New York
Jane,30,Los Angeles
Doe,22,Chicago`;

function convert(text: string){

let a = text.split("\n")

let b = a.map((item)=>(
    item.split(",")
))


console.log(b)
}

convert(csvString)