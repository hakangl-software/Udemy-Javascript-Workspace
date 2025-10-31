

//? WHILE DÖNGÜSÜ

let i = 0;

while(i<=10){
    console.log(i);

    i++;    // eğer bu değeri arttırmazsak sonsuz döngüye girer. Srekli olarak 1 değeri gelir. 1 10 dan küçük olduğu için döngü sürekli çalışır.
}


let sayac = 1;
while(sayac<=10){
    if(sayac%2==1){
        console.log("Tek sayılar: "+sayac)
    }
    else{
        console.log("Çift sayılar: "+sayac)
    };
    sayac++;
}


let s = 1;
while(true){        //Ömür boyu çalışacak bir kod break ile durduruyoruz.
    console.log(s); //Burada eğer console.log aşağıda yazılırsa 7 sayısını yazmaz ondan yukarı yazdık.
    if(s==7){
        break;
    }
    s++;
}