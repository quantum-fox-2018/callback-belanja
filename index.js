const beli = require('./beli.js');

let objListItem = [{
        item: 'kacang',
        harga: 5000,
        waktu: 10000
    },
    {
        item: 'coklat',
        harga: 2000,
        waktu: 7000
    },
    {
        item: 'martabak',
        harga: 20000,
        waktu: 15000
    },
    {
        item: 'susu',
        harga: 6000,
        waktu: 20000
    },
    {
        item: 'ice cream',
        harga: 10000,
        waktu: 6000
    }
];

let uang = 100000;
beli(uang, objListItem[0], function (hasil_kembalian) {
    uang = hasil_kembalian;
    beli(uang, objListItem[1], function (hasil_kembalian) {
        uang = hasil_kembalian;
        beli(uang, objListItem[2], function (hasil_kembalian) {
            uang = hasil_kembalian;
            beli(uang, objListItem[3], function (hasil_kembalian) {
                uang = hasil_kembalian;
                beli(uang, objListItem[4], function (hasil_kembalian) {
                    uang = hasil_kembalian;
                });
            });
        });
    });
});