function beli(uang, obj, cb){
  console.log(`Saya pergi membeli ${obj.item}`)
  setTimeout(function(){
    // console.log(obj)
    // console.log(uang ,obj.harga)
    // console.log(uang > obj.harga)
    let kembalian = 0
    if (uang > obj.harga) {
      kembalian = uang - obj.harga
      console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
      cb(kembalian)
    }if (uang < obj.harga) {
      console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${uang}`);
      cb(uang)
    }
  }, obj.waktu);
}
module.exports = beli;
