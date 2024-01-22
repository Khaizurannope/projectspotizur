// const names = "Dhiaraqi Ahmad Khaizuran";
// console.log(names);

// const age = 17;
// const year = 2007;

// const pengurangan = year - age;
// console.log(pengurangan);

// function dataDiri (nama) {
//     return `Halo nama saya adalah ${nama} `;
// }

// console.log(dataDiri("Dhiaraqi Ahmad KHaizuran"))

const { namaRelasi, namaDaerah, sekolah, abjadArr} = require("./relasi.js");

const { angkaHari } = require("./task.js");

console.log(namaRelasi("Dhiaraqi AK"));
console.log(namaDaerah("Kota Bogor"));

console.log('--- ---');
console.log(sekolah("SMK TI BAZMA", "Sistem Jaringan dan Aplikasi"));

console.log('--- ---');
console.log(abjadArr()); //tidak dipanggil e maka tetap sama 
console.log(abjadArr("e")); // dengan menggunakan push

console.log('--- --- --- --- --- --- --- --- ---');
console.log(angkaHari(2));
console.log(angkaHari(10));