/*
    ? SORULAR

    1 - Türkçe 40
    2 - Matematik 40
    3 - Sosyal Bilimler 20
    4 - Fen Bilimleri 20

    -----> 100 puanı ÖSYM veriyor.
    -----> Okul Puanı max 60 veriyor.
*/

let TurkceDogru , TurkceYanlis = 0 ;
let MatematikDogru , MatematikYanlis = 0;
let SosyalDogru , SosyalYanlis = 0;
let FenBilimlerDogru, FenBilimlerYanlis =0;
let puan = 0;


let yeniSatir = "\r\n";
let mesaj = "TYT Puan Hesaplama uygulamasına hoş geldiniz." + yeniSatir
+ "1-Puan Hesaplama"+yeniSatir
+"2-Çıkış Yap";

let secim = prompt(mesaj);
switch(secim){
    case "1":
        okulPuani = Number(prompt("Okul puanınızı giriniz: "))
        if(okulPuani<60){
            TurkceDogru = Number(prompt("Türkçe Doğru Sayısı: "));
            TurkceYanlis = Number(prompt("Türkçe Yanlış Sayısı: "));
            MatematikDogru = Number(prompt("Matemetik Doğru Sayısı: "));
            MatematikYanlis = Number(prompt("Matemetik Yanlış Sayısı: "));
            SosyalDogru = Number(prompt("Sosyal Doğru Sayısı: "));
            SosyalYanlis = Number(prompt("Sosyal Yanlış Sayısı: "));
            FenBilimlerDogru = Number(prompt("Fen Bilimleri Doğru Sayısı: "));
            FenBilimlerYanlis = Number(prompt("Fen Bilimleri Yanlış Sayısı: "));
            let dogruSayisi =  TurkceDogru+MatematikDogru+SosyalDogru+FenBilimlerDogru;
            let yanlisSayisi = TurkceYanlis+MatematikYanlis+SosyalYanlis+FenBilimlerYanlis;
            let kalanDogruSayisi = (dogruSayisi-yanlisSayisi)-(yanlisSayisi/4);
            puan = (kalanDogruSayisi*4) + 100 + okulPuani;
            alert("TYT Puanınız: "+ puan);
        }else{
            alert("Lütfen Okul Puanını düzgün giriniz.")
        }   
        break;

    case "2":
        console.log("Sistemden çıkış yapıldı.")
        break;
    default:
        console.log("Lütfen 1 ve 2 arasında seçim yapınız.")
        break;
}