class Mahasiswa {
  constructor(nama, nim, nilai, kelas, jurusan) {
    this.nama = nama;    // atribut publik
    this.nim = nim;      // atribut publik
    this.kelas = kelas;  // atribut publik
    this.jurusan = jurusan; // atribut publik
    let _nilai = nilai; // atribut private menggunakan closure

    // getter untuk nilai
    this.getNilai = function () {
      return _nilai;
    };

    // setter untuk nilai
    this.setNilai = function (nilaiBaru) {
      if (nilaiBaru >= 0 && nilaiBaru <= 100) {
        _nilai = nilaiBaru;
      } else {
        console.log("Nilai harus 0 - 100!");
      }
    };
  }

  // method untuk cetak data mahasiswa
  cetakData() {
    console.log(`Nama    : ${this.nama}`);
    console.log(`Kelas   : ${this.kelas}`);
    console.log(`NIM     : ${this.nim}`);
    console.log(`Jurusan : ${this.jurusan}`);
    console.log(`Nilai   : ${this.getNilai()}`);
    console.log("--------------------------");
  }
}

// buat 3 objek Mahasiswa
let mhs1 = new Mahasiswa("Budi", "202401110067", 85, "IP241", "Informatika");
let mhs2 = new Mahasiswa("Ani", "202401110045", 92, "IP242", "Sistem Informasi");
let mhs3 = new Mahasiswa("Rina", "202401110078", 76, "IP243", "Teknik Komputer");

// tampilkan data semua mahasiswa
console.log("=== Data Mahasiswa ===");
mhs1.cetakData();
mhs2.cetakData();
mhs3.cetakData();
