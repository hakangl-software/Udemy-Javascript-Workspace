

// 1 'den 10 a kadar yazdıralım

// let i = 1;

// do {
//     console.log(i);
//     i++;    
// } while (i<=10);


// let yas = 23;

// do {
//     console.log("Ehliyet alabilirsin.");  // Burada İlk olarak koşul sağlanmasa bile bir defa çalışacak. 
// } while (yas>=25);

// 1 den 20 ye kadar olan satek ve çift sayıları yoplayalım.

let i = 0;
let toplam = 0;

do {
    if(i%2==0){
        toplam+=i;
        console.log("Çift sayılar toplamı: "+i);
    }
    else{
        toplam+=i;
        console.log("Tek sayıların toplamı: "+i);
    }
      i++;
} while (i<=20);
