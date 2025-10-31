

//? Armstrong Sayısı

/*
    153 = 1*1*1 + 5*5*5 + 3*3*3
*/

let sayi = prompt("Sayı giriniz: ");
let toplam = 0;

for(let i=0; i<sayi.length; i++){ // Burda 0'dan başlattık. Çünkü index no sıfırdan başlar.
    let rakam = sayi.charAt(i); //Burda index numarasını getirdik.
    toplam+=rakam*rakam*rakam;  // Burda üssü alamadım hata verdi. String ifadeden dolayı olabilir.
}

if(Number(sayi)==toplam){
    alert("Armstrong sayıdır");
}
else{
    alert("Armstrong sayı değildir.");
}
