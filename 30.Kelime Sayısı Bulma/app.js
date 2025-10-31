
    //? KELİME SAYISI BULMA

    let metin = "Şu an çalışmaktayım.";

    let harf =  prompt("Bir harf giriniz: ");

    let sonuc = bul(harf);
    alert("Harf sonucu: "+sonuc);

     function bul(harf){
        let toplam = 0; 
        for(let i=0; i<metin.length; i++){
            if(metin.charAt(i)===harf){     // Burada index numarasını getirdim.
                toplam+=1;  //for döngsünün dışına yazdım. Her seferinde tekrar etmesin diye.
            }            
        }
        return toplam;
     }