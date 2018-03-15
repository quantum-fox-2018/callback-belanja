const beli = require('./beli.js');

let objItem = [{
  'item' : 'akua',
  'harga' : 5000,
  'waktu' : 200
},
{
  'item' : 'mijon',
  'harga' : 10000,
  'waktu' : 1000
},
{
  'item' : 'kacang',
  'harga' : 2000,
  'waktu' : 20
},
{
  'item' : 'kuaci',
  'harga' : 10000,
  'waktu' : 2000
},
{
  'item' : 'permen',
  'harga' : 50000,
  'waktu' : 800
}]

var uang = 50000

  beli(uang, objItem[0], function (kembalian) {
    beli(kembalian, objItem[1], function (kembalian) {
      beli(kembalian, objItem[2], function (kembalian) {
        beli(kembalian, objItem[3], function (kembalian) {
          beli(kembalian, objItem[4], function (kembalian) {

          });
        });
      });
    });
  });
