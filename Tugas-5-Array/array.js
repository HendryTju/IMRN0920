// Soal 1
function range(startNum, finishNum) {
  var list = [];
  if (startNum <= finishNum) {
    while (startNum <= finishNum) {
      list.push(startNum);
      startNum++;
    }
  } else if (startNum >= finishNum) {
    while (startNum >= finishNum) {
      list.push(startNum);
      startNum--;
    }
  } else {
    list.push(-1);
  }
  return list;
}

console.log(range(1, 10)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)); // -1
console.log(range(11, 18)); // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)); // [54, 53, 52, 51, 50]
console.log(range()); // -1

// Soal 2
function rangeWithStep(startNum, finishNum, step) {
  var list = [];
  if (startNum <= finishNum) {
    while (startNum <= finishNum) {
      list.push(startNum);
      startNum = startNum + step;
    }
  } else if (startNum >= finishNum) {
    while (startNum >= finishNum) {
      list.push(startNum);
      startNum = startNum - step;
    }
  } else {
    list.push(-1);
  }
  return list;
}

console.log(rangeWithStep(1, 10, 2)); // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)); // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)); // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)); // [29, 25, 21, 17, 13, 9, 5]

// Soal 3
function sum(startNum, finishNum, step = 1) {
  var list = [];
  var total = 0;
  if (startNum <= finishNum) {
    while (startNum <= finishNum) {
      list.push(startNum);
      startNum = startNum + step;
    }
  } else if (startNum >= finishNum) {
    while (startNum >= finishNum) {
      list.push(startNum);
      startNum = startNum - step;
    }
  } else {
    list.push(-1);
  }
  total = list.reduce(function (a, b) {
    return a + b;
  }, 0);
  return total;
}

console.log(sum(1, 10, 2)); // [1, 3, 5, 7, 9]
console.log(sum(11, 23, 3)); // [11, 14, 17, 20, 23]
console.log(sum(5, 2, 1)); // [5, 4, 3, 2]
console.log(sum(29, 2, 4)); // [29, 25, 21, 17, 13, 9, 5]
console.log(sum(29, 2)); // [29, 25, 21, 17, 13, 9, 5]

// Soal 4
//contoh input
var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];

function dataHandling(data) {
  for (let row = 0; row < data.length; row++) {
    let dataRow = data[row];
    console.log("Nomor ID:  " + dataRow[0]);
    console.log("Nama Lengkap:  " + dataRow[1]);
    console.log("TTL:  " + dataRow[2], dataRow[3]);
    console.log("Hobi:  " + dataRow[4] + "\n");
  }
}

dataHandling(input);

// Soal 5

function balikKata(input) {
  let katabalik = "";
  for (let i = input.length - 1; i >= 0; i--) {
    katabalik += input.substring(i, i + 1);
  }
  return katabalik;
}

console.log(balikKata("Kasur Rusak")); // kasuR rusaK
console.log(balikKata("SanberCode")); // edoCrebnaS
console.log(balikKata("Haji Ijah")); // hajI ijaH
console.log(balikKata("racecar")); // racecar
console.log(balikKata("I am Sanbers")); // srebnaS ma I
