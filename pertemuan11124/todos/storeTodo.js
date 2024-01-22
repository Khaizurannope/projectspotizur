const {storeTodo, todoQuestion} = require('./todos');

const addTodo = async () => {
    const title = await todoQuestion ("Masukkan title todo : ");
    const description = await todoQuestion ("Masukkan deskripsi todo : ");
    const status = await todoQuestion ("Masukkan status anda : ");
    
    storeTodo(title, description, status);
}

addTodo ();