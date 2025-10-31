

//? GERİYE DEĞER DÖNEN METODLAR


let donenDeger = cube(2); // 2 - return sayesinde dıaşrıya erişimini açıyorum. Aldığı değeri geriye olarak çağırıldığı metoda döner.

kareAl(donenDeger);


function kareAl(kareSayi){
    let sonuc = kareSayi*kareSayi;
    console.log(sonuc);
}



function cube(cubeSayi){
    let sonuc = cubeSayi*cubeSayi*cubeSayi; // 1 - Burda sonuc parantez içinde olduğu için dışarıdan erişemiyorum. Bunu dışardan erişimimi sağlayan kelime "return"
    
    //kareAl(donenDeger);
    return sonuc;
    console.log("Hakan");
}
    //! 1- return bir değeri metodun dışına çıkartmak, taşımak için kullanılır.
    //! 2 - return altına yazılan kodlar geçersizdir.
    //! 3 - Metod içinde metod çağırılabilir. 21. satırda örnek var.

    yazdir();
    function yazdir(){      // void metod: Geriye değer döndürmeyen metod
        console.log("Hakan");
    }