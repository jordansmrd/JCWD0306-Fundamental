// object =>  CRUD 
// C => {} => Object.key, Object["key"]
// R => Object , Object.key, Object["key"], entries(array), keys(array)
// U => Object.key = "", Object["key"] = ""
// D => delete Object.key

// array  => CRUD
// C => [], array[index]
// R => array, array[index] , for,map,filter,find,indexOf, findIndex (perhatikan returnnya)
// U =>array[index] = "", splice
// D => pop, unshift, splice

// function => 
// 10 *10 

// function perkalian(a,b){
//     return a*b
// }

// student1 = {
//     nama: "",
//     orangtua: [{nama: ""},{nama: ""}], 
//     greet() {
//         console.log("helloo guys")
//     }
// }

// class student {
//     constructor(nama,orangtua= []) {
//         this.nama = nama
//         this.orangtua = orangtua
//     }

//     greet(){
//                 console.log("helloo guys")
//     }
// }


// student = new Student()
// student = new Student()
// student = new Student()
// student = new Student()
// student = new Student()
// student = new Student()
// student = new Student()



// class  

// map(
//     (value,index,array) => {

//     }
// )




tokped
-- kendaraan, buku, pakaian, hp, skincare 
-- setiap barang punya nama,category, berat, deskripsi, warna, price, stock

-- kendaraan jumlah roda, bahan bakar (listrik/bensin/solar), tahun 
-- buku penulis , penerbit,  jumlah_halaman
-- pakaian ukuran, bahan (katun/spandex/wool) , merk 
-- hp processor, ram, storage
-- skin care  jenis (anti aging/pelembab/sunscreen) , ukuran (ml) , expired (year)

-- add to cart => apabila ada yang sama maka jumlahkan qtynya jika lebih maka ambil maxStock
-- total belanja
-- edit qty => tidak boleh melebihi stock
-- hapus cart 
-- bayar () => pada saat bayar stock berkurang cart dihapus 


-- class product nama,category, berat, deskripsi, warna, price, stock
-- kendaraan ext product jumlah roda, bahan bakar (listrik/bensin/solar), tahun 
-- buku ext product penulis , penerbit,  jumlah_halaman 
... 


class tokped 
cart = []
products =[]



function
-- add product
-- add to cart => apabila ada yang sama maka jumlahkan qtynya jika lebih maka ambil maxStock ,
 tambahin 1 key qty
-- total belanja
-- edit qty => tidak boleh melebihi stock
-- hapus cart 
-- bayar () => pada saat bayar stock berkurang cart dihapus 






[ {
    nama: "bedak micin", 
    stock : 10
}]