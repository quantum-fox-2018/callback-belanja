function beli(uang, obj, cb){
  console.log(`Saya pergi membeli ${obj.item}`)
  setTimeout(function(){
    let kembalian = uang - obj.harga
    if (kembalian > 0) {
      console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
      cb(kembalian)
    }else{
      console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
      cb(0)
    }
  }, obj.waktu);
}

beli(10000,{item:'permen', harga:2000, waktu:500},function(kembalianYgDidapat){
  console.log(`men gw beli sabun kembalianya ${kembalianYgDidapat}`)
})


beli(10000,{item:'sabun', harga:9000, waktu:500},function(kembalianLagi){
  console.log(`terus, gw beli sabun kembaliannya cuma ${kembalianLagi}`)
})

module.exports = beli;
