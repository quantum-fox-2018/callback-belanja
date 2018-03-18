"use strict"

// class Item {
//   constructor(item, harga, waktu) {
//     this.item = item;
//     this.harga = harga;
//     this.waktu = waktu;
//
//   }
// }
//
// class Box {
//   constructor() {
//   }
//
//   addItem(item, harga, waktu){
//     let boxItem=[]
//     let item = new Item(item, harga, waktu)
//     boxItem.push(item)
//     return boxItem
//   }
//
// }
// let newItem = new Box()
// newItem.addItem()

let beli = require('./beli.js')
let objItem = []
let objPermen = {item : 'Permen', harga : 2000, waktu : 100};
let objRoti = {item : 'Roti', harga : 10000, waktu : 60};
let objKue = {item : 'Kue', harga : 20000, waktu : 50};
let objGula = {item : 'Gula', harga : 8000, waktu : 300};
let objCoklat = {item : 'coklat', harga : 20000, waktu : 200};
// objItem.push(objKue,objRoti, objPermen, objCoklat, objGula)
//
function kembali(kembalian){
  console.log(`Sisa Uangnya ${kembalian}`);
}
var uang = 30000
//
// for(let i=0; i<objItem.length; i++){
//   if(uang >0){
//       beli(uang, objItem[i], kembali)
//   }
//   uang -= objItem[i].harga
// }

beli(uang, objPermen, function (kembalian){
  beli(uang, objRoti, function (kembalian){
    beli(uang, objKue, function(kembalian){
      beli(uang, objGula, function(kembalian){
        beli(uang, objCoklat, function(kembalian){

        })
      })
    })
  })
})
