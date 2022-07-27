const fs = require("fs");
const args = require("yargs");
const [operation, filename, payload] = args.argv._;

switch (operation) {
    case "read": fs.readFile(filename, { encoding: "utf-8" }, (err, res) => {
        console.log(err || res);
    })

    case "append": fs.appendFile(filename, payload, (err) => {
        console.log(err || "successful");
    })

    case "delete": fs.rm(filename, (err) => {
        console.log(err || "successful");
    })

    case "create": fs.appendFile(filename, "hi i am new file", (err) => {
        console.log(err || "successful");
    })

    case "rename": fs.rename(filename, payload, (err) => {
        console.log(err || "successful");
    })

    case "list .": fs.readdir(__dirname + "/", (err, items) => {
        items.forEach(x => {
            console.log(x);
        })
    })
}

