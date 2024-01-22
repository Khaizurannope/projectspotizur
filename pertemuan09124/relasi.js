function namaRelasi (nama) {
    return `Hello nama saya ${nama}`;    
}

function namaDaerah(daerah) {
    return `Alamat saya berada di ${daerah}`;
}

function sekolah(namaSekolah, jurusanSekolah) {
    const data = {
        namaSekolah,
        jurusanSekolah
    }

    return data;
}

function abjadArr (abjad) {
    const abjadLama = ['a', 'b', 'c', 'd'];
    if (abjadLama !== undefined) {
        abjadLama.push(abjad);
    } 
    return abjadLama
}

module.exports = { namaRelasi, namaDaerah, sekolah, abjadArr };