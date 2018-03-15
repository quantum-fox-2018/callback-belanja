const beli = require('./beli.js');

class ObjItem {
  constructor(item, harga, waktu){
    this.item   = item;
    this.harga  = harga;
    this.waktu  = waktu;
  }
}

let permen  = new ObjItem('permen', 5000, 1000);
let roti    = new ObjItem('roti', 15000, 2000);
let kopi    = new ObjItem('kopi', 10000, 3000);
let kue     = new ObjItem('kue', 8000, 4000);
let kacang  = new ObjItem('kacang', 12000, 5000)

let uang    = 50000;

beli(uang, permen, function(kembalian){
  beli(kembalian, roti, function(kembalian){
    beli(kembalian, kopi, function(kembalian){
      beli(kembalian, kue, function(kembalian){
        beli(kembalian, kacang, function(kembalian){})
      });
    })
  });
});
