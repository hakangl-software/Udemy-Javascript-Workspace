

// DECIMAL TI BINARY CONVERT

// decimal = 10 luk sayı demek
// binary = 2 lik sayı demek

convertDecimalToBinary(25);


function convertDecimalToBinary(number){
    let binary = "";    
    while(true){        // sonsuza kadar döner.
        binary+=(number%2).toString(); // string olması lazım yan yana birleştirmek için
        number=Math.floor(number/2);// 2 ye böldüğünde küsürat varsa küsüratı atar
        if(number==1){
            binary+=1;
            break;
        }
    }
    let result = reverse(binary);
    console.log("Sonuç: "+ result);
};

// Burada bunu yazmamızın amacı string olarak birleştiğimde 101001 olması gereken 2 lik dizi 100101 olarak geliyor. Yani tam tersi geliyor. Sonucu aşağıdaki fonksiyonla tersine çevireceğiz.


function reverse(binary){
    let reverseBinary="";
    for(let i= binary.length-1; i>=0; i--){
        reverseBinary+=binary.charAt(i);
    }
    return reverseBinary;
}

