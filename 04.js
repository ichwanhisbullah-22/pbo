class Mahasiswa {
  // atribut private
  #alamat;

  constructor(nama, nim, kelas, jurusan, alamat) {
    this.nama = nama;   // publik
    this.nim = nim;     // publik
    this.kelas = kelas; // publik
    this.jurusan = jurusan; // publik
    this.#alamat = alamat;  // private
  }

  // Getter & Setter untuk Alamat
  get alamat() {
    return this.#alamat;
  }
  set alamat(alamatBaru) {
    if (alamatBaru.length > 0) {
      this.#alamat = alamatBaru;
    } else {
      console.log("Alamat tidak valid!");
    }
  }

  // Getter untuk menampilkan info lengkap
  get info() {
    return `Nama    : ${this.nama}
Kelas   : ${this.kelas}
NIM     : ${this.nim}
Jurusan : ${this.jurusan}
Alamat  : ${this.#alamat}
--------------------------`;
  }
}

// 🔹 Buat beberapa objek mahasiswa
let m1 = new Mahasiswa("ramdani", "202401110067", "IP241", "Informatika", "Jl. Merpati No. 12");
let m2 = new Mahasiswa("falawaww", "202401110045", "IP242", "Sistem Informasi", "Jl. Kenanga No. 34");
let m3 = new Mahasiswa("Rina", "202401110078", "IP243", "Teknik Komputer", "Jl. Melati No. 56");

// 🔹 Akses private (Alamat)
console.log("=== Akses Private (Alamat) ===");
console.log("Alamat Ani sebelum:", m2.alamat);
m2.alamat = "Jl. Anggrek No. 99";   // ubah alamat
console.log("Alamat Ani sesudah:", m2.alamat);
m2.alamat = "";                     // invalid (ditolak)

console.log("--------------------------");

// 🔹 Tampilkan semua data mahasiswa
console.log("=== Data Mahasiswa ===");
console.log(m1.info);
console.log(m2.info);
console.log(m3.info);
