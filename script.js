let nilai = prompt("Masukkan nilai mu dari 1 - 100!");
let hasil = "";

switch(true){
    case nilai >= 91  && nilai <= 100:
        hasil = "A";
        break;
    case nilai  >= 81  && nilai <= 91:
        hasil = "B";
        break;
    case nilai >= 71  && nilai <= 81:
        hasil = "C";
        break;
    case nilai >= 51  && nilai <= 71:
        hasil = "D"
        break;
    case nilai > 0:
        hasil = "F"
        break;
    default:
        hasil = "Tidak ada"
        document.write(`<h1>Nilai anda ${hasil}</h1>`);
}
document.write(`<h1>Nilai anda ${hasil} </h1>`);
