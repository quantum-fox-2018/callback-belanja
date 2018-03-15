function beli(uang, obj, cb){
  console.log(`Saya pergi membeli ${obj.item}`)
  setTimeout(function(){
    let kembalian = uang - obj.harga
    if (kembalian > 0) {
      console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
      cb(kembalian)
    }else{
      console.log(`uang gk cukup nih buat beli ${obj.item} yang harganya ${obj.harga}. Uangnya cuma ${uang}`);
      cb(0)
    }
  }, obj.waktu);
}

let objMenu1 = {
  item: 'tahu telor',
  harga: 1000,
  waktu: 1000
}

let objMenu2 = {
  item: 'permen',
  harga: 500,
  waktu: 1000
}

let objMenu3 = {
  item: 'kacang',
  harga: 500,
  waktu: 1000
}

let objMenu4 = {
  item: 'kuaci',
  harga: 100,
  waktu: 1000
}

let objMenu5 = {
  item: 'sarung',
  harga: 1000,
  waktu: 1000
}

// function itungKembalian(sisauang) {
//   // console.log(`Telepon ke rumah lapor emak`);
// }

beli (5000,objMenu1,function itungKembalian(kembalian1) {
  beli(kembalian1,objMenu2,function itungKembalian(kembalian2) {
    beli (kembalian2,objMenu3,function itungKembalian(kembalian3) {
      beli (kembalian3,objMenu3,function itungKembalian(kembalian4) {
        beli (kembalian4,objMenu4,function itungKembalian(kembalian5) {
        })
      })
    })
  })
})

// beli(5000,objMenu1, (kembalian1) => {
//   beli(kembalian1, objMenu2, kembalian2 => {
//     beli(kembalian2, objMenu3, kembalian3 => {
//       beli(kembalian3, objMenu4, kembalian4 => {
//         beli(kembalian4, objMenu5, kembalian5 => {
//         })
//       })
//     })
//   })
// });

module.exports = beli;
