#csv-into-json

A Synchronous CSV to JSON convertor package. 

```js
const {csvPath} = require('csv-into-json')

let data = csvPath('./filename.csv')     // providing your file path

let jsonData = JSON.stringify(data)      // stringify returned data into JSON  
console.log(jsonData)
```

Or use it with **express** to send JSON response **(Content-Type : application/json)** as follows -

![Express-Code](https://lh3.googleusercontent.com/xQKZR9op6B5xVmqbQMp9-gbV8DBw4bOe4oET4XOrchLUkyEIM6D74BlCzkvGnRitEVtM1TQodKnF5X4_-xR73nwM4--E2l-5zcqvRlV-KaMkv8SZKv5v7gEa55kZuerFWSPO1qjew6eeXrLpDIv2Il2db8kLNTAF0Ifoff4NWjZe05z2t9GrDZirXv3-RpWUyi8IB3N0f-HcovBGz1KOu3_GDhTihxSlB2hX-1vpXo6KHnBb8V23Cnr51mqjom4YEty-JeUo8EMDvgFtRdIFrBLCo2Ym6xc0PidTD4EFV0wuMHKP9_0oZJ8uqyDp1VNw09WG30xx0UAoKSCA73M8EmkhVOoQvTSHLcKXFj5vhRQWn-6JeZIASbwhhlJw_i0N1L2HcIRdaDnksheKYdnxhbE-k1nutk8Lw7VBYEhrTwP_-PIalkwAD8AuM_8ZqlkdahEEc_Kip6j-euyzdSE-9f0R9XjYXp3phGyWXvRRjyi92FJ06he9bP8k2FXtcvp8tYUc06B2asFxFIz46tQdiavaqA0b1iZKfSWgHOzXg48CzLT5gaogvaCVVpPlKmWCHQ26vGHfb5rIH8gcC-jQGVipZdloOLJ0Ntc2BDKFSjiKnsR-Np5uDQIc9RTTU1-_vzcVx7n7iTcdZOgTSmrC4H27BtAe0z60nTP7RK3ktYSJHJcq2Jj9HIq3AseHtw=w1666-h937-no?authuser=0)

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
