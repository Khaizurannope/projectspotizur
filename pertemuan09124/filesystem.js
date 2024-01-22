const fs = require('fs');

console.log(fs);

fs.writeFileSync("perkenalan.txt", "Perkenalkan saya Ijur");

const perkenalan = fs.readFileSync("perkenalan.txt");

console.log(perkenalan.toString());
