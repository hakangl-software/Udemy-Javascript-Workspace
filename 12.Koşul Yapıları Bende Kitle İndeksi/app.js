


//? Beden Kitle İndeksi

let kilo = Number(prompt("Kilonuzu giriniz:"));
let boy = Number(prompt("Lütfen boyunuzu giriniz(m):"));
let sonuc = kilo/(boy^2);

if(sonuc<18.5){
console.log("kitle indeksi: " + sonuc + ". İdeal kilonun altındasınız.")
}
else if(sonuc>=18.5 && sonuc<=24.9){
console.log("kitle indeksi: " + sonuc + ". İdeal kilodasınız.")
}
else if(sonuc>=25 && sonuc<=29.9){
console.log("kitle indeksi: " + sonuc + ". İdeal kilonun üstündesiniz.")
}
else if(sonuc>=30 && sonuc<=39.9){
console.log("kitle indeksi: " + sonuc + ". İdeal kilonun çok üstündesiniz.")
}
else if(sonuc>=40){
console.log("kitle indeksi: " + sonuc + ". İdeal kilonun çok üstündesiniz.");
}
