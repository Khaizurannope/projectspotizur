const fs = require('fs');

const checkFile = 'db/data.json'; // Sesuaikan dengan path database Anda

const updateById = (id, updateTodo) => {
  const file = fs.readFileSync(checkFile, 'utf-8');
  const dataTodos = JSON.parse(file);
  const index = dataTodos.findIndex(todo => todo.id === id);

  if (index !== -1) {
    // Mengecek dan menggabungkan data yang ada dengan pembaruan
    dataTodos[index] = {
      ...dataTodos[index],
      nickname: updateTodo.nickname !== '' ? updateTodo.nickname : dataTodos[index].nickname,
      age: updateTodo.age !== '' ? updateTodo.age : dataTodos[index].age,
      hobby: updateTodo.hobby !== '' ? updateTodo.hobby : dataTodos[index].hobby,
      artist: updateTodo.artist !== '' ? updateTodo.artist : dataTodos[index].artist,
      musicName: updateTodo.musicName !== '' ? updateTodo.musicName : dataTodos[index].musicName,
      musicGenre: updateTodo.musicGenre !== '' ? updateTodo.musicGenre : dataTodos[index].musicGenre
    };

    fs.writeFileSync(checkFile, JSON.stringify(dataTodos, null, 2));
    console.log('Successfully Update Your Favourite Song dengan id : ' + id);
  } else {
    console.log(`Todo dengan id ${id} tidak ditemukan`);
  }
};

const todoQuestion = (question) => {
  return new Promise((resolve) => {
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
};

const update = async () => {
  try {
    console.log("Perbarui Data Jika Yang Anda Masukkan Salah")
    const id = await todoQuestion('Masukkan id Anda : ');
    const nickname = await todoQuestion('Update Nickname Anda : ');
    const age = await todoQuestion('Update Umur Anda : ');
    const hobby = await todoQuestion('Update Jenis Hobi Yang Anda Sukai : ');
    const artist = await todoQuestion('Update Nama Artis/Grup Band Favourite Anda : ');
    const musicName = await todoQuestion('Update Nama/Judul Musik Favourite Anda : ');
    const musicGenre = await todoQuestion('Ubah Genre Musik : ');

    updateById(id, { nickname, age, hobby, artist, musicName, musicGenre });
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
  }
};

update();
