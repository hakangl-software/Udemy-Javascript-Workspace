/*
    1-Bakiye görüntileme
    2-Para Çekme
    3-Para Yatırma
    4-Çıkış

    ATM UYGULAMASI
*/

let yeniSatir = "\r\n";
let bakiye =  1000;

let metin = "1-Bakiye Görüntüleme"+yeniSatir
+"2-Para Çekme"+yeniSatir
+"3-Para Yatırma"+yeniSatir
+"4-Çıkış"+yeniSatir
+"Lütfen bir değer seçiniz.";

let secim = prompt(metin);
switch(secim){
    case "1":
        alert("Bakiyeniz : " + bakiye);
        break;
    case "2":
        let cekilecekTutar = Number(prompt("Çekmek istediğiniz tutarı giriniz: "));
        if(cekilecekTutar<bakiye){
            //başarılıdır.
            bakiye = bakiye-cekilecekTutar;
            alert("Kalan bakiye: "+ bakiye);
        }
        else{
            alert("Bakiyenizden fazla para çekemezsiniz"+yeniSatir
                +"Bakiyeniz : "+bakiye+ " "+ "Çekilecek tutar: "+cekilecekTutar);
        }
        break;
    case "3":
        let yatirilanMiktar = Number(prompt("Yatırmak istediğiniz tutarı giriniz: "));
        bakiye = bakiye+yatirilanMiktar;
        alert("Güncel Bakiyeniz: "+bakiye);
        break;
    case "4":
        console.log("Sistemden Çıkış Yapıldı..");
        break;
    default:
        console.log("Lütfen 1 ile 4 arasında seçim yapınız.");
        break;
}