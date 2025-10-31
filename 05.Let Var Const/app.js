

 //? Var-Let-Const Tanımları


/*
var/let/Const degiskenIsmi = degiskenDegeri;
let sayi = 10;
*/

// function selamVer(){
//     var selam = "Herkese selam";
//     console.log(selam);
// } //TODO : Burada var ile tanımlandığı için block scope da olsa fonk. scope olarak algılar. Erişimi diğerlerinden daha geniştir. Bu nedenle de ram de fazla yer kaplar.

// selamVer();


// var a = 5;
// var a = 10; 
// console.log(a); //TODO: var ile yazdığımda ilk olarak 5 sonra 10 yazar.

// if(true){
//     let a=5;  //TODO:  Ama let ve Const için bunu yapamazsın.
//     let a=10;
// }


//LET ile CONST arasındaki fark

//const(constant): sabit değişmez

// let b= 5;
//   b= 7;     
//   b=5;
//   console.log(b);
 //TODO: Burada aynı değeri değiştirebilrisiniz. Ama Const değişkeninde bu olmaz.

 const user = {
    username:"hakan",
    password:"123"
 };

 user.username="hakangl";
 console.log(user);
//TODO: bu şekilde const değişkeninde değişiklik yapabilirsin

