

//? DEĞER VE REFERANS TİPLERİ

/*
    DEĞER PRIMITIVE (İLKEL) VERİ TÜRLERİ

    - String
    - Number
    - Boolean
    - Undedined
    - Null
    - Symbol

    REFERANS (REFERENCE) İLKEL OLMAYAN VERİ TÜRLERİ

    - Array
    - Function
    - Object

*/

// Arada bağ yoktur. Yeni değerini alır ve bağ biter etkilenmez.

// let a = 7;
// let b = a;

// console.log("a: "+a);
// console.log("b: "+b);

// console.log("------------------");
// b=10;

// console.log("a: "+a);
// console.log("b: "+b);


// let dizi1 = [1,2,3];
// let dizi2 = [1,2,3];
// let dizi2 = dizi1;

// if(dizi1==dizi2){
//     console.log("eşittir.");
// }else{
//     console.log("eşit değildir.");
// }

// Burada eşit değil; çünkü referans tipte olduğu için ram bellekteki adresinin farklı olmasıdır.
// Eğer let dizi2 = dizi1; yazarsam dizi2 ile dizi1 aynı yere bakacaklar ve eşit olacaklar.

//! AŞAĞIDAKİ ÖRNEĞİ İYİ İNCELE

// let dizi1 = [1,2,3];
// let dizi2 = dizi1;
// let dizi3 = dizi2;
                            
// dizi2.push(12);
// dizi3.push(25);
// console.log(dizi1);
// console.log(dizi2);
// console.log(dizi3);