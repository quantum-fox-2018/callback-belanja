let uang = 25000;

function beli(uang, obj, cb){
  console.log(`Saya pergi membeli ${obj.item}`)
  setTimeout(function(){
    let kembalian = uang - obj.harga
    if (kembalian > 0) {
      console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
      cb(kembalian)
    }else{
      //kalo enggak cukup duitnya mana ada kembalian =.=
      kembalian = 0;
      console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
      cb(0)
    }
  }, obj.waktu);
}

class Item{
  constructor(item, harga, waktu){
    this.item = item;
    this.harga = harga;
    this.waktu = waktu;
  }
}

let kacang = new Item('kacang', 2000, 200);
let makaroni = new Item('makaroni', 2000, 200);
let bakwan = new Item('bakwan', 2000, 200);
let tempe = new Item('tempe', 2000, 200);
let tahu = new Item('tahu', 2000, 200);
let nasi_goreng = new Item('nasi goreng', 15000, 1500);
let nasi_uduk = new Item('nasi uduk', 7000, 700);
let mie_goreng = new Item('mie goreng', 10000, 1000);
let bihun_goreng = new Item('bihun goreng', 5000, 500);

let items = [nasi_goreng, nasi_uduk, mie_goreng, bihun_goreng,kacang, makaroni, bakwan, tempe, tahu];


beli(uang, items[0], function(kembalian){
  uang = kembalian;
  if(kembalian === 0) return;
  beli(uang, items[1], function(kembalian){
    uang = kembalian;
    if(kembalian === 0) return;
    beli(uang, items[2], function(kembalian){
      uang = kembalian;
      if(kembalian === 0) return;
      beli(uang, items[3], function(kembalian){
        uang = kembalian;
        if(kembalian === 0) return;
        beli(uang, items[4], function(kembalian){
          uang = kembalian;
          if(kembalian === 0) return;
        });
      });
    });
  });
});

module.exports = beli;
