// Convert an array of objects to a comma-separated values string that contains only the columns specified

// const data = [
//     { name: "Alice", age: 25, city: "New York" },
//     { name: "Bob", age: 30, city: "San Francisco" },
//     { name: "Charlie", age: 35, city: "Los Angeles", occupation: "Engineer" }
// ];

// const columns = ["name", "city"];
// const csvString = arrayToCSV(data, columns);

// console.log(csvString);

const data = [
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 30, city: "San Francisco" },
  { name: "Charlie", age: 35, city: "Los Angeles", occupation: "Engineer" },
];

const columns = ["name", "age", "occupation"];

function arrayToCSV(data, columns) {
  data = data;

  data.map((item) => {
    let line = " ";
    for (let i = 0; i < columns.length; i++) {
      line +=
         " " + (((item[columns[i]]) !== undefined) ? item[columns[i]] : " Not Specified");
    }
    console.log(line);
    line = " ";
  });
}

arrayToCSV(data, columns);
