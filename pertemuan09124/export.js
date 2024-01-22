const { kelasBaru, getkelasAsync, getkelasBaruAsync } = require("./arsitektur");

console.log(kelasBaru(1));
console.log(kelasBaru(2));
console.log(kelasBaru(3));

console.log('--- --- --- ---');

getkelasAsync(1).then((kelasSija) => {
    console.log(kelasSija);
});

getkelasAsync(2).then((kelasRpl) => {
    console.log(kelasRpl);
});

getkelasBaruAsync (3).then((kelasMultimedia) => {
    console.log(kelasMultimedia);
})