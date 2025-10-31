

//? Benzin İstasyonu

/*
1- Dizel : 24.53
2- Benzin: 22.25
3- LPG  :  11.1


Gelen müşteriden alacağımız bilgiler;

1-Yakıt Tipi
2-Yüklenecek yakıt litresi

*/ 

let dizel=24.53, benzin=22.25, LPG=11.1

const yenisatır="\r\n";

const yakitMetni = "1-Dizel" + yenisatır + "2-Benzin" + yenisatır + "3-LPG" + yenisatır + "Yakıt türünü seçiniz:"

let yakitTipi = prompt(yakitMetni);

if(yakitTipi=="1" || yakitTipi=="2" || yakitTipi=="3"){
  let yakitLitresi = Number(prompt(yakitLitresi));
let bakiye = Number(prompt("bakiyenizi giriniz:"));

if(yakitTipi==1){
let odenecekTutar = dizel*yakitLitresi;
if(odenecekTutar<bakiye){
    bakiye=bakiye-odenecekTutar;
    alert("Yakıt alma işlemi başarılıdır." + yenisatır + "Kalan bakiye: "+ bakiye);
}
else{
    alert("Bakiyeniz yeterl değildir."+ yenisatır
        + "Ödenecek Tutar: " + odenecekTutar + yenisatır
        + "Bakiye: " + bakiye + yenisatır
        + "Eksik tutar: " + (
            odenecekTutar-bakiye)
    )
}
}
else if(yakitTipi==2){
let odenecekTutar = benzin*yakitLitresi;
if(odenecekTutar<bakiye){
    bakiye=bakiye-odenecekTutar;
    alert("Yakıt alma işlemi başarılıdır." + yenisatır + "Kalan bakiye: "+ bakiye);
}
else{
    alert("Bakiyeniz yeterl değildir."+ yenisatır
        + "Ödenecek Tutar: " + odenecekTutar + yenisatır
        + "Bakiye: " + bakiye + yenisatır
        + "Eksik tutar: " + (
            odenecekTutar-bakiye)
    )
}
}
else if(yakitTipi==3){
let odenecekTutar = LPG*yakitLitresi;
if(odenecekTutar<bakiye){
    bakiye=bakiye-odenecekTutar;
    alert("Yakıt alma işlemi başarılıdır." + yenisatır + "Kalan bakiye: "+ bakiye);
}
else{
    alert("Bakiyeniz yeterl değildir."+ yenisatır
        + "Ödenecek Tutar: " + odenecekTutar + yenisatır
        + "Bakiye: " + bakiye + yenisatır
        + "Eksik tutar: " + (
            odenecekTutar-bakiye)
    )
}
}  
}
else{
    alert("Lütfen yakıt tipini seçiniz.")
}