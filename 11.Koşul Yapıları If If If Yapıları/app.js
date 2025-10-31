

//? ÇOKLU IF KULLANIMI


/*
    Ad: boş geçilemez
    TCKN: 11 karakterden oluşsun.
*/

let ad = prompt("İsminizi giriniz: ");
let tckn = prompt("TCKN giriniz.");

kontrolEt(ad,tckn)

function kontrolEt(ad, tckn){
    if(ad!=""){
        if(tckn.length==11){
            console.log("İsim ve tckn sorunsuz kayıt edildi.")
        }
        else{
            console.log("Lüften 11 haneli TCKN yi giriniz.")
        }        
    }
    else{
            console.log("Lütfen isim alanıbı boş bırakmayınız.")
        }
}

