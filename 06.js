//nama teman teman kelompok
// Ichwan Hisbullah
// Jendersen
// Taufik Kurniawan 
// Ahmad Sopandi



// KELAS ABSTRAK KENDARAAN
class Kendaraan {
    constructor(merk) {
        this.merk = merk; // sebelumnya mendenifisakan dua class kendaraan
        // Perbaikan: gabungkan versi yang ada pengecekan abstrak.
        if (this.constructor === Kendaraan) {
            throw new Error("Kelas abstrak 'Kendaraan' tidak bisa diinstansiasi langsung.");
        }
    }

    // Method abstrak (harus diimplementasikan oleh subclass)
    maju() {
        throw new Error("Method 'maju()' harus diimplementasikan!");
    }
}

// SUBCLASS: MOBIL
class Mobil extends Kendaraan {
    maju() {
        return `${this.merk} melaju dengan kecepatan tinggi!`;         //  sebelumnya: kamu menulis `return ${this.merk} melaju...;` itu salah krna harus di bungkus ('')
    }
}

const avanza = new Mobil("Toyota Avanza");
console.log(avanza.maju()); //  Toyota Avanza melaju dengan kecepatan tinggi!
// const kendaraanBaru = new Kendaraan("Generic");
//  Jika baris ini dijalankan → Error karena Kendaraan bersifat abstrak.

// INTERFACE SIMULASI
const kendaraanInterface = {
    maju: function () {
        throw new Error("Method 'maju()' harus diimplementasikan!");
    }
};


// KELAS SEPEDA
class Sepeda {
    constructor(merk) {
        this.merk = merk;
    }

    maju() {
        return `${this.merk} melaju dengan tenaga manusia!`; //  sebelumnya: return ${this.merk} ...;  salah karena tidak pakai backtick
    }
}

const polygon = new Sepeda("Polygon"); //  perbaiki menjadi `//` komentar tunggal di bawah ini. sebelumnya menulis `/ Menguji apakah Sepeda mematuhi interface`
console.log(polygon.maju()); 

if (typeof polygon.maju !== "function") {
    throw new Error("Class Sepeda harus mengimplementasikan 'maju()'!"); // Mengecek apakah Sepeda memenuhi "kontrak" interface
}

// KELAS ABSTRAK PEMBAYARAN
class Pembayaran {
    constructor(jumlah) {
        this.jumlah = jumlah;
        if (this.constructor === Pembayaran) {
            throw new Error("Kelas abstrak 'Pembayaran' tidak bisa diinstansiasi langsung.");
        }
    }

    prosesPembayaran() {
        throw new Error("Method 'prosesPembayaran()' harus diimplementasikan!");
    }
}


// SUBCLASS: KARTU KREDIT
class KartuKredit extends Pembayaran {
    prosesPembayaran() {
        return `Pembayaran ${this.jumlah} melalui Kartu Kredit berhasil!`;   // salah, karena tidak menggunakan backtick dan tidak perlu kata "Pembayaran" di depan.
    }
}

// SUBCLASS: PAYPAL
class PayPal extends Pembayaran {
    prosesPembayaran() {
        return `Pembayaran ${this.jumlah} melalui PayPal berhasil!`;  // sama seperti di atas: salah dalam penggunaan string template.
    }
}

// IMPLEMENTASI PEMBAYARAN
const bayar1 = new KartuKredit(500000);
console.log(bayar1.prosesPembayaran()); // Pembayaran 500000 melalui Kartu Kredit berhasil!

const bayar2 = new PayPal(250000);
console.log(bayar2.prosesPembayaran()); //  Pembayaran 250000 melalui PayPal berhasil!
