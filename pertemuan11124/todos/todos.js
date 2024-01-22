const { dir } = require('console');
const generateRandomId = require('./generateRandomId');
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface ( {
    input : process.stdin,
    output : process.stdout
});

const directory = './database';
if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
}

const checkFile = './database/todos.json';
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
    const fileTodos = fs.readFileSync('./database/todos.json');
    const data = JSON.parse (fileTodos);

    console.log(data);

    rl.close();
}

// menambahkan data baru

const storeTodo = (title, description, status) => {
    const id = generateRandomId(8);
    const Todo = {id, title, description, status }
    const file = fs.readFileSync(checkFile, 'utf-8');

    const dataTodos = JSON.parse(file);
    dataTodos.push(Todo);
    fs.writeFileSync(checkFile, JSON.stringify(dataTodos), 'utf-8');
    console.log('THANKS FOR WATCHING!!! #TODOS');

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
        fs.writeFileSync(checkFile, JSON.stringify(dataTodos));
        console.log('Successfully update todo: ' + id);
        } else {
            console.log(`Todo dengan id ini ${id} tidak ditemukan`);
        }

        rl.close();
    }

const deleteById = (id) => {
    const file = fs.readFileSync(checkFile, 'utf-8');
    const dataTodos = JSON.parse(file);
    const filterTodoId = dataTodos.filter(todo => todo.id === id);

    if (filterTodoId.length < dataTodos.length) {
        fs.writeFileSync(checkFile, JSON.stringify(filterTodoId));
        console.log(`Successfully delete todo : ${id}`);
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
    deleteById
};