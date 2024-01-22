const getKelas = (kode) => {
    const kelas = kode === 1 ? "SIJA" : "RPL";
    return {kode, kelas}
}
console.log(getKelas(1));
console.log(getKelas(2));
console.log(getKelas(4));


// cara 2 dengan menambahkan kepanjangan dari kode kelas

const deskripsiKelas = (kode, deskripsi) => {
    return {kode, deskripsi};
}

const getKelasDeskripsi = (kodeId) => {
    const kelas = kodeId === 1 ? deskripsiKelas ("SIJA", "Sistem Informasi Jaringan dan Aplikasi", 11) : deskripsiKelas("RPL", "Rekayasa Perangkat Lunak", 12);
    return { kodeId, kelas }
}

console.log(getKelasDeskripsi(1));

//buat 5 parameter data object bentuk item game

const getBuild = (BuildPlayer, Movement, Item2, Item3, Item4, Item5, item6) =>  {
    return {BuildPlayer, Movement, Item2, Item3, Item4, Item5, item6};
}

const getBuildCash = (buildId) => {
    const build = buildId === 1 ? getBuild ( "ONIC SANZ", "Arcane Boots", "Enchanted Talisman", "Ice Queen Wand", "Lightning Truncheon", "Holy Cristal", "Genius Wand") : getBuild ("Rekomendasi Build", "Magic Shoes", "Clock Of Destiny", "Lightning Truncheon", "Ice Queen Wand", "Genius Wand", "Glowing Wand", "Blood Wings");
    return {buildId, build}
}

console.log(getBuildCash(1)); 
console.log(getBuildCash(2)); 

const classFunc = (kode, namaKelas) => {
    return {kode, namaKelas}
}

const kelasBaru = (id) => {
    if (id === 1) {
        return classFunc ("SIJA", "Sistem Informasi Jaringan dan Aplikasi");
    }else if (id === 2) {
        return classFunc ("RPL", "Rekayasa Perangkat Lunak");
    }else if (id === 3) {
        return classFunc ("MM", "Multimedia");
    }
}

console.log(kelasBaru(1));

//async

// const getClassAsync = async(kodeId) => {
//     const kelas = kodeId === 1 ? "SIJA" : "RPL";
//     return { kodeId, kelas } 
// }

// getClassAsync(1).then(console.log);
// console.log(getClassAsync(1));

const getkelasAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kelas = id === 1 ? "SIJA" : "RPL";
            resolve(id, kelas);
        }, 3000);
    })
}

const getkelasBaruAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if ( id === 1 ) {
                kelas = classFunc("SIJA", "Sistem Informasi Jaringan dan Aplikasi");
            } else if ( id === 2 ) {
                kelas = classFunc("RPL", "Rekayasa Perangkat Lunak");
            } else if ( id === 3 ) {
                kelas = classFunc("MM", "Multimedia");
            }
            resolve({ id });
        }, 2000);
    })
}




module.exports = {getkelasBaruAsync, getkelasAsync, getKelas, kelasBaru, getKelasDeskripsi,getBuildCash};