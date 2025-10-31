
//TODO: DİZİ METODLARI

/*
    push    : dizininsonuna eleman ekler, ayrıca dizinin uzunluğunu döner. 
    unshift : dizini başına eleman ekler, eleman sayısını geriye döner.

    pop     : dizinin sonundan eleman siler, silinen elemanı döner.
    shift   : dizinin başından eleman siler, eleman sayısını döner.

    splice(index, incdex): Türkçe'si iki ucu birleştirmek anlamına geliyor. Eleman eklemek ya da silmek için kullanılır.
    
    
    toString: diziyi stringe çevirir.
    join    : diziyi stringe çevirir. Farkı ise araya eleman ekleyebiliriz.

    cancat  : dizileri birleştirmek için kullanılır.
    slice   : dilimlemek anlamındadır. Diziyi istenilen yerden bölüp dizi oluşturur.
    length  : dizinin uzunluğunu verir.
    reverse : dizinin elemanlarını ters çevirir.
    split   : bölmek anlamındadır. Belirli bir ifadeye göre bölüp diziye çevirmek.
    indexOf : elemanın index numarsını verir.
    includes: veilen elemanı içeriyor mu kontrol eder?

*/

let arabalar1 = ["bmw", "toyota", "mercedes", "porsche"];
let arabalar2 = ["KIA","mazda"];

// PUSH METOT
// console.log(arabalar);
// arabalar.push("opel");
// console.log(arabalar);


// UNSHIFT METOT
// console.log(arabalar);
// arabalar.unshift("opel");
// console.log(arabalar);


// POP METOT
// let silinenArabalar = arabalar.pop();
// console.log(arabalar);
// console.log(silinenArabalar); // log kayıtlarında kullanılabilir.


// SHIFT METOT
// let silinen = arabalar.shift();
// console.log(arabalar);
// console.log(silinen);


// SPLICE METOT
// console.log(arabalar);
// arabalar.splice(2,0,"hundai"); // ilk yazdığın yer başlangıç indeksi, ikinci kısmı kaç tane olduğu(count)
// console.log(arabalar);
// arabalar.splice(1,2);   // Silme işlemi için de kullanılır.
// console.log(arabalar);
// arabalar.splice(2,2,"audi"); // Burada indeks 2 olandan başlayıp 2 eleman siler sonrasında "audi" ekler.
// console.log(arabalar);

// TOSTRING METOT
// console.log(typeof arabalar)
// let stringArabalar = arabalar.toString();
// console.log(typeof stringArabalar);

// jOIN METOT
// let stringArabalar = arabalar.join("-");
// console.log(stringArabalar);

// CONCAT METOT
// let birlesmisDizi = arabalar1.concat(arabalar2);
// console.log(birlesmisDizi);

//SLICE METOT
// console.log(arabalar1);
// let ayriDizi = arabalar1.slice(2,2); // index numarası, count değerini gir.
// console.log(ayriDizi);


// LENGTH ÖZELLİK
// console.log(arabalar1.length);

// REVERSE METOT
// console.log(arabalar1);
// arabalar1.reverse();
// console.log(arabalar1);


// SPLIT METOT
// let isimler = ["Enes,Ali,Veli"];
// let isimlerDizi = isimler.split(",");
// console.log(typeof isimlerDizi);


// INDEXOF METOT

let index = arabalar1.indexOf("mercedes");
console.log(index);
// INCLUDES METOT
// let sonuc = arabalar1.includes("bmw");
// if(sonuc){
//     console.log("eleman vardır");
// }
// else{
//     console.log("Eleman yoktur.");
// }