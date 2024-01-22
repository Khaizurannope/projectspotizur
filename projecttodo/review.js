const{ getById, todoQuestion } = require('./system');

const todoId = async () => {
    const id = await todoQuestion ("Masukkan Id Anda : ");

    getById(id);
};

todoId();