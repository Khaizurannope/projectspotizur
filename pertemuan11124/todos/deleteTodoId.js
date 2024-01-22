const {deleteById, todoQuestion} = require('./todos');

const deleteTodo = async () => {
    const id = await todoQuestion('Masukkan id todo : ')

    deleteById();
}

deleteTodo();