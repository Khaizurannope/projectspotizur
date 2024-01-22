const { storeTodo, todoQuestion } = require('./system');

const addTodo = async () => {
  console.log('WELCOME TO SPOTIFY!!!');
  console.log('Diperlukan Data Untuk Kenyamanan User');
  console.log('--- ISI DATA DI BAWAH INI ---');

  let isAnswerValid = false;
  let nickname, age, hobby, artist, musicName, musicGenre;

  do {
    nickname = await todoQuestion("Masukkan Nickname : ");
    age = await todoQuestion("Masukkan Umur Anda : ");
    hobby = await todoQuestion("Jenis Hobi Yang Anda Sukai : ");
    artist = await todoQuestion("Masukkan Nama Artis/Grup Band Favourite Anda : ");
    musicName = await todoQuestion("Masukkan Nama/Judul Musik Favourite Anda : ");
    musicGenre = await todoQuestion("Masukkan Genre Musik : ");

    isAnswerValid = nickname.trim() !== '' && age.trim() !== '' && hobby.trim() !== '' && artist.trim() !== '' && musicName.trim() !== '' && musicGenre.trim() !== '';

    if (!isAnswerValid) {
      console.log('Setidaknya satu jawaban tidak boleh kosong. Silakan isi semua pertanyaan.');
    }

  } while (!isAnswerValid);

  storeTodo(nickname, age, hobby, artist, musicName, musicGenre);
}

addTodo();
