const data = require("./data");

// Melihat data
console.log("=== DATA AWAL ===");

data.map((item, index) => {
    console.log(
        `${index + 1}. ${item.nama} - ${item.umur} tahun - ${item.alamat} - ${item.email}`
    );
});
// Menambah data
data.push(
    {
        nama: "Rina Putri",
        umur: 22,
        alamat: "Jakarta",
        email: "rina@gmail.com"
    },
    {
        nama: "Agus Setiawan",
        umur: 27,
        alamat: "Depok",
        email: "agus@gmail.com"
    }
);

console.log("\n=== DATA SETELAH DITAMBAH ===");

data.map((item, index) => {
    console.log(
        `${index + 1}. ${item.nama} - ${item.umur} tahun - ${item.alamat} - ${item.email}`
    );
});
// Menghapus data
data.splice(10, 1);

console.log("\n=== DATA SETELAH DIHAPUS ===");

data.map((item, index) => {
    console.log(
        `${index + 1}. ${item.nama} - ${item.umur} tahun - ${item.alamat} - ${item.email}`
    );
});