// Soal 1
var count = 1;
while (count != 0) {
  while (count <= 20) {
    if (count == 1) {
      console.log("Looping Pertama");
    }
    if (count % 2 == 0) {
      console.log(count + " - I Love Coding");
    }
    count++;
  }
  while (count > 0) {
    if (count == 21) {
      console.log("Looping Kedua");
    }
    if (count % 2 == 0) {
      console.log(count + " - I will become a mobile developer");
    }
    count--;
  }
}

// Soal 2
for (var i = 1; i < 21; i++) {
  if (i == 1 || i % 2 != 0) {
    if (i % 3 == 0) {
      console.log(i + " - I Love Coding");
    } else {
      console.log(i + " - Santai");
    }
  }
  if (i % 2 == 0) {
    console.log(i + " - Berkualitas");
  }
}


// Soal 3

var sharp = "#";
var star = "#";
var hasil = " ";
var num = 4;
var num2 = 8;
for (let i = 0; i < num; i++) {
  for (let j = 0; j < num2; j++) {
    if (i % 2 == 1) {
      if (j % 2 == 0) {
        hasil = hasil + sharp;
      } else {
        hasil = hasil + star;
      }
    } else {
      if (j % 2 == 0) {
        hasil = hasil + star;
      } else {
        hasil = hasil + sharp;
      }
    }
  }
  hasil = hasil + " \n ";
  console.log(hasil);
  hasil = " ";
}

// Soal 4

var condition = true;
var sharpfinal = "#######";
var last = "";
var sharp = "#";
while (condition) {
  last += sharp;
  console.log(last);
  if (sharpfinal == last) {
    console.log("");
    condition = false;
  }
}

// Soal 5
var sharp = "#";
var star = " ";
var hasil = " ";
var num = 8;
for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    if (i % 2 == 1) {
      if (j % 2 == 0) {
        hasil = hasil + sharp;
      } else {
        hasil = hasil + star;
      }
    } else {
      if (j % 2 == 0) {
        hasil = hasil + star;
      } else {
        hasil = hasil + sharp;
      }
    }
  }
  hasil = hasil + " \n ";
  console.log(hasil);
  hasil = " ";
}
