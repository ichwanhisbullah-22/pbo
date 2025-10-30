
// 1️TRY - CATCH - FINALLY
// =========================================================
// Blok try digunakan untuk menulis kode yang mungkin menimbulkan error.
// Jika terjadi error, blok catch akan menangkapnya agar program tidak berhenti.
// Blok finally akan tetap dijalankan meskipun ada atau tidak ada error.

try {
  let mahasiswa = ["Andi", "Budi", "Citra"];
  
  // Index ke-5 tidak ada, jadi nilai undefined
  // Saat kita panggil toUpperCase() dari undefined → error
  console.log(mahasiswa[5].toUpperCase());
  
} catch (error) {
  // Bagian ini dijalankan karena terjadi error di atas
  console.log("Terjadi error: " + error.message);
  
} finally {
  // Bagian ini selalu dijalankan
  console.log("Proses selesai.");
}

console.log("\n--------------------------------------------------\n");


// 2️ PENGGUNAAN THROW
// =========================================================
// Kita bisa membuat error sendiri dengan kata kunci `throw`.
// Biasanya digunakan untuk validasi input atau kondisi tertentu.

function cekUsia(usia) {
  // Jika usia kurang dari 18, buat error baru
  if (usia < 18) {
    throw new Error("Maaf, Anda belum cukup umur!");
  }
  return "Selamat datang!";
}

try {
  // Panggil fungsi dengan usia 16 → akan memunculkan error
  console.log(cekUsia(16));

} catch (error) {
  // Tangkap dan tampilkan pesan error-nya
  console.log("Terjadi kesalahan: " + error.message);
}

console.log("\n--------------------------------------------------\n");


// CUSTOM ERROR HANDLING DALAM JAVASCRIPT
// Kita bisa membuat kelas error khusus (custom error)
// untuk membedakan jenis error tertentu.
// Caranya dengan membuat class yang extends Error.

class ValidasiError extends Error {
  constructor(pesan) {
    super(pesan);        // panggil constructor dari Error
    this.name = "ValidasiError"; // ubah nama error agar lebih spesifik
  }
}

function cekNama(nama) {
  if (nama.length < 3) {
    // Buat dan lempar custom error
    throw new ValidasiError("Nama terlalu pendek!");
  }
  return `Nama valid: ${nama}`;
}

try {
  // Panggil fungsi dengan nama yang hanya 2 huruf
  console.log(cekNama("Jo"));
} catch (error) {
  // Bedakan apakah error-nya termasuk ValidasiError atau bukan
  if (error instanceof ValidasiError) {
    console.log("Terjadi kesalahan validasi: " + error.message);
  } else {
    console.log("Kesalahan lain: " + error.message);
  }
}

console.log("\n--------------------------------------------------\n");


