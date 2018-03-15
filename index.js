const belanja = require('./beli.js')

class ObjItems {
  constructor(itemsName,priceItems,times){
    this.itemsName = itemsName;
    this.priceItems = priceItems;
    this.times = times;
  }
}

let apple = new ObjItems("Apple",20000,600);
let roti = new ObjItems("Roti Bakar",5000,400);
let air = new ObjItems("Air Putih",3000,100);
let martabak = new ObjItems("Martabak Oriens",25000,3000);
let tissue = new ObjItems("Tissue",7500,20);


let uang = 300000;

belanja(uang,apple,function(uang_kembalian){
  uang = uang_kembalian;
  belanja(uang,roti,function(uang_kembalian){
    uang = uang_kembalian;
    belanja(uang,martabak,function(uang_kembalian){
      uang = uang_kembalian;
      belanja(uang,air,function(uang_kembalian){
        uang = uang_kembalian;
        belanja(uang,tissue,function(uang_kembalian){
          uang = uang_kembalian
        })
      })
    })
  })
});
