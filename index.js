const beli = require('./beli.js');

class Item {
  constructor(obj) {
    this.item = obj.item,
    this.harga = obj.harga,
    this.waktu = obj.waktu
  }
}

let item1 = new Item({
    item: "Item 1",
    harga: 20000,
    waktu: 5
  });

let item2 = new Item({
    item: "Item 2",
    harga: 10000,
    waktu: 5
  });

let item3 = new Item({
    item: "Item 3",
    harga: 10000,
    waktu: 5
  });

let item4 = new Item({
    item: "Item 4",
    harga: 10000,
    waktu: 5
  });

let item5 = new Item({
    item: "Item 5",
    harga: 5000,
    waktu: 2
  });

let uang = 100000;

beli(10000, item1, function(kembalian) {
  beli(kembalian, item2, function(kembalian) {
    beli(kembalian, item3, function(kembalian) {
      beli(kembalian, item4, function(kembalian) {
        beli(kembalian, item5, function(kembalian) {

        });
      });
    });
  });
});
