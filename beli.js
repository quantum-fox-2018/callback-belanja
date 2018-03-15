function beli(uang, obj, cb){
  console.log(`Saya pergi membeli ${obj.name}`)
  setTimeout(function(){
    let kembalian = uang
    if (uang - obj.harga > 0) {
      kembalian = uang - obj.harga
      console.log(`Saya sudah membeli ${obj.name} uang kembaliannya ${kembalian}`);
      cb(kembalian)
    }else{
      console.log(`uang gk cukup nih buat beli ${obj.name} kembaliannya cuma ${kembalian}`);
      cb(kembalian)
    }
  }, obj.waktu);
}

module.exports = beli;
