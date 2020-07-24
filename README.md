# csv-into-json

> A synchronous CSV to JSON convertor package

![Express-Code](https://i.ibb.co/MgDHZ90/Screenshot-670.png)

## Instructions

### Installation

```shell
npm install csv-into-json
```

### Usage

- Import the package.

  ```js
  const {csvPath} = require('csv-into-json')
  ```

- Provide your file path.

  ```js
  let data = csvPath('./filename.csv')
  ```

  > Replace `./filename.csv` with the location and filename of your desired csv file.

- Stringify returned data into JSON.

  ```js
  let jsonData = JSON.stringify(data)
  console.log(jsonData)
  ```

### Examples

- Input (CSV) :

  ```csv
  Name,Age,Address in
  Andy,21,Down town
  Barbara,25,"Old street, 36"
  Carl,24,Kings cross
  ```

- Output (JSON) :

  ```json
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
