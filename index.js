var fs = require('fs'); 

module.exports.csvPath = (filepath) => {
if(filepath.match(".csv$")){
    let myData = fs.readFileSync(filepath,'utf8')

    if(myData == ""){
        throw new Error ("Oops... No data found inside your CSV file :(")
    }

    let splits = myData.trim().split("\n")

    let headings = splits[0].toLowerCase().replace("\r", "").match(/"[^"]*"|[^,]+/g)

    // ==== Key of Object ====

    let oldM = headings.map( n => n.trim().replace(/"/g , "") )
    let newM = oldM.map( n => n.replace(/\s/g , "-") )


    let results = []

    let information = splits.slice(1,)

    information.map( n => {

        // ==== Value of Object ====

        let X = n.trim().replace(/,\s+/g , ",").match(/"[^"]*"|[^,]+/g)

        let newX = X.map( n => n.replace(/,/g , ", ").replace(/"|\r/g , "") )

        let obj = {}
        for(let i=0 ; i < newM.length ; i++){
            obj[newM[i]] = newX[i]
        }
        results.push(obj)
    })

    return results

}

else throw new Error ("Expected .csv file as input. Hey Buddy, you need to put a valid CSV file :(")

}








// ==== Hey fellow Developer :) ====
// ==== <3 from Dewang Solanki ====