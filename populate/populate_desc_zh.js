const fs = require('fs')
const sqlite3 = require('sqlite3').verbose();
const zh_db = new sqlite3.Database('../db/zh_descriptions.db');


const yargs = require("yargs")
  .command("o", "Open a JSON file and analyze its contents")


let loc = yargs.argv.o
let file = fs.readFileSync(loc)
let data = JSON.parse(file)
for (keys in data) {
  populateDescriptions(data[keys], keys)
  //console.log(Number(keys), "|", data[keys])
}



function populateDescriptions(descText, descID) {
  let sql = "INSERT INTO Descriptions (Content, ID) VALUES(?, ?)"
  db.run(sql, [descText, descID], (err) => {
    if (err) throw err;
    console.log(descID, "|", descText)
  })
}





zh_db.close()
