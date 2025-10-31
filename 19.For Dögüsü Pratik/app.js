
//? For DÖNGÜSÜ

// 1 den 10 a kadar yazdıralım

// for(let i=1; i<10; i++){
//     console.log(i);
// }


// 1'den 10 kadar olan tek sayıları yazdıralım.
// for(let i=1; i<10; i=i+2){
//     console.log(i);
// }

/*
    Hakan
    Sedef
    Hakan
    Sedef şekilnce yazdıralım
*/

// for(let i=1; i<=10; i++){
//     if(i%2==1){
//         console.log("Hakan");
//     }
//     else{
//         console.log("Sedef");
//     }
// }


// 50'den 1'e kadar olan sayıların toplamını bulalım
let toplam = 0;
for(let i=50; i>=1; i--){
    toplam+=i;
   
}
console.log(toplam);