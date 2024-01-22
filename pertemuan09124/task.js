// SOAL 1 

function angkaHari() {
    switch (hari) {
        case 1:
            return "Hari Senin";
            break;
            case 2:
            return "Hari Selasa";
            break;
            case 3:
            return "Hari Rabu";
            break;
            case 4:
            return "Hari Kamis";
            break;
            case 5:
            return "Hari Jumat";
            break;
            default:
                return "Hari Sabtu & Minggu libur";
                break;
    }
}

module.exports = { angkaHari }