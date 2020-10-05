// Soal 1
function arrayToObject(arr) {
  let now = new Date();
  let thisYear = now.getFullYear();
  for (let i = 0; i <= arr.length; i++) {
    let persondata = arr[i];
    let personobj = {
      firstName: persondata[0],
      lastName: persondata[1],
      gender: persondata[2],
    };

    if (isNaN(persondata[3]) || persondata[3] > thisYear) {
      personobj.age = "Invalid Birth Year";
    } else {
      personobj.age = thisYear - persondata[3];
    }
    console.log(
      i + ".",
      personobj.firstName,
      personobj.lastName,
      ":",
      personobj
    );
  }
}

var people = [
  ["Bruce", "Banner", "male", 1975],
  ["Natasha", "Romanoff", "female"],
];

var people2 = [
  ["Tony", "Stark", "male", 1980],
  ["Pepper", "Pots", "female", 2023],
];
arrayToObject(people2);

// Soal 2
function shoppingTime(memberId, money) {
  if (typeof memberId === "undefined" || memberId.trim() === "") {
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  } else if (money < 50000) {
    return "Mohon maaf, uang tidak cukup";
  }

  let katalog = [
    {
      nama: "Sepatu Stacattu",
      harga: 1500000,
    },
    {
      nama: "Baju Zoro",
      harga: 500000,
    },
    {
      nama: "Baju H&N",
      harga: 250000,
    },
    {
      nama: "Sweater Uniklooh",
      harga: 175000,
    },
    {
      nama: "Casing Handphone",
      harga: 50000,
    },
  ];

  let keranjang = {
    memberId: memberId,
    money: money,
  };

  let listPurchased = [];
  for (let i = 0; i < katalog.length; i++) {
    let barang = katalog[i];

    if (money >= barang.harga) {
      money -= barang.harga;
      listPurchased.push(barang.nama);
    }
  }

  keranjang.listPurchased = listPurchased;
  keranjang.changeMoney = money;

  return keranjang;
}

// TEST CASES
console.log(shoppingTime("1820RzKrnWn08", 2475000));
console.log(shoppingTime("82Ku8Ma742", 170000));
console.log(shoppingTime("", 2475000));
console.log(shoppingTime("234JdhweRxa53", 15000));
console.log(shoppingTime());
console.log(shoppingTime("324193hDew2", 700000));

// Soal 3
function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];
  let datapenumpang = [];
  for (let i = 0; i < arrPenumpang.length; i++) {
    penumpang = arrPenumpang[i];
    let biayaperjalanan =
      (rute.indexOf(penumpang[2]) - rute.indexOf(penumpang[1])) * 2000;
    datapenumpang.push({
      penumpang: penumpang[0],
      naikDari: penumpang[1],
      tujuan: penumpang[2],
      bayar: biayaperjalanan,
    });
    return datapenumpang;
  }

  return datapenumpang;
  //your code here
}

//TEST CASE
console.log(
  naikAngkot([
    ["Dimitri", "B", "F"],
    ["Icha", "A", "B"],
  ])
);
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
