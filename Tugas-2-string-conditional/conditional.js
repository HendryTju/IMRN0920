// Soal 1 - if else

var name = "Jane";
var peran = "Penyihir";

if (name == "" && peran == "") {
  console.log("Nama Harus Diisi");
} else if (name == "John" && peran == null) {
  console.log("Halo John, Pilih peranmu untuk memulai game");
} else if (name == "Jane" && peran == "Penyihir") {
  console.log("Selamat datang di Dunia Werewolf, Jane");
  console.log(
    "Halo Penyihir Jane, kamu dapat melihat siapa yang menjadi werewolf"
  );
} else if (name == "Jenita" && peran == "Guard") {
  console.log("Selamat datang di Dunia Werewolf, Jenita");
  console.log(
    "Halo Guard Jenita, kamu akan membantu melindungi temanmu dari serangan werewolf."
  );
} else if (name == "Junaedi" && peran == "Werewolf") {
  console.log("Selamat datang di Dunia Werewolf, Junaedi");
  console.log("Halo Werewolf Junaedi, Kamu akan memakan mangsa setiap malam!");
}

// Soal 2 - Switch
var tanggal = 1;
var bulan = 2;
var tahun = 1995;

switch (bulan) {
  case 1: {
    console.log(tanggal + " Januari " + tahun);
    break;
  }
  case 2: {
    console.log(tanggal + " Februari " + tahun);
    break;
  }
  case 3: {
    console.log(tanggal + " Maret " + tahun);
    break;
  }
  case 4: {
    console.log(tanggal + " April " + tahun);
    break;
  }
  case 5: {
    console.log(tanggal + " Mei " + tahun);
    break;
  }
  case 6: {
    console.log(tanggal + " Juni " + tahun);
    break;
  }
  case 7: {
    consle.log(tanggal + " Juli " + tahun);
    break;
  }
  case 8: {
    console.log(tanggal + " Agustus " + tahun);
    break;
  }
  case 9: {
    console.log(tanggal + " September " + tahun);
    break;
  }
  case 10: {
    console.log(tanggal + " Oktober " + tahun);
    break;
  }
  case 11: {
    console.log(tanggal + " November " + tahun);
    break;
  }
  case 12: {
    console.log(tanggal + " Desember " + tahun);
    break;
  }
}
