// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const myDate = new Date();
const Day = myDate.toLocaleString("default", { weekday: "long" });
const Time = myDate.toLocaleTimeString();

const Hours = myDate.getHours();
const Period = Hours > 12 ? "PM" : "AM";
const Min = myDate.getMinutes();
const Sec = myDate.getSeconds();



console.log("Today is: ", Day);

console.log("Current time is: " + Hours + " " + Period + " : " + Min + " : " + Sec);
