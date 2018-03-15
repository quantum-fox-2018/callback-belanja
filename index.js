const beli = require('./beli.js')

beli(20000,{item:'Oreo',harga:5000},(kembalian)=>{
  beli(kembalian,{item:'HappyTos',harga:10000},(kembalian)=>{
    beli(kembalian,{item:'TimTam',harga:10000},(kembalian)=>{
      beli(kembalian,{item:'BengBeng',harga:3000},(kembalian)=>{
        beli(kembalian,{item:'Dynakat',harga:7000},(kembalian)=>{})
      })
    })
  })
})
