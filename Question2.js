// 2. Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy


const myDate = new Date()

// mm-dd-yyyy, mm/dd/yyyy  (en-US)

console.log(myDate.toLocaleDateString('en-US').replace(/\//g, '-'))
console.log(myDate.toLocaleDateString('en-US'))

// dd-mm-yyyy, dd/mm/yyyy (en-GB)

console.log(myDate.toLocaleDateString('en-GB').replace(/\//g, '-'))
console.log(myDate.toLocaleDateString('en-GB'))