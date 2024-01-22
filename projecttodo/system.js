const generateRandomId = require('./generateRId');
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface ( {
    input : process.stdin,
    output : process.stdout
});

const directory = './db';
if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
}

const checkFile = './db/data.json';
if (!fs.existsSync (checkFile)) {
    fs.writeFileSync(checkFile, '[]', 'utf-8');
}

const todoQuestion = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(answer);
        })
    });
}

const todos = () => {
    const fileTodos = fs.readFileSync('./db/data.json');
    const data = JSON.parse (fileTodos);

    console.log(data);

    rl.close();
}

// menambahkan data baru

const storeTodo = (nickname, age, hobby, artist, musicName, musicGenre) => {
    const id = generateRandomId(8);
    const Todo = {id, nickname, age, hobby, artist, musicName, musicGenre }
    const file = fs.readFileSync(checkFile, 'utf-8');

    const dataTodos = JSON.parse(file);
    dataTodos.push(Todo);
    fs.writeFileSync(checkFile, JSON.stringify(dataTodos, null, 2), 'utf-8');
    console.log('ok, HAPPY LISTEN THE MUSIC!');
    console.log('Jika ada perubahan. Kamu bisa mengubahnya!')
    
    rl.close();
}

const getById = (id) => {
    const file = fs.readFileSync(checkFile, 'utf-8');
    const data = JSON.parse(file);
    const findTodoId = data.find (todo => todo.id === id);

    if (findTodoId) {
        console.log(findTodoId);
    } else {
        console.log(`Todo dengan id ${id} tidak ditemukan`)
    }

    rl.close();
}

const updateById = (id, updateTodo) => {
    const file = fs.readFileSync(checkFile, 'utf-8');
    const dataTodos = JSON.parse(file);
    const index = dataTodos.findIndex(todo => todo.id === id);

    if (index !== -1) {
        dataTodos[index] = {...dataTodos[index], ...updateTodo};
        fs.writeFileSync(checkFile, JSON.stringify(dataTodos, null, 2));
        console.log('Successfully Update Your Favourite Song dengan id : ' + id);
        } else {
            console.log(`Todo dengan id ini ${id} tidak ditemukan`);
        }

        rl.close();
    }

const deleteById = (id) => {
    const file = fs.readFileSync(checkFile, 'utf-8');
    const dataTodos = JSON.parse(file);
    const filterTodoId = dataTodos.filter(todo => todo.id !== id);

    if (filterTodoId.length < dataTodos.length) {
        fs.writeFileSync(checkFile, JSON.stringify(filterTodoId, null, 2));
        console.log(`Successfully delete Your Favourite Song dengan id: ${id}`);
    } else {
        console.log(`Todo dengan id ini ${id} tidak ditemukan`);
    }

    rl.close();
}

module.exports = {
    todoQuestion,
    todos,
    storeTodo,
    getById,
    updateById,
    deleteById,
};

// Membuat GenerateId [Part 1] - Apotek - Node Js
// Melihat seluruh Data Apotek [Part 2] - Apotek - Node Js
// Membuat data apotek [Part 3] - Apotek - Node Js
// Melihat data apotek berdasarkan id [Part 4] - Apotek - Node Js
// Mengubah data apotek berdasarkan id [Part 5] - Apotek - Node Js
// Menghapus data apotek berdasarkan id [Part 6] - Apotek - Node Js

// - sudah membuat project terlebih dahulu!