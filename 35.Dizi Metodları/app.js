
//TODO: DİZİ METODLARI

/*
    push    : dizininsonuna eleman ekler, ayrıca dizinin uzunluğunu döner. 
    unshift : dizini başına eleman ekler, eleman sayısını geriye döner.

    pop     : dizinin sonundan eleman siler, silinen elemanı döner.
    shift   : dizinin başından eleman siler, eleman sayısını döner.

    splice(index, incdex): Türkçe'si iki ucu birleştirmek anlamına geliyor. Eleman eklemek ya da silmek için kullanılır.
    
    
    toString: diziyi stringe çevirir.

*/

let arabalar = ["bmw", "toyota", "mercedes", "porsche"];

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

//TOSTRING METOT
let stringArabalar = arabalar.toString();
console.log(arabalar);