// 1. Class Induk
class Mahasiswa {
  constructor(nama, nim, jurusan) {
    this.nama = nama;       // Attribute
    this.nim = nim;         // Attribute
    this.jurusan = jurusan; // Attribute
  }

  // 4. Method
  displayInfo() {
    console.log(`Mahasiswa: ${this.nama} (NIM: ${this.nim}) - Jurusan: ${this.jurusan}`);
  }
}

// 2. Class Anak
class MahasiswaAktif extends Mahasiswa {
  constructor(nama, nim, jurusan, semester) {
    super(nama, nim, jurusan);    // Mewarisi dari class induk
    this.semester = semester;     // Attribute tambahan
  }

  // Method tambahan
  statusKuliah() {
    console.log(`${this.nama} sedang kuliah di semester ${this.semester}`);
  }

  // Override method displayInfo()
  displayInfo() {
    super.displayInfo(); // Panggil method dari class induk
    console.log(`Status: Aktif di semester ${this.semester}`);
  }
}

// 3. Object
const mhs1 = new Mahasiswa("Andi", "12345678", "Teknik Informatika");
const mhs2 = new MahasiswaAktif("Budi", "87654321", "Sistem Informasi", 5);
const mhs3 = new MahasiswaAktif("Citra", "11223344", "Teknik Komputer", 3); // ✅ Objek baru

// Menjalankan Method
console.log("\n== Data Mahasiswa 1 ==");
mhs1.displayInfo();

console.log("\n== Data Mahasiswa 2 ==");
mhs2.displayInfo();
mhs2.statusKuliah();

console.log("\n== Data Mahasiswa 3 ==");
mhs3.displayInfo();
mhs3.statusKuliah();
