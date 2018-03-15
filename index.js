const beli = require('./beli.js');

let uang = 50000;
let obj1 = {item: 'Mie Ayam', harga: 5000, waktu: 100};
let obj2 = {item: 'Burung', harga: 10000, waktu: 3000};
let obj3 = {item: 'Mobil Mewah', harga: 20000, waktu: 300};
let obj4 = {item: 'Kuota Internet', harga: 10000, waktu: 300};
let obj5 = {item: 'Bakso', harga: 6000, waktu: 50};

beli(uang, obj1, function(kembalian) {
  uang = kembalian;
  beli(uang, obj2, function(kembalian) {
    uang = kembalian;
    beli(uang, obj3, function(kembalian) {
      uang = kembalian;
      beli(uang, obj4, function(kembalian) {
        uang = kembalian;
        beli(uang, obj5, function(kembalian) {
          uang = kembalian;
        });
      });
    });
  });
});
