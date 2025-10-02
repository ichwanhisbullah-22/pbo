class Mahasiswa {
  constructor(nama, nim, alamat, kelas, jurusan) {
    // atribut publik
    this.nama = nama;
    this.nim = nim;
    this.kelas = kelas;
    this.jurusan = jurusan;

    // atribut private (alamat tidak bisa diakses langsung dari luar)
    let _alamat = alamat;

    // getter untuk alamat (private)
    this.getAlamat = function () {
      return _alamat;
    };

    // setter untuk alamat (private)
    this.setAlamat = function (alamatBaru) {
      if (alamatBaru && alamatBaru.length > 5) { // validasi sederhana
        _alamat = alamatBaru;
      } else {
        console.log("Alamat tidak valid!");
      }
    };
  }

  // method untuk cetak data mahasiswa
  cetakData() {
    console.log(`Nama    : ${this.nama}`);    
    console.log(`Kelas   : ${this.kelas}`);   
    console.log(`NIM     : ${this.nim}`);     
    console.log(`Jurusan : ${this.jurusan}`); 
    console.log(`Alamat  : ${this.getAlamat()}`); 
    console.log("--------------------------");
  }
}

// buat beberapa objek Mahasiswa
let mhs1 = new Mahasiswa("ramdani", "202401110067", "Jl. Merpati No. 12", "IP241", "Informatika");
let mhs2 = new Mahasiswa("falawaww", "202401110045", "Jl. Kenanga No. 34", "IP242", "Sistem Informasi");
let mhs3 = new Mahasiswa("Rina", "202401110078", "Jl. Melati No. 56", "IP243", "Teknik Komputer");

// akses publik
console.log("=== Akses Publik ===");
console.log("Nama sebelum:", mhs1.nama);
mhs1.nama = "ramdani";  
console.log("Nama sesudah:", mhs1.nama);
console.log("--------------------------");

// akses private (alamat) via getter & setter
console.log("=== Akses Private (Alamat) ===");
console.log("Alamat Ani sebelum:", mhs2.getAlamat());
mhs2.setAlamat("Jl. Anggrek No. 99"); // ganti alamat Ani
console.log("Alamat Ani sesudah:", mhs2.getAlamat());
mhs2.setAlamat("X"); // alamat tidak valid
console.log("--------------------------");

// tampilkan semua data mahasiswa
console.log("=== Data Mahasiswa ===");
mhs1.cetakData();
mhs2.cetakData();
mhs3.cetakData();
