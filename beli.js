function beli(uang, obj, cb){

  setTimeout(function(){

    
    if (uang >= obj.harga) {
      let kembalian = uang - obj.harga

      console.log(`Saya pergi membeli ${obj.item}`)
      console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
      cb(kembalian)
    }else{

      console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${uang}`);
      cb(uang)
    }

  }, obj.waktu);

}

module.exports = beli;
