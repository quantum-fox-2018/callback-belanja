const beli = require('./beli');

var objItem=[
              {item: 'crocodile bread', harga: 20000, waktu: 5000},
              { item: 'kaset kosong', harga: 15000, waktu: 4000},
              { item: 'ember kosong', harga: 30000, waktu: 3000},
              { item: 'topi pancing', harga: 7000, waktu: 2000},
              { item: 'muka baru', harga: 100000, waktu: 1000}

            ]


let modal=100000
for (var i = 0; i < 5; i++) {
  beli(modal,objItem[i],function(){});
  modal-= objItem[i].harga
}

// beli(kembalian,objItem[1],function(){});
// beli(kembalian,objItem[2],function(){});
// beli(kembalian,objItem[3],function(){});
// beli(kembalian,objItem[4],function(){});
