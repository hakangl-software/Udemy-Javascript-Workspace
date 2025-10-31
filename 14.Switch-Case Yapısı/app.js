//? SWITCH_CASE YAPISI

let sayi = prompt("Lütfen 1 ile 5 arasında bir sayı giriniz: ");

switch (sayi) {
  case "1":
    console.log("Girilen sayı 1'dir.");
    break;
  case "2":
    console.log("Girilen sayı 2'dir.");
    break;
  case "3":
    console.log("Girilen sayı 3'tür.");
    break;
  case "4":
    console.log("Girilen sayı 4'tür.");
    break;
  case "5":
    console.log("Girilen sayı 5'tir.");
    break;
    default:
    console.log("Lütfen 1 ile 5 arasında bir rakam giriniz.")
    break;
}
