const beli = require('./beli.js');

var obj = [{
  'item': 'permen',
  'harga': 100,
  'waktu': 200
},
{
  'item': 'ayam',
  'harga': 200,
  'waktu': 100
},
{
  'item': 'sapi',
  'harga': 400,
  'waktu': 300
},
{
  'item': 'burung',
  'harga': 50,
  'waktu': 50
},
{
  'item': 'kecoa',
  'harga': 20000000,
  'waktu': 10
}]

var uang = 10000

// for (var i = 0; i < obj.length; i++) {
//   beli(uang, obj[i], function(dapat_data) {
//     console.log(dapat_data)
//     uang -= obj.harga
//   })
// }

console.log(beli(1000, obj[0], function(dapat_data) {
  // console.log(dapat_data)
  console.log(beli(1000, obj[1], function(dapat_data) {
    console.log(beli(1000, obj[2], function(dapat_data) {
      console.log(beli(1000, obj[3], function(dapat_data) {
        console.log(beli(1000, obj[4], function(dapat_data) {
        }))
      }))
    }))
  }))
}))
