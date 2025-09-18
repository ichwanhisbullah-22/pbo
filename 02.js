class Mobil {
  // Konstruktor untuk inisialisasi objek
  constructor(merek, model, tahun) {
    this.merek = merek; // Properti objek
    this.model = model;
    this.tahun = tahun;
  }

  // Metode untuk menampilkan informasi mobil
  displayInfo() {
    console.log(`Mobil: ${this.merek} ${this.model} (${this.tahun})`);
  }
}

// Instansiasi objek dari kelas Mobil
const mobill = new Mobil('Toyota', 'Corolla', 2020); // Membuat objek mobill
const mobil2 = new Mobil('Honda', 'Civic', 2021); // Membuat objek mobil2

// Memanggil metode untuk menampilkan informasi
mobill.displayInfo(); // Output: Mobil: Toyota Corolla (2020)
mobil2.displayInfo(); // Output: Mobil: Honda Civic (2021)




class Kendaraan {
  constructor(jenis) {
    this.jenis = jenis;
  }
}

class Mobil extends Kendaraan {
  constructor(merek, model, tahun) {
    super('Mobil'); // Memanggil konstruktor kelas induk
    this.merek = merek;
    this.model = model;
    this.tahun = tahun;
  }
}

class Hewan {
  speak() {
    console.log("Hewan berbicara");
  }
}

class Anjing extends Hewan {
  speak() {
    console.log("Anjing menggonggong");
  }
}

let hewan1 = new Hewan();
let hewan2 = new Anjing();

hewan1.speak(); // Output: Hewan berbicara
hewan2.speak(); // Output: Anjing menggonggong
