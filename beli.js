function beli(uang, obj, cb){
  console.log(`Saya pergi membeli ${obj.itemsName}`)
  setTimeout(function(){
    let kembalian = uang - obj.priceItems
    if (kembalian > 0) {
      console.log(`Saya sudah membeli ${obj.itemsName} uang kembaliannya ${kembalian}`);
      cb(kembalian)
    }else{
      console.log(`uang gk cukup nih buat beli ${obj.itemsName} kembaliannya cuma ${kembalian}`);
      cb(0)
    }
  }, obj.times);
}

module.exports = beli;
