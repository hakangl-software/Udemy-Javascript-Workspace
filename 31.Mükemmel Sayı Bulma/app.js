

/*

    Mükemmel Sayı Bulma

    6 = 1-2-3-6 toplam = 12
    28= 1-2-4-7-14-28 toplam = 56

    Burda bölenlerini kontrol etmem gerekiyor. Bölenlerine bakmam için yarısına kadar olanlar benim için yeterlidir. Yarısından sonra tam bölünmeyecektir.
    Örn: 10 sayısı yarısı 5 tir. 6-7-8-9 a kadar olan sayılara tam bölünmemektedir.
*/

    let number = Number(prompt("Lütfen bir sayı giriniz: "));

    isPerfectNumber(number)

    function isPerfectNumber(number){
        let toplam = 0;
        for(let i=2; i<=number/2; i++){
             if(number%i==0){
                toplam+=i;
            }
        }
        toplam+=1+number; 
        if(toplam == number*2){
            alert("Mükemmel sayıdır.")
        }
        else
        {
            alert("Mükemmel sayı değildi.")
        }

    }


