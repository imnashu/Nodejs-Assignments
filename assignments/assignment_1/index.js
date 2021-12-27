function getNameFromCommandLine() {
    // Write you code here, name should be taken as args in process.argv
    const ans = process.argv;
    return ans[ans.length - 1];
}

function getNameFromEnv() {
    // Write your code here
    process.env.name = "Yash";
    return process.env.name;
}

function getNameFromReadLine() {
    // Write your code here
    const readLine = require("readline");
    const out1 = readLine.createInterface({
        input : process.stdin,
        output : process.stdout
    });
    out1.question("name",(name)=>{
        n = name
    })
    return name;
}

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}