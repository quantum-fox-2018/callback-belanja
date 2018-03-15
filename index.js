let beli = require('./beli.js')

class ObjItem{
    constructor(name){
        this._name=name;
    }
    get name(){
        return this._name;
    }
}

class Permen extends ObjItem{
    constructor(nama){
        super(nama);
        this._harga = 6000;
        this._time = 10;
    }
    get harga(){
        return this._harga;
    }
    get time(){
        return this._time;
    }
}

class Kue extends ObjItem{
    constructor(nama){
        super(nama);
        this._harga = 16000;
        this._time = 100;
    }
    get harga(){
        return this._harga;
    }
    get time(){
        return this._time;
    }
}

class Roti extends ObjItem{
    constructor(nama){
        super(nama);
        this._harga = 10000;
        this._time = 60;
    }
    get harga(){
        return this._harga;
    }
    get time(){
        return this._time;
    }
}

class Burger extends ObjItem{
    constructor(nama){
        super(nama);
        this._harga = 13000;
        this._time = 20;
    }
    get harga(){
        return this._harga;
    }
    get time(){
        return this._time;
    }
}

class Fries extends ObjItem{
    constructor(nama){
        super(nama);
        this._harga = 9000;
        this._time = 25;
    }
    get harga(){
        return this._harga;
    }
    get time(){
        return this._time;
    }
}

let uang = 50000;
let item1 = new Burger('Burger');
let item2 = new Permen('Permen');
let item3 = new Kue('Kue');
let item4 = new Fries('Fries');
let item5 = new Roti('Roti');

beli(uang,item1,function(kembalian){
    beli(kembalian,item2,function(kembalian2){
        beli(kembalian2, item3, function(kembalian3){
            beli(kembalian3, item4, function(kembalian4){
                beli(kembalian4, item5, function(kembalian5){
                    console.log(kembalian5);
                })
            })
        })
    })
})
