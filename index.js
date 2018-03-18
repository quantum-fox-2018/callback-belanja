var beli = require('./beli.js')

class Permen{
  constructor(){
    this.item = 'permen'
    this.harga = 4500
    this.waktu = 500
  }
}

class Batu{
  constructor(){
    this.item = 'batu'
    this.harga = 4800
    this.waktu = 1000
  }
}

class Gula{
  constructor(){
    this.item = 'gula'
    this.harga = 5200
    this.waktu = 199
  }
}
3
class Soda{
  constructor(){
    this.item = 'soda'
    this.harga = 4890
    this.waktu = 475
  }
}

class Kacang{
  constructor(){
    this.item = 'kacang'
    this.harga = 5150
    this.waktu = 300
  }
}
permen = new Permen()
batu = new Batu()
gula = new Gula()
soda = new Soda()
kacang = new Kacang()
var duit = 15500

      beli(duit ,permen,function(kembalianPermen){
        beli(kembalianPermen,batu,function(kembalianBatu){
          beli(kembalianBatu ,gula,function(kembalianGula){
            beli(kembalianGula ,soda,function(kembalianSoda){
              beli(kembalianSoda ,kacang,function(kembalianSisa){

              })
            })
          })
        })
      } )

// console.log(beli(5000,{item : kerupuk, harga: 500, waktu: 1000}, ))
