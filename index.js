
let beli = require("./beli.js");

let objItem = [
  { item:"Baju", harga:50000, waktu:5000},
  { item:"Baju Batik", harga:100000, waktu:2000},
  { item:"Sepatu Vans", harga:500000, waktu:3000},
  { item:"Celana", harga:120000, waktu:7000},
  { item:"Kemeja", harga:70000, waktu:1000}
]

beli(1000000, objItem[0], function(kembalian){
  beli(kembalian, objItem[1], function(kembalian){
    beli(kembalian, objItem[4], function(kembalian){
      beli(kembalian, objItem[3], function(kembalian){
        beli(kembalian, objItem[2], function(kembalian){

        })
      })
    })
  })
});
















//
