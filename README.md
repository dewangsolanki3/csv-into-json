#csv-into-json

A Synchronous CSV to JSON convertor package. 

```js
const {csvPath} = require('csv-into-json')

let data = csvPath('./filename.csv')     // providing your file path

let jsonData = JSON.stringify(data)      // stringify returned data into JSON  
console.log(jsonData)
```

Or use it with **express** to send JSON response **(Content-Type : application/json)** as follows -

![Express-Code](https://i.ibb.co/MgDHZ90/Screenshot-670.png)

##Installation

```diff
$ npm install csv-into-json
```

##Usage

- Parse your CSV-file data into JSON in two steps:  
  1. Provide relative path to your CSV file inside:  &ensp; **csvPath(" ./yourfilepath ")** and store it inside a variable.
  2. Convert the data stored inside that variable into JSON using **JSON.stringify()** function.  

e.g :

- CSV data :

```diff
Name,Age,Address in
Andy,21,Down town
Barbara,25,"Old street, 36"
Carl,24,Kings cross 
```

- Output JSON : 
```diff
[
    {
        "name": "Andy",
        "age": "21",
        "address-in": "Down town"
    },
    {
        "name": "Barbara",
        "age": "25",
        "address-in": "Old street, 36"
    },
    {
        "name": "Carl",
        "age": "24",
        "address-in": "Kings cross"
    }
]

```
