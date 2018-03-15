const beli = require('./beli.js');
//
// class Saya {
//   constructor() {
//     this.uang =20000
//   }
// }
//
// class Item {
//   constructor() {
//     this.nama = ''
//     this.harga = 0
//     this.waktu = 0
//   }
// }
//
// class Roti extends Item {
//   constructor() {
//     super()
//       this.nama = 'Roti'
//       this.harga = 5000
//       this.waktu = 2500
//   }
// }
//
// class Buah extends Item {
//   constructor() {
//     super()
//       this.nama = 'Buah'
//       this.harga = 4000
//       this.waktu = 3000
//   }
// }
//
// class Kopi extends Item {
//   constructor() {
//     super()
//       this.nama = 'Kopi'
//       this.harga = 1000
//       this.waktu = 2000
//   }
// }
//
// let roti = new Roti()
// let buah = new Buah()
// let kopi = new Kopi()
//
// var arrItem = [roti, buah, kopi]


var objBatu = {item : 'batu', harga: 2000, waktu : 2000}
var objBata = {item : 'bata', harga: 1500, waktu : 1000}
var objSemen = {item : 'semen', harga: 2500, waktu : 1500}
var objAer = {item : 'aer', harga: 1000, waktu : 3000}
var objSekop = {item : 'sekop', harga: 4000, waktu : 5000}

var uang = 10000

beli(uang, objBatu, function(kembalian) {
  beli(kembalian, objBata, function(kembalianlagi) {
    beli(kembalianlagi, objSemen, function(kembalian) {
      beli(kembalian, objAer, function(kembalian) {
        beli(kembalian, objSekop, function(kembalian) {

        })
      })
    })
  })
})
