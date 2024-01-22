const fs = require('fs');
const { resolve } = require('path');
const readline = require('readline');

const rl = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
});


// cek folder ada/tidak, jika tidak maka buatkan foldernya

const directory = './db';
if(!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
}

// cek file ada/tidak, jika tidak maka buatkan filenya

const checkFile = './db/data.json';
if(!fs.existsSync(checkFile)) {
    fs.writeFileSync(checkFile, '[]', 'utf-8')
}

const questionExample = (questions) => {
    return new Promise((resolve, reject) => {
        rl.question(questions, (answer) => {
            resolve(answer);
        });
    });
}

const addData = async () => {
    const nama = await questionExample("Input Your Name : ");
    const umur = await questionExample("Input Your Age : ");
    const hobi = await questionExample("What's Your Hobby? ");

    const data = { nama, umur, hobi};
    const fileDb = fs.readFileSync('./db/data.json', 'utf8');
    const dataDiri = JSON.parse(fileDb);

    dataDiri.push(data);
    fs.writeFileSync('./db/data.json', JSON.stringify(dataDiri));
    console.log("THANK YOU!")
    rl.close();
}

addData();