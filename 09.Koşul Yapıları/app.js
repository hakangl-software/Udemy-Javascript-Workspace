

//? --------------KOŞULLU YAPILAR ---------------

// if (koşul) {
//     //kodlar
// }
// else{
//     //kodlar
// }

// let not = 65;

// if (not>50) {
//     console.log("Getiniz , notunuz:" + not);
// } else {
//     console.log("Geçemedniz , notunuz:" + not);
// }


//? ------------DERS ORTALAMASI BULMA ÖRNEĞİ -----------------

// vize %30, vize %30, final %40

let vize1 = Number(prompt("vize1 notunu giriniz: "));
let vize2 = Number(prompt("vize2 notunu giriniz:"));
let final = Number(prompt("final notunu giriniz:"));

let ortalama = ((vize1*0.3)+(vize2*0.3)+(final*0.4));

if(ortalama>=60){
    console.log("Dersten geçtiniz  tebrikler. Notunuz: " + ortalama);
}
else{
    console.log("Maalesef dersten kaldınız. Notunuz: "+ ortalama);
}

















