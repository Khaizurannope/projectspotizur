const{ getById, todoQuestion } = require('./todos');

const todoId = async () => {
    const id = await todoQuestion ("Masukkan Id todo : ");

    getById(id);
};

todoId();