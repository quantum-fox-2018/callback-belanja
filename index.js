const beli = require('./beli.js')
let money = 10000
let obj=[
  {
    harga : 3000,
    item  : 'mie udon',
    waktu : 2000
  },
  {
    harga : 2000,
    item  : 'kopi kapal air',
    waktu : 2000
  },
  {
    harga : 1000,
    item  : 'gulali',
    waktu : 2000
  },
  {
    harga : 2500,
    item  : 'santan',
    waktu : 2000
  },
  {
    harga : 2000,
    item  : 'pulpen masinis',
    waktu : 2000
  },

]

beli(money,obj[0],(money)=>{
  beli(money,obj[1],(money)=>{
    beli(money,obj[2],(money)=>{
      beli(money,obj[3],(money)=>{
        beli(money,obj[4],(money)=>{
        })
      })
    })
  })
});
