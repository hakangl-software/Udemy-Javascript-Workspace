

//? DİZİLERE BAŞLAYALIM

// ALTGR + 8 ve 9 []

let sayilar = [0,1,2,3,4,5,"Hakan",7,8,9,"Yasin"];

console.log(sayilar[6]);    // Burada 6. index numarsındaki elemanı getir demek.

// Yasin değerini Doğan yap.

sayilar[10] = "Doğan";
console.log(sayilar[10]);

sayilar[sayilar.length-1] = "Ahmet" // dizinin son elemanını verir.

console.log(sayilar[sayilar.length-1]);
console.log(sayilar[10]);


let isimler = ["Hakan", "Yasin", "Doğan", "Ahmet"];
console.log(isimler);

let karisikDizi = [1,"Enes", 5.7, true, null, undefined];
console.log(karisikDizi[3]);


let dizi1 = ["Hakan", "Sedef"];                  //İksisi de aynı şey. İkisinde de dizi oluşturulabilir.
let dizi2 = new Array("Yaso", "Dodo");           // Burda da 

dizi1[0] = "Enes";                          
dizi2[1] = "Ali";



// foreach: bu döngüsünü biz dizilerde kullanıyoruz

// FOREACH DÖNGÜSÜ

let names = ["Enes","Yakup", "Bilal", "Kübra", "Ayşenur", "Adem"];

names.forEach(function(name){
    console.log(name); 
});

// FOR DÖNGÜSÜ

for(let i=0; i<names.length; i++){
    console.log(names[i]);
}


// WHILE DÖNGÜSÜ

let sayac = 0;
while(sayac<names.length){
    console.log(names[sayac]);
    sayac++;
}



















