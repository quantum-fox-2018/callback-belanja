const beli = require('./beli.js')

let objYakult = {item:'yakult',harga:800,waktu:1000}
let objPermen = {item:'permen',harga:500,waktu:1500}
let objCiki = {item:'ciki',harga:1000,waktu:1200} 
let objAqua = {item:'aqua',harga:6500,waktu:800}
let objSemen =  {item:'semen',harga:1500,waktu:600}
let uang = 5000

beli(uang,objPermen,function(kembaliannya){
  beli(kembaliannya,objYakult,function(kembaliannya){
    beli(kembaliannya,objCiki,function(kembaliannya){
      beli(kembaliannya,objAqua,function(kembaliannya){
        beli(kembaliannya,objSemen,function(kembaliannya){})
      })
    })
  })
})