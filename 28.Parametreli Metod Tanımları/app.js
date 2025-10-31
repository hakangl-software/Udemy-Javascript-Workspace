


//! ÇOOOOOK ÖNEMLİİİİİ

//?  PARAMETRELİ METOD TANIMLARI


function yazdir(isim,soyisim){
    console.log(isim+" "+soyisim);
}

yazdir("Hakan","GÜL");  // metodu çağırırken bizden isim ve soyisim olarak metod istiyor.

// Bu bir PARAMETRELİ METODDUR.Yani parantez içindeki değere göre parametreli değer verebiliriz.

yazdir("Sedef","DUMAN");


cube(5);
cube(3);

function cube(sayi){                        // Eğer parantez aç kapa varsa bilin ki metddur.
    console.log(sayi*sayi*sayi);
}



let yas = prompt("Lütfen yaşınızı giriniz: ");

function kntrolEt(param){ // parametre ismi olarak yas olması zorunlu değil. 
    if(yas>18){
        console.log("Ehliyet alabilirsiniz.");
    }else{
        console.log("Ehliyet alamazsınız.")
    }
};

kntrolEt(yas);