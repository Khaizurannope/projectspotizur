const {deleteById, todoQuestion} = require('./system');

const deleteTodo = async () => {
    const id = await todoQuestion('Masukkan id Anda : ')

    deleteById(id);
}

deleteTodo();