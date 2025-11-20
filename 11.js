// MAP
let mahasiswa = new Map();
mahasiswa.set("001", "Andi");
mahasiswa.set("002", "Budi");
mahasiswa.set("003", "Citra");
mahasiswa.set("002", "Citra");

mahasiswa.forEach((nama, id) => {
    console.log(id + " : " + nama);
});

printItems([1, 2, 3]);                
printItems(["A", "B", "C"]);          
printItems([1, 2, 3, "A", "B", "C"]);
// FUNCTION printItems
function printItems(items) {
    console.log(items.join(", "));
}

// SET
let tugas = new Set();
tugas.add("Belajar OOP");
tugas.add("Mengerjakan Tugas");
tugas.add("Belajar OOP "); 

console.log(tugas);
