

//?  DATE KULLANIMI

let tarih = new Date();
// console.log()

console.log(tarih.getFullYear()); // tarihin yılını verir.
console.log(tarih.getDate()); // tarihin ay olarak gününü verir.
console.log(tarih.getDay());  // tarihin haftanın kaçıncı gününü verir.
console.log(tarih.getHours()); // saati verir.
console.log(tarih.getMinutes());
console.log(tarih.getMilliseconds());
console.log(tarih.getMonth()); // aylar sıfırdan başlar DİKKAT!!
console.log(tarih.getSeconds()); // anlık saniye değerini verir.
console.log(tarih.toLocaleDateString()); // 04.11.2025 düzeninde tarih verir.
console.log(tarih.toLocaleTimeString()); // 15:55:00 düzeninde saati verir.
console.log(tarih.toLocaleString()); // 04.11.2025 15:55:00 düzeninde tarih verir.


// SET METOTLARI
console.log(tarih);
tarih.setDate(24); // tarih gününü değiştirir.
tarih.setHours(15); // tarih saatini değişitirir.
tarih.setMonth(11); // tarih ayını değiştirir ancak aylar sıfırdan başlar DİKKAT
tarih.setMinutes(50); //taraihin dakikasını değiştirir.
console.log(tarih);