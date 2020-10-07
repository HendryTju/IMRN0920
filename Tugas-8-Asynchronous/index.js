// di index.js
var readBooks = require("./callback.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 11000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "komik", timeSpent: 1000 },
];

// Tulis code untuk memanggil function readBooks
// Pertama books masih merupakan array, cari cara supaya iterate dari array tersebut: Menggunakan .forEach
// Source : https://sekolahkoding.com/forum/asynchronous-pada-javascript-1566365179

books.forEach((e) =>
  readBooks(10000, e, (input) => {
    console.log("Sisa waktu saya adalah " + input);
  })
);
