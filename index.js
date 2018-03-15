const beli = require('./beli');

let uang = 100000;

let obj1 = {
    item: 'Permen',
    harga: 1000,
    waktu: 1000
};
let obj2 = {
    item: 'Roti',
    harga: 15000,
    waktu: 3000
};
let obj3 = {
    item: 'Kopi',
    harga: 1500,
    waktu: 3000
};
let obj4 = {
    item: 'Kopi',
    harga: 1500,
    waktu: 3000
};
let obj5 = {
    item: 'Kopi',
    harga: 1500,
    waktu: 3000
};

beli(uang, obj1, function(uang){
    beli(uang, obj2, function(uang){
        beli(uang, obj3, function(uang){
            beli(uang, obj4, function(uang){
                beli(uang, obj5, function(uang){
                    
                })
            })
        })
    })
})
