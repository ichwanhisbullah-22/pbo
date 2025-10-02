class Mahasiswa {
  constructor(nama, nim, kelas, jurusan, alamat) {
    this.nama = nama;   // publik
    this.nim = nim;     // publik
    this.kelas = kelas; // publik
    this.jurusan = jurusan; // publik

    // private menggunakan closure
    let _alamat = alamat;

    // Getter untuk alamat
    this.getAlamat = function() {
      return _alamat;
    };

    // Setter untuk alamat
    this.setAlamat = function(alamatBaru) {
      if (alamatBaru.length > 0) {
        _alamat = alamatBaru;
      } else {
        console.log("Alamat tidak valid!");
      }
    };

    // Method info
    this.getInfo = function() {
      return `Nama    : ${this.nama}
Kelas   : ${this.kelas}
NIM     : ${this.nim}
Jurusan : ${this.jurusan}
Alamat  : ${_alamat}
--------------------------`;
    };
  }
}

// 🔹 Buat beberapa objek mahasiswa
let m1 = new Mahasiswa("ramdani", "202401110067", "IP241", "Informatika", "Jl. Merpati No. 12");
let m2 = new Mahasiswa("falawaww", "202401110045", "IP242", "Sistem Informasi", "Jl. Kenanga No. 34");
let m3 = new Mahasiswa("Rina", "202401110078", "IP243", "Teknik Komputer", "Jl. Melati No. 56");

// 🔹 Akses private (Alamat) lewat getter/setter
console.log("=== Akses Private (Alamat) ===");
console.log("Alamat Ani sebelum:", m2.getAlamat());
m2.setAlamat("Jl. Anggrek No. 99");  // ubah alamat
console.log("Alamat Ani sesudah:", m2.getAlamat());
m2.setAlamat("");                     // invalid (ditolak)

console.log("--------------------------");

// 🔹 Tampilkan semua data mahasiswa
console.log("=== Data Mahasiswa ===");
console.log(m1.getInfo());
console.log(m2.getInfo());
console.log(m3.getInfo());
